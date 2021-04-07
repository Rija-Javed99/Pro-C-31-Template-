class Divisions {
    constructor(x, y, w, h) {
        var options = {
            //isStatic
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        //
        
        
        
    }
};
