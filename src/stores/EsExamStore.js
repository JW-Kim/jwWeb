var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

var EsExamStore = assign({}, EventEmitter.prototype, {
	esExamList : [],
	
	getEsExamList : function(){		
		this.esExamList = [];
		
		$.ajax({
			url : "http://apis.skplanetx.com/weather/current/minutely",
			beforeSend : function(xhr){
	            xhr.setRequestHeader("appKey", "ceadd938-4723-377c-9751-acbf673ce72c")
	        },
	        method : 'GET',
	        data :{
	        	version : '1',
	        	city : '서울',
	        	county : '강동구',
	        	village : '길동'
	        },
	        cache: false,
			success : function(data){
				this.esExamList = data;
				this.emitChange();
				return this.esExamList;
				
			}.bind(this),
			error : function(xhr, status, err){
				console.log('error', status, err.toString())
				
			}.bind(this)
		});
	},
	
	getAll: function() {
	    return this.esExamList;
	},
	
	emitChange: function () {
	    this.emit('change');
	},

	addChangeListener: function(callback) {
	    this.on('change', callback);
	},

	removeChangeListener: function(callback) {
	    this.removeListener('change', callback);
	}
	
});

module.exports = EsExamStore;
