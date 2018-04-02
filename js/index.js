$("button").on("click", function getRate() {
  $.get("https://api.coindesk.com/v1/bpi/currentprice.json", function getRate(
    response
  ) {
    let obj = JSON.parse(response);
    document.getElementById("bitcoin").innerHTML = obj.bpi.USD.rate + " $ ";
  });
});