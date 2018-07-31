class BeginSence extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}

	private sky:egret.Bitmap;
	private startBtn:egret.Bitmap;
	private helpBtn:egret.Bitmap;
	private title:egret.Bitmap;
	private rank:egret.Bitmap;
	private init(){
		var screenw	= egret.MainContext.instance.stage.stageWidth;
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
		startBtn.anchorOffsetX = startBtn.width/2;
		startBtn.anchorOffsetY = startBtn.height/2;
		startBtn.x = screenw/2;
		startBtn.y = screenh*0.66;
		startBtn.touchEnabled = true;
		startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startBtnCallback, this);
		startBtn.addEventListener(egret.TouchEvent.TOUCH_END,this.startBtnCallback, this);
		startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.startBtnCallback, this);
		this.startBtn = startBtn;




	}

	//  开始按钮回调
    private startBtnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event:GameEvent = new GameEvent(GameEvent.GAME_GO);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

}