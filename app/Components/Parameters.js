// Include React 
var React = require('react');


// Create the Child Component
var Parameters = React.createClass({

	// Child has a state that follows the number of clicks
	// getInitialState: function(){
	// 	return {
	// 		number: 0
	// 	}

	// Here we set a generic state associated with the text being searched for
	// React created
	getInitialState: function(){
		return {
			term: ""
		}
	},

handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

// When a user submits... 
	// Custom (developer created)
	handleClick: function(){

		event.preventDefault();

		console.log("CLICK");
		console.log(this.state.term);
		
		// Set the parent to have the search term
		this.props.setTerm(this.state.term);
        this.setState({term: ""});
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
                    <label htmlFor="search">Search Term:</label>
                    <input type="text" value={this.state.term} className="form-control" id="searchTerm" onChange= {this.handleChange} required/></input>
                 </div>
       
             
                <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search" onChange= {this.handleChange} required/></i> Search</button>
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