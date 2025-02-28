# Wordle Game

![Screenshot from 2025-02-28 20-05-31](https://github.com/user-attachments/assets/5fc378c8-6e5e-4e3a-8a4a-236c272a7417)

## Overview

This is a simple implementation of the Wordle game built with React. The game allows players to guess a 5-letter word within a limited number of attempts. The game provides real-time feedback for each guess by highlighting letters in different colors based on their accuracy:

- **Green:** Correct letter in the correct position.
- **Yellow:** Correct letter in the wrong position.
- **Gray:** Incorrect letter not in the word.

## Features

### 1. **Error Messages**
   - Displays helpful error messages when the player provides an invalid guess.
   - **Messages:**
     - "Not enough letters" if the guess is not 5 characters long. => it disables keyboard for some seconds and then enables it.
     - "Not in word list" if the guess is not part of the word list. => it disables all letters and just by hitting backspace typing is allowed.

### 2. **Task Management**
   - Each guess is recorded and displayed in a list, where the user receives color-coded feedback (green, yellow, or gray).

![Screenshot from 2025-02-28 20-06-45](https://github.com/user-attachments/assets/c02499c0-8f0f-47ba-8ba6-b2bba5512056)

![Screenshot from 2025-02-28 19-25-34](https://github.com/user-attachments/assets/d123c11d-d051-419b-9176-cf83fff8b8a3)

![Screenshot from 2025-02-28 19-26-31](https://github.com/user-attachments/assets/837775e6-f094-44c2-9860-7360b4cdbd75)

![Screenshot from 2025-02-28 19-29-44](https://github.com/user-attachments/assets/c11bae93-c4b1-4826-a48f-50b3b3ae8065)

![Screenshot from 2025-02-28 19-34-46](https://github.com/user-attachments/assets/5a4a995e-65b4-4609-bf68-43cea14f13ba)

![Screenshot from 2025-02-28 19-34-52](https://github.com/user-attachments/assets/c84179b0-fe09-4ed9-848d-b1b6097a9e6d)

#### Worthy to note that the first "L" is considered as in the wrong spot and last one is in the correct place.

![Screenshot from 2025-02-28 19-48-58](https://github.com/user-attachments/assets/351369f0-63e4-419d-823c-0f816f7ab6f9)

### 3. **Responsive Design**
   - The game is fully responsive, adjusting to different screen sizes (mobile, tablet, desktop) for an optimal experience on any device.
