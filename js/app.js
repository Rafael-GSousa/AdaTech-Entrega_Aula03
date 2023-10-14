document.getElementById('iTamanho').addEventListener('input', function (e) {
    var re = /^(P|M|G|GG|XG|X)$/i;
    if (!re.test(e.target.value)) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
});

$(document).ready(function () {
    $('#iValor').mask('000.000.000.000.000,00', { reverse: true });
});