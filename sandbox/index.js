var app = module.exports = require('derby').createApp('hello', __filename);
app.loadViews(__dirname);

app.get('/', function(page, model) {
	page.render();
});
