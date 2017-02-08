var React = require('react');
var Carousel = require('react-bootstrap/lib/Carousel');
var Image = require('react-bootstrap/lib/Image');

var img1 = require('../../assets/img/img1.png');
var img2 = require('../../assets/img/img2.png');
var img3 = require('../../assets/img/img3.png');

var LuffyGallery = React.createClass({
	
	render : function(){
		return(
			<div className="LuffyGallery">
				<Carousel>
					<Carousel.Item>
						<Image className="galleryImg" src={img1}></Image>
						<Carousel.Caption>
							<h3>재윤이 탄생일</h3>
							<p>D day</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Image className="galleryImg" src={img2}></Image>
						<Carousel.Caption>
							<h3>산후조리원</h3>
							<p>D+6</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Image className="galleryImg" src={img3}></Image>
						<Carousel.Caption>
							<h3>침대에서</h3>
							<p>D+72</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>	
		)
	}
})

module.exports = LuffyGallery;
