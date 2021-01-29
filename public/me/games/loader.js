const exec = require('child_')

$(document).ready(function () {
    runApp('explorer');
});

function downloadGameData() {

}

function writeLocalJson() {

}

function cleanInstall() {

}

function clearJunk() {

}

function runApp(appName) {
    console.log("start");
    exec(`${appName}.exe`, function (err, data) {
        console.log(err);
        console.log(data.toString());
    });
}