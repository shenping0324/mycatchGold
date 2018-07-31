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
var BeginSence = (function (_super) {
    __extends(BeginSence, _super);
    function BeginSence() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    BeginSence.prototype.init = function () {
        var screenw = egret.MainContext.instance.stage.stageWidth;
        var screenh = egret.MainContext.instance.stage.stageHeight;
        console.log(screenw);
        console.log(screenh);
        var sky = new egret.Bitmap;
        sky.texture = RES.getRes("true_jpg");
        sky.height = screenh;
        sky.width = screenw;
        this.sky = sky;
        this.addChild(sky);
        //开始按钮
        var startBtn = new egret.Bitmap;
        startBtn.texture = RES.getRes("start_png");
        this.addChild(startBtn);
        startBtn.anchorOffsetX = startBtn.width / 2;
        startBtn.anchorOffsetY = startBtn.height / 2;
        startBtn.x = screenw / 2;
        startBtn.y = screenh * 0.66;
        startBtn.touchEnabled = true;
        startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startBtnCallback, this);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.startBtnCallback, this);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.startBtnCallback, this);
        this.startBtn = startBtn;
    };
    //  开始按钮回调
    BeginSence.prototype.startBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_GO);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    return BeginSence;
}(egret.Sprite));
__reflect(BeginSence.prototype, "BeginSence");
//# sourceMappingURL=BeginSence.js.map