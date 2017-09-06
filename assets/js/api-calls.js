function getPlaces(){
    $.ajax({
        url:'http://127.0.0.1:5000/api/places',
        type: 'GET',
        success: function(data){
            //console.log(data);
            loadResults(data);
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
            checkLogin();
        }
    })
}

function findUser(data) {

}