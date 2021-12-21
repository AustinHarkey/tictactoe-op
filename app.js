let game = (() => {
    let board = [, , , , , , , , ];
    let player = 'x';
    let boardTiles = document.querySelectorAll('.game__tile');
    let getTileIndex = (e) => {
        let i =  e.target.dataset.index;
        if (typeof board[i] == 'undefined') {
            if(player == 'x') {
                board[i] = 'x';
                e.target.textContent = board[i];
                player = 'o';
            } else {
                board[i] = 'o';
                e.target.textContent = board[i];
                player = 'x';
            }
            console.log(board);
        } else {
            return;
        }
    }
    let tiles = boardTiles.forEach((tile, idx) => {
        tile.dataset.index = idx;
        tile.addEventListener('click', getTileIndex);
    });
})();

