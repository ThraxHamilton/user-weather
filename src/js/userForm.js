const userForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#username").value = ""
            document.querySelector("#password").value = ""
            document.querySelector("#zip-code").value = ""
        }
    },
    createNewForm: {
        value: () => {
            return `
        <fieldset>
            <label for="username">Username:</label>
            <input required type="text" id="username">
        </fieldset>
        
        <fieldset>
            <label for="password">Password</label>
            <textarea id="password"></textarea>
            </fieldset>

        <fieldset>
            <label for="zip-code">Zip Code</label>
            <textarea id="zip-code"></textarea>
            </fieldset>

        <button id="register">Register</button>
        <button id='login'>Login</button>`
        }
    }
})
module.exports = userForm
