let input = document.querySelector('#password'),
button = document.querySelector('#button')
pass_size = 10;

input.value = passwordGenerator();

function passwordGenerator(){
    let randomPass;

    do{
         randomPass = Math.random().toString(32).substr(2)
    }while(randomPass.length > 8)
   

    return randomPass;
}

button.addEventListener('click', function(){
    input.value = passwordGenerator();
})