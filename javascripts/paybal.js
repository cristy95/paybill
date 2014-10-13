var siteloc = "http://localhost/paybill"
var scriptloc = "/scripts/"

var balance;
function get_balance(PLDT_acct_num)
{
  $.ajax({
      url: siteloc + scriptloc + "getbalance.py",
      data: {PLDT_acct_num:PLDT_acct_num},
      dataType: 'json',
      success: function (res) {
                  if(res[0][0] != "None")
                  {
			balance = res[0][0];
                  }
  		}
	});
}
