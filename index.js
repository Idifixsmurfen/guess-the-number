const message = document.getElementById('message')
const inputField = document.getElementById("user-input")

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
            SetMessage("You did great son :) ")

            setTimeout(function() {location.reload()}, 5000)
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