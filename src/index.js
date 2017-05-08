$(document).ready(function(){
  // your code here!
  const $commentList = $("#comment-list")
  const $form = $("#note-form")
  const $userComment = $("input")


  var commentRenderer = function(e) {
  	e.preventDefault()
  	renderComments()
  }

  function renderComments() {
  	var comment = new Comment($userComment.val())
  	var list = new CommentList()
  	list.addComment(comment.text)
  	return $($commentList).html(list.render())
  }
  

  $form.submit(commentRenderer);

})
