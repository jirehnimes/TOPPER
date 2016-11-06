angular.module('topper.httpSrvc',[])

.factory("Http", function($q, $http) {

	// IP Address of the server
	// var _sServer = 'http://192.168.0.34:8081/';
	var _sServer = 'http://localhost:8081/';

	// Additional options for the request
	var _oOptions = {
		headers: {
    	    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    	}
	};

	function get(sUrl) {

		// Initialize promise
	    var _mDeferred = $q.defer();

	    // HTTP GET Method
	    // To retrieve data from Rest API Server
		$http.get(
			_sServer + sUrl,
			_oOptions
		).then(
			function success(mSuccess) {
				console.log('GET Success');
		        _mDeferred.resolve(mSuccess.data);
			},
			function error(mFail) {
				console.log('GET Error');
				alert('Can\'t connect to the server');
		        _mDeferred.reject('API Error');
			}
		);

		// Return stored promise
	    return _mDeferred.promise;
	}

	function post(sUrl, oData) {

		// Initialize promise
	    var _mDeferred = $q.defer();

	    // HTTP POST Method
	    // To create, update or delete data to Rest API Server
		$http.post(
			_sServer + sUrl,
			oData
		).then(
			function success(mSuccess) {
				console.log('POST Success');
				_mDeferred.resolve(mSuccess.data);
			},
			function error(mFail) {
				console.log('POST Error');
				alert('Can\'t connect to the server');
				_mDeferred.reject('API Error');
			}
		);

		// Return stored promise
	    return _mDeferred.promise;
	}

	function urlReplace(sUrl) {
		if (sUrl.replace) {
			return sUrl.replace(_sServer, '');
		}
		return sUrl;
	}

	return{
		/**
		 * Executes HTTP GET
		 * @param  string sUrl
		 * @return request result
		 */
		get: function(sUrl) {
			console.log('THIS URL GET ERROR REPLACE');
			console.log(sUrl);
			sUrl = urlReplace(sUrl);
			return get(sUrl);
		},

		/**
		 * Executes HTTP POST
		 * @param  string sUrl
		 * @param  object oData [description]
		 * @return request result
		 */
		post: function(sUrl, oData) {
			console.log('THIS URL POST ERROR REPLACE');
			console.log(sUrl);
			sUrl = urlReplace(sUrl);
			return post(sUrl, oData);
		},

		/**
		 * Returns the server name
		 * @return string
		 */
		session: function() {
			return _sServer;
		}
	}
})
