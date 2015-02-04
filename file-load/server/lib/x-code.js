//
// All the code here runs after main.js
//
Path = function(){
  var site = new Error().stack.match(/at[ ]+.*/g)[2];
  console.log(site.replace(/.*(app|localhost\:3000)\//,'/'));
};

Path();
