export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer-part-minutes"),

            seconds: root.querySelector(".timer-part-seconds"),

            control: root.querySelector(".timer-btn-control"),

            reset: root.querySelector(".timer-btn-reset")
        };

        this.interval = null;
        this.remainingSeconds = 720;

        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes");

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">
            play_circle
            </span>`;
            this.el.control.classList.add("timer-btn-start");
            this.el.control.classList.remove("timer-btn-stop");
        } else {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">
            pause_circle
            </span>`;
            this.el.control.classList.remove("timer-btn-start");
            this.el.control.classList.add("timer-btn-stop");
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
        <span class="timer-part timer-part-minutes">12</span>
            <span class="timer-part">:</span>
            <span class="timer-part timer-part-seconds">00</span>

            <button type:"button" class="timer-btn timer-btn-control timer-btn-start">
                <span class="material-symbols-outlined">
                    play_circle
                </span>
            </button>

            <button type:"button" class="timer-btn timer-btn-reset">
                <span class="material-symbols-outlined">
                    timer
                </span>
            </button>
        `;
    };
};