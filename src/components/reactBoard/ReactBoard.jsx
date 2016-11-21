var React = require('react');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
require('react-bootstrap-table/dist/react-bootstrap-table-all.min.css');

var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}, {
    id: 3,
    name: "Product3",
    price: 80
}, {
    id: 4,
    name: "Product4",
    price: 80
}];

var ReactBoard = React.createClass({
	
	render : function(){
		return(
				<div>
					<BootstrapTable data={ products } height='120'>
			        	<TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
			        	<TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
			        	<TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
			    	</BootstrapTable>
				</div>
		)
	}
})


module.exports = ReactBoard;