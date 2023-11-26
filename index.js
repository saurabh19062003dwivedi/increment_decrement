const countValue = document.querySelector('#counter');
const increment = ()=> {
    // get the value from the UI
let value = parseInt( countValue.innerText);
// Update the vazlue 
value = value + 1 ;
// sedt the value onto UI
countValue.innerText = value ;



}
const decrement = ()=> {
   // get the value from the UI
let value = parseInt( countValue.innerText);
// Update the vazlue 
value = value - 1 ;
// sedt the value onto UI
countValue.innerText = value ;
    
}