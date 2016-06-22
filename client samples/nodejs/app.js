var vorlonWrapper = require("vorlon-node-wrapper");
var serverUrl = "http://localhost:1337";
var dashboardSession = "default";

vorlonWrapper.start(serverUrl, dashboardSession, false);

console.log({
    "ok": "oui",
    "non": "si"
});

var a = 2;
var first = function(){
    setTimeout(
        function(){
            console.log(a++);
            second();
        },
        1000
    );
} 

var second = function(){
    setTimeout(
        function(){
            console.log(a++);
            first();
            
            if (a > 2) {
                
                var XMLHttpRequest = require("xhr2");
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log("xhr OK");
                        }
                    }
                }

                xhr.open("GET", "http://www.google.fr");
                xhr.send();
            }
        },
        1000
    );
}

first();

