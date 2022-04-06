"use strict";
(self["webpackChunkscouting_portal"] = self["webpackChunkscouting_portal"] || []).push([["projects_scouting-portal_src_app_private_player_player_module_ts"],{

/***/ 8215:
/*!**************************************************************************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/components/player-info/components/player-details/player-details.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerDetailsComponent": () => (/* binding */ PlayerDetailsComponent)
/* harmony export */ });
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
/* harmony import */ var _scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scouting/private/player/player.routes */ 3746);
/* harmony import */ var _sw_ui_components_modules_fixture_fixture_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sw-ui-components/modules/fixture/fixture.routes */ 6886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 9273);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var _ui_components_src_lib_components_player_player_career_player_career_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/components/player/player-career/player-career.component */ 3453);
/* harmony import */ var _ui_components_src_lib_components_player_player_transfers_player_transfers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/components/player/player-transfers/player-transfers.component */ 950);
/* harmony import */ var _ui_components_src_lib_pipes_country_flag_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/pipes/country-flag.pipe */ 4050);
/* harmony import */ var _ui_components_src_lib_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/pipes/country.pipe */ 3443);
/* harmony import */ var _ui_components_src_lib_pipes_player_age_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/pipes/player-age.pipe */ 2989);
















function PlayerDetailsComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "countryFlag");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "country");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, "PLAYERS_ADVANCED_SEARCH.FLAG_IMG_ALT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, playerDetails_r1 == null ? null : playerDetails_r1.passportArea), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 7, playerDetails_r1 == null ? null : playerDetails_r1.passportArea == null ? null : playerDetails_r1.passportArea.id, "alpha2code"));
} }
function PlayerDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "countryFlag");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "country");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, PlayerDetailsComponent_ng_container_0_div_14_Template, 7, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "p-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "p-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "playerAge");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "country");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "p-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "p-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "p-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "p-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "p-tabView");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "p-tabPanel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "aft-player-career");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "p-tabPanel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "aft-player-transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const playerDetails_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 18, "PLAYER.NATIONALITY_LBL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 20, "PLAYERS_ADVANCED_SEARCH.FLAG_IMG_ALT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 22, playerDetails_r1 == null ? null : playerDetails_r1.birthArea), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 24, playerDetails_r1 == null ? null : playerDetails_r1.birthArea == null ? null : playerDetails_r1.birthArea.id, "alpha2code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (playerDetails_r1 == null ? null : playerDetails_r1.passportAreaId) !== (playerDetails_r1 == null ? null : playerDetails_r1.birthAreaId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 27, "PLAYER.BIRTHDAY_LBL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 29, "PLAYER.BIRTHPLACE_LBL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](26, 31, playerDetails_r1 == null ? null : playerDetails_r1.birthDate, "dd/MM/yyyy"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 34, playerDetails_r1 == null ? null : playerDetails_r1.birthDate), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](30, 36, playerDetails_r1 == null ? null : playerDetails_r1.birthArea == null ? null : playerDetails_r1.birthArea.id, "name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 39, "PLAYER.HEIGHT_LBL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 41, "PLAYER.WEIGHT_LBL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", playerDetails_r1 == null ? null : playerDetails_r1.height, " cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", playerDetails_r1 == null ? null : playerDetails_r1.weight, " kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 43, "PLAYER.FOOT_LBL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (playerDetails_r1 == null ? null : playerDetails_r1.foot == null ? null : playerDetails_r1.foot.length) ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](52, 45, "PLAYER.FOOT." + (playerDetails_r1 == null ? null : playerDetails_r1.foot == null ? null : playerDetails_r1.foot.toUpperCase())) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 47, "PLAYER.FOOT.UNDEFINED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 49, "PLAYER.CAREER_TAB"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](61, 51, "PLAYER.TRANSFERS_TAB"));
} }
class PlayerDetailsComponent {
    constructor(_playerService, _router, _confirmationService, _translateService, _messagingService) {
        this._playerService = _playerService;
        this._router = _router;
        this._confirmationService = _confirmationService;
        this._translateService = _translateService;
        this._messagingService = _messagingService;
        this._subscriptions$ = [];
        this.playerDetails$ = this._playerService.playerDetails$;
    }
    ngOnDestroy() {
        this._subscriptions$.forEach(subscription => subscription.unsubscribe());
    }
    goToPlayerStats() {
        var _a, _b, _c;
        if (((_a = this.playerDetails$.value) === null || _a === void 0 ? void 0 : _a.algorithmScore) && ((_b = this.playerDetails$.value) === null || _b === void 0 ? void 0 : _b.algorithmScore) > 0) {
            this._router.navigate((0,_scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__.generatePlayerModuleRoute)(_scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__.PLAYER_ROUTES.PLAYER_STATS, (_c = this.playerDetails$.value) === null || _c === void 0 ? void 0 : _c.id.toString()));
        }
    }
    goToPlayerAnalysis() {
        var _a, _b, _c;
        if (((_a = this.playerDetails$.value) === null || _a === void 0 ? void 0 : _a.analystScore) && ((_b = this.playerDetails$.value) === null || _b === void 0 ? void 0 : _b.analystScore) > 0) {
            this._router.navigate((0,_scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__.generatePlayerModuleRoute)(_scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__.PLAYER_ROUTES.PLAYER_STATS, (_c = this.playerDetails$.value) === null || _c === void 0 ? void 0 : _c.id.toString(), { secondTab: true }));
        }
    }
    getPlayerRole(playerRole) {
        var _a;
        const roleId = playerRole || ((_a = this.playerDetails$.value) === null || _a === void 0 ? void 0 : _a.roleId);
        const role = _aft_core__WEBPACK_IMPORTED_MODULE_0__.EntitiesUtils.findRoleById(roleId);
        return (role === null || role === void 0 ? void 0 : role.code3) || 'Not found';
    }
    onContactPlayer() {
        this._confirmationService.confirm({
            header: this._translateService.instant('PLAYER.CONTACT.MODAL_HEADER'),
            message: this._translateService.instant('PLAYER.CONTACT.MODAL_BODY'),
            acceptLabel: this._translateService.instant('PLAYER.CONTACT.MODAL_ACCEPT'),
            rejectLabel: this._translateService.instant('GENERAL.CANCEL'),
            accept: () => {
                var _a;
                const playerDetails = this.playerDetails$.value;
                if (playerDetails) {
                    this._playerService.playerContactInfo(playerDetails.firstName, playerDetails.lastName, ((_a = playerDetails.currentTeam) === null || _a === void 0 ? void 0 : _a.name) || 'No team');
                }
                else {
                    this._messagingService.error('GENERAL.ERRORS.DEFAULT.TITLE', 'GENERAL.ERRORS.DEFAULT.MESSAGE');
                }
            },
        });
    }
    goToTeam(team) {
        if (team) {
            this._router.navigate((0,_sw_ui_components_modules_fixture_fixture_routes__WEBPACK_IMPORTED_MODULE_2__.generateFullFixtureModuleRoute)(_sw_ui_components_modules_fixture_fixture_routes__WEBPACK_IMPORTED_MODULE_2__.FIXTURE_MODULE_ROUTES.TEAM_DETAILS, team.id));
        }
    }
}
PlayerDetailsComponent.ɵfac = function PlayerDetailsComponent_Factory(t) { return new (t || PlayerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.MessagingService)); };
PlayerDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlayerDetailsComponent, selectors: [["aft-scout-player-details"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "personalDetail_section"], [1, "infoDetail"], [1, "nacionality"], [1, "flag_item"], [1, "country_flag", 3, "alt", "src"], [1, "base_text"], ["class", "flag_item", 4, "ngIf"], ["layout", "vertical", 1, "verticalDivider"], [1, "horizontalDivider"], [1, "clubHistory_section"], [3, "header"]], template: function PlayerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PlayerDetailsComponent_ng_container_0_Template, 63, 53, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.playerDetails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.Divider, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabPanel, _ui_components_src_lib_components_player_player_career_player_career_component__WEBPACK_IMPORTED_MODULE_3__.PlayerCareerComponent, _ui_components_src_lib_components_player_player_transfers_player_transfers_component__WEBPACK_IMPORTED_MODULE_4__.PlayerTransfersComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _ui_components_src_lib_pipes_country_flag_pipe__WEBPACK_IMPORTED_MODULE_5__.CountryFlagPipe, _ui_components_src_lib_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_6__.CountryPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _ui_components_src_lib_pipes_player_age_pipe__WEBPACK_IMPORTED_MODULE_7__.PlayerAgePipe], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.personalDetail_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #e8e8e8;\n  padding: 0.4rem;\n}\n@media screen and (max-width: 991px) {\n  .personalDetail_section[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 991px) {\n  .personalDetail_section[_ngcontent-%COMP%]   .horizontalDivider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 991px) {\n  .personalDetail_section[_ngcontent-%COMP%]   .verticalDivider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 25%;\n}\n@media screen and (max-width: 991px) {\n  .personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.4rem;\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  line-height: 1.4rem;\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%]   .nacionality[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%]   .nacionality[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%]   .nacionality[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 2rem;\n  text-align: center;\n}\n.personalDetail_section[_ngcontent-%COMP%]   .infoDetail[_ngcontent-%COMP%]   .nacionality[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%]   .country_flag[_ngcontent-%COMP%] {\n  width: 25px;\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n  border: 2px solid white;\n  border-radius: 20px;\n}\n.clubHistory_section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.clubHistory_section[_ngcontent-%COMP%]   .titleSection[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #002d64;\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n.player_header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  max-width: 90%;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n@media screen and (max-width: 1440px) {\n  .player_header[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 8rem;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-right: 2.5rem;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .img_box.col_2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n  min-width: 140px;\n  padding-top: 140px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 50%;\n  background-color: #dedede;\n}\n@media screen and (max-width: 1199px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n    min-width: 125px;\n    padding-top: 125px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90px;\n  border-radius: 50px;\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  min-width: 88%;\n  height: 95%;\n  transform: translate(-50%, -50%);\n  transition: 1s ease;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    margin-left: 0px !important;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .base_title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .base_title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%] {\n    margin-right: 5px !important;\n    margin-left: 5px !important;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%]   .country_flag[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-bottom: 8px;\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n  border: 2px solid white;\n  border-radius: 20px;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container_left[_ngcontent-%COMP%]   .countries_box[_ngcontent-%COMP%]   .flags_box[_ngcontent-%COMP%]   .flag_item[_ngcontent-%COMP%]   .country_flag[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  border-bottom: 1px solid #dedede;\n  padding-bottom: 20px;\n  align-items: center;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 0px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  align-items: center;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .vertical_divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 3rem;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .first_name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .last_name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2.3rem;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .main_position[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .main_position[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .main_position[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media screen and (max-width: 1199px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_number[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 2.5rem;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_text[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .first_name[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .last_name[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 1.8rem;\n  }\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%] {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    margin-right: 0px !important;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_number[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-right: 15px;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 15px;\n    margin-right: 0px !important;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .main_position[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 0px;\n    justify-content: flex-start;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .points_button[_ngcontent-%COMP%] {\n  align-items: center;\n  max-height: 80px;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .points_button[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .points_button[_ngcontent-%COMP%]   .displayFlex[_ngcontent-%COMP%] {\n  align-items: center;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .top_box[_ngcontent-%COMP%]   .points_button[_ngcontent-%COMP%]   .displayFlex[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dedede;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-bottom: 20px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 0;\n  justify-content: flex-start;\n  width: auto;\n  max-width: 660px;\n}\n@media screen and (max-width: 1440px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%] {\n    max-width: 620px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    margin-bottom: 20px;\n    max-width: 280px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .vertical_divider[_ngcontent-%COMP%] {\n  display: none;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .info_item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 20px;\n  margin-right: 35px;\n}\n@media screen and (max-width: 1440px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .info_item[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .info_item[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  margin-bottom: 5px;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .info_item[_ngcontent-%COMP%]   .base_title[_ngcontent-%COMP%] {\n  font-size: 1.4rem !important;\n}\n@media screen and (max-width: 1440px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .info_item[_ngcontent-%COMP%]   .base_title[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .hard_data[_ngcontent-%COMP%]   .info_item[_ngcontent-%COMP%]   .position_pill[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%] {\n  align-items: center;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .rating_small_box[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  justify-content: flex-end;\n  margin-left: 10px;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .rating_small_box[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .rating_small_box[_ngcontent-%COMP%]   .rating_title_box[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .rating_small_box[_ngcontent-%COMP%]   .rating_title_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 25px;\n  height: 25px;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .vertical_divider[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 600px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .middle_box[_ngcontent-%COMP%]   .points_box[_ngcontent-%COMP%]   .vertical_divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%] {\n  align-items: center;\n}\n@media screen and (max-width: 767px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%] {\n  max-width: 290px;\n}\n@media screen and (max-width: 991px) {\n  .player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%] {\n    max-width: 350px;\n    text-align: center;\n  }\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 0.85rem;\n  font-weight: 300;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   .base_text.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_left[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%]   .team_img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.player_header[_ngcontent-%COMP%]   .player_data_container[_ngcontent-%COMP%]   .bottom_box[_ngcontent-%COMP%]   .data_right[_ngcontent-%COMP%]   .contact_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 50px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwicGxheWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUFFQSwrQkFBQTtBQUVBLHNCQUFBO0FBRUEsaUJBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFNQSxjQUFBO0FBUUEsV0FBQTtBQUlBLGNBQUE7QUFRQSxhQUFBO0FBUUEsV0FBQTtBQU9BLFlBQUE7QUFRQSxxQkFBQTtBQVNBLDRDQUFBO0FBRUEsY0FBQTtBQVNBLGtCQUFBO0FBU0EseUNBQUE7QUFFQSx1QkFBQTtBQU9BLGNBQUE7QUFPQSxpQkFBQTtBQW1CQSxlQUFBO0FBa0JBLGlCQUFBO0FBSUEsa0JBQUE7QUFtQkEscUNBQUE7QUFRQSxzQ0FBQTtBQUNBLHdEQUFBO0FDcExBO0VBQ0UsU0FBQTtBQXlCRjtBQXRCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQXlCRjtBQXhCRTtFQUxGO0lBTUksV0FBQTtJQUNBLHNCQUFBO0VBMkJGO0FBQ0Y7QUF6Qkk7RUFERjtJQUVJLGFBQUE7RUE0Qko7QUFDRjtBQXpCSTtFQURGO0lBRUksYUFBQTtFQTRCSjtBQUNGO0FBMUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUE0Qko7QUEzQkk7RUFORjtJQU9JLFdBQUE7RUE4Qko7QUFDRjtBQTdCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUErQk47QUE3Qkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUErQk47QUE3Qkk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBK0JOO0FBOUJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWdDUjtBQTlCUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBZ0NWO0FBOUJRO0VBQ0UsV0FBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvREFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFnQ1Y7QUF6QkE7RUFDRSxnQkFBQTtBQTRCRjtBQTNCRTtFQUNFLGlCQUFBO0VBQ0EsY0QvRFk7RUNnRVosZ0JBQUE7RUFDQSxtQkFBQTtBQTZCSjtBQXpCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE0QkY7QUEzQkU7RUFSRjtJQVNJLGNBQUE7RUE4QkY7QUFDRjtBQTVCRTtFQVpGO0lBYUksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUErQkY7QUFDRjtBQTlCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQWdDSjtBQS9CSTtFQU5GO0lBT0ksaUJBQUE7RUFrQ0o7QUFDRjtBQWpDSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbUNOO0FBbENNO0VBSkY7SUFLSSxpQkFBQTtFQXFDTjtFQXBDTTtJQUNFLFdBQUE7RUFzQ1I7QUFDRjtBQXBDTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkRoRU87QUNzR2Y7QUFyQ1E7RUFQRjtJQVFJLGdCQUFBO0lBQ0Esa0JBQUE7RUF3Q1I7QUFDRjtBQXZDUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUF5Q1Y7QUFwQ007RUFERjtJQUVJLG1CQUFBO0lBQ0EsMkJBQUE7RUF1Q047QUFDRjtBQXRDTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXdDUjtBQXZDUTtFQUhGO0lBSUksYUFBQTtFQTBDUjtBQUNGO0FBeENNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUEwQ1I7QUF6Q1E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBMkNWO0FBMUNVO0VBTEY7SUFNSSw0QkFBQTtJQUNBLDJCQUFBO0VBNkNWO0FBQ0Y7QUEzQ1U7RUFDRSxpQkFBQTtBQTZDWjtBQTVDWTtFQUZGO0lBR0ksYUFBQTtFQStDWjtBQUNGO0FBN0NVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1REFBQTtFQUNBLG9EQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQStDWjtBQTlDWTtFQVJGO0lBU0ksV0FBQTtFQWlEWjtBQUNGO0FBekNJO0VBREY7SUFFSSxVQUFBO0VBNENKO0FBQ0Y7QUEzQ0k7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQTZDTjtBQTVDTTtFQUxGO0lBTUksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUErQ047QUFDRjtBQTlDTTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFnRFI7QUEvQ1E7RUFDRSxhQUFBO0FBaURWO0FBL0NRO0VBTkY7SUFPSSw4QkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFrRFI7RUFqRFE7SUFDRSxhQUFBO0VBbURWO0VBakRRO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBbURWO0FBQ0Y7QUFoRFU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFrRFo7QUFoRFU7RUFDRSxpQkFBQTtBQWtEWjtBQTlDVTtFQUNFLGlCQUFBO0FBZ0RaO0FBOUNVO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQWdEWjtBQTlDVTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFnRFo7QUEvQ1k7RUFIRjtJQUlJLHVCQUFBO0VBa0RaO0FBQ0Y7QUFqRFk7RUFDRSxpQkFBQTtBQW1EZDtBQS9DUTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQWdEWjtFQTlDVTtJQUNFLGlCQUFBO0VBZ0RaO0VBNUNVO0lBQ0UsaUJBQUE7RUE4Q1o7RUE1Q1U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBOENaO0FBQ0Y7QUEzQ1E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtFQTZDVjtFQTVDVTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQThDWjtFQTNDUTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBNkNWO0VBNUNVO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0VBOENaO0FBQ0Y7QUExQ007RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBNENSO0FBM0NRO0VBSEY7SUFJSSxzQkFBQTtFQThDUjtBQUNGO0FBN0NRO0VBQ0UsbUJBQUE7QUErQ1Y7QUE5Q1U7RUFGRjtJQUdJLG1CQUFBO0VBaURWO0FBQ0Y7QUE3Q0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUErQ047QUE5Q007RUFKRjtJQUtJLHNCQUFBO0lBQ0Esb0JBQUE7RUFpRE47QUFDRjtBQWhETTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBa0RSO0FBakRRO0VBTkY7SUFPSSxnQkFBQTtFQW9EUjtBQUNGO0FBbkRRO0VBVEY7SUFVSSxlQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBc0RSO0FBQ0Y7QUFyRFE7RUFmRjtJQWdCSSx1QkFBQTtFQXdEUjtBQUNGO0FBdkRRO0VBQ0UsYUFBQTtBQXlEVjtBQXZEUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXlEVjtBQXhEVTtFQUpGO0lBS0ksa0JBQUE7RUEyRFY7QUFDRjtBQTFEVTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7QUE0RFo7QUExRFU7RUFDRSw0QkFBQTtBQTREWjtBQTNEWTtFQUZGO0lBR0ksNEJBQUE7RUE4RFo7QUFDRjtBQTVEVTtFQUNFLGlCQUFBO0FBOERaO0FBMURNO0VBQ0UsbUJBQUE7QUE0RFI7QUEzRFE7RUFGRjtJQUdJLHNCQUFBO0VBOERSO0FBQ0Y7QUE3RFE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUErRFY7QUE5RFU7RUFKRjtJQUtJLG1CQUFBO0VBaUVWO0FBQ0Y7QUFoRVU7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFrRVo7QUFqRVk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbUVkO0FBL0RRO0VBQ0UsYUFBQTtBQWlFVjtBQWhFVTtFQUZGO0lBR0ksY0FBQTtJQUNBLG1CQUFBO0VBbUVWO0FBQ0Y7QUFqRVE7RUFDRSxjQUFBO0FBbUVWO0FBbEVVO0VBRkY7SUFHSSxhQUFBO0VBcUVWO0FBQ0Y7QUFqRUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQW1FTjtBQWxFTTtFQUpGO0lBS0ksc0JBQUE7SUFDQSxtQkFBQTtFQXFFTjtBQUNGO0FBcEVNO0VBQ0UsbUJBQUE7QUFzRVI7QUFyRVE7RUFGRjtJQUdJLHNCQUFBO0VBd0VSO0FBQ0Y7QUF2RVE7RUFDRSxnQkFBQTtBQXlFVjtBQXhFVTtFQUZGO0lBR0ksZ0JBQUE7SUFDQSxrQkFBQTtFQTJFVjtBQUNGO0FBMUVVO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNEVaO0FBM0VZO0VBQ0UsZ0JBQUE7QUE2RWQ7QUEzRVk7RUFDRSxXQUFBO0FBNkVkO0FBdEVVO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBd0VaIiwiZmlsZSI6InBsYXllci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFNBU1MgVmFyaWFibGVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLy8vLy8gR2VuZXJhbCAvLy8vLyovXHJcblxyXG4vKi8gTWFpbiBHcmVlbiAvKi9cclxuJGNvbG9yTWFpbjogIzg4YjJhZDtcclxuJGNvbG9yTWFpbl9saWdodDogIzk5YWRhYjtcclxuJGNvbG9yTWFpbl9kYXJrOiAjNTc3ZTc5O1xyXG4kY29sb3JNYWluX3NoYWRvdzogcmdiYSgxOTksIDIwNiwgMjAwLCAwLjQxOCk7XHJcblxyXG4vKi8gTWFpbiBCbHVlIC8qL1xyXG4kY29sb3JNYWluQmx1ZTogIzAwMmQ2NDtcclxuJGNvbG9yTWFpbkJsdWVfbGlnaHQ6ICM0NzZlOWY7XHJcbiRjb2xvck1haW5CbHVlX2Rhcms6ICMxMjJjNGI7XHJcbiRjb2xvck1haW5CbHVlX3NoYWRvdzogcmdiYSgxMjMsIDEyOCwgMTU2LCAwLjUpO1xyXG4kY29sb3JNYWluQmx1ZV9jdGE6ICMwMDgxZmM7XHJcblxyXG4vKi8gTWFpbiBhbHQgLyovXHJcbiRjb2xvck1haW5BbHQ6ICMzMzQwNWQ7XHJcbiRjb2xvck1haW5BbHRfbGlnaHQ6ICM0MTViOTY7XHJcbiRjb2xvck1haW5BbHRfZGFyazogIzIwMmQ0YTtcclxuJGNvbG9yTWFpbkFsdF9zaGFkb3c6IHJnYmEoNTEsIDY0LCA5MywgNTAlKTtcclxuXHJcbi8qLyBTdWNjZXNzIC8qL1xyXG4kY29sb3JTdWNjZXNzOiAjMDliNDZjO1xyXG4kY29sb3JTdWNjZXNzX2xpZ2h0OiAjMGFjYzdiO1xyXG4kY29sb3JTdWNjZXNzX2Rhcms6ICMwYjkzNWE7XHJcbiRjb2xvclN1Y2Nlc3Nfc2hhZG93OiByZ2JhKDksIDE4MCwgMTA4LCA1MCUpO1xyXG4kY29sb3JTdWNjZXNzX2FsdEJrZzogI2RiZmZjNztcclxuJGNvbG9yU3VjY2Vzc19hbHRUZXh0OiAjNDE3ZTIwO1xyXG5cclxuLyovIEluZm8gLyovXHJcbiRjb2xvckluZm9fYWx0QmtnOiAjZThlZGZmO1xyXG4kY29sb3JJbmZvX2FsdFRleHQ6ICMzMzQwNWQ7XHJcblxyXG4vKi8gV2FybmluZyAvKi9cclxuJGNvbG9yV2FybmluZzogI2ZlYmQ0MDtcclxuJGNvbG9yV2FybmluZ19saWdodDogI2ZmY2I2NztcclxuJGNvbG9yV2FybmluZ19kYXJrOiAjZWFhNDFlO1xyXG4kY29sb3JXYXJuaW5nX3NoYWRvdzogcmdiYSgyNTQsIDE4OSwgNjQsIDUwJSk7XHJcbiRjb2xvcldhcm5pbmdfYWx0QmtnOiAjZmZmNWU4O1xyXG4kY29sb3JXYXJuaW5nX2FsdFRleHQ6ICM4OTVlMGI7XHJcblxyXG4vKi8gRGFuZ2VyIC8qL1xyXG4kY29sb3JEYW5nZXI6ICNmZjQxNDE7XHJcbiRjb2xvckRhbmdlcl9saWdodDogI2ZmNjg2ODtcclxuJGNvbG9yRGFuZ2VyX2Rhcms6ICNlYjEyMTI7XHJcbiRjb2xvckRhbmdlcl9zaGFkb3c6IHJnYmEoMjU1LCA2NSwgNjUsIDUwJSk7XHJcbiRjb2xvckRhbmdlcl9hbHRCa2c6ICNmZmU4ZTg7XHJcbiRjb2xvckRhbmdlcl9hbHRUZXh0OiAjYTUyOTI5O1xyXG5cclxuLyovIFRleHQgLyovXHJcbiRjb2xvclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9yVGV4dExpZ2h0X3NoYWRvdzogcmdiYSgxMjMsIDEyMywgMTIzLCA1MCUpO1xyXG4kY29sb3JUZXh0SW52ZXJzZTogd2hpdGU7XHJcbiRjb2xvclRleHREYXJrR3JleTogIzUwNTA1MDtcclxuXHJcbi8qLyBPdGhlciAvKi9cclxuJGNvbG9yT3V0bGluZTogI2RlZGVkZTtcclxuJGNvbG9yQmtnOiAjZmFmYWZhO1xyXG4kY29sb3JMaWdodEdyYXk6ICNmM2YzZjM7XHJcbiRjb2xvckRhcmtHcmV5OiAjNDE0MTQxO1xyXG4kY29sb3JHcmV5X3NoYWRvdzogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG4kY29sb3JPdXRpbGVfZGl2ZWRlcjogIzlmOWY5ZjtcclxuXHJcbi8qLy8vLy8gSGVhZGVyIC8vLy8vKi9cclxuXHJcbiRjb2xvckhlYWRlckJrZzogd2hpdGU7XHJcbiRjb2xvckhlYWRlclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvckhlYWRlclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9ySGVhZGVySG92ZXI6ICNmMWYxZjE7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZzogI2YxZjFmMTtcclxuJGNvbG9ySGVhZGVyT3V0bGluZTogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyBEYXJrIG1vZGUgRE0gLy8vLy8vLy8vLyovXHJcblxyXG4vKi8gR2VuZXJhbCAvKi9cclxuXHJcbiRjb2xvclRleHRfZG06IHdoaXRlO1xyXG4kY29sb3JUZXh0TGlnaHRfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzUlKTtcclxuJGNvbG9yVGV4dEludmVyc2VfZG06IHdoaXRlO1xyXG4kY29sb3JPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcbiRjb2xvckJrZ19kbTogIzE2MjEzYTtcclxuJGNvbG9yRGFuZ2VyX2RtOiAjZmY1NjU2O1xyXG5cclxuLyovIEhlYWRlciBkYXJrIC8qL1xyXG5cclxuJGNvbG9ySGVhZGVyQmtnX2RtOiAjMzM0MDVkO1xyXG4kY29sb3JIZWFkZXJUZXh0X2RtOiB3aGl0ZTtcclxuJGNvbG9ySGVhZGVyVGV4dExpZ2h0X2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDc1JSk7XHJcbiRjb2xvckhlYWRlckhvdmVyX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEwJSk7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZ19kbTogcmdiYSgwLCAwLCAwLCAyMCUpO1xyXG4kY29sb3JIZWFkZXJPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcblxyXG4vKi8vLy8vLy8vLy8gUG9zaXRpb25zIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLyBHZW5yZWFsIFBvc2l0aW9uIC8qL1xyXG5cclxuJGNvbG9yRldEOiAjMDA4MWZjO1xyXG4kY29sb3JNSUQ6ICMwMDJkNjQ7XHJcbiRjb2xvckRFRjogIzQ3NmU5ZjtcclxuJGNvbG9yR0tQOiAjODhiMmFkO1xyXG5cclxuLyovIFN0cmlrZXIgLyovXHJcblxyXG4kY29sb3JDRjogI2IxOTdmYztcclxuJGNvbG9yTFc6ICM5Nzc1ZmE7XHJcbiRjb2xvclJXOiAjODQ1ZWY3O1xyXG4kY29sb3JMV0Y6ICM3OTUwZjI7XHJcbiRjb2xvclJXRjogIzcwNDhlODtcclxuLyovIE1pZGZpZWxkZXIgLyovXHJcblxyXG4kY29sb3JBTUY6ICNmYWFmMDM7XHJcbiRjb2xvckxBTUY6ICNmNTlmMDA7XHJcbiRjb2xvclJBTUY6ICNmMDhjMDA7XHJcbiRjb2xvckxDTTogI2ZkN2UxNDtcclxuJGNvbG9yUkNNOiAjZjc2NzA3O1xyXG4kY29sb3JDTUY6ICNlODU5MGM7XHJcbiRjb2xvckRNRjogI2ZhNTI1MjtcclxuJGNvbG9yTERNOiAjZmU0NTQ1O1xyXG4kY29sb3JSRE06ICNmMDNlM2U7XHJcbiRjb2xvclJNRjogI2RiMzIzMjtcclxuJGNvbG9yTE1GOiAjZTAzMTMxO1xyXG4kY29sb3JSQU06ICNjOTJhMmE7XHJcbiRjb2xvckxDTUY6ICNhNjFlNGQ7XHJcbiRjb2xvclJDTUY6ICNjMjI1NWM7XHJcbiRjb2xvckxETUY6ICNkNjMzNmM7XHJcbiRjb2xvclJETUY6ICNlNjQ4N2Y7XHJcblxyXG4vKi8gRGVmZW5kZXIgLyovXHJcblxyXG4kY29sb3JDQjogIzgyYzkxZTtcclxuJGNvbG9yTENCOiAjNzRiODE2O1xyXG4kY29sb3JSQ0I6ICM2NmE4MGY7XHJcbiRjb2xvclJDQjM6ICMzN2IyNGQ7XHJcbiRjb2xvclJCOiAjMmY5ZTQ0O1xyXG4kY29sb3JSQ0I1OiAjMmI4YTNlO1xyXG4kY29sb3JMQjogIzA5OTI2ODtcclxuJGNvbG9yTFdCOiAjMGViNzg0O1xyXG4kY29sb3JSV0I6ICMzOGQ5YTk7XHJcbiRjb2xvclJCNTogIzNiYzlkYjtcclxuJGNvbG9yTEI1OiAjMjFiN2NlO1xyXG4kY29sb3JMQ0IzOiAjMTVhYWJmO1xyXG4kY29sb3JMQ0I1OiAjMTA5OGFkO1xyXG4kY29sb3JSQ01GMzogIzBhN2I4ZDtcclxuJGNvbG9yTENNRjM6ICMwMjUxNWU7XHJcblxyXG4vKi8gR29hbEtlZXBlciAvKi9cclxuXHJcbiRjb2xvckdLOiAjMzY0ZmM3O1xyXG5cclxuLyovIFZpZGVvcyBUYWdzIC8qL1xyXG5cclxuJGNvbG9yR29hbDogIzAwODFmYztcclxuJGNvbG9yU2F2ZTogIzAwMmQ2NDtcclxuJGNvbG9yU2F2ZVJlZmxleDogIzJiOGEzZTtcclxuJGNvbG9yUmVkQ2FyZDogI2RiMzIzMjtcclxuJGNvbG9yWWVsbG93Q2FyZDogI2ZhYWYwMztcclxuJGNvbG9yQ2FyZDogIzM2NGZjNztcclxuJGNvbG9yQXNzaXQ6ICM4OGIyYWQ7XHJcbiRjb2xvckNvbmNlZGVkR29hbDogI2MyMjU1YztcclxuJGNvbG9yRGVmZW5zaXZlRHVlbDogIzEwOThhZDtcclxuJGNvbG9yUGVuYWx0eUNvbmNlZGVkR29hbDogI2U4NTkwYztcclxuJGNvbG9yUGVuYWx0eUZvdWw6ICNkYjMyMzI7XHJcbiRjb2xvclBlbmFsdHlHb2FsOiAjNDc2ZTlmO1xyXG4kY29sb3JQZW5hbHR5U2F2ZTogIzM3YjI0ZDtcclxuJGNvbG9yU2hvdEFnYWluc3Q6ICM4MmM5MWU7XHJcbiRjb2xvclBhc3M6ICM3OTUwZjI7XHJcbiRjb2xvclNob3Q6ICNiMTk3ZmM7XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVhc3VyZW1lbnRzIC8vLy8vLy8vLy8qL1xyXG5cclxuJGNvbnRhaW5lcldpZHRoUzogMTAwJTtcclxuJGNvbnRhaW5lcldpZHRoTTogNjMycHg7XHJcbiRjb250YWluZXJXaWR0aEw6IDEyMzJweDtcclxuXHJcbiRjb250YWluZXJHdXR0ZXI6IDFyZW07XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVkaWEgUXVlcmllcyAvLy8vLy8vLy8vKi9cclxuLyogTWVkaWEgcXVlcmllcyBzaG91bGQgYWx3YXlzIGJlIHVzZWQgd2l0aCBtYXgtd2lkdGguICovXHJcblxyXG4kbWVkaWFxdWVyeVhTOiA2MDBweDtcclxuJG1lZGlhcXVlcnlTOiA3NjdweDtcclxuJG1lZGlhcXVlcnlNOiA5OTFweDtcclxuJG1lZGlhcXVlcnlMOiAxMTk5cHg7XHJcbiRtZWRpYXF1ZXJ5WEw6IDE0NDBweDtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBlcnNvbmFsRGV0YWlsX3NlY3Rpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuaG9yaXpvbnRhbERpdmlkZXJ7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnZlcnRpY2FsRGl2aWRlcntcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5mb0RldGFpbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICAgIH1cclxuICAgIC5uYWNpb25hbGl0eXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5mbGFnX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuYmFzZV90ZXh0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb3VudHJ5X2ZsYWcge1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsdWJIaXN0b3J5X3NlY3Rpb257XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAudGl0bGVTZWN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICRjb2xvck1haW5CbHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucGxheWVyX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5WEwpIHtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgLy9wYWRkaW5nOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcclxuICB9XHJcbiAgLnBsYXllcl9kYXRhX2NvbnRhaW5lcl9sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZ19ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgJi5jb2xfMiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJvdW5kX2JveCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvck91dGxpbmU7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlMKSB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA4OCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb3VudHJpZXNfYm94IHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJhc2VfdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5WFMpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mbGFnc19ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLmZsYWdfaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5WFMpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iYXNlX3RleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlYUykge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb3VudHJ5X2ZsYWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5WFMpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYXllcl9kYXRhX2NvbnRhaW5lciB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC50b3BfYm94IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yT3V0bGluZTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1lX2FnZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAudmVydGljYWxfZGl2aWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWdlX2JveCB7XHJcbiAgICAgICAgICAuYWdlX251bWJlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWdlX3RleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWVfYm94IHtcclxuICAgICAgICAgIC5maXJzdF9uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGFzdF9uYW1lIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW5fcG9zaXRpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYXNlX3RleHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TCkge1xyXG4gICAgICAgICAgLmFnZV9ib3gge1xyXG4gICAgICAgICAgICAuYWdlX251bWJlciB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFnZV90ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWVfYm94IHtcclxuICAgICAgICAgICAgLmZpcnN0X25hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXN0X25hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgLmFnZV9ib3gge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5hZ2VfbnVtYmVyIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lX2JveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAubWFpbl9wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wb2ludHNfYnV0dG9uIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzcGxheUZsZXgge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1pZGRsZV9ib3gge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yT3V0bGluZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oYXJkX2RhdGEge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NjBweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeVhMKSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDYyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmVydGljYWxfZGl2aWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mb19pdGVtIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlYTCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFzZV90ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJhc2VfdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeVhMKSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvc2l0aW9uX3BpbGwge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnBvaW50c19ib3gge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlYUykge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhdGluZ19zbWFsbF9ib3gge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlYUykge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJhdGluZ190aXRsZV9ib3gge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5WFMpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52ZXJ0aWNhbF9kaXZpZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlYUykge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvdHRvbV9ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGFfbGVmdCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeVMpIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvX3RleHQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFzZV90ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAmLmJvbGQge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlYW1faW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGF0YV9yaWdodCB7XHJcbiAgICAgICAgLmNvbnRhY3RfYnV0dG9uIHtcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1868:
/*!********************************************************************************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/components/player-info/components/player-highlights/player-highlights.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerHighlightsComponent": () => (/* binding */ PlayerHighlightsComponent)
/* harmony export */ });
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9686);





function PlayerHighlightsComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const highlight_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", highlight_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](highlight_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, highlight_r2.label));
} }
function PlayerHighlightsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlayerHighlightsComponent_ng_container_0_div_5_Template, 8, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "PLAYER.DATA_DISCLAIMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.playerHighlights);
} }
class PlayerHighlightsComponent {
    constructor(_playerService) {
        this._playerService = _playerService;
        this.playerHighlights = [];
        this._subscriptions = [];
        this.playerDetails$ = this._playerService.playerDetails$;
    }
    ngOnInit() {
        this._subscriptions.push(this.playerDetails$.subscribe(player => {
            if (player) {
                this.playerHighlights = [];
                const { highlights, roleId } = player;
                // @ts-ignore
                const positionHighlights = _aft_core__WEBPACK_IMPORTED_MODULE_0__.PLAYER_HIGHLIGHTS_ARRAY[roleId];
                if (highlights) {
                    positionHighlights.forEach(stat => {
                        // @ts-ignore
                        const statValue = highlights[stat];
                        this.playerHighlights.push({
                            label: `STATS_WYSCOUT.${stat.toUpperCase()}`,
                            value: statValue,
                            image: `assets/images/highlights/${stat}.jpg`,
                        });
                    });
                }
            }
        }));
    }
    ngOnDestroy() {
        this._subscriptions.forEach(x => x.unsubscribe());
    }
}
PlayerHighlightsComponent.ɵfac = function PlayerHighlightsComponent_Factory(t) { return new (t || PlayerHighlightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.PlayerService)); };
PlayerHighlightsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerHighlightsComponent, selectors: [["aft-scout-player-highlights"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "base_text", "marginBottom_1"], [1, "cards_box_container"], ["class", "cards_box", 4, "ngFor", "ngForOf"], [1, "cards_box"], [1, "card_item"], ["alt", "", 1, "match_img", 3, "src"], [1, "item_number"], [1, "item_title"]], template: function PlayerHighlightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlayerHighlightsComponent_ng_container_0_Template, 6, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playerHighlights.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".cards_box_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-right: 2rem;\n}\n@media screen and (max-width: 767px) {\n  .cards_box_container[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n.cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 991px) {\n  .cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  border: 1px solid #dedede;\n  border-radius: 10px;\n  margin-right: 10px;\n  padding: 15px;\n  width: 140px;\n}\n@media screen and (max-width: 767px) {\n  .cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100px;\n  }\n}\n.cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%]   .match_img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-bottom: 5px;\n}\n.cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%]   .item_number[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #cacaca;\n  font-size: 2rem;\n}\n.cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%]   .item_title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: black;\n  font-size: 0.9rem;\n}\n@media screen and (max-width: 991px) {\n  .cards_box_container[_ngcontent-%COMP%]   .cards_box[_ngcontent-%COMP%]   .card_item[_ngcontent-%COMP%]   .item_title[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwicGxheWVyLWhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUFFQSwrQkFBQTtBQUVBLHNCQUFBO0FBRUEsaUJBQUE7QUFNQSxnQkFBQTtBQU9BLGVBQUE7QUFNQSxjQUFBO0FBUUEsV0FBQTtBQUlBLGNBQUE7QUFRQSxhQUFBO0FBUUEsV0FBQTtBQU9BLFlBQUE7QUFRQSxxQkFBQTtBQVNBLDRDQUFBO0FBRUEsY0FBQTtBQVNBLGtCQUFBO0FBU0EseUNBQUE7QUFFQSx1QkFBQTtBQU9BLGNBQUE7QUFPQSxpQkFBQTtBQW1CQSxlQUFBO0FBa0JBLGlCQUFBO0FBSUEsa0JBQUE7QUFtQkEscUNBQUE7QUFRQSxzQ0FBQTtBQUNBLHdEQUFBO0FDcExBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF5QkY7QUF4QkU7RUFKRjtJQUtJLGlCQUFBO0VBMkJGO0FBQ0Y7QUExQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE0Qko7QUEzQkk7RUFIRjtJQUlJLG1CQUFBO0VBOEJKO0FBQ0Y7QUE3Qkk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBK0JOO0FBOUJNO0VBVEY7SUFVSSxnQkFBQTtJQUNBLFlBQUE7RUFpQ047QUFDRjtBQWhDTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQWtDUjtBQWhDTTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWtDUjtBQWhDTTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFrQ1I7QUFqQ1E7RUFKRjtJQUtJLGlCQUFBO0VBb0NSO0FBQ0YiLCJmaWxlIjoicGxheWVyLWhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gU0FTUyBWYXJpYWJsZXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4vKi8vLy8vLy8vLy8gQ29sb3JzIC8vLy8vLy8vLy8qL1xyXG5cclxuLyovLy8vLyBHZW5lcmFsIC8vLy8vKi9cclxuXHJcbi8qLyBNYWluIEdyZWVuIC8qL1xyXG4kY29sb3JNYWluOiAjODhiMmFkO1xyXG4kY29sb3JNYWluX2xpZ2h0OiAjOTlhZGFiO1xyXG4kY29sb3JNYWluX2Rhcms6ICM1NzdlNzk7XHJcbiRjb2xvck1haW5fc2hhZG93OiByZ2JhKDE5OSwgMjA2LCAyMDAsIDAuNDE4KTtcclxuXHJcbi8qLyBNYWluIEJsdWUgLyovXHJcbiRjb2xvck1haW5CbHVlOiAjMDAyZDY0O1xyXG4kY29sb3JNYWluQmx1ZV9saWdodDogIzQ3NmU5ZjtcclxuJGNvbG9yTWFpbkJsdWVfZGFyazogIzEyMmM0YjtcclxuJGNvbG9yTWFpbkJsdWVfc2hhZG93OiByZ2JhKDEyMywgMTI4LCAxNTYsIDAuNSk7XHJcbiRjb2xvck1haW5CbHVlX2N0YTogIzAwODFmYztcclxuXHJcbi8qLyBNYWluIGFsdCAvKi9cclxuJGNvbG9yTWFpbkFsdDogIzMzNDA1ZDtcclxuJGNvbG9yTWFpbkFsdF9saWdodDogIzQxNWI5NjtcclxuJGNvbG9yTWFpbkFsdF9kYXJrOiAjMjAyZDRhO1xyXG4kY29sb3JNYWluQWx0X3NoYWRvdzogcmdiYSg1MSwgNjQsIDkzLCA1MCUpO1xyXG5cclxuLyovIFN1Y2Nlc3MgLyovXHJcbiRjb2xvclN1Y2Nlc3M6ICMwOWI0NmM7XHJcbiRjb2xvclN1Y2Nlc3NfbGlnaHQ6ICMwYWNjN2I7XHJcbiRjb2xvclN1Y2Nlc3NfZGFyazogIzBiOTM1YTtcclxuJGNvbG9yU3VjY2Vzc19zaGFkb3c6IHJnYmEoOSwgMTgwLCAxMDgsIDUwJSk7XHJcbiRjb2xvclN1Y2Nlc3NfYWx0QmtnOiAjZGJmZmM3O1xyXG4kY29sb3JTdWNjZXNzX2FsdFRleHQ6ICM0MTdlMjA7XHJcblxyXG4vKi8gSW5mbyAvKi9cclxuJGNvbG9ySW5mb19hbHRCa2c6ICNlOGVkZmY7XHJcbiRjb2xvckluZm9fYWx0VGV4dDogIzMzNDA1ZDtcclxuXHJcbi8qLyBXYXJuaW5nIC8qL1xyXG4kY29sb3JXYXJuaW5nOiAjZmViZDQwO1xyXG4kY29sb3JXYXJuaW5nX2xpZ2h0OiAjZmZjYjY3O1xyXG4kY29sb3JXYXJuaW5nX2Rhcms6ICNlYWE0MWU7XHJcbiRjb2xvcldhcm5pbmdfc2hhZG93OiByZ2JhKDI1NCwgMTg5LCA2NCwgNTAlKTtcclxuJGNvbG9yV2FybmluZ19hbHRCa2c6ICNmZmY1ZTg7XHJcbiRjb2xvcldhcm5pbmdfYWx0VGV4dDogIzg5NWUwYjtcclxuXHJcbi8qLyBEYW5nZXIgLyovXHJcbiRjb2xvckRhbmdlcjogI2ZmNDE0MTtcclxuJGNvbG9yRGFuZ2VyX2xpZ2h0OiAjZmY2ODY4O1xyXG4kY29sb3JEYW5nZXJfZGFyazogI2ViMTIxMjtcclxuJGNvbG9yRGFuZ2VyX3NoYWRvdzogcmdiYSgyNTUsIDY1LCA2NSwgNTAlKTtcclxuJGNvbG9yRGFuZ2VyX2FsdEJrZzogI2ZmZThlODtcclxuJGNvbG9yRGFuZ2VyX2FsdFRleHQ6ICNhNTI5Mjk7XHJcblxyXG4vKi8gVGV4dCAvKi9cclxuJGNvbG9yVGV4dDogIzAwMDAwMDtcclxuJGNvbG9yVGV4dExpZ2h0OiAjN2I3YjdiO1xyXG4kY29sb3JUZXh0TGlnaHRfc2hhZG93OiByZ2JhKDEyMywgMTIzLCAxMjMsIDUwJSk7XHJcbiRjb2xvclRleHRJbnZlcnNlOiB3aGl0ZTtcclxuJGNvbG9yVGV4dERhcmtHcmV5OiAjNTA1MDUwO1xyXG5cclxuLyovIE90aGVyIC8qL1xyXG4kY29sb3JPdXRsaW5lOiAjZGVkZWRlO1xyXG4kY29sb3JCa2c6ICNmYWZhZmE7XHJcbiRjb2xvckxpZ2h0R3JheTogI2YzZjNmMztcclxuJGNvbG9yRGFya0dyZXk6ICM0MTQxNDE7XHJcbiRjb2xvckdyZXlfc2hhZG93OiByZ2JhKDAsIDAsIDAsIDI1JSk7XHJcbiRjb2xvck91dGlsZV9kaXZlZGVyOiAjOWY5ZjlmO1xyXG5cclxuLyovLy8vLyBIZWFkZXIgLy8vLy8qL1xyXG5cclxuJGNvbG9ySGVhZGVyQmtnOiB3aGl0ZTtcclxuJGNvbG9ySGVhZGVyVGV4dDogIzAwMDAwMDtcclxuJGNvbG9ySGVhZGVyVGV4dExpZ2h0OiAjN2I3YjdiO1xyXG4kY29sb3JIZWFkZXJIb3ZlcjogI2YxZjFmMTtcclxuJGNvbG9ySGVhZGVyU2VhcmNoQmtnOiAjZjFmMWYxO1xyXG4kY29sb3JIZWFkZXJPdXRsaW5lOiByZ2JhKDAsIDAsIDAsIDI1JSk7XHJcblxyXG4vKi8vLy8vLy8vLy8gQ29sb3JzIERhcmsgbW9kZSBETSAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLyBHZW5lcmFsIC8qL1xyXG5cclxuJGNvbG9yVGV4dF9kbTogd2hpdGU7XHJcbiRjb2xvclRleHRMaWdodF9kbTogcmdiYSgyNTUsIDI1NSwgMjU1LCA3NSUpO1xyXG4kY29sb3JUZXh0SW52ZXJzZV9kbTogd2hpdGU7XHJcbiRjb2xvck91dGxpbmVfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgMjUlKTtcclxuJGNvbG9yQmtnX2RtOiAjMTYyMTNhO1xyXG4kY29sb3JEYW5nZXJfZG06ICNmZjU2NTY7XHJcblxyXG4vKi8gSGVhZGVyIGRhcmsgLyovXHJcblxyXG4kY29sb3JIZWFkZXJCa2dfZG06ICMzMzQwNWQ7XHJcbiRjb2xvckhlYWRlclRleHRfZG06IHdoaXRlO1xyXG4kY29sb3JIZWFkZXJUZXh0TGlnaHRfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzUlKTtcclxuJGNvbG9ySGVhZGVySG92ZXJfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgMTAlKTtcclxuJGNvbG9ySGVhZGVyU2VhcmNoQmtnX2RtOiByZ2JhKDAsIDAsIDAsIDIwJSk7XHJcbiRjb2xvckhlYWRlck91dGxpbmVfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgMjUlKTtcclxuXHJcbi8qLy8vLy8vLy8vLyBQb3NpdGlvbnMgQ29sb3JzIC8vLy8vLy8vLy8qL1xyXG5cclxuLyovIEdlbnJlYWwgUG9zaXRpb24gLyovXHJcblxyXG4kY29sb3JGV0Q6ICMwMDgxZmM7XHJcbiRjb2xvck1JRDogIzAwMmQ2NDtcclxuJGNvbG9yREVGOiAjNDc2ZTlmO1xyXG4kY29sb3JHS1A6ICM4OGIyYWQ7XHJcblxyXG4vKi8gU3RyaWtlciAvKi9cclxuXHJcbiRjb2xvckNGOiAjYjE5N2ZjO1xyXG4kY29sb3JMVzogIzk3NzVmYTtcclxuJGNvbG9yUlc6ICM4NDVlZjc7XHJcbiRjb2xvckxXRjogIzc5NTBmMjtcclxuJGNvbG9yUldGOiAjNzA0OGU4O1xyXG4vKi8gTWlkZmllbGRlciAvKi9cclxuXHJcbiRjb2xvckFNRjogI2ZhYWYwMztcclxuJGNvbG9yTEFNRjogI2Y1OWYwMDtcclxuJGNvbG9yUkFNRjogI2YwOGMwMDtcclxuJGNvbG9yTENNOiAjZmQ3ZTE0O1xyXG4kY29sb3JSQ006ICNmNzY3MDc7XHJcbiRjb2xvckNNRjogI2U4NTkwYztcclxuJGNvbG9yRE1GOiAjZmE1MjUyO1xyXG4kY29sb3JMRE06ICNmZTQ1NDU7XHJcbiRjb2xvclJETTogI2YwM2UzZTtcclxuJGNvbG9yUk1GOiAjZGIzMjMyO1xyXG4kY29sb3JMTUY6ICNlMDMxMzE7XHJcbiRjb2xvclJBTTogI2M5MmEyYTtcclxuJGNvbG9yTENNRjogI2E2MWU0ZDtcclxuJGNvbG9yUkNNRjogI2MyMjU1YztcclxuJGNvbG9yTERNRjogI2Q2MzM2YztcclxuJGNvbG9yUkRNRjogI2U2NDg3ZjtcclxuXHJcbi8qLyBEZWZlbmRlciAvKi9cclxuXHJcbiRjb2xvckNCOiAjODJjOTFlO1xyXG4kY29sb3JMQ0I6ICM3NGI4MTY7XHJcbiRjb2xvclJDQjogIzY2YTgwZjtcclxuJGNvbG9yUkNCMzogIzM3YjI0ZDtcclxuJGNvbG9yUkI6ICMyZjllNDQ7XHJcbiRjb2xvclJDQjU6ICMyYjhhM2U7XHJcbiRjb2xvckxCOiAjMDk5MjY4O1xyXG4kY29sb3JMV0I6ICMwZWI3ODQ7XHJcbiRjb2xvclJXQjogIzM4ZDlhOTtcclxuJGNvbG9yUkI1OiAjM2JjOWRiO1xyXG4kY29sb3JMQjU6ICMyMWI3Y2U7XHJcbiRjb2xvckxDQjM6ICMxNWFhYmY7XHJcbiRjb2xvckxDQjU6ICMxMDk4YWQ7XHJcbiRjb2xvclJDTUYzOiAjMGE3YjhkO1xyXG4kY29sb3JMQ01GMzogIzAyNTE1ZTtcclxuXHJcbi8qLyBHb2FsS2VlcGVyIC8qL1xyXG5cclxuJGNvbG9yR0s6ICMzNjRmYzc7XHJcblxyXG4vKi8gVmlkZW9zIFRhZ3MgLyovXHJcblxyXG4kY29sb3JHb2FsOiAjMDA4MWZjO1xyXG4kY29sb3JTYXZlOiAjMDAyZDY0O1xyXG4kY29sb3JTYXZlUmVmbGV4OiAjMmI4YTNlO1xyXG4kY29sb3JSZWRDYXJkOiAjZGIzMjMyO1xyXG4kY29sb3JZZWxsb3dDYXJkOiAjZmFhZjAzO1xyXG4kY29sb3JDYXJkOiAjMzY0ZmM3O1xyXG4kY29sb3JBc3NpdDogIzg4YjJhZDtcclxuJGNvbG9yQ29uY2VkZWRHb2FsOiAjYzIyNTVjO1xyXG4kY29sb3JEZWZlbnNpdmVEdWVsOiAjMTA5OGFkO1xyXG4kY29sb3JQZW5hbHR5Q29uY2VkZWRHb2FsOiAjZTg1OTBjO1xyXG4kY29sb3JQZW5hbHR5Rm91bDogI2RiMzIzMjtcclxuJGNvbG9yUGVuYWx0eUdvYWw6ICM0NzZlOWY7XHJcbiRjb2xvclBlbmFsdHlTYXZlOiAjMzdiMjRkO1xyXG4kY29sb3JTaG90QWdhaW5zdDogIzgyYzkxZTtcclxuJGNvbG9yUGFzczogIzc5NTBmMjtcclxuJGNvbG9yU2hvdDogI2IxOTdmYztcclxuXHJcbi8qLy8vLy8vLy8vLyBNZWFzdXJlbWVudHMgLy8vLy8vLy8vLyovXHJcblxyXG4kY29udGFpbmVyV2lkdGhTOiAxMDAlO1xyXG4kY29udGFpbmVyV2lkdGhNOiA2MzJweDtcclxuJGNvbnRhaW5lcldpZHRoTDogMTIzMnB4O1xyXG5cclxuJGNvbnRhaW5lckd1dHRlcjogMXJlbTtcclxuXHJcbi8qLy8vLy8vLy8vLyBNZWRpYSBRdWVyaWVzIC8vLy8vLy8vLy8qL1xyXG4vKiBNZWRpYSBxdWVyaWVzIHNob3VsZCBhbHdheXMgYmUgdXNlZCB3aXRoIG1heC13aWR0aC4gKi9cclxuXHJcbiRtZWRpYXF1ZXJ5WFM6IDYwMHB4O1xyXG4kbWVkaWFxdWVyeVM6IDc2N3B4O1xyXG4kbWVkaWFxdWVyeU06IDk5MXB4O1xyXG4kbWVkaWFxdWVyeUw6IDExOTlweDtcclxuJG1lZGlhcXVlcnlYTDogMTQ0MHB4O1xyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLmNhcmRzX2JveF9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlTKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLmNhcmRzX2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmRfaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck91dGxpbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeVMpIHtcclxuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICAubWF0Y2hfaW1nIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW1fbnVtYmVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4971:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/components/player-info/components/player-stats/player-stats.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerStatsComponent": () => (/* binding */ PlayerStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var _ui_components_src_lib_components_player_player_wyscout_stats_player_wyscout_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/components/player/player-wyscout-stats/player-wyscout-stats.component */ 1265);
/* harmony import */ var _ui_components_src_lib_components_player_player_analyst_stats_player_analyst_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ui-components/src/lib/components/player/player-analyst-stats/player-analyst-stats.component */ 532);









function PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_aft_player_analyst_stats_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "aft-player-analyst-stats", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editMode", false);
} }
function PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "PLAYER_STATS_DETAIL.ANALYST_TAB_EMPTY"));
} }
function PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-tabView", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeIndexChange", function PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_Template_p_tabView_activeIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r8.selectedTab = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-tabPanel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "aft-wyscout-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-tabPanel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_aft_player_analyst_stats_6_Template, 1, 1, "aft-player-analyst-stats", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_div_7_Template, 3, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerStats_r5 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeIndex", ctx_r4.selectedTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "PLAYER_STATS_DETAIL.STATS_TAB_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, "PLAYER_STATS_DETAIL.ANALYST_TAB_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", playerStats_r5.analystData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !playerStats_r5.analystData);
} }
function PlayerStatsComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PlayerStatsComponent_ng_container_0_ng_container_2_p_tabView_2_Template, 8, 9, "p-tabView", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r2.playerStats$));
} }
function PlayerStatsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PlayerStatsComponent_ng_container_0_ng_container_2_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r0.playerDetails$));
} }
class PlayerStatsComponent {
    constructor(_location, _playerService, _route, _confirmationService, _translateService, _messagingService) {
        this._location = _location;
        this._playerService = _playerService;
        this._route = _route;
        this._confirmationService = _confirmationService;
        this._translateService = _translateService;
        this._messagingService = _messagingService;
        this.selectedTab = 0;
        this._subscriptions = [];
        this.playerDetails$ = this._playerService.playerDetails$;
        this.playerStats$ = this._playerService.playerStats$;
    }
    ngOnInit() {
        this._subscriptions.push(this._route.params.subscribe((params) => {
            if (params.secondTab) {
                this.selectedTab = params.secondTab ? 1 : 0;
            }
            if (params.playerId && !this.playerDetails$.value) {
                this._playerService.getPlayerDetails(params.playerId);
            }
            if (params.playerId && !this.playerStats$.value) {
                this._playerService.getPlayerStats(params.playerId);
            }
        }));
        this._subscriptions.push(this.playerDetails$.subscribe(player => {
            var _a, _b;
            if (player) {
                const activeSeason = (_b = (_a = player.currentTeam) === null || _a === void 0 ? void 0 : _a.league) === null || _b === void 0 ? void 0 : _b.seasons.find(s => s.active);
                if (activeSeason) {
                    this._playerService.getPlayerExtendedStats(player.id, activeSeason.id);
                }
            }
        }));
    }
    ngOnDestroy() {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    onContactPlayer() {
        this._confirmationService.confirm({
            header: this._translateService.instant('PLAYER.CONTACT.MODAL_HEADER'),
            message: this._translateService.instant('PLAYER.CONTACT.MODAL_BODY'),
            acceptLabel: this._translateService.instant('PLAYER.CONTACT.MODAL_ACCEPT'),
            rejectLabel: this._translateService.instant('GENERAL.CANCEL'),
            accept: () => {
                var _a;
                const playerDetails = this.playerDetails$.value;
                if (playerDetails) {
                    this._playerService.playerContactInfo(playerDetails.firstName, playerDetails.lastName, ((_a = playerDetails.currentTeam) === null || _a === void 0 ? void 0 : _a.name) || 'No team');
                }
                else {
                    this._messagingService.error('GENERAL.ERRORS.DEFAULT.TITLE', 'GENERAL.ERRORS.DEFAULT.MESSAGE');
                }
            },
        });
    }
    goBack() {
        this._location.back();
    }
}
PlayerStatsComponent.ɵfac = function PlayerStatsComponent_Factory(t) { return new (t || PlayerStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.MessagingService)); };
PlayerStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlayerStatsComponent, selectors: [["aft-scout-player-stats"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "tabs_box"], [3, "activeIndex", "activeIndexChange", 4, "ngIf"], [3, "activeIndex", "activeIndexChange"], [3, "header"], [3, "editMode", 4, "ngIf"], [3, "editMode"]], template: function PlayerStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlayerStatsComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.playerDetails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabPanel, _ui_components_src_lib_components_player_player_wyscout_stats_player_wyscout_stats_component__WEBPACK_IMPORTED_MODULE_1__.PlayerWyscoutStatsComponent, _ui_components_src_lib_components_player_player_analyst_stats_player_analyst_stats_component__WEBPACK_IMPORTED_MODULE_2__.PlayerAnalystStatsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwicGxheWVyLXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FBRUEsK0JBQUE7QUFFQSxzQkFBQTtBQUVBLGlCQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBTUEsY0FBQTtBQVFBLFdBQUE7QUFJQSxjQUFBO0FBUUEsYUFBQTtBQVFBLFdBQUE7QUFPQSxZQUFBO0FBUUEscUJBQUE7QUFTQSw0Q0FBQTtBQUVBLGNBQUE7QUFTQSxrQkFBQTtBQVNBLHlDQUFBO0FBRUEsdUJBQUE7QUFPQSxjQUFBO0FBT0EsaUJBQUE7QUFtQkEsZUFBQTtBQWtCQSxpQkFBQTtBQUlBLGtCQUFBO0FBbUJBLHFDQUFBO0FBUUEsc0NBQUE7QUFDQSx3REFBQTtBQ3JMQTtFQUNJLFNBQUE7QUEwQkoiLCJmaWxlIjoicGxheWVyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFNBU1MgVmFyaWFibGVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLy8vLy8gR2VuZXJhbCAvLy8vLyovXHJcblxyXG4vKi8gTWFpbiBHcmVlbiAvKi9cclxuJGNvbG9yTWFpbjogIzg4YjJhZDtcclxuJGNvbG9yTWFpbl9saWdodDogIzk5YWRhYjtcclxuJGNvbG9yTWFpbl9kYXJrOiAjNTc3ZTc5O1xyXG4kY29sb3JNYWluX3NoYWRvdzogcmdiYSgxOTksIDIwNiwgMjAwLCAwLjQxOCk7XHJcblxyXG4vKi8gTWFpbiBCbHVlIC8qL1xyXG4kY29sb3JNYWluQmx1ZTogIzAwMmQ2NDtcclxuJGNvbG9yTWFpbkJsdWVfbGlnaHQ6ICM0NzZlOWY7XHJcbiRjb2xvck1haW5CbHVlX2Rhcms6ICMxMjJjNGI7XHJcbiRjb2xvck1haW5CbHVlX3NoYWRvdzogcmdiYSgxMjMsIDEyOCwgMTU2LCAwLjUpO1xyXG4kY29sb3JNYWluQmx1ZV9jdGE6ICMwMDgxZmM7XHJcblxyXG4vKi8gTWFpbiBhbHQgLyovXHJcbiRjb2xvck1haW5BbHQ6ICMzMzQwNWQ7XHJcbiRjb2xvck1haW5BbHRfbGlnaHQ6ICM0MTViOTY7XHJcbiRjb2xvck1haW5BbHRfZGFyazogIzIwMmQ0YTtcclxuJGNvbG9yTWFpbkFsdF9zaGFkb3c6IHJnYmEoNTEsIDY0LCA5MywgNTAlKTtcclxuXHJcbi8qLyBTdWNjZXNzIC8qL1xyXG4kY29sb3JTdWNjZXNzOiAjMDliNDZjO1xyXG4kY29sb3JTdWNjZXNzX2xpZ2h0OiAjMGFjYzdiO1xyXG4kY29sb3JTdWNjZXNzX2Rhcms6ICMwYjkzNWE7XHJcbiRjb2xvclN1Y2Nlc3Nfc2hhZG93OiByZ2JhKDksIDE4MCwgMTA4LCA1MCUpO1xyXG4kY29sb3JTdWNjZXNzX2FsdEJrZzogI2RiZmZjNztcclxuJGNvbG9yU3VjY2Vzc19hbHRUZXh0OiAjNDE3ZTIwO1xyXG5cclxuLyovIEluZm8gLyovXHJcbiRjb2xvckluZm9fYWx0QmtnOiAjZThlZGZmO1xyXG4kY29sb3JJbmZvX2FsdFRleHQ6ICMzMzQwNWQ7XHJcblxyXG4vKi8gV2FybmluZyAvKi9cclxuJGNvbG9yV2FybmluZzogI2ZlYmQ0MDtcclxuJGNvbG9yV2FybmluZ19saWdodDogI2ZmY2I2NztcclxuJGNvbG9yV2FybmluZ19kYXJrOiAjZWFhNDFlO1xyXG4kY29sb3JXYXJuaW5nX3NoYWRvdzogcmdiYSgyNTQsIDE4OSwgNjQsIDUwJSk7XHJcbiRjb2xvcldhcm5pbmdfYWx0QmtnOiAjZmZmNWU4O1xyXG4kY29sb3JXYXJuaW5nX2FsdFRleHQ6ICM4OTVlMGI7XHJcblxyXG4vKi8gRGFuZ2VyIC8qL1xyXG4kY29sb3JEYW5nZXI6ICNmZjQxNDE7XHJcbiRjb2xvckRhbmdlcl9saWdodDogI2ZmNjg2ODtcclxuJGNvbG9yRGFuZ2VyX2Rhcms6ICNlYjEyMTI7XHJcbiRjb2xvckRhbmdlcl9zaGFkb3c6IHJnYmEoMjU1LCA2NSwgNjUsIDUwJSk7XHJcbiRjb2xvckRhbmdlcl9hbHRCa2c6ICNmZmU4ZTg7XHJcbiRjb2xvckRhbmdlcl9hbHRUZXh0OiAjYTUyOTI5O1xyXG5cclxuLyovIFRleHQgLyovXHJcbiRjb2xvclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9yVGV4dExpZ2h0X3NoYWRvdzogcmdiYSgxMjMsIDEyMywgMTIzLCA1MCUpO1xyXG4kY29sb3JUZXh0SW52ZXJzZTogd2hpdGU7XHJcbiRjb2xvclRleHREYXJrR3JleTogIzUwNTA1MDtcclxuXHJcbi8qLyBPdGhlciAvKi9cclxuJGNvbG9yT3V0bGluZTogI2RlZGVkZTtcclxuJGNvbG9yQmtnOiAjZmFmYWZhO1xyXG4kY29sb3JMaWdodEdyYXk6ICNmM2YzZjM7XHJcbiRjb2xvckRhcmtHcmV5OiAjNDE0MTQxO1xyXG4kY29sb3JHcmV5X3NoYWRvdzogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG4kY29sb3JPdXRpbGVfZGl2ZWRlcjogIzlmOWY5ZjtcclxuXHJcbi8qLy8vLy8gSGVhZGVyIC8vLy8vKi9cclxuXHJcbiRjb2xvckhlYWRlckJrZzogd2hpdGU7XHJcbiRjb2xvckhlYWRlclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvckhlYWRlclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9ySGVhZGVySG92ZXI6ICNmMWYxZjE7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZzogI2YxZjFmMTtcclxuJGNvbG9ySGVhZGVyT3V0bGluZTogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyBEYXJrIG1vZGUgRE0gLy8vLy8vLy8vLyovXHJcblxyXG4vKi8gR2VuZXJhbCAvKi9cclxuXHJcbiRjb2xvclRleHRfZG06IHdoaXRlO1xyXG4kY29sb3JUZXh0TGlnaHRfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzUlKTtcclxuJGNvbG9yVGV4dEludmVyc2VfZG06IHdoaXRlO1xyXG4kY29sb3JPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcbiRjb2xvckJrZ19kbTogIzE2MjEzYTtcclxuJGNvbG9yRGFuZ2VyX2RtOiAjZmY1NjU2O1xyXG5cclxuLyovIEhlYWRlciBkYXJrIC8qL1xyXG5cclxuJGNvbG9ySGVhZGVyQmtnX2RtOiAjMzM0MDVkO1xyXG4kY29sb3JIZWFkZXJUZXh0X2RtOiB3aGl0ZTtcclxuJGNvbG9ySGVhZGVyVGV4dExpZ2h0X2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDc1JSk7XHJcbiRjb2xvckhlYWRlckhvdmVyX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEwJSk7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZ19kbTogcmdiYSgwLCAwLCAwLCAyMCUpO1xyXG4kY29sb3JIZWFkZXJPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcblxyXG4vKi8vLy8vLy8vLy8gUG9zaXRpb25zIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLyBHZW5yZWFsIFBvc2l0aW9uIC8qL1xyXG5cclxuJGNvbG9yRldEOiAjMDA4MWZjO1xyXG4kY29sb3JNSUQ6ICMwMDJkNjQ7XHJcbiRjb2xvckRFRjogIzQ3NmU5ZjtcclxuJGNvbG9yR0tQOiAjODhiMmFkO1xyXG5cclxuLyovIFN0cmlrZXIgLyovXHJcblxyXG4kY29sb3JDRjogI2IxOTdmYztcclxuJGNvbG9yTFc6ICM5Nzc1ZmE7XHJcbiRjb2xvclJXOiAjODQ1ZWY3O1xyXG4kY29sb3JMV0Y6ICM3OTUwZjI7XHJcbiRjb2xvclJXRjogIzcwNDhlODtcclxuLyovIE1pZGZpZWxkZXIgLyovXHJcblxyXG4kY29sb3JBTUY6ICNmYWFmMDM7XHJcbiRjb2xvckxBTUY6ICNmNTlmMDA7XHJcbiRjb2xvclJBTUY6ICNmMDhjMDA7XHJcbiRjb2xvckxDTTogI2ZkN2UxNDtcclxuJGNvbG9yUkNNOiAjZjc2NzA3O1xyXG4kY29sb3JDTUY6ICNlODU5MGM7XHJcbiRjb2xvckRNRjogI2ZhNTI1MjtcclxuJGNvbG9yTERNOiAjZmU0NTQ1O1xyXG4kY29sb3JSRE06ICNmMDNlM2U7XHJcbiRjb2xvclJNRjogI2RiMzIzMjtcclxuJGNvbG9yTE1GOiAjZTAzMTMxO1xyXG4kY29sb3JSQU06ICNjOTJhMmE7XHJcbiRjb2xvckxDTUY6ICNhNjFlNGQ7XHJcbiRjb2xvclJDTUY6ICNjMjI1NWM7XHJcbiRjb2xvckxETUY6ICNkNjMzNmM7XHJcbiRjb2xvclJETUY6ICNlNjQ4N2Y7XHJcblxyXG4vKi8gRGVmZW5kZXIgLyovXHJcblxyXG4kY29sb3JDQjogIzgyYzkxZTtcclxuJGNvbG9yTENCOiAjNzRiODE2O1xyXG4kY29sb3JSQ0I6ICM2NmE4MGY7XHJcbiRjb2xvclJDQjM6ICMzN2IyNGQ7XHJcbiRjb2xvclJCOiAjMmY5ZTQ0O1xyXG4kY29sb3JSQ0I1OiAjMmI4YTNlO1xyXG4kY29sb3JMQjogIzA5OTI2ODtcclxuJGNvbG9yTFdCOiAjMGViNzg0O1xyXG4kY29sb3JSV0I6ICMzOGQ5YTk7XHJcbiRjb2xvclJCNTogIzNiYzlkYjtcclxuJGNvbG9yTEI1OiAjMjFiN2NlO1xyXG4kY29sb3JMQ0IzOiAjMTVhYWJmO1xyXG4kY29sb3JMQ0I1OiAjMTA5OGFkO1xyXG4kY29sb3JSQ01GMzogIzBhN2I4ZDtcclxuJGNvbG9yTENNRjM6ICMwMjUxNWU7XHJcblxyXG4vKi8gR29hbEtlZXBlciAvKi9cclxuXHJcbiRjb2xvckdLOiAjMzY0ZmM3O1xyXG5cclxuLyovIFZpZGVvcyBUYWdzIC8qL1xyXG5cclxuJGNvbG9yR29hbDogIzAwODFmYztcclxuJGNvbG9yU2F2ZTogIzAwMmQ2NDtcclxuJGNvbG9yU2F2ZVJlZmxleDogIzJiOGEzZTtcclxuJGNvbG9yUmVkQ2FyZDogI2RiMzIzMjtcclxuJGNvbG9yWWVsbG93Q2FyZDogI2ZhYWYwMztcclxuJGNvbG9yQ2FyZDogIzM2NGZjNztcclxuJGNvbG9yQXNzaXQ6ICM4OGIyYWQ7XHJcbiRjb2xvckNvbmNlZGVkR29hbDogI2MyMjU1YztcclxuJGNvbG9yRGVmZW5zaXZlRHVlbDogIzEwOThhZDtcclxuJGNvbG9yUGVuYWx0eUNvbmNlZGVkR29hbDogI2U4NTkwYztcclxuJGNvbG9yUGVuYWx0eUZvdWw6ICNkYjMyMzI7XHJcbiRjb2xvclBlbmFsdHlHb2FsOiAjNDc2ZTlmO1xyXG4kY29sb3JQZW5hbHR5U2F2ZTogIzM3YjI0ZDtcclxuJGNvbG9yU2hvdEFnYWluc3Q6ICM4MmM5MWU7XHJcbiRjb2xvclBhc3M6ICM3OTUwZjI7XHJcbiRjb2xvclNob3Q6ICNiMTk3ZmM7XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVhc3VyZW1lbnRzIC8vLy8vLy8vLy8qL1xyXG5cclxuJGNvbnRhaW5lcldpZHRoUzogMTAwJTtcclxuJGNvbnRhaW5lcldpZHRoTTogNjMycHg7XHJcbiRjb250YWluZXJXaWR0aEw6IDEyMzJweDtcclxuXHJcbiRjb250YWluZXJHdXR0ZXI6IDFyZW07XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVkaWEgUXVlcmllcyAvLy8vLy8vLy8vKi9cclxuLyogTWVkaWEgcXVlcmllcyBzaG91bGQgYWx3YXlzIGJlIHVzZWQgd2l0aCBtYXgtd2lkdGguICovXHJcblxyXG4kbWVkaWFxdWVyeVhTOiA2MDBweDtcclxuJG1lZGlhcXVlcnlTOiA3NjdweDtcclxuJG1lZGlhcXVlcnlNOiA5OTFweDtcclxuJG1lZGlhcXVlcnlMOiAxMTk5cHg7XHJcbiRtZWRpYXF1ZXJ5WEw6IDE0NDBweDtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxucCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8694:
/*!************************************************************************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/components/player-info/components/player-videos/player-videos.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerVideosComponent": () => (/* binding */ PlayerVideosComponent)
/* harmony export */ });
/* harmony import */ var _scouting_private_private_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scouting/private/private.routes */ 5823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aft-core */ 91);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/chip */ 6540);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9686);










