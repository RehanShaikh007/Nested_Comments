const addCommentBtn = document.getElementById('add-comment');
const newCommentTextarea = document.getElementById('new-comment');
const charCount = document.getElementById('char-count');
const commentsContainer = document.getElementById('comments-container');

// Function to handle comment submission
addCommentBtn.addEventListener('click', () => {
  const commentText = newCommentTextarea.value.trim();
  
  if (commentText.length > 0 && commentText.length <= 250) {
    addComment(commentText);
    newCommentTextarea.value = '';
    charCount.textContent = '0/250';
  } else {
    alert('Comment must be between 1 and 250 characters.');
  }
});

// Function to update character count
newCommentTextarea.addEventListener('input', () => {
  const charLength = newCommentTextarea.value.length;
  charCount.textContent = `${charLength}/250`;
});

// Function to add a new comment
function addComment(commentText) {
  const comment = document.createElement('div');
  comment.classList.add('bg-gray-50', 'border', 'border-gray-200', 'rounded', 'p-4', 'mb-4', 'relative');
  
  const commentContent = document.createElement('p');
  commentContent.textContent = commentText;
  comment.appendChild(commentContent);

  const replyButton = document.createElement('button');
  replyButton.textContent = 'Reply';
  replyButton.classList.add('mt-2', 'text-blue-500', 'hover:underline');
  comment.appendChild(replyButton);

  const repliesContainer = document.createElement('div');
  repliesContainer.classList.add('ml-6', 'hidden');
  comment.appendChild(repliesContainer);

  replyButton.addEventListener('click', () => {
    const replyInput = document.createElement('textarea');
    replyInput.placeholder = 'Write a reply...';
    replyInput.classList.add('w-full', 'p-2', 'border', 'border-gray-300', 'rounded', 'mt-2');
    
    const replyButtonSubmit = document.createElement('button');
    replyButtonSubmit.textContent = 'Submit Reply';
    replyButtonSubmit.classList.add('mt-2', 'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded');
    
    repliesContainer.appendChild(replyInput);
    repliesContainer.appendChild(replyButtonSubmit);

    replyButtonSubmit.addEventListener('click', () => {
      const replyText = replyInput.value.trim();
      if (replyText.length > 0 && replyText.length <= 250) {
        addReply(replyText, repliesContainer);
        replyInput.value = '';
      } else {
        alert('Reply must be between 1 and 250 characters.');
      }
    });

    // Toggle replies visibility
    repliesContainer.classList.toggle('hidden');
  });

  commentsContainer.appendChild(comment);
}

// Function to add a nested reply
function addReply(replyText, parentContainer) {
  const reply = document.createElement('div');
  reply.classList.add('bg-gray-100', 'border', 'border-gray-300', 'rounded', 'p-4', 'mb-4');
  
  const replyContent = document.createElement('p');
  replyContent.textContent = replyText;
  reply.appendChild(replyContent);

  parentContainer.appendChild(reply);
}
