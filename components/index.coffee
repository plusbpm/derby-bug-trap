app = module.exports = require("derby").createApp("hello", __filename);
app.loadViews(__dirname);

app.component( require("./lib/lenta") );
app.component( require("./lib/item") );
app.component( require("./lib/comments") );

app.get "/", (page, model) ->
	q = model.query "posts",
		visible	: true
		type	: "post"
	q.fetch (err) ->
		model.set "_page.lenta", q.get()
		page.render()