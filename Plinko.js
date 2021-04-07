class Plinko {
    constructor(x, y) {
        var options = {
            //set static, default restitution and no friction
            
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        
        
//display among push/pop
        
        
    }

};
