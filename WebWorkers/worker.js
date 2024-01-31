addEventListener('connect', event => {
    const port = event.ports[0];

    port.onmessage = function (event) {
        console.log('Child Thread ', event.data);
        port.postMessage(event.data * 2);
    }
});

