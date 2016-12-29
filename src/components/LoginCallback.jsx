var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var LoginCallback = React.createClass({
	
	componentDidMount: function() {
		var naver_id_login = new Naver_id_login("oMt4FCo9Pk_8ErQZQKBe", "http://198.199.112.52/#/loginCallback");
		alert(naver_id_login.oauthParams.access_token);
		
		// 네이버 사용자 프로필 조회
		naver_id_login.get_naver_userprofile("naverSignInCallback()");
		// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
		function naverSignInCallback() {
		    alert(naver_id_login.getProfileData('email'));
		    alert(naver_id_login.getProfileData('nickname'));
		    alert(naver_id_login.getProfileData('age'));
		    
		    hashHistory.push('/home');
		}

	},
	
	render : function(){
		return(
			<div>
				<div id="naver_id_login"></div>
			</div>	
		)
	}
})

module.exports = LoginCallback;