class Mango{
    constructor(x,y,width,height,){
        var options = {
            isStatic : true,
            restitution : 0.2
        }
        this.body = Bodies.circle(x,y,height/2,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }

    display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}
}