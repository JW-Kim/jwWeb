var React = require('react');
var Carousel = require('react-bootstrap/lib/Carousel');
var Image = require('react-bootstrap/lib/Image');

var img1 = require('../../assets/img/img1.png');
var img2 = require('../../assets/img/img2.png');

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
						<img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>	
		)
	}
})

module.exports = LuffyGallery;
