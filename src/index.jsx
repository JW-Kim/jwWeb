var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var MyButtonController = require('./components/MyButtonController');
var App = require('./components/App');
var Login = require('./components/Login');
var LoginCallback = require('./components/LoginCallback');
var Home = require('./components/Home');
var ReactInfo = require('./components/reactInfo/ReactInfo');
var ReactExam = require('./components/reactExam/ReactExam');
var EsExam = require('./components/esExam/EsExam');
var ReactBoard = require('./components/reactBoard/ReactBoard');

/*JwSpace*/
var JwSpace = require('./components/jwSpace/JwSpace');
var LuffyGallery = require('./components/jwSpace/LuffyGallery');
var JwInvitation = require('./components/jwSpace/JwInvitation');

require('./assets/css/list.css');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

//ReactDOM.render() : 최상위 컴포넌트의 인스턴스를 만들고 두번째 인수로 전달받은 DOM element에 마크업을 삽입
ReactDOM.render(
  	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<Route path="jwSpace" component={JwSpace}/>
  			<Route path="jwInvitation" component={JwInvitation}/>
  			<Route path="luffyGallery" component={LuffyGallery}/>
  			
  			<Route path="login" component={Login}/>
  			<Route path="loginCallback" component={LoginCallback}/>
			<Route path="home" component={Home}>
				<Route path="reactInfo" component={ReactInfo}/>
				<Route path="reactExam" component={ReactExam}/>
				<Route path="esExam" component={EsExam}/>
				<Route path="reactBoard" component={ReactBoard}/>
			</Route>
		</Route>		
	</Router>,
  document.querySelector('#wrapper')
);
