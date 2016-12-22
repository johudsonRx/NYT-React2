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

		 <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Location</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange function.
              */}
              <input
                type="text"
                value={this.state.term}
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
		)
	}
});

// Export the component back for use in other files
module.exports = Parameters;