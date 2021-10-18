let form = document.getElementById("form")
let title = document.getElementById("title")
let body = document.getElementById("body")



form.addEventListener('submit', function(e) {
    e.preventDefault() // prevent blank submsission 

    //fetch post request 
    fetch("https://noticebord.herokuapp.com/api/notices", {
        method: 'POST',
        body: JSON.stringify({
            "title": "title",
            "body": "body",
            "anonymous": true,
            "public": true
        }),
        headers: {
            "Content-type": "application/json , charset=UTF-8"
        }
    })

    .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
        })

})