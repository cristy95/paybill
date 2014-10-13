var siteloc = "http://localhost/paybill"
var scriptloc = "/scripts/"

function create_transaction()
{
    $.ajax({
	url: siteloc + scriptsloc + "transaction.py",
	data: {receipt	 : $("#receipt").val(),
		date	 : $("#date").val(),
		acctno_fk: $("#acctno_fk").val(),
		amount	 : $("#amount").val()
		pldtacct_no_fk : $("#pldtacct_no_fk").val()},
    dataType: 'json',
    succes: function (res) {
		console.log(res);
		if(res[0][0] != "None")
		{
			answer = 'SUCCESS'
			$("#target").html(answer);
		}

    }
});

}

function amount()
{
    $.ajax({
	url: siteloc + scriptloc + "transaction.py",
	data: {

}



});
}
