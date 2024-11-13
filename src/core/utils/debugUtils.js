// Variables utilitaires

let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;

export const DEBUGUTILS = {
    DEBUG_compteurFps: {
        compteurFps: async () => {
            const fpsContainer = document.createElement('div');
            fpsContainer.id = 'fps-container';
            fpsContainer.style.position = 'absolute';
            fpsContainer.style.top = '10px';
            fpsContainer.style.right = '10px';
            fpsContainer.style.color = 'white';
            fpsContainer.style.backgroundColor = 'black';
            fpsContainer.style.fontFamily = 'monospace';
            fpsContainer.style.zIndex = 1000; // Ensure it stays on top
            document.querySelector('#game').appendChild(fpsContainer);
            return fpsContainer;
        },

        fpsTick: (now) => {

            // Calculate FPS
            const delta = now - lastFrameTime;
            frameCount++;
            if (delta >= 1000) {  // Update every second
                fps = (frameCount / delta) * 1000;
                frameCount = 0;
                lastFrameTime = now;
            }
            const fpsContainer = document.querySelector("#fps-container")
            // Update the FPS container text
            fpsContainer.innerText = `FPS: ${Math.round(fps)}`;
        },
    },

}