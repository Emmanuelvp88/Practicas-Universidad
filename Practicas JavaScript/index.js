/* function fruta(){
    var f = document.getElementById("frutas").value;
    document.getElementById("pf").innerHTML = "la fruta es: " + f;
} */

class Cake {
  constructor(lyr) {
    this.layers = lyr + 1;
  }
}

var result = new Cake(1);
console.log(result.layers);
