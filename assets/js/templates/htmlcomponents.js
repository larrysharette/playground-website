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
    
    `;

    $('div[container-type="content"]').html(content);
}

function loadInterestMap() {
    let content = `
    
    `;
}

function loadProfile() {
    let content = `
    
    `;
}

function loadGroups() {
    let content = `
    
    `;
}

function loadActivityPlanner() {
    let content = `
    
    `;
}