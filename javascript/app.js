let tempInput = document.getElementById('tempInput')
let tempFrom = document.getElementById('tempFrom')
let tempTo = document.getElementById('tempTo')
let tempResult = document.getElementById('tempResult')


function convertTemperature(){
        let tempInputValue =  tempInput.value
        let tempFromValue =  tempFrom.value
        let tempToValue =  tempTo.value
        let result

        if(tempFromValue == tempToValue){
            result =  tempInputValue
        }else if(tempFromValue == 'celsius'){
            if(tempToValue == 'fahrenheit'){
                result =  tempInputValue * 2
            }else if(tempToValue == 'kelvin'){
                result =  tempInputValue * 3
            }
        }
        else if(tempFromValue == 'fahrenheit'){
            if(tempToValue == 'celsius'){
                result =  tempInputValue * 2
            }else if(tempToValue == 'kelvin'){
                result =  tempInputValue * 3
            }
        }
        else if(tempFromValue == 'kelvin'){
            if(tempToValue == 'celsius'){
                result =  tempInputValue * 2
            }else if(tempToValue == 'fahrenheit'){
                result =  tempInputValue * 3
            }
        }

        tempResult.innerHTML =  result
        tempResult.style.display = "block"


}