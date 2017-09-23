$( document ).ready(function(){
    $('.button-collapse').sideNav();
    //$('.content-container').load('home.html');
    checkLogin();
    Materialize.updateTextFields();
    
});

var isFirstPage = false;

function loadResults(data){
    console.log(data);
    if (data.length > 0){
        console.log(data);
        for(i=0; i < data.length; i++){
            console.log(data[i]);
            addCard(data[i])
        }
    }
}

function checkLogin() {
    var isLoggedIn = localStorage.getItem('isLoggedin');
    if (isLoggedIn === 'true'){
        $('body').removeClass('sign-login-screen');
        loadActivitySearch();
        sideNav(isLoggedIn);
    } else {
        loadSignUp();
        $('body').addClass('sign-login-screen');
        sideNav(isLoggedIn);
    }
}

function beginLogin() {
    var username = $('#username').val();
    var password = $('#password').val();

    if (username != '' && password != ''){
        $('div[container-type="signup-error"]').html(``);
        var data = {'username':username, 'password':password}
        logIn(JSON.stringify(data));
    } else {
        $('div[container-type="login-error"]').html(`<div class="row"><p style="color:red; font-weight:700; text-align:center;">Form is not completely filled out.</p></div>`);
    }
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
        createUser(JSON.stringify(data));
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
                <p>Address: ${data.vicinity}</p>
                ${starRating(data.rating)}
            </div>
            <div class="card-action">
                <a onclick="updateInterest($(this))" interest-type="-1">Hate It</a>
                <a onclick="updateInterest($(this))" interest-type="0">Interested</a>
                <a onclick="updateInterest($(this))" interest-type="1">Like It</a>
            </div>
        </div>
    </div>
    `;
    $('div[container-type="activities"]').append(card);
}

function test(element){
    value = $(element).val();
    console.log(value);
    Materialize.toast(value, 1000);
}

function discover(){
    Materialize.toast('Feature not implemented!', 4000);
}

function customSearch(){
    Materialize.toast('Feature not implemented!', 4000);
}

function selectKeyword(element){
    var text = $(element).find('h4').text();
    if(text.toLowerCase() === 'food') {
        foodModal();
    } else if(text.toLowerCase() === 'music'){
        musicModal();
    } else if(text.toLowerCase() === 'events'){
        eventsModal();
    } else if(text.toLowerCase() === 'outdoor'){
        outdoorModal();
    };
}

function removeItem(element) {
    $(element).closest('li').remove();
}

function activitySearch(element) {
    var elements = $(element).closest('.modal').find('ul[collection-type="keyword-selection"]');
    var type = $(element).closest('.modal').find('h4[title-type="modal-title"]').text();
    let data = {'type': type};
    var dataArray = [];
    
    $.each(elements.find('.collection-item'), function(key, value){
        let keyValue = {};
        keyValue.keyword = $(this).attr('data');
        dataArray.push(keyValue);
    })
    data.keywords = dataArray;
    data.user_id = localStorage.getItem('user_id');
    data.get_next_page = isFirstPage;
    getPlaces(JSON.stringify(data));
}

function updateInterest(element) {
    var interestType = $(element).attr('interest-type');
    let data = {};
    data.user_id = localStorage.getItem('user_id');
    data.place_id = $(element).closest('div[place-id]').attr('place-id');
    data.interest_type = interestType;

    postInterest(JSON.stringify(data));
}