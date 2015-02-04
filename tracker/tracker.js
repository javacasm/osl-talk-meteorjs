//
// Tracker, or Deps (as was called before),
// is a dependency tracking system which allows
// reactive code to come alive
//

var dep = { value: null };

var computation = Deps.autorun(function(){
  console.log(dep);
});

function compute(){
  dep.value = 'weird awesome thing';
}

//
// ivalidates previous
// value of computation
//
computation.invalidate();

compute();
