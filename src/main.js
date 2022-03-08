import { Board }  from "./models/board_model.js";
import { Player } from "./models/player_model.js";
import {cell} from "./models/cell_model.js"

let playerRo = new Player("Rodrigo", "player1")
let board = new Board(6,6,[])
const container = document.getElementById('table')
board.renderMap(container)