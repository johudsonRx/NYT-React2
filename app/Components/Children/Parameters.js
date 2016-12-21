// Include React 
var React = require('react');


// Create the Child Component
var Parameters = React.createClass({

	// Child has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	render: function(){

		return(

		 <div className="container">
          <div className="row">
           <div className="panel panel-primary">

             <div className="panel-heading">

              <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            
             </div>
             <div className="panel-body">
 			   <form role="form">
                 <div className="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" className="form-control" id="searchTerm"></input>
                 </div>
                
                 <div className="form-group">
                  <label for="pwd"> Number of Records to Retrieve:</label>
                    <select className="form-control" id="numRecordsSelect">
                     
                  </select>
                 </div>

                 <div className="form-group">
					    <label for="startYear">Start Year (Optional):</label>
					    <input type="text" className="form-control" id="startYear"></input>
			     </div>
                
                 <div className="form-group">
					    <label for="endYear">End Year (Optional):</label>
					    <input type="text" className="form-control" id="endYear"></input>
				  </div>
             
                <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
  			    <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>
                

 			   </form>

             </div>
           </div>
          </div>
         </div>
		)
	}
});

// Export the component back for use in other files
module.exports = Parameters;