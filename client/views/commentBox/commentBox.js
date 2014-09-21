Template.commentBox.helpers({
	
	creatorName : function(id){
		var owner = Meteor.users.findOne({_id: id});
		console.log(owner);
		if(typeof owner !== 'undefined'){
			return displayName(owner);
		}else{
			return 'Anonymous'
		}
	},

	mine: function(){
		var id = Meteor.userId();
		if(id === this.owner){
			return true;
		}

		return false;
	},

	showTime: function(time){
		return new Date(time).toLocaleString();
	}

});

Template.commentBox.events({
	'click .remove' : function(){
		Comments.remove({_id: this._id});
	}
})
