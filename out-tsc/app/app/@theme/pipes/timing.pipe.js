import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let TimingPipe = class TimingPipe {
    transform(time) {
        if (time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    initZero(time) {
        return time < 10 ? '0' : '';
    }
};
TimingPipe = __decorate([
    Pipe({ name: 'timing' })
], TimingPipe);
export { TimingPipe };
//# sourceMappingURL=timing.pipe.js.map