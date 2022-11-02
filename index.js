const webex = (window.webex = window.Webex.init({
    credentials: {
        access_token: "<YOUR-PERSONAL-ACCESS-TOKEN>"
    }
}));

webex.once(`ready`, function () {
    if (webex.canAuthorize) {
        log("Authorization successful.");
    }
});

// Text area for logging output
var output = document.getElementById("output");
// Log utility function
function log(data) {
    output.value += data += "\n";
}