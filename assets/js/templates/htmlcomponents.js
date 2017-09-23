function sideNav(isLogedin){
    console.log(isLogedin);
    let sideNav = ``;
    if (isLogedin === true) {
        sideNav = `
            <li><div class="side-nav-title user-id=""><h1>Hello</h1></div></li>
            <li><a onclick="loadSignUp()" class="btn btn-flat">Sign Up</a></li>
            <li><a onclick="loadLogin()" class="btn btn-flat">Login</a></li>
        `
    } else {
        sideNav = `
            <li><div class="side-nav-title user-id=""><h1>Hello </h1></div></li>
            <li><a onclick="loadProfile()" class="btn btn-flat">Edit Profile</a></li>
            <li><a onclick="loadActivitySearch()" class="btn btn-flat">Activity Search</a></li>
            <li><a onclick="loadGroups()" class="btn btn-flat">Groups</a></li>
            <li><a onclick="loadInterestMap()" class="btn btn-flat">Interest Map</a></li>
            <li><a onclick="loadActivityPlanner()" class="btn btn-flat">Activity Planner</a></li>
        `
    }
    let desktopScreen = `<p class="show-on-large">This website is currently under construction with a mobile first development cycle. Check back later for a desktop experience.</p>`;

    $('ul[container-type="mobile-side-nav"]').html(sideNav);
    $('ul[container-type="desktop-side-nav"]').html(``);
    $('ul[container-type="content"]').html(desktopScreen);
}

function loadSignUp() {
    let content = `
        <div class="container" container-type="signup-container">
            <div class="row">
                <div class="col s12">
                    <h4 title-type="signup">SIGN UP OR LOGIN</h4>
                    <div class="row" container-type="signup">
                        <div class="input-field col s12"> 
                            <input placeholder="User Name" id="username" type="text" class="validate">
                            <label for="username">User Name</label>
                        </div>
                        <div class="input-field col s12"> 
                            <input placeholder="Password" id="password" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field col s12"> 
                            <input placeholder="Full Name" id="name" type="text" class="validate">
                            <label for="name">Full Name</label>
                        </div>
                        <div class="input-field col s12"> 
                            <input placeholder="City" id="city" type="text" class="validate">
                            <label for="city">City</label>
                        </div>
                        <div class="input-field col s12"> 
                            <input placeholder="State" id="state" type="text" class="validate">
                            <label for="state">State</label>
                        </div>
                    </div>
                    <div container-type="signup-error">
                    </div>
                    <div class="row" container-type="signup-footer">
                        <div class="col s6">
                            <a class="btn btn-default" onclick="signUp()">Sign Up</a>
                        </div>
                        <div class="col s6">                
                            <a class="btn btn-flat" onclick="loadLogin()">Skip to Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('div[container-type="content"]').html(content);
}

function loadLogin() {
    let content = `
        <div class="container" container-type="signup-container">
            <div class="row">
                <div class="col s12">
                    <h4 title-type="signup">LOGIN</h4>
                    <div class="row" container-type="signup">
                        <div class="input-field col s12"> 
                            <input placeholder="User Name" id="username" type="text" class="validate">
                            <label for="username">User Name</label>
                        </div>
                        <div class="input-field col s12"> 
                            <input placeholder="Password" id="password" type="password" class="validate">
                            <label for="password" data-error="" >Password</label>
                        </div>
                    </div>
                    <div container-type="login-error">
                    </div>
                    <div class="row" container-type="signup-footer">
                        <div class="col s12">
                            <a class="btn btn-default" onclick="beginLogin()">LOGIN</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('div[container-type="content"]').html(content);
}

function loadInterestMap() {
    let content = `
        <h2>Feature to added soon</h2>
    `;

    $('div[container-type="content"]').html(content);
}

function loadPlacesSwiper() {
    let content = `
        <div class="row">
            <div class="col s12 m6" container-type="top-menu">
                <a onclick="addCard()" class="btn btn-default">Load More Activities</a>
            </div>
        </div>

        <div class="row" container-type="activities">

        </div>
    `;

    $('div[container-type="content"]').html(content);
}

function loadProfile() {
    let content = `
        <h2>Feature to added soon</h2>
    `;

    $('div[container-type="content"]').html(content);
}

function loadGroups() {
    let content = `
        <h2>Feature to added soon</h2>
    `;

    $('div[container-type="content"]').html(content);
}

function loadActivityPlanner() {
    let content = `
        <h2>Feature to added soon</h2>
    `;

    $('div[container-type="content"]').html(content);
}

function loadActivityResults() {
    loadPlacesSwiper();
}

