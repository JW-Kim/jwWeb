var React = require('react');
var Image = require('react-bootstrap/lib/Image');
var luffyTitleImg = require('../../assets/img/luffyTitleImg.png');

var JwSpace = React.createClass({
 render : function(){
  return (
   <div className="jwSpace">
    <div className="title">
     <p><span className="bpTitle">FIRST BIRTHDAY PARTY INVITATION <br />2015.02.19 PM 12:00</span></p>
     <div className="bpImg"><Image className="titleImg" src={luffyTitleImg}></Image></div> 
    </div>
   </div>
  )
 }
})

module.exports = JwSpace;