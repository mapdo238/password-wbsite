
let shecklower = document.getElementById("checklower");
let sheckupper = document.getElementById("checkupper");
let shecknumbers = document.getElementById("checknumbers");
let shecksymbols = document.getElementById("checksymbols");
let charnum = document.getElementById("charnum");
let display = document.getElementById("display");
let password = "";
let allowedchars = "";
let upper = "QWERTYUIOPASDFGHJKLMNBVCXZ";
let lower = "qwertyuioplkjmnhgbvfdcxsaz";
let numbers = "123456789";
let symbols = "!@#$%^&*()_+=-`~;:.,></?"
function generate() {

    allowedchars += shecklower.checked ? lower : "";
    allowedchars += sheckupper.checked ? upper : "";
    allowedchars += shecknumbers.checked? numbers : "";
    allowedchars += shecksymbols.checked ? symbols : "";
    if (allowedchars == "") {
        display.textContent = "at least 1 set of allowed characters needs to be used";
    }
    else{
        for (i = 0 ; i < charnum.value; i++) {
            ran = Math.floor(Math.random() * allowedchars.length);
            password += allowedchars[ran];
        }

        display.textContent = password;
    }

    allowedchars = "";
    password = '';
}