function PlayerVideosComponent_video_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class PlayerVideosComponent {
    constructor(_router, _mediaService) {
        this._router = _router;
        this._mediaService = _mediaService;
        this.preview = false;
        this.smallPreview = false;
        this.bigPreview = false;
        this.match = false;
        this.biggerBox = false;
        this.videoUrl = '';
        this.teamFlagUrl = '';
        this.display = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        if (this.match && this.homeTeam && this.awayTeam) {
            this.teamFlagUrl = ((_a = this.event) === null || _a === void 0 ? void 0 : _a.teamId) === ((_b = this.homeTeam) === null || _b === void 0 ? void 0 : _b.id) ? (_c = this.homeTeam) === null || _c === void 0 ? void 0 : _c.imageDataURL : (_d = this.awayTeam) === null || _d === void 0 ? void 0 : _d.imageDataURL;
        }
        if (!this.event) {
            throw new Error('Event parameter not recieved by input');
        }
    }
    goToPlayerDetails(playerId) {
        if (playerId) {
            this._router.navigate((0,_scouting_private_private_routes__WEBPACK_IMPORTED_MODULE_0__.generateFullPrivateModuleRoute)(_scouting_private_private_routes__WEBPACK_IMPORTED_MODULE_0__.PRIVATE_MODULE_ROUTES.PLAYER, playerId));
        }
    }
    showVideo() {
        if (this.event) {
            this._mediaService.getVideoUrl(this.event.matchId, this.event.videoTimestamp).subscribe((videoData) => {
                this.videoUrl = videoData.urlVideo;
                this.display = true;
            }, (error) => {
                console.error('Error al obtener la url del video: ', error);
            });
        }
    }
}
PlayerVideosComponent.ɵfac = function PlayerVideosComponent_Factory(t) { return new (t || PlayerVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_1__.MediaService)); };
PlayerVideosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PlayerVideosComponent, selectors: [["aft-scout-player-videos"]], inputs: { event: "event", homeTeam: "homeTeam", awayTeam: "awayTeam", preview: "preview", smallPreview: "smallPreview", bigPreview: "bigPreview", match: "match", biggerBox: "biggerBox" }, decls: 24, vars: 20, consts: [[1, "video_no_preview"], [1, "teams_box", "displayFlex", "alignItemsCenter"], [1, "teams_upper_box"], [1, "names_results_box"], [1, "team", "winner_team", "displayFlex", "alignItemsCenter"], [1, "name_text"], [1, "result_text", "bold"], [1, "team", "displayFlex", "alignItemsCenter"], [1, "tag_box"], ["icon", "pi pi-clock", 3, "label"], [1, "time_box"], [1, "video_player", 3, "click"], ["tooltipPosition", "top", 1, "btn_box", 3, "pTooltip"], [1, "mdi", "mdi-play"], ["styleClass", "video_box", 3, "modal", "draggable", "blockScroll", "visible", "dismissableMask", "closable", "visibleChange"], ["muted", "", "controls", "", 3, "src", 4, "ngIf"], ["muted", "", "controls", "", 3, "src"]], template: function PlayerVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "p-chip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerVideosComponent_Template_div_click_18_listener() { return ctx.showVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p-dialog", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function PlayerVideosComponent_Template_p_dialog_visibleChange_22_listener($event) { return ctx.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, PlayerVideosComponent_video_23_Template, 1, 1, "video", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.event == null ? null : ctx.event.teamName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.event == null ? null : ctx.event.teamScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.event == null ? null : ctx.event.opponentTeamName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.event == null ? null : ctx.event.opponentTeamScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.event == null ? null : ctx.event.typeShortLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("label", "'", ctx.event == null ? null : ctx.event.minute, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 16, "EVENTS.TYPE." + (ctx.event == null ? null : ctx.event.typeShortLabel == null ? null : ctx.event.typeShortLabel.toUpperCase())), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 18, "EVENTS.WATCH_VIDEO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("draggable", false)("blockScroll", true)("visible", ctx.display)("dismissableMask", true)("closable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoUrl && ctx.videoUrl.length);
    } }, directives: [primeng_chip__WEBPACK_IMPORTED_MODULE_4__.Chip, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.video_no_preview[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  box-shadow: 2px 3px 7px #00000015;\n  padding: 2rem 1rem 0 1rem;\n  border-radius: 12px;\n  position: relative;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 10px;\n  width: 100%;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .teams_img_box[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .teams_img_box[_ngcontent-%COMP%]   .team_img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .teams_img_box[_ngcontent-%COMP%]   .team_img.overlay_img[_ngcontent-%COMP%] {\n  margin-left: -15px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .names_results_box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .names_results_box[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .names_results_box[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .result_text[_ngcontent-%COMP%] {\n  color: #7b7b7b;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .names_results_box[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .name_text[_ngcontent-%COMP%] {\n  color: #7b7b7b;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .names_results_box[_ngcontent-%COMP%]   .team.winner_team[_ngcontent-%COMP%]   .name_text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n}\n.video_no_preview[_ngcontent-%COMP%]   .teams_box[_ngcontent-%COMP%]   .teams_upper_box[_ngcontent-%COMP%]   .names_results_box[_ngcontent-%COMP%]   .team.winner_team[_ngcontent-%COMP%]   .result_text[_ngcontent-%COMP%] {\n  color: black;\n}\n.video_no_preview[_ngcontent-%COMP%]   .diveder[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.3;\n}\n.video_no_preview[_ngcontent-%COMP%]   .event_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.video_no_preview[_ngcontent-%COMP%]   .event_type[_ngcontent-%COMP%]   .time_text[_ngcontent-%COMP%] {\n  color: #7b7b7b;\n  margin-right: 10px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .event_type[_ngcontent-%COMP%]   .mdi[_ngcontent-%COMP%] {\n  color: #002d64;\n  font-size: 1.2rem;\n  margin-right: 10px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .tag_box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  top: -10px;\n}\n.video_no_preview[_ngcontent-%COMP%]   .time_box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: -10px;\n}\n[_nghost-%COMP%]     .p-chip.custom-chip {\n  background: #0081fc;\n  color: white;\n}\n[_nghost-%COMP%]     .p-chip-icon {\n  color: white;\n  margin: 0;\n}\n[_nghost-%COMP%]     .p-dialog-header {\n  padding: 0;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {\n  margin: 10px 15px 10px 0;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-header .p-dialog-title {\n  width: 100%;\n}\n[_nghost-%COMP%]     .video_box .p-dialog-content {\n  padding: 0 !important;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .video_box .p-dialog-header-icons {\n  position: absolute;\n  right: 0;\n  top: 0px;\n  z-index: 100;\n}\n[_nghost-%COMP%]     .video_box button {\n  background-color: white !important;\n}\n[_nghost-%COMP%]     .video_box .p-dialog-content {\n  padding: 0 !important;\n  background-color: transparent;\n}\nvideo[_ngcontent-%COMP%] {\n  height: 75vh;\n}\n@media screen and (max-width: 767px) {\n  video[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 600px) {\n  video[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n  }\n}\n.video_player[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  align-items: center;\n  width: 100%;\n  cursor: pointer;\n}\n.video_player[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n}\n.video_player[_ngcontent-%COMP%]   .text_link[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  white-space: nowrap;\n}\n.video_player[_ngcontent-%COMP%]   .btn_box[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  background-color: #0081fc;\n  border: 1px solid #0081fc;\n  transition: all 100ms;\n}\n.video_player[_ngcontent-%COMP%]   .btn_box[_ngcontent-%COMP%]   .mdi-play[_ngcontent-%COMP%] {\n  color: white;\n}\n.video_player[_ngcontent-%COMP%]   .btn_box[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n.video_player[_ngcontent-%COMP%]   .btn_box[_ngcontent-%COMP%]:hover   .mdi-play[_ngcontent-%COMP%] {\n  color: #0081fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwicGxheWVyLXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQUVBLCtCQUFBO0FBRUEsc0JBQUE7QUFFQSxpQkFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQU1BLGNBQUE7QUFRQSxXQUFBO0FBSUEsY0FBQTtBQVFBLGFBQUE7QUFRQSxXQUFBO0FBT0EsWUFBQTtBQVFBLHFCQUFBO0FBU0EsNENBQUE7QUFFQSxjQUFBO0FBU0Esa0JBQUE7QUFTQSx5Q0FBQTtBQUVBLHVCQUFBO0FBT0EsY0FBQTtBQU9BLGlCQUFBO0FBbUJBLGVBQUE7QUFrQkEsaUJBQUE7QUFJQSxrQkFBQTtBQW1CQSxxQ0FBQTtBQVFBLHNDQUFBO0FBQ0Esd0RBQUE7QUNwTEE7RUFDRSxTQUFBO0FBeUJGO0FBbkJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBc0JGO0FBckJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF1Qko7QUF0Qkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBd0JOO0FBdkJNO0VBQ0Usa0JBQUE7QUF5QlI7QUF4QlE7RUFDRSxXQUFBO0FBMEJWO0FBekJVO0VBQ0Usa0JBQUE7QUEyQlo7QUF2Qk07RUFDRSxXQUFBO0FBeUJSO0FBeEJRO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUEwQlY7QUF6QlU7RUFDRSxjRFdLO0FDZ0JqQjtBQXpCVTtFQUNFLGNEUUs7QUNtQmpCO0FBeEJZO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBMEJkO0FBeEJZO0VBQ0UsWUFBQTtBQTBCZDtBQW5CRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFxQko7QUFuQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBcUJKO0FBcEJJO0VBQ0UsY0RsQlc7RUNtQlgsa0JBQUE7QUFzQk47QUFwQkk7RUFDRSxjRGhFVTtFQ2lFVixpQkFBQTtFQUNBLGtCQUFBO0FBc0JOO0FBbkJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXFCSjtBQW5CRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFxQko7QUFoQkE7RUFDRSxtQkQvRWtCO0VDZ0ZsQixZQUFBO0FBbUJGO0FBaEJBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFtQkY7QUFoQkE7RUFDRSxVQUFBO0FBbUJGO0FBakJBO0VBQ0Usd0JBQUE7QUFvQkY7QUFqQkE7RUFDRSxXQUFBO0FBb0JGO0FBaEJDO0VBQ0MscUJBQUE7RUFDQSw2QkFBQTtBQW1CRjtBQWpCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBbUJGO0FBakJBO0VBQ0Usa0NBQUE7QUFtQkY7QUFkRTtFQUNDLHFCQUFBO0VBQ0EsNkJBQUE7QUFpQkg7QUFiQTtFQUNFLFlBQUE7QUFnQkY7QUFmRTtFQUZGO0lBR0ksWUFBQTtJQUNBLFdBQUE7RUFrQkY7QUFDRjtBQWpCRTtFQU5GO0lBT0ksWUFBQTtJQUNBLFdBQUE7RUFvQkY7QUFDRjtBQWpCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQW9CRjtBQW5CRTtFQUNJLFdBQUE7QUFxQk47QUFuQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBcUJKO0FBbkJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEM0pnQjtFQzRKaEIseUJBQUE7RUFDQSxxQkFBQTtBQXFCSjtBQXBCSTtFQUNFLFlBQUE7QUFzQk47QUFwQkk7RUFDRSx1QkFBQTtBQXNCTjtBQXJCTTtFQUNFLGNEcEtZO0FDMkxwQiIsImZpbGUiOiJwbGF5ZXItdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFNBU1MgVmFyaWFibGVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLy8vLy8gR2VuZXJhbCAvLy8vLyovXHJcblxyXG4vKi8gTWFpbiBHcmVlbiAvKi9cclxuJGNvbG9yTWFpbjogIzg4YjJhZDtcclxuJGNvbG9yTWFpbl9saWdodDogIzk5YWRhYjtcclxuJGNvbG9yTWFpbl9kYXJrOiAjNTc3ZTc5O1xyXG4kY29sb3JNYWluX3NoYWRvdzogcmdiYSgxOTksIDIwNiwgMjAwLCAwLjQxOCk7XHJcblxyXG4vKi8gTWFpbiBCbHVlIC8qL1xyXG4kY29sb3JNYWluQmx1ZTogIzAwMmQ2NDtcclxuJGNvbG9yTWFpbkJsdWVfbGlnaHQ6ICM0NzZlOWY7XHJcbiRjb2xvck1haW5CbHVlX2Rhcms6ICMxMjJjNGI7XHJcbiRjb2xvck1haW5CbHVlX3NoYWRvdzogcmdiYSgxMjMsIDEyOCwgMTU2LCAwLjUpO1xyXG4kY29sb3JNYWluQmx1ZV9jdGE6ICMwMDgxZmM7XHJcblxyXG4vKi8gTWFpbiBhbHQgLyovXHJcbiRjb2xvck1haW5BbHQ6ICMzMzQwNWQ7XHJcbiRjb2xvck1haW5BbHRfbGlnaHQ6ICM0MTViOTY7XHJcbiRjb2xvck1haW5BbHRfZGFyazogIzIwMmQ0YTtcclxuJGNvbG9yTWFpbkFsdF9zaGFkb3c6IHJnYmEoNTEsIDY0LCA5MywgNTAlKTtcclxuXHJcbi8qLyBTdWNjZXNzIC8qL1xyXG4kY29sb3JTdWNjZXNzOiAjMDliNDZjO1xyXG4kY29sb3JTdWNjZXNzX2xpZ2h0OiAjMGFjYzdiO1xyXG4kY29sb3JTdWNjZXNzX2Rhcms6ICMwYjkzNWE7XHJcbiRjb2xvclN1Y2Nlc3Nfc2hhZG93OiByZ2JhKDksIDE4MCwgMTA4LCA1MCUpO1xyXG4kY29sb3JTdWNjZXNzX2FsdEJrZzogI2RiZmZjNztcclxuJGNvbG9yU3VjY2Vzc19hbHRUZXh0OiAjNDE3ZTIwO1xyXG5cclxuLyovIEluZm8gLyovXHJcbiRjb2xvckluZm9fYWx0QmtnOiAjZThlZGZmO1xyXG4kY29sb3JJbmZvX2FsdFRleHQ6ICMzMzQwNWQ7XHJcblxyXG4vKi8gV2FybmluZyAvKi9cclxuJGNvbG9yV2FybmluZzogI2ZlYmQ0MDtcclxuJGNvbG9yV2FybmluZ19saWdodDogI2ZmY2I2NztcclxuJGNvbG9yV2FybmluZ19kYXJrOiAjZWFhNDFlO1xyXG4kY29sb3JXYXJuaW5nX3NoYWRvdzogcmdiYSgyNTQsIDE4OSwgNjQsIDUwJSk7XHJcbiRjb2xvcldhcm5pbmdfYWx0QmtnOiAjZmZmNWU4O1xyXG4kY29sb3JXYXJuaW5nX2FsdFRleHQ6ICM4OTVlMGI7XHJcblxyXG4vKi8gRGFuZ2VyIC8qL1xyXG4kY29sb3JEYW5nZXI6ICNmZjQxNDE7XHJcbiRjb2xvckRhbmdlcl9saWdodDogI2ZmNjg2ODtcclxuJGNvbG9yRGFuZ2VyX2Rhcms6ICNlYjEyMTI7XHJcbiRjb2xvckRhbmdlcl9zaGFkb3c6IHJnYmEoMjU1LCA2NSwgNjUsIDUwJSk7XHJcbiRjb2xvckRhbmdlcl9hbHRCa2c6ICNmZmU4ZTg7XHJcbiRjb2xvckRhbmdlcl9hbHRUZXh0OiAjYTUyOTI5O1xyXG5cclxuLyovIFRleHQgLyovXHJcbiRjb2xvclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9yVGV4dExpZ2h0X3NoYWRvdzogcmdiYSgxMjMsIDEyMywgMTIzLCA1MCUpO1xyXG4kY29sb3JUZXh0SW52ZXJzZTogd2hpdGU7XHJcbiRjb2xvclRleHREYXJrR3JleTogIzUwNTA1MDtcclxuXHJcbi8qLyBPdGhlciAvKi9cclxuJGNvbG9yT3V0bGluZTogI2RlZGVkZTtcclxuJGNvbG9yQmtnOiAjZmFmYWZhO1xyXG4kY29sb3JMaWdodEdyYXk6ICNmM2YzZjM7XHJcbiRjb2xvckRhcmtHcmV5OiAjNDE0MTQxO1xyXG4kY29sb3JHcmV5X3NoYWRvdzogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG4kY29sb3JPdXRpbGVfZGl2ZWRlcjogIzlmOWY5ZjtcclxuXHJcbi8qLy8vLy8gSGVhZGVyIC8vLy8vKi9cclxuXHJcbiRjb2xvckhlYWRlckJrZzogd2hpdGU7XHJcbiRjb2xvckhlYWRlclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvckhlYWRlclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9ySGVhZGVySG92ZXI6ICNmMWYxZjE7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZzogI2YxZjFmMTtcclxuJGNvbG9ySGVhZGVyT3V0bGluZTogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyBEYXJrIG1vZGUgRE0gLy8vLy8vLy8vLyovXHJcblxyXG4vKi8gR2VuZXJhbCAvKi9cclxuXHJcbiRjb2xvclRleHRfZG06IHdoaXRlO1xyXG4kY29sb3JUZXh0TGlnaHRfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzUlKTtcclxuJGNvbG9yVGV4dEludmVyc2VfZG06IHdoaXRlO1xyXG4kY29sb3JPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcbiRjb2xvckJrZ19kbTogIzE2MjEzYTtcclxuJGNvbG9yRGFuZ2VyX2RtOiAjZmY1NjU2O1xyXG5cclxuLyovIEhlYWRlciBkYXJrIC8qL1xyXG5cclxuJGNvbG9ySGVhZGVyQmtnX2RtOiAjMzM0MDVkO1xyXG4kY29sb3JIZWFkZXJUZXh0X2RtOiB3aGl0ZTtcclxuJGNvbG9ySGVhZGVyVGV4dExpZ2h0X2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDc1JSk7XHJcbiRjb2xvckhlYWRlckhvdmVyX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEwJSk7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZ19kbTogcmdiYSgwLCAwLCAwLCAyMCUpO1xyXG4kY29sb3JIZWFkZXJPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcblxyXG4vKi8vLy8vLy8vLy8gUG9zaXRpb25zIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLyBHZW5yZWFsIFBvc2l0aW9uIC8qL1xyXG5cclxuJGNvbG9yRldEOiAjMDA4MWZjO1xyXG4kY29sb3JNSUQ6ICMwMDJkNjQ7XHJcbiRjb2xvckRFRjogIzQ3NmU5ZjtcclxuJGNvbG9yR0tQOiAjODhiMmFkO1xyXG5cclxuLyovIFN0cmlrZXIgLyovXHJcblxyXG4kY29sb3JDRjogI2IxOTdmYztcclxuJGNvbG9yTFc6ICM5Nzc1ZmE7XHJcbiRjb2xvclJXOiAjODQ1ZWY3O1xyXG4kY29sb3JMV0Y6ICM3OTUwZjI7XHJcbiRjb2xvclJXRjogIzcwNDhlODtcclxuLyovIE1pZGZpZWxkZXIgLyovXHJcblxyXG4kY29sb3JBTUY6ICNmYWFmMDM7XHJcbiRjb2xvckxBTUY6ICNmNTlmMDA7XHJcbiRjb2xvclJBTUY6ICNmMDhjMDA7XHJcbiRjb2xvckxDTTogI2ZkN2UxNDtcclxuJGNvbG9yUkNNOiAjZjc2NzA3O1xyXG4kY29sb3JDTUY6ICNlODU5MGM7XHJcbiRjb2xvckRNRjogI2ZhNTI1MjtcclxuJGNvbG9yTERNOiAjZmU0NTQ1O1xyXG4kY29sb3JSRE06ICNmMDNlM2U7XHJcbiRjb2xvclJNRjogI2RiMzIzMjtcclxuJGNvbG9yTE1GOiAjZTAzMTMxO1xyXG4kY29sb3JSQU06ICNjOTJhMmE7XHJcbiRjb2xvckxDTUY6ICNhNjFlNGQ7XHJcbiRjb2xvclJDTUY6ICNjMjI1NWM7XHJcbiRjb2xvckxETUY6ICNkNjMzNmM7XHJcbiRjb2xvclJETUY6ICNlNjQ4N2Y7XHJcblxyXG4vKi8gRGVmZW5kZXIgLyovXHJcblxyXG4kY29sb3JDQjogIzgyYzkxZTtcclxuJGNvbG9yTENCOiAjNzRiODE2O1xyXG4kY29sb3JSQ0I6ICM2NmE4MGY7XHJcbiRjb2xvclJDQjM6ICMzN2IyNGQ7XHJcbiRjb2xvclJCOiAjMmY5ZTQ0O1xyXG4kY29sb3JSQ0I1OiAjMmI4YTNlO1xyXG4kY29sb3JMQjogIzA5OTI2ODtcclxuJGNvbG9yTFdCOiAjMGViNzg0O1xyXG4kY29sb3JSV0I6ICMzOGQ5YTk7XHJcbiRjb2xvclJCNTogIzNiYzlkYjtcclxuJGNvbG9yTEI1OiAjMjFiN2NlO1xyXG4kY29sb3JMQ0IzOiAjMTVhYWJmO1xyXG4kY29sb3JMQ0I1OiAjMTA5OGFkO1xyXG4kY29sb3JSQ01GMzogIzBhN2I4ZDtcclxuJGNvbG9yTENNRjM6ICMwMjUxNWU7XHJcblxyXG4vKi8gR29hbEtlZXBlciAvKi9cclxuXHJcbiRjb2xvckdLOiAjMzY0ZmM3O1xyXG5cclxuLyovIFZpZGVvcyBUYWdzIC8qL1xyXG5cclxuJGNvbG9yR29hbDogIzAwODFmYztcclxuJGNvbG9yU2F2ZTogIzAwMmQ2NDtcclxuJGNvbG9yU2F2ZVJlZmxleDogIzJiOGEzZTtcclxuJGNvbG9yUmVkQ2FyZDogI2RiMzIzMjtcclxuJGNvbG9yWWVsbG93Q2FyZDogI2ZhYWYwMztcclxuJGNvbG9yQ2FyZDogIzM2NGZjNztcclxuJGNvbG9yQXNzaXQ6ICM4OGIyYWQ7XHJcbiRjb2xvckNvbmNlZGVkR29hbDogI2MyMjU1YztcclxuJGNvbG9yRGVmZW5zaXZlRHVlbDogIzEwOThhZDtcclxuJGNvbG9yUGVuYWx0eUNvbmNlZGVkR29hbDogI2U4NTkwYztcclxuJGNvbG9yUGVuYWx0eUZvdWw6ICNkYjMyMzI7XHJcbiRjb2xvclBlbmFsdHlHb2FsOiAjNDc2ZTlmO1xyXG4kY29sb3JQZW5hbHR5U2F2ZTogIzM3YjI0ZDtcclxuJGNvbG9yU2hvdEFnYWluc3Q6ICM4MmM5MWU7XHJcbiRjb2xvclBhc3M6ICM3OTUwZjI7XHJcbiRjb2xvclNob3Q6ICNiMTk3ZmM7XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVhc3VyZW1lbnRzIC8vLy8vLy8vLy8qL1xyXG5cclxuJGNvbnRhaW5lcldpZHRoUzogMTAwJTtcclxuJGNvbnRhaW5lcldpZHRoTTogNjMycHg7XHJcbiRjb250YWluZXJXaWR0aEw6IDEyMzJweDtcclxuXHJcbiRjb250YWluZXJHdXR0ZXI6IDFyZW07XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVkaWEgUXVlcmllcyAvLy8vLy8vLy8vKi9cclxuLyogTWVkaWEgcXVlcmllcyBzaG91bGQgYWx3YXlzIGJlIHVzZWQgd2l0aCBtYXgtd2lkdGguICovXHJcblxyXG4kbWVkaWFxdWVyeVhTOiA2MDBweDtcclxuJG1lZGlhcXVlcnlTOiA3NjdweDtcclxuJG1lZGlhcXVlcnlNOiA5OTFweDtcclxuJG1lZGlhcXVlcnlMOiAxMTk5cHg7XHJcbiRtZWRpYXF1ZXJ5WEw6IDE0NDBweDtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnZpZGVvX25vX3ByZXZpZXcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggN3B4ICMwMDAwMDAxNTtcclxuICBwYWRkaW5nOiAycmVtIDFyZW0gMCAxcmVtIDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAudGVhbXNfYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudGVhbXNfdXBwZXJfYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC50ZWFtc19pbWdfYm94IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLnRlYW1faW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgJi5vdmVybGF5X2ltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWVzX3Jlc3VsdHNfYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAudGVhbSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIC5yZXN1bHRfdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JUZXh0TGlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZV90ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvclRleHRMaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYud2lubmVyX3RlYW0ge1xyXG4gICAgICAgICAgICAubmFtZV90ZXh0IHtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlc3VsdF90ZXh0IHtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRpdmVkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuICAuZXZlbnRfdHlwZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnRpbWVfdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3JUZXh0TGlnaHQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5tZGkge1xyXG4gICAgICBjb2xvcjogJGNvbG9yTWFpbkJsdWU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWdfYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC50aW1lX2JveHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1jaGlwLmN1c3RvbS1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3JNYWluQmx1ZV9jdGE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtY2hpcC1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGlhbG9nLWhlYWRlcntcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucC1kaWFsb2cgLnAtZGlhbG9nLWhlYWRlciAucC1kaWFsb2ctaGVhZGVyLWljb246bGFzdC1jaGlsZHtcclxuICBtYXJnaW46IDEwcHggMTVweCAxMHB4IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1kaWFsb2cgLnAtZGlhbG9nLWhlYWRlciAucC1kaWFsb2ctdGl0bGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmlkZW9fYm94e1xyXG4gLnAtZGlhbG9nLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4ucC1kaWFsb2ctaGVhZGVyLWljb25ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52aWRlb19ib3h7XHJcbiAgLnAtZGlhbG9nLWNvbnRlbnR7XHJcbiAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gfVxyXG59XHJcblxyXG52aWRlb3tcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlTKSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlYUykge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udmlkZW9fcGxheWVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYnV0dG9ue1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgLnRleHRfbGluayB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICAuYnRuX2JveCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTWFpbkJsdWVfY3RhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yTWFpbkJsdWVfY3RhO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xyXG4gICAgLm1kaS1wbGF5IHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAubWRpLXBsYXkge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3JNYWluQmx1ZV9jdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8113:
/*!*********************************************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/components/player-info/player-info.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerInfoComponent": () => (/* binding */ PlayerInfoComponent)
/* harmony export */ });
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
/* harmony import */ var _sw_ui_components_modules_fixture_fixture_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sw-ui-components/modules/fixture/fixture.routes */ 6886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/divider */ 9273);
/* harmony import */ var _ui_components_src_lib_components_favorite_tag_favorite_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/components/favorite-tag/favorite-tag.component */ 572);
/* harmony import */ var _ui_components_src_lib_components_player_player_rating_player_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/components/player/player-rating/player-rating.component */ 383);
/* harmony import */ var _ui_components_src_lib_components_player_player_position_player_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/components/player/player-position/player-position.component */ 5041);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var _scouting_private_player_components_player_info_components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scouting/private/player/components/player-info/components/player-details/player-details.component */ 8215);
/* harmony import */ var _scouting_private_player_components_player_info_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scouting/private/player/components/player-info/components/player-stats/player-stats.component */ 4971);
/* harmony import */ var _components_player_videos_player_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/player-videos/player-videos.component */ 8694);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 5287);
/* harmony import */ var _ui_components_src_lib_pipes_player_image_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/pipes/player-image.pipe */ 6596);
/* harmony import */ var _ui_components_src_lib_pipes_team_flag_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/pipes/team-flag.pipe */ 6173);
/* harmony import */ var _ui_components_src_lib_pipes_player_team_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/pipes/player-team.pipe */ 3910);





















function PlayerInfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "aft-favorite-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerDetails_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, "GENERAL.ADD_TO_FAVORITES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", playerDetails_r3.id)("entity", ctx_r0.entitiesEnum.PLAYER);
} }
function PlayerInfoComponent_section_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "playerImage");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "aft-player-rating", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "aft-player-rating", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerDetails_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 7, "PLAYERS_ADVANCED_SEARCH.PLAYER_IMG_ALT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 9, playerDetails_r4 == null ? null : playerDetails_r4.imageDataURL), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](playerDetails_r4 == null ? null : playerDetails_r4.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](playerDetails_r4 == null ? null : playerDetails_r4.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("score", playerDetails_r4 == null ? null : playerDetails_r4.totalScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("score", playerDetails_r4 == null ? null : playerDetails_r4.totalScore)("starMode", true);
} }
function PlayerInfoComponent_section_10_p_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlayerInfoComponent_section_10_p_7_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11); const playerDetails_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r9.goToTeam(playerDetails_r5 == null ? null : playerDetails_r5.currentTeam); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "teamFlag");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "playerTeam");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerDetails_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, playerDetails_r5 == null ? null : playerDetails_r5.currentTeam == null ? null : playerDetails_r5.currentTeam.imageDataURL), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 5, playerDetails_r5 == null ? null : playerDetails_r5.currentTeam == null ? null : playerDetails_r5.currentTeam.name), ", ", playerDetails_r5 == null ? null : playerDetails_r5.currentTeam == null ? null : playerDetails_r5.currentTeam.city, " ");
} }
function PlayerInfoComponent_section_10_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "aft-player-position", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const position_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("position", position_r13.positionCode);
} }
function PlayerInfoComponent_section_10_ng_container_33_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "aft-scout-player-videos", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("event", event_r18)("preview", false);
} }
function PlayerInfoComponent_section_10_ng_container_33_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onPageChange", function PlayerInfoComponent_section_10_ng_container_33_div_1_ng_container_3_Template_p_paginator_onPageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4); return ctx_r20.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pagination_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("first", pagination_r19.offset)("totalRecords", pagination_r19.totalElements)("rows", pagination_r19.pageSize);
} }
function PlayerInfoComponent_section_10_ng_container_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PlayerInfoComponent_section_10_ng_container_33_div_1_div_2_Template, 2, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PlayerInfoComponent_section_10_ng_container_33_div_1_ng_container_3_Template, 3, 3, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerEvents_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", playerEvents_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, ctx_r15.pagination$));
} }
function PlayerInfoComponent_section_10_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PlayerInfoComponent_section_10_ng_container_33_div_1_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const playerEvents_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", playerEvents_r14.length);
} }
function PlayerInfoComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, PlayerInfoComponent_section_10_p_7_Template, 6, 7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "aft-player-position", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, PlayerInfoComponent_section_10_ng_container_21_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlayerInfoComponent_section_10_Template_p_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r23.onContactPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "p-tabView");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "p-tabPanel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "aft-scout-player-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "p-tabPanel", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "aft-scout-player-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "p-tabPanel", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, PlayerInfoComponent_section_10_ng_container_33_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerDetails_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 8, "PLAYER.CURRENT_TEAM_LBL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", playerDetails_r5 == null ? null : playerDetails_r5.currentTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 10, "PLAYER.POSITION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("roleId", playerDetails_r5.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 12, "PLAYER.POSITION_LBL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", playerDetails_r5.playerPositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 14, "PLAYER.CONTACT_BTN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 16, ctx_r2.playerEvents$));
} }
class PlayerInfoComponent {
    constructor(_router, _route, _playerService, _loadingService, _location, _eventsService, _confirmationService, _translateService, _messagingService) {
        this._router = _router;
        this._route = _route;
        this._playerService = _playerService;
        this._loadingService = _loadingService;
        this._location = _location;
        this._eventsService = _eventsService;
        this._confirmationService = _confirmationService;
        this._translateService = _translateService;
        this._messagingService = _messagingService;
        this.entitiesEnum = _aft_core__WEBPACK_IMPORTED_MODULE_0__.ENTITIES_ENUM;
        this.playerId = 0;
        this.playerDetails$ = this._playerService.playerDetails$;
        this.playerStats$ = this._playerService.playerStats$;
        this.isLoading$ = this._loadingService.loading$;
        this.pagination$ = this._eventsService.pagination$.asObservable();
        this.playerEvents$ = this._eventsService.events$;
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            if (params.playerId) {
                const { playerDetailsParams } = this._playerService;
                const detailArray = [
                    playerDetailsParams.CAREER,
                    playerDetailsParams.TRANSFERS,
                    playerDetailsParams.POSITIONS,
                    playerDetailsParams.HIGHLIGHTS,
                ];
                this.playerId = params.playerId;
                this._playerService.getPlayerDetails(params.playerId, detailArray);
                this._playerService.getPlayerStats(params.playerId);
                this._eventsService.loadPlayerEvents(params.playerId);
            }
        });
    }
    onContactPlayer() {
        this._confirmationService.confirm({
            header: this._translateService.instant('PLAYER.CONTACT.MODAL_HEADER'),
            message: this._translateService.instant('PLAYER.CONTACT.MODAL_BODY'),
            acceptLabel: this._translateService.instant('PLAYER.CONTACT.MODAL_ACCEPT'),
            rejectLabel: this._translateService.instant('GENERAL.CANCEL'),
            accept: () => {
                var _a;
                const playerDetails = this.playerDetails$.value;
                if (playerDetails) {
                    this._playerService.playerContactInfo(playerDetails.firstName, playerDetails.lastName, ((_a = playerDetails.currentTeam) === null || _a === void 0 ? void 0 : _a.name) || 'No team');
                }
                else {
                    this._messagingService.error('GENERAL.ERRORS.DEFAULT.TITLE', 'GENERAL.ERRORS.DEFAULT.MESSAGE');
                }
            },
        });
    }
    getPlayerRole(playerRole) {
        var _a;
        const roleId = playerRole || ((_a = this.playerDetails$.value) === null || _a === void 0 ? void 0 : _a.roleId);
        const role = _aft_core__WEBPACK_IMPORTED_MODULE_0__.EntitiesUtils.findRoleById(roleId);
        return (role === null || role === void 0 ? void 0 : role.code3) || 'Not found';
    }
    goBack() {
        this._location.back();
    }
    goToTeam(team) {
        if (team) {
            this._router.navigate((0,_sw_ui_components_modules_fixture_fixture_routes__WEBPACK_IMPORTED_MODULE_1__.generateFullFixtureModuleRoute)(_sw_ui_components_modules_fixture_fixture_routes__WEBPACK_IMPORTED_MODULE_1__.FIXTURE_MODULE_ROUTES.TEAM_DETAILS, team.id));
        }
    }
    pageChanged($event) {
        this._eventsService.loadPlayerEvents(this.playerId, $event.page + 1);
    }
}
PlayerInfoComponent.ɵfac = function PlayerInfoComponent_Factory(t) { return new (t || PlayerInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.EventsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.MessagingService)); };
PlayerInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: PlayerInfoComponent, selectors: [["aft-scout-player"]], decls: 12, vars: 12, consts: [[1, "wrapperMainCont"], [1, "backRoute_section"], ["pButton", "", "type", "button", "icon", "pi pi-angle-left", "iconPos", "left", 1, "p-button-text", "p-button-secondary", 3, "label", "click"], ["class", "favorite_add_box", 4, "ngIf"], [1, "notMargin_divider"], ["class", "playerHead_section", 4, "ngIf"], ["class", "playerBody_section", 4, "ngIf"], [1, "favorite_add_box"], [1, "base_text"], [3, "id", "entity"], [1, "playerHead_section"], [1, "playerhead_left_box"], [1, "round_box"], [1, "player_image", 3, "alt", "src"], [1, "playerhead_right_box"], [1, "playerName_box"], [1, "first_name"], [1, "last_name"], [1, "playerScore_box"], [3, "score"], [3, "score", "starMode"], [1, "playerBody_section"], [1, "playerBody_left_box"], [1, "playerIntro"], [1, "info_text"], ["class", "text_hover_link", 3, "click", 4, "ngIf"], [3, "roleId"], [4, "ngFor", "ngForOf"], ["icon", "pi pi-envelope", "iconPos", "left", 1, "p-button-sm", 3, "label", "click"], [1, "playerBody_right_box"], ["header", "Overview"], ["header", "Stats"], ["header", "Videos"], [4, "ngIf"], [1, "text_hover_link", 3, "click"], [1, "team_img", 3, "src"], [3, "position"], ["class", "videos_section", 4, "ngIf"], [1, "videos_section"], [1, "videos_box"], [3, "event", "preview"], [1, "videos_paginator", "marginTop_1"], [3, "first", "totalRecords", "rows", "onPageChange"]], template: function PlayerInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PlayerInfoComponent_Template_button_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PlayerInfoComponent_div_4_Template, 5, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "p-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PlayerInfoComponent_section_8_Template, 15, 11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PlayerInfoComponent_section_10_Template, 35, 18, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 4, "GENERAL.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 6, ctx.playerDetails$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 8, ctx.playerDetails$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 10, ctx.playerDetails$));
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, primeng_divider__WEBPACK_IMPORTED_MODULE_17__.Divider, _ui_components_src_lib_components_favorite_tag_favorite_tag_component__WEBPACK_IMPORTED_MODULE_2__.FavoriteTagComponent, _ui_components_src_lib_components_player_player_rating_player_rating_component__WEBPACK_IMPORTED_MODULE_3__.PlayerRatingComponent, _ui_components_src_lib_components_player_player_position_player_position_component__WEBPACK_IMPORTED_MODULE_4__.PlayerPositionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_tabview__WEBPACK_IMPORTED_MODULE_18__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_18__.TabPanel, _scouting_private_player_components_player_info_components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_5__.PlayerDetailsComponent, _scouting_private_player_components_player_info_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_6__.PlayerStatsComponent, _components_player_videos_player_videos_component__WEBPACK_IMPORTED_MODULE_7__.PlayerVideosComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ui_components_src_lib_pipes_player_image_pipe__WEBPACK_IMPORTED_MODULE_8__.PlayerImagePipe, _ui_components_src_lib_pipes_team_flag_pipe__WEBPACK_IMPORTED_MODULE_9__.TeamFlagPipe, _ui_components_src_lib_pipes_player_team_pipe__WEBPACK_IMPORTED_MODULE_10__.PlayerTeamPipe], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]     .p-rating .p-rating-icon.pi-star-fill {\n  font-size: 2rem;\n  color: #002d64;\n}\n[_nghost-%COMP%]     .p-rating .p-rating-icon {\n  color: #002d64;\n  margin-left: 0.5rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  font-size: 2rem;\n}\n[_nghost-%COMP%]     .p-disabled, .p-component[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .p-inputnumber.rating_input.rating_small .p-inputtext:disabled {\n  font-size: 2rem !important;\n}\n[_nghost-%COMP%]     p-inputnumber.rating_input {\n  max-width: 72px;\n}\n[_nghost-%COMP%]     p-inputnumber.rating_input.rating_small .p-inputtext:disabled {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-panels {\n  color: unset;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 2rem;\n  margin-top: 80px;\n  padding-bottom: 9rem;\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%] {\n    margin: 0 0.5rem;\n    margin-top: 80px;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .notMargin_divider[_ngcontent-%COMP%]     .p-divider.p-divider-horizontal {\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .backRoute_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0 auto;\n  padding-bottom: 0.5rem;\n}\n@media screen and (max-width: 1199px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .backRoute_section[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .backRoute_section[_ngcontent-%COMP%]   .favorite_add_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .backRoute_section[_ngcontent-%COMP%]   .favorite_add_box[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  color: #7b7b7b;\n  font-size: 0.8rem;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  max-width: 100%;\n  margin: 0;\n  padding-top: 1rem;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 20%;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n  min-width: 140px;\n  padding-top: 140px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 50%;\n  background-color: #dedede;\n}\n@media screen and (max-width: 1199px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n    min-width: 125px;\n    padding-top: 125px;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90px;\n  border-radius: 50px;\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  min-width: 88%;\n  height: 95%;\n  transform: translate(-50%, -50%);\n  transition: 1s ease;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .overlay_box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0px;\n  z-index: 1;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .overlay_box[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .overlay_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  max-width: 30px;\n  margin-right: 5px;\n  border: 2px solid white;\n  border-radius: 20px;\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .overlay_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n    max-width: 25px;\n  }\n}\n@media screen and (max-width: 767px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_left_box[_ngcontent-%COMP%]   .overlay_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n    max-width: 25px;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerName_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 3rem;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerName_box[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerName_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerName_box[_ngcontent-%COMP%]   .first_name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerName_box[_ngcontent-%COMP%]   .last_name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2.3rem;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerScore_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerHead_section[_ngcontent-%COMP%]   .playerhead_right_box[_ngcontent-%COMP%]   .playerScore_box[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding-top: 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  margin-top: 2rem;\n  border: 1px solid #e8e8e8;\n  padding: 0.6rem 0.4rem;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]     .p-divider.p-divider-horizontal {\n  margin: 0.5rem 0 !important;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 125px;\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 300;\n  min-width: max-content;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  max-width: min-content;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .team_img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]     .position_pill {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: left;\n  line-height: 35px;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]     .position_pill {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_left_box[_ngcontent-%COMP%]   .info_text[_ngcontent-%COMP%]     .position_pill .p-chip {\n  border-radius: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_right_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding-left: 3rem;\n  margin-top: -3rem;\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .wrapperMainCont[_ngcontent-%COMP%]   .playerBody_section[_ngcontent-%COMP%]   .playerBody_right_box[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding-left: 0;\n    width: 100%;\n  }\n}\n.top_head[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  max-width: 90%;\n}\n@media screen and (max-width: 1199px) {\n  .top_head[_ngcontent-%COMP%] {\n    max-width: 95%;\n    padding: 0;\n  }\n}\n.top_head[_ngcontent-%COMP%]   .top_head_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.top_head[_ngcontent-%COMP%]   .top_head_content[_ngcontent-%COMP%]   .favorite_add_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.top_head[_ngcontent-%COMP%]   .top_head_content[_ngcontent-%COMP%]   .favorite_add_box[_ngcontent-%COMP%]   .base_text[_ngcontent-%COMP%] {\n  color: #7b7b7b;\n  font-size: 0.8rem;\n}\n.videos_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  max-width: 90%;\n  margin: 0 auto;\n  margin-top: 1rem;\n}\n.videos_section[_ngcontent-%COMP%]   .vides_title[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  font-size: 1.2rem;\n}\n.videos_section[_ngcontent-%COMP%]   .videos_box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 40px;\n  grid-column-gap: 40px;\n  column-gap: 40px;\n  grid-row-gap: 40px;\n  row-gap: 40px;\n  grid-auto-rows: minmax(50px, auto);\n}\n@media screen and (max-width: 1199px) {\n  .videos_section[_ngcontent-%COMP%]   .videos_box[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media screen and (max-width: 991px) {\n  .videos_section[_ngcontent-%COMP%]   .videos_box[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.career_transfers_box[_ngcontent-%COMP%] {\n  max-width: 90%;\n  padding-bottom: 9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInBsYXllci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FBRUEsK0JBQUE7QUFFQSxzQkFBQTtBQUVBLGlCQUFBO0FBTUEsZ0JBQUE7QUFPQSxlQUFBO0FBTUEsY0FBQTtBQVFBLFdBQUE7QUFJQSxjQUFBO0FBUUEsYUFBQTtBQVFBLFdBQUE7QUFPQSxZQUFBO0FBUUEscUJBQUE7QUFTQSw0Q0FBQTtBQUVBLGNBQUE7QUFTQSxrQkFBQTtBQVNBLHlDQUFBO0FBRUEsdUJBQUE7QUFPQSxjQUFBO0FBT0EsaUJBQUE7QUFtQkEsZUFBQTtBQWtCQSxpQkFBQTtBQUlBLGtCQUFBO0FBbUJBLHFDQUFBO0FBUUEsc0NBQUE7QUFDQSx3REFBQTtBQ25MQTtFQUNFLFNBQUE7QUF3QkY7QUFyQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXdCRjtBQXJCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0VBQ0EsZUFBQTtBQXdCRjtBQXRCQTtFQUNFLFVBQUE7QUF5QkY7QUF0QkE7RUFDRSwwQkFBQTtBQXlCRjtBQXJCRTtFQUNFLGVBQUE7QUF3Qko7QUF0Qk07RUFDRSxlQUFBO0FBd0JSO0FBakJBO0VBQ0UsWUFBQTtBQW9CRjtBQWpCQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQW9CRjtBQW5CRTtFQUxGO0lBTUksZ0JBQUE7SUFDQSxnQkFBQTtFQXNCRjtBQUNGO0FBbkJJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFxQk47QUFqQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFtQko7QUFsQkk7RUFQRjtJQVFJLFVBQUE7RUFxQko7QUFDRjtBQXBCSTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBcUJOO0FBcEJNO0VBQ0UsY0RwQlM7RUNxQlQsaUJBQUE7QUFzQlI7QUFoQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQWtCSjtBQWpCSTtFQVJGO0lBU0ksc0JBQUE7RUFvQko7QUFDRjtBQWxCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBb0JOO0FBbkJNO0VBTkY7SUFPSSxXQUFBO0VBc0JOO0FBQ0Y7QUFwQk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEakRPO0FDdUVmO0FBckJRO0VBUEY7SUFRSSxnQkFBQTtJQUNBLGtCQUFBO0VBd0JSO0FBQ0Y7QUF2QlE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBeUJWO0FBckJNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUF1QlI7QUF0QlE7RUFMRjtJQU1JLFdBQUE7RUF5QlI7QUFDRjtBQXZCUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSx1REFBQTtFQUNBLG9EQUFBO0FBeUJWO0FBeEJVO0VBVEY7SUFVSSxXQUFBO0lBQ0EsZUFBQTtFQTJCVjtBQUNGO0FBMUJVO0VBYkY7SUFjSSxXQUFBO0lBQ0EsZUFBQTtFQTZCVjtBQUNGO0FBdkJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUF5Qk47QUF4Qk07RUFORjtJQU9JLHNCQUFBO0lBQ0EsV0FBQTtFQTJCTjtBQUNGO0FBMUJNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE0QlI7QUEzQlE7RUFKRjtJQUtJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7RUE4QlI7QUFDRjtBQTVCVTtFQURGO0lBRUksa0JBQUE7RUErQlY7QUFDRjtBQTVCUTtFQUNFLGlCQUFBO0FBOEJWO0FBNUJRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQThCVjtBQTNCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBNkJSO0FBNUJRO0VBSkY7SUFLSSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQStCUjtBQUNGO0FBekJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQTJCSjtBQTFCSTtFQUpGO0lBS0ksc0JBQUE7RUE2Qko7QUFDRjtBQTVCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBOEJOO0FBN0JNO0VBQ0UsMkJBQUE7QUErQlI7QUE3Qk07RUFYRjtJQVlJLFdBQUE7RUFnQ047QUFDRjtBQS9CTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBaUNSO0FBaENRO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFrQ1Y7QUFoQ1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBa0NWO0FBakNVO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFtQ1o7QUFqQ1U7RUFDRSxvQkFBQTtBQW1DWjtBQWhDUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFrQ1Y7QUFoQ1E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBa0NWO0FBakNVO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBbUNaO0FBOUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFnQ047QUEvQk07RUFORjtJQU9JLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUFrQ047QUFDRjtBQXRCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUF5QkY7QUF4QkU7RUFORjtJQU9JLGNBQUE7SUFDQSxVQUFBO0VBMkJGO0FBQ0Y7QUExQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBNEJKO0FBM0JJO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUE0Qk47QUEzQk07RUFDRSxjRGxRUztFQ21RVCxpQkFBQTtBQTZCUjtBQXhCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTJCRjtBQTFCRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUE0Qko7QUExQkU7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLGtDQUFBO0FBNEJKO0FBM0JJO0VBUEY7SUFRSSw4QkFBQTtFQThCSjtBQUNGO0FBN0JJO0VBVkY7SUFXSSwwQkFBQTtFQWdDSjtBQUNGO0FBN0JBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBZ0NGIiwiZmlsZSI6InBsYXllci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFNBU1MgVmFyaWFibGVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLy8vLy8gR2VuZXJhbCAvLy8vLyovXHJcblxyXG4vKi8gTWFpbiBHcmVlbiAvKi9cclxuJGNvbG9yTWFpbjogIzg4YjJhZDtcclxuJGNvbG9yTWFpbl9saWdodDogIzk5YWRhYjtcclxuJGNvbG9yTWFpbl9kYXJrOiAjNTc3ZTc5O1xyXG4kY29sb3JNYWluX3NoYWRvdzogcmdiYSgxOTksIDIwNiwgMjAwLCAwLjQxOCk7XHJcblxyXG4vKi8gTWFpbiBCbHVlIC8qL1xyXG4kY29sb3JNYWluQmx1ZTogIzAwMmQ2NDtcclxuJGNvbG9yTWFpbkJsdWVfbGlnaHQ6ICM0NzZlOWY7XHJcbiRjb2xvck1haW5CbHVlX2Rhcms6ICMxMjJjNGI7XHJcbiRjb2xvck1haW5CbHVlX3NoYWRvdzogcmdiYSgxMjMsIDEyOCwgMTU2LCAwLjUpO1xyXG4kY29sb3JNYWluQmx1ZV9jdGE6ICMwMDgxZmM7XHJcblxyXG4vKi8gTWFpbiBhbHQgLyovXHJcbiRjb2xvck1haW5BbHQ6ICMzMzQwNWQ7XHJcbiRjb2xvck1haW5BbHRfbGlnaHQ6ICM0MTViOTY7XHJcbiRjb2xvck1haW5BbHRfZGFyazogIzIwMmQ0YTtcclxuJGNvbG9yTWFpbkFsdF9zaGFkb3c6IHJnYmEoNTEsIDY0LCA5MywgNTAlKTtcclxuXHJcbi8qLyBTdWNjZXNzIC8qL1xyXG4kY29sb3JTdWNjZXNzOiAjMDliNDZjO1xyXG4kY29sb3JTdWNjZXNzX2xpZ2h0OiAjMGFjYzdiO1xyXG4kY29sb3JTdWNjZXNzX2Rhcms6ICMwYjkzNWE7XHJcbiRjb2xvclN1Y2Nlc3Nfc2hhZG93OiByZ2JhKDksIDE4MCwgMTA4LCA1MCUpO1xyXG4kY29sb3JTdWNjZXNzX2FsdEJrZzogI2RiZmZjNztcclxuJGNvbG9yU3VjY2Vzc19hbHRUZXh0OiAjNDE3ZTIwO1xyXG5cclxuLyovIEluZm8gLyovXHJcbiRjb2xvckluZm9fYWx0QmtnOiAjZThlZGZmO1xyXG4kY29sb3JJbmZvX2FsdFRleHQ6ICMzMzQwNWQ7XHJcblxyXG4vKi8gV2FybmluZyAvKi9cclxuJGNvbG9yV2FybmluZzogI2ZlYmQ0MDtcclxuJGNvbG9yV2FybmluZ19saWdodDogI2ZmY2I2NztcclxuJGNvbG9yV2FybmluZ19kYXJrOiAjZWFhNDFlO1xyXG4kY29sb3JXYXJuaW5nX3NoYWRvdzogcmdiYSgyNTQsIDE4OSwgNjQsIDUwJSk7XHJcbiRjb2xvcldhcm5pbmdfYWx0QmtnOiAjZmZmNWU4O1xyXG4kY29sb3JXYXJuaW5nX2FsdFRleHQ6ICM4OTVlMGI7XHJcblxyXG4vKi8gRGFuZ2VyIC8qL1xyXG4kY29sb3JEYW5nZXI6ICNmZjQxNDE7XHJcbiRjb2xvckRhbmdlcl9saWdodDogI2ZmNjg2ODtcclxuJGNvbG9yRGFuZ2VyX2Rhcms6ICNlYjEyMTI7XHJcbiRjb2xvckRhbmdlcl9zaGFkb3c6IHJnYmEoMjU1LCA2NSwgNjUsIDUwJSk7XHJcbiRjb2xvckRhbmdlcl9hbHRCa2c6ICNmZmU4ZTg7XHJcbiRjb2xvckRhbmdlcl9hbHRUZXh0OiAjYTUyOTI5O1xyXG5cclxuLyovIFRleHQgLyovXHJcbiRjb2xvclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9yVGV4dExpZ2h0X3NoYWRvdzogcmdiYSgxMjMsIDEyMywgMTIzLCA1MCUpO1xyXG4kY29sb3JUZXh0SW52ZXJzZTogd2hpdGU7XHJcbiRjb2xvclRleHREYXJrR3JleTogIzUwNTA1MDtcclxuXHJcbi8qLyBPdGhlciAvKi9cclxuJGNvbG9yT3V0bGluZTogI2RlZGVkZTtcclxuJGNvbG9yQmtnOiAjZmFmYWZhO1xyXG4kY29sb3JMaWdodEdyYXk6ICNmM2YzZjM7XHJcbiRjb2xvckRhcmtHcmV5OiAjNDE0MTQxO1xyXG4kY29sb3JHcmV5X3NoYWRvdzogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG4kY29sb3JPdXRpbGVfZGl2ZWRlcjogIzlmOWY5ZjtcclxuXHJcbi8qLy8vLy8gSGVhZGVyIC8vLy8vKi9cclxuXHJcbiRjb2xvckhlYWRlckJrZzogd2hpdGU7XHJcbiRjb2xvckhlYWRlclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvckhlYWRlclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9ySGVhZGVySG92ZXI6ICNmMWYxZjE7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZzogI2YxZjFmMTtcclxuJGNvbG9ySGVhZGVyT3V0bGluZTogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyBEYXJrIG1vZGUgRE0gLy8vLy8vLy8vLyovXHJcblxyXG4vKi8gR2VuZXJhbCAvKi9cclxuXHJcbiRjb2xvclRleHRfZG06IHdoaXRlO1xyXG4kY29sb3JUZXh0TGlnaHRfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzUlKTtcclxuJGNvbG9yVGV4dEludmVyc2VfZG06IHdoaXRlO1xyXG4kY29sb3JPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcbiRjb2xvckJrZ19kbTogIzE2MjEzYTtcclxuJGNvbG9yRGFuZ2VyX2RtOiAjZmY1NjU2O1xyXG5cclxuLyovIEhlYWRlciBkYXJrIC8qL1xyXG5cclxuJGNvbG9ySGVhZGVyQmtnX2RtOiAjMzM0MDVkO1xyXG4kY29sb3JIZWFkZXJUZXh0X2RtOiB3aGl0ZTtcclxuJGNvbG9ySGVhZGVyVGV4dExpZ2h0X2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDc1JSk7XHJcbiRjb2xvckhlYWRlckhvdmVyX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEwJSk7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZ19kbTogcmdiYSgwLCAwLCAwLCAyMCUpO1xyXG4kY29sb3JIZWFkZXJPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcblxyXG4vKi8vLy8vLy8vLy8gUG9zaXRpb25zIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLyBHZW5yZWFsIFBvc2l0aW9uIC8qL1xyXG5cclxuJGNvbG9yRldEOiAjMDA4MWZjO1xyXG4kY29sb3JNSUQ6ICMwMDJkNjQ7XHJcbiRjb2xvckRFRjogIzQ3NmU5ZjtcclxuJGNvbG9yR0tQOiAjODhiMmFkO1xyXG5cclxuLyovIFN0cmlrZXIgLyovXHJcblxyXG4kY29sb3JDRjogI2IxOTdmYztcclxuJGNvbG9yTFc6ICM5Nzc1ZmE7XHJcbiRjb2xvclJXOiAjODQ1ZWY3O1xyXG4kY29sb3JMV0Y6ICM3OTUwZjI7XHJcbiRjb2xvclJXRjogIzcwNDhlODtcclxuLyovIE1pZGZpZWxkZXIgLyovXHJcblxyXG4kY29sb3JBTUY6ICNmYWFmMDM7XHJcbiRjb2xvckxBTUY6ICNmNTlmMDA7XHJcbiRjb2xvclJBTUY6ICNmMDhjMDA7XHJcbiRjb2xvckxDTTogI2ZkN2UxNDtcclxuJGNvbG9yUkNNOiAjZjc2NzA3O1xyXG4kY29sb3JDTUY6ICNlODU5MGM7XHJcbiRjb2xvckRNRjogI2ZhNTI1MjtcclxuJGNvbG9yTERNOiAjZmU0NTQ1O1xyXG4kY29sb3JSRE06ICNmMDNlM2U7XHJcbiRjb2xvclJNRjogI2RiMzIzMjtcclxuJGNvbG9yTE1GOiAjZTAzMTMxO1xyXG4kY29sb3JSQU06ICNjOTJhMmE7XHJcbiRjb2xvckxDTUY6ICNhNjFlNGQ7XHJcbiRjb2xvclJDTUY6ICNjMjI1NWM7XHJcbiRjb2xvckxETUY6ICNkNjMzNmM7XHJcbiRjb2xvclJETUY6ICNlNjQ4N2Y7XHJcblxyXG4vKi8gRGVmZW5kZXIgLyovXHJcblxyXG4kY29sb3JDQjogIzgyYzkxZTtcclxuJGNvbG9yTENCOiAjNzRiODE2O1xyXG4kY29sb3JSQ0I6ICM2NmE4MGY7XHJcbiRjb2xvclJDQjM6ICMzN2IyNGQ7XHJcbiRjb2xvclJCOiAjMmY5ZTQ0O1xyXG4kY29sb3JSQ0I1OiAjMmI4YTNlO1xyXG4kY29sb3JMQjogIzA5OTI2ODtcclxuJGNvbG9yTFdCOiAjMGViNzg0O1xyXG4kY29sb3JSV0I6ICMzOGQ5YTk7XHJcbiRjb2xvclJCNTogIzNiYzlkYjtcclxuJGNvbG9yTEI1OiAjMjFiN2NlO1xyXG4kY29sb3JMQ0IzOiAjMTVhYWJmO1xyXG4kY29sb3JMQ0I1OiAjMTA5OGFkO1xyXG4kY29sb3JSQ01GMzogIzBhN2I4ZDtcclxuJGNvbG9yTENNRjM6ICMwMjUxNWU7XHJcblxyXG4vKi8gR29hbEtlZXBlciAvKi9cclxuXHJcbiRjb2xvckdLOiAjMzY0ZmM3O1xyXG5cclxuLyovIFZpZGVvcyBUYWdzIC8qL1xyXG5cclxuJGNvbG9yR29hbDogIzAwODFmYztcclxuJGNvbG9yU2F2ZTogIzAwMmQ2NDtcclxuJGNvbG9yU2F2ZVJlZmxleDogIzJiOGEzZTtcclxuJGNvbG9yUmVkQ2FyZDogI2RiMzIzMjtcclxuJGNvbG9yWWVsbG93Q2FyZDogI2ZhYWYwMztcclxuJGNvbG9yQ2FyZDogIzM2NGZjNztcclxuJGNvbG9yQXNzaXQ6ICM4OGIyYWQ7XHJcbiRjb2xvckNvbmNlZGVkR29hbDogI2MyMjU1YztcclxuJGNvbG9yRGVmZW5zaXZlRHVlbDogIzEwOThhZDtcclxuJGNvbG9yUGVuYWx0eUNvbmNlZGVkR29hbDogI2U4NTkwYztcclxuJGNvbG9yUGVuYWx0eUZvdWw6ICNkYjMyMzI7XHJcbiRjb2xvclBlbmFsdHlHb2FsOiAjNDc2ZTlmO1xyXG4kY29sb3JQZW5hbHR5U2F2ZTogIzM3YjI0ZDtcclxuJGNvbG9yU2hvdEFnYWluc3Q6ICM4MmM5MWU7XHJcbiRjb2xvclBhc3M6ICM3OTUwZjI7XHJcbiRjb2xvclNob3Q6ICNiMTk3ZmM7XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVhc3VyZW1lbnRzIC8vLy8vLy8vLy8qL1xyXG5cclxuJGNvbnRhaW5lcldpZHRoUzogMTAwJTtcclxuJGNvbnRhaW5lcldpZHRoTTogNjMycHg7XHJcbiRjb250YWluZXJXaWR0aEw6IDEyMzJweDtcclxuXHJcbiRjb250YWluZXJHdXR0ZXI6IDFyZW07XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVkaWEgUXVlcmllcyAvLy8vLy8vLy8vKi9cclxuLyogTWVkaWEgcXVlcmllcyBzaG91bGQgYWx3YXlzIGJlIHVzZWQgd2l0aCBtYXgtd2lkdGguICovXHJcblxyXG4kbWVkaWFxdWVyeVhTOiA2MDBweDtcclxuJG1lZGlhcXVlcnlTOiA3NjdweDtcclxuJG1lZGlhcXVlcnlNOiA5OTFweDtcclxuJG1lZGlhcXVlcnlMOiAxMTk5cHg7XHJcbiRtZWRpYXF1ZXJ5WEw6IDE0NDBweDtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1yYXRpbmcgLnAtcmF0aW5nLWljb24ucGktc3Rhci1maWxsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6ICMwMDJkNjQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1yYXRpbmcgLnAtcmF0aW5nLWljb257XHJcbiAgY29sb3I6ICMwMDJkNjQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucC1kaXNhYmxlZCwgLnAtY29tcG9uZW50OmRpc2FibGVke1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1pbnB1dG51bWJlci5yYXRpbmdfaW5wdXQucmF0aW5nX3NtYWxsIC5wLWlucHV0dGV4dDpkaXNhYmxlZHtcclxuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHAtaW5wdXRudW1iZXIge1xyXG4gICYucmF0aW5nX2lucHV0IHtcclxuICAgIG1heC13aWR0aDogNzJweCA7XHJcbiAgICAmLnJhdGluZ19zbWFsbCB7XHJcbiAgICAgIC5wLWlucHV0dGV4dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtIDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLXRhYnZpZXcgLnAtdGFidmlldy1wYW5lbHN7XHJcbiAgY29sb3I6IHVuc2V0O1xyXG59XHJcbiAgICBcclxuOmhvc3QgLndyYXBwZXJNYWluQ29udCB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIDJyZW07XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOXJlbTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeVhTKSB7XHJcbiAgICBtYXJnaW46IDAgLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyAgIFxyXG4gIH1cclxuXHJcbiAgLm5vdE1hcmdpbl9kaXZpZGVye1xyXG4gICAgOjpuZy1kZWVwIC5wLWRpdmlkZXIucC1kaXZpZGVyLWhvcml6b250YWx7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYWNrUm91dGVfc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TCkge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmZhdm9yaXRlX2FkZF9ib3gge1xyXG4gICAgICAvL3dpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYmFzZV90ZXh0IHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yVGV4dExpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5wbGF5ZXJIZWFkX3NlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnBsYXllcmhlYWRfbGVmdF9ib3h7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5yb3VuZF9ib3gge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE0MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JPdXRsaW5lO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TCkge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1heC13aWR0aDogOTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDU1JTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIG1pbi13aWR0aDogODglO1xyXG4gICAgICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm92ZXJsYXlfYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlTKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wbGF5ZXJoZWFkX3JpZ2h0X2JveHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5wbGF5ZXJOYW1lX2JveHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZpcnN0X25hbWV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhc3RfbmFtZXtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wbGF5ZXJTY29yZV9ib3h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnBsYXllckJvZHlfc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5wbGF5ZXJCb2R5X2xlZnRfYm94e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICBwYWRkaW5nOiAwLjZyZW0gMC40cmVtO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICA6Om5nLWRlZXAgLnAtZGl2aWRlci5wLWRpdmlkZXItaG9yaXpvbnRhbHtcclxuICAgICAgICBtYXJnaW46IC41cmVtIDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaW5mb190ZXh0IHsgICAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAudGVhbV9pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDo6bmctZGVlcCAucG9zaXRpb25fcGlsbHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgOjpuZy1kZWVwIC5wb3NpdGlvbl9waWxse1xyXG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAucC1jaGlwIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBsYXllckJvZHlfcmlnaHRfYm94e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zcmVtO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4udG9wX2hlYWQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeUwpIHtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnRvcF9oZWFkX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmZhdm9yaXRlX2FkZF9ib3gge1xyXG4gICAgICAvL3dpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYmFzZV90ZXh0IHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yVGV4dExpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi52aWRlb3Nfc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgLnZpZGVzX3RpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgLnZpZGVvc19ib3gge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogNDBweDtcclxuICAgIGNvbHVtbi1nYXA6IDQwcHg7XHJcbiAgICByb3ctZ2FwOiA0MHB4O1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jYXJlZXJfdHJhbnNmZXJzX2JveCB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDlyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8079:
/*!***********************************************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/components/player-stats/player-stats.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerStatsComponent": () => (/* binding */ PlayerStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var _ui_components_src_lib_components_player_player_position_player_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/components/player/player-position/player-position.component */ 5041);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var _ui_components_src_lib_components_player_player_wyscout_stats_player_wyscout_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/components/player/player-wyscout-stats/player-wyscout-stats.component */ 1265);
/* harmony import */ var _ui_components_src_lib_components_player_player_analyst_stats_player_analyst_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/components/player/player-analyst-stats/player-analyst-stats.component */ 532);
/* harmony import */ var _ui_components_src_lib_pipes_player_image_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/pipes/player-image.pipe */ 6596);
/* harmony import */ var _ui_components_src_lib_pipes_player_age_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/pipes/player-age.pipe */ 2989);
/* harmony import */ var _ui_components_src_lib_pipes_player_role_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../ui-components/src/lib/pipes/player-role.pipe */ 122);














