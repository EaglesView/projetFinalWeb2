// Fichier principal du moteur de jeu
// Permet de lier toutes les phases du projet ensemble
// ***********************************************
// Auteur : Jean-Marc Bouchard
// ***********************************************

import { UTILS } from "../../shared/utils/utils.js";

export class Engine {
    constructor(gameData) {
        this.node = document.querySelector("#gameFrame"); // l'élément de jeu (div, canvas)
        this.context = "none";                           // permet de creer des contextes d'ecran
        this.settings = gameData.game.settings;         //  les parametres du jeu en JSON
        this.resolution = { x: data.game.resolution.x, y: data.game.resolution.y };
    }
    setWindowFrameStatic(x = this.resolution.x, y = this.resolution.y) {
        this.node.style.width = y + "px";
        this.node.style.height = x + "px";
    }
    setWindowFrameFullscreen() {
        this.node.style.width = window.innerWidth + "px";
        this.node.style.height = window.innerHeight + "px";
    }

    // Méthodes de contexte (permutation)
    setContext() {
        this.context = newContext;
    }
    getContext() {
        return this.context;
    }
    tick(now) {
        if (this.settings.video.isFullscreen == true) {
            this.setWindowFrameFullscreen();
        }
        if (this.settings.game.isDebug == true) {
            UTILS.debug.activateDebug(this.settings.debug, now);
        }
    }

    init() {
        let data = UTILS.assetFetcher('/src/scripts/core/game.json', true);
        return data;
    }

    startGame(game) {
        game.startGame(this);
    }

}

document.addEventListener("load", () => {
    //fonction de chargement


})