var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Shi = (function (_super) {
    __extends(Shi, _super);
    function Shi() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Shi.prototype.init = function () {
        var gold = new egret.Bitmap();
        gold.texture = RES.getRes("dabian_png");
        this.addChild(gold);
        gold.scaleX = 0.6;
        gold.scaleY = 0.6;
        gold.y = -30;
        var speedX = Math.floor(Math.random() + 10);
        var speedY = Math.floor(Math.random() + 10);
        this._speedX = speedX;
        this._speedY = speedY;
    };
    Shi.prototype.move = function () {
        var x = this.x;
        var y = this.y;
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        y += this._speedY;
        this.y = y;
    };
    return Shi;
}(egret.Sprite));
__reflect(Shi.prototype, "Shi");
//# sourceMappingURL=Shi.js.map