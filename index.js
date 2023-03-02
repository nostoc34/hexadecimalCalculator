var value1 = "";
var value2 = "";
var val1 = [];
var val2 = [];
var result = [];
var isLess;
var isEqual;

function handleChange(e) {
  value1 = document.getElementById("n1").value;
  value2 = document.getElementById("n2").value;
}

function handleClick(x) {
  arrange(value1, value2);
  if (x === "add") {
    add(val1, val2);
  } else if (x === "subtract") {
    subtract(val1, val2);
  } else if (x === "multiply") {
    multiply(val1, val2);
  }
}

function checkEqual(input1, input2) {
  let x = 0;
  if (input1[x] < input2[x]) {
    var temp = val1;
    input1 = input2;
    input2 = temp;
    isLess = true;
  } else if (input1[0] === input2[0]) {
    x++;
    checkEqual(input1, input2);
  }
}

function turnToHex() {
  for (var i = 0; i < result.length; i++) {
    switch (result[i]) {
      case 10:
        result.splice(i, 1, "a");
        break;
      case 11:
        result.splice(i, 1, "b");
        break;
      case 12:
        result.splice(i, 1, "c");
        break;
      case 13:
        result.splice(i, 1, "d");
        break;
      case 14:
        result.splice(i, 1, "e");
        break;
      case 15:
        result.splice(i, 1, "f");
        break;
    }
  }
}

function arrange(input1, input2) {
  if (value1[0] === "-" || value2[0] === "-") {
    alert("Please enter a positive number!");
  } else {
    if (input1.length < input2.length) {
      var temp = input1;
      input1 = input2;
      input2 = temp;
      isLess = true;
    } else if (input1.length === input2.length) {
      isEqual = true;
    }
    for (var i = 0; i < input1.length; i++) {
      val1.push(input1[i]);
    }

    for (var i = 0; i < input2.length; i++) {
      val2.push(input2[i]);
    }

    for (var i = 0; i < val1.length; i++) {
      switch (val1[i]) {
        case "a":
          val1.splice(i, 1, "10");
          break;
        case "b":
          val1.splice(i, 1, "11");
          break;
        case "c":
          val1.splice(i, 1, "12");
          break;
        case "d":
          val1.splice(i, 1, "13");
          break;
        case "e":
          val1.splice(i, 1, "14");
          break;
        case "f":
          val1.splice(i, 1, "15");
          break;
      }
    }

    for (var i = 0; i < val2.length; i++) {
      switch (val2[i]) {
        case "a":
          val2.splice(i, 1, "10");
          break;
        case "b":
          val2.splice(i, 1, "11");
          break;
        case "c":
          val2.splice(i, 1, "12");
          break;
        case "d":
          val2.splice(i, 1, "13");
          break;
        case "e":
          val2.splice(i, 1, "14");
          break;
        case "f":
          val2.splice(i, 1, "15");
          break;
      }
    }

    var diff = val1.length - val2.length;
    val1.reverse();
    val2.reverse();
    return val1, val2;
  }
}

function add(input1, input2) {
  for (var i = 0; i < input2.length; i++) {
    var total = parseInt(input1[i]) + parseInt(input2[i]);
    result.push(total);
  }

  for (var i = input2.length; i < input1.length; i++) {
    result.push(parseInt(input1[i]));
  }

  for (var i = 0; i < result.length - 1; i++) {
    if (result[i] > 15) {
      var temp = result[i] - 16;
      result.splice(i, 1, temp);
      result[i + 1]++;
    }
  }
  if (result[result.length - 1] > 15) {
    var temp = result[result.length - 1] - 16;
    result.splice(result.length - 1, 1, temp);
    result.push(1);
  }
  result.reverse();

  turnToHex();
  
  document.getElementById("sonuc").innerHTML = result.join("");

  val1 = [];
  val2 = [];
  result = [];
}

