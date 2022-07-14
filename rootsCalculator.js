/*
* Calculate roots
*/
function calculate() {
     var error_message = "";
     var a = document.getElementById("a").value;
     var b = document.getElementById("b").value;
     var c = document.getElementById("c").value;

     if(a === "" || ( a < 1 && a > -1 ) || a < -99 || a > 99){
         /*
          * checking validity of a
          */
          document.getElementById("a").style.borderColor = "red";
          error_message += 'Invalid entry for a, must be a non zero integer between -99 and +99\n';
     }
      if(b === "" || b < -99 || b > 99){
           /*
           * checking validity of b
           */
           document.getElementById("b").style.borderColor = "red";
           error_message += 'Invalid entry for b, must be an integer between -99 and +99\n';
      }
      if(c === "" || c < -99 || c > 99){
           /*
            * checking validity of c
            */
            document.getElementById("c").style.borderColor = "red";
            error_message += 'Invalid entry for c, must be an integer between -99 and +99\n';
      }

      var result= "";
      if(error_message === ""){

      var fourAC = 4 * a * c;
      var bSquare = b * b;
      var twoA = 2 * a;
      if(bSquare < fourAC){
          /*
           * imaginary roots
           */
           result = "Solution: x's roots are imaginary.";
      }
      else if(bSquare === fourAC) {
           /*
            * only one root
            */
        var first_root = (-b / (2 * a));
        result = "Solution: x = " + first_root;
    }
    else{
        /*
         * two roots
         */
        var first_root = ((-b + Math.sqrt(bSquare - fourAC))) / twoA;
        var second_root = ((-b - Math.sqrt(bSquare - fourAC))) / twoA;
        result = "Solution: x = " + first_root.toFixed(3) + ", x = " + second_root.toFixed(3);
    }
    /*
     * setting result
     */
     document.getElementById("result").innerHTML = result;
 }
 else{
     /*
      * invalid input
      */
      document.getElementById("result").innerHTML = "";
      alert(error_message);
  }
}

/*
 * Resetting border color of a to black
 */
 function resetBorderA() {
 document.getElementById("a").style.borderColor = "black";
}

/*
 * Resetting border color of b to black
 */
 function resetBorderB() {
     document.getElementById("b").style.borderColor = "black";
}

/*
 * Resetting border color of c to black
 */
 function resetBorderC() {
     document.getElementById("c").style.borderColor = "black";
}
