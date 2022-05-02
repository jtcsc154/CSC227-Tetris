
Module['onRuntimeInitialized'] = () => {
    const canvas = document.getElementById('my-canvas');

    let game = new Module['Tetris'](canvas);

    document.addEventListener('keypress', (e) => {
        if (e.code === 'KeyA') {
            game['moveLeft']();
        } else if (e.code === 'Space') {
            game['rotateRight']();
        } else if (e.code === 'KeyD') {
            game['moveRight']();
        } else if (e.code === 'KeyS') {
            game['dropDown']();
        }
    });

    const tick_delay = 400;
    let last_tick = null;

    const tick = (timestamp) =>
    {
        if (!last_tick)
        {
            last_tick = timestamp;
        }

        let progress = timestamp - last_tick;
        if (progress > tick_delay)
        {
            last_tick = timestamp;


            if (game != null)
                game['tick']();
            else
                return;

            if (game['isGameOver']()) {
               game = null;
            }
        }

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}









