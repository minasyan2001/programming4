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


    function handleRemove(evt) {
        socket.emit("uzumem jnejem");
    }
    button.onclick = handleSubmit;
    button1.onclick = handleRemove;



    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function handleRost(msg) {
        var pTags = document.getElementsByTagName("p");
        for (var i in pTags) {
            if (pTags.length > 0) {
                chatDiv.removeChild(pTags[0]);
                console.log(pTags)
            }
        }

    }


    socket.on('display message', handleMessage);
    socket.on('de dzer motic jnjeq', handleRost);
} // main closing bracket

window.onload = main;