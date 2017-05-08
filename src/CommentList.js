class CommentList {
	constructor(comments) {
		this.comments = []
	}

	render() {
		var comments = this.comments.map(function(comment){
			return comment.render()
		})
		return `<ul>${comments.join("")}</ul>`
	}

	addComment(string) {
		var comment = new Comment(string)
		this.comments.push(comment)
	}
}