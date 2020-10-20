import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { PlayerService } from '../../../../@core/utils/player.service';
let PlayerComponent = class PlayerComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.track = this.playerService.random();
        this.createPlayer();
    }
    ngOnDestroy() {
        this.player.pause();
        this.player.src = '';
        this.player.load();
    }
    prev() {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.prev();
            }
        }
        this.reload();
    }
    next() {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.next();
            }
        }
        this.reload();
    }
    playPause() {
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
    toggleShuffle() {
        this.shuffle = !this.shuffle;
    }
    toggleLoop() {
        this.player.loop = !this.player.loop;
    }
    setVolume(volume) {
        this.player.volume = volume / 100;
    }
    getVolume() {
        return this.player.volume * 100;
    }
    setProgress(duration) {
        this.player.currentTime = this.player.duration * duration / 100;
    }
    getProgress() {
        return this.player.currentTime / this.player.duration * 100 || 0;
    }
    createPlayer() {
        this.player = new Audio();
        this.player.onended = () => this.next();
        this.setTrack();
    }
    reload() {
        this.setTrack();
        this.player.play();
    }
    setTrack() {
        this.player.src = this.track.url;
        this.player.load();
    }
};
__decorate([
    Input(),
    HostBinding('class.collapsed'),
    __metadata("design:type", Boolean)
], PlayerComponent.prototype, "collapsed", void 0);
PlayerComponent = __decorate([
    Component({
        selector: 'ngx-player',
        styleUrls: ['./player.component.scss'],
        templateUrl: './player.component.html',
    }),
    __metadata("design:paramtypes", [PlayerService])
], PlayerComponent);
export { PlayerComponent };
//# sourceMappingURL=player.component.js.map