$( document ).ready(function(){
    $('.button-collapse').sideNav();
    $('.content-container').load('home.html');
});

function addCard() {
    let card = `
    <div class="row">
        <div class="col s12 m3">
            <div class="card white darken-2">
                <div class="card-content">
                    <span class="card-title">This is a card</span>
                    <p>This is a card paragraph</p>
                </div>
                <div class="card-action">
                    <a href="#">Hate It</a>
                    <a href="#">Interested</a>
                    <a href="#">Like It</a>
                </div>
            </div>
        </div>
    </div>
    `
    $('div[container-type="activities"]').append(card);
}