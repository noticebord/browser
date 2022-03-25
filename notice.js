const form = document.getElementById("form")
const title = document.getElementById("title")
const body = document.getElementById("body")
const submitBtn = document.getElementById("submit")

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
            "X-Noticebord-Client": "browser",
            "Content-type": "application/json , charset=UTF-8",
            "Accept": "application/json "
        }
    })

    .then(function(response) {
        const data = response.json()

        //clear notice form 
        title.value = ""
        body.value = ""
        alert(`Your notice (${data.title}) has been saved!`)
    })

})