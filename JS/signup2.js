let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let gender = document.getElementsByName('gender')
let email = document.getElementById('email')
let password = document.getElementById('password')
let signup = document.getElementById('signup')

let allUsers = JSON.parse(localStorage.getItem('users')) || []



function sweetArlt(error, title, text) {
    Swal.fire({
        icon: error,
        title: title,
        text: text,
    });
}


function formSubmit(e) {
    e.preventDefault()

    if (!firstName.value ||
        !lastName.value ||
        !email.value ||
        !password.value
    ) {
        return sweetArlt('error', 'Oops', 'Please enter a all fields?')
    }
    if (date.value == 'Date') {
        return sweetArlt('error', 'Oops', 'Please enter a date?')
    }
    if (month.value == 'Month') {
        return sweetArlt('error', 'Oops', 'Please enter a month?')
    }
    if (year.value == 'Year') {
        return sweetArlt('error', 'Oops', 'Please enter a year?')
    }
    if (!password.length < 8) {
        return sweetArlt('error', 'Oops', 'Password at least 8 characters?')
    }

    let userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        date: date.value,
        month: month.value,
        year: year.value,
        email: email.value,
        password: password.value
    }

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userObj.gender = gender[i].value
        }
    }
    if (!userObj.gender) {
        return sweetArlt('error', 'Oops', 'Please select gender?')
    }

    allUsers.push(userObj)

    localStorage.setItem('users', JSON.stringify(allUsers))



}

signup.addEventListener('click', formSubmit)