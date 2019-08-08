$.getJSON("*", function (data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#currentTrades").append(
        "<div class='card' style='width: 18rem;'>" +
        "<p>" + data[i].haveItem + "</p>" +
        "<p>" + data[i].haveCertification + "</p>" +
        "<p>" + data[i].haveColor + "</p>" +
        "<p>" + data[i].wantItem + "</p>" +
        "<p>" + data[i].wantCertification + "</p>" +
        "<p>" + data[i].wantColor + "</p> </div>"
      );
    }
  });
  

$(document).on("click", "#tradeSubmit", function(){
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data:{
            haveItem: $("haveItem").val(),
            haveCertification: $("haveCertification").val(),
            haveColor:$("haveColor").val(),
            wantItem: $("haveItem").val(),
            wantCertification: $("haveCertification").val(),
            wantColor:$("haveColor").val(),
        }
    }).then(
        alert("Your Trade has been posted!")
    )
});