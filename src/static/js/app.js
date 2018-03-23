document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    // const counterMiddleware = ('../../js/visit_counter_middleware.js');
    console.log(socket);
    socket.emit('simpleOne');
    socket.emit('window', {
        width : window.innerWidth,
        height : window.innerHeight,
    });

    let newuser = prompt("Please enter your name");
    console.log(newuser);
});