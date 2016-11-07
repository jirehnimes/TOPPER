angular.module('topper.popoverSrvc',[])

.factory("Popover", function($q, $ionicPopup) {

    // A confirm dialog
    var confirmEndOfExam = function() {

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

    return {
        confirmEndOfExam: function() {
            return confirmEndOfExam();
        }
    }
})
