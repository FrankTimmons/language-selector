$(document).ready(function() {
  $("form#languageSelector").submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    const q3 = parseInt($("input:radio[name=q3]:checked").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("input:radio[name=q5]:checked").val());
    
    let cSharp = 0;
    let swift = 0;
    let python = 0;

    if(q1 === "cSharp"){
      cSharp += 2;
    }else if(q1 === "swift"){
      swift += 2;
    }else if(q1 === "python"){
      python += 2;
    }
    if(q2 === "cSharp"){
      cSharp += 2;
    }else if(q2 === "swift"){
      swift += 2;
    }else if(q2 === "python"){
      python += 2;
    }

    cSharp = addAnswer(cSharp, q3);
    swift = addAnswer(swift, q4);
    python = addAnswer(python, q5);

    console.log(swift);
    console.log(python);
    console.log(cSharp);

    if(cSharp === python && python === swift){
      finalQuestion()
    }else if(cSharp === swift){
      finalQuestion("#pythonFinal")
    }else if(swift === python){
      finalQuestion("#cSharpFinal")
    }else if(cSharp === python){
      finalQuestion("#swiftFinal")
    }

    if(cSharp > python && cSharp > swift){
      $("#cSharp").show();
    }else if(swift > cSharp && swift > python){
      $("#swift").show();
    }else if(python > cSharp && python > swift){
      $("#python").show();
    }
  });
});

function addAnswer(currentVal, answerVal) {
  return currentVal + answerVal;
}

function finalQuestion(hideQuestion) {
  $("#finalQuestion").show();
      $(hideQuestion).hide();
      $("form#languageSelector").submit(function(event) {
        event.preventDefault();
        const finalAnswer = $("input:radio[name=finalQuestion]:checked").val();
        if(finalAnswer === "cSharp"){
          $("#cSharp").show();
          $("#python").hide();
          $("#swift").hide();
        }else if(finalAnswer === "python"){
          $("#python").show();
          $("#cSharp").hide();
          $("#swift").hide();
        }else if(finalAnswer === "swift"){
          $("#swift").show();
          $("#python").hide();
          $("#cSharp").hide();
        }
      });
}