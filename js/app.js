
// functions

function getPin(){

    const generatedNo = Math.round(Math.random()*10000);
    if((generatedNo + '').length == 4 ){

        return generatedNo;
        
    }
    else{
        return getPin()
    }

    
}

function generatePin(){

    const pinNo = getPin();
    document.getElementById('display-pin').value = pinNo;
}




// calculator event bubble

document.getElementById('key-pad').addEventListener('click',function(event){
    const number= event.target.innerText
    const displayNo = document.getElementById('display-input');

    if(isNaN(number)){
        if(number == 'C'){
            displayNo.value = ''
        }
    }
    else{

        const previousNo = displayNo.value
        const newNo = previousNo + number
        displayNo.value = newNo
    }
})


// pin matcher submit button

function verifyPin(){
    const pin = document.getElementById('display-pin').value
    const inputNo = document.getElementById('display-input').value
    if( pin == inputNo){
        document.getElementById('pin-success').style.backgroundColor = 'green'
        document.getElementById('pin-fail').style.display = 'none'

    }
    else{
        document.getElementById('pin-fail').style.backgroundColor = 'red'
        document.getElementById('pin-success').style.display = 'none'

        
    }
}