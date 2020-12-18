import './styles.css';


const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

const timer = {
    start() {
        const targetDate = Date.parse('Jan 01, 2021');

        setInterval(() => {
            const currentTime = Date.now();
            const time = targetDate - currentTime;

            updateClockFace(time);
        }, 1000);
    },
}

timer.start();

function updateClockFace(time) {

    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    // console.log(`${days}:${hours}:${mins}:${secs}`);
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;

}

function pad(value) {
    return String(value).padStart(2, 0);
}

















// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

//=======================================

// const CountdownTimer = {
//     selector: '#timer-1',
//     targetDate: Date.parse('Jul 17, 2019'),
//     currentTime: Date.now(),
//     start() {
//         // const targetDate = new Date('Jul 17, 2019');
//         setInterval(() => { console.log(CountdownTimer.targetDate - CountdownTimer.currentTime); }, 1000);
//     }
// }

// // CountdownTimer.start();

// console.log(CountdownTimer.targetDate);
// console.log(CountdownTimer.currentTime);
// const time = CountdownTimer.targetDate - CountdownTimer.currentTime;
// console.log(time);

//==============================