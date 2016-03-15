var http = require("http");
var express = require("express");
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var app = express();

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://baks:Db123@ds019668.mlab.com:19668/dbajs';
// mongodb://<dbuser>:<dbpassword>@ds019668.mlab.com:19668/dbajs
//app.use(express.favicon());
console.log(__dirname); //Local to each module.
console.log(process.cwd()); // Current working directory

app.use(express.static(__dirname + '/public'));

app.get("/", function( request, response ){
	response.sendFile("views/showall.html");
});

app.get("/get/departments", function( request, response ){
	
	MongoClient.connect(url, function (err, db) {
	  	if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
			response.send(err);
		} else {
			var mongoClient = mongodb.MongoClient;
			mongoClient.connect(url, function(err, db){
				if (err){
					return console.dir(err);
				}
				var coll = db.collection('departments');
				coll.find().toArray(function(err, items) {
					response.send(items);
				});
			});
		}
	});
	
});

app.get("/get/groups", function( request, response ){
	
	MongoClient.connect(url, function (err, db) {
	  	if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
			response.send(err);
		} else {
			var mongoClient = mongodb.MongoClient;
			mongoClient.connect(url, function(err, db){
				if (err){
					return console.dir(err);
				}
				var coll = db.collection('groups');
				coll.find().toArray(function(err, items) {
					response.send(items);
				});
			});
		}
	});
	
});

app.get("/get/employees", function( request, response ){
	
	MongoClient.connect(url, function (err, db) {
	  	if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
			response.send(err);
		} else {
			var mongoClient = mongodb.MongoClient;
			mongoClient.connect(url, function(err, db){
				if (err){
					return console.dir(err);
				}
				var coll = db.collection('employees');
				coll.find().toArray(function(err, items) {
					response.send(items);
				});
			});
		}
	});
	
});

app.get("/get/actionresult/dept", function( request, response ){
	
	MongoClient.connect(url, function (err, db) {
	  	if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
			response.send(err);
		} else {
			var filterObj = {deptId : request.query.ids};
			var mongoClient = mongodb.MongoClient;
			mongoClient.connect(url, function(err, db){
				if (err){
					return console.dir(err);
				}
				var coll = db.collection('groups');
				
				var darr = request.query.ids;
				coll.find().toArray(function(err, items) {
					var newItems = [];
					for(var i=0; i<darr.length; i++){
						for(var j=0; j<items.length; j++){
							if(darr[i] == items[j].deptId){
								newItems.push(items[j]);
							}
						}
					}
					response.send(newItems);			
				});
				
			});
		}
	});
	
});

app.get("/get/actionresult/emps", function( request, response ){
	
	MongoClient.connect(url, function (err, db) {
	  	if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
			response.send(err);
		} else {
			var filterObj = {grpId : request.query.ids};
			var mongoClient = mongodb.MongoClient;
			mongoClient.connect(url, function(err, db){
				if (err){
					return console.dir(err);
				}
				var coll = db.collection('employees');
				
				var darr = request.query.ids;
				coll.find().toArray(function(err, items) {
					var newItems = [];
					for(var i=0; i<darr.length; i++){
						for(var j=0; j<items.length; j++){
							if(darr[i] == items[j].grpId){
								newItems.push(items[j]);
							}
						}
					}
					response.send(newItems);			
				});
				
			});
		}
	});
	
});

// var server = http.createServer(app, function(request, response){
// 	response.writeHead(200, {"Content-type": "text/json"});
// 	response.write("MEAN");
// 	response.end();
// });

app.listen(8080);
console.log("Server listening on 8080");