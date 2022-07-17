$(function() {

    /* 
        EmranCo Function use with input files to show previews
        required data- 
        * data-preview = "id of "
        optional data-
        * data-extentions = "png,jpg,..."
    */
    $(".file-change").on('change', function(e) {

        var ext = this.value.match(/\.([^\.]+)$/)[1];

        // check if the input file has no attribute data-extentions give default
        if (!$(this).not('[data-extentions]'))
            $(this).attr('data-extentions', "jpg,png,jpeg");

        var extentions = $(this).attr('data-extentions').split(',');
        let data_preview = $("#" + $(this).attr('data-preview'));

        if (jQuery.inArray(ext, extentions) !== -1) {

            $("#alert-error").css("display", "none");
            $("#alert-success").css("display", "none");
            data_preview.attr('src', window.URL.createObjectURL($(this).prop('files')[0]));
        } else {
            $("#alert-error").html("The image must be in one of the following formats " +
                extentions.join(' Or ') + " only");
            $("#alert-error").css("display", "block");
            $("#alert-success").css("display", "none");
            $(this).val('');

        }

    });
});
