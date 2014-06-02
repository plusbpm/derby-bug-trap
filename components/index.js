var app = module.exports = require('derby').createApp('hello', __filename);
app.loadViews(__dirname);

app.component( require("./lib/lenta") );
app.component( require("./lib/item") );
app.component( require("./lib/comments") );

app.get('/', function(page, model) {

	// imagine we build universal content output, somewhat like facebook newsfeed
	// but we have multiple collections and here is probably elasticsearch output recordset
	var lenta = []
	lenta.push(
		{
			id: "post1",
			collection: "posts"
		},
		{
			id: "user1",
			collection: "users"
		},
		{
			id: "doc1",
			collection: "docs"
		}
	)
	model.set("_page.lenta", lenta);
	page.render();

 //  model.subscribe('hello.message', function() {
	// page.render();
 //  });
});
