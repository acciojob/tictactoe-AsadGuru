//your JS code here. If required.

const submitButton = document.getElementById('submit');
        const setupDiv = document.getElementById('setup');
        const gameDiv = document.getElementById('game');
        const messageDiv = document.querySelector('.message');
        const cells = document.querySelectorAll('.cell');
        
        let currentPlayer = 'X';
        let player1Name = '';
        let player2Name = '';
        
        submitButton.addEventListener('click', () => {
            player1Name = document.getElementById('player-1').value;
            player2Name = document.getElementById('player-2').value;
            
            if (player1Name && player2Name) {
                setupDiv.classList.add('hidden');
                gameDiv.classList.remove('hidden');
                updateMessage();
            } else {
                alert('Please enter names for both players.');
            }
        });
        
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (cell.textContent === '' && !checkWinner()) {
                    cell.textContent = currentPlayer;
                    if (checkWinner()) {
                        messageDiv.textContent = `${currentPlayer === 'X' ? player1Name : player2Name} congratulations you won!`;
                    } else if (Array.from(cells).every(cell => cell.textContent)) {
                        messageDiv.textContent = "It's a draw!";
                    } else {
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                        updateMessage();
                    }
                }
            });
        });
        
        function updateMessage() {
            messageDiv.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, you're up`;
        }
        
        function checkWinner() {
            const winningCombos = [
                [1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]
            ];
            
            return winningCombos.some(combo => {
                const [a, b, c] = combo;
                const cellA = document.getElementById(a).textContent;
                const cellB = document.getElementById(b).textContent;
                const cellC = document.getElementById(c).textContent;
                return cellA && cellA === cellB && cellB === cellC;
            });
        }
