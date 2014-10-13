var siteloc = "http://localhost/paybill";
var scriptloc = "/scripts/"
var bal;
var bal2;


function getEmoney()
{
  $.ajax({
      url: siteloc + scriptloc + "getemoney.py",
      data: {accountNum:$("#accountNum").val()},
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
    confirmpassword();
  }
}

function getemoney(accountNum)
{
 $.ajax({
      url: siteloc + scriptloc + "getemoney.py",
      data: {accountNum:accountNum},
      dataType: 'json',
      success: function (res) {
                console.log(res);
                bal =  res[0][1];
    } 
        });
	
}

function get_balance()
{
  $.ajax({
      url: siteloc + scriptloc + "get_balance.py",
      data: {PLDT_acct_num:$("#PLDT_acct_num").val()},
      dataType: 'json',
      success: function (res) {
                  if(res[0][0] != "None")
                  {
			bal2 = res[0][0];
			console.log('get_balance');
			console.log(bal2);
                  }
  		}
	});
}
function showbalance()
{
   $.ajax({
      url: siteloc + scriptloc + "get_balance.py",
      data: {PLDT_acct_num:$("#PLDT_acct_num").val()},
      dataType: 'json',
      success: function (res) {
                  if(res[0][0] != "None")
                  {
			str = "Your Balance is:" + res[0][0];
			$("#target").html(str);
			
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

function confirmpassword(password)
{
  if (getPass=password){
    isSufficient();
  }else{
    ERROR
  }

}

function getPass(accountNum)
{
  var passwd = "confirmpassword.py?accountNum=" + accountNum;
  return passwd;
}



