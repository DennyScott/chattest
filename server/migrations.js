Migrations.add({
  version: 1,
  name: 'All comments get a title.',
  up: function() {
		Comments.update({}, {$set:{title: 'New Title'}}, {multi: true});
	},
  down: function() {
		Comments.update({}, {$unset:{title: true}}, {multi:true});
	}
});

Migrations.migrateTo('0');
