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
}, {
    id: 5,
    name: "Product5",
    price: 80
}, {
    id: 6,
    name: "Product6",
    price: 80
}, {
    id: 7,
    name: "Product7",
    price: 80
}, {
    id: 8,
    name: "Product8",
    price: 80
}, {
    id: 9,
    name: "Product9",
    price: 80
}, {
    id: 10,
    name: "Product10",
    price: 80
}, {
    id: 11,
    name: "Product11",
    price: 80
}, {
    id: 12,
    name: "Product12",
    price: 80
}, {
    id: 13,
    name: "Product13",
    price: 80
}, {
    id: 14,
    name: "Product14",
    price: 80
}, {
    id: 15,
    name: "Product15",
    price: 80
}, {
    id: 16,
    name: "Product16",
    price: 80
}, {
    id: 17,
    name: "Product17",
    price: 80
}];

var ReactBoard = React.createClass({
	
	render : function(){
		return(
				<div>
					<BootstrapTable data={ products } height='700'>
			        	<TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
			        	<TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
			        	<TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
			    	</BootstrapTable>
				</div>
		)
	}
})


module.exports = ReactBoard;