"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_usuario_usuario_module_ts"],{

/***/ 440:
/*!*********************************************!*\
  !*** ./src/app/servicios/equipo.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipoService": () => (/* binding */ EquipoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let EquipoService = class EquipoService {
    constructor(https) {
        this.https = https;
    }
    obtenerEquipos() {
        return this.https.get('https://enigmatic-castle-01537.herokuapp.com/api/equipos');
    }
    obtenerEquiposPorId(id) {
        return this.https.get('https://enigmatic-castle-01537.herokuapp.com/api/equipos/' + id.toString());
    }
};
EquipoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
EquipoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EquipoService);



/***/ }),

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
/* harmony import */ var C_Users_mvasc_Dropbox_1_DAWM_DAWN_Proyecto_Proyecto_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.page.html?ngResource */ 3743);
/* harmony import */ var _usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.page.scss?ngResource */ 8778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/usuario.service */ 4975);
/* harmony import */ var _servicios_partido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/partido.service */ 603);
/* harmony import */ var _servicios_equipo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/equipo.service */ 440);








let id_usuario = 4;
let UsuarioPage = class UsuarioPage {
  constructor(usuarioService, equipoService, partidoService) {
    this.usuarioService = usuarioService;
    this.equipoService = equipoService;
    this.partidoService = partidoService;
    this.item = {
      id: 0,
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      equipo_id: 0
    };
    this.equipo = {
      id: 0,
      nombre: "",
      ubicacion: "",
      division: "",
      abreviacion: "",
      estadio_id: 0,
      estadio: ""
    };
    this.dataSource = [];
    this.datosFiltrados = [];
  }

  handleChange(e) {
    id_usuario = e.detail.value;
    this.datosFiltrados = [];
    this.ngOnInit();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_mvasc_Dropbox_1_DAWM_DAWN_Proyecto_Proyecto_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.usuarioService.obtenerUsuarioPorId(id_usuario).subscribe(respuesta => {
        _this.item = respuesta;
      });

      yield _this.equipoService.obtenerEquiposPorId(_this.item.equipo_id).subscribe(respuesta => {
        _this.equipo = respuesta;
      });
      yield _this.partidoService.obtenerJuegos().subscribe(res => {
        _this.dataSource = res;

        for (let juegos of _this.dataSource.events) {
          if (juegos.strAwayTeam == _this.equipo.nombre || juegos.strHomeTeam == _this.equipo.nombre) {
            _this.datosFiltrados.push(juegos);
          }
        }
      });
    })();
  }

};

UsuarioPage.ctorParameters = () => [{
  type: _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService
}, {
  type: _servicios_equipo_service__WEBPACK_IMPORTED_MODULE_5__.EquipoService
}, {
  type: _servicios_partido_service__WEBPACK_IMPORTED_MODULE_4__.PartidoService
}];

UsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-usuario',
  template: _usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UsuarioPage);


/***/ }),

/***/ 8778:
/*!******************************************************!*\
  !*** ./src/app/usuario/usuario.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Graduate&family=Khand:wght@500;700&display=swap\");\nion-header ion-toolbar {\n  padding: 10% 0;\n}\nion-header ion-toolbar ion-img {\n  width: 20%;\n  height: 20%;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\nion-header ion-toolbar ion-row {\n  padding-left: 10%;\n  padding-right: 0%;\n}\nion-card-title {\n  font-family: \"Graduate\", cursive;\n}\nion-card-header ion-label {\n  font-family: \"Graduate\", cursive;\n  font-size: xx-large;\n}\nion-label {\n  font-family: \"Graduate\", cursive;\n}\nion-img {\n  width: 30px;\n  height: 30px;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.fila {\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcMSUyMERBV01cXERBV04tUHJveWVjdG9cXFByb3llY3RvJTIwM1xcc3JjXFxhcHBcXHVzdWFyaW9cXHVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVHQUFBO0FBR0o7RUFhSSxjQUFBO0FDYlI7QURDUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7QUNDWjtBREVRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0FaO0FET0E7RUFDSSxnQ0FBQTtBQ0pKO0FEUUk7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FDTFI7QURTQTtFQUNJLGdDQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUNOSjtBRFNBO0VBQ0ksa0JBQUE7QUNOSiIsImZpbGUiOiJ1c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyYWR1YXRlJmZhbWlseT1LaGFuZDp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwJSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZScsIGN1cnNpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgICB3aWR0aDozMHB4OyBcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZmlsYXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmFkdWF0ZSZmYW1pbHk9S2hhbmQ6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMCUgMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWltZyB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAwJTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJHcmFkdWF0ZVwiLCBjdXJzaXZlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiR3JhZHVhdGVcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiR3JhZHVhdGVcIiwgY3Vyc2l2ZTtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uZmlsYSB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn0iXX0= */";

/***/ }),

/***/ 3743:
/*!******************************************************!*\
  !*** ./src/app/usuario/usuario.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-img src=\"../../assets/Team icons/CFL_2016_logo.png\" ></ion-img>\n      <ion-title  >Canadian Football league</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"listaYears\">\n    <ion-list>\n      <ion-item >\n        <ion-select (ionChange)=\"handleChange($event)\" interface=\"popover\"  placeholder=\"Selecciona un id de usuario\" >\n          <ion-select-option value=\"4\">4</ion-select-option>\n          <ion-select-option value=\"14\">14</ion-select-option>\n          <ion-select-option value=\"24\">24</ion-select-option>\n          <ion-select-option value=\"34\">34</ion-select-option>\n          <ion-select-option value=\"44\">44</ion-select-option>\n          <ion-select-option value=\"54\">54</ion-select-option>\n          <ion-select-option value=\"64\">64</ion-select-option>\n          <ion-select-option value=\"74\">74</ion-select-option>\n          <ion-select-option value=\"84\">84</ion-select-option>\n          <ion-select-option value=\"94\">94</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n  \n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Hola {{item.nombre}} {{item.apellido}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-label>Estos los partidos del {{equipo.nombre}} esta temporada 2022, tu equipo favorito:</ion-label>\n    </ion-card-content> \n  </ion-card> \n  \n  <div class=\"carta\" *ngFor=\"let datos of datosFiltrados\"> \n    <div class=\"titulo\">\n      <h1  class=\"ion-text-center\" *ngIf=\"datos.intRound == 500\">Pretemporada</h1>\n      <h1  class=\"ion-text-center\" *ngIf=\"datos.intRound != 500\">Semana {{datos.intRound}}</h1>\n    </div>\n  \n    <div class=\"Juegos\" >\n  \n      <ion-row  style=\"border-bottom: groove\" >\n        \n        <ion-col size=\"3\">\n          <ion-label class=\"fila\">Fecha</ion-label>\n          <ion-label class=\"fila\"><br>{{datos.dateEventLocal}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-img src=\"../../assets/Team icons/{{datos.strAwayTeam}}.png\"> </ion-img>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"fila\" >{{datos.strAwayTeam}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label  >{{datos.intAwayScore}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label >@</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label >{{datos.intHomeScore}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-label class=\"fila\" >{{datos.strHomeTeam}}</ion-label>\n        </ion-col>\n        <ion-col >\n          <ion-img src=\"../../assets/Team icons/{{datos.strHomeTeam}}.png\"> </ion-img>\n        </ion-col>\n      </ion-row>\n\n    </div>\n  \n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_usuario_usuario_module_ts.js.map