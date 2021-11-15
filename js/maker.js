export class Maker {
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
