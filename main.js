const displayContent=(content)=>{
      calculatorScreen.value+=content
}
const clearAllContent=()=>{
    calculatorScreen.value=""
     calculatorScreen.placeholder="0"
}
const displayResult=()=>{

try{
 calculatorScreen.value=eval(calculatorScreen.value)
}
catch{
    calculatorScreen.value="error!!!!"
}
}
const removeLast=()=>{
    calculatorScreen.value=calculatorScreen.value.slice(0,-1)
}