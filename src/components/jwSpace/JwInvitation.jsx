var React = require('react');
var Image = require('react-bootstrap/lib/Image');

var invitationAImg =  require('../../assets/img/초대-A.jpg');
var invitationBImg =  require('../../assets/img/초대-B.jpg');
var invitationDadImg =  require('../../assets/img/초대-B(아빠).jpg');
var invitationDadImgChg =  require('../../assets/img/초대-B(아빠변환).jpg');
var invitationMomImg =  require('../../assets/img/초대-B(엄마).jpg');
var invitationDImg =  require('../../assets/img/초대-D.jpg');

var JwInvitation = React.createClass({
	getInitialState: function () {
		return {
			dadOver: false
		};
	},
	
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
					<div className="invitationB2">
						<a href="sms:01084174005" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
							{this.state.dadOver ? (<Image className="invitationDadImg" src={invitationDadImgChg}></Image>) : <Image className="invitationDadImg" src={invitationDadImg}></Image>} 
							
						</a>
						<a href="sms:01056190717">
							<Image className="invitationMomImg" src={invitationMomImg}></Image>
						</a>
					</div>
				</div>
				<div className="invitationD">
					<Image className="invitationDImg" src={invitationDImg}></Image>
				</div>
			</div>	
		)
	},
	
    mouseOver : function(){
    	console.log('mouseOver')
        this.setState({dadOver: true});
    },
    
    mouseOut : function(){
    	console.log('mouseOut')
        this.setState({dadOver: false});
    }
})

module.exports = JwInvitation;