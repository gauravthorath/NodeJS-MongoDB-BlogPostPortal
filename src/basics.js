console.log(__dirname);
console.log(__filename);
//-------------------------------------
console.log("Hello");
//-------------------------------------
console.log(global);
//-------------------------------------
const int = setInterval(() => {
  console.log("tick");
}, 1000);
//-------------------------------------
setTimeout(() => {
  console.log("TimeOut");
  clearInterval(int);
}, 5000);
//-------------------------------------
