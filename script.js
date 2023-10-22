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
// localStorage.clear();
let database = [];
let i = 0;

/---------------------For SignUp Page-------------------------/;
let signUp_btn1 = document.querySelector(".signUp-btn1"),
  signUp_btn2 = document.querySelector(".signUp-btn2"),
  error_signUp = document.querySelector(".error_signUp");
let SignUp_userFlag = false,
  signUp_passFlag = false;
signUp_btn2.style.display = "none";
const fullName = document.querySelector("#name");

// MouseOver Event For catch me if you can button
signUp_btn1.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (!(SignUp_userFlag && signUp_passFlag)) {
    error_signUp.innerText =
      "You will not be able to login until you pass all validation";
    // error_signUp.style.color = "red";
    setTimeout(() => {
      notAbleToLogin.innerText = "";
    }, "4000");
    signUp_btn1.classList.toggle("catchMe");
    // animate();
  }
});
let signUp_userName = document.querySelector("#signUp_userName");
// Input Event For Capturing Username In Real Time
signUp_userName.addEventListener("input", () => {
  SignUp_userFlag = false;
  signUp_userName.style.outline = " 2px solid lightcoral";
  signUp_btn2.style.display = "none";
  signUp_btn1.style.display = "block";
  let signUp_user = signUp_userName.value;
  if (signUp_user.length < 8) {
    error_signUp.innerText = "Username length should be greater than 7";
    return false;
  }
  if (signUp_user[0] != signUp_user[0].toUpperCase()) {
    error_signUp.innerText = "Username should starts with capital letter";
    return false;
  }
  if (signUp_user[0] >= 0 && signUp_user[0] <= 9) {
    error_signUp.innerText = "Username should starts with a alphabet";
    return false;
  }
  if (!containsNumbers(signUp_user)) {
    error_signUp.innerText = "Username should contain atleast one number";
    return false;
  }
  if (!containsSpecial(signUp_user)) {
    error_signUp.innerText =
      "Username should contain atleast one special charcter(*,&,$,#,-,@)";
    return false;
  }
  SignUp_userFlag = true;
  displaySignUp_btn2(SignUp_userFlag, signUp_passFlag);
  error_signUp.innerText = "";
  signUp_userName.style.outline = " 2px solid #00F700";
  signUp_userName.style.border = "none";
});

// Input Event For Capturing Password In Real Time
let create_pass = document.querySelector("#create_pass");
create_pass.addEventListener("input", () => {
  signUp_passFlag = false;
  create_pass.style.outline = " 2px solid red";
  signUp_btn2.style.display = "none";
  signUp_btn1.style.display = "block";
  let Sign_pass = create_pass.value;
  if (Sign_pass.length < 8 || Sign_pass.length > 20) {
    error_signUp.innerText = "Password should be 8-20 character long ";
    return false;
  }
  if (!containsSpecial(Sign_pass)) {
    error_signUp.innerText =
      "Username should contain atleast one special charcter(*,&,$,#,-,@)";
    return false;
  }
  error_signUp.innerText = "";
  signUp_passFlag = true;
  displaySignUp_btn2(SignUp_userFlag, signUp_passFlag);
  create_pass.style.outline = " 2px solid #00F700";
  create_pass.style.border = "none";
});

/ It will Display the SignUp-btn2 only after the form validation /;
function displaySignUp_btn2(SignUp_userFlag, signUp_passFlag) {
  if (signUp_passFlag && signUp_passFlag) {
    signUp_btn1.style.display = "none";
    signUp_btn2.style.display = "block";
  }
}
let emailAdd = document.querySelector("#mail");
let confrmPass = document.querySelector("#cnfrm");
/ Click Event: This Will Work only After the form Validation/;
signUp_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    name: `${fullName.value}`,
    username: `${signUp_userName.value}`,
    password: `${create_pass.value}`,
    email: `${emailAdd.value}`,
  };
  if (data.password != confrmPass.value) {
    alert("Password not matching");
    return;
  }
  if(!contansAt(emailAdd)){
    alert("Enter valid Email");
    return;
  }
  localStorage.setItem(`data${i}`, JSON.stringify(data));
  i++;
  alert(
    `Please Save your details for future \n Username:${signUp_userName.value}\n Password: ${create_pass.value}`
  );
  document.querySelector(".SignUp").reset();
});

