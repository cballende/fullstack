import { Log } from "./class_log";

export class Logger {

  private static  instance  : Logger;
  private         logBuffer : Log[]=[];

  private constructor(){}
  
  public static getInstance():Logger{
    if (!Logger.instance) {
      Logger.instance= new Logger();
    }
    return Logger.instance;
  }
  
  private putLog(pitem:Log):void{
    this.logBuffer.push(pitem);
  }

  public newLog(pmsg:string):void{
    this.putLog(
      new Log(Date(),this.logBuffer.length,pmsg)
    );
  }

  public toString():string{
    //console.log(this.logBuffer);
    let s:string="";
    this.logBuffer.forEach(element => {
      s+=`{"timeStamp":${element.timeStamp},"order":${element.order},"msg":${element.msg}},\n`;
    });
    return s;
  }  

}