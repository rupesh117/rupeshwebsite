document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    fetch('/submit_comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, comment })
    })
    .then(response => response.json())
    .then(data => {
        alert('Comment submitted successfully!');
        document.getElementById('commentForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
