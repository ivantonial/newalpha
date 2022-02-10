$(document).ready(function () {
    $('input[type = button]').eq(0).click(getZipCode);
});

function getZipCode() {
    const zipCode = $(`#searchZipCode`).val();
    $.ajax(
        { url: `https://cep.awesomeapi.com.br/json/${zipCode}` })
        .done(responseTop => {
            $('thead').html('');
            $('tbody').html('');
            $('thead').html(`<tr><th>Endereço</th><th>Bairro</th><th>Cidade</th><th>Estado</th><th>CEP</th></tr>`);
            $('tbody').html(`<tr><td>${responseTop.address}</td><td>${responseTop.district}</td><td>${responseTop.city}</td><td>${responseTop.state}</td><td>${responseTop.cep}</td></tr>`);
            $('#map').html('');
            $('#map').html(`<iframe
            width="600"
            height="450"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDTqxnTg8xktF1jAigt3byQrPP77g-jiTU&q=${responseTop.lat}%2C${responseTop.lng}">
        </iframe>`);
        }).fail(response => {
            $('thead').html('');
            $('tbody').html('');
            $('thead').html(`<tr><th>Mensagem</th></tr>`);
            $('#map').html('');
            if (response.status === 400) {
                $('tbody').html(`<tr><td>O Cep inserido (${zipCode}) é inválido!</td></tr>`);
            }
            else {
                $('tbody').html(`<tr><td>O Cep inserido (${zipCode}) não existe!</td></tr>`);
            }
        });
}



