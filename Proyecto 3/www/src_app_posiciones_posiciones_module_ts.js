"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_posiciones_posiciones_module_ts"],{

/***/ 9355:
/*!*********************************************************!*\
  !*** ./src/app/posiciones/posiciones-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosicionesPageRoutingModule": () => (/* binding */ PosicionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _posiciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posiciones.page */ 9379);




const routes = [
    {
        path: '',
        component: _posiciones_page__WEBPACK_IMPORTED_MODULE_0__.PosicionesPage
    }
];
let PosicionesPageRoutingModule = class PosicionesPageRoutingModule {
};
PosicionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PosicionesPageRoutingModule);



/***/ }),

/***/ 7164:
/*!*************************************************!*\
  !*** ./src/app/posiciones/posiciones.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosicionesPageModule": () => (/* binding */ PosicionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _posiciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posiciones-routing.module */ 9355);
/* harmony import */ var _posiciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posiciones.page */ 9379);







let PosicionesPageModule = class PosicionesPageModule {
};
PosicionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _posiciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.PosicionesPageRoutingModule
        ],
        declarations: [_posiciones_page__WEBPACK_IMPORTED_MODULE_1__.PosicionesPage]
    })
], PosicionesPageModule);



/***/ }),

/***/ 9379:
/*!***********************************************!*\
  !*** ./src/app/posiciones/posiciones.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosicionesPage": () => (/* binding */ PosicionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _posiciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posiciones.page.html?ngResource */ 5908);
/* harmony import */ var _posiciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posiciones.page.scss?ngResource */ 6581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_posicion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/posicion.service */ 9503);





let temporada = 2022;
let PosicionesPage = class PosicionesPage {
    constructor(posicionService) {
        this.posicionService = posicionService;
        this.item = {
            id: 1,
            temporada: 2022,
            posicion: 1,
            semana: 1,
            equipo_id: 1,
            equipo: "",
            jugados: 0,
            ganados: 0,
            perdidos: 0,
            empates: 0,
            puntos: 0,
            division_id: -1,
            division: ""
        };
    }
    handleChange(e) {
        temporada = e.detail.value;
        console.log(temporada);
        this.ngOnInit();
    }
    ngOnInit() {
        this.posicionService.obtenerPosicionPorTemporada(temporada).subscribe(respuesta => {
            this.item = respuesta;
        });
    }
};
PosicionesPage.ctorParameters = () => [
    { type: _servicios_posicion_service__WEBPACK_IMPORTED_MODULE_2__.PosicionService }
];
PosicionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-posiciones',
        template: _posiciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_posiciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PosicionesPage);



/***/ }),

/***/ 9503:
/*!***********************************************!*\
  !*** ./src/app/servicios/posicion.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosicionService": () => (/* binding */ PosicionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let PosicionService = class PosicionService {
    constructor(http) {
        this.http = http;
    }
    obtenerPosicion() {
        return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/posiciones');
    }
    obtenerPosicionPorTemporada(temporada) {
        return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/posiciones/' + temporada.toString());
    }
};
PosicionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PosicionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PosicionService);



/***/ }),

/***/ 6581:
/*!************************************************************!*\
  !*** ./src/app/posiciones/posiciones.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap\");\nion-header ion-toolbar {\n  padding: 10% 0;\n}\nion-header ion-toolbar ion-img {\n  width: 20%;\n  height: 20%;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\nion-header ion-toolbar ion-row {\n  padding-left: 10%;\n  padding-right: 0%;\n}\n#divOeste {\n  margin-top: 5%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  padding-right: 25%;\n  border-radius: 0 15px 15px 0;\n  background-color: #C00712;\n}\n#divEste {\n  margin-top: 5%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  padding-right: 25%;\n  border-radius: 0 15px 15px 0;\n  background-color: #06407C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc2ljaW9uZXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcMSUyMERBV01cXERBV04tUHJveWVjdG9cXFByb3llY3RvJTIwM1xcc3JjXFxhcHBcXHBvc2ljaW9uZXNcXHBvc2ljaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRLDRGQUFBO0FBSUo7RUFhSSxjQUFBO0FDaEJSO0FESVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSwyQkFBQTtFQUFBLHNCQUFBO0FDRlo7QURLUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNIWjtBRFlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkEvQlM7QUNzQmI7QURZQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBdkNRO0FDOEJaIiwiZmlsZSI6InBvc2ljaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yT2VzdGU6ICNDMDA3MTI7XHJcbiRjb2xvckVzdGU6ICMwNjQwN0M7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBpb24taW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFkZGluZzogMTAlIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI2Rpdk9lc3Rle1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvck9lc3RlO1xyXG59XHJcblxyXG4jZGl2RXN0ZXtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFc3RlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDkwMCZkaXNwbGF5PXN3YXBcIik7XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTAlIDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1pbWcge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMCU7XG59XG5cbiNkaXZPZXN0ZSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgcGFkZGluZy1yaWdodDogMjUlO1xuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzAwNzEyO1xufVxuXG4jZGl2RXN0ZSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgcGFkZGluZy1yaWdodDogMjUlO1xuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY0MDdDO1xufSJdfQ== */";

/***/ }),

/***/ 5908:
/*!************************************************************!*\
  !*** ./src/app/posiciones/posiciones.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-img src=\"../../assets/Team icons/CFL_2016_logo.png\" ></ion-img>\n      <ion-title  >Canadian Football league</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"listaYears\">\n    <ion-list>\n      <ion-item>\n        <ion-select (ionChange)=\"handleChange($event)\" interface=\"popover\" placeholder=\"Selecciona una temporada\">\n          <ion-select-option value=\"2022\">2022</ion-select-option>\n          <ion-select-option value=\"2021\">2021</ion-select-option>\n          <ion-select-option value=\"2019\">2019</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n  \n\n  <div id=\"Oeste\">\n    <ion-badge id=\"divOeste\">Division Oeste</ion-badge>\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label >POS</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" >\n        <ion-label >Equipo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PJ</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PG</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PP</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PE</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PTS</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[0].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[0].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[0].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[1].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[1].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[1].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[2].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[2].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[2].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[3].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[3].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[3].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[4].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[4].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[4].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    \n    \n    \n  </div>\n  \n  <div id=\"Este\">\n    <ion-badge id=\"divEste\">Division Este</ion-badge>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label >POS</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" >\n        <ion-label >Equipo</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PJ</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PG</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PP</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PE</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >PTS</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[5].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[5].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[5].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n   \n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[6].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[6].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[6].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[7].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[7].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[7].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;\">\n      <ion-col >\n        <ion-label>{{item[8].posicion}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label >{{item[8].equipo}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].jugados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].ganados}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].perdidos}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].empates}}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label >{{item[8].puntos}}</ion-label>\n      </ion-col>\n    </ion-row>\n    \n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_posiciones_posiciones_module_ts.js.map