//select class of icon container
var setIconContainerClass = document.querySelector('.add-btn');
//write html the should be inseted
var insertIconHTML = '<button class="js-lightmode-btn" type="button" onclick="changeMode();" title="Toggle light mode"><svg aria-hidden="true" class="svg-icon" width="24" height="24"><path d="M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"></path></svg></button>';
setIconContainerClass.insertAdjacentHTML('beforeend', insertIconHTML);

// mode changer
var body = document.getElementsByTagName("body")[0];
// these two listeners can go...
window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").addListener(useBrowserScheme);
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addListener(useBrowserScheme);

if (localStorage.hasStorage === 'dark') {
    addDark();
} else if (localStorage.hasStorage === 'light') {
    addLight();
} else {
    useBrowserScheme();
}

function changeMode() {
    var hasDark = body.classList.contains('has-darkmode');
    var hasLight = body.classList.contains('has-lightmode');
    if (hasLight) {
        addDark();
        localStorage.hasStorage = 'dark';
    } else if (hasDark) {
        addLight();
        localStorage.hasStorage = 'light';
    }
    return localStorage.hasStorage;
}
// callback functions
function useBrowserScheme() {
    var browserPreferslight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    var browserPrefersdark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (browserPreferslight && localStorage.hasStorage == null) {
        body.classList.toggle("has-lightmode", true);
        body.classList.toggle("has-darkmode", false);
    } else if (browserPrefersdark && localStorage.hasStorage == null) {
        body.classList.toggle("has-darkmode", true);
        body.classList.toggle("has-lightmode", false);
    }
}
function addDark() {
    body.classList.add("has-darkmode");
    body.classList.add("has-darkmode__forced");
    body.classList.remove("has-lightmode");
    body.classList.remove("has-lightmode__forced");
}
function addLight() {
    body.classList.remove("has-darkmode");
    body.classList.remove("has-darkmode__forced");
    body.classList.add("has-lightmode");
    body.classList.add("has-lightmode__forced");
}