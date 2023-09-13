document.addEventListener('DOMContentLoaded', function() {
    // Load birthdays from LocalStorage
    loadBirthdays();

    // Form submission event
    const form = document.getElementById('addForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        
        addBirthday(name, birthdate);
    });
});

function loadBirthdays() {
    const birthdays = JSON.parse(localStorage.getItem('birthdays') || '[]');
    birthdays.forEach(function(birthday) {
        createBirthdayElement(birthday.name, birthday.date);
    });
}

function addBirthday(name, date) {
    const birthdays = JSON.parse(localStorage.getItem('birthdays') || '[]');
    birthdays.push({name, date});
    localStorage.setItem('birthdays', JSON.stringify(birthdays));

    createBirthdayElement(name, date);
}

function removeBirthday(name, date) {
    let birthdays = JSON.parse(localStorage.getItem('birthdays') || '[]');
    birthdays = birthdays.filter(birthday => !(birthday.name === name && birthday.date === date));
    localStorage.setItem('birthdays', JSON.stringify(birthdays));
}

function createBirthdayElement(name, date) {
    const ul = document.getElementById('birthdayList');
    const li = document.createElement('li');
    li.textContent = `${name}: ${date} `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-button';
    removeBtn.addEventListener('click', function() {
        li.remove();
        removeBirthday(name, date);
    });
    li.appendChild(removeBtn);
    ul.appendChild(li);
}


// ... existing code ...

function createBirthdayElement(name, date) {
    const ul = document.getElementById('birthdayList');
    const li = document.createElement('li');
    li.className = 'list-item';  // Add class here
    const span = document.createElement('span');
    span.textContent = `${name}: ${date}`;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-button';
    removeBtn.addEventListener('click', function() {
        li.remove();
        removeBirthday(name, date);
    });
    
    li.appendChild(span);
    li.appendChild(removeBtn);
    ul.appendChild(li);
}