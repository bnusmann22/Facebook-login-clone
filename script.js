document.addEventListener("input", function (){
    let userDetail = document.getElementById("userDetail")
    let pass = document.getElementById("userPass");
    let logIn = document.getElementById("logIn");

    // Password Show and Hide Toggle 

        let shwpwdbtn = document.getElementById("shwpwdbtn");
        shwpwdbtn.onclick = () => {
            if (pass.type === "password") {
                pass.type = "text";
                shwpwdbtn.textContent = "Hide"
                shwpwdbtn.style.color = "red";
            } else {
                pass.type = "password";
                shwpwdbtn.textContent = 'Show'
                shwpwdbtn.style.color = "green";
            }
        };

    const countryCode = "+234"

        logIn.onclick = () => {
            userDetail = userDetail.value;
            userDetail = userDetail.trim();
            if(userDetail.length > 10){
                if(!isNaN(userDetail)){
                    if(userDetail.length > 11){
                         alert("Invalid Phone NUmber !! , Please try again")
                    }else{
                        console.log(typeof userDetail)
                        console.log("The input :" + userDetail + " is now a Number")

                        //bitwise XOR operator
                        console.log(userDetail ^ 2)

                        userDetail = Number(userDetail)
                        let phoneNum = countryCode + userDetail;
                        phoneNum.replace(/(\+234) (\d{3})(\d{4})/, "$1 $2 $3 $4" )
                        // phoneNum = Number(phoneNum)
                         alert( `Your Phone Number is ${phoneNum}`)
                        console.log(typeof phoneNum);
                    }
                } else{  
                    // checking Email Validity
                    if(userDetail.includes('@') && userDetail.includes('.com')){
                         alert("Valid Mail")
                    }else{
                         alert("Please Input A valid Mail")
                    }
                }
            } else if(userDetail.length == 0 ){
                     alert("Empty input !! , please input a value")
                }
            else{
                  alert(" Detail i.e NAME too Short TRY AGAIN!!"); 
            }
            

            // password Verification

            // checking PWord Length 
            pass = pass.value;
            if (pass.length >= 10){
                alert(`E-mail ${userDetail} & PassWord ${pass}`)
            }else if(pass.value.length == 0){                                             
                alert("Empty!! , Shey u no go like enter Password ni😒");
            }
        }
})
