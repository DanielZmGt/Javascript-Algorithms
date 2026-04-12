document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const locationInput = document.getElementById('location-input');
    const searchBtn = document.getElementById('search-btn');
    const locateBtn = document.getElementById('locate-btn');
    const apiKeyInput = document.getElementById('api-key-input');
    const saveKeyBtn = document.getElementById('save-key-btn');
    
    const targetName = document.getElementById('target-name');
    const targetCoords = document.getElementById('target-coords');
    const currentTemp = document.getElementById('current-temp');
    const unitToggle = document.getElementById('unit-toggle');
    const currentDesc = document.getElementById('current-desc');
    const currentIcon = document.getElementById('current-icon');
    const currentWind = document.getElementById('current-wind');
    const currentHumidity = document.getElementById('current-humidity');
    const currentPressure = document.getElementById('current-pressure');
    const currentClouds = document.getElementById('current-clouds');
    
    const dataStatus = document.getElementById('data-status');
    const windyIframe = document.getElementById('windy-iframe');
    const radarPlaceholder = document.getElementById('radar-placeholder');
    const forecastContainer = document.getElementById('forecast-container');
    const camsContainer = document.getElementById('cams-container');

    const tabBtns = document.querySelectorAll('.tab-btn');
    const feedContents = document.querySelectorAll('.feed-content');

    // State
    let currentLat = 0;
    let currentLon = 0;
    let currentUnit = 'C';
    let envApiKey = null;
    
    // Public API Key (Secured via Windy Dashboard Domain Restriction to GitHub Pages)
    const PROD_API_KEY = '3GNUivP8eTsmH5t71wdnzElx0pTdiLad';

    // Attempt to load .env file
    const loadEnv = async () => {
        try {
            const res = await fetch('.env');
            if (res.ok) {
                const text = await res.text();
                const lines = text.split('\n');
                lines.forEach(line => {
                    const [key, val] = line.split('=');
                    if (key && val && key.trim() === 'WINDY_API_KEY') {
                        envApiKey = val.trim();
                        apiKeyInput.value = '*** ENV KEY ACTIVE ***';
                        apiKeyInput.disabled = true;
                        saveKeyBtn.disabled = true;
                    }
                });
            }
        } catch (e) {
            console.log('No .env file found or accessible. Using local storage fallback.');
        }
        
        if (!envApiKey) {
            // Load saved API key from storage if .env is not present
            const savedKey = localStorage.getItem('windyCamsApiKey');
            if (savedKey) {
                apiKeyInput.value = savedKey;
            }
        }
    };
    
    loadEnv();

    saveKeyBtn.addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem('windyCamsApiKey', key);
            saveKeyBtn.style.color = 'var(--militia-blue)';
            setTimeout(() => saveKeyBtn.style.color = '', 1000);
            if (currentLat && currentLon) fetchWebcams(currentLat, currentLon);
        } else {
            localStorage.removeItem('windyCamsApiKey');
        }
    });

    unitToggle.addEventListener('click', () => {
        currentUnit = currentUnit === 'C' ? 'F' : 'C';
        unitToggle.textContent = `°${currentUnit}`;
        if (currentLat && currentLon) {
            fetchWeather(currentLat, currentLon);
            updateWindyMap(currentLat, currentLon);
        }
    });

    // Tab Switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            feedContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.add('active');
        });
    });

    // Weather Code mapping to FontAwesome icons and descriptions
    const getWeatherDetails = (code, isDay = 1) => {
        const map = {
            0: { desc: 'Clear Sky', icon: isDay ? 'fa-sun' : 'fa-moon' },
            1: { desc: 'Mainly Clear', icon: isDay ? 'fa-cloud-sun' : 'fa-cloud-moon' },
            2: { desc: 'Partly Cloudy', icon: 'fa-cloud' },
            3: { desc: 'Overcast', icon: 'fa-cloud' },
            45: { desc: 'Fog', icon: 'fa-smog' },
            48: { desc: 'Depositing Rime Fog', icon: 'fa-smog' },
            51: { desc: 'Light Drizzle', icon: 'fa-cloud-rain' },
            53: { desc: 'Moderate Drizzle', icon: 'fa-cloud-rain' },
            55: { desc: 'Dense Drizzle', icon: 'fa-cloud-showers-heavy' },
            61: { desc: 'Slight Rain', icon: 'fa-cloud-rain' },
            63: { desc: 'Moderate Rain', icon: 'fa-cloud-rain' },
            65: { desc: 'Heavy Rain', icon: 'fa-cloud-showers-heavy' },
            71: { desc: 'Slight Snow', icon: 'fa-snowflake' },
            73: { desc: 'Moderate Snow', icon: 'fa-snowflake' },
            75: { desc: 'Heavy Snow', icon: 'fa-snowflake' },
            80: { desc: 'Slight Rain Showers', icon: 'fa-cloud-rain' },
            81: { desc: 'Moderate Rain Showers', icon: 'fa-cloud-showers-heavy' },
            82: { desc: 'Violent Rain Showers', icon: 'fa-cloud-showers-water' },
            95: { desc: 'Thunderstorm', icon: 'fa-bolt' },
            96: { desc: 'Thunderstorm w/ Hail', icon: 'fa-poo-storm' },
            99: { desc: 'Heavy Thunderstorm', icon: 'fa-poo-storm' }
        };
        return map[code] || { desc: 'Unknown', icon: 'fa-satellite' };
    };

    // Apply color styling to temperature
    const styleTemperature = (element, temp, unit) => {
        element.textContent = Math.round(temp);
        let tempC = unit === 'F' ? (temp - 32) * 5/9 : temp;

        if (tempC >= 30) element.style.color = 'var(--temp-hot)';
        else if (tempC >= 20) element.style.color = 'var(--temp-warm)';
        else if (tempC >= 10) element.style.color = 'var(--temp-mild)';
        else if (tempC > 0) element.style.color = 'var(--temp-cold)';
        else element.style.color = 'var(--temp-freezing)';
    };

    const fetchWeather = async (lat, lon) => {
        try {
            const tempUnitParam = currentUnit === 'F' ? 'fahrenheit' : 'celsius';
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,surface_pressure,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&temperature_unit=${tempUnitParam}`;
            const res = await fetch(url);
            const data = await res.json();

            // Update Current
            const current = data.current;
            styleTemperature(currentTemp, current.temperature_2m, currentUnit);
            currentWind.textContent = `${current.wind_speed_10m} km/h`;
            currentHumidity.textContent = `${current.relative_humidity_2m} %`;
            currentPressure.textContent = `${current.surface_pressure} hPa`;
            currentClouds.textContent = `${current.cloud_cover} %`;

            const details = getWeatherDetails(current.weather_code, current.is_day);
            currentDesc.textContent = details.desc;
            currentIcon.innerHTML = `<i class="fas ${details.icon}"></i>`;

            // Update Forecast
            updateForecast(data.daily);

        } catch (error) {
            console.error('Weather fetch error', error);
        }
    };

    const updateForecast = (daily) => {
        forecastContainer.innerHTML = '';
        // Skip today (index 0), show next 5 days
        for (let i = 1; i <= 5; i++) {
            if (!daily.time[i]) break;
            
            const dateStr = daily.time[i];
            const dateObj = new Date(dateStr);
            const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
            
            const maxT = Math.round(daily.temperature_2m_max[i]);
            const minT = Math.round(daily.temperature_2m_min[i]);
            const code = daily.weather_code[i];
            const details = getWeatherDetails(code, 1);

            const dayEl = document.createElement('div');
            dayEl.className = 'forecast-day';
            dayEl.innerHTML = `
                <div class="f-date">${dayName}</div>
                <div class="f-icon"><i class="fas ${details.icon}"></i></div>
                <div class="f-temps">
                    <span class="f-high">${maxT}°</span>
                    <span class="f-low">${minT}°</span>
                </div>
            `;
            forecastContainer.appendChild(dayEl);
        }
    };

    const updateWindyMap = (lat, lon) => {
        radarPlaceholder.style.display = 'none';
        windyIframe.style.display = 'block';
        const mapTempUnit = currentUnit === 'F' ? '°F' : '°C';
        windyIframe.src = `https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=${mapTempUnit}&metricWind=km/h&zoom=10&overlay=radar&product=radar&level=surface&lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&marker=true`;
    };

    const fetchWebcams = async (lat, lon) => {
        const apiKey = envApiKey || localStorage.getItem('windyCamsApiKey');
        if (!apiKey) {
            camsContainer.innerHTML = `
                <div class="cam-status">
                    <i class="fas fa-video-slash"></i>
                    <p>NO VISUAL UPLINK ESTABLISHED</p>
                    <p class="small">Provide Windy Webcams API key to access live feeds.</p>
                </div>
            `;
            return;
        }

        camsContainer.innerHTML = '<div class="placeholder-text" style="position:static; transform:none; margin:auto;">CONNECTING TO VISUAL FEEDS...</div>';

        try {
            // Windy Webcams API (v3)
            const res = await fetch(`https://api.windy.com/webcams/api/v3/webcams?nearby=${lat},${lon},25&limit=4&include=images`, {
                headers: { 'x-windy-api-key': apiKey }
            });
            const data = await res.json();

            if (data.webcams && data.webcams.length > 0) {
                camsContainer.innerHTML = '';
                data.webcams.forEach(cam => {
                    const imgUrl = cam.images.current.preview;
                    const el = document.createElement('div');
                    el.className = 'cam-item';
                    el.innerHTML = `
                        <img src="${imgUrl}" alt="${cam.title}" onerror="this.src='https://via.placeholder.com/300x200/12181f/ff4500?text=NO+SIGNAL'">
                        <div class="cam-title">${cam.title}</div>
                    `;
                    camsContainer.appendChild(el);
                });
            } else {
                camsContainer.innerHTML = `
                    <div class="cam-status">
                        <i class="fas fa-eye-slash"></i>
                        <p>NO CAMERAS DETECTED IN SECTOR</p>
                    </div>
                `;
            }
        } catch (err) {
            console.error('Cam fetch error', err);
            camsContainer.innerHTML = `
                <div class="cam-status">
                    <i class="fas fa-exclamation-triangle" style="color:var(--hostile-orange);"></i>
                    <p>UPLINK FAILED / INVALID KEY</p>
                </div>
            `;
        }
    };

    const processCoords = async (lat, lon, targetNameStr) => {
        currentLat = lat;
        currentLon = lon;
        
        targetName.textContent = `TARGET: ${targetNameStr.toUpperCase()}`;
        targetCoords.textContent = `LAT: ${currentLat.toFixed(4)} | LON: ${currentLon.toFixed(4)}`;

        fetchWeather(currentLat, currentLon);
        updateWindyMap(currentLat, currentLon);
        fetchWebcams(currentLat, currentLon);

        dataStatus.textContent = 'DATA ACQUIRED';
        dataStatus.className = 'status-online';
    };

    const searchLocation = async () => {
        const query = locationInput.value.trim();
        if (!query) return;

        dataStatus.textContent = 'SCANNING...';
        dataStatus.className = 'status-waiting';
        targetName.textContent = 'TARGET: ACQUIRING...';

        try {
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
            const geoData = await geoRes.json();

            if (!geoData.results || geoData.results.length === 0) {
                throw new Error("Location not found");
            }

            const loc = geoData.results[0];
            const tName = `${loc.name}${loc.country ? ', ' + loc.country : ''}`;
            
            await processCoords(loc.latitude, loc.longitude, tName);
            
        } catch (error) {
            console.error(error);
            dataStatus.textContent = 'ERROR';
            dataStatus.className = 'status-error';
            targetName.textContent = 'TARGET: NOT FOUND';
        }
    };

    locateBtn.addEventListener('click', () => {
        if ("geolocation" in navigator) {
            dataStatus.textContent = 'DETECTING...';
            dataStatus.className = 'status-waiting';
            targetName.textContent = 'TARGET: LOCAL ACQUISITION...';

            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                let locName = 'LOCAL SECTOR';
                
                try {
                    const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
                    const geoData = await geoRes.json();
                    if (geoData.city) {
                        locName = `${geoData.city}${geoData.countryCode ? ', ' + geoData.countryCode : ''}`;
                    }
                } catch (e) {
                    console.error("Reverse geocoding failed", e);
                }
                
                locationInput.value = `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
                await processCoords(lat, lon, locName);

            }, (error) => {
                console.error(error);
                dataStatus.textContent = 'LOC ERR';
                dataStatus.className = 'status-error';
                targetName.textContent = 'TARGET: SIGNAL LOST';
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });

    searchBtn.addEventListener('click', searchLocation);
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchLocation();
    });
});