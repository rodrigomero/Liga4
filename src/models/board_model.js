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

}