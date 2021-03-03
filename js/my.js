$(function(){
  $('.book').click(function(){
    $('modal').addClass('Show');
  });
  $('.modal2__overlay').click(function(){
    $('#modal').removeClass('Show')
  })
})

// scroll UP button //
//var $btnTop = $(".btn-top")
$(window).scroll( function(){
  if($(window).scrollTop()>900){
  $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
$('.scrollup').click(function(){
  $("html,body").animate({scrollTop:0},600);
  return false;
});

      $(function(){

        load_settings();

        $('form#booking').submit(function(event){
          event.preventDefault();
          save_settings();
        });
      });

      function save_settings(){
        localStorage.setItem("name", $("#name").val());
        localStorage.setItem("email", $("#email").val());
        localStorage.setItem("date", $("#date").val());
         localStorage.setItem("time", $("#time").val());
         localStorage.setItem("numbers", $("#numbers").val());

        apply_preferences_to_page();
      }

      function apply_preferences_to_page(){
        $("body").css("name", $("#name").val());
        $("body").css("email", $("#email").val());
        $("body").css("date", $("#date").val());
        $("body").css("time", $("time").val());
        $("body").css("numbers", $("#numbers").val());
      }

      function load_settings(){
        var name = localStorage.getItem("name");
        var email = localStorage.getItem("email");
        var date = localStorage.getItem("date");
        var time= localStorage.getItem("time");
        var numbers = localStorage.getItem("numbers");

        $("#name").val(name);
        $("#email").val(email);
        $("#date").val(date);
        $("#time").val(time);
        $("#numbers").val(numbers);

        apply_preferences_to_page();
      }
      localStorage.clear();
