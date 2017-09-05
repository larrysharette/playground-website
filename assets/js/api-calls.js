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