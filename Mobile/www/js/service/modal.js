angular.module('topper.modalSrvc',[])

.factory("Modal", function($ionicModal) {

    var _oScope = null;

    var _sTemplate = '';

    function init(oScope, sTemplate) {
        // Initializing $scope object
        _oScope = oScope;
        _sTemplate = sTemplate;

        var _oOptions = {
            scope: _oScope,
            animation: 'slide-in-up'
        }

        $ionicModal.fromTemplateUrl(
            'view/modal/' + _sTemplate + '.html',
            _oOptions
        ).then(
            function(modal) {
                _oScope.modal = modal;
            }
        );

        // Cleanup the modal when we're done with it!
        _oScope.$on('$destroy', function() {
            console.log('Modal destroyed!');
            _oScope.modal.remove();
        });

        // Execute action on hide modal
        _oScope.$on('modal.hidden', function() {
        // Execute action
        });

        // Execute action on remove modal
        _oScope.$on('modal.removed', function() {
        // Execute action
            console.log('Modal removed!');
        });
    }

    function open() {
        _oScope.modal.show();
    }

    function close() {
        _oScope.modal.hide();
    }

    return {
        init: function(oScope, sTemplate) {
            return init(oScope, sTemplate);
        },

        open: function() {
            return open();
        },

        close: function() {
            return close();
        },

        destroy: function() {
            return _oScope.modal.remove();
        }
    }
})
