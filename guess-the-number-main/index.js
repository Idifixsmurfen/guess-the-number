const message = document.getElementById('message')
const inputField = document.getElementById("user-input")
let guesses = new Array()


function RandomInt()
{
    return Math.floor(Math.random() * 101)
    
}
let SecretNumber = RandomInt() 


document.addEventListener("keyup", function(event)
{
    if(event.key == "Enter")
    {
        const guess = GetUserInput()
        guesses.push(GetUserInput())
        console.log(guesses)

        if(GetUserInput() < SecretNumber)
        {
            SetMessage("Higher damnit!")
        }
        else if (GetUserInput() > SecretNumber)
        {
            SetMessage("Lower you madman!")
        }
        else
        {
           if (guesses.length === 1)
           {
            SetMessage("You did great son :) It only took you " + guesses.length +" guess")
            console.log(guesses.length)

            setTimeout(function() {location.reload()}, 5000)
           }
          
           else
           {
            SetMessage("You did great son :) It only took you " + guesses.length +" guesses")
            console.log(guesses.length)

            setTimeout(function() {location.reload()}, 5000)
           }
            
        }
    }

}


)


function GetUserInput()
{
    return parseInt(inputField.value);
}
function SetMessage(msg)
{
    message.innerHTML = msg
}
console.log(SecretNumber)