Template.homePage.rendered = function() {
	$("#datepicker").datepicker({
		onChangeMonthYear: function(year,month,ui){

		},
		onSelect: function(dateText,ui){

		}
	});
};
Template.homePage.events({
	"click #button": function(){
		var date = $("#datepicker").datepicker("getDate").valueOf();
		Router.go("/entry/"+date);

		/*
		var date = $("#datepicker").datepicker("getDate").valueOf();
		var workout = {a:"a",b:"b"};
		Meteor.call("addWorkout",date,workout);
		*/
	}
});