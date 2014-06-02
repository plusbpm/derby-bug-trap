app = module.exports = require("derby").createApp("derby-bug-trap", __filename);
app.loadViews(__dirname);

app.get "/", (page, model, params, next) -> page.render()