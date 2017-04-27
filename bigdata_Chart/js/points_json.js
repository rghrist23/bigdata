var points = [];

$(document).ready(() => {
    $('#more_fields').on('click', () => {
    var xVal = $('#xCoord').val();
var yVal = $('#yCoord').val();

if(xVal && yVal) {
    points.push({
        x: xVal,
        y: yVal
    });

    $('#points').append('<div>(' + xVal + ', ' + yVal + ')</div>');
}
});

//    jsonPoints = JSON.stringify(points)
$('#update').on('click', () => {
    $.ajax({
        type: 'GET',
        url: 'http://www.catohenry.com:8080/query/query?points='+encodeURIComponent(JSON.stringify(points)),
        success: (data) => {
        console.log(data)
//update stuff with the results or something
}
});
});
});
/**
 * Created by Rick on 4/27/2017.
 */
