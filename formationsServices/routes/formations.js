var express = require('express');
var low = require('lowdb');

var router = express.Router();

var db = low('db.json', {
	autosave: true
}); 

/* GET formations listing. */
router.get('/', function(req, res) {

	var query = {}; 

	if (req.query.categorie){
		res.status(200).send(db('formations').where({ categorie : req.query.categorie}).value());
	}
	else {
		res.status(200).send(db('formations').where().value());
	}
});

module.exports = router;
