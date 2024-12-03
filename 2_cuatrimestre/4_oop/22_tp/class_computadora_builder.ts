import { Computer } from "./class_computadora";

export enum TypeProcessor{
  INTEL=0,
  AMD,
  IBM,
  none,
}
export enum TypeRAM{
  DDR3=0,
  DDR4,
  DDR5,
  none,
}
export enum TypeStorage{
  SSD=0,
  HARDDISK,
  M2,
  none,
}
export enum TypeGPU{
  NVIDIA=0,
  ATI,
  MSI,
  none,
}
export enum TypeOS{
  WINDOWS=0,
  LINUX,
  OS,
  none,
}

export class ComputerBuilder{
  private processor:TypeProcessor;
  private rAM:TypeRAM;
  private storage:TypeStorage;
  private graphicBoard:TypeGPU;
  private oS:TypeOS;

  public constructor(pprocessor:TypeProcessor,poS:TypeOS){
    this.processor=pprocessor;
    this.oS=poS;
    this.rAM=TypeRAM.none;
    this.storage=TypeStorage.none;
    this.graphicBoard=TypeGPU.none;
  }  
  
  public setProcessor(pprocessor:TypeProcessor){
    this.processor=pprocessor;
    return this;
  }
  public setRAM(prAM:TypeRAM){
    this.rAM=prAM;
    return this;
  }
  public setStorage(pstorage:TypeStorage){
    this.storage=pstorage;
    return this;
  }
  public setGraphicBoard(pgPU:TypeGPU){
    this.graphicBoard=pgPU;
    return this;
  }
  public setOS(poS:TypeOS){
    this.oS=poS;
    return this;
  }

  public build():Computer{
    return new Computer(this);
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