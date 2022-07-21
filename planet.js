class planet0 {
    constructor(){
        this.pos = createVector(random(width),random(height));
        this.vel = createVector(0, 0);
        this.acc = createVector(0.1, 0.1);
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    show(){
        fill(300, 200, 300, 100);
        ellipse(this.pos.x, this.pos.y, 4);
    }
}

class planet {
    constructor(){
        // this.pos = createVector(random(width), random(height));
        this.pos = createVector(width/2, height/2);
        this.vel = createVector(0, 0);
        this.acc = p5.Vector.random2D().normalize();

        this.r = map(this.pos.x, 0, width, 255, 0);
        this.g = map(this.pos.y, 0, width, 0, 255);
        this.b = map(dist(width/2, height/2,
        this.pos.x, this.pos.y), 0, width/2, 0, 255);

        this.alpha = 30;
    }

    update(){

        var m = map(sin(frameCount * 1), -1, 1, 0.4, 0.6);
        this.acc.mult(m);

        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.r = map(this.pos.x, 0, width, 255, 0);
        this.g = map(this.pos.y, 0, width, 0, 255);
        this.b = map(dist(width/2, height/2,
        this.pos.x, this.pos.y), 0, width/2, 0, 255);

        if(dist(width/2, height/2, this.pos.x, this.pos.y) > 80){
            this.alpha -= 20;
        }
    }

    show(){
        noStroke();
        fill(this.r, this.g, this.b, this.alpha);
        ellipse(this.pos.x, this.pos.y, 5);
    }
}
