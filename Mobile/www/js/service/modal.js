angular.module('topper.modalSrvc',[])

.factory("Modal", function($ionicModal) {

	var _oScope = null;

	var _sTemplate = 'view/modal.html';

	function init(oScope) {
		// Initializing $scope object
		if (_oScope === null) {
			_oScope = oScope;
		}

		var _oOptions = {
			scope: _oScope,
			animation: 'slide-in-up'
		}

		$ionicModal.fromTemplateUrl(
			'/view/modal.html', 
			_oOptions
		).then(function(modal) {
			_oScope.modal = modal;
		});

		// Cleanup the modal when we're done with it!
		_oScope.$on('$destroy', function() {
			_oScope.modal.remove();
		});

		// Execute action on hide modal
		_oScope.$on('modal.hidden', function() {
		// Execute action
		});

		// Execute action on remove modal
		_oScope.$on('modal.removed', function() {
		// Execute action
		});
	}

	function open() {
		_oScope.modal.show();
	}

	function close() {
		_oScope.modal.hide();
	}

	return {
		init: function(oScope) {
			return init(oScope);
		},

		open: function(scope) {
			return open();
		},

		close: function(scope) {
			return close();
		}
	}
})