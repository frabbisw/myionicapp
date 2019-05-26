import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
var routes = [
    {
        path: '',
        component: Tab4Page
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Tab4Page]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());
export { Tab4PageModule };
//# sourceMappingURL=tab4.module.js.map