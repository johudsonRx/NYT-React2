// Include React 
var React = require('react');

var Results = React.createClass({


// Create the Child Component
render: function(){

	  return(
    
         <div class="row">
		<div class="col-sm-12">
		<br></br>

		
			<div class="panel panel-primary">

				
				<div class="panel-heading">
					<h3 class="panel-title"><strong><i class="fa fa-table"></i>   Top Articles</strong></h3>
				</div>

                 <p>{this.props.result}</p>
              
			
				<div class="panel-body" id="wellSection">
                

				</div>
			</div>
		</div>
	</div>

	  	)
}

})


module.exports = Results;