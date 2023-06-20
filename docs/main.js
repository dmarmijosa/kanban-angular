(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VA2":
/*!*******************************************!*\
  !*** ./src/app/core/models/taskschema.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmarmijosa/projects/angular-kanban-workshop/src/main.ts */"zUnb");


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../material-cdk/material-cdk.module */ "sWd1");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modal.component */ "ajRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







const declarables = [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_2__["MaterialCdkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_2__["MaterialCdkModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");




class AppComponent {
    constructor() {
        this.title = 'Workshop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _board_board_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board/board.module */ "pax7");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _board_board_module__WEBPACK_IMPORTED_MODULE_7__["BoardModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _board_board_module__WEBPACK_IMPORTED_MODULE_7__["BoardModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"]] }); })();


/***/ }),

/***/ "ZMcb":
/*!*******************************************!*\
  !*** ./src/app/core/models/listschema.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "ZwZK":
/*!***********************************************************************!*\
  !*** ./src/app/board/components/create-task/create-task.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_utils___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/ */ "iFvM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/task.service */ "zCBn");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");













const _c0 = ["autosize"];
function CreateTaskComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priority_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", priority_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", priority_r3.viewValue, " ");
} }
class CreateTaskComponent {
    constructor(fb, _ngZone, tasksService) {
        this.fb = fb;
        this._ngZone = _ngZone;
        this.tasksService = tasksService;
        this.priorities = [
            { value: 'urgent', viewValue: 'Urgente' },
            { value: 'moderate', viewValue: 'Moderado' },
            { value: 'low', viewValue: 'Bajo' },
        ];
    }
    ngOnInit() {
        this.setForm();
        this.selectedPriority = '';
        if (this.task && this.task.id && this.task.id.length > 0) {
            this.setValuesOnForm(this.task);
            this.formText = 'Editar';
            this.selectedPriority = this.task.priority;
        }
        else {
            this.formText = 'Crear';
        }
    }
    setForm() {
        this.createTask = this.fb.group({
            date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            priority: ['urgent', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    onFormAdd(form) {
        if (this.createTask.valid && this.task && !this.task.id) {
            form.id = Object(src_app_shared_utils___WEBPACK_IMPORTED_MODULE_2__["generateUniqueId"])();
            this.tasksService.addTask(form);
            this.close();
        }
        else if (this.task && this.listId) {
            const findPriority = this.priorities.find((element) => form.priority === element.value);
            form.id = this.task.id;
            form.priority = !findPriority ? this.task.priority : form.priority;
            form.date = new Date(form.date);
            if (form.priority) {
                this.tasksService.updateTask(form, this.listId);
            }
            this.close();
        }
    }
    setValuesOnForm(form) {
        this.createTask.setValue({
            date: new Date(form.date),
            priority: form.priority,
            description: form.description,
        });
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
    close() {
        this.connectedOverlay.overlayRef.detach();
    }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) { return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"])); };
CreateTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateTaskComponent, selectors: [["app-create-task"]], viewQuery: function CreateTaskComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
    } }, inputs: { connectedOverlay: "connectedOverlay", task: "task", listId: "listId" }, decls: 41, vars: 8, consts: [["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], [1, "form__header"], [1, "form__header__title"], ["mat-raised-button", "", 1, "form__header__close-button", 3, "click"], ["aria-hidden", "false", "aria-label", "close icon"], [1, "form__fields"], ["appearance", "fill", 1, "form__fields__item"], ["matInput", "", "placeholder", "Fecha", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matNativeControl", "", "name", "priority", "formControlName", "priority", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", "color", "primary", 1, "form__fields__item"], ["matInput", "", "formControlName", "description", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"], ["mat-raised-button", "", "color", "primary", 1, "form__fields__button", 3, "disabled"], [3, "value"]], template: function CreateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreateTaskComponent_Template_form_ngSubmit_0_listener() { return ctx.onFormAdd(ctx.createTask.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Fecha es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "requerida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Seleccione una prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_select_ngModelChange_22_listener($event) { return ctx.selectedPriority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CreateTaskComponent_option_24_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Prioridad es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "requerida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Descripcion es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "requerida");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.createTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.formText, " Tarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedPriority);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.createTask.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.formText, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["CdkTextareaAutosize"]], styles: [".form[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5em;\n  box-shadow: none;\n  margin: 3em auto 0;\n  padding: 1em;\n}\n.form__fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.form__fields__item[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.5em;\n}\n.form__fields__item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n  vertical-align: bottom;\n}\n.form__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.form__header__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.form__header__close-button[_ngcontent-%COMP%] {\n  border: 0;\n  box-shadow: none;\n  position: relative;\n  top: -10px;\n}\n@media (min-width: 960px) {\n  .form[_ngcontent-%COMP%] {\n    box-shadow: 0.1em 0.1em 0.5em lightgrey;\n    width: 50%;\n  }\n  .form__fields[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: row;\n  }\n  .form__fields__item[_ngcontent-%COMP%] {\n    flex: 1 40%;\n  }\n  .form__fields__button[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 50%;\n  }\n  .form__header[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .form__header__button[_ngcontent-%COMP%] {\n    min-width: 20%;\n  }\n  .form__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NyZWF0ZS10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUNNO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUZKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBR0k7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFETjtBQUtFO0VBdkNGO0lBd0NJLHVDQUFBO0lBQ0EsVUFBQTtFQUZGO0VBR0U7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0VBREo7RUFFSTtJQUNFLFdBQUE7RUFBTjtFQUVJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7RUFBTjtFQUlFO0lBQ0UsbUJBQUE7RUFGSjtFQUdJO0lBQ0UsY0FBQTtFQUROO0VBR0k7SUFDRSxnQkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDNlbSBhdXRvIDA7XG4gIHBhZGRpbmc6IDFlbTtcblxuICAmX19maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxuICAgICZfX2l0ZW0ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IC41ZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41ZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgICAmX190aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICZfX2Nsb3NlLWJ1dHRvbiB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBib3gtc2hhZG93OiAuMWVtIC4xZW0gLjVlbSBsaWdodGdyZXk7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAmX19maWVsZHMge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgZmxleDogMSA0MCU7XG4gICAgICB9XG4gICAgICAmX19idXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMjAlO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class FooterComponent {
    constructor() {
        this.today = Date.now();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 4, consts: [[1, "footer"], ["color", "primary", 1, "toolbar"], [1, "toolbar__text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.today, "yyyy"), "");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .toolbar__text[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDTiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICAudG9vbGJhciB7XG4gICAgJl9fdGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 0, consts: [["color", "primary", 1, "toolbar"], [1, "toolbar__spacer"], [1, "toolbar__menu"], ["href", "#", "routerLink", "/home", "routerLinkActive", "active", 1, "toolbar__menu__text"], ["mat-icon-button", "", "aria-label", "Home option", 1, "toolbar__menu__icon", "favorite-icon"], ["href", "#", "routerLink", "/board", "routerLinkActive", "active", 1, "toolbar__menu__text"], ["mat-icon-button", "", "aria-label", "Board option", 1, "toolbar__menu__icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kanban");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tablero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar__spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.toolbar__menu[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  list-style: none;\n}\n.toolbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\n.toolbar__menu__icon[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  color: white;\n  vertical-align: middle;\n}\n.toolbar__menu__text[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.toolbar__menu__text.active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBR047QUFESTtFQUNFLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUdOO0FBREk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUdOO0FBRk07RUFDRSwwQkFBQTtBQUlSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgJl9fc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAmX19tZW51IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICB9XG4gICAgJl9faWNvbntcbiAgICAgIGJvcmRlcjowO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAmX190ZXh0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "ajRT":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






const _c0 = ["templatePortalContent"];
function ModalComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
class ModalComponent {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortal"](this.templatePortalContent, this._viewContainerRef);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templatePortalContent = _t.first);
    } }, decls: 9, vars: 0, consts: [[4, "cdkPortalOutlet"], ["mat-button", "", "mat-dialog-close", "", "color", "secondary"], ["aria-hidden", "false", "aria-label", "close icon"], ["templatePortalContent", ""]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tu Tarea ha sido eliminada exitosamente!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDA7XG59XG5cbmRpdiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59Il19 */"] });


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core */ "ey9i");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/task.service */ "zCBn");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomeComponent_mat_task_24_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_task_24_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_task_24_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "assignment_returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "task__header--urgent": a0, "task__header--moderate": a1, "task__header--low": a2 }; };
function HomeComponent_mat_task_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-task", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-task-header", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-task-title", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_mat_task_24_mat_icon_4_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_mat_task_24_mat_icon_5_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_mat_task_24_mat_icon_6_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-task-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fecha de finalizaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-task-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c0, task_r2.priority === "urgent", task_r2.priority === "moderate", task_r2.priority === "low"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r2.priority === "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r2.priority === "moderate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r2.priority === "low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, task_r2.date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r2.description, " ");
} }
function HomeComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No hay elementos para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(apiService, taskService) {
        this.apiService = apiService;
        this.taskService = taskService;
    }
    ngOnInit() { }
    // 
    getPrioritiesTask(PriorityType) {
        this.taskService.getBoardList$
            .subscribe((response) => {
            const lists = response;
            let tasks = [];
            lists.map((element) => {
                element.tasks.map((task) => {
                    if (task.priority == PriorityType) {
                        tasks.push(task);
                    }
                });
            });
            this.taskList = tasks;
        }, (error) => (console.log('Ups! we have an error: ', error)));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 26, vars: 2, consts: [[1, "home"], [1, "home__title"], [1, "home__task-list"], [1, "home__task-list__title"], [1, "home__task-list__buttons"], ["mat-button", "", "mat-raised-button", "", 1, "option-button", 3, "click"], ["aria-hidden", "false", "aria-label", "urgent icon"], ["aria-hidden", "false", "aria-label", "medium icon"], [1, "home__task-list__container"], ["class", "task", 4, "ngFor", "ngForOf"], ["class", "home__task-list__message", 4, "ngIf"], [1, "task"], [3, "ngClass"], [1, "task-title"], [1, "task-title__icon"], ["aria-hidden", "false", "aria-label", "urgent icon", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "medium icon", 4, "ngIf"], [1, "task__task-list__subtitle"], [1, "task__content"], [1, "task__task-list__description"], [1, "home__task-list__message"], [1, "text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kanban");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " En nuestro d\u00EDa a d\u00EDa siempre tenemos que realizar diferentes tipos de tareas y priorizarlas y dejarlas por escrito nos ayuda a abordarlas mucho m\u00E1s r\u00E1pido y lograr su realizaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Por ello en este tablero te invitamos a organizar tu d\u00EDa a d\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lista de tareas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.getPrioritiesTask("urgent"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Urgentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.getPrioritiesTask("moderate"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Moderadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_19_listener() { return ctx.getPrioritiesTask("low"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "assignment_returned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bajas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_mat_task_24_Template, 17, 12, "mat-task", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.taskList == null ? null : ctx.taskList.length) == 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  padding: 2em;\n  margin-bottom: 6em;\n}\n.home__title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d3d3d3;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);\n  font-size: 3em;\n  padding-bottom: 0.5em;\n  text-align: center;\n}\n.home__task-list__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.home__task-list__buttons[_ngcontent-%COMP%]   .option-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n}\n.home__task-list__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.home__task-list__container[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 0.1em 0.1em 0.5em lightgrey;\n  margin: 1em;\n  padding: 1em;\n}\n.home__task-list__container[_ngcontent-%COMP%]   .task__header--urgent[_ngcontent-%COMP%] {\n  border-bottom: 5px solid salmon;\n  display: block;\n  padding: 1em;\n}\n.home__task-list__container[_ngcontent-%COMP%]   .task__header--moderate[_ngcontent-%COMP%] {\n  border-bottom: 5px solid lightseagreen;\n  display: block;\n  padding: 1em;\n}\n.home__task-list__container[_ngcontent-%COMP%]   .task__header--low[_ngcontent-%COMP%] {\n  border-bottom: 5px solid lightgoldenrodyellow;\n  display: block;\n  padding: 1em;\n}\n.home__task-list__container[_ngcontent-%COMP%]   .task__header[_ngcontent-%COMP%]   .task-title__icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  vertical-align: middle;\n}\n.home__task-list__container[_ngcontent-%COMP%]   .task__content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1em;\n}\n.home__task-list__message[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  margin-top: 2em;\n  padding: 2em;\n}\n.home__task-list__message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQUtFO0VBQ0UsZ0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSk47QUFLTTtFQUNFLGNBQUE7QUFIUjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUpOO0FBTU07RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKUjtBQVFVO0VBQ0UsK0JBQUE7RUFyQ1YsY0FBQTtFQUNBLFlBQUE7QUFnQ0Y7QUFRVTtFQUNFLHNDQUFBO0VBMUNWLGNBQUE7RUFDQSxZQUFBO0FBcUNGO0FBUVU7RUFDRSw2Q0FBQTtFQS9DVixjQUFBO0VBQ0EsWUFBQTtBQTBDRjtBQVNZO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQVBkO0FBYVE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQVhWO0FBZ0JJO0VBQ0UseUhBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBZE47QUFlTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFiUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5ob21lIHtcbiAgcGFkZGluZzogMmVtO1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG4gICZfX3RpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgJl9fdGFzay1saXN0IHtcbiAgICAmX19idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAub3B0aW9uLWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmX19jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLnRhc2sge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMWVtIDAuMWVtIDAuNWVtIGxpZ2h0Z3JleTtcbiAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcblxuICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgIFxuICAgICAgICAgICYtLXVyZ2VudCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgc2FsbW9uO1xuICAgICAgICAgICAgQGluY2x1ZGUgaGVhZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgJi0tbW9kZXJhdGUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG4gICAgICAgICAgICBAaW5jbHVkZSBoZWFkZXI7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAmLS1sb3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgICAgICAgICAgQGluY2x1ZGUgaGVhZGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50YXNrLXRpdGxlIHtcbiAgICAgICAgICAgICZfX2ljb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb250ZW50e1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgICZfX21lc3NhZ2Uge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../material-cdk/material-cdk.module */ "sWd1");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_1__["MaterialCdkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_1__["MaterialCdkModule"]] }); })();


/***/ }),

