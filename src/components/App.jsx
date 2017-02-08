var React = require('react');
var ReactRouter = require('react-router');

var hashHistory = ReactRouter.hashHistory;

var App = React.createClass({
	
	//componentDidMount : 컴포넌트가 랜더링 된 후 자동으로 호출되는 메소드
	componentDidMount: function() {
		//hashHistory.push('/login');
		hashHistory.push('/jwSpace');
	},
		
	render : function(){
		return(
			<div>{this.props.children}</div>	
		)
	}
})

module.exports = App;