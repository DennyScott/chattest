Migrations.add({
  version: 1,
  name: 'All comments get a title.',
  up: function() {
		Comments.update({}, {$set:{title: 'New Title'}});
	},
  down: function() {
		Comments.update({}, {$unset:{title: true}});
	}
});

Migrations.migrateTo('0');
