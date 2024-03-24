# Tic-Tac-Toe
TTT Deliverable


Pseudocode:

1. Define constants
    1.1: Player colors (player values: 1/-1/null)
    1.2: Define the 8 Winning combinations tracking the indicies of the tiles and comparing them to see if they are all equal to one of the player's values


2. define variables for state
    2.1: Board will represent all tiles
    2.2: turn will represent current player
    2.3: winner will represent 3 end of game conditions (player1 win, player2 win, or no winner)

3. Store reusable HTML elements in variables
    3.1: store the 9 tiles on the board

4. On first load, app should:
    4.1: Initialize state variables
        4.1.1: initialize all tiles as null (empty)
        4.1.2: initialize first player turn
        4.1.3: initialize winner to null (game in progress)
    4.2: Render base state
        4.2.1: Render board
            4.2.1.1: Loop over all tiles and update to current game state
                4.2.1.1.1: Update board array, inserting values based on player actions
                4.2.1.1.2: Set background color of tile to match which player is occupying the space
        4.2.2: Render message
            4.2.2.1: If winner is no longer null, display player turn value (in text) as the winner of the game
            4.2.2.2: If winner is 'T', render tie message
            
    4.3: Wait for user to click squares
        4.3.1: 

5. Handle player clicks

6. Handle replay button