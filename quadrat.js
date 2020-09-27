var t = 0;

class Quadrat { 

  //Atributs
  constructor(x, y, sizeX, sizeY, speed, xMax, yMax, r, g, b){
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.speed = speed;
    this.xMax = xMax;
    this.yMax = yMax;
    this.r = r;
    this.g = g;
    this.b = b;
  };
  
  //Moviment
  display() {
    //Moviment Y
    if(this.x != this.xMax){
          this.x += this.speed;
         
    } else if(this.y != this.yMax){
        this.y += this.speed;
    }
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.sizeX, this.sizeY);
     
  }
  
  
  

}