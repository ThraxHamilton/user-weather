const userForm = require('./userForm')
const userMain = require('./userMain')
const dataManager = require('./dataManager')


document.querySelector('#userLoginForm').innerHTML = userForm.createNewForm()
document.querySelector("#login").addEventListener("click", verifyUser)
userMain()

function verifyUser(newUser) {
    // Get all users using fetch()
    dataManager.getUserInfo()
    .then((users) => {
        const username = document.querySelector("#username").value
        // const password = document.querySelector("#").value
        // Filter function with 2 conditions for email and user
        const userFilter = users.filter((user) => {
            // .filter creates a new array
            return username === user.username
        })
        // "if" statement to check length of array. 0=for new user; anything else "alert()"
        if (userFilter.length === 0) {
            // post user to API
            dataManager.getUserInfo(newUser)
        }
        else {
            alert("Please choose another login")
        }
    })
}