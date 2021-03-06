import * as $ from "jquery";
import sceneManager from "../SceneManager";
import newGame from "../games/CrossZero";
import { getElementById } from "../utils";

sceneManager.register({ id: "future", next: "end" });

getElementById("future_trigger").addEventListener("click", initHandler);

getElementById("future_run-next").addEventListener("click", runNextHandler);

let game;

/**
 *
 */
function stateChanged(gameState, whoseMove) {
    if (gameState === 2) {

        setTimeout(function() {
            $("#future_finish").removeClass("re-hidden");
            $("#future_game-field").addClass("re-hidden");
        }, 1500);
    }

    if (gameState === 3 || gameState === 4) {
        setTimeout(function() {
            game = newGame({ stateChanged });
        }, 1500);
    }

    if (whoseMove === 1) {
        $("#future_game-text").textContent = 'Твой ход!';
    } else {
        $("#future_game-text").textContent = 'Ход за 2021!';
    }
}

function initHandler() {
    game = newGame({ stateChanged });
    $("#future_preview").fadeOut().delay(1000).addClass("re-hidden");
    $("#future_game-field").removeClass("re-hidden").fadeIn();
}

function runNextHandler() {
    sceneManager.next();
}
