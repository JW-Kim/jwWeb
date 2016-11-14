var React = require('react');
var ReactRouter = require('react-router');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var Link = ReactRouter.Link;

var Home = React.createClass({		  
	render: function(){
		return(
			<div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
				    <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <NavItem eventKey={1} href="#">Link</NavItem>
				        <NavItem eventKey={2} href="#">Link</NavItem>
				        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				          <MenuItem eventKey={3.1}>Action</MenuItem>
				          <MenuItem eventKey={3.2}>Another action</MenuItem>
				          <MenuItem eventKey={3.3}>Something else here</MenuItem>
				          <MenuItem divider />
				          <MenuItem eventKey={3.3}>Separated link</MenuItem>
				        </NavDropdown>
				      </Nav>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">Link Right</NavItem>
				        <NavItem eventKey={2} href="#">Link Right</NavItem>
				      </Nav>
				    </Navbar.Collapse>
			    </Navbar>
				<header id="header">
					<h1><Link to="/">header</Link></h1>
					<div>
						<ul>
							<li><Link to="reactInfo">react 설명</Link></li>
							<li><Link to="reactExam">react 예제</Link></li>
						</ul>
					</div>
				</header>
				<div>
					{this.props.children}
				</div>
				<footer id="footer"><h1>footer</h1></footer>
			</div>
		)
	}	
});

module.exports = Home;
