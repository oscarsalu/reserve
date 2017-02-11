Meteor.methods({
	sendEmail: function (to, from, subject, text) {
		// ...
		check([to, from, subject, text], [String]);

		this.unblock();

		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: text
		});
	}
});

/*Accounts.validateNewUser(function (user) {
	// ...
	new SimpleSchema({
		_id:{ type: String},
		emails: { type:Array },
		'emails.$': { type: Object},
		'emails.$.address': { type: String},
		'emails.$.verified': { type: Boolean},
		createdAt : { type: Date},
		services : { type: Object, blackbox: true}
	}).validate(user);

	return true;
});*/