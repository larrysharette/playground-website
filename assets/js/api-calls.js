var baseUrl = 'https://revealcity-api.herokuapp.com'; // deployed app
//var baseUrl = 'http://127.0.0.1:5000'; // localMachine

function getPlaces(data){
    console.log(data);
    $.ajax({
        url: baseUrl + '/api/places',
        type: 'POST',
        data: data,
        contentType:'application/json; charset=utf-8',
        success: function(data){
            //console.log(data);
            loadActivityResults();
            loadResults(data);
        },
        error: function(data){
            Materialize.toast('Nothing returned!', 1000);
        }
    });
}

function postInterest(data){
    $.ajax({
        url: baseUrl + '/api/interests',
        type: 'POST',
        data: data,
        contentType:'application/json; charset=utf-8',
        success: function(data){
            //console.log(data);
            Materialize.toast('Interest Map Updated!', 1000);
        }
    });
}

function createUser(data) {
    $.ajax({
        url: baseUrl + '/api/user',
        type: 'POST',
        data: data,
        contentType:'application/json; charset=utf-8',
        success: function(data){
            localStorage.setItem('isLoggedin',true)
            console.log(data);
            localStorage.setItem('user_id',data.result);
            checkLogin();
        }
    })
}

function logIn(data) {
    console.log(data);
    $.ajax({
        url: baseUrl + '/api/login',
        type: 'POST',
        data: data,
        contentType:'application/json; charset=utf-8',
        success: function(data) {
            localStorage.setItem('isLoggedin',true)
            console.log(data);
            localStorage.setItem('user_id',data.result);
            checkLogin();
        }
    })
}

function findUser(data) {

}