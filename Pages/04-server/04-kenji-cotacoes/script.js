$(document).ready(() => {
    $.ajax({ url: "https://economia.awesomeapi.com.br/json/all", context: $('#currencyOptions') })
        .done(function (data) {
            for (let currency in data) $(this).append(`<option value="${currency}">${currency}</option>`);
        })


    $('select').on('change', newCurrency);
    $('#btnRequest').on('click', getQuotation);


    function newCurrency() {
        $.ajax({
            url: `https://economia.awesomeapi.com.br/json/last/${$('#currencyOptions').val()}-BRL`,
            context: $('#currencyTable')
        })
            .done(function (data) {
                $('thead').html('');
                $('tbody').html('');
                for (let info in Object.values(data)[0]) {
                    if (info != 'codein' && info != 'name' && info != 'varBid' && info != 'pctChange' && info != 'timestamp') {
                        $('thead').append(`<th>${info}</th>`);
                        $('tbody').append(`<td>${Object.values(data)[0][info]}</td>`)
                        //console.log(Object.values(data)[0]);
                    }
                }
            })
    }

    function getQuotation() {
        const initialDate = $('#date-in').val().replaceAll('-', '');
        const finalDate = $('#date-out').val().replaceAll('-', '');
        if (!finalDate || !initialDate) return;

        $.ajax({
            url: `https://economia.awesomeapi.com.br/${$('#currencyOptions').val()}/${10 ** 20}?start_date=${initialDate}&end_date=${finalDate}`
        })
            .done(function (data) {
                $('thead').html('');
                $('tbody').html('');
                console.log(data);
                $('thead').append(`<tr><th>Moeda</th><th>Compra</th><th>Venda</th><th>Máximo</th><th>Mínimo</th><th>Variação</th><th>Porcentagem de variação</th><th>Data e hora</th></tr>`);
                data.forEach(obj => {
                    const dia = new Date(obj.timestamp * 1000).getDate();
                    const mes = new Date(obj.timestamp * 1000).getMonth() + 1;
                    const ano = new Date(obj.timestamp * 1000).getFullYear();
                    const hora = new Date(obj.timestamp * 1000).toTimeString().split("GMT")[0];
                    $('tbody').append(`<tr><td>${data[0].code}</td><td>${obj.bid}</td><td>${obj.ask}</td><td>${obj.high}</td><td>${obj.low}</td><td>${obj.varBid}</td><td>${obj.pctChange}</td><td>${dia}/${mes}/${ano} - ${hora}</td></tr>`);
                });
            })
    }

});

