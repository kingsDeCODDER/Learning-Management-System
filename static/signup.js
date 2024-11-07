$(document).ready(function() {
    $('#signupForm').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serialize();

        

        $.ajax({
            type: 'POST',
            url: window.location.href,
            data: formData,
            success: function(response) {
                window.location.href = '';
            },
            error: function(response) {
                alert('Error: Could not sign up.');
            }
        });
    });
});

