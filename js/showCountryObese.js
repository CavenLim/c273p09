

$(document).ready(function () {
    $('#idCountry').change(function(){
         var findId = $(this).val();
    $.ajax({
                    type: "GET",
                    url: "getCountryDetails.php",
                    cache: false,
                    data: "id=" + findId,
                    dataType: "JSON",
                   
                    success: function (response) {
                        var message="<thead><tr><th>population</th><th>Obese</th></tr></thead>";
                           message+="<tbody><tr><td>" + response[0].population + "</td>"
                                    + "<td>" + response[0].obese + "</td></tr></tbody>";
                                   
                        
                        $("#obeseTable").html(message);
                    },
                    error: function (obj, textStatus, errorThrown) {
                        console.log("Error " + textStatus + ": " + errorThrown);
                    }
                });
    
    });
   

    
});
