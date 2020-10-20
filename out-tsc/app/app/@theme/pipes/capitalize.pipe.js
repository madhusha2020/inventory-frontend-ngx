import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let CapitalizePipe = class CapitalizePipe {
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
};
CapitalizePipe = __decorate([
    Pipe({ name: 'ngxCapitalize' })
], CapitalizePipe);
export { CapitalizePipe };
//# sourceMappingURL=capitalize.pipe.js.map