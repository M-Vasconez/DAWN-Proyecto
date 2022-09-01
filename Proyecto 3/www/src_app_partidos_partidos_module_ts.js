"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_partidos_partidos_module_ts"],{

/***/ 6344:
/*!*****************************************************!*\
  !*** ./src/app/partidos/partidos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartidosPageRoutingModule": () => (/* binding */ PartidosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _partidos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partidos.page */ 4620);




const routes = [
    {
        path: '',
        component: _partidos_page__WEBPACK_IMPORTED_MODULE_0__.PartidosPage
    }
];
let PartidosPageRoutingModule = class PartidosPageRoutingModule {
};
PartidosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartidosPageRoutingModule);



/***/ }),

/***/ 1924:
/*!*********************************************!*\
  !*** ./src/app/partidos/partidos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartidosPageModule": () => (/* binding */ PartidosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _partidos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partidos-routing.module */ 6344);
/* harmony import */ var _partidos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partidos.page */ 4620);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);











let PartidosPageModule = class PartidosPageModule {
};
PartidosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _partidos_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartidosPageRoutingModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule
        ],
        declarations: [_partidos_page__WEBPACK_IMPORTED_MODULE_1__.PartidosPage]
    })
], PartidosPageModule);



/***/ }),

/***/ 4620:
/*!*******************************************!*\
  !*** ./src/app/partidos/partidos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartidosPage": () => (/* binding */ PartidosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _partidos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partidos.page.html?ngResource */ 7572);
/* harmony import */ var _partidos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partidos.page.scss?ngResource */ 9508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_partido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/partido.service */ 603);





let PartidosPage = class PartidosPage {
    constructor(juegoService) {
        this.juegoService = juegoService;
        this.lista_equipos = ["BC", "CGY", "EDM", "HAM", "MTL", "OTT", "SSK", "TOR", "WPG"];
        this.item = {
            id: 0,
            temporada: 2022,
            semana: 0,
            id_estadio: 0,
            equipo1_id: 0,
            puntaje_equipo1: 0,
            equipo2_id: 0,
            puntaje_equipo2: 0,
        };
        this.dataSource = [];
    }
    ngOnInit() {
        this.juegoService.obtenerJuegos().subscribe(res => {
            this.dataSource = res;
            console.log(this.dataSource.events);
        });
    }
};
PartidosPage.ctorParameters = () => [
    { type: _servicios_partido_service__WEBPACK_IMPORTED_MODULE_2__.PartidoService }
];
PartidosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-partidos',
        template: _partidos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_partidos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PartidosPage);



/***/ }),

/***/ 9508:
/*!********************************************************!*\
  !*** ./src/app/partidos/partidos.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Khand:wght@500;700&display=swap\");\nion-header ion-toolbar {\n  padding: 10% 0;\n}\nion-header ion-toolbar ion-img {\n  width: 20%;\n  height: 20%;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\nion-header ion-toolbar ion-row {\n  padding-left: 10%;\n  padding-right: 0%;\n}\n.titulo {\n  font-family: \"Khand\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpZG9zLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXDElMjBEQVdNXFxEQVdOLVByb3llY3RvXFxQcm95ZWN0byUyMDNcXHNyY1xcYXBwXFxwYXJ0aWRvc1xccGFydGlkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBR0o7RUFhSSxjQUFBO0FDYlI7QURDUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7QUNDWjtBREVRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0FaO0FEU0E7RUFDSSxnQ0FBQTtBQ05KIiwiZmlsZSI6InBhcnRpZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtoYW5kOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBpb24taW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFkZGluZzogMTAlIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnS2hhbmQnLCBzYW5zLXNlcmlmO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtoYW5kOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTAlIDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1pbWcge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMCU7XG59XG5cbi50aXR1bG8ge1xuICBmb250LWZhbWlseTogXCJLaGFuZFwiLCBzYW5zLXNlcmlmO1xufSJdfQ== */";

/***/ }),

/***/ 7572:
/*!********************************************************!*\
  !*** ./src/app/partidos/partidos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-img src=\"../../assets/Team icons/CFL_2016_logo.png\" ></ion-img>\n      <ion-title  >Canadian Football league</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n  <div class=\"carta\" *ngFor=\"let datos of dataSource.events\"> \n    <div class=\"titulo\">\n      <h1  class=\"ion-text-center\" *ngIf=\"datos.intRound == 500\">Pretemporada</h1>\n      <h1  class=\"ion-text-center\" *ngIf=\"datos.intRound != 500\">Semana {{datos.intRound}}</h1>\n    </div>\n  \n    <div class=\"Juegos\" >\n  \n      <ion-row  style=\"border-bottom: groove\"  >\n        \n        <ion-col size=\"3\">\n          <ion-label>Fecha</ion-label>\n          <ion-label><br>{{datos.dateEventLocal}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-img src=\"../../assets/Team icons/{{datos.strAwayTeam}}.png\"> </ion-img>\n        </ion-col>\n        <ion-col>\n          <ion-label >{{datos.strAwayTeam}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label >{{datos.intAwayScore}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label >@</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label >{{datos.intHomeScore}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label >{{datos.strHomeTeam}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-img src=\"../../assets/Team icons/{{datos.strHomeTeam}}.png\"> </ion-img>\n        </ion-col>\n      </ion-row>\n\n    </div>\n  \n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_partidos_partidos_module_ts.js.map