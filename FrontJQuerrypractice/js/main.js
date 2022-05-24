$(document).ready(function(){
    // $("p").click(function(){
    //     $(this).hide();
    //   });

    $("p").dblclick(function(){
        $(this).hide();
      });

      $("p").mouseenter(function(){
        alert("You entered p1!");
      });

      $("p").mouseleave(function(){
        alert("Bye! You now leave p1!");
      });

      $("p").mousedown(function(){
        alert("Mouse down over p1!");
      });

      $("p").mouseup(function(){
        alert("Mouse up over p1!");
      });


      $("p").hover(function(){
        alert("You entered p1!");
      },
      function(){
        alert("Bye! You now leave p1!");
      });

//input
      $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
      });

      $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
      });


      $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });


      $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
      });


      $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
      });


      $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
      });



      $("#flip").click(function(){
        $("#panel").slideDown("slow");
      });

      $("button").click(function(){
        $("div").animate({left: '250px'});
      });

      $("button").click(function(){
        $("p").hide("slow", function(){
          alert("The paragraph is now hidden");
        });
      });

      $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
      });
      $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
      });   


      $("#btn1").click(function(){
        alert("Value: " + $("#test").val());
      });


      $("#btn1").click(function(){
        $("#test1").text("Hello world!");
      });
      $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
      });
      $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
      });



      $("p").append("Some appended text.");

      $("p").prepend("Some prepended text.");


      $("#div1").remove();

      $("#div1").empty();
      
      $("p").css("background-color", "yellow");






})