import { Maker } from "./maker.js";
import { Grafico } from "./grafico.js";

fabric.Object.prototype.originX = fabric.Object.prototype.originY = "center";

const maker = new Maker()
const grafico = new Grafico(new fabric.Canvas("c", {
  selection: false,
}))

grafico.pintar();

var tiempo = 0;
setInterval(() => {
  grafico.setearGrafo()
  if(tiempo == 1){
    grafico.setCirculo("Q0",{fill:"#0A0"})
  }
  if(tiempo == 2){
    grafico.setLinea("Q0Q3",{stroke:"blue"})
  }else if(tiempo == 3){
    grafico.setCirculo("Q3",{fill:"#0A0"})
    grafico.setCirculo("Q3R",{fill:"#0A0"})
  }else if(tiempo == 4){
    grafico.setLinea("Q3Q4",{stroke:"blue"})
  }else if(tiempo == 5){
    grafico.setCirculo("Q4",{fill:"#0A0"})
  }
  grafico.rePintar()
  tiempo++
}, 1000);
