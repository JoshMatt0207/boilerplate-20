class Ground{
    
    
    constructor(x,y, w,h){
        var opt={
        isStatic:true
        }
        this.w = w;
        this.h = h;
        this.ground=Bodies.rectangle(x,y,w,h,opt);
        World.add(world, this.ground)

    }
    display(){
    rect(this.ground.position.x, this.ground.position.y , this.w, this.h)
    }




}