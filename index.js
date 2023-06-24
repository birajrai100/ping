
const form = document.getElementById("form").addEventListener("submit", validateEmail);
const error = document.getElementById("error");
const email = document.getElementById("Email");

function validateEmail(e) {
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/
    if (!(email.value.match(regex))) {
        e.preventDefault()
        error.classList.remove("err");
        email.classList.add("errorborder");
    }
    else {
        email.classList.remove("errorborder");
    }
};


