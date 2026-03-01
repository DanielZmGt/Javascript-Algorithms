const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const sprite = document.getElementById('sprite');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const baseExp = document.getElementById('base-exp');
const isDefault = document.getElementById('is-default');
const heldItems = document.getElementById('held-items');
const cryButton = document.getElementById('cry-button');
const pokemonCry = document.getElementById('pokemon-cry');
const abilitiesList = document.getElementById('abilities-list');
const movesList = document.getElementById('moves-list');
const galleryGrid = document.getElementById('gallery-grid');

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const errorMessage = document.getElementById('error-message');

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

// Tab Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');

        // Update Buttons
        tabBtns.forEach(b => {
            b.classList.remove('active', 'bg-gray-800');
            b.classList.add('bg-gray-600');
        });
        btn.classList.add('active', 'bg-gray-800');
        btn.classList.remove('bg-gray-600');

        // Update Content
        tabContents.forEach(content => {
            content.classList.add('hidden');
            if (content.id === `tab-${tabName}`) {
                content.classList.remove('hidden');
            }
        });
    });
});

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
    // Basic Info
    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    baseExp.textContent = `Base Exp: ${data.base_experience}`;
    isDefault.textContent = `Default: ${data.is_default ? 'Yes' : 'No'}`;

    // Main Sprite
    sprite.src = data.sprites.front_default || '';
    sprite.classList.remove('hidden');

    // Cry Logic
    if (data.cries && data.cries.latest) {
        pokemonCry.src = data.cries.latest;
        cryButton.classList.remove('hidden');
    } else {
        cryButton.classList.add('hidden');
    }

    // Types
    types.innerHTML = '';
    data.types.forEach(typeInfo => {
        types.innerHTML += `<span class="bg-gray-800 text-white px-2 py-1 rounded-sm text-[8px] uppercase">${typeInfo.type.name}</span>`;
    });

    // Held Items
    heldItems.innerHTML = data.held_items.length > 0
        ? data.held_items.map(item => `<span class="bg-blue-200 text-blue-800 px-1 rounded-sm">${item.item.name}</span>`).join(' ')
        : 'None';

    // Stats
    const statsMap = {
        'hp': hp,
        'attack': attack,
        'defense': defense,
        'special-attack': specialAttack,
        'special-defense': specialDefense,
        'speed': speed
    };

    data.stats.forEach(stat => {
        const statEl = statsMap[stat.stat.name];
        if (statEl) {
            statEl.textContent = stat.base_stat;
            const bar = document.getElementById(`${stat.stat.name}-bar`);
            if (bar) {
                const maxStat = 255;
                bar.style.width = `${(stat.base_stat / maxStat) * 100}%`;
            }
        }
    });

    // Abilities
    abilitiesList.innerHTML = '';
    data.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.className = 'ability-item';
        li.innerHTML = `<strong>${ability.ability.name.toUpperCase()}</strong> ${ability.is_hidden ? '<span class="text-red-600 font-bold">(HIDDEN)</span>' : ''}`;
        abilitiesList.appendChild(li);
    });

    // Moves
    movesList.innerHTML = '';
    data.moves.forEach((moveItem, index) => {
        if (index < 100) { // Limit to 100 for performance
            const li = document.createElement('li');
            li.className = 'border-b border-gray-800/10 py-1 uppercase';
            li.textContent = moveItem.move.name.replace(/-/g, ' ');
            movesList.appendChild(li);
        }
    });

    // Gallery
    galleryGrid.innerHTML = '';
    const spriteUrls = [
        data.sprites.front_default,
        data.sprites.back_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny,
        data.sprites.other?.['official-artwork']?.front_default,
        data.sprites.other?.home?.front_default,
        data.sprites.other?.['showdown']?.front_default,
        data.sprites.other?.['showdown']?.back_default
    ].filter(url => url);

    spriteUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.className = 'bg-gray-100 rounded-md p-1 border border-gray-300';
        galleryGrid.appendChild(img);
    });
};

cryButton.addEventListener('click', () => {
    pokemonCry.play();
});

searchForm.addEventListener('submit', fetchData);
