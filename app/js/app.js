const a = 'hello';
console.log(a);
console.log('dupa');

$(document).ready(function () {

    console.log('whatever');

});

//show or hide table row details
$(".table-row").click(function () {
        if ($(this).find('.table-row-details').is(":hidden")) {
            $(this).find('.table-row-details').slideDown("slow");
        } else {
            $(this).find('.table-row-details').hide();
        }
});