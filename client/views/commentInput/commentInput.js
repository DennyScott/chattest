Meteor.startup = function(){
	Session.set('content', '');
}

Template.commentInput.rendered = function(){
	$('textarea').val(Session.get('content'));
}

Template.commentInput.helpers({

	creatorName : function(){
		var currentUser = Meteor.user();

		if(currentUser){
			return displayName(currentUser);
		}else{
			return "Stranger";
		}

	}

});


Template.commentInput.events({
	'keyup textarea' : function(event){
		Session.set('content', $(event.currentTarget).val());
	},

	'click button' : function(event, template){

		var userId = Meteor.userId()?Meteor.userId():'';

		Meteor.call('createComment', Session.get('content'), userId);
		$('comments').scrollTop(0);
		template.$('textarea').val('');
		Session.set('content', '');

	}
});
