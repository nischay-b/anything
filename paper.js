class paper
{
    constructor(x,y,r,)
 {
    var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.x.x;
    this.y=y;
    this.r=r
    this.body=bodies.circule(this.x,this.y,this.r/2,Option)
    world.add(world,this.body)
}
display()
{
var paperpros=this.body.position;

push()
translate(paperpros.x,paperpros.y);
rectmode(centre)
strokeweight(3);
fill(255,0,255)
ellipse(0,0, this.r,this.r)
pop()
}

}