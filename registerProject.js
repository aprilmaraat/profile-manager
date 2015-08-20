var totalForm = 0;
var maxForm = 20;
var isFull = false;
var currentZoom = 1.0;
// var index = 1;

$(document).ready(function() {
  var index = 1;
  // var totalForm = 0;

  //Initalize
  init(index);
  index++;
  setTotalValue(totalForm);

  //REMOVE ALL BUTTON
  $("#remove_all_service").click(function(){
    $(".template").remove();
    totalForm = 0;
    setTotalValue(totalForm);
    isFull = false;
    enableAdd();
    alert("Delete All");
  });

  //ADD SERVICE FROM
  $("#add_service").click(function(){
      appendForm(index);
      index++;
      setTotalValue(totalForm);
  });

  //STICKY
    var win = $(window),
    nav = $('#sticky_serivce_category'),
    pos = nav.offset().top,
    sticky = function(){
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky')
    }

    win.scroll(sticky);

    //ZOOM IN
    $("#zoomInButton").click(
      function(){
        $('#canvas').animate({'zoom':currentZoom += .3},'slow');
      });
    //ZOOM OUT
    $("#zoomOutButton").click(
      function(){
        $('#canvas').animate({'zoom':currentZoom -= .3},'slow');
      });
    //NORMAL ZOOM
    $("#normalZoomButton").click(
      function(){
        currentZoom = 1.0;
        $('#canvas').animate({'zoom': 1 },'slow');
      });

    //HOVER TOOLTIP

    //Hover zoom in & text change
    $("#zoomInButton").hover(
      function(){
          document.getElementById("toolTip").innerHTML = "Zoom-In";
          $('#toolTip').css({'opacity': 1 },'slow');
          $('#zoomInButton').css({'color': "#FF6666" },'slow');
          $('#zoomOutButton').css({'color': "lightgray" },'slow');
          $('#normalZoomButton').css({'color': "lightgray" },'slow');
      },
      function(){
          $('#toolTip').css({'opacity': 0 },'slow');
          $('#zoomInButton').css({'color': "#3399FF" },'slow');
          $('#zoomOutButton').css({'color': "#3399FF" },'slow');
          $('#normalZoomButton').css({'color': "#3399FF" },'slow');
      }
    );

    //Hover zoom out & text change
    $("#zoomOutButton").hover(
      function(){
          document.getElementById("toolTip").innerHTML = "Zoom-Out";
          $('#toolTip').css({'opacity': 1 },'slow');
          $('#zoomInButton').css({'color': "lightgray" },'slow');
          $('#zoomOutButton').css({'color': "#FF6666" },'slow');
          $('#normalZoomButton').css({'color': "lightgray" },'slow');
      },
      function(){
          $('#toolTip').css({'opacity': 0 },'slow');
          $('#zoomInButton').css({'color': "#3399FF" },'slow');
          $('#zoomOutButton').css({'color': "#3399FF" },'slow');
          $('#normalZoomButton').css({'color': "#3399FF" },'slow');
      }
    );

    //Hover normal zoom & text change
    $("#normalZoomButton").hover(
      function(){
          document.getElementById("toolTip").innerHTML = "Default View";
          $('#toolTip').css({'opacity': 1 },'slow');
          $('#zoomInButton').css({'color': "lightgray" },'slow');
          $('#zoomOutButton').css({'color': "lightgray" },'slow');
          $('#normalZoomButton').css({'color': "#FF6666" },'slow');
      },
      function(){
          $('#toolTip').css({'opacity': 0 },'slow');
          $('#zoomInButton').css({'color': "#3399FF" },'slow');
          $('#zoomOutButton').css({'color': "#3399FF" },'slow');
          $('#normalZoomButton').css({'color': "#3399FF" },'slow');
      }
    );

    //Dragging
    $(function() {
        $( "#draggable" ).draggable({ snap: true });
        $( "#draggable2" ).draggable({ snap: true });
        $( "#draggable3" ).draggable({ snap: true });
    });
});

