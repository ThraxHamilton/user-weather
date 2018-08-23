let dataManager = Object.create(null, {
    saveUserInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            console.log(saveUserInfo)
            .then(response => response.json())
        }
    },
    getUserInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
            })
                .then(response => response.json())
        }

    },
    saveWeatherInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            console.log(saveUserInfo)
            .then(response => response.json())
        }
    },
    getWeatherInfo: {
        value: (entry) => {
            return fetch("api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c94cf517b7fa318685eb6eed6276b448", {
            })
                .then(response => response.json())
        }

    },
})

module.exports = dataManager