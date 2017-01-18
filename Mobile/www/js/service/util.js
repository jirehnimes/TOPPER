angular.module('topper.utilSrvc',[])

.factory('Util', function($cordovaToast) {

    function arrayShuffle(aData) {
        if (aData.constructor !== Array) {
            console.error('Data is not an array.');
            return false;
        }

        // Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for (var i = aData.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = aData[i];
            aData[i] = aData[j];
            aData[j] = temp;
        }

        return aData;
    }

    function displayMessage(sText) {
        if (window.cordova) {
            $cordovaToast.show(sText, 'long', 'bottom');
        } else {
            console.log(sText);
        }
    }

    function convertToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return ('0' + hrs).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + secs).slice(-2);
    }

    return {
        shuffle : arrayShuffle,
        message : displayMessage,
        time    : convertToTime
    }
})
