function sideNav(isAuthenticated){
    let sideNav = ``;
    if (isAuthenticated === true) {
        sideNav = `
            <li><div class="side-nav-title user-id=""><h1>Hello</h1></div></li>
            <li><a onclick="loadSignUp()" class="btn btn-default">Sign Up</a></li>
        `
    } else {
        sideNav = `
            <li><div class="side-nav-title user-id=""><h1>Hello </h1></div></li>
            <li><a onclick="loadProfile()" class="btn btn-default">Edit Profile</a></li>
            <li><a onclick="loadGroups()" class="btn btn-default">Groups</a></li>
            <li><a onclick="loadInterestMap()" class="btn btn-default">Interest Map</a></li>
            <li><a onclick="loadActivityPlanner()" class="btn btn-default">Activity Planner</a></li>
        `
    }
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
                    <div class="row" container-type="signup-footer">
                        <div class="col s12">
                            <a class="btn btn-default" onclick="logIn()">LOGIN</a>
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
    
    `;

    $('div[container-type="content"]').html(content);
}

function loadGroups() {
    let content = `
    
    `;

    $('div[container-type="content"]').html(content);
}

function loadActivityPlanner() {
    let content = `
    
    `;

    $('div[container-type="content"]').html(content);
}

function loadActivitySearch() {
    let content = `
        
    `;

    $('div[container-type="content"]').html(content);
}