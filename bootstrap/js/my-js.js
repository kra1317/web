$(document).ready(function () {


    function clearNavSelection() {
        $('.nav ul li').removeClass("active");

        $('#home').addClass("hidden");
        $('#place').addClass("hidden");
        $('#hobby').addClass("hidden");
        $('#friends').addClass("hidden");
        $('#masseges').addClass("hidden");

        $("#home1").parent('li').removeClass("active");
        $("#place1").parent('li').removeClass("active");
        $("#hobby1").parent('li').removeClass("active");
        $("#friends1").parent('li').removeClass("active");


    };


    $("#home1").click(function () {
        clearNavSelection();
        $("#home1").parent('li').addClass("active");
        $('#home').removeClass("hidden");




    });


    $("#place1").click(function () {
        clearNavSelection();
        $("#place1").parent('li').addClass("active");
        $('#place').removeClass("hidden");
    });


    $("#hobby1").click(function () {
        clearNavSelection();
        $("#hobby1").parent('li').addClass("active");
        $('#hobby').removeClass("hidden");
    });


    $("#friends1").click(function () {
        clearNavSelection();
        $("#friends1").parent('li').addClass("active");
        $('#friends').removeClass("hidden");
    });


    $("#writeMassege").click(function () {
        clearNavSelection();
        $("#friends1").parent('li').addClass("active");
        $("#masseges").removeClass("hidden");

    });




    $('#saveEditContact').click(function () {

        var firstName = $('#firstName').text();
        var lastName = $('#lastName').text();
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();


        $.ajax({
            type: "POST",
            url: '/clientOrder',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: '{"firstName": "' + firstName + '", "lastName": "' + lastName + '", "dateBithDay": "' + day + '.' + month + '.' + year + '"}',

            beforeSend: function () {
                alert('beforeSend');
            },

            error: function (data) {
                alert('error' + data);
            },


            dataFilter: function () {
                alert('dataFilter');
            },

            success: function (data) {
                alert('success');

                if (data.status === 'OK') {
                    updateStatus(data.barStatus);
                    displayClientOrderSuccess();
                }

                else {
                    displayError(data.errorMessage);
                }



            },

            complete: function () {
                alert('complete');
            }

        });




    });


    $('#deleteContact').click(function () {

        $.ajax({
            type: "POST",
            url: '/clientOrder',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: '{"firstName": "' + null + '", "lastName": "' + null + '", "dateBithDay": "' + null + '.' + null + '.' + null + '"}',


            beforeSend: function () {
                alert('beforeSend');
            },

            error: function (data) {
                alert('error' + data);
            },


            dataFilter: function () {
                alert('dataFilter');
            },

            success: function (data) {
                alert('success');

                if (data.status === 'OK') {
                    updateStatus(data.barStatus);
                    displayClientOrderSuccess();
                }

                else {
                    displayError(data.errorMessage);
                }



            },

            complete: function () {
                alert('complete');
            }

        });




    });








});
    
    
 