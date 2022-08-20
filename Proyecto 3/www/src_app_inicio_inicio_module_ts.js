"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 9681:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 8476);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3185:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 9681);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 8476);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 8476:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 4588);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 1075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InicioPage = class InicioPage {
    constructor() { }
    ngOnInit() {
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 1075:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  padding: 10% 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0FBQVIiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBwYWRkaW5nOiAxMCUgMDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 4588:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Canadian Football league</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Noticia 1</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at urna sed quam posuere interdum. \n        Quisque aliquam tortor eros, a ultrices est tristique non. Nulla dignissim viverra tellus non imperdiet. \n        Morbi iaculis eleifend nisi, vitae facilisis leo vehicula a. Morbi semper, tellus et hendrerit porta, \n        neque ipsum porttitor orci, eget vulputate metus sem ut orci. Mauris libero arcu, egestas ut pulvinar id, \n        hendrerit id augue. Morbi ac lorem eu dolor tincidunt pellentesque in ac turpis. Etiam quis dui id libero tempus imperdiet. \n        Praesent pharetra, odio ac varius pulvinar, lorem felis dapibus erat, vitae aliquam augue ante quis risus. \n        Sed in massa eget nisl vulputate tristique. Cras nulla ligula, placerat vel ligula id, euismod cursus quam. \n        Quisque sed fermentum tellus, eu auctor leo. Aenean a elit sit amet tortor rhoncus eleifend. \n        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus Hello</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Noticia 2</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at urna sed quam posuere interdum. \n        Quisque aliquam tortor eros, a ultrices est tristique non. Nulla dignissim viverra tellus non imperdiet. \n        Morbi iaculis eleifend nisi, vitae facilisis leo vehicula a. Morbi semper, tellus et hendrerit porta, \n        neque ipsum porttitor orci, eget vulputate metus sem ut orci. Mauris libero arcu, egestas ut pulvinar id, \n        hendrerit id augue. Morbi ac lorem eu dolor tincidunt pellentesque in ac turpis. Etiam quis dui id libero tempus imperdiet. \n        Praesent pharetra, odio ac varius pulvinar, lorem felis dapibus erat, vitae aliquam augue ante quis risus. \n        Sed in massa eget nisl vulputate tristique. Cras nulla ligula, placerat vel ligula id, euismod cursus quam. \n        Quisque sed fermentum tellus, eu auctor leo. Aenean a elit sit amet tortor rhoncus eleifend. \n        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map