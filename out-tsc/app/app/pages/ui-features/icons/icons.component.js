import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
let IconsComponent = class IconsComponent {
    constructor(iconsLibrary) {
        this.evaIcons = [];
        this.icons = {
            ionicons: [
                'ionic', 'arrow-right-b', 'arrow-down-b', 'arrow-left-b', 'arrow-up-c', 'arrow-right-c',
                'arrow-down-c', 'arrow-left-c', 'arrow-return-right', 'arrow-return-left', 'arrow-swap',
                'arrow-shrink', 'arrow-expand', 'arrow-move', 'arrow-resize', 'chevron-up',
                'chevron-right', 'chevron-down', 'chevron-left', 'navicon-round', 'navicon',
                'drag', 'log-in', 'log-out', 'checkmark-round', 'checkmark', 'checkmark-circled',
                'close-round', 'plus-round', 'minus-round', 'information', 'help',
                'backspace-outline', 'help-buoy', 'asterisk', 'alert', 'alert-circled',
                'refresh', 'loop', 'shuffle', 'home', 'search', 'flag', 'star',
                'heart', 'heart-broken', 'gear-a', 'gear-b', 'toggle-filled', 'toggle',
                'settings', 'wrench', 'hammer', 'edit', 'trash-a', 'trash-b',
                'document', 'document-text', 'clipboard', 'scissors', 'funnel',
                'bookmark', 'email', 'email-unread', 'folder', 'filing', 'archive',
                'reply', 'reply-all', 'forward',
            ],
            fontAwesome: [
                'adjust', 'anchor', 'archive', 'chart-area', 'arrows-alt', 'arrows-alt-h',
                'arrows-alt-v', 'asterisk', 'at', 'car', 'ban', 'university',
                'chart-bar', 'barcode', 'bars', 'bed', 'beer',
                'bell', 'bell-slash', 'bicycle', 'binoculars',
                'birthday-cake', 'bolt', 'bomb', 'book', 'bookmark',
                'briefcase', 'bug', 'building', 'bullhorn',
            ],
            fontAwesomeRegular: ['chart-bar', 'bell', 'bell-slash', 'bookmark', 'building'],
        };
        this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
            .filter(icon => icon.indexOf('outline') === -1);
        iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
        iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
        iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    }
};
IconsComponent = __decorate([
    Component({
        selector: 'ngx-icons',
        styleUrls: ['./icons.component.scss'],
        templateUrl: './icons.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [NbIconLibraries])
], IconsComponent);
export { IconsComponent };
//# sourceMappingURL=icons.component.js.map