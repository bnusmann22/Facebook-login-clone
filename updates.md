## 1. updated a video Bg

<!-- HTML -->
<div class="vid-contain">
    <video autoplay loop muted playsinline>
        <source src="assets/vids/bg-vid2.mp4" type="video/mp4">
    </video>
</div>

<!-- CSS -->

# .vid-contain{

## position: fixed;

## top: 0;

## left: 0;

## width: 100%;

## height: 100%;

## overflow: hidden;

## z-index: -2;

# }

# .vid-contain video{

## height: 100%;

## width: 100%;

## object-fit: cover;

# }

## 2. PassWord Show and Hide Toggle

<!-- HTML -->
<input type="password" placeholder="Password" id="userPass" required >
           <button id="shwpwdbtn" style="cursor: pointer; "> Show</button>

<!-- Javascript -->
<script>
        document.addEventListener("DOMContentLoaded", function () {

            let pass = document.getElementById("userPass");
            let shwpwdbtn = document.getElementById("shwpwdbtn");

            shwpwdbtn.onclick = () => {

                if (pass.type === "password") {
                    pass.type = "text";
                    shwpwdbtn.textContent = "Hide"
                } else {
                    pass.type = "password";
                    shwpwdbtn.textContent = 'Show'
                }

            };
        })
    </script>

## 3. Checking through an input and converting to num

<!-- HTML  -->
<input type="text" id="myInput">
    <button id="checkBtn">Check Input</button>

<!-- Javascript -->
<script>
    document.addEventListener("input", function () {
                let myInput = document.getElementById("myInput");
                
                let checkBtn = document.getElementById("checkBtn");

                checkBtn.onclick = () => {
                    myInput = myInput.value;
                    if(!isNaN(myInput) && myInput.trim()){
                        myInput = Number(myInput)


                        console.log(typeof myInput)
                        console.log("The input :" + myInput + " is now a Number")

                        //bitwise XOR operator
                        console.log(myInput ^ 2)
                    }else if (myInput.trim() == ''){
                        alert("Empty input !! , please input a value")
                    } else{
                        console.log(typeof myInput)
                        console.log("The input is still  a " + typeof myInput)
                    }
                }
            })

</script>
