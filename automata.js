class Maker {
  makeCircle(
    left,
    top,
    radius = 20,
    strokeWidth = 5,
    strokeColor = "#666",
    fillColor = "#fff"
  ) {
    var c = new fabric.Circle({
      left: left,
      top: top,
      strokeWidth: strokeWidth,
      radius: radius,
      fill: fillColor,
      stroke: strokeColor,
      selectable: false,
    });
    c.hasControls = c.hasBorders = false;

    return c;
  }

  makeText(left, top, text) {
    return new fabric.Text(text, {
      left: left,
      top: top,
      textAlign: "center",
      fontSize: 15,
      selectable: false,
      hasControls: false,
    });
  }

  makeLine(coords, strokeWidth = 5) {
    return new fabric.Line(coords, {
      fill: "red",
      stroke: "red",
      strokeWidth: strokeWidth,
      selectable: false,
      evented: false,
    });
  }
}
var maker = new Maker();

var listaCirculos = [
  //Q0
  maker.makeCircle(150, 30),
  // RELLENO DE Q3
  maker.makeCircle(100, 100, 28),
  //Q3
  maker.makeCircle(100, 100),
  // RELLENO DE Q1
  maker.makeCircle(200, 100, 28),
  //Q1
  maker.makeCircle(200, 100),
  //Q4
  maker.makeCircle(100, 200),
  //Q2
  maker.makeCircle(200, 200),

  //AÑADIENDO LOS PUNTOS
  maker.makeCircle(120, 72, 5, 0, "#fff", "#00A"),
  maker.makeCircle(178, 73, 5, 0, "#fff", "#00A"),
  maker.makeCircle(230, 90, 5, 0, "#fff", "#00A"),
  maker.makeCircle(215, 185, 5, 0, "#fff", "#00A"),
  maker.makeCircle(185, 130, 5, 0, "#fff", "#00A"),
  maker.makeCircle(115, 185, 5, 0, "#fff", "#00A"),
  maker.makeCircle(85, 130, 5, 0, "#fff", "#00A"),
  maker.makeCircle(135, 100, 5, 0, "#fff", "#00A"),

  maker.makeCircle(250, 30, 5, 0, "#fff", "#00A"),
];

var listaLineas = [
  //Linea de Q0 a Q3
  maker.makeLine([160, 55, 126, 100]),
  //Linea de Q0 a Q1
  maker.makeLine([175, 60, 200, 100]),
  //semi circulo de Q1
  maker.makeLine([220, 110, 280, 110]),
  maker.makeLine([250, 100, 250, 120]),
  maker.makeLine([220, 90, 280, 90]),
  //Linea de Q1 A Q3
  maker.makeLine([150, 100, 300, 100]),
  //Linea de Q3 a Q4
  maker.makeLine([85, 150, 85, 260]),
  //Linea de Q1 a Q2
  maker.makeLine([185, 150, 185, 260]),
  //Linea de Q4 a Q3
  maker.makeLine([115, 150, 115, 260]),
  //Linea de Q2 a Q1
  maker.makeLine([215, 150, 215, 260]),
];

var listaTexto = [
  maker.makeText(150, 30, "Q0"),
  maker.makeText(100, 100, "Q3"),
  maker.makeText(200, 100, "Q1"),
  maker.makeText(100, 200, "Q4"),
  maker.makeText(200, 200, "Q2"),
  maker.makeText(300, 30, "Dirección"),
  maker.makeText(180, 50, "b"),
  maker.makeText(120, 50, "b"),
  maker.makeText(153, 115, "b"),
  maker.makeText(260, 100, "b"),
  maker.makeText(70, 160, "a"),
  maker.makeText(125, 160, "b"),
  maker.makeText(170, 160, "a"),
  maker.makeText(225, 160, "a"),
  maker.makeText(180, 240, "Todos los derechos reservados a el grupo"),
];

class Grafico {
  pintar = (listaCirculos, listaLineas, listaTexto, canvas) => {
    this.pintarLineas(listaLineas, canvas);
    this.pintarCirculos(listaCirculos, canvas);
    this.pintarTextos(listaTexto, canvas);
  };

  pintarLineas = (listaLineas, canvas) => {
    listaLineas.forEach((it) => {
      canvas.add(it);
    });
  };

  pintarCirculos = (listaCirculos, canvas) => {
    listaCirculos.forEach((it) => {
      canvas.add(it);
    });
  };

  pintarTextos = (listaTexto, canvas) => {
    listaTexto.forEach((it) => {
      canvas.add(it);
    });
  };
}

var grafico = new Grafico();

fabric.Object.prototype.originX = fabric.Object.prototype.originY = "center";

var canvas = new fabric.Canvas("c", {
  selection: false,
});

grafico.pintar(listaCirculos, listaLineas, listaTexto, canvas);



var tiempo = 0;


setInterval(() => {
  canvas.clear()
  grafico.pintar(listaCirculos, listaLineas, listaTexto, canvas)

  var listaAuxiliar = listaCirculos
  var color = ""
  if(tiempo == 0){
    listaAuxiliar[tiempo].setOptions({
      fill: "#0A0"
    })
  }else if(tiempo == 1){
    listaAuxiliar[2].setOptions({
      fill: "#0A0"
    })
  }else if(tiempo == 2) {
    listaAuxiliar[4].setOptions({
      fill: "#0A0"
    })
  }
  grafico.pintar(listaAuxiliar, listaLineas, listaTexto, canvas)
 tiempo++
}, 2000);


