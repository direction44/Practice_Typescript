function distanceFromOrigin(point:[number,number])
{
    let [x,y]=point;
    return Math.sqrt(x*x+y*y);
}
console.log(distanceFromOrigin([5,6]))
