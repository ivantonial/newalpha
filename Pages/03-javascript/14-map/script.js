const clientData = [];
let trCount = 0;
let realBR = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

function AddNewPurchase () {
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

}

function feesCalculator () {
    
    let feeRegister = clientData.map(element => {
        let feeTotal = []; 
        let diffDate = diffDateCalculate (element.dueDate);
        let tax;
        if (diffDate > 0) {
            tax = element.purchaseAmount * 0.02 + (element.purchaseAmount * diffDate * 0.001);
            console.log(tax);
        }
        else {
            tax = 0;
        }
        feeTotal.push(tax);
        feeTotal.push(element.purchaseAmount + tax);
        return feeTotal;
    })

    for (let i = 0; i < trCount; i++){
        document.getElementById('tdFee' + i).innerHTML = realBR.format(feeRegister[i][0].toFixed(2));
        document.getElementById('tdTotal' + i).innerHTML = realBR.format(feeRegister[i][1].toFixed(2));
    }
}


function diffDateCalculate (dataClient) {
    let todayDate = parseInt((Date.now() - 10800000)/86400000);
    let milliseconds = Date.parse(dataClient);
    let date = new Date(milliseconds)/86400000;
    let diffDate = todayDate - date;
    if (diffDate > 0) {
        return diffDate;
    }
    else {
        return 0;
    }
}

