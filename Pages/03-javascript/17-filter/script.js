const clientData = [];
let objectKey;
let trCount = 0;
let realBR = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});
let first = 0;

function AddNewPurchase() {
    const dataClient = new Object();
    dataClient.name = document.getElementById('clientName').value;
    dataClient.dueDate = document.getElementById('dueDate').value;
    dataClient.purchaseAmount = Number(document.getElementById('purchaseAmount').value.replace(",", "."));
    dataClient.fees = "0";
    dataClient.total = "0";
    clientData.push(dataClient);
    document.getElementById('clientDataForm').reset();
    let tbodyInfo = document.getElementById('tableData').getElementsByTagName('tbody');
    let tr = document.createElement('tr');
    tr.className = 'trRegister';
    tr.id = "tr" + trCount;
    console.log(tbodyInfo);
    tbodyInfo[0].appendChild(tr);

    let td = document.createElement('td');
    td.className = 'tdRegister';
    td.innerHTML = dataClient.name;
    document.getElementById('tr' + trCount).appendChild(td);
    td = document.createElement('td');
    td.className = 'tdRegister';
    td.innerHTML = dataClient.dueDate.split('-').reverse().join('/');
    document.getElementById('tr' + trCount).appendChild(td);
    td = document.createElement('td');
    td.className = 'tdRegister';
    td.innerHTML = realBR.format(dataClient.purchaseAmount.toFixed(2));
    document.getElementById('tr' + trCount).appendChild(td);
    td = document.createElement('td');
    td.className = 'tdRegister';
    td.id = 'tdFee' + trCount;
    document.getElementById('tr' + trCount).appendChild(td);
    td = document.createElement('td');
    td.className = 'tdRegister';
    td.id = 'tdTotal' + trCount;
    document.getElementById('tr' + trCount).appendChild(td);
    trCount++;
    if (first == 0) {
        document.querySelector(".divFilter").style.visibility = "visible";
        document.querySelector(".divBtn").style.visibility = "visible";
        first++;
    }
}

function feesCalculator() {

    let feeRegister = clientData.map(element => {
        let feeTotal = [];
        let diffDate = diffDateCalculate(element.dueDate);
        let tax;
        if (diffDate > 0) {
            tax = element.purchaseAmount * 0.02 + (element.purchaseAmount * diffDate * 0.001);
        }
        else {
            tax = 0;
        }
        feeTotal.push(tax);
        feeTotal.push(element.purchaseAmount + tax);
        element.fees = tax;
        element.total = element.purchaseAmount + tax;
        return feeTotal;
    })

    for (let i = 0; i < trCount; i++) {
        document.getElementById('tdFee' + i).innerHTML = realBR.format(feeRegister[i][0].toFixed(2));
        document.getElementById('tdTotal' + i).innerHTML = realBR.format(feeRegister[i][1].toFixed(2));
    }
}


function diffDateCalculate(dataClient) {
    let todayDate = parseInt((Date.now() - 10800000) / 86400000);
    let milliseconds = Date.parse(dataClient);
    let date = new Date(milliseconds) / 86400000;
    let diffDate = todayDate - date;
    if (diffDate > 0) {
        return diffDate;
    }
    else {
        return 0;
    }
}

function order(orderBy) {
    feesCalculator();
    objectKey = orderBy;
    let ordenado = clientData.sort(function (a, b) {
        if (a.ordenarPor > b.ordenarPor) {
            return 1;
        }
        if (a.ordenarPor < b.ordenarPor) {
            return -1;
        }
        return 0;
    });

    const vetor = clientData.reduce(ordenar, {});
    // console.log(vetor);
    // console.log(Object.values(vetor));
    let trReCount = Object.values(vetor).length;
    document.getElementById("tbody2").innerHTML = "";
    for (let i = 0; i < Object.values(vetor).length; i++) {

        let tbodyInfo = document.getElementById('tableDataOrder').getElementsByTagName('tbody');
        let tr = document.createElement('tr');
        tr.className = 'trRegister';
        tr.id = "trOrder" + trReCount;
        tbodyInfo[0].appendChild(tr);

        console.log(Object.values(vetor)[i].name);

        let td = document.createElement('td');
        td.setAttribute("colspan", 4);
        td.className = 'tdRegister';
        if (objectKey == 'dueDate') {
            td.innerHTML = Object.values(vetor)[i].name.split('-').reverse().join('/')
        }
        else {
            td.innerHTML = Object.values(vetor)[i].name;
        }
        document.getElementById('trOrder' + trReCount).appendChild(td);
        td = document.createElement('td');
        td.className = 'tdRegister';
        td.innerHTML = realBR.format(Object.values(vetor)[i].count);
        document.getElementById('trOrder' + trReCount).appendChild(td);
        trReCount++;
        document.querySelector(".orderedTable").style.visibility = "visible";
    }
}


