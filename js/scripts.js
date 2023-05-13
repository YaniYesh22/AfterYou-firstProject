$(document).ready(function () {
    const expectedId = "1234";
    const expectedPassword = "1234";

    $('button[type="submit"]').on('click', function (event) {
        event.preventDefault(); 
            const inputId = $('input[name="Id"]').val();
            const inputPassword = $('input[name="pass"]').val();

            if (inputId == expectedId && inputPassword == expectedPassword) {
                $('#success-alert').show();
                setTimeout(function () {
                    window.location.href = "home.html";
                }, 1000);
            } else {
                $('#danger-alert').show();
                setTimeout(function () {
                $('#danger-alert').hide();
                }, 2000);
            }
        });
});

