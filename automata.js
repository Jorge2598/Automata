function pintar() {
    var canvas = new fabric.Canvas('c', { 
        
        selection: false 
    });
    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
  
    function makeCircle(left, top) {
      var c = new fabric.Circle({
        left: left,
        top: top,
        strokeWidth: 5,
        radius: 50,
        fill: '#fff',
        stroke: '#666',
        selectable: false
      });
      c.hasControls = c.hasBorders = false;
  
      return c;
    }
    
    function makeText(left, top, text){
        return new fabric.Text(text, {
            left: left,
            top: top,
            textAlign: "center",
            fontSize: 15,
            selectable: false,
            hasControls: false
        })
    }

    function makeLine(coords) {
      return new fabric.Line(coords, {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 5,
        selectable: false,
        evented: false,
      });
    }
  
    canvas.add( 
      makeCircle(250, 20)
    );

    /*
    var line = makeLine([ 250, 125, 250, 175 ]),
        line2 = makeLine([ 250, 175, 250, 250 ]),
        line3 = makeLine([ 250, 250, 300, 350]),
        line4 = makeLine([ 250, 250, 200, 350]),
        line5 = makeLine([ 250, 175, 175, 225 ]),
        line6 = makeLine([ 250, 175, 325, 225 ]);
  
    canvas.add(line, line2, line3, line4, line5, line6);
    
    canvas.add( 
        makeText(10,10)
    );
    */
  };
  pintar();