/For login page/;
// MouseOver Event For catch me if you can button
button1.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (!(userNameFlag && passwordFlag)) {
    notAbleToLogin.innerText =
      "You will not be able to login until you pass all validation";
    // notAbleToLogin.style.color = "red";
    setTimeout(() => {
      notAbleToLogin.innerText = "";
    }, "4000");

    button1.classList.toggle("catchMe");
    // animate();
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
function contansAt(str){
  return /[@]/.test(str)
}

// Input Event For Capturing Username In Real Time
username.addEventListener("input", () => {
  userNameFlag = false;
  username.style.outline = " 2px solid red";
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
  username.style.outline = " 2px solid #00F700";
  username.style.border = "none";
});

// Input Event For Capturing Password In Real Time
password.addEventListener("input", () => {
  passwordFlag = false;
  password.style.outline = " 2px solid red";
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
  password.style.outline = " 2px solid #00F700";
  password.style.border = "none";
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
  let matchPassword = false;
  let matchUsername = false;
  e.preventDefault();
  // alert(
  // `Login Succesfull \nUsername:${username.value}\nPassword:${password.value}`
  // );
  for (let i = 0; i < localStorage.length; i++) {
    let ans = JSON.parse(localStorage.getItem(`data${i}`));
    if (
      ans["username"] == username.value &&
      ans["password"] == password.value
    ) {
      matchPassword = true;
      matchUsername = true;
      break;
    } else if (
      ans["username"] != username.value &&
      ans["password"] == password.value
    ) {
      matchPassword = true;
      matchUsername = false;
    } else if (
      ans["username"] == username.value &&
      ans["password"] != password.value
    ) {
      matchPassword = false;
      matchUsername = true;
    } else {
      matchPassword = false;
      matchUsername = false;
    }
  }

  if (matchUsername === true && matchPassword === true) {
    alert("Login Successfull");
  } else if (matchPassword === true) {
    errorMsg.innerText = "User does not exist";
  } else if (matchUsername === true) {
    errorMsg.innerText = "Incorrect Password";
  } else {
    errorMsg.innerText = "User does not exist";
  }

  document.querySelector("form").reset();
});

let dark = document.querySelector("#dark");
let bgcolor = document.querySelector(".container");
let footer = document.querySelector(".footer");
var r = document.querySelector(":root");
let day=document.querySelector("#day")

// Create a function for getting a variable value
function dayMode() {
  r.style.setProperty("--bgcolor", "#FAEBD7");
  r.style.setProperty("--footerClr", "#F15E64");
  r.style.setProperty("--textClr", "black");
  r.style.setProperty("--resetbg","white")
  r.style.setProperty("--redForError","red")
}
day.style.display="none";
// Create a function for setting a variable value
function darkMode() {
  r.style.setProperty("--bgcolor", "grey");
  r.style.setProperty("--footerClr", "black");
  r.style.setProperty("--textClr", "white");
  r.style.setProperty("--redForError","white")
  r.style.setProperty("--resetbg","black")
}

dark.addEventListener("click", () => {
  darkMode();
day.style.display="block";
dark.style.display="none";
});
day.addEventListener("click",(e)=>{
  day.style.display="none";
  dark.style.display="block";
  dayMode();
})


// Tab switch between Login and Signup Button and page
let login_signup_btn = document.querySelectorAll(".buttons button");
let forms = document.querySelector(".forms");
login_signup_btn[0].classList.add("change-btn-bg");

login_signup_btn.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    if (idx == 1) {
      forms.style.left = "-100%";
      btn.classList.add("change-btn-bg");
      login_signup_btn[0].classList.remove("change-btn-bg");
    } else {
      forms.style.left = "0";
      btn.classList.add("change-btn-bg");
      login_signup_btn[1].classList.remove("change-btn-bg");
    }
  });
});

