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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.j = 0;
        _this.goldscore = 1;
        _this.shiscore = 1;
        _this.init();
        _this.createTimer();
        return _this;
    }
    Game.prototype.init = function () {
        //背景
        var scrW = egret.MainContext.instance.stage.stageWidth;
        var scrH = egret.MainContext.instance.stage.stageHeight;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("true1_jpg");
        this.addChild(bg);
        bg.width = scrW;
        bg.height = scrH;
        //分数
        this.goldScore = new egret.TextField();
        this.addChild(this.goldScore);
        this.goldScore.width = egret.MainContext.instance.stage.stageWidth;
        this.goldScore.y = 10;
        this.goldScore.size = 40;
        this.goldScore.textColor = 0x00ff00;
        this.goldScore.textAlign = egret.HorizontalAlign.LEFT;
        this.goldScore.text = "红包:0";
        //大便
        this.shitScore = new egret.TextField();
        this.addChild(this.shitScore);
        this.shitScore.width = egret.MainContext.instance.stage.stageWidth;
        this.shitScore.y = 60;
        this.shitScore.size = 40;
        this.shitScore.textColor = 0x00ff00;
        this.shitScore.textAlign = egret.HorizontalAlign.LEFT;
        this.shitScore.text = "大便:0";
        //篮子
        var basket = new Basket();
        this.addChild(basket);
        this.basket = basket;
        basket.x = basket.width / 3;
        basket.y = egret.MainContext.instance.stage.stageHeight - basket.height / 2;
        basket.scaleX = 0.6;
        this.golds = [];
        this.goldsTouch = [];
        this.shis = [];
        this.shisTouch = [];
        this.timer = new egret.Timer(1000 / 30, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerfunc, this);
        this.timer.start();
    };
    Game.prototype.timerfunc = function () {
        this.j++;
        //生成黄金
        if (this.j % 6 === 0) {
            var gold = new Gold();
            gold.y = 20;
            gold.x = Math.floor(Math.random() * egret.MainContext.instance.stage.stageWidth - 20);
            this.golds.push(gold);
            this.addChild(gold);
            this.goldsTouch.push(gold);
        }
        //判断碰撞
        var distance = 0;
        var distance2 = 0;
        for (var j = 0; j < this.goldsTouch.length; j++) {
            distance = Math.floor(Math.sqrt((this.goldsTouch[j].x - this.basket.x) * (this.goldsTouch[j].x - this.basket.x) + (this.goldsTouch[j].y - this.basket.y) * (this.goldsTouch[j].y - this.basket.y)));
            distance2 = 90;
            if (distance < distance2) {
                this.drawInit();
                this.goldscore++;
                this.goldsTouch[j].x = 10000;
                this.goldsTouch[j].y = 10000;
            }
        }
        //移动
        for (var i = 0; i < this.golds.length; i++) {
            this.golds[i].move();
        }
        //生成大便
        if (this.j % 10 === 0) {
            var shi = new Shi();
            shi.y = 20;
            shi.x = Math.floor(Math.random() * egret.MainContext.instance.stage.stageWidth - 20);
            this.shis.push(shi);
            this.addChild(shi);
            this.shisTouch.push(shi);
        }
        var distance3 = 0;
        var distance4 = 0;
        for (var j = 0; j < this.shisTouch.length; j++) {
            distance3 = Math.floor(Math.sqrt((this.shisTouch[j].x - this.basket.x) * (this.shisTouch[j].x - this.basket.x)
                + (this.shisTouch[j].y - this.basket.y) * (this.shisTouch[j].y - this.basket.y)));
            distance4 = 100;
            if (distance3 < distance4) {
                this.shiscore++;
                this.drawshiInit();
                this.shisTouch[j].x = 10000;
                this.shisTouch[j].y = 10000;
            }
        }
        for (var i = 0; i < this.shis.length; i++) {
            this.shis[i].move();
        }
    };
    Game.prototype.drawInit = function () {
        this.goldScore.text = "红包:" + this.goldscore;
        var key = "goldScore";
        var value = "" + this.goldscore;
        egret.localStorage.setItem(key, value);
    };
    Game.prototype.drawshiInit = function () {
        this.shitScore.text = "大便:" + this.shiscore;
        var key = "shitScore";
        var value = "" + this.shiscore;
        egret.localStorage.setItem(key, value);
    };
    Game.prototype.createTimer = function () {
        var timerPanel = new TimerPanel();
        this.addChild(timerPanel);
        this.timerPanel = timerPanel;
        timerPanel.start();
        timerPanel.addEventListener(GameEvent.GAME_OVER, this.gameOver, this);
    };
    Game.prototype.gameOver = function () {
        this.removeChild(this.basket);
        this.timer.stop();
        console.log("游戏结束");
        var event = new GameEvent(GameEvent.GAME_HIT);
        this.dispatchEvent(event);
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map