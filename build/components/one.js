var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var two_1 = require('./two');
var three_1 = require('./three');
var router_1 = require('angular2/router');
var One = (function () {
    function One() {
    }
    One = __decorate([
        angular2_1.Component({
            selector: 'one'
        }),
        angular2_1.View({
            template: "\n        <div [router-link]=\"['/Three']\"> &blacktriangleleft; </div>\n        <div>I am the One</div>\n        <div [router-link]=\"['/Two']\"> &blacktriangleright; </div>\n        <div [router-link]=\"['/Home']\"> &blacktriangledown; </div>\n    ",
            directives: [two_1.Two, three_1.Three, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], One);
    return One;
})();
exports.One = One;
