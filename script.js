let init = {
    months: 12,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

window.onload = () => {

    const days = document.querySelector('#days');
    const months = document.querySelector('#months');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');


    paint();


    let countdown = setInterval(() => {

        if (init.seconds === 0) {
            if (init.minutes === 0) {
                if (init.hours === 0) {
                    if (init.days === 0) {

                        if (init.months === 0) {
                            clearInterval(countdown);
                        } else {
                        init = {...init, minutes: 60, seconds: 60, hours: 24, days: 30, months: init.months -1}

                        }

                    } else {
                        init = {...init, minutes: 60, seconds: 60, hours: 24, days: init.days -1}
                    }

                } else {
                    init = {...init, minutes: 60, seconds: 60, hours: init.hours -1}
                }
            } else {
                init = {...init, seconds: 60, minutes: init.minutes -1}
            }
        } else {
            init = {...init, seconds: init.seconds -1}
        }

        paint();
        
    }, 1000);
}

const paint = () => {
    days.innerHTML = init.days;
    months.innerHTML = init.months;
    hours.innerHTML = init.hours;
    minutes.innerHTML = init.minutes;
    seconds.innerHTML = init.seconds;

    requestAnimationFrame(paint);
}