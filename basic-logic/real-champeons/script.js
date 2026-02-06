const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const coachElement = document.getElementById("head-coach");
const playerCardsContainer = document.getElementById("player-cards");
const selectElement = document.getElementById("players");

const displayPlayers = (arr) => {
    playerCardsContainer.innerHTML = arr.map(({ name, number, position, isCaptain, goalsScored }) => {
        const playerId = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '-');
        return `
            <div class="player-card">
                <img src="images/players/${playerId}.jpg" onerror="this.onerror=null; this.src='images/players/${playerId}.svg'" alt="${name}" class="player-image">
                ${isCaptain ? '<span class="captain-label">CAPTAIN</span>' : ''}
                <div class="player-number">#${number}</div>
                <h2>${name}</h2>
                <p><strong>Position:</strong> ${position.toUpperCase()}</p>
                <p><strong>UCL Goals:</strong> ${goalsScored}</p>
            </div>
        `;
    }).join("");
};

const loadTeamData = async () => {
    try {
        const response = await fetch('./team-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const { team, year, headCoach, players } = data;
        
        teamElement.innerHTML = team;
        yearElement.innerHTML = year;
        coachElement.innerHTML = headCoach;
        
        displayPlayers(players);

        selectElement.addEventListener("change", (e) => {
            const selectedValue = e.target.value;
            if (selectedValue === "all") {
                displayPlayers(players);
            } else {
                const filteredPlayers = players.filter((player) => player.position === selectedValue);
                displayPlayers(filteredPlayers);
            }
        });

    } catch (error) {
        console.error("Could not load team data:", error);
        playerCardsContainer.innerHTML = `<p class="error-message">Failed to load team data. Please try again later.</p>`;
    }
};

loadTeamData();