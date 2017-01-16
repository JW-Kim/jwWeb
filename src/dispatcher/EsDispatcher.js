var Dispatcher = require('flux').Dispatcher;
var EsDispatcher = new Dispatcher();
var EsExamStore = require('../stores/EsExamStore');

EsDispatcher.register(function (action) {
  switch(action.actionType) {
  	case 'GET_ES_EXAM_LIST':	
  		EsExamStore.getEsExamList();
  		break;
  		
    default:
  }
})

module.exports = EsDispatcher;
