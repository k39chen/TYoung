Template.homePage.rendered = function() {
	var selectedDates = {};
	selectedDates[new Date("2014/10/09")] = new Date("2014/10/09");

	$("#datepicker").datepicker({
		dayNamesMin: ["S","M","T","W","T","F","S"],
		beforeShowDay: function(date) {
			var selectedDate = selectedDates[date];
			if (selectedDate) {
				return [true,"highlight good",selectedDate];
			} else {
				return [true,"",""];
			}
		},

		onChangeMonthYear: function(year,month,ui){

		},
		onSelect: function(dateText,ui){
			var date = moment(new Date(dateText)).format("YYYY-MM-DD");
			Router.go("/entry/"+date);
		}
	});
};
Template.homePage.events({
	// ...
});