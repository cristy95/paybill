var siteloc = "http://localhost/paybill";
var scriptloc = "/scripts/"
var bal;



function getEmoney()
{
  $.ajax({
      url: siteloc + scriptloc + "getemoney.py",
      data: {accountNum:$("#accountNum").val(),
      dataType: 'json',
      success: function (res) {
                console.log(res);
                if(res[0][0] == "None")
				{
			answer = '<h3>Your Balance is</h3>'
					+ res[0][1];
			$("#target").html(answer); 
				}
 
        }
    });
}
}

function isSufficient()
{
  var PLDT_acct = $("#PLDT_acct").val();
  var accountNum = $("#accountNum").val();
  getemoney(accountNum);
  get_balance(PLDT_acct)
  if (bal < balance){
      str = "Your E-Bank balance is not enough."
      $("#target").html(str);
  }else{
    pay_balance(PLDT_acct, balance, accountNum);
  }
}

function getemoney(accountNum)
{
 
      url: siteloc + scriptloc + "getemoney.py",
      data: {accountNum:$("#accountNum").val(),
      dataType: 'json',
      success: function (res) {
                console.log(res);
                bal =  res[0][1];
    } 
        }
 
}
