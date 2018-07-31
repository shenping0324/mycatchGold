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
var Basket = (function (_super) {
    __extends(Basket, _super);
    function Basket() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Basket.prototype.init = function () {
        var scrW = egret.MainContext.instance.stage.stageWidth;
        var scrH = egret.MainContext.instance.stage.stageHeight;
        var basket = new egret.Bitmap();
        basket.texture = RES.getRes("lanzi_png");
        this.addChild(basket);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        basket.x = 0;
        basket.y = 0;
        basket.touchEnabled = true;
        this.basket = basket;
        basket.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        basket.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        basket.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Basket.prototype.mouseDown = function (evt) {
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
    };
    Basket.prototype.mouseMove = function (evt) {
        var scrW = egret.MainContext.instance.stage.stageWidth;
        var scrH = egret.MainContext.instance.stage.stageHeight;
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        this.y = p.y;
    };
    Basket.prototype.mouseUp = function (evt) {
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
    };
    return Basket;
}(egret.Sprite));
__reflect(Basket.prototype, "Basket");
//# sourceMappingURL=Basket.js.map