"use strict";
function RunAfter1Sec(fn) {
    setTimeout(fn, 1000);
}
;
RunAfter1Sec(function () {
    console.log("Hello");
});