/***/ "dJ3e":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "qc5V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });




/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "dJ3e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "sKXY");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "iFvM":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: generateUniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "po+y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["generateUniqueId"]; });




/***/ }),

/***/ "ifin":
/*!*********************************************************!*\
  !*** ./src/app/board/components/task/task.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/modal/modal.component */ "ajRT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/task.service */ "zCBn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function TaskComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "assignment_returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "task--urgent": a0, "task--moderate": a1, "task--low": a2 }; };
class TaskComponent {
    constructor(dialog, tasksService) {
        this.dialog = dialog;
        this.tasksService = tasksService;
        this.editTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    handleEditTask(task) {
        this.editTask.emit(task);
    }
    removeTask(taskId) {
        const dialogRef = this.dialog.open(src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]);
        dialogRef.afterClosed().subscribe((result) => {
            if (this.list) {
                this.tasksService.removeTask(taskId, this.list);
            }
        });
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { task: "task", list: "list" }, outputs: { editTask: "editTask" }, decls: 20, vars: 13, consts: [[1, "task", 3, "id", "ngClass"], [1, "task__icon"], ["aria-hidden", "false", "aria-label", "urgent icon", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "medium icon", 4, "ngIf"], [1, "task__title"], ["matTooltip", "Editar tarea", "matTooltipClass", "custom-tooltip-blue", "matTooltipPosition", "above", "mat-icon-button", "", 3, "click"], ["aria-label", "icon-button to edit"], ["matTooltip", "Eliminar tarea", "matTooltipPosition", "above", "mat-icon-button", "", 3, "click"], ["aria-label", "icon-button to remove"], [1, "task__date"], [1, "task__description"], ["aria-hidden", "false", "aria-label", "urgent icon"], ["aria-hidden", "false", "aria-label", "medium icon"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_mat_icon_4_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_7_listener() { return ctx.handleEditTask(ctx.task); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_10_listener() { return ctx.removeTask(ctx.task.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fecha de finalizaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "task_", ctx.task.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c0, ctx.task.priority === "urgent", ctx.task.priority === "moderate", ctx.task.priority === "low"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task.priority === "urgent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task.priority === "moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task.priority === "low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, ctx.task.date), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".task[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0.1em 0.1em 0.5em lightgrey;\n  color: #333;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 0 6px 0;\n  padding: 6px 6px 2px 8px;\n}\n.task--urgent[_ngcontent-%COMP%] {\n  border-left: 5px solid salmon;\n}\n.task--moderate[_ngcontent-%COMP%] {\n  border-left: 5px solid lightseagreen;\n}\n.task--low[_ngcontent-%COMP%] {\n  border-left: 5px solid lightgoldenrodyellow;\n}\n.task__title[_ngcontent-%COMP%] {\n  flex: 1 1 40%;\n  font-weight: bold;\n  text-align: center;\n}\n.task__icon[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: left;\n}\n.task__date[_ngcontent-%COMP%], .task__description[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBQ0Q7QUFDQztFQUNDLDZCQUFBO0FBQ0Y7QUFFQztFQUNDLG9DQUFBO0FBQUY7QUFHQztFQUNDLDJDQUFBO0FBREY7QUFJQztFQUNDLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJQztFQUNDLGFBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUM7RUFDQyxjQUFBO0FBRkYiLCJmaWxlIjoidGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym94LXNoYWRvdzogMC4xZW0gMC4xZW0gMC41ZW0gbGlnaHRncmV5O1xuXHRjb2xvcjogIzMzMztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtYXJnaW46IDAgMCA2cHggMDtcblx0cGFkZGluZzogNnB4IDZweCAycHggOHB4O1xuXHRcblx0Ji0tdXJnZW50IHtcblx0XHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHNhbG1vbjtcblx0fVxuXG5cdCYtLW1vZGVyYXRlIHtcblx0XHRib3JkZXItbGVmdDogNXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XG5cdH1cblxuXHQmLS1sb3cge1xuXHRcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG5cdH1cblxuXHQmX190aXRsZSB7XG5cdFx0ZmxleDogMSAxIDQwJTtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0Jl9faWNvbiB7XG5cdFx0ZmxleDogMSAxIDIwJTtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR9XG5cdCZfX2RhdGUsICZfX2Rlc2NyaXB0aW9uIHtcblx0XHRmbGV4OiAxIDEgMTAwJTtcblx0fVxufSJdfQ== */"] });


/***/ }),

/***/ "kjd/":
/*!************************************************!*\
  !*** ./src/app/board/board/board.component.ts ***!
  \************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core */ "ey9i");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/task.service */ "zCBn");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/list/list.component */ "lbgG");
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/create-task/create-task.component */ "ZwZK");









function BoardComponent_app_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editTask", function BoardComponent_app_list_5_Template_app_list_editTask_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.displayOverlay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", list_r4);
} }
function BoardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-task", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("connectedOverlay", _r2)("task", ctx_r3.task)("listId", ctx_r3.listId);
} }
const initialValue = {
    id: '',
    description: '',
    date: '',
    priority: '',
};
class BoardComponent {
    constructor(apiService, taskService) {
        this.apiService = apiService;
        this.taskService = taskService;
        this.isOverlayDisplayed = false;
        this.overlayOptions = {
            hasBackdrop: true,
            positions: [
                { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' },
            ],
        };
        this.task = initialValue;
        this.lists = [];
    }
    ngOnInit() {
        // this.getDataList();
        this.getDataStored();
    }
    getDataList() {
        this.apiService.getApi().subscribe((response) => (this.lists = response['list']), (error) => console.log('Ups! we have an error: ', error));
    }
    getDataStored() {
        this.taskService.getBoardList$
            .subscribe((response) => this.lists = response, (error) => (console.log('Ups! we have an error: ', error)));
    }
    displayOverlay(event) {
        this.isOverlayDisplayed = true;
        if (!!event) {
            this.task = {
                date: event.date,
                id: event.id,
                description: event.description,
                priority: event.priority,
            };
            if (event.listId) {
                this.listId = event.listId;
            }
        }
        else {
            this.task = initialValue;
        }
    }
    hideOverlay() {
        this.isOverlayDisplayed = false;
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 8, vars: 5, consts: [["cdkDropListGroup", "", 1, "board"], ["cdkOverlayOrigin", "", "mat-raised-button", "", "color", "primary", 1, "board__add", 3, "click"], ["trigger", "cdkOverlayOrigin"], [1, "board__list"], [3, "list", "editTask", 4, "ngFor", "ngForOf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "backdropClick", "detach"], ["connectedOverlay", "cdkConnectedOverlay"], [3, "list", "editTask"], [3, "connectedOverlay", "task", "listId"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_1_listener() { return ctx.displayOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " A\u00F1adir Tarea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardComponent_app_list_5_Template, 1, 1, "app-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_ng_template_6_Template, 1, 3, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function BoardComponent_Template_ng_template_backdropClick_6_listener() { return ctx.hideOverlay(); })("detach", function BoardComponent_Template_ng_template_detach_6_listener() { return ctx.hideOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOverlayDisplayed)("cdkConnectedOverlayHasBackdrop", ctx.overlayOptions.hasBackdrop)("cdkConnectedOverlayPositions", ctx.overlayOptions.positions);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["CdkConnectedOverlay"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskComponent"]], styles: [".board__add[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.board__list[_ngcontent-%COMP%] {\n  display: flex;\n  height: 80vh;\n  overflow-x: auto;\n  padding: 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkIHtcbiAgJl9fYWRkIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cbiAgJl9fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "lbgG":
/*!*********************************************************!*\
  !*** ./src/app/board/components/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/task.service */ "zCBn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task/task.component */ "ifin");







function ListComponent_app_task_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editTask", function ListComponent_app_task_5_Template_app_task_editTask_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleEdit(task_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r1)("list", ctx_r0.list);
} }
class ListComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.editTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    handleEdit(task) {
        if (this.list) {
            task.listId = this.list.id;
            this.editTask.emit(task);
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { list: "list" }, outputs: { editTask: "editTask" }, decls: 6, vars: 4, consts: [["cdkDropList", "", 1, "list", 3, "id", "cdkDropListData", "cdkDropListDropped"], [1, "list__title"], [1, "list__tasks"], ["cdkDrag", "", 3, "task", "list", "editTask", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "task", "list", "editTask"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ListComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListComponent_app_task_5_Template, 1, 2, "app-task", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "list_", ctx.list.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.list.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.list.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.tasks);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: [".list[_ngcontent-%COMP%] {\n  background-color: #f5f5f5ad;\n  border-radius: 10px;\n  box-shadow: 0.1em 0.1em 0.5em lightgrey;\n  height: 80vh;\n  margin: 5px;\n  padding: 1em;\n  width: 350px;\n}\n.list__title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px 0;\n}\n.list__tasks[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7QUFFRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuLmxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1YWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAuMWVtIDAuMWVtIDAuNWVtIGxpZ2h0Z3JleTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogMzUwcHg7XG4gICAgXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICB9XG4gIFxuICAmX190YXNrcyB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "dJ3e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "pax7":
/*!***************************************!*\
  !*** ./src/app/board/board.module.ts ***!
  \***************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _board_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-routing.module */ "uAPn");
/* harmony import */ var _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../material-cdk/material-cdk.module */ "sWd1");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ "kjd/");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "lbgG");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/task/task.component */ "ifin");
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-task/create-task.component */ "ZwZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class BoardModule {
}
BoardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: BoardModule });
BoardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function BoardModule_Factory(t) { return new (t || BoardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _board_routing_module__WEBPACK_IMPORTED_MODULE_2__["BoardRoutingModule"],
            _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_3__["MaterialCdkModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BoardModule, { declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _components_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"], _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_7__["CreateTaskComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _board_routing_module__WEBPACK_IMPORTED_MODULE_2__["BoardRoutingModule"],
        _material_cdk_material_cdk_module__WEBPACK_IMPORTED_MODULE_3__["MaterialCdkModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "po+y":
/*!*****************************************!*\
  !*** ./src/app/shared/utils/helpers.ts ***!
  \*****************************************/
/*! exports provided: generateUniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return generateUniqueId; });
const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);


/***/ }),

/***/ "qc5V":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    // api with many task
    //private apiRoot: string = 'https://run.mocky.io/v3/0933ddef-c9bf-4f26-8ddf-77990fb490cb';
    constructor(http) {
        this.http = http;
        //api with one task
        //private apiRoot: string = 'https://run.mocky.io/v3/26045374-863c-469d-85c4-51ea1135ce8a';
        //api without any task
        this.apiRoot = 'https://run.mocky.io/v3/7841d1af-e8d5-446a-bac5-3506fdd05659';
    }
    /* Get Api Data from mock service */
    getApi() {
        return this.http
            .get(this.apiRoot)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    /* Handle request error */
    handleError(res) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(res.error || 'Server error');
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sKXY":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskschema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskschema */ "+VA2");
/* empty/unused harmony star reexport *//* harmony import */ var _listschema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listschema */ "ZMcb");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "sWd1":
/*!*****************************************************!*\
  !*** ./src/app/material-cdk/material-cdk.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialCdkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCdkModule", function() { return MaterialCdkModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");

//Material









//CDK





const components = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["TextFieldModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"],
];
class MaterialCdkModule {
}
MaterialCdkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: MaterialCdkModule });
MaterialCdkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function MaterialCdkModule_Factory(t) { return new (t || MaterialCdkModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], components], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["TextFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](MaterialCdkModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["TextFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["TextFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"]] }); })();


/***/ }),

