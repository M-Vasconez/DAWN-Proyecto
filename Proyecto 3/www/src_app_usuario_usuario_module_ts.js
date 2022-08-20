"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_usuario_usuario_module_ts"],{

/***/ 4975:
/*!**********************************************!*\
  !*** ./src/app/servicios/usuario.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
    }
    obtenerUsuario() {
        return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/usuarios');
    }
    obtenerUsuarioPorId(id) {
        return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/usuarios/' + id.toString());
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
UsuarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ 6300:
/*!***************************************************!*\
  !*** ./src/app/usuario/usuario-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioPageRoutingModule": () => (/* binding */ UsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.page */ 7807);




const routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_0__.UsuarioPage
    }
];
let UsuarioPageRoutingModule = class UsuarioPageRoutingModule {
};
UsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsuarioPageRoutingModule);



/***/ }),

/***/ 5982:
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioPageModule": () => (/* binding */ UsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario-routing.module */ 6300);
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.page */ 7807);







let UsuarioPageModule = class UsuarioPageModule {
};
UsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuarioPageRoutingModule
        ],
        declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_1__.UsuarioPage]
    })
], UsuarioPageModule);



/***/ }),

/***/ 7807:
/*!*****************************************!*\
  !*** ./src/app/usuario/usuario.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioPage": () => (/* binding */ UsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.page.html?ngResource */ 3743);
/* harmony import */ var _usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.page.scss?ngResource */ 8778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/usuario.service */ 4975);
/* harmony import */ var _servicios_partido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/partido.service */ 603);






let id_usuario = 4;
let UsuarioPage = class UsuarioPage {
    constructor(usuarioService, partidoService) {
        this.usuarioService = usuarioService;
        this.partidoService = partidoService;
        this.lista_equipos = ["BC Lions", "Calgary Stampeders", "Edmonton Elks", "Hamilton Tiger-Cats", "Montreal Alouettes", "Ottawa Redblacks",
            "Saskatchewan Roughriders", "Toronto Argonauts", "Winnipeg Blue Bombers"];
        this.lista_abreviacion = ["BC", "CGY", "EDM", "HAM", "MTL", "OTT", "SSK", "TOR", "WPG"];
        this.item = {
            id: 0,
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            equipo_id: 0,
        };
        this.partido = {
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
    handleChange(e) {
        id_usuario = e.detail.value;
        this.ngOnInit();
    }
    ngOnInit() {
        this.usuarioService.obtenerUsuarioPorId(id_usuario).subscribe(respuesta => {
            this.item = respuesta;
        });
        console.log("Equipo id: ", this.item.equipo_id);
        this.partidoService.obtenerJuegosPorEquipo(this.item.equipo_id).subscribe(res => {
            this.partido = res;
        });
    }
};
UsuarioPage.ctorParameters = () => [
    { type: _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _servicios_partido_service__WEBPACK_IMPORTED_MODULE_3__.PartidoService }
];
UsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-usuario',
        template: _usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsuarioPage);



/***/ }),

/***/ 8778:
/*!******************************************************!*\
  !*** ./src/app/usuario/usuario.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Graduate&family=Khand:wght@500;700&display=swap\");\nion-header ion-toolbar {\n  padding: 10% 0;\n}\nion-card-title {\n  font-family: \"Graduate\", cursive;\n}\nion-card-header ion-label {\n  font-family: \"Graduate\", cursive;\n  font-size: xx-large;\n}\nion-label {\n  font-family: \"Graduate\", cursive;\n}\nion-img {\n  width: 30px;\n  height: 30px;\n  max-width: 40px;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVHQUFBO0FBR0o7RUFDSSxjQUFBO0FBRFI7QUFLQTtFQUNJLGdDQUFBO0FBRko7QUFNSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtBQUpKIiwiZmlsZSI6InVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JhZHVhdGUmZmFtaWx5PUtoYW5kOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBwYWRkaW5nOiAxMCUgMDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnLCBjdXJzaXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5pb24taW1ne1xyXG4gICAgd2lkdGg6MzBweDsgXHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3743:
/*!******************************************************!*\
  !*** ./src/app/usuario/usuario.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Canadian Football league</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"listaYears\">\n    <ion-list>\n      <ion-item>\n        <ion-select (ionChange)=\"handleChange($event)\" interface=\"popover\" placeholder=\"Selecciona un id de usuario\">\n          <ion-select-option value=\"4\">4</ion-select-option>\n          <ion-select-option value=\"14\">14</ion-select-option>\n          <ion-select-option value=\"24\">24</ion-select-option>\n          <ion-select-option value=\"34\">34</ion-select-option>\n          <ion-select-option value=\"44\">44</ion-select-option>\n          <ion-select-option value=\"54\">54</ion-select-option>\n          <ion-select-option value=\"64\">64</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n  \n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Hola {{item.nombre}} {{item.apellido}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-label>Estos son sus partidos esta temporada de tu equipo favorito:</ion-label>\n    </ion-card-content> \n  </ion-card> \n  \n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>11 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[0].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[0].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[0].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[0].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[0].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[0].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>12 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[1].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[1].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[1].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[1].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[1].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[1].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>13 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[2].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[2].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[2].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[2].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[2].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[2].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>14 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[3].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[3].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[3].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[3].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[3].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[3].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>15 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[4].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[4].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[4].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[4].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[4].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[4].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>16 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[5].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[5].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[5].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[5].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[5].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[5].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>19 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[6].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[6].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[6].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[6].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[6].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[6].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>21 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[7].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[7].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[7].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[7].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[7].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[7].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>22 de Junio</ion-label>\n      <ion-label><br>Finalizo</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[8].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[8].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[8].puntaje_equipo1}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{partido[8].puntaje_equipo2}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[8].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[8].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>25 de Junio</ion-label>\n      <ion-label><br></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[9].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[9].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[9].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[9].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>29 de Junio</ion-label>\n      <ion-label><br></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[10].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[10].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[10].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[10].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>1 de Julio</ion-label>\n      <ion-label><br></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[11].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[11].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[11].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[11].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: groove;\">\n    <ion-col size=\"3\">\n      <ion-label>9 de Julio</ion-label>\n      <ion-label><br></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[12].equipo1_id-1]}}.png\"> </ion-img>\n    </ion-col>\n    <ion-col>\n      <ion-label >{{lista_abreviacion[partido[12].equipo1_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >@</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label ></ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label >{{lista_abreviacion[partido[12].equipo2_id-1]}}</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-img src=\"../../assets/Team icons/{{lista_abreviacion[partido[12].equipo2_id-1]}}.png\"> </ion-img>\n    </ion-col>\n  </ion-row>\n\n \n\n  \n\n  \n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_usuario_usuario_module_ts.js.map