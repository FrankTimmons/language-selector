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

    if(cSharp === python){
      
      $("form#finalQuestion").submit(function(event) {
        event.preventDefault();
        const fq = $("input:radio[name=fq]:checked").val();

      });
    }else if(cSharp === swift){
      //final question2.show;
    }else if(swift === python){
      //final questtion3.show;
    }else if(cSharp === python && python === swift){
      //final questtion4.show;
    }

    if(cSharp > python && cSharp > swift){
      $("#cSharp").show();
    }else if(cSharp > python && cSharp > swift){
      $("#cSharp").show();
    }else if(python > cSharp && python > swift){
      $("#python").show();
    }
  });
});

function addAnswer(currentVal, answerVal) {
  return currentVal + answerVal;
}