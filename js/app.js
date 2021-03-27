const button = document.querySelector("button");
const h3 = document.querySelector("h3");
var randomNumber = parseInt(Math.random() *10 );
var tentativas = 3;

function verifyNumber(){
        var userNumber = document.querySelector("input").value;

        if(userNumber == randomNumber){
            h3.innerHTML = "VOCÊ ACERTOU!!!";
            button.removeEventListener("click", verifyNumber);
            button.addEventListener("click", function(){
                location.reload()
            })
            button.innerHTML = "Jogar Novamente";
        }else if(userNumber > randomNumber){
            h3.innerHTML = "O numero é menor!";
            tentativas = tentativas - 1 

        }else if(userNumber < randomNumber){
            h3.innerHTML = "O numero é maior!";
            tentativas = tentativas - 1
        } if(tentativas == 0){
            h3.innerHTML = "Suas tentativas esgotaram!! Jogar Novamente?";
            button.removeEventListener("click", verifyNumber);
            button.addEventListener("click", function(){
                location.reload()
            } )
            button.innerHTML = "Jogar Novamente";
    }
}



button.onclick = verifyNumber;

