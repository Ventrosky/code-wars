$( document ).ready(function() {
    console.log( "ready!" );
    $.ajax('http://localhost:8055/world', {
        dataType: 'json', 
        type: 'POST', 
        data: { myData: 'dummy my data.' },
        timeout: 500,    
        success: function (data,status,xhr) {   
            console.log("Success", data);
        },
        error: function (jqXhr, textStatus, errorMessage) { 
            console.log('Error: ' + errorMessage);
        }
    });
});