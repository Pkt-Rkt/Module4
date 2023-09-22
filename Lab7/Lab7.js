const slider = document.getElementById('slider');
let isSliding = false;

slider.addEventListener('click', () => {
    if (!isSliding) {
        slider.style.backgroundColor = 'blue';
        slider.style.top = 'calc(100vh - 100px)';
        isSliding = true;

        setTimeout(() => {
            slider.style.backgroundColor = 'red';
            slider.style.top = '0';

            setTimeout(() => {
                isSliding = false;
            }, 2000);
        }, 2000);
    }
});

