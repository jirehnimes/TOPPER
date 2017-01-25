angular.module('topper.examBL',[])

.factory('ExamBL', function(
    $q,
    $state,
    $localStorage,
    Util
) {
    var _oDB = undefined;

    function init(oDB) {
        // Initialize promise
        var _mDeferred = $q.defer();

        _oDB = oDB;

        var aModuleIds = Util.getId($localStorage.examOptions.list, 'iFlag', true);

        if (aModuleIds.length === 0) {
            _mDeferred.resolve('error1');
        } else {
            var _sIn = '(';

            aModuleIds.forEach(function(item, index) {
                if (index === aModuleIds.length - 1) {
                    _sIn += item + ')';
                    return false;
                }

                _sIn += item + ', ';
            });

            _oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_modules WHERE id IN ' + _sIn;
                tx.executeSql(_sQuery, [], function(_tx, _result) {
                    renderModules(_tx, _result, _mDeferred);
                });
            });
        }

        // Return stored promise
        return _mDeferred.promise;
    }

    function renderModules(tx, result, mDeferred) {
        var aModules = $.makeArray(result.rows);

        aModules.forEach(function(item, index) {
            _oDB.transaction(function (_tx) {
                var _sQuery = 'SELECT * FROM t_topics WHERE module_id = ' + item.id;
                _tx.executeSql(_sQuery, [], function(__tx, __result) {
                    if (__result.rows.length !== 0) {
                        var aTopics = $.makeArray(__result.rows);
                        renderQuestions(aTopics, item, mDeferred);
                    } else {
                        mDeferred.resolve('error2');
                    }
                });
            });
        });
    }

    var aQuestions = [];

    function renderQuestions(aTopics, aModule, mDeferred) {

        aTopics.forEach(function(item, index) {
            _oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_questions WHERE topic_id = ' + item.id;
                tx.executeSql(_sQuery, [], function(_tx, _result) {
                    if (_result.rows.length !== 0) {
                        var _aQuestions = $.makeArray(_result.rows);
                        aTopics[index].module = aModule;
                        renderSelections(_aQuestions, item, mDeferred);
                    }
                });
            });
        });

        _tmpQuestions = angular.copy(aQuestions);
        aQuestions = [];
        mDeferred.resolve(_tmpQuestions);
    }

    function renderSelections(_aQuestions, aTopic) {
        _aQuestions.forEach(function(item, index) {
            _oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_selections WHERE question_id = ' + item.id;
                tx.executeSql(_sQuery, [], function(_tx, _result) {
                    _aQuestions[index].selections = $.makeArray(_result.rows);
                    _aQuestions[index].topic = aTopic;
                });
            });
            aQuestions.push(item);
        });
    }

    return {
        init : init,
    }
});
