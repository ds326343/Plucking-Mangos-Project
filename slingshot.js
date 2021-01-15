class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    release(){
        this.sling.pointB = null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){

        if(this.sling.pointB!=null){
            strokeWeight(5)
            stroke("white");
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        }
    }
    
