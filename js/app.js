(function () {

    let windowHeight;

    addEventListener("load", function () {
        let img = document.querySelector(".main-img");
        windowHeight = img.height;
        document.querySelector(".dot-container").style.height = windowHeight + "px";

    });
    window.addEventListener("resize", function () {
        let img = document.querySelector(".main-img");
        windowHeight = img.height;
        document.querySelector(".dot-container").style.height = windowHeight + "px";


    });

    document.addEventListener("mousemove", function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        function getOffset(el) {
            var _x = 0;
            var _y = 0;
            while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                _x += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            return {
                top: _y,
                left: _x
            };
        }
        var elRightEyeX = getOffset(document.querySelector('.dot-right')).left;
        var elRightEyeY = getOffset(document.querySelector('.dot-right')).top;
        var elLeftEyeX = getOffset(document.querySelector('.dot-left')).left;
        var elLeftEyeY = getOffset(document.querySelector('.dot-left')).top;

        // function distance(x1, x2, y1, y2) {
        //     return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        // }
        // console.log(distance(elLeft, mouseX, elTop, mouseY));

        let checkRightX = (mouseX - elRightEyeX),
            checkRightY = (mouseY - elRightEyeY),
            negRightX = false,
            negRightY = false;
        let checkLeftX = (mouseX - elLeftEyeX),
            checkLeftY = (mouseY - elLeftEyeY),
            negLeftX = false,
            negLeftY = false;

        if (checkRightX < 0) {
            checkRightX = checkRightX * -1;
            negRightX = true;
        } else {
            negRightX = false;
        }
        if (checkRightY < 0) {
            checkRightY = checkRightY * -1;
            negRightY = true;
        } else {
            negRightY = false;
        }

        if (checkLeftX < 0) {
            checkLeftX = checkLeftX * -1;
            negLeftX = true;
        } else {
            negLeftX = false;
        }
        if (checkLeftY < 0) {
            checkLeftY = checkLeftY * -1;
            negLeftY = true;
        } else {
            negLeftY = false;
        }


        // let logRightX = Math.log2(checkRightX),
        //     logRightY = Math.log2(checkRightY);
        // let logLeftX = Math.log2(checkLeftX),
        //     logLeftY = Math.log2(checkLeftY);

        let logRightX = (checkRightX / (Math.sqrt(checkRightX))) / 2,
            logRightY = (checkRightY / (Math.sqrt(checkRightY))) / 2;
        let logLeftX = (checkLeftX / (Math.sqrt(checkLeftX))) / 2,
            logLeftY = (checkLeftY / (Math.sqrt(checkLeftY))) / 2;

        if (logRightX > 7) {
            logRightX = 7;
        }
        if (logRightY > 5) {
            logRightY = 5;
        }
        if (logRightX < -7) {
            logRightX = -7;
        }
        if (logRightY < -5) {
            logRightY = -5;
        }
        if (logLeftX > 7) {
            logLeftX = 7;
        }
        if (logLeftY > 5) {
            logLeftY = 5;
        }
        if (logLeftX < -7) {
            logLeftX = -7;
        }
        if (logLeftY < -5) {
            logLeftY = -5;
        }

        //check screen width and apply x/y limits based off that

        if (negRightX == true && negRightY == true) {
            logRightX = logRightX * -1;
            logRightY = logRightY * -1;
            document.querySelector(".right-eye").style.transform = "translate(" + logRightX + "px, " + logRightY + "px)";
        } else if (negRightX == false && negRightY == true) {
            logRightY = logRightY * -1;
            document.querySelector(".right-eye").style.transform = "translate(" + logRightX + "px, " + logRightY + "px)";
        } else if (negRightX == true && negRightY == false) {
            logRightX = logRightX * -1;
            document.querySelector(".right-eye").style.transform = "translate(" + logRightX + "px, " + logRightY + "px)";
        } else {
            document.querySelector(".right-eye").style.transform = "translate(" + logRightX + "px, " + logRightY + "px)";
        }

        if (negLeftX == true && negLeftY == true) {
            logLeftX = logLeftX * -1;
            logLeftY = logLeftY * -1;
            document.querySelector(".left-eye").style.transform = "translate(" + logLeftX + "px, " + logLeftY + "px)";
        } else if (negLeftX == false && negLeftY == true) {
            logLeftY = logLeftY * -1;
            document.querySelector(".left-eye").style.transform = "translate(" + logLeftX + "px, " + logLeftY + "px)";
        } else if (negLeftX == true && negLeftY == false) {
            logLeftX = logLeftX * -1;
            document.querySelector(".left-eye").style.transform = "translate(" + logLeftX + "px, " + logLeftY + "px)";
        } else {
            document.querySelector(".left-eye").style.transform = "translate(" + logLeftX + "px, " + logLeftY + "px)";
        }

    });

})();