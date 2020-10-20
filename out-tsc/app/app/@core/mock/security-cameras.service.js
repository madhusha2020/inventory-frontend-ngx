import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { SecurityCamerasData } from '../data/security-cameras';
let SecurityCamerasService = class SecurityCamerasService extends SecurityCamerasData {
    constructor() {
        super(...arguments);
        this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
    }
    getCamerasData() {
        return observableOf(this.cameras);
    }
};
SecurityCamerasService = __decorate([
    Injectable()
], SecurityCamerasService);
export { SecurityCamerasService };
//# sourceMappingURL=security-cameras.service.js.map