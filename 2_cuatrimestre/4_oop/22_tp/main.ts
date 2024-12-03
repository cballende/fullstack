import * as a from "./class_computadora_builder";

const computer= new a.ComputerBuilder(a.TypeProcessor.AMD,a.TypeOS.LINUX)
                                      .setRAM(a.TypeRAM.DDR5)
                                      .setGraphicBoard(a.TypeGPU.NVIDIA)
                                      .setStorage(a.TypeStorage.M2)
                                      .build();
console.log(computer.getProcessor());
console.log(computer.getOS());
console.log(computer.getStorage());
console.log(computer.getRAM());
console.log(computer.getGraphicBoard());
