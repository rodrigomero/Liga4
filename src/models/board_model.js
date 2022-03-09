import { Cell } from "./cell_model.js"

export class Board {
    constructor( columns, rows, players) {
        this._columns = columns,
        this._rows = rows,
        this._map = this.createEmptyMap(),
        this._players = players,
        this._currentPlayer = this._players[0]
    }
    get columns() {
        return this._columns
    }
      
    set columns(_) {
        throw 'Cant change this value'
    }
    get rows() {
        return this._rows
    }
      
    set rows(_) {
        throw 'Cant change this value'
    }
    get map() {
        return this._map
    }   
    set map(_) {
        throw 'Cant change this value'
    }
      
    get players() {
        return this._players
    }
      
    set players(_) {
        throw 'Cant change this value'
    }
      
    get currentPlayer() {
        return this._currentPlayer
    }
      
    set currentPlayer(player) {
        if(player){ // Validação se o jogador existe
            this._currentPlayer = player
        }
    }
    createEmptyMap() {
        const map = [];

        for(let i = 0; i < this._rows; i++) {
            map.push(new Array(this._columns));
        }

        return map;
    }

    renderMap(container) {
        container.innerText = "";

        for(let indexColuna = 0; indexColuna < this._columns; indexColuna++){

            const column = document.createElement("div");
            column.classList.add("column");
            column.style.width = `${100/this._columns}%`;
            column.dataset.column = indexColuna;
            column.addEventListener("click", () => {this.handleClick(indexColuna)});

            for(let indexLinha = 0; indexLinha < this._rows; indexLinha++){

                const celula = document.createElement("div");
                celula.classList.add("cell");
                celula.style.height = `${100/this._rows}%`;
                celula.dataset.row = indexLinha;
                column.appendChild(celula);
            }

            container.appendChild(column);
        }
    }

    switchPlayer() {
        
        if(this.currentPlayer === this.players[0]){
            this.currentPlayer = this.players[1]
        }else{
            this.currentPlayer = this.players[0]
        }
    }

    handleClick(column) {
        let row = this.map.findIndex(row => {
            return row[column]
        });

        if(row === -1) {
            row = this.rows;
        }
        this.map[row - 1][column] = this.currentPlayer;

        const cell = new Cell(column, row, this.currentPlayer.className);

        cell.render();
        if(this.isWinnableMove(column,row-1)) {
            console.log(`${this.currentPlayer.name} ganhou`)
        }
        this.switchPlayer();
    }

    isWinnableMove(column, row) {
        return this.checkVertical(column, row)
    }

    checkVertical (column, row) {
        let end = row + 3;

        if(end >= this.rows){
            end = this.rows - 1;
        }

        let counter = 0;
        for(let index = row; index <= end; index++) {
            if(this.map[index][column] === this.currentPlayer) {
                counter++;
            }else {
                counter = 0;
            }
            if (counter ===4 ) {
                return true;
            }
        }
        return false;
    }


}