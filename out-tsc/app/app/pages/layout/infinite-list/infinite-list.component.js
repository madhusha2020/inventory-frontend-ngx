import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NewsService } from '../news.service';
let InfiniteListComponent = class InfiniteListComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.firstCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.secondCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.pageSize = 10;
    }
    loadNext(cardData) {
        if (cardData.loading) {
            return;
        }
        cardData.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.newsService.load(cardData.pageToLoadNext, this.pageSize)
            .subscribe(nextNews => {
            cardData.placeholders = [];
            cardData.news.push(...nextNews);
            cardData.loading = false;
            cardData.pageToLoadNext++;
        });
    }
};
InfiniteListComponent = __decorate([
    Component({
        selector: 'ngx-infinite-list',
        templateUrl: 'infinite-list.component.html',
        styleUrls: ['infinite-list.component.scss'],
    }),
    __metadata("design:paramtypes", [NewsService])
], InfiniteListComponent);
export { InfiniteListComponent };
//# sourceMappingURL=infinite-list.component.js.map