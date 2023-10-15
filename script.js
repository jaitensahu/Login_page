let username = document.querySelector("#username"),
  button1 = document.querySelector(".button1"),
  errorMsg = document.querySelector(".login-button p"),
  password = document.querySelector("#password"),
  button2 = document.querySelector(".button2"),
  userNameFlag = false,
  passwordFlag = false,
  areaForButton1 = document.querySelector(".login-button").clientWidth,
  buttonWidth = button1.clientWidth,
  notAbleToLogin = document.querySelector(".notAble");
button2.style.display = "none";

// MouseOver Event For catch me if you can button
button1.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (!(userNameFlag && passwordFlag)) {
    notAbleToLogin.innerText =
      "You will not be able to login until you pass all validation";
    notAbleToLogin.style.color = "red";
    setTimeout(() => {
      notAbleToLogin.innerText = "";
    }, "3000");
    button1.classList.toggle("catchMe");
    // button1.style.transition="2s ease-in;"
  }
});

// Function to Check Numbers
function containsNumbers(str) {
  return /[0-9]/.test(str);
}
// Function to Check Special Characters
function containsSpecial(str) {
  return /[*,&,$,#,-,@]/.test(str);
}
// Input Event For Capturing Username In Real Time
username.addEventListener("input", () => {
    userNameFlag = false;
    username.style.outline=" 2px solid red"
  button2.style.display = "none";
  button1.style.display = "block";
  let name = username.value;
  if (name.length < 8) {
    errorMsg.innerText = "Username length should be greater than 7";
    return false;
  }
  if (name[0] != name[0].toUpperCase()) {
    errorMsg.innerText = "Username should starts with capital letter";
    return false;
  }
  if (name[0] >= 0 && name[0] <= 9) {
    errorMsg.innerText = "Username should starts with a alphabet";
    return false;
  }
  if (!containsNumbers(name)) {
    errorMsg.innerText = "Username should contain atleast one number";
    return false;
  }
  if (!containsSpecial(name)) {
    errorMsg.innerText =
      "Username should contain atleast one special charcter(*,&,$,#,-,@)";
    return false;
  }
  userNameFlag = true;
  displayButton2(userNameFlag, passwordFlag);
  errorMsg.innerText = "";
  username.style.outline=" 2px solid #00F700"
  username.style.border="none"
});

// Input Event For Capturing Password In Real Time
password.addEventListener("input", () => {
    passwordFlag=false;
    password.style.outline=" 2px solid red"
  button2.style.display = "none";
  button1.style.display = "block";
  let pass = password.value;
  if (pass.length < 8 || pass.length > 20) {
    errorMsg.innerText = "Password should be 8-20 character long ";
    return false;
  }
  if (!containsSpecial(pass)) {
    errorMsg.innerText =
      "Username should contain atleast one special charcter(*,&,$,#,-,@)";
    return false;
  }
  errorMsg.innerText = "";
  passwordFlag = true;
  displayButton2(userNameFlag, passwordFlag);
password.style.outline=" 2px solid #00F700"
  password.style.border="none"
});

/ It will Display the button2 only after the form validation /;
function displayButton2(userNameFlag, passwordFlag) {
  if (userNameFlag && passwordFlag) {
    button1.style.display = "none";
    button2.style.display = "block";
  }
}

// / Click Event: This Will Work only After the form Validation/
button2.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    `Login Succesfull \nUsername:${username.value}\nPassword:${password.value}`
  );
  console.log("Your form is submitted");
  document.querySelector("form").reset();
});







let colors=document.querySelector("#dark");
let bgcolor=document.querySelector(".container")
let footer=document.querySelector(".footer")
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  console.log("in set");
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--bgcolor', 'grey');
  r.style.setProperty('--footerClr', 'black');
  r.style.setProperty('--textClr', 'white');
}

    colors.addEventListener("click",()=>{
      myFunction_set();
      console.log("in function");
    })
//     ele[1].addEventListener("click",()=>{
//       myFunction_set();
//     })


// })