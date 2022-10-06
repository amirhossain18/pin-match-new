

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
   
    else{
        console.log('pin not 3 digit found', pin)
       return getPin();
    } 
}


function generatePin(){
       
    const random= Math.round(Math.random()*10000)
    return random;
}

document.getElementById("generate-pin-btn").addEventListener('click', function(){
    
    const result= getPin();
    const pinGeneraterField = document.getElementById('pin-generator-field');
    pinGeneraterField.value = result
})

document.getElementById('calculator').addEventListener('click', function(event){
 const number= event.target.innerText
 
 const tyepNymberField= document.getElementById('tyepd-numbers');
 const previousTypeNumber= tyepNymberField.value;
 if(isNaN(number)){
    if(number=== 'C'){
    tyepNymberField.value= '';
    }
 
 else if(number=== '<'){
   const digits = previousTypeNumber.split('');
   digits.pop();
   const remainingDigits = digits.join('');
   tyepNymberField.value= remainingDigits;

 }
}
  else{ 
    
    const NextTypeNumber= previousTypeNumber + number
    tyepNymberField.value=NextTypeNumber;
 }
})

document.getElementById('verify-pin').addEventListener('click', function(){
   const displayPinField= document.getElementById('pin-generator-field');
   const currentPin = displayPinField.value;
   const typeNumberField= document.getElementById('tyepd-numbers');
   const typeNumber= typeNumberField.value

   const pinSuccessMessege= document.getElementById('pin-success');
   const pinFailureMassege= document.getElementById('pin-failure');
   if(typeNumber=== currentPin){
  
    pinSuccessMessege.style.display= 'block'
    pinFailureMassege.style.display= 'none';
   }
   else{
 
    pinFailureMassege.style.display= 'block';
    pinSuccessMessege.style.display= 'none'
   }
})
 