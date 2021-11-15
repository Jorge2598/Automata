import { Maker } from "./maker.js";
const maker = new Maker();

export class Grafo{
  getCirculos = () => {
    return [
      {name:"Q0" , circle : maker.makeCircle(150, 30),  z:1},
      {name:"Q1" , circle : maker.makeCircle(200, 100), z:1},
      {name:"Q2" , circle : maker.makeCircle(200, 200), z:1},
      {name:"Q3" , circle : maker.makeCircle(100, 100), z:1},
      {name:"Q4" , circle : maker.makeCircle(100, 200), z:1},
      {name:"Q1R" , circle : maker.makeCircle(200, 100, 28), z:0},
      {name:"Q3R" , circle : maker.makeCircle(100, 100, 28), z:0},
      {name:"P1" , circle : maker.makeCircle(120, 72, 5, 0, "#fff", "#00A"), z:1},
      {name:"P2" , circle : maker.makeCircle(178, 73, 5, 0, "#fff", "#00A"), z:1},
      {name:"P3" , circle : maker.makeCircle(230, 90, 5, 0, "#fff", "#00A"), z:1},
      {name:"P4" , circle : maker.makeCircle(215, 185, 5, 0, "#fff", "#00A"), z:1},
      {name:"P5" , circle : maker.makeCircle(185, 130, 5, 0, "#fff", "#00A"), z:1},
      {name:"P6" , circle : maker.makeCircle(115, 185, 5, 0, "#fff", "#00A"), z:1},
      {name:"P7" , circle : maker.makeCircle(85, 130, 5, 0, "#fff", "#00A"), z:1},
      {name:"P8" , circle : maker.makeCircle(135, 100, 5, 0, "#fff", "#00A"), z:1},
      {name:"P9" , circle : maker.makeCircle(250, 30, 5, 0, "#fff", "#00A"), z:1}
    ]
  }

  getTriangulos = () => {
    return [
      
    ]
  }

  getLineas = () => {
    return [
      //Linea de Q0 a Q3
      {name:"Q0Q3" , line : maker.makeLine([140, 30, 110, 90])},
      {name:"Q0Q1" , line : maker.makeLine([150, 30, 190, 90])},,
      {name:"Q1Q11", line :maker.makeLine([200, 110, 250, 110])},
      {name:"Q1Q12", line :maker.makeLine([250, 113, 250, 87])},
      {name:"Q1Q13", line :maker.makeLine([200, 90, 250, 90])},
      {name:"Q1Q3", line : maker.makeLine([100, 100, 170, 100])},
      {name:"Q3Q4" , line : maker.makeLine([85, 120, 85, 200])},
      {name:"Q1Q2" , line : maker.makeLine([185, 120, 185, 200])},
      {name:"Q4Q3" , line : maker.makeLine([115, 120, 115, 200])},
      {name:"Q2Q1" , line : maker.makeLine([215, 120, 215, 200])}
    ]
  }

  getTextos = () => {
    return [
      {name:"Q0", text: maker.makeText(150, 30, "Q0")},
      {name:"Q1" , text: maker.makeText(200, 100, "Q1")},
      {name:"Q2" , text: maker.makeText(200, 200, "Q2")},
      {name:"Q3" , text: maker.makeText(100, 100, "Q3")},
      {name:"Q4" , text: maker.makeText(100, 200, "Q4")},
      {name:"B1" , text: maker.makeText(180, 50, "b")},
      {name:"B2" , text: maker.makeText(120, 50, "b")},
      {name:"B3" , text: maker.makeText(153, 115, "b")},
      {name:"B4" , text: maker.makeText(260, 100, "b")},
      {name:"B5" , text: maker.makeText(125, 160, "b")},
      {name:"A1" , text: maker.makeText(70, 160, "a")},
      {name:"A2" , text: maker.makeText(170, 160, "a")},
      {name:"A3" , text: maker.makeText(225, 160, "a")},
      {name:"DEF" , text: maker.makeText(300, 30, "Dirección")},
      {name:"DEF" , text: maker.makeText(180, 240, "Todos los derechos reservados a el grupo")},
    ]
  }
}
