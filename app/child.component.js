System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ChildComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChildComp = (function () {
                function ChildComp() {
                    this.childchanged = new core_1.EventEmitter();
                }
                ChildComp.prototype.onchange = function (value) {
                    this.childchanged.emit(value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ChildComp.prototype, "childchanged", void 0);
                ChildComp = __decorate([
                    core_1.Component({
                        selector: 'child-comp',
                        template: "\n    <hr>\n    i am child\n        <input type=\"text\" (keyup)=\"onchange(childv.value)\" #childv>to father\n        <div>\n        \u7238\u7D66\u5B69\u5B50\u7684\u503C :{{parentv}}\n        </div>\n    ",
                        inputs: ['parentv:parentvalue'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComp);
                return ChildComp;
            }());
            exports_1("ChildComp", ChildComp);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFBO29CQUVVLGlCQUFZLEdBQUMsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBS2xELENBQUM7Z0JBSkQsNEJBQVEsR0FBUixVQUFTLEtBQVk7b0JBRWpCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUpEO29CQUFDLGFBQU0sRUFBRTs7K0RBQUE7Z0JBZlQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsWUFBWTt3QkFDckIsUUFBUSxFQUFDLCtNQU9SO3dCQUNELE1BQU0sRUFBQyxDQUFDLHFCQUFxQixDQUFDO3FCQUVqQyxDQUFDOzs2QkFBQTtnQkFRRixnQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsaUNBT0MsQ0FBQSIsImZpbGUiOiJjaGlsZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXIsT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonY2hpbGQtY29tcCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8aHI+XHJcbiAgICBpIGFtIGNoaWxkXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uY2hhbmdlKGNoaWxkdi52YWx1ZSlcIiAjY2hpbGR2PnRvIGZhdGhlclxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg54i457Wm5a2p5a2Q55qE5YC8IDp7e3BhcmVudHZ9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGlucHV0czpbJ3BhcmVudHY6cGFyZW50dmFsdWUnXSxcclxuICAgIC8vIG91dHB1dHM6WydjaGlsZGNoYW5nZWQnXSDmj5vmiJBAb3V0cHV0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGlsZENvbXB7XHJcbnBhcmVudHY6c3RyaW5nO1xyXG5AT3V0cHV0KCkgY2hpbGRjaGFuZ2VkPW5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5vbmNoYW5nZSh2YWx1ZTpzdHJpbmcpXHJcbnsgICAgXHJcbiAgICB0aGlzLmNoaWxkY2hhbmdlZC5lbWl0KHZhbHVlKTtcclxufVxyXG59Il19
