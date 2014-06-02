module.exports = Item;

function Item() {}
Item.prototype.view = __dirname  + "/item.html";
Item.prototype.init = function(model) {
	console.log( "Item: " + model.get("item.id") );
};