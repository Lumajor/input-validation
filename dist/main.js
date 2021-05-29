(()=>{submitButton.addEventListener("click",(t=>{t.preventDefault(),0==e.invalidOptions.length?(errorContainer.style.display="block",errorMessageContainer.innerText="information correct. Way to go!",errorMessageContainer.style.color="green"):(e.invalidOptions.forEach((e=>{e.style.backgroundColor="red"})),errorContainer.style.display="block",errorMessageContainer.innerText="Fix incorrect information to submit",errorMessageContainer.style.color="red")})),userInfo.addEventListener("keyup",(t=>{t.target.matches("#userEmail")&&e.checkEmailValidation(document.getElementById("userEmail")),t.target.matches("#userCountry")&&e.checkCountryValidation(document.getElementById("userCountry")),t.target.matches("#userZipCode")&&e.checkZipCodeValidation(document.getElementById("userZipCode")),t.target.matches("#userPassword")&&e.checkPasswordValidation(document.getElementById("userPassword")),t.target.matches("#userConfirmPassword")&&e.confirmPasswordValidation(document.getElementById("userConfirmPassword"))}));const e=(()=>{const e=document.getElementById("userEmail"),t=document.getElementById("userZipCode"),o=document.getElementById("userPassword"),r=document.getElementById("userConfirmPassword");let n=[e,t,o,r],a=[];const s=e=>{if(n.includes(e)||n.push(e),a.includes(e)){let t=a.indexOf(e);a.splice(t,1)}},i=e=>{if(a.includes(e)||a.push(e),n.includes(e)){let t=n.indexOf(e);n.splice(t,1)}},l=e=>{errorContainer.style.display="none",e.style.backgroundColor="green",e.style.color="white"},d=(e,t)=>{errorContainer.style.display="block",errorMessageContainer.innerText=e,t.style.backgroundColor="red",t.style.color="white"};return{checkEmailValidation:e=>{e.validity.typeMismatch?(d("Email formatted incorrectly",e),s(e)):(l(e),i(e))},checkCountryValidation:e=>{e.validity.rangeUnderflow?(d("not enough characters",e),s(e)):e.validity.rangeOverflow?(d("too many characters",e),s(e)):(l(e),i(e))},checkZipCodeValidation:e=>{e.value.length<5?(d("not enough characters",e),s(e)):(l(e),i(e))},checkPasswordValidation:e=>{console.log("password key pressed"),e.value.length<8?(d("Password Too Short",e),s(e)):e.value!=r.value?(d("Passwords don't match",e),d("passwords don't match",r),s(e)):(l(e),l(r),i(e),i(o))},confirmPasswordValidation:e=>{e.value.length<8?(d("Password Too Short",e),s(e)):e.value!=o.value?(d("Passwords don't match",e),s(e)):e.value==o.value&&(l(e),l(o),i(e),i(o))},invalidOptions:n,validOptions:a}})()})();