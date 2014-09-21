Comments = new Mongo.Collection('comments');

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


