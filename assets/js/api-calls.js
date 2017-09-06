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
    console.log(data);
    // $.ajax({
    //     url: 'http://127.0.0.1:5000/api/user',
    //     type: 'POST',
    //     data: data,
    //     success: function(data){

    //     }
    // })
}

function findUser(data) {

}