System.register(['angular2/core', "./child.component"], function(exports_1, context_1) {
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
    var core_1, child_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.fromchild = function (value) {
                    this.fromchildv = value;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        Hello World\n        <input type=\"text\" (keyup)=\"0\" #childv>\n        <child-comp [parentvalue]=\"childv.value\" (childchanged)=\"fromchild($event)\"></child-comp>\n        \u5B69\u5B50\u4F86\u7684\u503C  {{fromchildv}}\n       \n    ",
                        directives: [child_component_1.ChildComp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFNQSxDQUFDO2dCQUhELGdDQUFTLEdBQVQsVUFBVSxLQUFZO29CQUNsQixJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztnQkFDMUIsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBQQU1UO3dCQUNELFVBQVUsRUFBQyxDQUFDLDJCQUFTLENBQUM7cUJBQ3pCLENBQUM7O2dDQUFBO2dCQU9GLG1CQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1Q0FNQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDaGlsZENvbXAgfSBmcm9tIFwiLi9jaGlsZC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIEhlbGxvIFdvcmxkXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCIwXCIgI2NoaWxkdj5cbiAgICAgICAgPGNoaWxkLWNvbXAgW3BhcmVudHZhbHVlXT1cImNoaWxkdi52YWx1ZVwiIChjaGlsZGNoYW5nZWQpPVwiZnJvbWNoaWxkKCRldmVudClcIj48L2NoaWxkLWNvbXA+XG4gICAgICAgIOWtqeWtkOS+hueahOWAvCAge3tmcm9tY2hpbGR2fX1cbiAgICAgICBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W0NoaWxkQ29tcF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbmZyb21jaGlsZHY6c3RyaW5nO1xuY2hpbGR2OnN0cmluZ1xuZnJvbWNoaWxkKHZhbHVlOnN0cmluZyl7XG4gICAgdGhpcy5mcm9tY2hpbGR2PXZhbHVlO1xufVxufVxuIl19
