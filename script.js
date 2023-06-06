let socket;

function sendUncancelRequest() {
    const countVar = parseInt(document.getElementById('countVarInput').value, 10);

    socket = new WebSocket('wss://s-euw1c-nss-2204.europe-west1.firebasedatabase.app/.ws?v=5&p=1:1089186343487:web:9bf7a94dbf0b88f018668a&ns=canceljohan-314af-default-rtdb');

    socket.onopen = function (event) {
        const message = {
            "t": "d",
            "d": {
                "r": 12,
                "a": "p",
                "b": {
                    "p": "/count",
                    "d": {
                        "count": countVar
                    }
                }
            }
        };
        socket.send(JSON.stringify(message));
    };

    socket.onmessage = function (event) {
        console.log('Message from server: ', event.data);
    };

    socket.onerror = function (error) {
        console.error('WebSocket Error: ', error);
    };
}

function playSound() {
    const sound = new Howl({
        src: ['./goofy-ahh-sounds.mp3']
    });

    sound.play();
}
