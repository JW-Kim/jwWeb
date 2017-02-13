var React = require('react');
var Image = require('react-bootstrap/lib/Image');

var jwInvitationImg =  require('../../assets/img/jwInvalitation.jpg');

var JwInvitation = React.createClass({
	render : function(){
		return (
			<div className="jwInvitation">
				<Image className="jwInvitationImg" src={jwInvitationImg}></Image>
			</div>
		)
	}
})

module.exports = JwInvitation;