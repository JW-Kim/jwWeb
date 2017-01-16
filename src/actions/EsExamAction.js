var EsDispatcher = require('../dispatcher/EsDispatcher');

var EsExamAction = {
	getEsExamList : function(){
		EsDispatcher.dispatch({
			actionType : 'GET_ES_EXAM_LIST'
		})
	}
}

module.exports = EsExamAction;
