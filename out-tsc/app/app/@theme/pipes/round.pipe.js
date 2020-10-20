import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let RoundPipe = class RoundPipe {
    transform(input) {
        return Math.round(input);
    }
};
RoundPipe = __decorate([
    Pipe({ name: 'ngxRound' })
], RoundPipe);
export { RoundPipe };
//# sourceMappingURL=round.pipe.js.map