Meteor.startup(function(){
	console.log("Hello TYoung Fitness!");
});
Meteor.methods({
	addWorkout: function(date,workout){
		console.log(date,workout);
	}
});