import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { NbThemeService } from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let RoomSelectorComponent = class RoomSelectorComponent {
    constructor(location, locationStrategy, themeService) {
        this.location = location;
        this.locationStrategy = locationStrategy;
        this.themeService = themeService;
        this.destroy$ = new Subject();
        this.select = new EventEmitter();
        this.selectedRoom = null;
        this.sortedRooms = [];
        this.viewBox = '-20 -20 618.88 407.99';
        this.isIE = !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/MSIE/)
            || navigator.userAgent.match(/Edge/));
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
        this.roomSvg = {
            borders: [{
                    d: 'M186.21,130.05H216.37V160H186.21Z',
                }],
            stokedAreas: [
                { d: 'M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z' },
                { d: 'M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z' },
                { d: 'M216.37,49.82H358.8V92.5H216.37Z' },
            ],
            rooms: [
                {
                    id: '0',
                    name: { text: 'Kitchen', x: 142, y: 240.8 },
                    area: { d: 'M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z' },
                    border: { d: 'M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,' +
                            '130H186.21V160H218.5' },
                },
                {
                    id: '1',
                    name: { text: 'Bedroom', x: 109, y: 66 },
                    area: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,' +
                            '6.09,0,0,0,8.09,130H96Z' },
                    border: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09' +
                            ',6.09,0,0,0,8.09,130H96' },
                },
                {
                    id: '2',
                    name: { text: 'Living Room', x: 468, y: 134 },
                    area: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212Z' },
                    border: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212' },
                },
                {
                    id: '3',
                    name: { text: 'Hallway', x: 320, y: 273 },
                    area: { d: 'M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z' },
                    border: { d: 'M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,' +
                            '6.09,0,0,1,-6.09,6.09H272.71V356' },
                },
            ],
        };
        this.selectRoom('2');
    }
    get background() {
        return this.hideGrid ? 'none' : null;
    }
    ngOnInit() {
        this.hideGrid = this.themeService.currentTheme === 'corporate';
        this.themeService.onThemeChange()
            .pipe(map(({ name }) => name === 'corporate'), takeUntil(this.destroy$))
            .subscribe((hideGrid) => this.hideGrid = hideGrid);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    sortRooms() {
        this.sortedRooms = this.roomSvg.rooms.slice(0).sort((a, b) => {
            if (a.id === this.selectedRoom) {
                return 1;
            }
            if (b.id === this.selectedRoom) {
                return -1;
            }
            return 0;
        });
    }
    selectRoom(roomNumber) {
        this.select.emit(roomNumber);
        this.selectedRoom = roomNumber;
        this.sortRooms();
    }
    getUrlPath(id) {
        const baseHref = this.locationStrategy.getBaseHref().replace(/\/$/, '');
        const path = this.location.path().replace(/\/$/, '');
        return `url(${baseHref}${path}${id})`;
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RoomSelectorComponent.prototype, "select", void 0);
__decorate([
    HostBinding('style.background'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], RoomSelectorComponent.prototype, "background", null);
RoomSelectorComponent = __decorate([
    Component({
        selector: 'ngx-room-selector',
        templateUrl: './room-selector.component.html',
        styleUrls: ['./room-selector.component.scss'],
    }),
    __metadata("design:paramtypes", [Location,
        LocationStrategy,
        NbThemeService])
], RoomSelectorComponent);
export { RoomSelectorComponent };
//# sourceMappingURL=room-selector.component.js.map