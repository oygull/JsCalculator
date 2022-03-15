let addBtn = document.getElementById("addBtn");
let elComponents = document.getElementById("components");
let elOutput = document.getElementById("output");
let oneNum = document.getElementById("oneNum");
let twoNum = document.getElementById("twoNum");
let threeNum = document.getElementById("threeNum");
let fourNum = document.getElementById("fourNum");
let fifeNum = document.getElementById("fifeNum");
let sixNum = document.getElementById("sixNum");
let sevenNum = document.getElementById("sevenNum");
let eightNum = document.getElementById("eightNum");
let nineNum = document.getElementById("nineNum");
let zeroNum = document.getElementById("zeroNum");
let elPlus = document.getElementById("plus");
let elMultiply = document.getElementById("multiply");
let elMinus = document.getElementById("minus");
let elDevide = document.getElementById("devide");
let elResult = document.getElementById("result");
let elDot = document.getElementById("dot");
let elDelete = document.getElementById("deleteAll");
let elDeleteOne = document.getElementById("deleteOne");
let elPi= document.getElementById("pi");
let elBracket1= document.getElementById("bracket1");
let elBracket2= document.getElementById("bracket2");
let elRoot= document.getElementById("root");
let elLog= document.getElementById("log");
let elSin= document.getElementById("sin");
let elCos= document.getElementById("cos");
let elTan= document.getElementById("tan");
let elPercent= document.getElementById("percent");
let elE= document.getElementById("eNum");
let elPower= document.getElementById("power");
let elFactorial= document.getElementById("factorial");

addBtn.addEventListener("click", ()=>{
  elComponents.classList.toggle("show");
  addBtn.classList.toggle("move-button")
})
elRoot.addEventListener("click", ()=>{
  elOutput.innerHTML=Math.sqrt(elOutput.innerHTML);
})
elLog.addEventListener("click",()=>{
  elOutput.innerHTML = Math.log(elOutput.innerHTML);
})
elSin.addEventListener("click", ()=>{
  elOutput.innerHTML = Math.sin(elOutput.innerHTML)
})
elCos.addEventListener("click", ()=>{
  elOutput.innerHTML = Math.cos(elOutput.innerHTML)
})
elTan.addEventListener("click", ()=>{
  elOutput.innerHTML = Math.tan(elOutput.innerHTML)
})
// elPercent.addEventListener("click",()=>{
//   elOutput = elOutput.innerHTML/100;
// })
elPower.addEventListener("click", ()=>{
  elOutput.innerHTML = Math.pow(elOutput.innerHTML,2)
})
elFactorial.addEventListener("click",()=>{
  let temp = 1;
  for(let i=1; i<=elOutput.innerHTML; i++){
    temp*=i;
  }
  elOutput.innerHTML= temp;
} )

oneNum.addEventListener("click",getNum)
twoNum.addEventListener("click",getNum)
threeNum.addEventListener("click",getNum)
fourNum.addEventListener("click",getNum);
fifeNum.addEventListener("click",getNum);
sixNum.addEventListener("click",getNum);
sevenNum.addEventListener("click",getNum);
eightNum.addEventListener("click",getNum);
nineNum.addEventListener("click",getNum);
zeroNum.addEventListener("click",getNum)
elPlus.addEventListener("click",getNum);
elMultiply.addEventListener("click",getNum);
elDevide.addEventListener("click",getNum);
elMinus.addEventListener("click",getNum);
elDot.addEventListener("click",getNum);
elBracket1.addEventListener("click", getNum);
elBracket2.addEventListener("click", getNum);
elE.addEventListener("click", getNum);


function getNum(e){
  elOutput.textContent+=e.target.value
}
elResult.addEventListener("click",getResult);

function getResult(){
let output=(eval(elOutput.innerHTML));
elOutput.textContent=output;
}

elDelete.addEventListener("click",()=>{
  elOutput.textContent="";
})

elDeleteOne.addEventListener("click", ()=>{
  let num = elOutput.innerHTML.split('').pop()
  if(num=='-' || num=='+' || num=='/' || num=='*'){
    elOutput.innerHTML= "";
  }
  else if(elOutput.innerHTML<1){
    elOutput.innerHTML= "";
  }
  else if(elOutput.innerHTML>1){
    elOutput.innerHTML = (elOutput.innerHTML-num)/10;
  }
})
 elPi.addEventListener("click", getNum)