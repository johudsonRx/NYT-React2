var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var models = require('./models');

// models.sequelize.sync({force:true})
// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('database', 'root', 'root')
  


// var port = process.env.PORT || 3000; 

// var port = 3000;


console.log(module.exports)


var app = express();
//Serve static content for the app from the "public" directory in the application directory.
var port = 3000;
app.listen(port);
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// ====================================Routing==================================================

// var routes = require('./controllers/burgers_controller.js');

var routes = require('./routes');


app.use('/', routes); 
// app.use('/update', routes);
// app.use('/create', routes);

// var router = express.Routxer();

// router.get('/', function (req, res) {
// 	res.redirect('/');
// });

// ====================================Sequelize Connection=============================================



var sequelizeConnection = models.sequelize;

var cheddarJalepeno;
var mushroomBlueCheese;
var burgerKingGreen;


sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// ====================================Sequelize Logic===========================================================

sequelizeConnection.sync()

.then(function(){
	return sequelizeConnection.sync({force:true})
})


.then(function(){

	
    return models.Burger.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			burgerType: "Cheddar Jalepeno and Bacon Burger", 
			
		}
		// the second object in our 'create' call: options
		
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(burger){
		return cheddarJalepeno = burger;
	})
})

.then(function(){

	
	return models.Burger.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			burgerType: "Mushroom and Blue Cheese Burger", 
			
		} 
		// the second object in our 'create' call: options
		
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(burger){
		return mushroomBlueCheese = burger;
	})
})

.then(function(){

	
	return models.Burger.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			burgerType: "Mushroom and Blue Cheese Burger", 
			
		}
		// the second object in our 'create' call: options
		
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(burger){
		return burgerKingGreen = burger;
	})
})