function ordenar(acc, cur) {
    let vetor = cur[objectKey];

    if (!acc[vetor]) {
        acc[vetor] = { name: vetor, count: 0 };
    }

    acc[vetor].count += cur["total"];

    return acc;
}


function filterAll() {
    feesCalculator();
    const minValue = document.getElementById('minValue').value;
    const maxValue = document.getElementById('maxValue').value;
    const minDate = document.getElementById('minDate').value.replaceAll('-', '/');
    const maxDate = document.getElementById('maxDate').value.replaceAll('-', '/');
    // console.log('Min. Valor: ' + minValue);
    // console.log('Max. Valor: ' + maxValue);
    // console.log('Min. Data: ' + minDate);
    // console.log('Max. Data: ' + maxDate);
    let minDateMilliSec = Date.parse(minDate);
    let maxDateMilliSec = Date.parse(maxDate);
    let date1 = new Date(minDateMilliSec) / 86400000;
    let date2 = new Date(maxDateMilliSec) / 86400000;
    let filterList = [];
    for (let i = 0; i < clientData.length; i++) {
        filterList = clientData.filter(element => {
            let error = 0;
            let elementDate = new Date(Date.parse(element.dueDate)) / 86400000;
            if (minValue == '' && maxValue == '' && minDate == '' && maxDate == '') {
                return true;
            }
            else {
                // console.log('data comparativa: ' + elementDate);
                // console.log('min data: ' + date1);
                // console.log('max data: ' + date2);
                // console.log('valor elemento: ' + element.purchaseAmount);
                // console.log('valor min: ' + minValue);
                // console.log('valor max: ' + maxValue);
                if (minDate != '' && elementDate < date1) {
                    error++;
                }
                if (maxDate != '' && elementDate > date2) {
                    error++;
                }
                if (minValue != '' && minValue > element.purchaseAmount) {
                    error++;
                }
                if (maxValue != '' && maxValue < element.purchaseAmount) {
                    error++;
                }
            }
            console.log('error: ' + error);
            if (error === 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    console.log(filterList);

    for (let i = 0; i < filterList.length; i++) {

        let tbodyInfo = document.getElementById('tableDataOrderFilter').getElementsByTagName('tbody');
        let tr = document.createElement('tr');
        tr.className = 'trRegister';
        tr.id = "tr" + trCount;
        console.log(tbodyInfo);
        tbodyInfo[0].appendChild(tr);

        let td = document.createElement('td');
        td.className = 'tdRegister';
        td.innerHTML = filterList[i].name;
        document.getElementById('tr' + trCount).appendChild(td);
        td = document.createElement('td');
        td.className = 'tdRegister';
        td.innerHTML = filterList[i].dueDate.split('-').reverse().join('/');
        document.getElementById('tr' + trCount).appendChild(td);
        td = document.createElement('td');
        td.className = 'tdRegister';
        td.innerHTML = realBR.format(filterList[i].purchaseAmount.toFixed(2));
        document.getElementById('tr' + trCount).appendChild(td);
        td = document.createElement('td');
        td.className = 'tdRegister';
        td.id = 'tdFee' + trCount;
        td.innerHTML = realBR.format(filterList[i].fees);
        document.getElementById('tr' + trCount).appendChild(td);
        td = document.createElement('td');
        td.className = 'tdRegister';
        td.id = 'tdTotal' + trCount;
        td.innerHTML = realBR.format(filterList[i].total);
        document.getElementById('tr' + trCount).appendChild(td);
        trCount++;
        document.querySelector(".orderedTableFilter").style.visibility = "visible";
    }

    // if (diffDate > 0) {
    //     return diffDate;
    // }
    // else {
    //     return 0;
    // }

    // console.log(diffDate);
}

