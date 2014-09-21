Accounts.onCreateUser(function(options, user) {
	user.profile = {
		name: options.username
	};

	user.username = options.username;
	user.createdAt = new Date();
	return user;
});
