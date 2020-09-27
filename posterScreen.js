var aQuadrats = [];
var aQBlaus = [];
var aQSalmo = [];
var aQGroc = [];
var aQTaronja = [];
var margesX = [];   
var margesY = [];
var rand;
var temps = 0;
var aQCreats = [];

function poster_animation(){
  

    //background(220);

    //Quadrat fons
    fill(236,221,190);
    rect(0, 0, 450,600);
  
    //Marges X
    if(margesX.length == 0){
      margesX[0] = new Quadrat(-500, 0, 450, 17, 2, 0, 0, 11, 7, 6);
      margesX[1] = new Quadrat(600, 583, 450, 17, -2, 0, 583, 11, 7, 6);
    }

    
    //Marges Y
    if(margesY.length == 0){
      margesY[0] = new Quadrat(0, -650, 17, 600, 2, 0, 0, 11, 7, 6);
      margesY[1] = new Quadrat(433, 650, 17, 600, -2, 433, 0, 11, 7, 6);
    }

  
  image(imatge, 65, 490, 330, 70);
  
    
    //Formes blaves 
    if(aQBlaus.length == 0){
      aQBlaus[0] = new Quadrat(145, -100, 80, 80, 1, 145, 50, 80, 134, 168);
      aQBlaus[1] = new Quadrat(65, -100, 80, 80, 1, 65, 130, 80, 134, 168);
      aQBlaus[2] = new Quadrat(65, -100, 80, 80, 1, 65, 210, 80, 134, 168);  
    }
    
  
    
  
    //Formes salmó
    if(aQSalmo.length == 0){
       aQSalmo[0] = new Quadrat(145, 650, 80, 80, -1, 145, 210, 247, 211, 199); 
       aQSalmo[1] = new Quadrat(225, 650, 80, 80, -1, 225, 210, 247, 211, 199);
       aQSalmo[2] = new Quadrat(225, 650, 80, 80, -1, 225, 290, 247, 211, 199);
       aQSalmo[3] = new Quadrat(225, 650, 80, 80, -1, 225, 370, 247, 211, 199);
    }

    
  
    //Formes grogues
    if(aQGroc.length == 0){
        aQGroc[0] = new Quadrat(550, 50, 80, 80, -1, 225, 50, 244, 188, 103);
        aQGroc[1] = new Quadrat(550, 130, 80, 80, -1, 145, 130, 244, 188, 103);
        aQGroc[2] = new Quadrat(-100, 290, 80, 80, 1, 65, 290, 244, 188, 103);
        aQGroc[3] = new Quadrat(-100, 290, 80, 80, 1, 145, 290, 244, 188, 103);
        aQGroc[4] = new Quadrat(550, 290, 80, 80, -1, 305, 290, 244, 188, 103);
    }

    
  
    //Formes taronges
    if(aQTaronja.length == 0){
       aQTaronja[0] = new Quadrat(550, 50, 80, 80, -1, 305, 50, 242, 163, 130); 
       aQTaronja[1] = new Quadrat(-100, 370, 80, 80, 1, 145, 370, 242, 163, 130);
    }
  
    
  
    //Array d'arrays
    if(aQuadrats.length == 0 && aQCreats.length == 0){
       aQuadrats[0] = aQBlaus;
       aQuadrats[1] = aQGroc;
       aQuadrats[2] = aQSalmo;
       aQuadrats[3] = aQTaronja;
       aQuadrats[4] = margesX;
       aQuadrats[5] = margesY;
    }
  
    
    if(temps == 0 && aQuadrats.length != 0 || temps == 200 && aQuadrats.length != 0){
      rand = int(random(0,aQuadrats.length));
      for(let i=0; i<aQuadrats[rand].length; i++){
         aQuadrats[rand][i].display();   
      }
      temps = 0;
      aQCreats.push(aQuadrats[rand]);
      aQuadrats.splice(rand, 1);
    }
    temps++;
    console.log(temps);
    for(let i=0; i<aQCreats.length; i++){
        for(let j=0; j<aQCreats[i].length; j++){
           aQCreats[i][j].display();
        }
    }
    
     
  
}

function borrar(){
    aQBlaus.splice(0, aQBlaus.length);
    aQSalmo.splice(0, aQSalmo.length);
    aQGroc.splice(0, aQGroc.length);
    aQTaronja.splice(0, aQTaronja.length);
    margesX.splice(0, margesX.length);
    margesY.splice(0, margesY.length);
    aQuadrats.splice(0, aQuadrats.length);
    aQCreats.splice(0, aQCreats.length);
    temps=0;
}

    
    
    
    