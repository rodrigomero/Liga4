import { Board }  from "./models/board_model.js";
import { Player } from "./models/player_model.js";
import { Cell }   from "./models/cell_model.js"

let playerRo = new Player("Rodrigo", "player1")
let player2 = new Player("lucasw", "player2")
let board = new Board(6,6,[playerRo, player2])
const container = document.getElementById('table')
board.renderMap(container)

