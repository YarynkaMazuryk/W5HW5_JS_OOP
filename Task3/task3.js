let users = [];
let dataUsers = [];
const doc = document;
const tbody = doc.querySelector('tbody');
const form = doc.getElementById('profileForm');
form.addEventListener('submit', submitUsers);
function submitUsers() {
    event.preventDefault();
    let data = new FormData(form);
    let tempObj = {};
    for (let value of data.entries()) {
        tempObj[value[0]] = value[1];
    }
    dataUsers.push(tempObj);
    let user = new User(tempObj);
    users.push(user);
    renderUsers(dataUsers);
}
function renderUsers(users) {
    let index = 0;
    clearTable();
    for (obj in users) {
        let tr = document.createElement('tr');
        tr.setAttribute('data-id', index);
        for (key in users[obj]) {
            let td = document.createElement('td');
            td.innerText = users[obj][key]
            tr.appendChild(td);
        }
        handleClick(tr);
        tbody.appendChild(tr);
    }
    index++;
}
function clearTable() {
    while (tbody.firstChild)
        tbody.removeChild(tbody.firstChild)
}
function handleClick(tag) {
    let isDataVisible = true;
    tag.addEventListener('click', (e) => {
        let index = tag.getAttribute("data-id");
        isDataVisible = users[index].changeDataVisibility(isDataVisible, e.target.parentNode)
    })
}
class SuperUser {
    changeDataVisibility(isDataVisible, target) {
        let clickedEl = [...target.children];
        clickedEl.forEach((el, index) => {
            if (index === 0) {
                return;
            } else {
                !isDataVisible ? el.classList.remove('notVisible') : el.classList.add('notVisible');
            }
        })
        return !isDataVisible
    }

}
class User extends SuperUser {
    constructor(data) {
        super(data);
    }
}




