/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui {
    export class MainSceneUI extends Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("MainScene");
        }
    }
    REG("ui.MainSceneUI",MainSceneUI);
    export class TimeLineUI extends Dialog {
		public bear:Laya.Animation;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("TimeLine");
        }
    }
    REG("ui.TimeLineUI",TimeLineUI);
}