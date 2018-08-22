const userForm = require('./userForm')
const userMain = require('./userMain')
const dataManager = require('./dataManager')


document.querySelector('#userLoginForm').innerHTML = userForm.createNewForm()

userMain()