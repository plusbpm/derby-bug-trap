module.exports = Lenta;

function Lenta() {}
Lenta.prototype.view = __dirname  + "/lenta.html";
Lenta.prototype.init = function(model) {
	console.log("Lenta");
};