import { Board }  from "./models/board_model.js";
import { Player } from "./models/player_model.js";

const board = new Board(3,3,["zeze", "luciano"])
console.log(board.map)