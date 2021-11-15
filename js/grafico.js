import { Grafo} from "./valores.js";
export class Grafico {

  constructor(canvas){
    this.canvas = canvas
    this.setearGrafo()
  }

  pintar = () => {
    this.pintarLineas();
    this.pintarCirculos();
    this.pintarTextos();
  };

  pintarLineas = () => {
    this.listaLineas.forEach((it) => {
      this.canvas.add(it.line);
    });
  };

  pintarCirculos = () => {
    for (let index = 0; index <= 1; index++) {
      this.listaCirculos.forEach((it) => {
        if(it.z == index){
          this.canvas.add(it.circle);
        }
      });
    }
  };

  pintarTextos = () => {
    this.listaTexto.forEach((it) => {
      this.canvas.add(it.text);
    });
  };

  rePintar = () => {
    this.limpiarCanvas()
    this.pintar()
  }

  setLinea = (name,options) => {
    this.listaLineas = this.listaLineas.map((value) => {
      if (value.name == name) {
        value.line.setOptions(options)
      }
      return value
    })
  }

  setCirculo = (name,options) => {
    this.listaCirculos = this.listaCirculos.map((value) => {
      if (value.name == name) {
        value.circle.setOptions(options)
      }
      return value
    })
  }

  setText = (name,options) => {
    this.listaTexto = this.listaTexto.map((value) => {
      if (value.name == name) {
        value.text.setOptions(options)
      }
      return value
    })
  }

  setearGrafo = () => {
    let grafo = new Grafo()
    this.listaLineas = grafo.getLineas()
    this.listaCirculos = grafo.getCirculos()
    this.listaTexto = grafo.getTextos()
  }

  limpiarCanvas = () => {
    this.canvas.clear()
  }
}
