const dataManager = require('./dataManager')
const userForm = require('./userForm')
// Make function to hold user eventlistener
function userMain() {
    // Actual eventlistener
    document.querySelector("#login").addEventListener("click", () => {
        const newuser = {
            user: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
            zip: document.querySelector("#zip-code").value
        }
        // API function
        dataManager.saveUserInfo(newuser).then(() => {
            // Clear form after submit
            userForm.clearForm()
            // List cities after saving
            // userList()
        })
    })
    
}
module.exports = userMain