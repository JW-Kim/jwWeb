var React = require('react');
var Image = require('react-bootstrap/lib/Image');
var Button = require('react-bootstrap/lib/Button');
var ReactRouter = require('react-router');

var hashHistory = ReactRouter.hashHistory;
var luffyImg = require('../assets/img/luffy.png');

var Login = React.createClass({
	
	componentDidMount: function() {
		var naver_id_login = new Naver_id_login("oMt4FCo9Pk_8ErQZQKBe", "http://198.199.112.52/#/LoginCallback");
		var state = naver_id_login.getUniqState();
	  	naver_id_login.setButton("white", 2,40);
	  	naver_id_login.setDomain("http://198.199.112.52");
	  	naver_id_login.setState(state);
	  	naver_id_login.init_naver_id_login();

	},
	
	goLogin : function(){
		hashHistory.push('/home');
	},
	
	render : function(){
		return(
			<div className="divlLogin">
				<div className="divLoginImg"><Image className="luffyImg" src={luffyImg}></Image></div>	
				<div className="divLoginBtn">
					<Button className="loginBtn" onClick={this.goLogin}>로그인</Button>
					<div id="naver_id_login"></div>
				</div>
			</div>	
		)
	}
})

module.exports = Login;