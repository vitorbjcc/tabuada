function gerar() {

    var txtn = document.getElementById('txtn');
    var option = document.getElementById('option');
    var options;

    if (txtn.value.length == 0) {

        alert('[ERRO] Faltam dados!');

    } else {

        option.textContent = `${txtn.value} x 1 = ${Number(txtn.value) * 1}`;

        for (var i = 2; i <= 10; i++) {

            options = document.getElementById(`o${i}`);

            options.textContent = `${txtn.value} x ${i} = ${Number(txtn.value) * i}`;

        };

    };

};