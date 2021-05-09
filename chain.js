
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01           
        }
        
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){
        
     
 
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);

        line(pointA.x,pointA.y,700,50);
      
               
    }
    
}