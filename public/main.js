$("document").ready(function () {
    let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.matches ? applyDarkTheme(true) : applyDarkTheme(false);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.matches ? applyDarkTheme(true) : applyDarkTheme(false);
});

function applyDarkTheme(dark) {
    var triggerList = [].slice.call(document.querySelectorAll('[dark]'));
    for (item of triggerList) { dark ? $(item).addClass("bg-darker text-white") : $(item).removeClass("bg-darker text-white"); }
    dark ? $("body").addClass("bg-darker text-white") : $("body").removeClass("bg-darker text-white");

    dark ? MyTitleBar.updateTitle('Our Code World Tutorials Rock !') : console.log("ds");
}