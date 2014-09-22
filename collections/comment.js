Comments = new Mongo.Collection('comments');

Comments.allow({
	remove: function(userId, comment){
		return userId === comment.owner;
	}
});

Meteor.methods({
	createComment : function(commentContent, userId) {
		var timeNow = new Date();
		console.log(timeNow);
		var comment = {
			content: commentContent,
			createdAt: timeNow,
			updatedAt: timeNow
		}

		if(typeof userId !== ''){
			comment.owner = userId;
		}

		var commentId = Comments.insert(comment);

		return commentId;
	}
});


