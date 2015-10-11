$(document).ready(function () {

    var lines = new Array();

    $.get('source.txt', function (data) {
        lines = data.split('\n');
    });

    var x = 0;

    $("#generate-button").click(function () {
        for (i = 1; i < 4; i++) {

            xold = x;
            while (xold == x) {
                // generate 3 random numbers
                x = Math.floor(Math.random() * lines.length);
            };
            $(".result-" + i).html(lines[x]); // use a number instead of x
        };
    });
});
