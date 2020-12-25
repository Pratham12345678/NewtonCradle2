class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1.5,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, 50,options);
      this.radius = 50;
      this.image="sprites/th(2)";
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = 150;
      pos.y = 670;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("white");
      circle(0, 0, this.radius);
      pop();
    }
  };