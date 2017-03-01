var React = require('react');
var Image = require('react-bootstrap/lib/Image');
var Carousel = require('react-bootstrap/lib/Carousel');

var invitationAImg =  require('../../assets/img/초대-A.jpg');
var invitationBImg =  require('../../assets/img/초대-B.jpg');
var invitationDadImg =  require('../../assets/img/초대-B(아빠).jpg');
var invitationDadImgChg =  require('../../assets/img/초대-B(아빠변환).jpg');
var invitationMomImg =  require('../../assets/img/초대-B(엄마).jpg');
var invitationMomImgChg = require('../../assets/img/초대-B(엄마변환).jpg');
var invitationDImg =  require('../../assets/img/초대-D.jpg');
var invitationDImg1 =  require('../../assets/img/초대-C(50일).jpg');
var invitationDImg2 =  require('../../assets/img/초대-C(100일).jpg');
var invitationDImg3 =  require('../../assets/img/초대-C(365일).jpg');
var invitationDImg4 =  require('../../assets/img/초대-C(365일a).jpg');

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
						<a href="sms:01084174005" onMouseOver={() => this.mouseOver('D')} onMouseOut={()=>this.mouseOut('D')}>
							{this.state.dadOver ? (<Image className="invitationDadImg" src={invitationDadImgChg}></Image>) : <Image className="invitationDadImg" src={invitationDadImg}></Image>} 
							
						</a>
						<a href="sms:01056190717" onMouseOver={() => this.mouseOver('M')} onMouseOut={()=>this.mouseOut('M')}>
							{this.state.momOver ? (<Image className="invitationMomImg" src={invitationMomImgChg}></Image>) : <Image className="invitationMomImg" src={invitationMomImg}></Image>} 
							
						</a>
					</div>
				</div>
				<div className="invitationC">
					<Carousel>
					    <Carousel.Item>
					    	<Image className="invitationCImg" src={invitationDImg1}></Image>
					    </Carousel.Item>
					    <Carousel.Item>
					    	<Image className="invitationCImg" src={invitationDImg2}></Image>
					    </Carousel.Item>
					    <Carousel.Item>
					    	<Image className="invitationCImg" src={invitationDImg3}></Image>
					    </Carousel.Item>
					    <Carousel.Item>
					    	<Image className="invitationCImg" src={invitationDImg4}></Image>
					    </Carousel.Item>
					</Carousel>
				</div>
				<div className="invitationD">
					<Image className="invitationDImg" src={invitationDImg}></Image>
				</div>
			</div>	
		)
	},
	
    mouseOver : function(code){
    	if(code == 'M'){
            this.setState({momOver: true});
    	}else{
    		this.setState({dadOver: true});
    	}

    },
    
    mouseOut : function(code){
    	if(code == 'M'){
            this.setState({momOver: false});
    	}else{
    		this.setState({dadOver: false});
    	}
    }
})

module.exports = JwInvitation;