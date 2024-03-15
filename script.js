let inp = document.getElementsByClassName("input");
let button = document.querySelector("button");
let string = '';

let arr = Array.from(button);
arr.forEach(b => {
    b.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string.eval(string);
            inp.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            inp.value = string;
        }
        else if(e.target.innerHTML = "DEL"){
            string = string.substring(0, string.length() - 1);
            inp.value = string;
        }
        else{
            string += e.target.innerHTML;
            inp.value = string;
        }
    })
})