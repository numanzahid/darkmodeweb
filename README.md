Dark Mode Web Respecting prefers-color-scheme and switch
========================================================

This code was inspired by
[stackoverflow.blog](https://stackoverflow.blog/). I started with the
same setting as it was on stackoverflow blog but ended up changing a lot
that I decided to upload it to public repository. There are some
features that I would like you to know

Unlike all the other solutions available online, this code is written
keeping the dark color scheme as first priority.

prefers-color-scheme
--------------------

By default the code respects the `prefers-color-scheme` as defined by
visitor's browser. more about `prefers-color-scheme` on [Mozilla's
Website](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

My main purpose of changes to the original code was to favor the dark
mode. So the website will be designed in dark mode first and it will
prefer dark mode except when visitor's browser is set to light.

If user browser does not support `prefers-color-scheme` or it is set to
`no-preference`, website will be shown in dark theme.

If user browser is set `prefers-color-scheme : light` then website will
be shown in light theme.

Color Scheme Switch
-------------------

Switch can be added to the website anywhere you like. It is an icon in
the example page. But it can be changed to anything.

Switch allows visitor to change the color scheme. It will override the
default behaviour.

If visitor has used the switch to change the color scheme, the new
preference will be saved in browser, and it will always override default
`prefers-color-scheme` behavior.

How to use:
-----------

Usage is very simple. you just have to include the js file (can only be
js code) in you page.

Define css variables under the `root` or `body`. Keep in mind, these are
used for dark mode.

Override css variables for the light mode under the class
`.has-lightmode`.

That is it.

How it works?
-------------

The code will add `.has_darkmode` or `.has_lightmode` class to the body
on page load.

If user has switched color scheme using the theme switcher, body will
additionally contain `.has-lightmode__forced` or `.has-darkmode__forced`
according to the theme.

These additional classes will allow you to modify the color scheme if
you want something different for forced color scheme.
