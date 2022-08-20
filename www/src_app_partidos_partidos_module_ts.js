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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _partidos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partidos.page.html?ngResource */ 7572);
/* harmony import */ var _partidos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partidos.page.scss?ngResource */ 9508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_partido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/partido.service */ 603);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let PartidosPage = class PartidosPage {
    constructor(juegoService, activatedRoute) {
        this.juegoService = juegoService;
        this.activatedRoute = activatedRoute;
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
    }
    ngOnInit() {
        this.juegoService.obtenerJuegos().subscribe(res => {
            this.item = res;
        });
        let params = this.activatedRoute.snapshot.params;
        let id = params["id"];
        this.juegoService.obtenerJuegosPorEquipo(id).subscribe(res => {
            this.item = res;
        });
    }
};
PartidosPage.ctorParameters = () => [
    { type: _servicios_partido_service__WEBPACK_IMPORTED_MODULE_2__.PartidoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
PartidosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Khand:wght@500;700&display=swap\");\nion-header ion-toolbar {\n  padding: 10% 0;\n}\n.titulo {\n  font-family: \"Khand\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RkFBQTtBQUdKO0VBQ0ksY0FBQTtBQURSO0FBS0E7RUFDSSxnQ0FBQTtBQUZKIiwiZmlsZSI6InBhcnRpZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtoYW5kOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBwYWRkaW5nOiAxMCUgMDtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnS2hhbmQnLCBzYW5zLXNlcmlmO1xyXG59Il19 */";

/***/ }),

/***/ 7572:
/*!********************************************************!*\
  !*** ./src/app/partidos/partidos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Canadian Football league</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"titulo\">\n    <h1 class=\"ion-text-center\">Semana 1</h1>\n  </div>\n\n  <div class=\"Juegos\">\n\n    <ion-row  style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>9 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[0].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[0].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[0].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[0].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>10 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[1].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[1].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[1].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[1].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>11 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[2].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[2].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[2].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[2].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>12 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[3].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[3].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[3].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[3].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"titulo\">\n    <h1 class=\"ion-text-center\">Semana 2</h1>\n  </div>\n\n  <div class=\"Juegos\">\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>16 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[4].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[4].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[4].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[4].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>16 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[5].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[5].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[5].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[5].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>17 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[6].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[6].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[6].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[6].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>18 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[7].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[7].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[7].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[7].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"titulo\">\n    <h1 class=\"ion-text-center\">Semana 3</h1>\n  </div>\n\n  <div class=\"Juegos\">\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>20 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[8].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[8].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[8].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[8].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>21 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[9].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[9].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[9].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[9].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[9].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[9].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>22 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[10].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[10].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[10].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[10].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[10].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[10].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col size=\"3\">\n        <ion-label>22 de Junio</ion-label>\n        <ion-label><br>Finalizo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[11].equipo1_id-1]}}.png\"> </ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-label >{{lista_equipos[item[11].equipo1_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[11].puntaje_equipo1}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >@</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[11].puntaje_equipo2}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{lista_equipos[item[11].equipo2_id-1]}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-img src=\"../../assets/Team icons/{{lista_equipos[item[11].equipo2_id-1]}}.png\"> </ion-img>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_partidos_partidos_module_ts.js.map