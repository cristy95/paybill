var siteloc = "http://localhost/paybill";
var scriptloc = "/scripts/"
var bal;
var bal2;
var PLDT_acct;
var cl_acct;

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
  if (bal <= bal2){
      str = "Your E-Bank balance is not enough."
      $("#isenoughresult").html(str);
  }else{
    str = '<a type="button" href="#" data-toggle="modal" data-target="#myModal">'+
		'PAY</a>'
    $("#isenoughresult").html(str);
  }
}

function getemoney(accountNum)
{
 $.ajax({
      url: siteloc + scriptloc + "getemoney.py",
      data: {accountNum:$("#accountNum").val()},
      dataType: 'json',
      success: function (res) {
                console.log(res);
                if(res[0][0] == "None")
		{
			bal = res[0][0]
		}
        }
    });
  cl_acct = $("#accountNum").val();
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
  PLDT_acct = $("#PLDT_acct_num").val();
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
			str = 'Your Balance is:' + res[0][0];
			str += '<div>'+
				'<button onclick="isSufficient();">PAY BALANCE?</button>'+
				'<div id="isenoughresult"></div>';
			
			$("#target").html(str);
			
                  }
  		}
	});
}


function pay_balance(PLDT_acct_num, balance, acct_num)
{
  $.ajax({
      url: siteloc + scriptloc + "pay_balance.py",
      data: {PLDT_acct_num:PLDT_acct_num,
		balance:balance,
		acct_num:acct_num},
      dataType: 'json',
      success: function (res) {
                  if(res[0][0] != "None")
                  {
			str = 'Your Balance is:' + res[0][0];
			str += '<div>'+
				'<button onclick="isSufficient();">PAY BALANCE?</button>'+
				'<div id="isenoughresult"></div>';
			
			$("#target").html(str);
			
                  }
  		}
	});
}

function confirmpassword(accountNum, password)
{ 
 $.ajax({
      url: siteloc + scriptloc + "confirmpassword.py",
      data: {accountNum:accountNum,
		password:password},
      dataType: 'json',
      success: function (res) {
                  if(res[0][0] != "None")
                  {
			
			pay_balance(PLDT_acct, bal2, cl_acct);
                  }else{
			str = "Your account and the password don't match.";
			$("#payresult").html(str);
			}
		}
	}); 
}

function getPass(accountNum)
{
  var passwd = "confirmpassword.py?accountNum=" + accountNum;
  return passwd;
}



