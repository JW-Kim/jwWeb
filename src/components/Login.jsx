var React = require('react');
var Image = require('react-bootstrap/lib/Image');
var Button = require('react-bootstrap/lib/Button');
var ReactRouter = require('react-router');

var hashHistory = ReactRouter.hashHistory;
var luffyImg = require('../assets/img/luffy.png');

var Login = React.createClass({
	
	goLogin : function(){
		hashHistory.push('/home');
	},
	
	render : function(){
		return(
			<div className="divlLogin">
				<div className="divLoginImg"><Image className="luffyImg" src={luffyImg}></Image></div>	
				<div className="divLoginBtn">
					<Button className="loginBtn" onClick={this.goLogin}>로그인</Button>
				</div>
			</div>	
		)
	}
})

module.exports = Login;