/--------------PASSWORD RESET--------------------------------/;

let resetContainer = document.querySelector(".resetPassword");
resetContainer.style.display = "none";

let forgetPass = document.querySelector(".forget-pass a");
forgetPass.addEventListener("click", (e) => {
  e.preventDefault();
  resetContainer.style.display = "block";
  resetContainer.classList.add("animate__zoomIn");
});

let closeReset = document.querySelector(".resetPassword i");
closeReset.addEventListener("click", (e) => {
  e.preventDefault();
  resetContainer.style.display = "none";
  passChange_Container.style.left = "0";
});
let passChange_Container = document.querySelector(".passChange_Container");
document.querySelector(".verify button").addEventListener("click", (e) => {
  e.preventDefault();
  // passChange_Container.style.left="-410px"
});

let checkEmail = document.querySelector("#checkEmail");
let checkUser = document.querySelector("#checkUser");
let resetError = document.querySelector(".resetError span");
let userCrfimationEmail = "";
let userCrfimationName = "";
let checkData;
let idx = 0;
document.querySelector(".chngeVerify").addEventListener("click", (e) => {
  let matchEmail = false;
  let matchUsername = false;
  e.preventDefault();
  setTimeout(() => {
    resetError.innerText = "";
  }, 3000);
  for (let i = 0; i < localStorage.length; i++) {
    let ans = JSON.parse(localStorage.getItem(`data${i}`));
   
    if (
      ans["username"] == checkUser.value &&
      ans["email"] == checkEmail.value
    ) {
      userCrfimationName = checkUser.value;
      userCrfimationEmail = checkEmail;
      checkData = JSON.parse(localStorage.getItem(`data${i}`));
      matchEmail = true;
      matchUsername = true;
      idx = i;
      break;
    } else if (
      ans["username"] != checkUser.value &&
      ans["email"] == checkEmail.value
    ) {
      resetError.innerText = "INVALID CREDENTIALS";
      matchEmail = true;
      matchUsername = false;
      
    } else if (
      ans["username"] == checkUser.value &&
      ans["email"] != checkEmail.value
    ) {
      resetError.innerText = "INVALID CREDENTIALS";
      matchEmail = false;
      matchUsername = true;
      // return;
    } else {
      resetError.innerText = "INVALID CREDENTIALS";
      matchEmail = false;
      matchUsername = false;
      // return;
    }
  }

  if(matchUsername===true && matchEmail===true){
    alert("Login Successfull")
    passChange_Container.style.left = "-410px";
  }else if(matchEmail===true){
    resetError.innerText="Invalid Credentials";
    return;
  }else if(matchUsername===true){
    resetError.innerText="Invalid Credentials";
    return;
  }else{
    resetError.innerText="Invalid Credentials";
    return;
  }

  
});
let createNewPass = document.querySelector("#creatNew");
let cnfrmNewPass = document.querySelector("#cnfrmPass");
let cnfrmPassBtn = document.querySelector(".cnfrmPassBtn");

cnfrmPassBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (createNewPass.value == cnfrmNewPass.value) {
    alert("Password Changed Successfully");
    for (let i = 0; i < localStorage.length; i++) {
      let ans = JSON.parse(localStorage.getItem(`data${i}`));
      if (ans.username == checkUser.value) {
        let d = localStorage.getItem(`data${i}`);
        ans.password = cnfrmNewPass.value;
        const updatedDataString = JSON.stringify(ans);
        localStorage.setItem(`data${i}`, updatedDataString);
      }
    }
  } else {
    resetError.innerText = "Password does not match";
    setTimeout(() => {
      resetError.innerText = "";
    }, 2000);
  }
});
