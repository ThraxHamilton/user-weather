const userForm = require('./userForm')
const dataManager = require('./dataManager')

function addUserListener () {
    document.querySelector('#login').addEventListener('click',()=>{
        const user = {
            user: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
            zip: document.querySelector("#zip-code").value
        }
        // API function
        dataManager.saveUserInfo(user).then(() => {
            // Clear form after submit
            // cityForm.clearForm()
            // List cities after saving
            // cityList()
        })
    })
}

module.exports = addUserListener