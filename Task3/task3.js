const tbody = document.querySelector('tbody');
const form = document.getElementById('profileForm');
form.addEventListener('submit', submitUsers);
let count = 1;
let users = [];

function submitUsers(e) {
    e.preventDefault();
    const user = new User(form.name.value, form.gender.value, form.date.value,form.address.value,form.phone.value,form.email.value);
    const tr = user.renderUsers();
    users.push(user);
    user.handleClick(tr);

    count++;
    form.reset();
}

class SuperUser {
    constructor(name, gender, date, address, phone, email) {
        this.name = name;
        this.gender = gender;
        this.date = date;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

}

class User extends SuperUser {
    constructor(name, gender, date, address, phone, email, isDataVisible) {
        super(name, gender, date, address, phone, email, isDataVisible);
        this.isDataVisible = true;
    }
    renderUsers() {
        const tr = document.createElement('tr');
        for (let key in this) {
            if ( !(key === 'isDataVisible') ) {
                const td = document.createElement('td');
                td.innerHTML = this[key];
                tr.appendChild(td); 
            } 
        }
        tbody.appendChild(tr);
        return tr;
    }
    changeDataVisibility(tag) {
        if (this.isDataVisible === true) {
            tag.classList.add('notVisible');
            this.isDataVisible = false;
        } else {
            this.isDataVisible = true;
            tag.classList.remove('notVisible');
        }
    }
    handleClick(tag) {
        tag.addEventListener('click', (e) => {
            this.changeDataVisibility(tag);
        })
    }
}






