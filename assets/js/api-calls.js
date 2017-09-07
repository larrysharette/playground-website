function getPlaces(data){
    $.ajax({
        url:'http://127.0.0.1:5000/api/places',
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
        url:'http://127.0.0.1:5000/api/interests',
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
        url: 'http://127.0.0.1:5000/api/user',
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
        url: 'http://127.0.0.1:5000/api/login',
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