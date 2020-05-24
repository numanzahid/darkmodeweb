//select class of icon container
var setIconContainerClass = document.querySelector('.add-btn');
//write html the should be inseted
var insertIconHTML = '<button class="web-dark-btn" type="button" onclick="changeMode();" title="Toggle light mode"><svg aria-hidden="true" class="svg-icon" width="24" height="24"><path d="M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"></path></svg></button>';
setIconContainerClass.insertAdjacentHTML('beforeend', insertIconHTML);

// mode changer
var body = document.getElementsByTagName("body")[0];
// these two listeners can go...
window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").addListener(useBrowserScheme);
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addListener(useBrowserScheme);


addStorageColor();

function changeMode() {
    var hasDark = body.classList.contains('web-dark');
    var hasLight = body.classList.contains('web-light');
    if (hasLight) {
        addDark();
        localStorage.darkmodeweb = 'dark';
    } else if (hasDark) {
        addLight();
        localStorage.darkmodeweb = 'light';
    }
    return localStorage.darkmodeweb;
}


window.addEventListener('storage', function(e) {
    addStorageColor();
    console.log('Woohoo, someone changed my localstorage va another tab/window!');
});


// callback functions

function addStorageColor() {
    if (localStorage.darkmodeweb === 'dark') {
        addDark();
    } else if (localStorage.darkmodeweb === 'light') {
        addLight();
    } else if (localStorage.darkmodeweb == null) {
        useBrowserScheme();
    }
}

function useBrowserScheme() {
    var browserPreferslight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    var browserPrefersdark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (browserPreferslight && localStorage.darkmodeweb == null) {
        body.classList.toggle("web-light", true);
        body.classList.toggle("web-dark", false);
    } else if (browserPrefersdark && localStorage.darkmodeweb == null) {
        body.classList.toggle("web-dark", true);
        body.classList.toggle("web-light", false);
    }
}

function addDark() {
    body.classList.add("web-dark");
    body.classList.add("dark-forced");
    body.classList.remove("web-light");
    body.classList.remove("light-forced");
}

function addLight() {
    body.classList.remove("web-dark");
    body.classList.remove("dark-forced");
    body.classList.add("web-light");
    body.classList.add("light-forced");
}

