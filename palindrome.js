const input = document.getElementById("input");
const check = document.getElementById("check");
const result = document.getElementById("result");

//disable check button onload
check.disabled = true;

check.addEventListener("click", function() {
  let str = input.value;
 
  //remove whitespace from str
  str = str.replace(/\s+/g, "");
  
  //change str to Lowercase
  str = str.toLowerCase();
  
  //reversed str
  let reversedValue = str.split('').reverse().join('');
  
  //Palindrome check
  if (str === reversedValue) {
      result.style.color = 'green';
      result.innerText = `"${input.value}" is Palindrome!`;
  }else{
      result.style.color = 'red';
      result.innerText = `"${input.value}" is not Palindrome!`;
  }
  
});

//disable check button when input is empty
input.addEventListener("input", function() {
    if(!input.value){
        result.innerText = '';
        check.disabled = true;
    }else {
        check.disabled = false;
    }
})
