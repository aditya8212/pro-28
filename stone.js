class STONE{
constructor(){

   var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2

    }

    this.stone = Bodies.rectangle(50,510,50,50,options);
    this.width = 50;
    this.height = 50;

    this.image = loadImage("stone.png");
    World.add(world,this.stone);


}

display(){
    var ha =  this.stone.position

    imageMode(CENTER);
    image(this.image,ha.x,ha.y,this.width,this.height);

}



}