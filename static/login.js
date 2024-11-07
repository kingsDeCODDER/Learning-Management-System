$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: window.location.href,
            data: formData,
            success: function(response) {
                window.location.href = '/';  // Redirect to home on success
            },
            error: function(response) {
                alert('Error: Could not log in.');
            }
        });
    });
});