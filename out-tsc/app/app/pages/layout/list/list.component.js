import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { fruits } from './fruits-list';
let ListComponent = class ListComponent {
    constructor() {
        this.fruits = fruits;
        this.users = [
            { name: 'Carla Espinosa', title: 'Nurse' },
            { name: 'Bob Kelso', title: 'Doctor of Medicine' },
            { name: 'Janitor', title: 'Janitor' },
            { name: 'Perry Cox', title: 'Doctor of Medicine' },
            { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
        ];
    }
};
ListComponent = __decorate([
    Component({
        selector: 'ngx-list',
        templateUrl: 'list.component.html',
        styleUrls: ['list.component.scss'],
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map