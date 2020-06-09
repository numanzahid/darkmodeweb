//write HTML that should be added to the page. Only needed when you have noe control over HTML of the page. Select wrapper where icon should be added.
// var setIconContainerClass = document.querySelector('.add-btn');
// var insertIconHTML = '<button class="dark-btn" type="button" onclick="btnThemeSwitch();" title="Toggle light mode"><svg aria-hidden="true" class="svg-icon" width="24" height="24"><path d="M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"></path></svg></button>';
// setIconContainerClass.insertAdjacentHTML('beforeend', insertIconHTML);

(function () {
    var themeButton = document.getElementById('theme-button');
    var body = document.getElementsByTagName("body")[0];

    if (localStorage.getItem('theme') === 'dark') {
        themeSwitch('dark');
    } else if (localStorage.getItem('theme') === 'light') {
        themeSwitch('light');
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        themeSwitch('light')
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        themeSwitch('dark')
    }

    //button function
    themeButton.addEventListener('click', buttonFunction);
    function buttonFunction() {
        if (body.classList.contains('light')) {
            themeSwitch('dark');
            localStorage.setItem('theme', 'dark');
        } else if (body.classList.contains('dark')) {
            themeSwitch('light');
            localStorage.setItem('theme', 'light');
        }
    }

    // sync between tabs // listener for storage
    window.addEventListener('storage', function (e) {
        console.log('storageListener');
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                themeSwitch('dark');
            } else if (localStorage.getItem('theme') === 'light') {
                themeSwitch('light');
            }
        }
    });

    // listener for prefers-color-scheme
    if (localStorage.getItem('theme')== null) {
        window.matchMedia("(prefers-color-scheme: light)").addEventListener('change', function () {
            if (window.matchMedia("(prefers-color-scheme: light)").matches) {
                themeSwitch('light')
            } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                themeSwitch('dark')
            }
        });
    }


    function themeSwitch(color) {
        if (color === 'dark') {
            body.classList.add("dark");
            body.classList.remove("light");
        } else if (color === 'light') {
            body.classList.add("light");
            body.classList.remove("dark");
        }
    }
})();
