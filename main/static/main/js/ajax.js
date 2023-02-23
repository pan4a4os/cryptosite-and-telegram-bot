function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + "=")) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken')

function getSelectValue(){
    var cryptocurrency = document.querySelector('[name="cryptocurrency"]').value;
    console.log(cryptocurrency);
    if (cryptocurrency == 'BTC') {
        $("#div-btc").hide();
    } else {
        $('#div-btc').toggle();
    }
}


function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById("output_image");
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

$(document).ready(function () {
    $("#ajax-post").click(function() {
        let name = document.querySelector('[name="name"]').value;
        console.log(name);

        let public_key = document.querySelector('[name="public_key"]').value;
        console.log(public_key);

        let cryptocurrency = document.querySelector('[name="cryptocurrency"]').value;
        console.log(cryptocurrency);

        $.ajax({
            type: 'POST',
            async: true,
            url: '/ajax/',
            dataType:"json",
            data: JSON.stringify({name: name, public_key: public_key, cryptocurrency: cryptocurrency}),
            headers: {
            "X-Requested_With": "XMLHttpRequest",
            "X-CSRFToken": csrftoken,
            },
            success: (data) => {
                $("#text_1").append(data['name']);
                $("#text_2").append(data['public-key']);
            },
        });
    });
});

$(document).ready(function () {
//    console.log($(".ajax-get"));
    $(".ajax-get").click(function(e) {
    let wallet = e.target.dataset.id;
    console.log(wallet);
    });
});