var siteloc = "http://localhost/paybill"
var scriptloc = "/scripts/"

var balance;

function get_balance(PLDT_acct_num)
{
  $.ajax({
      url: siteloc + scriptloc + "get_balance.py",
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

function pay_balance(PLDT_acct_num, bal, acct_num)
{
  $.ajax({
      url: siteloc + scriptloc + "pay_balance.py",
      data: {PLDT_acct_num:PLDT_acct_num,
		bal:bal,
		acct_num:acct_num},
      dataType: 'json',
      success: function (res) {
                  if(res[0][0] != "None")
                  {
			str = "Transaction Successful";
			$("#payresult").html(str);
                  }
  		}
	});
}
