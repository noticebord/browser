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
            "topics" : [],
            "anonymous": true,
            "public": true
        }),
        headers: {
            "Content-type": "application/json , charset=UTF-8",
            "Accept": "application/json "
        }
    })
    .then(function(response) {
        response.json().then(function (data) {
            alert(`Your notice (${data.title}) has been saved!`)
        })

        //clear notice form 
        title.value = ""
        body.value = ""
    })

})