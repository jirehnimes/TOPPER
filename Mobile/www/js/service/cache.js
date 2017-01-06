angular.module('topper.cacheSrvc',[])

.factory('Cache', function() {

    var _mData = {};

    function set(key, data) {
        _mData[key] = data;
    }

    function all() {
        return _mData;
    }

    function get(key) {
        return _mData[key];
    }

    function clear() {
        _mData = {};
    }

    return {
        set: set,
        all: all,
        get: get,
        clear: clear
    }
})
