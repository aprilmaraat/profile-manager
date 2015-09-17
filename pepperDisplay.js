$(document).ready(function() {
  setBackground("g-angle_demopicture.jpg");
  $.ajax({
    url: "pepperDisplay.php",
    data: "ProjectId=" + "d8b7c6ff-0921-25d8-4cdd-94d382ae5f83", // Use this when passing ProjectId variable is implemented
    type: "POST",
    dataType: 'json',
    success: function(data){
      var serviceCount = data.length; //Number of services in the database
      for(var ctr = 0; ctr < serviceCount; ctr++){
        createButtons(ctr, data[ctr].x, data[ctr].y, data[ctr].name, data[ctr].displayFlag);
        //createButtons(INDEX,X-POS,Y-POS,SERVICE-NAME);
      }
    }
  });

});// end of $(document).ready(function() {

function setBackground(path){
  var p = path.replace(/\s/g, "");

  if(p.length > 0){
    document.getElementById("canvas").style.backgroundColor = "#858585";
    $('#canvas').css("background-image","url("+p+")");
  }
  else{
    document.getElementById("canvas").style.backgroundColor = "#E6E6E6";
  }
}

function createButtons(index, yPos, xPos ,name, isDisplay){
  $("#canvas").append('<div id="button_'+index+'" class="buttons" style="top:'+xPos+'; left:'+yPos+';">'+name+'</div>');
  if(isDisplay == 0){
    document.getElementById("button_"+index).style.display = 'none';
  }
}
