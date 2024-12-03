import * as CB from "./class_computadora_builder";

export class Computer {

  private processor:CB.TypeProcessor;
  private rAM:CB.TypeRAM;
  private storage:CB.TypeStorage;
  private graphicBoard:CB.TypeGPU;
  private oS:CB.TypeOS;

  constructor(computerBuilder:CB.ComputerBuilder){
    this.processor = computerBuilder.getProcessor();
    this.rAM = computerBuilder.getRAM();
    this.storage = computerBuilder.getStorage();
    this.graphicBoard = computerBuilder.getGraphicBoard();
    this.oS = computerBuilder.getOS();
  }
  
  public getProcessor(){
    return this.processor;
  }
  public getRAM(){
    return this.rAM;
  }
  public getStorage(){
    return this.storage;
  }
  public getGraphicBoard(){
    return this.graphicBoard;
  }
  public getOS(){
    return this.oS;
  }

}