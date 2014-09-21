Meteor.publish('users', function(){
	return Meteor.users.find({}, {fields: {services:0}});
});

Meteor.publish('comments', function() {
		return Comments.find();
});


