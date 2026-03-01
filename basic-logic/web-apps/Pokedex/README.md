# Pokédex Search

A sleek, retro-style Pokédex application built with HTML, CSS (Tailwind), and JavaScript. It uses the [PokeAPI](https://pokeapi.co/) to provide comprehensive data for all known Pokémon.

## Features

- **Multi-Tab Data Display**: Categorized information for a clean user experience.
  - **About**: Weights, Heights, Base Experience, and Types.
  - **Stats**: Animated base stat bars (HP, Attack, Defense, etc.).
  - **Abilities**: Full list of abilities including Hidden ones.
  - **Moves**: Scrollable list of moves the Pokémon can learn.
  - **Gallery**: A collection of various sprites including shiny and back views.
- **Audio Cries**: Play the actual cry for almost every Pokémon.
- **Retro Aesthetic**: Custom pixel-art borders and "Press Start 2P" typography.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Screenshots

<div align="center">
  <img src="screenshots/mewtwo_about.png" alt="Mewtwo About Tab" width="400">
  <br>
  <em>About section and Stats</em>
</div>

<<<<<<< HEAD
<div align="center">
  <img src="screenshots/mewtwo_gallery.png" alt="Mewtwo Gallery" width="400">
  <br>
  <em>Sprite Gallery showing various forms</em>
</div>
=======
>>>>>>> 5d7a34b2b7c08690a429a1bd8af40464325be130

## Technical Implementation

- **API Integration**: Fetches from PokeAPI's REST endpoints using asynchronous JavaScript.
- **UI Logic**: Custom tab switching system and dynamic list rendering.
- **CSS Styling**: Combines Tailwind CSS utility classes with Vanilla CSS for complex retro effects (like pixelized borders).

## How to Run

Simply open `index.html` in your browser, or serve it using a local server:

```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.
