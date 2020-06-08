//write HTML that should be added to the page. Only needed when you have noe control over HTML of the page. Select wrapper where icon should be added.
// var setIconContainerClass = document.querySelector('.add-btn');
// var insertIconHTML = '<button class="web-dark-btn" type="button" onclick="btnThemeSwitch();" title="Toggle light mode"><svg aria-hidden="true" class="svg-icon" width="24" height="24"><path d="M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"></path></svg></button>';
// setIconContainerClass.insertAdjacentHTML('beforeend', insertIconHTML);

(function () {
    var themeButton = document.getElementById('theme-button');
    var body = document.getElementsByTagName("body")[0];
// listener for prefers-color-scheme
    window.matchMedia("(prefers-color-scheme: light)").addListener(applyBrowserScheme);
    window.matchMedia("(prefers-color-scheme: dark)").addListener(applyBrowserScheme);
    themeButton.addEventListener('click', btnThemeSwitch);
    applyStorageScheme();
// callback functions
    function applyStorageScheme() {
        if (localStorage.getItem('theme') === 'dark') {
            themeSwitch('dark');
        } else if (localStorage.getItem('theme') === 'light') {
            themeSwitch('light');
        } else if (localStorage.getItem('theme') == null) {
            applyBrowserScheme();
        }
    }
    function applyBrowserScheme() {
        var browserPreferslight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
        var browserPrefersdark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (browserPreferslight && localStorage.getItem('theme') == null) {
            browserSwitch('light');
        } else if (browserPrefersdark && localStorage.getItem('theme') == null) {
            browserSwitch('dark');
        } else {
            browserSwitch('dark');
        }
    }
    function themeSwitch(color) {
        if (color === 'dark') {
            body.classList.add("web-dark", "dark-forced");
            body.classList.remove("web-light", "light-forced");
        } else if (color === 'light') {
            body.classList.remove("web-dark", "dark-forced");
            body.classList.add("web-light", "light-forced");
        }
    }
    function browserSwitch(color) {
        if (color === 'light'){
            body.classList.toggle("web-light", true);
            body.classList.toggle("web-dark", false);
        } else if (color === 'dark') {
            body.classList.toggle("web-dark", true);
            body.classList.toggle("web-light", false);
        }
    }
//button function
    function btnThemeSwitch() {
        if (body.classList.contains('web-light')) {
            themeSwitch('dark');
            localStorage.setItem('theme', 'dark');
        } else if (body.classList.contains('web-dark')) {
            themeSwitch('light');
            localStorage.setItem('theme', 'light');
        }
    }
// sync between tabs // listener for storage
    window.addEventListener('storage', function(e) {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                themeSwitch('dark');
            } else if (localStorage.getItem('theme') === 'light') {
                themeSwitch('light');
            }
        }
    });
})();
