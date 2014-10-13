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
                    '<th>CLIENT ACCOUNT BALANCE</th>' +
                    '<th>PLDT ACCOUNT NO.</th>'+
                    '<th>PLDT ACCOUNT BILL</th>' +
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
                  table += '<td>' + row[j] + '</td>';
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