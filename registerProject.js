var totalForm = 0;
var maxForm = 20;
var isFull = false;
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
    nav = $('.header_category'),

    pos = nav.offset().top,
    sticky = function(){
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky')
    }

    win.scroll(sticky)
});

function init(index){
  $(".service_form").append('    <div id="'+index+'" class="template">'+
        '<i class="fa fa-star fa-1x"></i>'+
        '<a>Service Name: </a></br> <input type="text" name="employee_name"'+
                                      'value="What service do you provide?"><br><br>'+
        '<i class="fa fa-sort-desc fa-1x"></i>'+
        '<a>Service Description: </a></br> <textarea name="start_greeting">Describe the service, please...</textarea><br><br>'+

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
              '<input class="small_textfield" type="size" name="start_img" value="0px">'+
            '</td>'+
            '<td>'+
              '<a>Button Position-Y: </a>'+
              '<input class="small_textfield" type="size" name="start_img" value="0px">'+
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
          '<a>Service Name: </a></br> <input type="text" name="employee_name"'+
                                        'value="What service do you provide?"><br><br>'+
          '<i class="fa fa-sort-desc fa-1x"></i>'+
          '<a>Service Description: </a></br> <textarea name="start_greeting">Describe the service, please...</textarea><br><br>'+

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
                '<input class="small_textfield" type="size" name="start_img" value="0px">'+
              '</td>'+
              '<td>'+
                '<a>Button Position-Y: </a>'+
                '<input class="small_textfield" type="size" name="start_img" value="0px">'+
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
          $('#bg_img')
              .attr('src', e.target.result)
              // .width(850);
              // .height(200);
      };
      document.getElementById("canvas").style.content = input.files[0];

      reader.readAsDataURL(input.files[0]);
  }
}