function PlayerStatsComponent_ng_container_1_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "aft-player-position", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const position_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("position", position_r4.positionCode);
} }
function PlayerStatsComponent_ng_container_1_p_tabView_40_aft_player_analyst_stats_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "aft-player-analyst-stats", 32);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("editMode", false);
} }
function PlayerStatsComponent_ng_container_1_p_tabView_40_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "PLAYER_STATS_DETAIL.ANALYST_TAB_EMPTY"));
} }
function PlayerStatsComponent_ng_container_1_p_tabView_40_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabView", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("activeIndexChange", function PlayerStatsComponent_ng_container_1_p_tabView_40_Template_p_tabView_activeIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r8.selectedTab = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p-tabPanel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "aft-wyscout-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-tabPanel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PlayerStatsComponent_ng_container_1_p_tabView_40_aft_player_analyst_stats_6_Template, 1, 1, "aft-player-analyst-stats", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, PlayerStatsComponent_ng_container_1_p_tabView_40_div_7_Template, 3, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerStats_r5 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeIndex", ctx_r3.selectedTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 5, "PLAYER_STATS_DETAIL.STATS_TAB_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 7, "PLAYER_STATS_DETAIL.ANALYST_TAB_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", playerStats_r5.analystData);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !playerStats_r5.analystData);
} }
function PlayerStatsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PlayerStatsComponent_ng_container_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "playerImage");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "playerAge");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "playerRole");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, PlayerStatsComponent_ng_container_1_ng_container_30_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PlayerStatsComponent_ng_container_1_Template_p_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.onContactPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, PlayerStatsComponent_ng_container_1_p_tabView_40_Template, 8, 9, "p-tabView", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const playerDetails_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 11, "GENERAL.BACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 13, "PLAYERS_ADVANCED_SEARCH.PLAYER_IMG_ALT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 15, playerDetails_r1 == null ? null : playerDetails_r1.imageDataURL), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 17, playerDetails_r1 == null ? null : playerDetails_r1.birthDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 19, "PLAYER.AGE_LBL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](28, 21, playerDetails_r1 == null ? null : playerDetails_r1.roleId, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", playerDetails_r1.playerPositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](playerDetails_r1 == null ? null : playerDetails_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](playerDetails_r1 == null ? null : playerDetails_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 24, "PLAYER.CONTACT_BTN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 26, ctx_r0.playerStats$));
} }
class PlayerStatsComponent {
    constructor(_location, _playerService, _route, _confirmationService, _translateService, _messagingService) {
        this._location = _location;
        this._playerService = _playerService;
        this._route = _route;
        this._confirmationService = _confirmationService;
        this._translateService = _translateService;
        this._messagingService = _messagingService;
        this.selectedTab = 0;
        this._subscriptions = [];
        this.playerDetails$ = this._playerService.playerDetails$;
        this.playerStats$ = this._playerService.playerStats$;
    }
    ngOnInit() {
        this._subscriptions.push(this._route.params.subscribe((params) => {
            if (params.secondTab) {
                this.selectedTab = params.secondTab ? 1 : 0;
            }
            if (params.playerId && !this.playerDetails$.value) {
                this._playerService.getPlayerDetails(params.playerId);
            }
            if (params.playerId && !this.playerStats$.value) {
                this._playerService.getPlayerStats(params.playerId);
            }
        }));
        this._subscriptions.push(this.playerDetails$.subscribe(player => {
            var _a, _b;
            if (player) {
                const activeSeason = (_b = (_a = player.currentTeam) === null || _a === void 0 ? void 0 : _a.league) === null || _b === void 0 ? void 0 : _b.seasons.find(s => s.active);
                if (activeSeason) {
                    this._playerService.getPlayerExtendedStats(player.id, activeSeason.id);
                }
            }
        }));
    }
    ngOnDestroy() {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    onContactPlayer() {
        this._confirmationService.confirm({
            header: this._translateService.instant('PLAYER.CONTACT.MODAL_HEADER'),
            message: this._translateService.instant('PLAYER.CONTACT.MODAL_BODY'),
            acceptLabel: this._translateService.instant('PLAYER.CONTACT.MODAL_ACCEPT'),
            rejectLabel: this._translateService.instant('GENERAL.CANCEL'),
            accept: () => {
                var _a;
                const playerDetails = this.playerDetails$.value;
                if (playerDetails) {
                    this._playerService.playerContactInfo(playerDetails.firstName, playerDetails.lastName, ((_a = playerDetails.currentTeam) === null || _a === void 0 ? void 0 : _a.name) || 'No team');
                }
                else {
                    this._messagingService.error('GENERAL.ERRORS.DEFAULT.TITLE', 'GENERAL.ERRORS.DEFAULT.MESSAGE');
                }
            },
        });
    }
    goBack() {
        this._location.back();
    }
}
PlayerStatsComponent.ɵfac = function PlayerStatsComponent_Factory(t) { return new (t || PlayerStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_aft_core__WEBPACK_IMPORTED_MODULE_0__.MessagingService)); };
PlayerStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PlayerStatsComponent, selectors: [["aft-scout-player-stats-disable"]], decls: 3, vars: 3, consts: [[1, "wrapperMainCont"], [4, "ngIf"], [1, "top_head"], [1, "back_btn", "marginBottom_1", 3, "click"], [1, "pi", "pi-angle-left"], [1, "divider"], [1, "player_header", "marginBottom_2", "displayFlex"], [1, "data_box"], [1, "name_age", "displayFlex"], [1, "img_box", "col_2", "padding_0"], [1, "round_box"], [1, "player_image", 3, "alt", "src"], [1, "age_box", "marginRight_2"], [1, "age_number"], [1, "age_text"], [1, "vertical_divider", "marginRight_2"], [1, "name_box", "marginRight_2"], [1, "postion_box", "displayFlex"], [1, "positions", "marginRight_1"], [1, "pills_box"], [4, "ngFor", "ngForOf"], [1, "name_text_box"], [1, "first_name"], [1, "last_name"], [1, "points_button", "displayFlex"], ["icon", "pi pi-envelope", "iconPos", "left", 1, "contact_button", 3, "label", "click"], [1, "tabs_box"], [3, "activeIndex", "activeIndexChange", 4, "ngIf"], [3, "position"], [3, "activeIndex", "activeIndexChange"], [3, "header"], [3, "editMode", 4, "ngIf"], [3, "editMode"]], template: function PlayerStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PlayerStatsComponent_ng_container_1_Template, 42, 28, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx.playerDetails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _ui_components_src_lib_components_player_player_position_player_position_component__WEBPACK_IMPORTED_MODULE_1__.PlayerPositionComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabPanel, _ui_components_src_lib_components_player_player_wyscout_stats_player_wyscout_stats_component__WEBPACK_IMPORTED_MODULE_2__.PlayerWyscoutStatsComponent, _ui_components_src_lib_components_player_player_analyst_stats_player_analyst_stats_component__WEBPACK_IMPORTED_MODULE_3__.PlayerAnalystStatsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _ui_components_src_lib_pipes_player_image_pipe__WEBPACK_IMPORTED_MODULE_4__.PlayerImagePipe, _ui_components_src_lib_pipes_player_age_pipe__WEBPACK_IMPORTED_MODULE_5__.PlayerAgePipe, _ui_components_src_lib_pipes_player_role_pipe__WEBPACK_IMPORTED_MODULE_6__.PlayerRolePipe], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.wrapperMainCont[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin-top: 100px;\n  padding-bottom: 9rem;\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .top_head[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 1199px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .top_head[_ngcontent-%COMP%] {\n    max-width: 95%;\n    padding: 0;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n@media screen and (max-width: 1199px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%] {\n    max-width: 99%;\n  }\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 0px;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border-bottom: 1px solid #dedede;\n  padding-bottom: 20px;\n  padding-top: 10px;\n  align-items: center;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 30px;\n    padding-top: 30px;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  align-items: center;\n  width: 700px;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .vertical_divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 15px;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 40px;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    margin-right: 0px;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box.col_2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n  min-width: 100px;\n  padding-top: 100px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 50%;\n  background-color: #dedede;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n    width: 140px;\n    padding-top: 140px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%] {\n    width: 100px;\n    padding-top: 100px;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]   .round_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 120px;\n  border-radius: 50px;\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  min-width: 90%;\n  height: 90%;\n  transform: translate(-50%, -50%);\n  transition: 1s ease;\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 3rem;\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .postion_box[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 5px;\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .postion_box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .postion_box[_ngcontent-%COMP%]   p-chip[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .postion_box[_ngcontent-%COMP%]   .positions[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #0081fc;\n}\n@media screen and (max-width: 1199px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .postion_box[_ngcontent-%COMP%]   .positions[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .postion_box[_ngcontent-%COMP%]   .positions[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .name_text_box[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .name_text_box[_ngcontent-%COMP%]   .first_name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .name_text_box[_ngcontent-%COMP%]   .last_name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2.3rem;\n}\n@media screen and (max-width: 1199px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_number[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 2.5rem;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_text[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .first_name[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%]   .last_name[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 1.8rem;\n  }\n}\n@media screen and (max-width: 991px) {\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%] {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    margin-right: 0px !important;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .age_box[_ngcontent-%COMP%]   .age_number[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-right: 15px;\n  }\n  .wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .name_age[_ngcontent-%COMP%]   .name_box[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 15px;\n    margin-right: 0px !important;\n  }\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .points_button[_ngcontent-%COMP%]   .displayFlex[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.wrapperMainCont[_ngcontent-%COMP%]   .player_header[_ngcontent-%COMP%]   .data_box[_ngcontent-%COMP%]   .points_button[_ngcontent-%COMP%]   .displayFlex[_ngcontent-%COMP%]   .p-rating-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem !important;\n}\n.contact_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 50px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInBsYXllci1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQUVBLCtCQUFBO0FBRUEsc0JBQUE7QUFFQSxpQkFBQTtBQU1BLGdCQUFBO0FBT0EsZUFBQTtBQU1BLGNBQUE7QUFRQSxXQUFBO0FBSUEsY0FBQTtBQVFBLGFBQUE7QUFRQSxXQUFBO0FBT0EsWUFBQTtBQVFBLHFCQUFBO0FBU0EsNENBQUE7QUFFQSxjQUFBO0FBU0Esa0JBQUE7QUFTQSx5Q0FBQTtBQUVBLHVCQUFBO0FBT0EsY0FBQTtBQU9BLGlCQUFBO0FBbUJBLGVBQUE7QUFrQkEsaUJBQUE7QUFJQSxrQkFBQTtBQW1CQSxxQ0FBQTtBQVFBLHNDQUFBO0FBQ0Esd0RBQUE7QUNwTEE7RUFDRSxTQUFBO0FBeUJGO0FBdkJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUEwQkY7QUF6QkU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBMkJKO0FBMUJJO0VBSkY7SUFLSSxjQUFBO0lBQ0EsVUFBQTtFQTZCSjtBQUNGO0FBMUJFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBNEJKO0FBM0JJO0VBUEY7SUFRSSxjQUFBO0VBOEJKO0FBQ0Y7QUE1Qkk7RUFYRjtJQVlJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUErQko7QUFDRjtBQTdCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQStCTjtBQTlCTTtFQVJGO0lBU0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtFQWlDTjtBQUNGO0FBaENNO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFrQ1I7QUFqQ1E7RUFKRjtJQUtJLFdBQUE7RUFvQ1I7QUFDRjtBQW5DUTtFQUNFLGFBQUE7QUFxQ1Y7QUFuQ1E7RUFWRjtJQVdJLDhCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQXNDUjtFQXJDUTtJQUNFLGFBQUE7RUF1Q1Y7RUFyQ1E7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUF1Q1Y7QUFDRjtBQXJDUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF1Q1Y7QUF0Q1U7RUFMRjtJQU1JLG1CQUFBO0lBQ0EsaUJBQUE7RUF5Q1Y7RUF4Q1U7SUFDRSxXQUFBO0VBMENaO0FBQ0Y7QUF4Q1U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEL0JHO0FDeUVmO0FBekNZO0VBUEY7SUFRSSxZQUFBO0lBQ0Esa0JBQUE7RUE0Q1o7QUFDRjtBQTNDWTtFQVhGO0lBWUksWUFBQTtJQUNBLGtCQUFBO0VBOENaO0FBQ0Y7QUE3Q1k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQStDZDtBQTFDVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQTRDWjtBQTFDVTtFQUNFLGlCQUFBO0FBNENaO0FBeENVO0VBREY7SUFFSSxhQUFBO0lBQ0EsOEJBQUE7RUEyQ1Y7QUFDRjtBQTFDVTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUE0Q1o7QUEzQ1k7RUFIRjtJQUlJLHNCQUFBO0lBQ0EsbUJBQUE7RUE4Q1o7QUFDRjtBQTdDWTtFQUNFLGlCQUFBO0FBK0NkO0FBN0NZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNENUhNO0FDMktwQjtBQTlDYztFQUpGO0lBS0ksZUFBQTtFQWlEZDtBQUNGO0FBaERjO0VBUEY7SUFRSSxtQkFBQTtFQW1EZDtBQUNGO0FBL0NZO0VBREY7SUFFSSxtQkFBQTtFQWtEWjtBQUNGO0FBakRZO0VBQ0UsaUJBQUE7QUFtRGQ7QUFqRFk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBbURkO0FBL0NRO0VBRUk7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBZ0RaO0VBOUNVO0lBQ0UsaUJBQUE7RUFnRFo7RUE1Q1U7SUFDRSxpQkFBQTtFQThDWjtFQTVDVTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUE4Q1o7QUFDRjtBQTNDUTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0VBNkNWO0VBNUNVO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBOENaO0VBM0NRO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0VBNkNWO0FBQ0Y7QUF6Q1E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBMkNWO0FBMUNVO0VBQ0UsNEJBQUE7QUE0Q1o7QUFuQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFzQ0oiLCJmaWxlIjoicGxheWVyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFNBU1MgVmFyaWFibGVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLy8vLy8gR2VuZXJhbCAvLy8vLyovXHJcblxyXG4vKi8gTWFpbiBHcmVlbiAvKi9cclxuJGNvbG9yTWFpbjogIzg4YjJhZDtcclxuJGNvbG9yTWFpbl9saWdodDogIzk5YWRhYjtcclxuJGNvbG9yTWFpbl9kYXJrOiAjNTc3ZTc5O1xyXG4kY29sb3JNYWluX3NoYWRvdzogcmdiYSgxOTksIDIwNiwgMjAwLCAwLjQxOCk7XHJcblxyXG4vKi8gTWFpbiBCbHVlIC8qL1xyXG4kY29sb3JNYWluQmx1ZTogIzAwMmQ2NDtcclxuJGNvbG9yTWFpbkJsdWVfbGlnaHQ6ICM0NzZlOWY7XHJcbiRjb2xvck1haW5CbHVlX2Rhcms6ICMxMjJjNGI7XHJcbiRjb2xvck1haW5CbHVlX3NoYWRvdzogcmdiYSgxMjMsIDEyOCwgMTU2LCAwLjUpO1xyXG4kY29sb3JNYWluQmx1ZV9jdGE6ICMwMDgxZmM7XHJcblxyXG4vKi8gTWFpbiBhbHQgLyovXHJcbiRjb2xvck1haW5BbHQ6ICMzMzQwNWQ7XHJcbiRjb2xvck1haW5BbHRfbGlnaHQ6ICM0MTViOTY7XHJcbiRjb2xvck1haW5BbHRfZGFyazogIzIwMmQ0YTtcclxuJGNvbG9yTWFpbkFsdF9zaGFkb3c6IHJnYmEoNTEsIDY0LCA5MywgNTAlKTtcclxuXHJcbi8qLyBTdWNjZXNzIC8qL1xyXG4kY29sb3JTdWNjZXNzOiAjMDliNDZjO1xyXG4kY29sb3JTdWNjZXNzX2xpZ2h0OiAjMGFjYzdiO1xyXG4kY29sb3JTdWNjZXNzX2Rhcms6ICMwYjkzNWE7XHJcbiRjb2xvclN1Y2Nlc3Nfc2hhZG93OiByZ2JhKDksIDE4MCwgMTA4LCA1MCUpO1xyXG4kY29sb3JTdWNjZXNzX2FsdEJrZzogI2RiZmZjNztcclxuJGNvbG9yU3VjY2Vzc19hbHRUZXh0OiAjNDE3ZTIwO1xyXG5cclxuLyovIEluZm8gLyovXHJcbiRjb2xvckluZm9fYWx0QmtnOiAjZThlZGZmO1xyXG4kY29sb3JJbmZvX2FsdFRleHQ6ICMzMzQwNWQ7XHJcblxyXG4vKi8gV2FybmluZyAvKi9cclxuJGNvbG9yV2FybmluZzogI2ZlYmQ0MDtcclxuJGNvbG9yV2FybmluZ19saWdodDogI2ZmY2I2NztcclxuJGNvbG9yV2FybmluZ19kYXJrOiAjZWFhNDFlO1xyXG4kY29sb3JXYXJuaW5nX3NoYWRvdzogcmdiYSgyNTQsIDE4OSwgNjQsIDUwJSk7XHJcbiRjb2xvcldhcm5pbmdfYWx0QmtnOiAjZmZmNWU4O1xyXG4kY29sb3JXYXJuaW5nX2FsdFRleHQ6ICM4OTVlMGI7XHJcblxyXG4vKi8gRGFuZ2VyIC8qL1xyXG4kY29sb3JEYW5nZXI6ICNmZjQxNDE7XHJcbiRjb2xvckRhbmdlcl9saWdodDogI2ZmNjg2ODtcclxuJGNvbG9yRGFuZ2VyX2Rhcms6ICNlYjEyMTI7XHJcbiRjb2xvckRhbmdlcl9zaGFkb3c6IHJnYmEoMjU1LCA2NSwgNjUsIDUwJSk7XHJcbiRjb2xvckRhbmdlcl9hbHRCa2c6ICNmZmU4ZTg7XHJcbiRjb2xvckRhbmdlcl9hbHRUZXh0OiAjYTUyOTI5O1xyXG5cclxuLyovIFRleHQgLyovXHJcbiRjb2xvclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9yVGV4dExpZ2h0X3NoYWRvdzogcmdiYSgxMjMsIDEyMywgMTIzLCA1MCUpO1xyXG4kY29sb3JUZXh0SW52ZXJzZTogd2hpdGU7XHJcbiRjb2xvclRleHREYXJrR3JleTogIzUwNTA1MDtcclxuXHJcbi8qLyBPdGhlciAvKi9cclxuJGNvbG9yT3V0bGluZTogI2RlZGVkZTtcclxuJGNvbG9yQmtnOiAjZmFmYWZhO1xyXG4kY29sb3JMaWdodEdyYXk6ICNmM2YzZjM7XHJcbiRjb2xvckRhcmtHcmV5OiAjNDE0MTQxO1xyXG4kY29sb3JHcmV5X3NoYWRvdzogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG4kY29sb3JPdXRpbGVfZGl2ZWRlcjogIzlmOWY5ZjtcclxuXHJcbi8qLy8vLy8gSGVhZGVyIC8vLy8vKi9cclxuXHJcbiRjb2xvckhlYWRlckJrZzogd2hpdGU7XHJcbiRjb2xvckhlYWRlclRleHQ6ICMwMDAwMDA7XHJcbiRjb2xvckhlYWRlclRleHRMaWdodDogIzdiN2I3YjtcclxuJGNvbG9ySGVhZGVySG92ZXI6ICNmMWYxZjE7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZzogI2YxZjFmMTtcclxuJGNvbG9ySGVhZGVyT3V0bGluZTogcmdiYSgwLCAwLCAwLCAyNSUpO1xyXG5cclxuLyovLy8vLy8vLy8vIENvbG9ycyBEYXJrIG1vZGUgRE0gLy8vLy8vLy8vLyovXHJcblxyXG4vKi8gR2VuZXJhbCAvKi9cclxuXHJcbiRjb2xvclRleHRfZG06IHdoaXRlO1xyXG4kY29sb3JUZXh0TGlnaHRfZG06IHJnYmEoMjU1LCAyNTUsIDI1NSwgNzUlKTtcclxuJGNvbG9yVGV4dEludmVyc2VfZG06IHdoaXRlO1xyXG4kY29sb3JPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcbiRjb2xvckJrZ19kbTogIzE2MjEzYTtcclxuJGNvbG9yRGFuZ2VyX2RtOiAjZmY1NjU2O1xyXG5cclxuLyovIEhlYWRlciBkYXJrIC8qL1xyXG5cclxuJGNvbG9ySGVhZGVyQmtnX2RtOiAjMzM0MDVkO1xyXG4kY29sb3JIZWFkZXJUZXh0X2RtOiB3aGl0ZTtcclxuJGNvbG9ySGVhZGVyVGV4dExpZ2h0X2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDc1JSk7XHJcbiRjb2xvckhlYWRlckhvdmVyX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEwJSk7XHJcbiRjb2xvckhlYWRlclNlYXJjaEJrZ19kbTogcmdiYSgwLCAwLCAwLCAyMCUpO1xyXG4kY29sb3JIZWFkZXJPdXRsaW5lX2RtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1JSk7XHJcblxyXG4vKi8vLy8vLy8vLy8gUG9zaXRpb25zIENvbG9ycyAvLy8vLy8vLy8vKi9cclxuXHJcbi8qLyBHZW5yZWFsIFBvc2l0aW9uIC8qL1xyXG5cclxuJGNvbG9yRldEOiAjMDA4MWZjO1xyXG4kY29sb3JNSUQ6ICMwMDJkNjQ7XHJcbiRjb2xvckRFRjogIzQ3NmU5ZjtcclxuJGNvbG9yR0tQOiAjODhiMmFkO1xyXG5cclxuLyovIFN0cmlrZXIgLyovXHJcblxyXG4kY29sb3JDRjogI2IxOTdmYztcclxuJGNvbG9yTFc6ICM5Nzc1ZmE7XHJcbiRjb2xvclJXOiAjODQ1ZWY3O1xyXG4kY29sb3JMV0Y6ICM3OTUwZjI7XHJcbiRjb2xvclJXRjogIzcwNDhlODtcclxuLyovIE1pZGZpZWxkZXIgLyovXHJcblxyXG4kY29sb3JBTUY6ICNmYWFmMDM7XHJcbiRjb2xvckxBTUY6ICNmNTlmMDA7XHJcbiRjb2xvclJBTUY6ICNmMDhjMDA7XHJcbiRjb2xvckxDTTogI2ZkN2UxNDtcclxuJGNvbG9yUkNNOiAjZjc2NzA3O1xyXG4kY29sb3JDTUY6ICNlODU5MGM7XHJcbiRjb2xvckRNRjogI2ZhNTI1MjtcclxuJGNvbG9yTERNOiAjZmU0NTQ1O1xyXG4kY29sb3JSRE06ICNmMDNlM2U7XHJcbiRjb2xvclJNRjogI2RiMzIzMjtcclxuJGNvbG9yTE1GOiAjZTAzMTMxO1xyXG4kY29sb3JSQU06ICNjOTJhMmE7XHJcbiRjb2xvckxDTUY6ICNhNjFlNGQ7XHJcbiRjb2xvclJDTUY6ICNjMjI1NWM7XHJcbiRjb2xvckxETUY6ICNkNjMzNmM7XHJcbiRjb2xvclJETUY6ICNlNjQ4N2Y7XHJcblxyXG4vKi8gRGVmZW5kZXIgLyovXHJcblxyXG4kY29sb3JDQjogIzgyYzkxZTtcclxuJGNvbG9yTENCOiAjNzRiODE2O1xyXG4kY29sb3JSQ0I6ICM2NmE4MGY7XHJcbiRjb2xvclJDQjM6ICMzN2IyNGQ7XHJcbiRjb2xvclJCOiAjMmY5ZTQ0O1xyXG4kY29sb3JSQ0I1OiAjMmI4YTNlO1xyXG4kY29sb3JMQjogIzA5OTI2ODtcclxuJGNvbG9yTFdCOiAjMGViNzg0O1xyXG4kY29sb3JSV0I6ICMzOGQ5YTk7XHJcbiRjb2xvclJCNTogIzNiYzlkYjtcclxuJGNvbG9yTEI1OiAjMjFiN2NlO1xyXG4kY29sb3JMQ0IzOiAjMTVhYWJmO1xyXG4kY29sb3JMQ0I1OiAjMTA5OGFkO1xyXG4kY29sb3JSQ01GMzogIzBhN2I4ZDtcclxuJGNvbG9yTENNRjM6ICMwMjUxNWU7XHJcblxyXG4vKi8gR29hbEtlZXBlciAvKi9cclxuXHJcbiRjb2xvckdLOiAjMzY0ZmM3O1xyXG5cclxuLyovIFZpZGVvcyBUYWdzIC8qL1xyXG5cclxuJGNvbG9yR29hbDogIzAwODFmYztcclxuJGNvbG9yU2F2ZTogIzAwMmQ2NDtcclxuJGNvbG9yU2F2ZVJlZmxleDogIzJiOGEzZTtcclxuJGNvbG9yUmVkQ2FyZDogI2RiMzIzMjtcclxuJGNvbG9yWWVsbG93Q2FyZDogI2ZhYWYwMztcclxuJGNvbG9yQ2FyZDogIzM2NGZjNztcclxuJGNvbG9yQXNzaXQ6ICM4OGIyYWQ7XHJcbiRjb2xvckNvbmNlZGVkR29hbDogI2MyMjU1YztcclxuJGNvbG9yRGVmZW5zaXZlRHVlbDogIzEwOThhZDtcclxuJGNvbG9yUGVuYWx0eUNvbmNlZGVkR29hbDogI2U4NTkwYztcclxuJGNvbG9yUGVuYWx0eUZvdWw6ICNkYjMyMzI7XHJcbiRjb2xvclBlbmFsdHlHb2FsOiAjNDc2ZTlmO1xyXG4kY29sb3JQZW5hbHR5U2F2ZTogIzM3YjI0ZDtcclxuJGNvbG9yU2hvdEFnYWluc3Q6ICM4MmM5MWU7XHJcbiRjb2xvclBhc3M6ICM3OTUwZjI7XHJcbiRjb2xvclNob3Q6ICNiMTk3ZmM7XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVhc3VyZW1lbnRzIC8vLy8vLy8vLy8qL1xyXG5cclxuJGNvbnRhaW5lcldpZHRoUzogMTAwJTtcclxuJGNvbnRhaW5lcldpZHRoTTogNjMycHg7XHJcbiRjb250YWluZXJXaWR0aEw6IDEyMzJweDtcclxuXHJcbiRjb250YWluZXJHdXR0ZXI6IDFyZW07XHJcblxyXG4vKi8vLy8vLy8vLy8gTWVkaWEgUXVlcmllcyAvLy8vLy8vLy8vKi9cclxuLyogTWVkaWEgcXVlcmllcyBzaG91bGQgYWx3YXlzIGJlIHVzZWQgd2l0aCBtYXgtd2lkdGguICovXHJcblxyXG4kbWVkaWFxdWVyeVhTOiA2MDBweDtcclxuJG1lZGlhcXVlcnlTOiA3NjdweDtcclxuJG1lZGlhcXVlcnlNOiA5OTFweDtcclxuJG1lZGlhcXVlcnlMOiAxMTk5cHg7XHJcbiRtZWRpYXF1ZXJ5WEw6IDE0NDBweDtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ud3JhcHBlck1haW5Db250IHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOXJlbTtcclxuICAudG9wX2hlYWQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TCkge1xyXG4gICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbGF5ZXJfaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeUwpIHtcclxuICAgICAgbWF4LXdpZHRoOiA5OSU7XHJcbiAgICAgIC8vcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhX2JveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3JPdXRsaW5lO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAubmFtZV9hZ2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIC52ZXJ0aWNhbF9kaXZpZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXZpZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeU0pIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICYuY29sXzIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm91bmRfYm94IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yT3V0bGluZTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWFxdWVyeVMpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDU1JTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWdlX2JveCB7XHJcbiAgICAgICAgICAuYWdlX251bWJlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWdlX3RleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWVfYm94IHtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9zdGlvbl9ib3gge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwLWNoaXAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3NpdGlvbnMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JNYWluQmx1ZV9jdGE7XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlMKSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYXF1ZXJ5TSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lX3RleHRfYm94IHtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmlyc3RfbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3RfbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlMKSB7XHJcbiAgICAgICAgICAuYWdlX2JveCB7XHJcbiAgICAgICAgICAgIC5hZ2VfbnVtYmVyIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWdlX3RleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZV9ib3gge1xyXG4gICAgICAgICAgICAuZmlyc3RfbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3RfbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhcXVlcnlNKSB7XHJcbiAgICAgICAgICAuYWdlX2JveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLmFnZV9udW1iZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWVfYm94IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucG9pbnRzX2J1dHRvbiB7XHJcbiAgICAgICAgLmRpc3BsYXlGbGV4IHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgIC5wLXJhdGluZy1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0X2J1dHRvbiB7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 290:
/*!**********************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/player-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerRoutingModule": () => (/* binding */ PlayerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _scouting_private_player_components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scouting/private/player/components/player-info/player-info.component */ 8113);
/* harmony import */ var _scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scouting/private/player/player.routes */ 3746);
/* harmony import */ var _scouting_private_player_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scouting/private/player/components/player-stats/player-stats.component */ 8079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    {
        path: _scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__.PLAYER_ROUTES.PLAYER_STATS_ROUTE,
        component: _scouting_private_player_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_2__.PlayerStatsComponent,
    },
    {
        path: _scouting_private_player_player_routes__WEBPACK_IMPORTED_MODULE_1__.PLAYER_ROUTES.PLAYER_DETAILS,
        component: _scouting_private_player_components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_0__.PlayerInfoComponent,
    },
];
class PlayerRoutingModule {
}
PlayerRoutingModule.ɵfac = function PlayerRoutingModule_Factory(t) { return new (t || PlayerRoutingModule)(); };
PlayerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PlayerRoutingModule });
PlayerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlayerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1932:
/*!**************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/player.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerModule": () => (/* binding */ PlayerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _sw_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sw-ui-components */ 8477);
/* harmony import */ var _scouting_private_player_player_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scouting/private/player/player-routing.module */ 290);
/* harmony import */ var _scouting_private_player_components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scouting/private/player/components/player-info/player-info.component */ 8113);
/* harmony import */ var _scouting_private_player_components_player_info_components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scouting/private/player/components/player-info/components/player-details/player-details.component */ 8215);
/* harmony import */ var _scouting_private_player_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scouting/private/player/components/player-stats/player-stats.component */ 8079);
/* harmony import */ var _components_player_info_components_player_highlights_player_highlights_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player-info/components/player-highlights/player-highlights.component */ 1868);
/* harmony import */ var _scouting_private_player_components_player_info_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scouting/private/player/components/player-info/components/player-stats/player-stats.component */ 4971);
/* harmony import */ var _components_player_info_components_player_videos_player_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/player-info/components/player-videos/player-videos.component */ 8694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);










