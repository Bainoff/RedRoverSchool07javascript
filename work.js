function stringy(size) {
    let str = "";
    let bool = false;
  for (let i = 0; i < size; i++){
    bool = !bool;
  str = str + +bool
  }
  return str
  }


  console.log(stringy(11))
  console.log(+true)
  console.log("ddr" + +true)