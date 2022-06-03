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
    
    console.log(swift);
    console.log(python);
    console.log(cSharp);
  });
});