/***/ "uAPn":
/*!***********************************************!*\
  !*** ./src/app/board/board-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardRoutingModule", function() { return BoardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "kjd/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]
    }
];
class BoardRoutingModule {
}
BoardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BoardRoutingModule });
BoardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BoardRoutingModule_Factory(t) { return new (t || BoardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BoardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'board',
        //before syntax deprecated in v.8
        //loadChildren: './board/board.module#BoardModule'
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./board/board.module */ "pax7")).then(m => m.BoardModule)
    },
    {
        path: 'home',
        //before syntax deprecated in v.8
        //loadChildren: './home/home.module#HomeModule',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                // preload all modules; optionally we could
                // implement a custom preloading strategy for just some
                // of the modules
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zCBn":
/*!***********************************************!*\
  !*** ./src/app/core/services/task.service.ts ***!
  \***********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "ey9i");




class TaskService {
    constructor(apiService) {
        this.apiService = apiService;
        this.boardList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.list$ = this.boardList.asObservable();
        this.getBoardList$ = this.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((list) => list));
        this.loadInitialData();
    }
    /* Load initial data to render in a component */
    loadInitialData() {
        return this.apiService.getApi().subscribe((response) => {
            if (!!response) {
                this.boardList.next(response['list']);
            }
        });
    }
    /* getter list of Board */
    get list() {
        return this.boardList.getValue();
    }
    /* setter list of Board */
    set list(value) {
        this.boardList.next(value);
    }
    /* Add new card to board list */
    addTask(data) {
        const card = data;
        const elementsIndex = this.list.findIndex((element) => element.id === '1');
        this.list[elementsIndex].tasks.push(card);
    }
    /* Edit card on list */
    updateTask(data, listId) {
        if (data) {
            const elementsIndex = this.list.findIndex((element) => element.id === listId);
            const task = this.list[elementsIndex].tasks.map((element) => {
                if (element.id === data.id) {
                    element.date = new Date(data.date);
                    element.description = data.description;
                    element.priority = data.priority;
                }
                return element;
            });
        }
    }
    /* Remove a card of board list */
    removeTask(dataId, list) {
        const elementsIndex = this.list.findIndex((element) => element.id == list.id);
        const tasks = this.list[elementsIndex].tasks.filter((task) => task.id !== dataId);
        this.list[elementsIndex].tasks = tasks;
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map