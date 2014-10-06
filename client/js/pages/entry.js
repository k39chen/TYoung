Template.entryPage.rendered = function() {
};
Template.entryPage.events({
	"mouseover .prev": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .prev": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .prev": function(e){
		// ...
	},
	"mouseover .next": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .next": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .next": function(e){
		// ...
	},
	"mouseover .weight .value": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .weight .value": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .weight .value": function(e){
		// ...
	},
	"mouseover .addExerciseBtn": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .addExerciseBtn": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .addExerciseBtn": function(e){
		// ...
	},
	"mouseover .toggle": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .toggle": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .toggle": function(e){
		// ...
	},
	"mouseover .addSetBtn": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .addSetBtn": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .addSetBtn": function(e){
		// ...
	},
	"mouseover .editable": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .editable": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .editable": function(e){
		// ...
	},
	"mouseover .delete": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .delete": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .delete": function(e){
		// ...
	},
	"mouseover .resultOption": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .resultOption": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .resultOption": function(e){
		// ...
	},
	"mouseover .description": function(e) {
		var $el = $(e.target);
		$el.addClass("hover");
	},
	"mouseout .description": function(e) {
		var $el = $(e.target);
		$el.removeClass("hover");
	},
	"click .description": function(e){
		// ...
	}
});
Template.entryPage.helpers({
	dateStr: function(){
		var date = this+"";
		return moment(date).format("ddd MMM D YYYY");
	}
});