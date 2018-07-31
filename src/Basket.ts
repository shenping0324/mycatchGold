class Basket extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}
	private basket:egret.Bitmap;

	private init(){
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
		basket.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this);
		basket.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this);
		basket.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
	}

	private mouseDown(evt:egret.TouchEvent){
		var p:egret.Point = new egret.Point(evt.stageX,evt.stageY);
		this.x = p.x;
	}
	public mouseMove(evt:egret.TouchEvent){
		var scrW = egret.MainContext.instance.stage.stageWidth;
		var scrH = egret.MainContext.instance.stage.stageHeight;
		
		var p:egret.Point = new egret.Point(evt.stageX,evt.stageY);
		this.x = p.x;
		this.y = p.y;
	}
	private mouseUp(evt:egret.TouchEvent){
		//this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
		//this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
	}


}