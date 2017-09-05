$( document ).ready(function(){
    $('.button-collapse').sideNav();
    $('.content-container').load('home.html');
    getPlaces();
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

function addCard(data) {
    let card = `
    <div class="col s12 m3">
        <div class="card white darken-2">
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