function x() {
    for(var i = 1; i < 6; i++) {

        function close(i) {
            setTimeout(function ()  {
            console.log(i);
        }, i * 1000);
        }
        close(i);
    }
}

x();