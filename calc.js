function displaydata(data){
result.value+=data
}

function Allclear(){
    result.value=" "
}

function Eval(){
    result.value=eval(result.value)
}

function Backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}