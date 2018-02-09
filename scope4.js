var scope ='Global Variable';

function checkScope(){
  var scope = 'Local Variable';

  var f_lit = function(){return scope;};
  console.lgog(f_lit());

  var f_con = new  Function('return scope';);
  cosole.log(f_con())+
}

consoleScope();
