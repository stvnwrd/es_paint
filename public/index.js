
window.addEventListener('DOMContentLoaded', function(){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');

  let colour = 'black';
  const changeColour = function(colour){
    context.fillStyle = colour;
  }

  let size = 5;
  const changeSize = function(newSize){
    size = newSize;
  }



  canvas.addEventListener('click', function(event){
    if(event.y > 10 && event.y < 40 && event.x > 10 && event.x < 40){
      selected(10,10);

      changeColour("red");
    }
    else if (event.y > 10 && event.y < 40 && event.x > 45 && event.x < 75){
      selected(45,10);

      changeColour("blue");

    }
    else if (event.y > 10 && event.y < 40 && event.x > 80 && event.x < 110){
      selected(80,10);
      changeColour("green");


    }
    else if (event.y > 10 && event.y < 40 && event.x > 125 && event.x < 155){
      selected(125,10);
      changeSize(4);


    }
    else if (event.y > 10 && event.y < 40 && event.x > 160 && event.x < 190){
      selected(160,10);
      changeSize(8);


    }
    else if (event.y > 10 && event.y < 40 && event.x > 195 && event.x < 225){
      selected(195,10);
      changeSize(12);


    }


  })
  const drawLayout = function(){
    context.font = '48px serif';
    context.fillText('ES Paint!!!', 375, 40)
    context.lineWidth = 1;


    context.strokeRect(0, 0, 600, 50);

    // Colour Selector

    context.strokeRect(5, 5, 110, 40);

    context.fillStyle = "red";
    context.fillRect(10, 10, 30, 30);
    context.fillStyle = "blue";
    context.fillRect(45, 10, 30, 30);
    context.fillStyle = "green";
    context.fillRect(80, 10, 30, 30);


    // Brush sizes

    context.strokeRect(120, 5, 110, 40);

    context.strokeRect(125, 10, 30, 30);
    context.fillStyle = "black"
    context.beginPath();
    context.arc(140, 25, 4, 0, Math.PI *2, true);
    context.fill();

    context.strokeRect(160, 10, 30, 30);
    context.fillStyle = "black"
    context.beginPath();
    context.arc(175, 25, 8, 0, Math.PI *2, true);
    context.fill();


    context.strokeRect(195, 10, 30, 30);
    context.fillStyle = "black"
    context.beginPath();
    context.arc(210, 25, 12, 0, Math.PI *2, true);
    context.fill();



    // Stickers

    context.strokeRect(235, 5, 110, 40);

    context.strokeRect(240, 10, 30, 30);
    context.strokeRect(275, 10, 30, 30);
    context.strokeRect(310, 10, 30, 30);
  }

  drawLayout();

  const selected = function(x, y){
    context.clearRect(7, 7, 36, 36);
    context.clearRect(42, 7, 36, 36);
    context.clearRect(77, 7, 36, 36);
    context.clearRect(122, 7, 36, 36);
    context.clearRect(157, 7, 36, 36);
    context.clearRect(192, 7, 36, 36);

    context.lineWidth = 1;
    context.strokeStyle ="black";
    // changeColour("black");
    drawLayout();


    context.strokeStyle = "yellow";
    context.lineWidth = 3;
    context.strokeRect(x, y, 30, 30);
    context.strokeStyle = "black";

    context.lineWidth = 1;

  }


  const drawCircle = function(x, y, size){
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI*2, true);
    context.fill();
  }
  //
  // canvas.addEventListener('click', function(event){
  //   if(event.y > 60){
  //     drawCircle(event.x, event.y);
  //   }
  // });



  canvas.addEventListener('mousemove', function(event){
    if(event.y > 60){
      drawCircle(event.x, event.y, size);
    }
  });

})
