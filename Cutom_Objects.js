class Point{
    constructor(x, y){
      this.x=x; 
      this.y=y; 
    }

    show(){
      console.log(this.x, this.y);
    }
  }
  // call constructor by class name to create custom object
  let point=new Point(3, 4);
  console.log(point)