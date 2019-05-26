import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TadaaPage } from './tadaa.page';
var routes = [
    {
        path: '',
        component: TadaaPage
    }
];
var TadaaPageModule = /** @class */ (function () {
    function TadaaPageModule() {
    }
    TadaaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TadaaPage]
        })
    ], TadaaPageModule);
    return TadaaPageModule;
}());
export { TadaaPageModule };
//# sourceMappingURL=tadaa.module.js.map