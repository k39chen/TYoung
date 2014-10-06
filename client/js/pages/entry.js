Template.entryPage.rendered = function() {
};
Template.entryPage.events({
	"mouseover .prev": addHoverTarget,
	"mouseout .prev": removeHoverTarget,
	"click .prev": function(e){
		Router.go("/");
	},
	"mouseover .weight .value": addHoverTarget,
	"mouseout .weight .value": removeHoverTarget,
	"click .weight .value": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .addExerciseBtn": addHoverTarget,
	"mouseout .addExerciseBtn": removeHoverTarget,
	"click .addExerciseBtn": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .toggle": addHoverTarget,
	"mouseout .toggle": removeHoverTarget,
	"click .toggle": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .edit": addHoverTarget,
	"mouseout .edit": removeHoverTarget,
	"click .edit": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .addSetBtn": addHoverTarget,
	"mouseout .addSetBtn": removeHoverTarget,
	"click .addSetBtn": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .editable": addHoverTarget,
	"mouseout .editable": removeHoverTarget,
	"click .editable": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .delete": addHoverTarget,
	"mouseout .delete": removeHoverTarget,
	"click .delete": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .resultOption": addHoverTarget,
	"mouseout .resultOption": removeHoverTarget,
	"click .resultOption": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .description": addHoverTarget,
	"mouseout .description": removeHoverTarget,
	"click .description": function(e){
		var $el = $(e.target);
		$el.blur();
	},
	"mouseover .addMealBtn": addHoverTarget,
	"mouseout .addMealBtn": removeHoverTarget,
	"click .addMealBtn": function(e){
		var $el = $(e.target);
		$el.blur();
	}
});
Template.entryPage.helpers({
	dateStr: function(){
		var date = this+"";
		return moment(date).format("ddd MMM D YYYY");
	}
});