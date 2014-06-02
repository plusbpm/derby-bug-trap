module.exports = Comments;

function Comments() {}
Comments.prototype.view = __dirname  + "/comments.html";
Comments.prototype.init = function(model) {
	console.log( "Comments for : " + model.get("for") );
};