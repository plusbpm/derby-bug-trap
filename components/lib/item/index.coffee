module.exports = class Item
	view: __dirname + "/item.html"

	init: (model) ->
		console?.log model.get("item")
		console?.log model.get("item.id")