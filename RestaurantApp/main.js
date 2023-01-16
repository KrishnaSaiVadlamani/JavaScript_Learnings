let table;
let menu;
let tableItemsSearch;
let menuItemsSearch;

function init() {
    table = document.querySelector(".tables");
    menu = document.querySelector(".menu");
    tableItemsSearch = document.querySelector('#tables-search-bar')
    menuItemsSearch = document.querySelector('#menu-items-search-bar')

    build_table("");
    build_menu_table("");

}

var build_table = (input) => {
    table.innerHTML = "";
    for (let value in tables) {
        let div = document.createElement('div');
        div.setAttribute("class", "table_item");
        if (tables[value].name.toLowerCase().includes(input)) {
            calculateTotal(value);
            div.innerHTML = '<div class="border p-3 mt-3" id="' + value + '"><h2 id="' + value + '">' + tables[value].name + '</h2><div><span class="border-end">Rs ' + tables[value].totalAmount + '</span><span>&nbsp;&nbsp;Total Items: ' + tables[value].items.length + '</span></div></div>'
            div.id = value
            div.setAttribute("data-bs-toggle", "modal")
            div.setAttribute("data-bs-target", "#exampleModal")
            div.addEventListener("click", () => {
                modalEdit(value);
                div.classList.add('bg-warning')
            });
            div.addEventListener("dragover", allowDrop);
            div.addEventListener("drop", drop);
            table.appendChild(div);
        }
    }
}

var build_menu_table = (input) => {
    menu.innerHTML = "";
    for (let value in menu_items) {
        let div = document.createElement('div');
        if (menu_items[value].name.toLowerCase().includes(input)) {
            div.innerHTML += '<div class="border p-3 mt-3"><h2>' + menu_items[value].name + '</h2><div><span class="border-end">Rs ' + menu_items[value].price + '</span></div></div>'
            div.id = value
            div.draggable = true;
            div.addEventListener("dragstart", drag);
            menu.appendChild(div);
        }
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("fitem", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let tableId = ev.target.id;
    let fitemId = ev.dataTransfer.getData("fitem");
    let fitem = menu_items[fitemId];
    for (let temp of tables[tableId]['items']) {
        if (temp.name == fitem.name) {
            temp.count += 1;
            build_table("");
            return;
        }
    }
    fitem.count = 1;
    tables[tableId]['items'].push(fitem)
    build_table("");
}

function calculateTotal(value) {
    let totalAmount = 0;
    for (let items of tables[value].items) {
        totalAmount += items.price * items.count;
    }
    tables[value].totalAmount = totalAmount;
}


function updateModal(value) {
    calculateTotal(value);
    let tbody = document.querySelector('tbody');
    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerHTML = tables[value].name + " | Order Tables ";
    tbody.innerHTML = "";
    let ind = 1;
    tables[value].items.forEach((fitem, index) => {
        let tr = document.createElement('tr')
        tr.innerHTML =
            "<th scope='row'>" + ind + "</th>" +
            "<td>" + fitem['name'] + "</td>" +
            "<td>" + fitem['price'] + "</td>";
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let span = document.createElement('span');
        let input = document.createElement('INPUT');
        input.id = "input" + ind;
        input.setAttribute('class', 'form-control abc');
        input.setAttribute('type', 'number');
        input.setAttribute('min', 1);
        input.setAttribute('max', 10);
        input.setAttribute('value', fitem.count);
        td1.appendChild(input);
        tr.appendChild(td1);
        span.setAttribute('class', 'material-icons');
        span.addEventListener('click', () => removeItem(value, index));
        span.append("delete")
        td2.appendChild(span);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        document.querySelector('#input' + ind).addEventListener('change', (e) => changeItemCount(e, value, fitem));
        ind++;
    })
    let tr = document.createElement('tr')
    tr.innerHTML =
        "<th scope='row'></th>" +
        "<td></td>" +
        "<td> Total: " + tables[value].totalAmount + "</td>" +
        "<td></td>" +
        "<td></td>"
    tbody.appendChild(tr);
}

function removeItem(value, index) {
    tables[value].items.splice(index, 1);
    updateModal(value);
}
function changeItemCount(e, value, fitem) {
    for (let i = 0; i < tables[value].items.length; i++) {
        if (tables[value].items[i] == fitem) {
            tables[value].items[i].count = e.target.valueAsNumber;
            break;
        }
    }
    updateModal(value);
}

function modalEdit(value) {
    updateModal(value);
    let modalFooter = document.querySelector('.modal-footer');
    let btn = document.createElement('button')
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn btn-default');
    btn.setAttribute('data-bs-dismiss', 'modal');
    btn.addEventListener('click', () => tableReset(value));
    btn.innerHTML = "CLOSE SESSION ( GENERATE BILL)"
    modalFooter.innerHTML = ""
    modalFooter.appendChild(btn);


}
function tableReset(tab) {
    tables[tab]['items'] = [];
    tables[tab]['totalAmount'] = 0;
    removeBackground();
    build_table("");
}

function removeBackground() {
    document.querySelector('.bg-warning').classList.remove('bg-warning');
    build_table("");
}