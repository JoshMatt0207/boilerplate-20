class Ball{
    
    
    constructor(x,y,r){
        var opt={
        isStatic:false
        }
        this.r = r
        this.ball=Bodies.circle(x,y,r,opt);
        World.add(world, this.ball)

    }
    display(){
    ellipse(this.ball.position.x, this.ball.position.y , this.r, this.r)
    }




}