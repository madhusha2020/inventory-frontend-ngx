import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NewsPost } from '../../news.service';
let NewsPostComponent = class NewsPostComponent {
};
__decorate([
    Input(),
    __metadata("design:type", NewsPost)
], NewsPostComponent.prototype, "post", void 0);
NewsPostComponent = __decorate([
    Component({
        selector: 'ngx-news-post',
        templateUrl: 'news-post.component.html',
    })
], NewsPostComponent);
export { NewsPostComponent };
//# sourceMappingURL=news-post.component.js.map