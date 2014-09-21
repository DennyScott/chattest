displayName = function(user) {
	if(user.profile && user.profile.name){
		return user.profile.name
	}
	console.log("in displayName");


	return user.emails[0].address
}

var Schemas = {};

Schemas.User = new SimpleSchema({
	_id: {
		type: String,
	},

	emails: {
		type: [Object],
		optional:true
	},

	username: {
		type: String,
	},

	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date,
		optional:true
	},

	profile: {
		type: Object,
		blackbox: true
	},

	services: {
		type: Object,
		optional: true,
		blackbox: true
	}
});

Meteor.users.attachSchema(Schemas.User);
