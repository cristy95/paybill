var siteloc = "http://localhost/paybill"
var scriptloc = "/scripts/"


function displayreceipt(pldtacct_no_fk){
    $ajax({
	url: siteloc + scriptloc + "printreceipt.py",
	data: {acctno_fk:acctno_fk,
		pldtacct_no_fk:pldtacct_no_fk},
	dataType: 'json',
	success: function (res){
		console.log(res);
		if(res[0][0] != "None")
		{
		    display = '<div>';
		    display += '<p>&nbsp;Status&nbsp;OK</p>' 			 + '<p>&nbsp;Receipt Number&nbsp;'+ res[0][0] +'</p>' 
		 + '<p>&nbsp;Date&nbsp;'+ res[0][1] +'</p>'
		 + '<p>&nbsp;Account Number&nbsp;'+ res[0][3] +'</p>'
		 + '<p>&nbsp;Amount&nbsp;'+ res[0][2] +'</p>';
		$("#target").html(display);

		}

}

});
}
	
