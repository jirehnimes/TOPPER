angular.module('topper.popoverSrvc',[])

.factory("Popover", function($q, $ionicPopup) {

    // A confirm dialog
    function confirmEndOfExam() {

        // Initialize promise
        var _mDeferred = $q.defer();

        var confirmPopup = $ionicPopup.confirm({
            title: 'End Of Exam',
            template: 'Are you sure you want to finish the exam?'
        });

        confirmPopup.then(function(result) {
            if (result) {
                _mDeferred.resolve(true);
            } else {
                _mDeferred.resolve(false);
            }
        });

        // Return stored promise
        return _mDeferred.promise;
    };

    function displayRationale(sText) {
        // Initialize promise
        var _mDeferred = $q.defer();

        var confirmPopup = $ionicPopup.alert({
            title: '<b>Rationale</b>',
            template: '<p>'+sText+'</p>'
        });

        confirmPopup.then(function(result) {
            if (result) {
                _mDeferred.resolve(true);
            } else {
                _mDeferred.resolve(false);
            }
        });

        // Return stored promise
        return _mDeferred.promise;
    }

    return {
        confirmEndOfExam : confirmEndOfExam,
        displayRationale : displayRationale
    }
})
