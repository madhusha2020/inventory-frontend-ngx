import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
let TreeGridComponent = class TreeGridComponent {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.sortDirection = NbSortDirection.NONE;
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    { data: { name: 'project-3', kind: 'txt', size: '466 KB' } },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    { data: { name: 'Report 1', kind: 'doc', size: '100 KB' } },
                    { data: { name: 'Report 2', kind: 'doc', size: '300 KB' } },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = this.dataSourceBuilder.create(this.data);
    }
    updateSort(sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    }
    getSortDirection(column) {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return NbSortDirection.NONE;
    }
    getShowOn(index) {
        const minWithForMultipleColumns = 400;
        const nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    }
};
TreeGridComponent = __decorate([
    Component({
        selector: 'ngx-tree-grid',
        templateUrl: './tree-grid.component.html',
        styleUrls: ['./tree-grid.component.scss'],
    }),
    __metadata("design:paramtypes", [NbTreeGridDataSourceBuilder])
], TreeGridComponent);
export { TreeGridComponent };
let FsIconComponent = class FsIconComponent {
    isDir() {
        return this.kind === 'dir';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], FsIconComponent.prototype, "kind", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsIconComponent.prototype, "expanded", void 0);
FsIconComponent = __decorate([
    Component({
        selector: 'ngx-fs-icon',
        template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
    })
], FsIconComponent);
export { FsIconComponent };
//# sourceMappingURL=tree-grid.component.js.map