# Tic Tac Toe Game

## Overview

This is a **Tic Tac Toe** game built with **JavaScript**, **HTML**, and **CSS**. The project focuses on DOM manipulation, modular JavaScript, and creating a responsive, interactive experience. It features smooth transitions and a simple UI design, making it both engaging and user-friendly.

## Features

- **Interactive Gameplay**: Play a classic game of Tic Tac Toe with a friend.
- **Dynamic UI**: Updates the board and status messages in real-time.
- **Winning Highlight**: Highlights the winning combination when a player wins.
- **Draw Detection**: Detects when the game ends in a draw.
- **Restart Option**: Provides a restart button at the end of each game.
- **Smooth Transitions**: Includes animations for a polished user experience.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and animations.
- **JavaScript (ES6)**: Game logic and DOM manipulation.

## Project Structure

```
.
├── index.html        # Main HTML file
├── style.css         # CSS file for styling
├── script.js         # JavaScript file for game logic
```

## How to Play

1. Open the `index.html` file in your browser.
2. Click the "Play" button to start the game.
3. Players take turns clicking on the cells of the game board:
   - Player 1 uses **X**.
   - Player 2 uses **O**.
4. The game ends when:
   - One player gets three in a row (horizontally, vertically, or diagonally).
   - All cells are filled without a winner (draw).
5. The game status is displayed at the top:
   - Whose turn it is.
   - Winning message or draw notification.
6. Click "Restart Game" to play again.

## Game Logic

The game logic is split into three main components:

1. **GameBoard Class**:
   - Manages the state of the board.
   - Handles player moves and resets the board.

2. **Player Factory Function**:
   - Creates player objects with a specified figure (**X** or **O**).

3. **GameController Module**:
   - Manages game flow and interactions between the players and the board.
   - Handles turn switching, move validation, and win/draw checks.

## CSS Animations

The project includes several animations to enhance the user experience:

- **Fade Transitions**: Smooth transitions between the intro screen and the game screen.
- **Hover Effects**: Interactive button effects for better feedback.
- **Winning Highlight**: Highlights the winning cells with a different color.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kacpersmaga/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Open `index.html` in your browser to start playing.

## Future Improvements

- Add an **AI opponent** for single-player mode.
- Improve the responsiveness of the UI for better mobile support.
- Include a scoreboard to track wins and losses.
- Enhance animations and sound effects for a more immersive experience.

## Screenshots


![image](https://github.com/user-attachments/assets/9acd52b6-e03b-4771-b2f8-360a8a170bbd)
![image](https://github.com/user-attachments/assets/994bcf1b-74eb-46b9-9c8e-9db0c2e1d9bb)
![image](https://github.com/user-attachments/assets/a4889181-51a4-4408-98f0-4cd432c25349)



## Author

Kacper Smaga
