class Enemy {
    constructor(x, y, width, height) {
      var options = {
         friction : 0.5,
         restitution : 0.1,
         density : 0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("enemy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      
  //    fill(255,0,0);
  //    strokeWeight(5)
  //    rect(0, 0, this.width, this.height);
  //    pop();
    }
  };