angular.module('topper.utilSrvc',[])

.factory('Util', function() {

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

    return {
        shuffle : arrayShuffle
    }
})
