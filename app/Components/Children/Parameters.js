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

		 <div class="container">
          <div class="row">
           <div class="panel panel-primary">

             <div class="panel-heading">

              <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            
             </div>
             <div class="panel-body">
 			   <form role="form">
                 <div class="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" class="form-control" id="searchTerm"></input>
                 </div>
                
                 <div class="form-group">
                  <label for="pwd"> Number of Records to Retrieve:</label>
                    <select class="form-control" id="numRecordsSelect">
                     <option value="1">1</option>

                     <option value="5" selected>5</option>
                     <option value="10">10</option>
                  </select>
                 </div>

                 <div class="form-group">
					    <label for="startYear">Start Year (Optional):</label>
					    <input type="text" class="form-control" id="startYear"></input>
			     </div>
                
                 <div class="form-group">
					    <label for="endYear">End Year (Optional):</label>
					    <input type="text" class="form-control" id="endYear"></input>
				  </div>
             
                <button type="submit" class="btn btn-default" id="runSearch"><i class="fa fa-search"></i> Search</button>
  			    <button type="button" class="btn btn-default" id="clearAll"><i class="fa fa-trash"></i> Clear Results</button>
                

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