Router.configure({
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});
Router.onBeforeAction('loading');
    loadingTemplate;

Router.route("/",{
    name: "home",
    layoutTemplate: "homeLayout",
    template: "home",
    yieldRegions: {
        travelSearch: {to: "Search"}
    }
});
Router.route("/create-travel",{
	name: "createTravel",
	layoutTemplate:"createTravelLayout",
	template:"createTravel"

});

