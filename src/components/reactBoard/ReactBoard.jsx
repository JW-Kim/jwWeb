var React = require('react');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var Button = require('react-bootstrap/lib/Button');
var Pagination = require('react-bootstrap/lib/Pagination');
require('react-bootstrap-table/dist/react-bootstrap-table-all.min.css');

var CreateContent = require('./CreateContent');

var products = [{
    id: 1,
    content: "Product1",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 2,
    content: "Product2",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 3,
    content: "Product3",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 4,
    content: "Product4",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 5,
    content: "Product5",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 6,
    content: "Product6",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 7,
    content: "Product7",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 8,
    content: "Product8",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 9,
    content: "Product9",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 10,
    content: "Product10",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 11,
    content: "Product11",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 12,
    content: "Product12",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 13,
    content: "Product13",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 14,
    content: "Product14",
    createBy: '김정우',
    createDt: '2015.11.21'
}, {
    id: 15,
    content: "Product15",
    createBy: '김정우',
    createDt: '2015.11.21'
}];

var ReactBoard = React.createClass({
	
	render : function(){
		
		const selectRow = {
	    	mode: 'checkbox'
	    };
		
		const options = {
			afterDeleteRow: onAfterDeleteRow
	    };
		
		return(
			<div>
				<BootstrapTable data={ products } height='643'
					options={ options }
					selectRow={ selectRow }
					insertRow={ true }
					deleteRow={ true }>
		        	<TableHeaderColumn dataField='id' isKey hidden>Product ID</TableHeaderColumn>
		        	<TableHeaderColumn dataField='content' headerAlign='center'>글제목</TableHeaderColumn>
		        	<TableHeaderColumn dataField='createBy' headerAlign='center' dataAlign='center' width='70'>작성자</TableHeaderColumn>
		        	<TableHeaderColumn dataField='createDt' headerAlign='center' dataAlign='center' width='100'>작성일자</TableHeaderColumn>
		    	</BootstrapTable>
		    	<div className="pageNav">
			    	<Pagination
				        prev
				        next
				        first
				        last
				        ellipsis
				        boundaryLinks
				        items={20}
				        maxButtons={5}
				        activePage={1}
				        onSelect={this.handleSelect} />
			     </div>
			</div>
		)
		
		function onAfterDeleteRow(rowKeys) {
		  alert('The rowkey you drop: ' + rowKeys);
		}
	}
})


module.exports = ReactBoard;