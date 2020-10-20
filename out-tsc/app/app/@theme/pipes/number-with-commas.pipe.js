import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let NumberWithCommasPipe = class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
};
NumberWithCommasPipe = __decorate([
    Pipe({ name: 'ngxNumberWithCommas' })
], NumberWithCommasPipe);
export { NumberWithCommasPipe };
//# sourceMappingURL=number-with-commas.pipe.js.map