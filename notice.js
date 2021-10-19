let form = document.getElementById("form")
let title = document.getElementById("title")
let body = document.getElementById("body")
let submitBtn = document.getElementById("submit")


form.addEventListener('submit', function(e) {
    e.preventDefault() // prevent blank submsission 

    //fetch post request 
    fetch("https://noticebord.herokuapp.com/api/notices", {
        method: 'POST',
        body: JSON.stringify({
            "title": title.value,
            "body": body.value,
            "anonymous": true,
            "public": true
        }),
        headers: {
            "Content-type": "application/json , charset=UTF-8",
            "Accept": "application/json "
        }
    })

    .then(function(response) {
        let data = response.json()
        console.log(data)

        //clear notice form 
        title.value = ""
        body.value = ""
        alert(`Notice is saved!`)
    })

})