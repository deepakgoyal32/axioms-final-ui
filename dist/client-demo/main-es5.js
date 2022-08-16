(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/deepak.goyal/Documents/Kellton_Project/axioms-final-ui/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0btM":
    /*!**********************************************!*\
      !*** ./src/app/content/content.component.ts ***!
      \**********************************************/

    /*! exports provided: ContentComponent */

    /***/
    function btM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
        return ContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../loader.service */
      "5gIc");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");

      function ContentComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContentComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wallet Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContentComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r4.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r4.balance, "");
        }
      }

      var ContentComponent = /*#__PURE__*/function () {
        function ContentComponent(http, loader) {
          _classCallCheck(this, ContentComponent);

          this.http = http;
          this.loader = loader;
          this.baseUrl = 'http://52.22.129.105:9001'; //"http://107.22.58.206:9000";

          this.selectedValue = "0";
          this.selectedSymbol = "gt";
          this.next = 0;
          this.previous = 0;
          this.records = [];
        }

        _createClass(ContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onScroll",
          value: function onScroll(value) {
            this.SendRequest(value, this.next);
          }
        }, {
          key: "SendRequest",
          value: function SendRequest(value, page) {
            var _this = this;

            console.log(value);
            console.log(this.selectedValue);
            this.loader.displayProgressSpinnerInBlock = true;
            this.next = 0;
            this.previous = 0;
            if (page <= 1) this.records = [];
            var symbol = localStorage.getItem("symbol");
            this.getWalletAddressesForXPrice(value, symbol, page).subscribe(function (response) {
              response.results.forEach(function (element) {
                _this.records.push(element);
              });

              if (response.next && response.next.page && response.next.page !== "" && response.next.page !== 0) {
                _this.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== "" && response.previous.page !== 0) {
                _this.previous = response.previous.page;
              }

              _this.loader.displayProgressSpinnerInBlock = false;
            });
          }
        }, {
          key: "getWalletAddressesForXPrice",
          value: function getWalletAddressesForXPrice(value, symbol, page) {
            var url = this.baseUrl + "/wallet/address?price=" + value + "&symbol=" + symbol + "&limit=50" + (page > 0 ? "&page=" + page : "");
            console.log(url);
            return this.http.get(url);
          }
        }]);

        return ContentComponent;
      }();

      ContentComponent.ɵfac = function ContentComponent_Factory(t) {
        return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]));
      };

      ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentComponent,
        selectors: [["app-content"]],
        decls: 13,
        vars: 9,
        consts: [[1, "center"], [1, "flex", "column", "align-center"], ["matInput", "", "placeholder", "Input Values", "name", "todo"], ["todo", ""], [1, "primary-btn", 2, "cursor", "pointer", 3, "click"], ["class", "result", 4, "ngIf"], ["infiniteScroll", "", 1, "result-wrapper", "flex", "justify-center", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "infiniteScrollContainer", "fromRoot", "scrolled"], [1, "result-inner"], ["class", "row flex space-between", 4, "ngIf"], ["class", "row flex space-between", 4, "ngFor", "ngForOf"], [1, "result"], [1, "row", "flex", "space-between"], [1, "col", "head"], [1, "col", "flex", "align-center", "no-wrap"], ["src", "../../assets/images/wallet.png", "alt", "Logo"], [1, "col", "flex", "align-center"], ["src", "../../assets/images/balance.svg", "alt", "Logo", 1, "count"]],
        template: function ContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return ctx.SendRequest(_r0.value, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentComponent_div_8_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function ContentComponent_Template_div_scrolled_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return ctx.onScroll(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContentComponent_div_11_Template, 5, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContentComponent_div_12_Template, 7, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wallets containing ", ctx.loader.title, " X Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", true)("infiniteScrollContainer", ".result-inner")("fromRoot", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 35px;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  max-width: 180px;\n  height: 56px;\n  color: #fff;\n  cursor: pointer;\n  background-color: #00af6e;\n}\n\n.result[_ngcontent-%COMP%] {\n  font-size: 31px;\n  line-height: 35px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.result-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.result-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  overflow-y: auto;\n  max-height: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.row[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: left;\n  word-break: break-word;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.col.head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  padding: 20px 20px 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  padding: 20px 0 20px 20px;\n}\n\n#cover-spin[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 9999;\n  display: none;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#cover-spin[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 48%;\n  top: 40%;\n  width: 40px;\n  height: 40px;\n  border-style: solid;\n  border-color: black;\n  border-top-color: transparent;\n  border-width: 4px;\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s linear infinite;\n  animation: spin 0.8s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBRVI7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRVI7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtEQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0FBR1I7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQUZJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUlSOztBQUZJO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUlSOztBQUZJO0VBQ0kseUJBQUE7QUFJUjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUFPLFFBQUE7RUFBUSxNQUFBO0VBQU0sU0FBQTtFQUNyQiwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSEE7RUFDQztJQUFNLCtCQUFBO0VBT0w7RUFORDtJQUFJLGlDQUFBO0VBU0g7QUFDRjs7QUFQQTtFQUNDO0lBQU0sdUJBQUE7RUFVTDtFQVREO0lBQUkseUJBQUE7RUFZSDtBQUNGOztBQVZBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFBUyxRQUFBO0VBQ1QsV0FBQTtFQUFXLFlBQUE7RUFDWCxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQWNKIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOnJnYmEoI2ZmZiwuNzUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwYWY2ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwYWY2ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5wcmltYXJ5LWJ0bntcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWY2ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlc3VsdHtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnJlc3VsdC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJlc3VsdC1pbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgIH1cclxufVxyXG4uY29se1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoI2ZmZiwuNzUpO1xyXG4gICAgJi5oZWFke1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjb3Zlci1zcGluIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gICAgei1pbmRleDo5OTk5O1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcblx0ZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO31cclxuXHR0byB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG5cdGZyb20ge3RyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fVxyXG5cdHRvIHt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxyXG59XHJcblxyXG4jY292ZXItc3Bpbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDonJztcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NDglO3RvcDo0MCU7XHJcbiAgICB3aWR0aDo0MHB4O2hlaWdodDo0MHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-content",
            templateUrl: "./content.component.html",
            styleUrls: ["./content.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../loader.service */
      "5gIc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1() {
        return ["/lt"];
      };

      var _c2 = function _c2() {
        return ["/eq"];
      };

      var _c3 = function _c3() {
        return ["/range"];
      };

      var _c4 = function _c4() {
        return ["/collection-search"];
      };

      var _c5 = function _c5() {
        return ["/nft-gt"];
      };

      var _c6 = function _c6() {
        return ["/nft-lt"];
      };

      var _c7 = function _c7() {
        return ["/nft-eq"];
      };

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(loader) {
          _classCallCheck(this, SidebarComponent);

          this.loader = loader;
          this.mode = 'indeterminate';
          this.value = 50;
          this.color = 'primary';
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setSymbol",
          value: function setSymbol(value) {
            localStorage.clear();
            localStorage.setItem('symbol', value);
            if (value === 'gt') this.loader.title = "more than";else if (value === 'lt') this.loader.title = "less than";else this.loader.title = "exactly";
          }
        }, {
          key: "setRange",
          value: function setRange(value) {
            localStorage.clear();
            localStorage.setItem('isRangeSlider', value.toString());
          }
        }, {
          key: "setNftSymbol",
          value: function setNftSymbol(value) {
            localStorage.clear();
            localStorage.setItem('nftSymbol', value);
            if (value === 'gt') this.loader.title = "more than";else if (value === 'lt') this.loader.title = "less than";else this.loader.title = "exactly";
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 32,
        vars: 16,
        consts: [["routerLinkActive", "active", 2, "cursor", "pointer", 3, "routerLink", "click"], ["routerLinkActive", "active", 2, "cursor", "pointer", 3, "routerLink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Search BY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_6_listener() {
              return ctx.setSymbol("gt");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Value (greater than)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_9_listener() {
              return ctx.setSymbol("lt");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Value (less than)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_12_listener() {
              return ctx.setSymbol("eq");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Value (exact match)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() {
              return ctx.setRange(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Value (range)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NFT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "By Collection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_24_listener() {
              return ctx.setNftSymbol("gt");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "# of NFTs (greater than)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_27_listener() {
              return ctx.setNftSymbol("lt");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "# of NFTs (less than)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_30_listener() {
              return ctx.setNftSymbol("eq");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "# of NFTs (exact match)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: rgba(255, 255, 255, 0.75);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 25px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 28px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\na[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBQUE7RUFDRSwwQkFBQTtBQUdGOztBQUFBO0VBQ0UsMENBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6IHJnYmEoI2ZmZiwgMC43NSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCNmZmYsIDAuNzUpO1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogcmdiYSgjZmZmLCAwLjc1KTtcclxuICB9XHJcbn1cclxuYSBsYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoZ3JleSwgLjUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5gIc":
    /*!***********************************!*\
      !*** ./src/app/loader.service.ts ***!
      \***********************************/

    /*! exports provided: LoaderService */

    /***/
    function gIc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderService = /*#__PURE__*/_createClass(function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.displayProgressSpinnerInBlock = false;
        this.title = "";
      });

      LoaderService.ɵfac = function LoaderService_Factory(t) {
        return new (t || LoaderService)();
      };

      LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoaderService,
        factory: LoaderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "8TPv":
    /*!****************************************************************************!*\
      !*** ./src/app/collection-name-search/collection-name-search.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CollectionNameSearchComponent */

    /***/
    function TPv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionNameSearchComponent", function () {
        return CollectionNameSearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../loader.service */
      "5gIc");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CollectionNameSearchComponent_mat_optgroup_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-optgroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6.contract_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6.contract_address);
        }
      }

      function CollectionNameSearchComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CollectionNameSearchComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Collection Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "View Provider Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Wallet Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "View on Etherscan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CollectionNameSearchComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "View Provider Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "View on Etherscan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r7.collection_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", record_r7.permalink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", record_r7.owner_address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "https://etherscan.io/nft/", record_r7.contract_address, "/", record_r7.token_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var CollectionNameSearchComponent = /*#__PURE__*/function () {
        function CollectionNameSearchComponent(http, loader) {
          _classCallCheck(this, CollectionNameSearchComponent);

          this.http = http;
          this.loader = loader;
          this.baseUrl = 'http://52.22.129.105:9001';
          this.selectedValue = '';
          this.next = 0;
          this.previous = 0;
          this.records = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        }

        _createClass(CollectionNameSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.InitialValues('');
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(event) {
            var value = event.target.value;
            this.selectedValue = value;
            this.InitialValues(value);
          }
        }, {
          key: "clickout",
          value: function clickout(event) {
            if (this.selectedValue === '') {} else {
              this.matAutocomplete.options.first.select();
            }
          }
        }, {
          key: "onScroll",
          value: function onScroll(value) {
            this.SendRequest(value, this.next);
          }
        }, {
          key: "InitialValues",
          value: function InitialValues(value) {
            this.options = this.getInitialSearchValues(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) {
              return item.results;
            }));
          }
        }, {
          key: "displayFn",
          value: function displayFn(option) {
            return option ? option.contract_name : undefined;
          }
        }, {
          key: "changeSelectedOption",
          value: function changeSelectedOption(event) {
            this.selectedOptionValue = event.option.value.contract_address;
          }
        }, {
          key: "SendRequest",
          value: function SendRequest(value, page) {
            var _this2 = this;

            console.log(value);
            console.log(this.selectedValue);
            this.loader.displayProgressSpinnerInBlock = true;
            if (page <= 1) this.records = [];
            this.next = 0;
            this.previous = 0;
            this.getWalletAddressesForExactCollectionSearch(this.selectedOptionValue, page).subscribe(function (response) {
              response.results.forEach(function (element) {
                _this2.records.push(element);
              });

              if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
                _this2.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
                _this2.previous = response.previous.page;
              }

              _this2.loader.displayProgressSpinnerInBlock = false;
            });
          }
        }, {
          key: "getWalletAddressesForExactCollectionSearch",
          value: function getWalletAddressesForExactCollectionSearch(value, page) {
            var url = this.baseUrl + '/nfts/collection/search?p=' + value + '&limit=50' + (page > 0 ? '&page=' + page : '');
            return this.http.get(url);
          }
        }, {
          key: "getInitialSearchValues",
          value: function getInitialSearchValues(value) {
            var url = this.baseUrl + '/general/collection/search?text=' + value;
            return this.http.get(url);
          }
        }]);

        return CollectionNameSearchComponent;
      }();

      CollectionNameSearchComponent.ɵfac = function CollectionNameSearchComponent_Factory(t) {
        return new (t || CollectionNameSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]));
      };

      CollectionNameSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CollectionNameSearchComponent,
        selectors: [["app-collection-name-search"]],
        viewQuery: function CollectionNameSearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
          }
        },
        hostBindings: function CollectionNameSearchComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollectionNameSearchComponent_click_HostBindingHandler($event) {
              return ctx.clickout($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        decls: 17,
        vars: 14,
        consts: [[1, "center"], [1, "flex-column", "align-center"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete", "keyup"], ["todo", ""], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [4, "ngFor", "ngForOf"], [1, "primary-btn", 3, "click"], ["class", "result", 4, "ngIf"], ["infiniteScroll", "", 1, "result-wrapper", "flex", "justify-center", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "infiniteScrollContainer", "fromRoot", "scrolled"], [1, "result-inner"], ["class", "row flex space-between", 4, "ngIf"], ["class", "row flex space-between", 4, "ngFor", "ngForOf"], [3, "value"], [1, "result"], [1, "row", "flex", "space-between"], [1, "col", "head"], [1, "col", "flex", "align-center", "no-wrap"], [1, "col", "flex", "align-center"], ["target", "_blank", 2, "cursor", "pointer", 3, "href"], ["src", "../../assets/images/wallet.png", "alt", "Logo"]],
        template: function CollectionNameSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wallets containing nfts with exact collection name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CollectionNameSearchComponent_Template_input_keyup_4_listener($event) {
              return ctx.onKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function CollectionNameSearchComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
              return ctx.changeSelectedOption($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CollectionNameSearchComponent_mat_optgroup_8_Template, 6, 4, "mat-optgroup", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollectionNameSearchComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return ctx.SendRequest(_r0.value, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CollectionNameSearchComponent_div_12_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function CollectionNameSearchComponent_Template_div_scrolled_13_listener() {
              return ctx.onScroll("");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CollectionNameSearchComponent_div_15_Template, 9, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CollectionNameSearchComponent_div_16_Template, 12, 5, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, ctx.options));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", true)("infiniteScrollContainer", ".result-inner")("fromRoot", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 35px;\n}\n\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\n.result[_ngcontent-%COMP%] {\n  font-size: 31px;\n  line-height: 35px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.result-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.result-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  overflow-y: auto;\n  max-height: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.row[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 25%;\n  text-align: left;\n  word-break: break-word;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.col.head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  padding: 20px 20px 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:nth-child(2) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:nth-child(3) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  padding: 20px 0 20px 20px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  max-width: 180px;\n  height: 56px;\n  color: #fff;\n  cursor: pointer;\n  background-color: #00af6e;\n  margin-bottom: 50px;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option {\n  height: 30px !important;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-optgroup-label {\n  display: none;\n}\n\n  .mat-autocomplete-panel {\n  background-color: grey;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option .mat-option-text {\n  color: white;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option .mat-option-text:hover {\n  background: none;\n  background-color: none;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option {\n  background: none;\n}\n\n  .mat-autocomplete-panel .mat-optgroup {\n  background: none;\n  display: block;\n  padding: 5px 20px;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option:not(.mat-option-multiple) {\n  padding: 0;\n}\n\n  .mat-autocomplete-panel .mat-optgroup:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n  display: block;\n  padding: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdGlvbi1uYW1lLXNlYXJjaC9jb2xsZWN0aW9uLW5hbWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUFDUjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUdBO0VBQ0ksa0RBQUE7QUFBSjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBRVI7O0FBQUk7RUFDSSw0QkFBQTtFQUNBLGlEQUFBO0FBRVI7O0FBQUk7RUFDSSw0QkFBQTtFQUNBLGlEQUFBO0FBRVI7O0FBQUk7RUFDSSx5QkFBQTtBQUVSOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7QUFJSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtBQVFKOztBQU5BO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFTSiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb24tbmFtZS1zZWFyY2gvY29sbGVjdGlvbi1uYW1lLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5mb3Jte1xuICAgIHNlbGVjdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDBhZjZlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMwMGFmNmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB9XG4gICAgXG59XG5cbi5yZXN1bHR7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOnJnYmEoI2ZmZiwuNzUpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnJlc3VsdC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yZXN1bHQtaW5uZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbi5yb3d7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgfVxufVxuLmNvbHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoI2ZmZiwuNzUpO1xuICAgICYuaGVhZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgjZmZmLC43NSk7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XG4gICAgfVxufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByaW1hcnktYnRue1xuICAgIGJvcmRlcjpub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZjZlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0aW9uIHtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0Z3JvdXAgLm1hdC1vcHRpb24gLm1hdC1vcHRpb24tdGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRncm91cCAubWF0LW9wdGlvbiAubWF0LW9wdGlvbi10ZXh0OmhvdmVye1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufSBcbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0aW9ue1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRncm91cCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0aW9uOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRncm91cDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCMwMDAsLjUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufSJdfQ== */"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Debounce(500)], CollectionNameSearchComponent.prototype, "onKeyUp", null);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionNameSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-collection-name-search',
            templateUrl: './collection-name-search.component.html',
            styleUrls: ['./collection-name-search.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
          }];
        }, {
          matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"]]
          }],
          onKeyUp: [],
          clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event']]
          }]
        });
      })();

      function Debounce(ms) {
        return function (target, key, descriptor) {
          var oldFunc = descriptor.value;
          var newFunc = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"])(oldFunc, ms);

          descriptor.value = function () {
            return newFunc.apply(this, arguments);
          };
        };
      }
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "JPO3":
    /*!************************************************************************!*\
      !*** ./src/app/by-nft-count-content/by-nft-count-content.component.ts ***!
      \************************************************************************/

    /*! exports provided: ByNftCountContentComponent */

    /***/
    function JPO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ByNftCountContentComponent", function () {
        return ByNftCountContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dialog/dialog.component */
      "ZYp2");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../loader.service */
      "5gIc");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ByNftCountContentComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ByNftCountContentComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wallet Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NFT Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ByNftCountContentComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ByNftCountContentComponent_div_12_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var record_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.openDialog(record_r4.owner_address);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View NFT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r4.owner_address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r4.count_id, "");
        }
      }

      var ByNftCountContentComponent = /*#__PURE__*/function () {
        function ByNftCountContentComponent(http, dialog, loader) {
          _classCallCheck(this, ByNftCountContentComponent);

          this.http = http;
          this.dialog = dialog;
          this.loader = loader;
          this.baseUrl = 'http://52.22.129.105:9001'; //'http://107.22.58.206:9000';

          this.selectedSymbol = 'gt';
          this.next = 0;
          this.previous = 0;
          this.records = [];
        }

        _createClass(ByNftCountContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openDialog",
          value: function openDialog(address) {
            this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
              data: {
                address: address
              },
              height: '750px',
              width: '850px'
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(value) {
            this.SendRequest(value, this.next);
          }
        }, {
          key: "SendRequest",
          value: function SendRequest(value, page) {
            var _this3 = this;

            this.next = 0;
            this.previous = 0;
            this.loader.displayProgressSpinnerInBlock = true;
            var nftSymbol = localStorage.getItem('nftSymbol');
            if (page <= 1) this.records = [];
            this.getWalletAddressesForXNFTCount(value, page, nftSymbol).subscribe(function (response) {
              response.results.forEach(function (element) {
                _this3.records.push(element);
              });

              if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
                _this3.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
                _this3.previous = response.previous.page;
              }

              _this3.loader.displayProgressSpinnerInBlock = false;
            });
          }
        }, {
          key: "getWalletAddressesForXNFTCount",
          value: function getWalletAddressesForXNFTCount(value, page, nftSymbol) {
            var url = this.baseUrl + '/nfts/address?count=' + value + '&symbol=' + nftSymbol + '&limit=50' + (page > 0 ? '&page=' + page : '');
            console.log(url);
            return this.http.get(url);
          }
        }]);

        return ByNftCountContentComponent;
      }();

      ByNftCountContentComponent.ɵfac = function ByNftCountContentComponent_Factory(t) {
        return new (t || ByNftCountContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]));
      };

      ByNftCountContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ByNftCountContentComponent,
        selectors: [["app-by-nft-count-content"]],
        decls: 13,
        vars: 9,
        consts: [[1, "center"], [1, "flex", "column", "align-center"], ["matInput", "", "placeholder", "Input Values", "name", "todo"], ["todo", ""], [1, "primary-btn", 2, "cursor", "pointer", 3, "click"], ["class", "result", 4, "ngIf"], ["infiniteScroll", "", 1, "result-wrapper", "flex", "justify-center", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "infiniteScrollContainer", "fromRoot", "scrolled"], [1, "result-inner"], ["class", "row flex space-between", 4, "ngIf"], ["class", "row flex space-between", 4, "ngFor", "ngForOf"], [1, "result"], [1, "row", "flex", "space-between"], [1, "col", "head"], [1, "col", "flex", "align-center", "no-wrap"], ["src", "../../assets/images/wallet.png", "alt", "Logo"], [1, "col", "flex", "align-center"], ["src", "../../assets/images/balance.svg", "alt", "Logo", 1, "count"], ["mat-raised-button", "", "color", "success", 2, "cursor", "pointer", 3, "click"]],
        template: function ByNftCountContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ByNftCountContentComponent_Template_button_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return ctx.SendRequest(_r0.value, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ByNftCountContentComponent_div_8_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function ByNftCountContentComponent_Template_div_scrolled_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return ctx.onScroll(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ByNftCountContentComponent_div_11_Template, 7, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ByNftCountContentComponent_div_12_Template, 10, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wallets containing ", ctx.loader.title, " X NFTs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", true)("infiniteScrollContainer", ".result-inner")("fromRoot", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 35px;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  max-width: 180px;\n  height: 56px;\n  color: #fff;\n  cursor: pointer;\n  background-color: #00af6e;\n}\n\n.result[_ngcontent-%COMP%] {\n  font-size: 31px;\n  line-height: 35px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.result-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.result-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  overflow-y: auto;\n  max-height: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.row[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 33%;\n  text-align: left;\n  word-break: break-word;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.col.head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  padding: 20px 20px 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:nth-child(2) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  padding: 20px 0 20px 20px;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #00af6e;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  color: #f0fff3;\n  background-color: #00af6e;\n}\n\n.mat-icon-button.mat-success[_ngcontent-%COMP%] {\n  color: #00af6e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnktbmZ0LWNvdW50LWNvbnRlbnQvYnktbmZ0LWNvdW50LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUVSOztBQUFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFFUjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0RBQUE7QUFFSjs7QUFESTtFQUNJLFlBQUE7QUFHUjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBRkk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBSVI7O0FBRkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBRkk7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBSVI7O0FBRkk7RUFDSSw0QkFBQTtFQUNBLGlEQUFBO0FBSVI7O0FBRkk7RUFDSSx5QkFBQTtBQUlSOztBQUFBOztFQUVJLGNBQUE7QUFHSjs7QUFEQTs7RUFFRSx5QkFBQTtBQUlGOztBQURBOzs7O0VBSUUsY0FBQTtFQUNBLHlCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9ieS1uZnQtY291bnQtY29udGVudC9ieS1uZnQtY291bnQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmZvcm17XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBzZWxlY3R7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwYWY2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGNvbG9yOnJnYmEoI2ZmZiwuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDBhZjZlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC5wcmltYXJ5LWJ0bntcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZjZlO1xuICAgIH1cbn1cblxuLnJlc3VsdHtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucmVzdWx0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJlc3VsdC1pbm5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuLnJvd3tcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjZmZmLC43NSk7XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICB9XG59XG4uY29se1xuICAgIHdpZHRoOiAzMyU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogcmdiYSgjZmZmLC43NSk7XG4gICAgJi5oZWFke1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XG4gICAgfVxufVxuXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjMDBhZjZlO1xufVxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjZjBmZmYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZjZlO1xufVxuXG4ubWF0LWljb24tYnV0dG9uLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6IzAwYWY2ZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ByNftCountContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-by-nft-count-content',
            templateUrl: './by-nft-count-content.component.html',
            styleUrls: ['./by-nft-count-content.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./loader.service */
      "5gIc");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function AppComponent_mat_progress_spinner_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.color)("mode", ctx_r0.mode)("value", ctx_r0.value);
        }
      }

      function AppComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(loader) {
          _classCallCheck(this, AppComponent);

          this.loader = loader;
          this.mode = 'indeterminate';
          this.value = 50;
          this.color = 'primary';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loader.displayProgressSpinnerInBlock = false;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 2,
        consts: [[1, "container", "flex", "space-between", "align-center"], [1, "main-wrapper", "flex", "space-between"], [1, "content-wrapper"], ["class", "spiner", 3, "color", "mode", "value", 4, "ngIf"], ["id", "overlay", 4, "ngIf"], [1, "spiner", 3, "color", "mode", "value"], ["id", "overlay"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_mat_progress_spinner_8_Template, 1, 3, "mat-progress-spinner", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 1, 0, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader.displayProgressSpinnerInBlock);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader.displayProgressSpinnerInBlock);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinner"]],
        styles: [".right[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.left[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.border[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.87);\n}\n\n.width200[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.width708[_ngcontent-%COMP%] {\n  width: 685px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 800px;\n}\n\n.tableDiv[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 810px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.width800[_ngcontent-%COMP%] {\n  width: 802px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  word-break: break-all;\n  padding-right: 20px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.button-paginator[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.mat-column-count[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.mat-column-xlink[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\nheader[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\naside[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 280px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n  padding: 20px 0 0 25px;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 30px 20px 100px;\n  width: calc(100% - 280px);\n  position: relative;\n  min-height: calc(100vh - 115px);\n}\n\n#overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  display: block;\n  \n  width: 100%;\n  \n  height: 100%;\n  \n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  \n  z-index: 2;\n  \n  cursor: pointer;\n  \n}\n\n.spiner[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  display: block;\n  \n  width: 100px;\n  \n  height: 100px;\n  \n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0RBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFBWSxvRkFBQTtFQUNaLGVBQUE7RUFBaUIsMkJBQUE7QUFVckI7O0FBUEE7RUFDSSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsWUFBQTtFQUFjLHNDQUFBO0VBQ2QsYUFBQTtFQUFlLHVDQUFBO0VBQ2YsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFjSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodCB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmxlZnQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmJvcmRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi53aWR0aDIwMCB7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4ud2lkdGg3MDgge1xuICAgIHdpZHRoOiA2ODVweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiA4MDBweDtcbn1cblxuLnRhYmxlRGl2IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDgxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ud2lkdGgxMDAge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLndpZHRoODAwe1xuICAgIHdpZHRoOiA4MDJweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWF0LWNlbGwge1xuICAgIHdvcmQtYnJlYWs6YnJlYWstYWxsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b24tcGFnaW5hdG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1hdC1jb2x1bW4tY291bnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4teGxpbmsge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbn1cblxuaGVhZGVye1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcbn1cblxuYXNpZGV7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgIHBhZGRpbmc6MjBweCAwIDAgMjVweDtcbn1cbi5jb250ZW50LXdyYXBwZXJ7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDEwMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7XG59XG4jb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG4gIH1cblxuLnNwaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDBweDsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDBweDsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      "ZYp2");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _content_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./content/content.component */
      "0btM");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _range_content_range_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./range-content/range-content.component */
      "vEkN");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular-slider/ngx-slider */
      "mgaL");
      /* harmony import */


      var _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./by-nft-count-content/by-nft-count-content.component */
      "JPO3");
      /* harmony import */


      var _token_name_search_token_name_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./token-name-search/token-name-search.component */
      "jpY2");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _collection_name_search_collection_name_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./collection-name-search/collection-name-search.component */
      "8TPv");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__["InfiniteScrollModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_21__["NgxSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"], _range_content_range_content_component__WEBPACK_IMPORTED_MODULE_19__["RangeContentComponent"], _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_22__["ByNftCountContentComponent"], _token_name_search_token_name_search_component__WEBPACK_IMPORTED_MODULE_23__["TokenNameSearchComponent"], _collection_name_search_collection_name_search_component__WEBPACK_IMPORTED_MODULE_25__["CollectionNameSearchComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__["InfiniteScrollModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_21__["NgxSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"], _range_content_range_content_component__WEBPACK_IMPORTED_MODULE_19__["RangeContentComponent"], _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_22__["ByNftCountContentComponent"], _token_name_search_token_name_search_component__WEBPACK_IMPORTED_MODULE_23__["TokenNameSearchComponent"], _collection_name_search_collection_name_search_component__WEBPACK_IMPORTED_MODULE_25__["CollectionNameSearchComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__["InfiniteScrollModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_21__["NgxSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZYp2":
    /*!********************************************!*\
      !*** ./src/app/dialog/dialog.component.ts ***!
      \********************************************/

    /*! exports provided: DialogComponent */

    /***/
    function ZYp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
        return DialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DialogComponent_mat_header_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogComponent_mat_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.name, " ");
        }
      }

      function DialogComponent_mat_header_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Collection Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogComponent_mat_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.collection_name, " ");
        }
      }

      function DialogComponent_mat_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Provider Page Link ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogComponent_mat_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View on Provider Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", element_r10.permalink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DialogComponent_mat_header_row_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function DialogComponent_mat_row_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          display: a0
        };
      };

      var DialogComponent = /*#__PURE__*/function () {
        function DialogComponent(http, data) {
          _classCallCheck(this, DialogComponent);

          this.http = http;
          this.data = data;
          this.baseUrl = 'http://52.22.129.105:9001'; //'http://107.22.58.206:9000';

          this.next = 0;
          this.previous = 0;
          this.displayedColumns11 = ['name', 'collection_name', 'permalink'];
          this.dataSource11 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([{
            name: '',
            collection_name: '',
            permalink: ''
          }]);
        }

        _createClass(DialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.getNFTNames(this.data.address, 0).subscribe(function (response) {
              _this4.dataSource11 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response.results);

              if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
                _this4.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
                _this4.previous = response.previous.page;
              }
            });
          }
        }, {
          key: "fetchNFTNames",
          value: function fetchNFTNames(page) {
            var _this5 = this;

            this.next = 0;
            this.previous = 0;
            this.getNFTNames(this.data.address, page).subscribe(function (response) {
              _this5.dataSource11 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response.results);

              if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
                _this5.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
                _this5.previous = response.previous.page;
              }
            });
          }
        }, {
          key: "getNFTNames",
          value: function getNFTNames(value, page) {
            var url = this.baseUrl + '/nfts/address/name?address=' + value + (page > 0 ? '&page=' + page : '');
            console.log(url);
            return this.http.get(url);
          }
        }]);

        return DialogComponent;
      }();

      DialogComponent.ɵfac = function DialogComponent_Factory(t) {
        return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogComponent,
        selectors: [["app-dialog"]],
        decls: 20,
        vars: 9,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "collection_name"], ["matColumnDef", "permalink"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "button-paginator"], ["mat-raised-button", "", "color", "success", 2, "cursor", "pointer", 3, "ngStyle", "click"], ["target", "_blank", 1, "nav-link", 2, "cursor", "pointer", 3, "href"]],
        template: function DialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NFTs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DialogComponent_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogComponent_mat_cell_6_Template, 2, 1, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DialogComponent_mat_cell_9_Template, 2, 1, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DialogComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DialogComponent_mat_cell_12_Template, 3, 1, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DialogComponent_mat_header_row_13_Template, 1, 0, "mat-header-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DialogComponent_mat_row_14_Template, 1, 0, "mat-row", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_16_listener() {
              return ctx.fetchNFTNames(ctx.previous);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_18_listener() {
              return ctx.fetchNFTNames(ctx.next);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.previous > 0 ? "block" : "none"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.next > 0 ? "block" : "none"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: [".button-paginator[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #00af6e;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  color: #f0fff3;\n  background-color: #00af6e;\n}\n\n.mat-icon-button.mat-success[_ngcontent-%COMP%] {\n  color: #00af6e;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-dialog-container {\n  background-color: black;\n  border: 1px;\n  border-color: white;\n  border-style: solid;\n  color: white;\n}\n\n  .mat-table {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\n\n  .mat-cell {\n  padding: 0 10px 0 0px;\n  color: white;\n}\n\n  .mat-cell:first-child {\n  padding: 20px 20px 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n  .mat-cell:nth-child(2) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n  .mat-cell:last-child {\n  padding: 20px 0 20px 20px;\n}\n\n  .mat-row {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n  .mat-row:last-child {\n  border: none;\n}\n\n  .mat-header-cell {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n  padding: 0 10px 0 0px;\n  color: white;\n}\n\n  .mat-header-cell:first-child {\n  padding: 20px 20px 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n  .mat-header-cell:nth-child(2) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n  .mat-header-cell:last-child {\n  padding: 20px 0 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTs7RUFFSSxjQUFBO0FBQ0o7O0FBQ0E7O0VBRUUseUJBQUE7QUFFRjs7QUFDQTs7OztFQUlFLGNBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxpREFBQTtBQUVKOztBQUFFO0VBQ0UsNEJBQUE7RUFDQSxpREFBQTtBQUVKOztBQUFFO0VBQ0kseUJBQUE7QUFFTjs7QUFFQTtFQUNFLGtEQUFBO0FBQ0Y7O0FBQUU7RUFDSSxZQUFBO0FBRU47O0FBRUE7RUFDRSxrREFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxpREFBQTtBQUVKOztBQUFFO0VBQ0UsNEJBQUE7RUFDQSxpREFBQTtBQUVKOztBQUFFO0VBQ0kseUJBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXBhZ2luYXRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICMwMGFmNmU7XG59XG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3Zlcixcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6ICNmMGZmZjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFmNmU7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjojMDBhZjZlO1xufVxuXG5hIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogMCAxMHB4IDAgMHB4O1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpmaXJzdC1jaGlsZHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICB9XG4gICY6bnRoLWNoaWxkKDIpe1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgjZmZmLC43NSk7XG4gIH1cbiAgJjpsYXN0LWNoaWxke1xuICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1yb3d7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcbiAgJjpsYXN0LWNoaWxke1xuICAgICAgYm9yZGVyOm5vbmU7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjZmZmLC43NSk7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICAmOmZpcnN0LWNoaWxke1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgjZmZmLC43NSk7XG4gIH1cbiAgJjpudGgtY2hpbGQoMil7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcbiAgfVxuICAmOmxhc3QtY2hpbGR7XG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4O1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(http) {
          _classCallCheck(this, HeaderComponent);

          this.http = http;
          this.totalNfts = '0';
          this.totalWallets = '0';
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            var url = 'http://52.22.129.105:9001/general/live';
            this.http.get(url).subscribe(function (response) {
              response.forEach(function (element) {
                if (element.type === "nfts") _this6.totalNfts = (Math.round(Number(element.count)) / 1000000).toFixed(2);else if (element.type === "wallets") _this6.totalWallets = (Math.round(Number(element.count)) / 1000000).toFixed(2);
              });
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 14,
        vars: 2,
        consts: [[1, "logo"], ["routerLink", "/"], ["src", "../../assets/images/logo.png", "alt", "Logo"], [1, "live-feed"], [1, "poweredby"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total NFTs : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total Wallets : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Powered by AXIOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.totalNfts, " M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.totalWallets, " M");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.poweredby[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.live-feed[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 25px;\n}\n\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb3tcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuLnBvd2VyZWRieXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxpdmUtZmVlZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogNTAlXHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copyright Kellton Tech");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 25px;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jpY2":
    /*!******************************************************************!*\
      !*** ./src/app/token-name-search/token-name-search.component.ts ***!
      \******************************************************************/

    /*! exports provided: TokenNameSearchComponent */

    /***/
    function jpY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenNameSearchComponent", function () {
        return TokenNameSearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../loader.service */
      "5gIc");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function TokenNameSearchComponent_mat_optgroup_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-optgroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6.contract_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6.contract_address);
        }
      }

      function TokenNameSearchComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TokenNameSearchComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "View Provider Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Wallet Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "View on Etherscan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TokenNameSearchComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "View Provider Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "View on Etherscan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](record_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", record_r7.permalink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", record_r7.owner_address, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "https://etherscan.io/nft/", record_r7.contract_address, "/", record_r7.token_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var TokenNameSearchComponent = /*#__PURE__*/function () {
        function TokenNameSearchComponent(http, loader) {
          _classCallCheck(this, TokenNameSearchComponent);

          this.http = http;
          this.loader = loader;
          this.baseUrl = 'http://52.22.129.105:9001';
          this.selectedValue = '';
          this.selectedSymbol = 'gt';
          this.next = 0;
          this.previous = 0;
          this.records = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        }

        _createClass(TokenNameSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.InitialValues('');
          }
        }, {
          key: "clickout",
          value: function clickout(event) {
            var _a, _b;

            if (this.selectedValue === '') {} else {
              (_b = (_a = this.matAutocomplete.options) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.select();
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(event) {
            this.selectedValue = event.target.value;
            this.InitialValues(this.selectedValue);
          }
        }, {
          key: "onScroll",
          value: function onScroll(value) {
            this.SendRequest(value, this.next);
          }
        }, {
          key: "InitialValues",
          value: function InitialValues(value) {
            this.options = this.getInitialSearchValues(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
              return item.results;
            }));
          }
        }, {
          key: "displayFn",
          value: function displayFn(option) {
            return option ? option.contract_name : undefined;
          }
        }, {
          key: "changeSelectedOption",
          value: function changeSelectedOption(event) {
            this.selectedOptionValue = event.option.value.contract_address;
          }
        }, {
          key: "SendRequest",
          value: function SendRequest(value, page) {
            var _this7 = this;

            console.log(value);
            console.log(this.selectedValue);
            this.loader.displayProgressSpinnerInBlock = true;
            if (page <= 1) this.records = [];
            this.next = 0;
            this.previous = 0;
            this.getWalletAddressesForExactNameSearch(value, page).subscribe(function (response) {
              response.results.forEach(function (element) {
                _this7.records.push(element);
              });

              if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
                _this7.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
                _this7.previous = response.previous.page;
              }

              _this7.loader.displayProgressSpinnerInBlock = false;
            });
          }
        }, {
          key: "getWalletAddressesForExactNameSearch",
          value: function getWalletAddressesForExactNameSearch(value, page) {
            var url = this.baseUrl + '/nfts/name/search?p=' + value + '&limit=50' + (page > 0 ? '&page=' + page : '');
            return this.http.get(url);
          }
        }, {
          key: "getInitialSearchValues",
          value: function getInitialSearchValues(value) {
            var url = this.baseUrl + '/general/token/search?text=' + value;
            return this.http.get(url);
          }
        }]);

        return TokenNameSearchComponent;
      }();

      TokenNameSearchComponent.ɵfac = function TokenNameSearchComponent_Factory(t) {
        return new (t || TokenNameSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]));
      };

      TokenNameSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TokenNameSearchComponent,
        selectors: [["app-token-name-search"]],
        viewQuery: function TokenNameSearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
          }
        },
        hostBindings: function TokenNameSearchComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TokenNameSearchComponent_click_HostBindingHandler($event) {
              return ctx.clickout($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        decls: 17,
        vars: 14,
        consts: [[1, "center"], [1, "flex-column", "align-center"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete", "keyup"], ["todo", ""], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [4, "ngFor", "ngForOf"], [1, "primary-btn", 2, "cursor", "pointer", 3, "click"], ["class", "result", 4, "ngIf"], ["infiniteScroll", "", 1, "result-wrapper", "flex", "justify-center", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "infiniteScrollContainer", "fromRoot", "scrolled"], [1, "result-inner"], ["class", "row flex space-between", 4, "ngIf"], ["class", "row flex space-between", 4, "ngFor", "ngForOf"], [3, "value"], [1, "result"], [1, "row", "flex", "space-between"], [1, "col", "head"], [1, "col", "flex", "align-center", "no-wrap"], [1, "col", "flex", "align-center"], ["target", "_blank", 2, "cursor", "pointer", 3, "href"], ["src", "../../assets/images/wallet.png", "alt", "Logo"]],
        template: function TokenNameSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wallets containing nfts with exact name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TokenNameSearchComponent_Template_input_keyup_4_listener($event) {
              return ctx.onKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function TokenNameSearchComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
              return ctx.changeSelectedOption($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TokenNameSearchComponent_mat_optgroup_8_Template, 6, 4, "mat-optgroup", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TokenNameSearchComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return ctx.SendRequest(_r0.value, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TokenNameSearchComponent_div_12_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function TokenNameSearchComponent_Template_div_scrolled_13_listener() {
              return ctx.onScroll("");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TokenNameSearchComponent_div_15_Template, 9, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TokenNameSearchComponent_div_16_Template, 12, 5, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, ctx.options));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", true)("infiniteScrollContainer", ".result-inner")("fromRoot", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 35px;\n}\n\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\n.result[_ngcontent-%COMP%] {\n  font-size: 31px;\n  line-height: 35px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.result-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.result-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1100px;\n  overflow-y: auto;\n  max-height: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.row[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 25%;\n  text-align: left;\n  word-break: break-word;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.col.head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  padding: 20px 20px 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:nth-child(2) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:nth-child(3) {\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  padding: 20px 0 20px 20px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  max-width: 180px;\n  height: 56px;\n  color: #fff;\n  cursor: pointer;\n  background-color: #00af6e;\n  margin-bottom: 50px;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option {\n  height: 30px !important;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-optgroup-label {\n  display: none;\n}\n\n  .mat-autocomplete-panel {\n  background-color: grey;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option .mat-option-text {\n  color: white;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option .mat-option-text:hover {\n  background: none;\n  background-color: none;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option {\n  background: none;\n}\n\n  .mat-autocomplete-panel .mat-optgroup {\n  background: none;\n  display: block;\n  padding: 5px 20px;\n}\n\n  .mat-autocomplete-panel .mat-optgroup .mat-option:not(.mat-option-multiple) {\n  padding: 0;\n}\n\n  .mat-autocomplete-panel .mat-optgroup:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n  display: block;\n  padding: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9rZW4tbmFtZS1zZWFyY2gvdG9rZW4tbmFtZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQVI7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUFSOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBSUE7RUFDSSxrREFBQTtBQURKOztBQUVJO0VBQ0ksWUFBQTtBQUFSOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsaURBQUE7QUFDUjs7QUFDSTtFQUNJLDRCQUFBO0VBQ0EsaURBQUE7QUFDUjs7QUFDSTtFQUNJLDRCQUFBO0VBQ0EsaURBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0FBQ1I7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxVQUFBO0FBT0o7O0FBTEE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvdG9rZW4tbmFtZS1zZWFyY2gvdG9rZW4tbmFtZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG5mb3Jte1xuICAgIHNlbGVjdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDBhZjZlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6cmdiYSgjZmZmLC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMwMGFmNmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB9XG4gICAgXG59XG5cbi5yZXN1bHR7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOnJnYmEoI2ZmZiwuNzUpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnJlc3VsdC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yZXN1bHQtaW5uZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbi5yb3d7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgfVxufVxuLmNvbHtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoI2ZmZiwuNzUpO1xuICAgICYuaGVhZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgjZmZmLC43NSk7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCNmZmYsLjc1KTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XG4gICAgfVxufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnByaW1hcnktYnRue1xuICAgIGJvcmRlcjpub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZjZlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0aW9uIHtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0Z3JvdXAgLm1hdC1vcHRpb24gLm1hdC1vcHRpb24tdGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRncm91cCAubWF0LW9wdGlvbiAubWF0LW9wdGlvbi10ZXh0OmhvdmVye1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufSBcbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0aW9ue1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRncm91cCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGdyb3VwIC5tYXQtb3B0aW9uOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRncm91cDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCMwMDAsLjUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufSJdfQ== */"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Debounce(500)], TokenNameSearchComponent.prototype, "onKeyUp", null);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenNameSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-token-name-search',
            templateUrl: './token-name-search.component.html',
            styleUrls: ['./token-name-search.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
          }];
        }, {
          matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"]]
          }],
          clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event']]
          }],
          onKeyUp: []
        });
      })();

      function Debounce(ms) {
        return function (target, key, descriptor) {
          var oldFunc = descriptor.value;
          var newFunc = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"])(oldFunc, ms);

          descriptor.value = function () {
            return newFunc.apply(this, arguments);
          };
        };
      }
      /***/

    },

    /***/
    "vEkN":
    /*!**********************************************************!*\
      !*** ./src/app/range-content/range-content.component.ts ***!
      \**********************************************************/

    /*! exports provided: RangeContentComponent */

    /***/
    function vEkN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeContentComponent", function () {
        return RangeContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../loader.service */
      "5gIc");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular-slider/ngx-slider */
      "mgaL");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");

      function RangeContentComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RangeContentComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wallet Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RangeContentComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r3.owner_address, "");
        }
      }

      var RangeContentComponent = /*#__PURE__*/function () {
        function RangeContentComponent(http, loader) {
          _classCallCheck(this, RangeContentComponent);

          this.http = http;
          this.loader = loader;
          this.baseUrl = 'http://52.22.129.105:9001'; //'http://107.22.58.206:9000';

          this.next = 0;
          this.previous = 0;
          this.minValue = 2;
          this.maxValue = 8;
          this.options = {
            floor: 0,
            ceil: 1000
          };
          this.records = [];
        }

        _createClass(RangeContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onScroll",
          value: function onScroll() {
            this.SendRequest(this.next);
          }
        }, {
          key: "SendRequest",
          value: function SendRequest(page) {
            var _this8 = this;

            this.next = 0;
            this.previous = 0;
            this.loader.displayProgressSpinnerInBlock = true;
            if (page <= 1) this.records = [];
            var symbol = localStorage.getItem('symbol');
            this.getWalletAddressesForPriceRange(this.minValue, this.maxValue, page).subscribe(function (response) {
              _this8.records = response.results;

              if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
                _this8.next = response.next.page;
              }

              if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
                _this8.previous = response.previous.page;
              }

              _this8.loader.displayProgressSpinnerInBlock = false;
            });
          }
        }, {
          key: "getWalletAddressesForPriceRange",
          value: function getWalletAddressesForPriceRange(min, max, page) {
            var url = this.baseUrl + '/nfts/price?gte=' + min + '&lte=' + max + '&limit=50' + (page > 0 ? '&page=' + page : '');
            return this.http.get(url);
          }
        }]);

        return RangeContentComponent;
      }();

      RangeContentComponent.ɵfac = function RangeContentComponent_Factory(t) {
        return new (t || RangeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]));
      };

      RangeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RangeContentComponent,
        selectors: [["app-range-content"]],
        decls: 16,
        vars: 13,
        consts: [[1, "center"], [1, "flex", "column", "align-center"], [1, "custom-slider"], [3, "value", "highValue", "options", "valueChange", "highValueChange"], [1, "min-max-inputs"], ["matInput", "", "placeholder", "Min", "name", "minInput", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Max", "name", "maxInput", 3, "ngModel", "ngModelChange"], [1, "primary-btn", 3, "click"], ["class", "result", 4, "ngIf"], ["infiniteScroll", "", 1, "result-wrapper", "flex", "justify-center", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "infiniteScrollContainer", "fromRoot", "scrolled"], [1, "result-inner"], ["class", "row flex space-between", 4, "ngIf"], ["class", "row flex space-between", 4, "ngFor", "ngForOf"], [1, "result"], [1, "row", "flex", "space-between"], [1, "col", "align-center", "head"], [1, "col", "flex", "align-center", "no-wrap"], ["src", "../../assets/images/wallet.png", "alt", "Logo"]],
        template: function RangeContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wallets containing nfts having more than X price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-slider", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RangeContentComponent_Template_ngx_slider_valueChange_5_listener($event) {
              return ctx.minValue = $event;
            })("highValueChange", function RangeContentComponent_Template_ngx_slider_highValueChange_5_listener($event) {
              return ctx.maxValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RangeContentComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.minValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RangeContentComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.maxValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RangeContentComponent_Template_button_click_9_listener() {
              return ctx.SendRequest(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RangeContentComponent_div_11_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function RangeContentComponent_Template_div_scrolled_12_listener() {
              return ctx.onScroll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RangeContentComponent_div_14_Template, 3, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RangeContentComponent_div_15_Template, 4, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.minValue)("highValue", ctx.maxValue)("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", true)("infiniteScrollContainer", ".result-inner")("fromRoot", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records && ctx.records.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 35px;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\nform[_ngcontent-%COMP%]   .min-max-inputs[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n}\n\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 56px;\n  border: 1px solid #00af6e;\n  font-size: 20px;\n  padding: 0 15px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #000;\n}\n\nform[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  max-width: 180px;\n  height: 56px;\n  color: #fff;\n  cursor: pointer;\n  background-color: #00af6e;\n}\n\n.result[_ngcontent-%COMP%] {\n  font-size: 31px;\n  line-height: 35px;\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.result-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.result-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  overflow-y: auto;\n  max-height: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n}\n\n.row[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  word-break: break-word;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.col.head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  padding: 20px 20px 20px 0;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n}\n\n  .custom-slider {\n  width: 500px;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-bar {\n  background: greenyellow;\n  height: 5px;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-selection {\n  background: green;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-pointer {\n  width: 10px;\n  height: 15px;\n  top: auto;\n  \n  bottom: 0;\n  background-color: greenyellow;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-pointer:after {\n  display: none;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-bubble {\n  bottom: 14px;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-limit {\n  font-weight: bold;\n  color: red;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-tick {\n  width: 1px;\n  height: 15px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: green;\n  top: -1px;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-tick.ngx-slider-selected {\n  background: darkgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFuZ2UtY29udGVudC9yYW5nZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUVSOztBQUFJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFBSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBRVI7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRVI7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtEQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0FBR1I7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQUZJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUlSOztBQUZJO0VBQ0kseUJBQUE7QUFJUjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFDSTtFQUNJLFlBQUE7QUFFUjs7QUFBSTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQUVOOztBQUFJO0VBQ0UsaUJBQUE7QUFFTjs7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUFXLHNDQUFBO0VBQ1gsU0FBQTtFQUNBLDZCQUFBO0FBRU47O0FBQ0k7RUFDRSxhQUFBO0FBQ047O0FBRUk7RUFDRSxZQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFETjs7QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUZOOztBQUtJO0VBQ0UscUJBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL3JhbmdlLWNvbnRlbnQvcmFuZ2UtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmZvcm17XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAubWluLW1heC1pbnB1dHMge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgc2VsZWN0e1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwYWY2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGNvbG9yOnJnYmEoI2ZmZiwuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMwMGFmNmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB9XG4gICAgLnByaW1hcnktYnRue1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFmNmU7XG4gICAgfVxufVxuXG4ucmVzdWx0e1xuICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjb2xvcjpyZ2JhKCNmZmYsLjc1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5yZXN1bHQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVzdWx0LWlubmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbi5yb3d7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoI2ZmZiwuNzUpO1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgfVxufVxuLmNvbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiByZ2JhKCNmZmYsLjc1KTtcbiAgICAmLmhlYWR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDA7XG4gICAgfVxufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLmN1c3RvbS1zbGlkZXJ7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gICAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IGdyZWVueWVsbG93O1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgfVxuICAgIC5jdXN0b20tc2xpZGVyIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXNlbGVjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICB9XG4gIFxuICAgIC5jdXN0b20tc2xpZGVyIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXIge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB0b3A6IGF1dG87IC8qIHRvIHJlbW92ZSB0aGUgZGVmYXVsdCBwb3NpdGlvbmluZyAqL1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgfVxuICBcbiAgICAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBcbiAgICAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1idWJibGUge1xuICAgICAgYm90dG9tOiAxNHB4O1xuICAgIH1cbiAgXG4gICAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItbGltaXQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgXG4gICAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItdGljayB7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIHRvcDogLTFweDtcbiAgICB9XG4gIFxuICAgIC5jdXN0b20tc2xpZGVyIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2submd4LXNsaWRlci1zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47XG4gICAgfVxuICB9XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-range-content',
            templateUrl: './range-content.component.html',
            styleUrls: ['./range-content.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./by-nft-count-content/by-nft-count-content.component */
      "JPO3");
      /* harmony import */


      var _collection_name_search_collection_name_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collection-name-search/collection-name-search.component */
      "8TPv");
      /* harmony import */


      var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./content/content.component */
      "0btM");
      /* harmony import */


      var _range_content_range_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./range-content/range-content.component */
      "vEkN");
      /* harmony import */


      var _token_name_search_token_name_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./token-name-search/token-name-search.component */
      "jpY2");

      var routes = [{
        path: 'name-search',
        component: _token_name_search_token_name_search_component__WEBPACK_IMPORTED_MODULE_6__["TokenNameSearchComponent"]
      }, {
        path: '',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]
      }, {
        path: 'lt',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]
      }, {
        path: 'eq',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]
      }, {
        path: 'nft-gt',
        component: _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_2__["ByNftCountContentComponent"]
      }, {
        path: 'nft-lt',
        component: _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_2__["ByNftCountContentComponent"]
      }, {
        path: 'nft-eq',
        component: _by_nft_count_content_by_nft_count_content_component__WEBPACK_IMPORTED_MODULE_2__["ByNftCountContentComponent"]
      }, {
        path: 'range',
        component: _range_content_range_content_component__WEBPACK_IMPORTED_MODULE_5__["RangeContentComponent"]
      }, {
        path: 'collection-search',
        component: _collection_name_search_collection_name_search_component__WEBPACK_IMPORTED_MODULE_3__["CollectionNameSearchComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map