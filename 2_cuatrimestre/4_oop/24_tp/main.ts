import {Logger} from "./class_logger";

const log= Logger.getInstance();
log.newLog("inicio");
log.newLog("prueba uno");
log.newLog("prueba dos");

console.log(log.toString());
