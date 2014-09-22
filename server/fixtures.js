if(Comments.find({}).count() === 0){
	var timeNow = new Date();
	Comments.insert({content: 'Someone should say something!', createdAt: timeNow, updatedAt: timeNow});
}
