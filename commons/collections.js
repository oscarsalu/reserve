BusService = new Mongo.Collection("busservice");

BusService.attachSchema(new SimpleSchema({
	name : {
		type: String,
		max: 50,
	},
	agency : {
		type: String
	},
	available_seats: {
		type: Object
	},
	seats : {
		type: Object
	},
	source : {
		type: String
	},
	destination : {
		type: String
	},
	startDateTime : {
		type : Object
	},
	endDateTime: {
		type : Object
	},
	createdAt : {
		type : Date
	},
	updatedAt : {
		type : Date
	}

}));