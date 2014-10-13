var siteloc = "http://localhost/paybill"
var scriptloc = "/scripts/"

function index(accountNum, PLDT_acct_num)
{
  $.ajax({
      url: siteloc + scriptloc + "index.py",
      data: {accountNum:accountNum,
        PLDT_acct_num:PLDT_acct_num},
      dataType: 'json',
      success: function (res) {
        console.log(res);
                  if(res[0][0] != "None")
                  {
              table = '<div class="table-responsive">';
            table += '<table class="table table-condensed">';
            table += '<thead>' +
                    '<tr>' +
                    '<th>CLIENT NO.</th>' +
                    '<th>&nbsp;&nbsp;&nbsp;CLIENT ACCOUNT BALANCE</th>' +
                    '<th>&nbsp;&nbsp;&nbsp;PLDT ACCOUNT NO.</th>'+
                    '<th>&nbsp;&nbsp;&nbsp;PLDT ACCOUNT BILL</th>' +
                    '</tr>' +
                     '</thead>';
            table += "<tbody>";      
            for (i = 0; i < res.length; i++)
            {
              row = res[i];
              table += "<tr>";
              for (j = 0; j < row.length; j++)
              {

                if (j <= 3){
                  table += '<td>&nbsp;&nbsp;&nbsp;' + row[j] + '</td>';
                };
              }
              table += "</tr>";
            }
            table += "</tbody>";
            table += "</table>";
            table += "<br></div>";
            $("#target").html(table); 
          } 
          else{
            display = '<div class="table-responsive">No Results Found.<br><br></div>'
            $("#target").html(display);
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