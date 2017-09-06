function getPlaces(type, keyword){
    var userId = localStorage.getItem('user_id');
    var data = JSON.stringify({'type':type, 'keyword':keyword,'user_id':userId});
    $.ajax({
        url:'http://127.0.0.1:5000/api/places',
        type: 'GET',
        data: data,
        contentType:'application/json; charset=utf-8',
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