$( document ).ready(function(){
    $('.button-collapse').sideNav();
    //$('.content-container').load('home.html');
    checkLogin();
    Materialize.updateTextFields();
});

function loadResults(data){
    console.log(data.results.length);
    if (data.results.length > 0){
        console.log(data);
        for(i=0; i < data.results.length; i++){
            console.log(data.results[i]);
            addCard(data.results[i])
        }
    }
}

function checkLogin() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === true){
        loadActivitySearch();
    } else {
        console.log(isLoggedIn);
        loadSignUp();
    }
}

function logIn() {
    
}

function signUp() {
    var username = $('#username').val();
    var password = $('#password').val();
    var name = $('#name').val();
    var city = $('#city').val();
    var state = $('#state').val();

    if (username != '' && password != '' && name != '' && city != '' && state != ''){
        $('div[container-type="signup-error"]').html(``);
        var data = {'username':username, 'password':password, 'name':name, 'city':city, 'state':state}
        createUser(data);
    } else {
        $('div[container-type="signup-error"]').html(`<div class="row"><p style="color:red; font-weight:700; text-align:center;">Form is not completely filled out.</p></div>`);
    }
}

function addCard(data) {
    let card = `
    <div class="col s12 m3">
        <div class="card white darken-2" place-id="${data.place_id}">
            <div class="card-content">
                <span class="card-title">${data.name}</span>
                <p>Address: ${data.formatted_address}</p>
            </div>
            <div class="card-action">
                <a href="#">Hate It</a>
                <a href="#">Interested</a>
                <a href="#">Like It</a>
            </div>
        </div>
    </div>
    `;
    $('div[container-type="activities"]').append(card);
}

