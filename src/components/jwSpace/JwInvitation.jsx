var React = require('react');
var Image = require('react-bootstrap/lib/Image');

var invitationAImg =  require('../../assets/img/초대-A.jpg');
var invitationBImg =  require('../../assets/img/초대-B.jpg');
var invitationDImg =  require('../../assets/img/초대-D.jpg');

var JwInvitation = React.createClass({
	render : function(){
		return (
			<div className="jwInvitation">	
				<div className="invitationA">
					<Image className="invitationAImg" src={invitationAImg}></Image>
				</div>
				<div className="invitationB">
					<div className="invitationB1">
						<Image className="invitationBImg" src={invitationBImg}></Image>
					</div>	
					<div  className="invitationB2">
						<a href="sms:010-8417-4005" ><div className="invitationDadImg"></div></a>
						<a href="sms:010-5619-0717" ><div className="invitationMomImg"></div></a>
					</div>
				</div>
				<div className="invitationD">
				<Image className="invitationDImg" src={invitationDImg}></Image>
				</div>
			</div>	
		)
	}
})

module.exports = JwInvitation;