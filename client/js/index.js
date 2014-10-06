// Meteor subscriptions
// ...

// define router configuration
Router.configure({
	layoutTemplate: "screen"
});

// define routes
Router.map(function(){
	this.route("homePage", {
		path: "/",
		template: "homePage",
		yieldTemplates: {"homePage":{to: "pageContent"}}
	});
	this.route("entryPage", {
		path: "/entry/:date",
		template: "entryPage",
		yieldTemplates: {"entryPage":{to: "pageContent"}},
		data: function(){
			var date = this.params.date;
			return date;
		}
	});
});
