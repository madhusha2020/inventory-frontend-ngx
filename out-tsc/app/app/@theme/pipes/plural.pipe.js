import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let PluralPipe = class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
};
PluralPipe = __decorate([
    Pipe({ name: 'ngxPlural' })
], PluralPipe);
export { PluralPipe };
//# sourceMappingURL=plural.pipe.js.map