class PlayerModule {
}
PlayerModule.ɵfac = function PlayerModule_Factory(t) { return new (t || PlayerModule)(); };
PlayerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PlayerModule });
PlayerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _scouting_private_player_player_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlayerRoutingModule, _sw_ui_components__WEBPACK_IMPORTED_MODULE_0__.UiComponentsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PlayerModule, { declarations: [_components_player_info_components_player_videos_player_videos_component__WEBPACK_IMPORTED_MODULE_7__.PlayerVideosComponent, _scouting_private_player_components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_2__.PlayerInfoComponent, _scouting_private_player_components_player_info_components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_3__.PlayerDetailsComponent, _scouting_private_player_components_player_info_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_6__.PlayerStatsComponent, _components_player_info_components_player_highlights_player_highlights_component__WEBPACK_IMPORTED_MODULE_5__.PlayerHighlightsComponent, _scouting_private_player_components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_4__.PlayerStatsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _scouting_private_player_player_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlayerRoutingModule, _sw_ui_components__WEBPACK_IMPORTED_MODULE_0__.UiComponentsModule] }); })();


/***/ }),

/***/ 3746:
/*!**************************************************************************!*\
  !*** ./projects/scouting-portal/src/app/private/player/player.routes.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLAYER_ROUTES": () => (/* binding */ PLAYER_ROUTES),
/* harmony export */   "generatePlayerModuleRoute": () => (/* binding */ generatePlayerModuleRoute)
/* harmony export */ });
/* harmony import */ var _aft_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aft-core */ 91);
// eslint-disable-next-line @typescript-eslint/naming-convention

// eslint-disable-next-line @typescript-eslint/naming-convention
const PLAYER_ROUTES = {
    MODULE_ROUTE: 'player',
    PLAYER_DETAILS: ':playerId',
    PLAYER_STATS_ROUTE: 'stats/:playerId',
    PLAYER_STATS: 'stats',
};
const generatePlayerModuleRoute = (route, param, queryParams) => {
    const routeArray = [..._aft_core__WEBPACK_IMPORTED_MODULE_0__.APP_ROUTES.PRIVATE, PLAYER_ROUTES.MODULE_ROUTE, route];
    if (param) {
        routeArray.push(param);
    }
    if (queryParams) {
        routeArray.push(queryParams);
    }
    return routeArray;
};


/***/ })

}]);
//# sourceMappingURL=projects_scouting-portal_src_app_private_player_player_module_ts.js.map