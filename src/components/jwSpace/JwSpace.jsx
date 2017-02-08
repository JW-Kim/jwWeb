var React = require('react');
var Image = require('react-bootstrap/lib/Image');
var luffyTitleImg = require('../../assets/img/luffyTitleImg.png');
var heartImg = require('../../assets/img/heart.png');
var mapImg = require('../../assets/img/map.png');
var galleryImg = require('../../assets/img/gallery.png');

var JwSpace = React.createClass({
	render : function(){
		return (
			<div className="jwSpace">
				<div className="title">
					<p><span className="bpTitle">FIRST BIRTHDAY PARTY INVITATION <br />2017.03.19  PM 12:00</span></p>
					<div className="bpImg"><Image className="titleImg" src={luffyTitleImg}></Image></div> 
				</div>
				
				<div className="main">
					<p><span>Invitation</span></p>
					<div>
						<span>아빠</span><span className="name"> 김정우</span>
						<Image className="heartImg" src={heartImg}></Image>
						<span>엄마</span><span className="name"> 김경은</span>
						<p className="content">
							부모라는 이름으로 재윤이를 만난지 벌써 1년<br/>
							재윤이가 세상으로의 여행을 시작하는 자리를<br/>
							소중한 분들과 함꼐 하고자 합니다<br/>
							재윤이가 지혜롭고 따뜻한 아이로 성장할 수 있도록<br/>
							함꼐 자리하셔서 사랑과 축복을<br/>
							나눠주시기 바랍니다.<br/>
						</p>
						<div className="date">2017.03.19.</div>
						<div className="time">SUN PM 12:00</div>
						<div className="place">몽중헌 방이점</div>						
					</div>
				</div>
				
				<div className="gallery">
					<Image className="galleryImg" src={galleryImg}></Image>
				</div>
				
				<div className="space">
					<Image className="mapImg" src={mapImg}></Image>
					<p>
						<span className="date">2017년 3월 19일 일요일 오후12시</span><br/>
						<span className="place">몽중헌 방이점(21층)</span><br/>
						<span className="address">서울시 송파구 위례성대로 10길 49 (S타워 21층)</span><br/>
						<span className="tel">02)2202-8004, 8005</span>
					</p>
				</div>
			</div>
		)
	}
})

module.exports = JwSpace;