var React = require('react');
var EsExamListItem = require('./EsExamListItem');

var EsExamList = React.createClass({
	render : function(){
		return(
			<table>
				<thead>
					<tr>
						<td>
							글제목
						</td>
						<td>
							글쓴이
						</td>
						<td>
							시간
						</td>
					</tr>
				</thead>	
				<EsExamListItem	esExamList = {this.props.esExamList}/>
			</table>
		)
	}
});

module.exports = EsExamList;