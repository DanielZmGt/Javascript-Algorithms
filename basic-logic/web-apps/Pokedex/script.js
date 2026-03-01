const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const sprite = document.getElementById('sprite');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const errorMessage = document.getElementById('error-message');

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const fetchData = async (e) => {
    e.preventDefault();
    errorMessage.classList.add('hidden');

    try {
        const creatureNameOrId = searchInput.value.toLowerCase().trim();
        const response = await fetch(`${API_ENDPOINT}${creatureNameOrId}`);

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        displayData(data);
    } catch (err) {
        errorMessage.classList.remove('hidden');
        console.error(err);
    }
};

const displayData = (data) => {
    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    sprite.src = data.sprites.front_default || '';
    sprite.classList.remove('hidden');

    types.innerHTML = '';
    data.types.forEach(typeInfo => {
        types.innerHTML += `<span class="bg-gray-800 text-white px-2 py-1 rounded-sm">${typeInfo.type.name.toUpperCase()}</span>`;
    });

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    const maxStat = 255;
    document.getElementById('hp-bar').style.width = `${(data.stats[0].base_stat / maxStat) * 100}%`;
    document.getElementById('attack-bar').style.width = `${(data.stats[1].base_stat / maxStat) * 100}%`;
    document.getElementById('defense-bar').style.width = `${(data.stats[2].base_stat / maxStat) * 100}%`;
    document.getElementById('special-attack-bar').style.width = `${(data.stats[3].base_stat / maxStat) * 100}%`;
    document.getElementById('special-defense-bar').style.width = `${(data.stats[4].base_stat / maxStat) * 100}%`;
    document.getElementById('speed-bar').style.width = `${(data.stats[5].base_stat / maxStat) * 100}%`;
};

searchForm.addEventListener('submit', fetchData);
