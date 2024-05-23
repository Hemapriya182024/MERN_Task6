class circle{
    constructor(radius=1.0,color="red"){
        this.radius=radius;
        this.color=color;

    }
    get getRadius()
    {
       return this.radius; 
    }   
    set setRadius(radius)
    {
        this.radius=radius;

    }
    get getColor()
    {
        return this.color;
    }
    set setColor(color)
    {
        this.color=color;
    }
    toString()
    {
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    get getArea()
    {
        return 3.14*(this.radius*this.radius);
    }
    get getCircumference(){
        return 2*3.14*this.radius;
    }
}
const MyCircle=new circle();
console.log(MyCircle.getRadius);
console.log(MyCircle)
console.log(MyCircle.getColor);
console.log(MyCircle.toString());
console.log(MyCircle.getArea);
console.log(MyCircle.getCircumference)


