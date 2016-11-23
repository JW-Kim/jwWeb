var React = require('react');

var CreateContent = React.createClass({
	
	render : function(){
		console.log('this.CreateContent')
		const headerStyle = {
			fontWeight: 'bold',
	    	fontSize: 'large',
	    	textAlign: 'center',
	    	backgroundColor: '#eeeeee'
	    };
	    return (
	    	<div className='modal-header' style={ headerStyle }>
		        <h3>That is my custom header</h3>
		        <button className='btn btn-info' onClick={ onClose }>Close it!</button>
	    	</div>
	    );
	}
})

module.exports = CreateContent;