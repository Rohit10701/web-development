interface Point {
    x : number,
    y : number
  }
  const foo = (points : Point) => {
    return `${points.x}-${points.y}`
  }
  
  
  const data = {x : -1, y : 2, z : 2}
  console.log(foo(data))