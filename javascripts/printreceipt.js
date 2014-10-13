var siteloc = "http://localhost/paybill"
var scriptloc = "/scripts/"

function printreceipt(){
    $.ajax({
	url: siteloc + scriptloc + "printreceipt.py",
	data: {acctno_fk:acctno_fk,
		pldtacct_no_fk:pldtacct_no_fk
		receipt:receipt},
	dataType: 'json',
	success: function (res){
		console.log(res);
		if(res[0][0] != "None")
		{
		    table = '<div class="table-responsive">';
		    table += '<table class="table table-condensed">';
		    table += '<thead>' + '<tr>' + '<th>Status</th>' + '<th>Receipt Number</th>' + '<th>Date</th>' + '<th>Account Number</th>' + '<th>Amount</th>' + '</tr>' + '</thead>';

		for (i=0; i<res.length; i++){
		row = res[i];
		table += "<tr>";
		    for (j=0; j<row.length; j++){
			if
		    }
		}
		}

}

function displayreceipt(pldtacct_no_fk){
    $ajax({
	url: siteloc + scriptloc + "printreceipt.py",
	data: {acctno_fk:acctno_fk,
		pldtacct_no_fk:pldtacct_no_fk
		receipt:receipt},
	dataType: 'json',
	success: function (res){
		console.log(res);
		if(res[0][0] != "None")
		{
		    display = '<div>';
		    display += '<p>&nbsp;Status&nbsp;'+ res[0][0] +'</p>' 			 + '<p>&nbsp;Receipt Number&nbsp;'+ res[0][1] +'</p>' 
		 + '<p>&nbsp;Date&nbsp;'+ res[0][2] +'</p>'

		}

}

});

}
	


});

}

