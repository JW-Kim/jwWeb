var React = require('react');
var EsExamList = require('./EsExamList');
var EsExamAction = require('../../actions/EsExamAction');
var EsExamStore = require('../../stores/EsExamStore');

var EsExam = React.createClass({
	getInitialState: function () {
		return {
			esExamList : []
		};
	},
	
	componentDidMount: function() {
		EsExamAction.getEsExamList();
		EsExamStore.addChangeListener(this._onChange);
	},
	
	componentWillUnmount: function() {
		EsExamStore.removeChangeListener(this._onChange);
	},
	
	_onChange: function () {
		//state 변경
		this.setState({
			items: EsExamStore.getAll()
		});
	},
	
	
	render : function(){
		return (
			<div className="esExam">
				<h1>List</h1>
				<EsExamList esExamList={this.state.esExamList}/>
			</div>
		)
	}
});

module.exports = EsExam;