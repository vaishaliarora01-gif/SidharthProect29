class Polygon{



constructor(x,y,w,h)
{

 this.body=Bodies.rectangle(x,y,w,h);
 World.add(world,this.body);
 this.w=w;
 this.h=h;
 this.image=loadImage("polygon.png")
};



display()
{
  var pos=this.body.position
  push()
   imageMode(CENTER)
   image(this.image,pos.x,pos.y,this.w,this.h)
   
  pop()
}


}