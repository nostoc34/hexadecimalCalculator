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

function checkEqual() {
  let x = 0;
  if (val1[x] < val2[x]) {
    var temp = val1;
    val1 = val2;
    val2 = temp;
    isLess = true;
  } else if (val1[0] === val2[0]) {
    x++;
    checkEqual();
  }
}

function arrange() {
  if (value1.length < value2.length) {
    var temp = value1;
    value1 = value2;
    value2 = temp;
    isLess = true;
  } else if (value1.length === value2.length) {
    isEqual = true;
  }
  for (var i = 0; i < value1.length; i++) {
    val1.push(value1[i]);
  }

  for (var i = 0; i < value2.length; i++) {
    val2.push(value2[i]);
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
}

function add() {
  arrange();

  for (var i = 0; i < val2.length; i++) {
    var total = parseInt(val1[i]) + parseInt(val2[i]);
    result.push(total);
  }

  for (var i = val2.length; i < val1.length; i++) {
    result.push(parseInt(val1[i]));
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
  document.getElementById("sonuc").innerHTML = result.join("");

  val1 = [];
  val2 = [];
  result = [];
}

function subtract() {
  arrange();

  if (isEqual) {
    for (var i = 0; i < val1.length; i++) {
      val1.splice(i, 1, parseInt(val1[i]));
      val2.splice(i, 1, parseInt(val2[i]));
    }
    val1.reverse();
    val2.reverse();
    checkEqual();
    val1.reverse();
    val2.reverse();

  }

  for (var i = 0; i < val2.length; i++) {
    var total = parseInt(val1[i]) - parseInt(val2[i]);
    result.push(total);
  }

  for (var i = val2.length; i < val1.length; i++) {
    result.push(parseInt(val1[i]));
  }
  for (var i = 0; i < result.length; i++) {
    if (result[i] < 0) {
      var temp = result[i] + 16;
      result.splice(i, 1, temp);
      result[i + 1]--;
    }
  }
  result.reverse();
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
  if (isLess) {
    document.getElementById("sonuc").innerHTML = "-" + result.join("");
  } else {
    document.getElementById("sonuc").innerHTML = result.join("");
  }

  val1 = [];
  val2 = [];
  result = [];
}