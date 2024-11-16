

$(function() {

window.addEventListener('load', function() {
    let fullUrl = "/rest/players";
    $.ajax({
        url: fullUrl,
        type: "GET",
        headers: {
            "accept": "application/json; odata=verbose"
        },
        success: onSuccess,
        error: onError
    });
    function onSuccess(data) {
        let objItems = data;
        let tableContent = '';
        for (let i = 0; i < objItems.length; i++) {
            tableContent += '<tr>';
            tableContent += '<td>' + objItems[i].id + '</td>';
            tableContent += '<td>' + objItems[i].name + '</td>';
            tableContent += '<td>' + objItems[i].title + '</td>';
            tableContent += '<td>' + objItems[i].race + '</td>';
            tableContent += '<td>' + objItems[i].profession + '</td>';
            tableContent += '<td>' + objItems[i].level + '</td>';
            tableContent += '<td>' + new Date(objItems[i].birthday).toLocaleDateString('en-US') + '</td>';
            tableContent += '<td>' + objItems[i].banned + '</td>';
            tableContent += '</tr>';
        }
        $('#mainTable tbody').append(tableContent);
    }

    function onError() {
        alert('Error');
    }
});
});




