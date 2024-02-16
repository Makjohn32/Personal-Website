function manyChars(){
    var text = document.getElementById('message').value;
    if(text.length > 100){
        alert("You have wrote more than 100 characters");
        document.getElementById('message').value = '';
    }
}

function isEmpty(){
    let name = document.getElementById('firstName').value;
    let surname = document.getElementById('lastName').value;
    let msg = document.getElementById('message').value;

    if(name == ''){
        alert("You must give a name");
    }
    else if(surname == ''){
        alert("You must give a last name");
    }
    else if(msg == ''){
        alert("You must write a msg");
    }
    else{
        alert("You have successfully sent the message");
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('message').value = '';
    }
}