function subtract(input1, input2) {
  if (isEqual) {
    for (var i = 0; i < input1.length; i++) {
      input1.splice(i, 1, parseInt(input1[i]));
      input2.splice(i, 1, parseInt(input2[i]));
    }
    input1.reverse();
    input2.reverse();
    checkEqual(input1, input2);
    input1.reverse();
    input2.reverse();
  }

  for (var i = 0; i < input2.length; i++) {
    var total = parseInt(input1[i]) - parseInt(input2[i]);
    result.push(total);
  }

  for (var i = input2.length; i < input1.length; i++) {
    result.push(parseInt(input1[i]));
  }
  for (var i = 0; i < result.length; i++) {
    if (result[i] < 0) {
      var temp = result[i] + 16;
      result.splice(i, 1, temp);
      result[i + 1]--;
    }
  }
  result.reverse();
  turnToHex();
  
  if (isLess) {
    document.getElementById("sonuc").innerHTML = "-" + result.join("");
  } else {
    document.getElementById("sonuc").innerHTML = result.join("");
  }

  val1 = [];
  val2 = [];
  result = [];
}

function multiply(input1, input2) {
  var tempResult = [];
  var tempResult2 = [];
  if (input2.length === 1) {
    for (var i = 0; i < input1.length; i++) {
      var temp = parseInt(input1[i]) * parseInt(input2[0]);
      tempResult.push(temp);
    }

    for (var i = 0; i < tempResult.length; i++) {
      if (tempResult[i] === 16) {
        tempResult.splice(i, 1, 0);
        if (tempResult[i] === tempResult[tempResult.length - 1]) {
          tempResult.push(1);
        } else {
          tempResult[i + 1] += 1;
        }
      } else if (tempResult[i] > 16) {
        var dif = parseInt(tempResult[i] / 16);
        var rem = parseInt(tempResult[i] % 16);
        tempResult.splice(i, 1, rem);
        if (tempResult[i + 1] === tempResult[tempResult.length]) {
          tempResult.push(dif);
        } else {
          tempResult[i + 1] += dif;
        }
      }
    }
    
    result = tempResult.reverse();

  } else {
    for (var i = 0; i < input1.length; i++) {
      var temp2 = [];
      for (var j = 0; j < input2.length; j++) {
        var temp = parseInt(input1[i]) * parseInt(input2[j]);

        temp2.push(temp);
      }
      tempResult.push(temp2);
    }

    for (var i = 0; i < input1.length; i++) {
      for (var j = 0; j < input2.length; j++) {
        if (tempResult[i][j] === 16) {
          tempResult[i].splice(j, 1, 0);
          if (tempResult[i][j + 1] === tempResult[i][input2.length]) {
            tempResult[i].push(1);
          } else {
            tempResult[i][j + 1] += 1;
          }
        } else if (tempResult[i][j] > 16) {
          var dif = parseInt(tempResult[i][j] / 16);
          var rem = parseInt(tempResult[i][j] % 16);
          tempResult[i].splice(j, 1, rem);
          if (tempResult[i][j + 1] === tempResult[i][input2.length]) {
            tempResult[i].push(dif);
          } else {
            tempResult[i][j + 1] += dif;
          }
        }
      }
    }

    for (var i = 1; i < tempResult.length; i++) {
      let x = 1;
      while (x <= i) {
        tempResult[i].unshift(0);
        x++;
      }
    }

    function mAdd(arr1, arr2) {
      if (arr1.length < arr2.length) {
        var temp = arr1;
        arr1 = arr2;
        arr2 = temp;
      }
      for (var i = 0; i < arr2.length; i++) {
        var total = arr1[i] + arr2[i];
        tempResult2.push(total);
      }

      for (var i = arr2.length; i < arr1.length; i++) {
        tempResult2.push(arr1[i]);
      }

      for (var i = 0; i < tempResult2.length - 1; i++) {
        if (tempResult2[i] > 15) {
          var temp = tempResult2[i] - 16;
          tempResult2.splice(i, 1, temp);
          tempResult2[i + 1]++;
        }
      }
      if (tempResult2[tempResult2.length - 1] > 15) {
        var temp = tempResult2[tempResult2.length - 1] - 16;
        tempResult2.splice(tempResult2.length - 1, 1, temp);
        tempResult2.push(1);
      }
    }

    mAdd(tempResult[0], tempResult[1]);

    if (tempResult.length > 2) {
      for (var i = 2; i < tempResult.length; i++) {
        var temp = tempResult2;
        tempResult2 = [];
        mAdd(temp, tempResult[i]);
      }
    }
    result = tempResult2.reverse();
  }

  turnToHex();

  document.getElementById("sonuc").innerHTML = result.join("");

  val1 = [];
  val2 = [];
  result = [];
}