function init(index){
  $(".service_form").append('    <div id="'+index+'" class="template">'+
        '<i class="fa fa-star fa-1x"></i>'+
        '<a>Service Name: </a></br> <input onclick="this.select();" type="text" name="employee_name"'+
                                      'placeholder="What service do you provide?"><br><br>'+
        '<i class="fa fa-sort-desc fa-1x"></i>'+
        '<a>Service Description: </a></br> <textarea onclick="this.select();" name="start_greeting">Describe the service, please...</textarea><br><br>'+

        '<table class="template_elem">'+
          '<tr>'+
            '<td>'+
              '<a>Button Image</a>'+
              '<input type="file" name="start_img">'+
            '</td>'+
            '<td>'+
              '<a>Table Image</a>'+
              '<input type="file" name="start_img">'+
            '</td>'+
          '</tr>'+
          '<tr>'+
            '<td>'+
              '<a>Button Position-X: </a>'+
              '<input onclick="this.select();" class="small_textfield" type="size" name="start_img" placeholder="0px">'+
            '</td>'+
            '<td>'+
              '<a>Button Position-Y: </a>'+
              '<input onclick="this.select();" class="small_textfield" type="size" name="start_img" placeholder="0px">'+
            '</td>'+
          '</tr>'+
        '</table>'+
          '<i onClick="getId();" class="fa fa-times"></i>'+
      '</div>');

    totalForm++;
}

function getId(){
  var id = "#"+event.target.parentNode.id;
  totalForm--;
  setTotalValue(totalForm);
  $(id).remove();
  isFull = false;
  enableAdd();
}

function appendForm(index){
  var tempTotal = totalForm;
  tempTotal += 1;

  if(tempTotal <= maxForm){
    $(".service_form").append('    <div id="'+index+'" class="template">'+
          '<i class="fa fa-star fa-1x"></i>'+
          '<a>Service Name: </a></br> <input onclick="this.select();" type="text" name="employee_name"'+
                                        'placeholder="What service do you provide?"><br><br>'+
          '<i class="fa fa-sort-desc fa-1x"></i>'+
          '<a>Service Description: </a></br> <textarea onclick="this.select();" name="start_greeting">Describe the service, please...</textarea><br><br>'+

          '<table class="template_elem">'+
            '<tr>'+
              '<td>'+
                '<a>Button Image</a>'+
                '<input type="file" name="start_img">'+
              '</td>'+
              '<td>'+
                '<a>Table Image</a>'+
                '<input type="file" name="start_img">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td>'+
                '<a>Button Position-X: </a>'+
                '<input onclick="this.select();" class="small_textfield" type="size" name="start_img" placeholder="0px">'+
              '</td>'+
              '<td>'+
                '<a>Button Position-Y: </a>'+
                '<input onclick="this.select();" class="small_textfield" type="size" name="start_img" placeholder="0px">'+
              '</td>'+
            '</tr>'+
          '</table>'+
            '<i onClick="getId();" class="fa fa-times"></i>'+
        '</div>');
      autoScroll(index);
      totalForm++;
    }

    if(totalForm >= maxForm){
      // isFull = true;
      disableAdd();
    }
}

//If disabled
function disableAdd(){
    $('#add_service').removeClass('enabled');
    $('#add_service').addClass('disabled');
}

//If enabled
function enableAdd(){
  $('#add_service').addClass('enabled');
  $('#add_service').removeClass('disabled');
}

//Set Total Value in HTML
function setTotalValue(){
  document.getElementById("totalFormHtml").innerHTML = "("+totalForm+")";

  (totalForm <= 0) ?  document.getElementById("service_counter").innerHTML = "-Empty-" :
                      document.getElementById("service_counter").innerHTML = totalForm+"-"+maxForm;
}

function autoScroll(index){
  // $("html, body").animate({ scrollTop: $("#service_counter").offset().top }, "slow");
  $("html, body").animate({ scrollTop: $("#"+index).offset().top - 300 }, "slow");
}

function changeBgImage(input){
  // document.getElementById("canvas").style.background = "red";
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#canvas').css("background-image","url("+e.target.result+")");
      };

      // alert(input.files[0]);
      // document.getElementById("canvas").style.content = input.files[0];
      // document.getElementById("canvas").style.color = red;

      reader.readAsDataURL(input.files[0]);
  }
}

function canvasImage(input){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var imageObj = new Image();

  // context.globalCompositeOperation='destination-over'; //DRAW BEHIND

  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
  };

  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#canvas').css("background-repeat","no-repeat"); //No Repeat
          $('#canvas').css("background-position","center");
          // $('#canvas').css("background-size","100% 100%"); //FILL IMAGE
          // $('#canvas').css("background-size","100%"); //FILL IMAGE
          $('#canvas').css("background-image","url("+e.target.result +")");
      };
      reader.readAsDataURL(input.files[0]);
  }

  // imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
  // imageObj.src = 'default_bg1.png';
}

function disableCursor(){

}
