import {renderBoards} from "../components/board.js";
import {renderNavbar} from "../components/navbar.js";
import {debugFun} from "../components/dev_debug.js";
window.isDebug = window.location.href.includes('localhost')
console.log('working')

renderNavbar()
renderBoards()
debugFun()