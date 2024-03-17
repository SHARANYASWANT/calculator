// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.querySelector(".input");
//     const buttons = document.querySelectorAll(".button");
//     const operationButtons = document.querySelectorAll(".button_Op");
//     const equalButton = document.querySelector(".button_Eq");
//     const clearButton = document.querySelector(".button_Op:nth-child(1)");
//     const deleteButton = document.querySelector(".button_Op:nth-child(2)");

//     let currentInput = "";
//     let operation = "";
//     let previousInput = "";

//     // Function to update the input field
//     function updateInput(value) {
//         input.value += value;
//         currentInput += value;
//     }

//     // Function to perform operations
//     function calculate() {
//         let result = 0;
//         switch (operation) {
//             case "+":
//                 result = parseFloat(previousInput) + parseFloat(currentInput);
//                 input.value = "+" ;
//                 break;
//             case "-":
//                 result = parseFloat(previousInput) - parseFloat(currentInput);
//                 break;
//             case "*":
//                 result = parseFloat(previousInput) * parseFloat(currentInput);
//                 break;
//             case "/":
//                 result = parseFloat(previousInput) / parseFloat(currentInput);
//                 break;
//             case "%":
//                 result = parseFloat(previousInput) % parseFloat(currentInput);
//                 break;
//         }
//         input.value = result;
//         currentInput = result;
//         previousInput = "";
//         operation = "";
//     }

//     // Event listeners for number buttons
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             updateInput(button.textContent);
//         });
//     });

//     // Event listener for operation buttons
//     operationButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             if (currentInput !== "") {
//                 operation = button.textContent;
//                 previousInput = currentInput;
//                 currentInput = "";
//             }
//         });
//     });

//     // Event listener for equal button
//     equalButton.addEventListener("click", () => {
//         if (currentInput !== "" && previousInput !== "") {
//             calculate();
//         }
//     });

//     // Event listener for clear button
//     clearButton.addEventListener("click", () => {
//         input.value = "";
//         currentInput = "";
//         previousInput = "";
//         operation = "";
//     });

//     // Event listener for delete button
//     deleteButton.addEventListener("click", () => {
//         input.value = input.value.slice(0, -1);
//         currentInput = currentInput.slice(0, -1);
//     });
// });

let dissplay = document.getElementById("input");

function displaytext(input){
    dissplay.value += input; 
}

function AC(){
    dissplay.value = "";
}

function calculate(){
    try{
        dissplay.value = eval(dissplay.value);
    }
    catch{
        dissplay.value = "Erorr";
    }
}