function loadActivitySearch() {
    let content = `
        <div class="row" container-type="activity-search-header">
            <div class="input-field col s12">
                <select onchange="test($(this))">
                    <option value="" disabled selected>SAVED SEARCHES</option>
                    <option value="saved-1">SAVED-1</option>
                    <option value="saved-2">SAVED-2</option>
                    <option value="saved-3">SAVED-3</option>
                </select>
                <label>SAVED SEARCHES</label>
            </div>
        </div>
        <div container-type="activity-search">
            <div class="row box">
                <div class="col s6 valign-wrapper" onclick="selectKeyword($(this))">
                    <img src="/assets/images/food.jpeg">
                    <h4 class="center-align">FOOD</h4>
                </div>
                <div class="col s6 valign-wrapper" onclick="selectKeyword($(this))">
                    <img src="/assets/images/music.jpeg">
                    <h4>MUSIC</h4>
                </div>
            </div>
            <div class="row box">
                <div class="col s6 valign-wrapper" onclick="selectKeyword($(this))">
                    <img src="/assets/images/events.jpg">
                    <h4>EVENTS</h4>
                </div>
                <div class="col s6 valign-wrapper" onclick="selectKeyword($(this))">
                    <img src="/assets/images/outdoor.jpeg">
                    <h4>OUTDOOR</h4>
                </div>
            </div>
        </div>
        <div class="row" container-type="activity-search-footer">
            <div class="col s12 m6">
                <a onclick="discover()" class="btn btn-flat btn-large grey lighten-4">DISCOVER</a>
            </div>
            <div class="col s12 m6">
                <a onclick="customSearch()" class="btn btn-flat btn-large grey lighten-4">CUSTOM SEARCH</a>
            </div>
        </div>
    `;

    $('div[container-type="content"]').html(content);
    $('body').addClass('activity-search-screen');
    setTimeout(function(){
        $('select').material_select();
    }, 100)  
}

function starRating(rating){
    let content = ``;
    for(k = 1; k < 6; k++){
        if (k <= Math.floor(rating)) {
            content += `<span><i class="material-icons yellow-text text-darken-1">star</i></span>`
        } else if ((k - rating) < 1) {
            content += `<span><i class="material-icons yellow-text text-darken-1">star_half</i></span>`
        } else {
            content += `<span><i class="material-icons yellow-text text-darken-1">star_border</i></span>`
        }
    }
    return content;
}

function priceLevel(data){
    let content = ``;
    if(data.hasOwnProperty('price_level')){
        for(k = 1; k < 5; k++){
            if (k <= data.price_level) {
                content += `<span><i class="material-icons green-text text-darken-1">attach_money</i></span>`        
            } else {
                content += `<span><i class="material-icons grey-text text-lighten-2">attach_money</i></span>`
            }
        }
    } else {
        for(k = 1; k < 5; k++){
            content += `<span><i class="material-icons grey-text text-lighten-2">attach_money</i></span>`
        }
    }
    return content;
}


function outdoorModal() {
    let content = `
        <div id="keywordSelection" class="modal">
            <div class="modal-content">
                <h4 title-type="modal-title">OUTDOOR</h4>
                <ul class="collection" collection-type="keyword-selection">
                    <li class="collection-item" data="bbq"><div>BBQ<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="indian"><div>INDIAN<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="sushi"><div>SUSHI<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="chinese"><div>CHINESE<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="bar"><div>BAR<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                </ul>
            </div>
            <div class="modal-footer">
                <a onclick="activitySearch($(this))" class="btn btn-default">Search</a>
            </div>
        </div>
    `;

    $('div[container-type="modals"]').html(content);
    setTimeout(function(){
        $('.modal').modal();
        $('.modal').modal('open');
    }, 100) 
}

function eventsModal() {
    let content = `
        <div id="keywordSelection" class="modal">
            <div class="modal-content">
                <h4 title-type="modal-title">EVENTS</h4>
                <ul class="collection" collection-type="keyword-selection">
                    <li class="collection-item" data="bbq"><div>BBQ<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="indian"><div>INDIAN<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="sushi"><div>SUSHI<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="chinese"><div>CHINESE<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="bar"><div>BAR<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                </ul>
            </div>
            <div class="modal-footer">
                <a onclick="activitySearch($(this))" class="btn btn-default">Search</a>
            </div>
        </div>
    `;

    $('div[container-type="modals"]').html(content);
    setTimeout(function(){
        $('.modal').modal();
        $('.modal').modal('open');
    }, 100) 
}

function musicModal() {
    let content = `
        <div id="keywordSelection" class="modal">
            <div class="modal-content">
                <h4 title-type="modal-title">MUSIC</h4>
                <ul class="collection" collection-type="keyword-selection">
                    <li class="collection-item" data="bbq"><div>BBQ<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="indian"><div>INDIAN<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="sushi"><div>SUSHI<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="chinese"><div>CHINESE<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="bar"><div>BAR<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                </ul>
            </div>
            <div class="modal-footer">
                <a onclick="activitySearch($(this))" class="btn btn-default">Search</a>
            </div>
        </div>
    `;

    $('div[container-type="modals"]').html(content);
    setTimeout(function(){
        $('.modal').modal();
        $('.modal').modal('open');
    }, 100) 
}

function foodModal() {
    let content = `
        <div id="keywordSelection" class="modal">
            <div class="modal-content">
                <h4 title-type="modal-title">FOOD</h4>
                <ul class="collection" collection-type="keyword-selection">
                    <li class="collection-item" data="bbq"><div>BBQ<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="indian"><div>INDIAN<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="sushi"><div>SUSHI<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="chinese"><div>CHINESE<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                    <li class="collection-item" data="bar"><div>BAR<a onclick="removeItem($(this))" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                </ul>
            </div>
            <div class="modal-footer">
                <a onclick="activitySearch($(this))" class="btn btn-default">Search</a>
            </div>
        </div>
    `;

    $('div[container-type="modals"]').html(content);
    setTimeout(function(){
        $('.modal').modal();
        $('.modal').modal('open');
    }, 100) 
}