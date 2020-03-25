
$("form#signupForm").on("submit",function (e) {
    e.preventDefault();
    $("#loader").show();
    if ($("#passwordS").val() != $("#confirmPassword").val() ){
        $("#loader").hide();
        $("#errorMessages").show();
        $("#errorMessages").html('<li>Password and confirmed password not matched </li>');
    }else {
        $.ajax({
            url: "/signup",
            method: "POST",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                contact: $("#contact").val(),
                username: $("#usernameS").val(),
                password: $("#passwordS").val(),
                confirmPassword: $("#confirmPassword").val(),
                "_token": $('meta[name="csrf-token"]').attr('content'),
            },
            success: function (response) {
                if (response.status == 1){
                    window.location.href = response.redirectUrl;
                }
            },
            error: function (errorRes) {
                $("#loader").hide();

                var responseTxt = errorRes.responseText;
                showErrors(responseTxt,'errorSignup');
            }
        });
    }
});

$("form#loginForm").on("submit",function (e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    $("#loader").show();

    $.ajax({
        url: "/validateLogin",
        method: "POST",
        data: {
            username: username,
            password: password,
            "_token": $('meta[name="csrf-token"]').attr('content'),
        },
        success: function (response) {
            if (response.loginStatus == 1){
                window.location.href = response.redirectUrl;
            }else{
                $("#loader").hide();
                $("#errorMessages2").show();
                $("#errorMessages2").html('<li>Login Failed</li>');
            }
        },
        error: function (errorRes) {
            $("#loader").hide();
            var responseTxt = errorRes.responseText;
            showErrors(responseTxt,'errorLogin');
        }

    });

});

function showErrors(responseTxt,errorType) {

    var json = $.parseJSON(responseTxt);
    var errorsHtml = '';
    $.each(json.errors, function (key, value) {
        errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
    });

    $('html, body').animate({
        scrollTop: $(".login-sec").offset().top
    }, 1000);


    if (errorType == 'errorSignup'){
        $("#errorMessages").show();
        $("#errorMessages").html(errorsHtml);
    }else if (errorType == 'errorLogin'){
        $("#errorMessages2").show();
        $("#errorMessages2").html(errorsHtml);
    }


}

