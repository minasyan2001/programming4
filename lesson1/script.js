function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('remove');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }


    function handleRemove(evt){
        socket.emit("send message");
    }
    button.onclick = handleSubmit;
    button1.onclick = handleRemove;


    
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

function handleRost(msg){
 
    
    
}


socket.on('display message', handleMessage);
socket.on('mi ban gri ', handleRost);
} // main closing bracket

window.onload = main;