
$(document).ready(function(){
   
    $("#hide").click(function(){
      $("div").hide(1000);
    });
    $("#show").click(function(){
      $("div").show(1000);
    });
    $("#toggle").click(function(){
        $("div").toggle(1000);
      });
      $("#blue").click(function(){
         $("div").removeClass("red");
        $("div").addClass("blue");

      });
      $("#red").click(function(){
        $("div").removeClass("blue");
        $("div").addClass("red");
      });
  });

  // $(document).ready(function(){
//     $("#hide").click(function(){
//       $("div").hide(1000);
//     });
//     $("#show").click(function(){
//       $("div").show(1000);
//     });
//     $("#toggle").click(function(){
//         $("div").toggle(2000);
//       });
//       $("#blue").click(function(){
//         $("div").css("background","blue");
//       });
//       $("#red").click(function(){
//         $("div").css("background","red");
//       });
//   });
  

 







  
  
  