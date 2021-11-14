const DEFAULT_RADIUS = 20;
const DEFAULT_STROKE_WIDTH = 5;
const DEFAULT_STROKE_COLOR = "#666";
const DEFAULT_CIRCLE_COLOR_FILL = "#fff"

var canvas = new fabric.Canvas("c", {
  selection: false,
});

fabric.Object.prototype.originX = fabric.Object.prototype.originY = "center";

function makeCircle(
  left,
  top,
  radius = DEFAULT_RADIUS,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  strokeColor = DEFAULT_STROKE_COLOR,
  fillColor = DEFAULT_CIRCLE_COLOR_FILL
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

function makeText(left, top, text) {
  return new fabric.Text(text, {
    left: left,
    top: top,
    textAlign: "center",
    fontSize: 15,
    selectable: false,
    hasControls: false,
  });
}

function makeLine(coords, strokeWidth = DEFAULT_STROKE_WIDTH) {
  return new fabric.Line(coords, {
    fill: "red",
    stroke: "red",
    strokeWidth: strokeWidth,
    selectable: false,
    evented: false,
  });
}

// LINEAS

canvas.add(
  //Linea de Q0 a Q3 
  makeLine([140, 45, 100, 100]),
  //Linea de Q0 a Q1
  makeLine([150, 40, 200, 100]),
  //semi circulo de Q1
  makeLine([200, 110, 250, 110]),
  makeLine([250, 110, 250, 90]),
  makeLine([250, 90, 200, 90]),
  //Linea de Q1 A Q3
  makeLine([200, 100, 100, 100]),
  //Linea de Q3 a Q4
  makeLine([85, 100, 85, 200]),
  //Linea de Q1 a Q2
  makeLine([185, 100, 185, 200]),
  //Linea de Q4 a Q3
  makeLine([115, 100, 115, 200]),
  //Linea de Q2 a Q1
  makeLine([215, 100, 215, 200])
);

// CIRCULOS
canvas.add(
  //Q0
  makeCircle(150, 30),
  // RELLENO DE Q3
  makeCircle(100, 100, 28),
  //Q3
  makeCircle(100, 100),
  // RELLENO DE Q1
  makeCircle(200, 100, 28),
  //Q1
  makeCircle(200, 100),
  //Q4
  makeCircle(100, 200),
  //Q2
  makeCircle(200, 200),

  //AÑADIENDO LOS PUNTOS
  makeCircle(120,72,5,0,"#fff","#00A"),
  makeCircle(178,73,5,0,"#fff","#00A"),
  makeCircle(230,90,5,0,"#fff","#00A"),
  makeCircle(215,185,5,0,"#fff","#00A"),
  makeCircle(185,130,5,0,"#fff","#00A"),
  makeCircle(115,185,5,0,"#fff","#00A"),
  makeCircle(85,130,5,0,"#fff","#00A"),
  makeCircle(135,100,5,0,"#fff","#00A"),

  makeCircle(250,30,5,0,"#fff","#00A")
);

//TEXTO
canvas.add(
  makeText(150, 30, "Q0"),
  makeText(100, 100, "Q3"),
  makeText(200, 100, "Q1"),
  makeText(100, 200, "Q4"),
  makeText(200, 200, "Q2"),
  makeText(300,30,"Dirección"),
  makeText(180,50,"b"),
  makeText(120,50,"b"),
  makeText(153,115,"b"),
  makeText(260,100,"b"),
  makeText(70,160,"a"),
  makeText(125,160,"b"),
  makeText(170,160,"a"),
  makeText(225,160,"a"),
  makeText(200,240,"Todos los derechos reservados a el grupo prplayers"),
);

