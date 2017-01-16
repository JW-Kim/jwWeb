var React = require('react');
var ReactRouter = require('react-router');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var Image = require('react-bootstrap/lib/Image');
var Link = ReactRouter.Link;
var luffyImg = require('../assets/img/luffy.png');
//<Image eventKey={1} className="luffyImg" src={luffyImg}></Image>

var Home = React.createClass({		  
	render: function(){
		return(
			<div className="body">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
				    	<Navbar.Brand>
				        	<a href="#">LUFFY HOME</a>
				        </Navbar.Brand>
				        <Navbar.Toggle />
				        </Navbar.Header>
				    <Navbar.Collapse>
			      		<Nav>
					        <NavDropdown eventKey={1} title="React" id="basic-nav-dropdown">
					        	<MenuItem eventKey={1.1}><Link to="/home/reactInfo">react 설명</Link></MenuItem>
					        	<MenuItem eventKey={1.2}><Link to="/home/reactExam">react 예제</Link></MenuItem>
					        	<MenuItem eventKey={1.3}><Link to="/home/esExam">ES 예제</Link></MenuItem>
					        	<MenuItem eventKey={1.4}><Link to="/home/reactBoard">자유게시판</Link></MenuItem>
					        </NavDropdown>
				        </Nav>
				        <Nav pullRight>
				        </Nav>
				    </Navbar.Collapse>
			    </Navbar>

				<div className='main'>
					{this.props.children}
				</div>
				<footer id="footer"><h1>footer</h1></footer>
			</div>
		)
	}	
});

module.exports = Home;
