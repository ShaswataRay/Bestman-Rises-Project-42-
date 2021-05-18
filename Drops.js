class Drops{
    constructor(x, y){
        var options={
            "restitution": 0.1,
            "frictionAir": 0.01,
        }

        this.rain = Bodies.circle(x, y, 5, options);
        this.r = 5;
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)});
        }
    }
    display(){
        var pos = this.rain.position;
        push();
        fill("blue");
        translate(pos.x, pos.y);
        rotate(this.rain.angle);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();

    }
}