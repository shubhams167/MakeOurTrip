function incrementTravellers(){
  document.getElementById("travellersnum").style.visibility = "visible";
  var x = parseInt(document.getElementById("travellersnum").value);
  if(x > 3){
    alert("Oops. Currently we only support upto 4 tourists!");
  }
  else{
    document.getElementById("travellersnum").value = x+1;
  }
}

function decrementTravellers(){
  document.getElementById("travellersnum").style.visibility = "visible";
  var x = parseInt(document.getElementById("travellersnum").value);
  if(x < 1){
    alert("There must be some tourists! Right?");
  }
  else{
    document.getElementById("travellersnum").value = x-1;
  }
}

function setSource1City1(){
  document.getElementById("source1").style.visibility = "visible";
  var x = document.getElementById("s1c1").text;
  document.getElementById("source1").value = x;
}

function setSource1City2(){
  document.getElementById("source1").style.visibility = "visible";
  var x = document.getElementById("s1c2").text;
  document.getElementById("source1").value = x;
}

function setSource1City3(){
  document.getElementById("source1").style.visibility = "visible";
  var x = document.getElementById("s1c3").text;
  document.getElementById("source1").value = x;
}

function setSource1City4(){
  document.getElementById("source1").style.visibility = "visible";
  var x = document.getElementById("s1c4").text;
  document.getElementById("source1").value = x;
}

function setSource2City1(){
  document.getElementById("source2").style.visibility = "visible";
  var x = document.getElementById("s2c1").text;
  document.getElementById("source2").value = x;
}

function setSource2City2(){
  document.getElementById("source2").style.visibility = "visible";
  var x = document.getElementById("s2c2").text;
  document.getElementById("source2").value = x;
}

function setSource2City3(){
  document.getElementById("source2").style.visibility = "visible";
  var x = document.getElementById("s2c3").text;
  document.getElementById("source2").value = x;
}

function setSource2City4(){
  document.getElementById("source2").style.visibility = "visible";
  var x = document.getElementById("s2c4").text;
  document.getElementById("source2").value = x;
}

function setSource3City1(){
  document.getElementById("source3").style.visibility = "visible";
  var x = document.getElementById("s3c1").text;
  document.getElementById("source3").value = x;
}

function setSource3City2(){
  document.getElementById("source3").style.visibility = "visible";
  var x = document.getElementById("s3c2").text;
  document.getElementById("source3").value = x;
}

function setSource3City3(){
  document.getElementById("source3").style.visibility = "visible";
  var x = document.getElementById("s3c3").text;
  document.getElementById("source3").value = x;
}

function setSource3City4(){
  document.getElementById("source3").style.visibility = "visible";
  var x = document.getElementById("s3c4").text;
  document.getElementById("source3").value = x;
}

function setSource4City1(){
  document.getElementById("source4").style.visibility = "visible";
  var x = document.getElementById("s4c1").text;
  document.getElementById("source4").value = x;
}

function setSource4City2(){
  document.getElementById("source4").style.visibility = "visible";
  var x = document.getElementById("s4c2").text;
  document.getElementById("source4").value = x;
}

function setSource4City3(){
  document.getElementById("source4").style.visibility = "visible";
  var x = document.getElementById("s4c3").text;
  document.getElementById("source4").value = x;
}

function setSource4City4(){
  document.getElementById("source4").style.visibility = "visible";
  var x = document.getElementById("s4c4").text;
  document.getElementById("source4").value = x;
}