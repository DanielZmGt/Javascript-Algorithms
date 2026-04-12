document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const locationInput = document.getElementById('location-input');
    const searchBtn = document.getElementById('search-btn');
    const apiKeyInput = document.getElementById('api-key-input');
    const saveKeyBtn = document.getElementById('save-key-btn');
    
    const targetName = document.getElementById('target-name');
    const targetCoords = document.getElementById('target-coords');
    const currentTemp = document.getElementById('current-temp');
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

    // Load saved API key
    const savedKey = localStorage.getItem('windyCamsApiKey');
    if (savedKey) {
        apiKeyInput.value = savedKey;
    }

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
    const styleTemperature = (element, temp) => {
        element.textContent = Math.round(temp);
        if (temp >= 30) element.style.color = 'var(--temp-hot)';
        else if (temp >= 20) element.style.color = 'var(--temp-warm)';
        else if (temp >= 10) element.style.color = 'var(--temp-mild)';
        else if (temp > 0) element.style.color = 'var(--temp-cold)';
        else element.style.color = 'var(--temp-freezing)';
    };

    const searchLocation = async () => {
        const query = locationInput.value.trim();
        if (!query) return;

        dataStatus.textContent = 'SCANNING...';
        dataStatus.className = 'status-waiting';
        targetName.textContent = 'TARGET: ACQUIRING...';

        try {
            // 1. Geocode
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
            const geoData = await geoRes.json();

            if (!geoData.results || geoData.results.length === 0) {
                throw new Error("Location not found");
            }

            const loc = geoData.results[0];
            currentLat = loc.latitude;
            currentLon = loc.longitude;
            
            targetName.textContent = `TARGET: ${loc.name.toUpperCase()}${loc.country ? ', ' + loc.country.toUpperCase() : ''}`;
            targetCoords.textContent = `LAT: ${currentLat.toFixed(4)} | LON: ${currentLon.toFixed(4)}`;

            // 2. Fetch Weather
            fetchWeather(currentLat, currentLon);

            // 3. Update Windy Map
            updateWindyMap(currentLat, currentLon);

            // 4. Fetch Webcams
            fetchWebcams(currentLat, currentLon);

            dataStatus.textContent = 'DATA ACQUIRED';
            dataStatus.className = 'status-online';
            
        } catch (error) {
            console.error(error);
            dataStatus.textContent = 'ERROR';
            dataStatus.className = 'status-error';
            targetName.textContent = 'TARGET: NOT FOUND';
        }
    };

    const fetchWeather = async (lat, lon) => {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,surface_pressure,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
            const res = await fetch(url);
            const data = await res.json();

            // Update Current
            const current = data.current;
            styleTemperature(currentTemp, current.temperature_2m);
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
        windyIframe.src = `https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=10&overlay=radar&product=radar&level=surface&lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&marker=true`;
    };

    const fetchWebcams = async (lat, lon) => {
        const apiKey = localStorage.getItem('windyCamsApiKey');
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

    searchBtn.addEventListener('click', searchLocation);
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchLocation();
    });
});