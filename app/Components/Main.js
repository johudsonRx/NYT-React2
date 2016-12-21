// Include React 
var React = require('react');

// Here we include all of the sub-components

var Parameters = require('./Children/Parameters');
var Results = require('./Children/Results');

// Helper Function
var helper = require('./Children/utils/helper.js');



// This is the main component. 
var Main = React.createClass({

getInitialState: function(){
		return {
			searchTerm: "",
			results: "",
 
		}
	},

setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},
	
	// If the component changes (i.e. if a search is entered)... 
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			// Run the query for the address
			helper.runQuery(this.state.searchTerm)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("Address", data);

						this.setState({
							results: data
						})

						// After we've received the result... then post the search term to our history. 
						helper.postArticle(this.state.searchTerm)
							.then(function(data){
								console.log("Updated!");

								// After we've done the post... then get the updated history
								helper.getArticle()
									.then(function(response){
										console.log("Current Article", response.data);
											this.setState({
												searchTerm: response.data
											})
										
									}.bind(this))
							    
							}.bind(this)
						)
					}
				}.bind(this))
				
			}
	},

	// The moment the page renders get the History
	componentDidMount: function(){

		// Get the latest history.
		helper.getArticle()
			.then(function(response){
				if (response != this.state.result){
					console.log ("History", response.data);

					this.setState({
						result: response.data
					})
				}
			}.bind(this))
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

				  <div className="jumbotron">
		<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
	              </div>

	              <div className="col-md-6">

	              <Parameters setState={this.setTerm}/>

	              </div>

	              <div className="col-md-6">

	              <Results result={this.state.results} />

	              </div>


				</div>
        
				

			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Main;