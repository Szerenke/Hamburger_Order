let customers = [
    {surname: "Berger", firstname: "Whitney", age: 22},
    {surname: "Nagy", firstname: "Árpád", age: 32},
    {surname: "Kiss", firstname: "Bence", age: 18},
    {surname: "Jack", firstname: "vadölő", age: 45},
    {surname: "Rostás", firstname: "Márió", age: 68},
    {surname: "Fehér", firstname: "Anna", age: 53},
];

let tableBody = document.querySelector("#customerTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className ="btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML ='<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML ='<i class="fas fa-trash"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in customers) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(customers[k])){
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}
