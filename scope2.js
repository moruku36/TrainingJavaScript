scope = 'Global Variable';

function getvalue(){
  scope = 'Local Variable';
  return scope;
};

console.log(getValue());
console.log(scope);
