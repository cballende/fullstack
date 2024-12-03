export class Log{
  public timeStamp  :string;
  public order      :number;
  public msg        :string;  
  public constructor(ptimeStamp:string,
                     porder:number,
                     pmsg:string){
    this.timeStamp=ptimeStamp;
    this.order=porder;
    this.msg=pmsg;
  }
}