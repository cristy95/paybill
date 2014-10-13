from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, accountNum, PLDT_acct_num):
    x = doSql()
    rets = x.execqry("select client.accountNum, client.emoney, PLDT_accounts.PLDT_acct_num, PLDT_accounts.balance from PLDT_accounts\
    	INNER JOIN client ON client.accountNum = PLDT_accounts.acct_num_fk\
    	where client.accountNum ='" + accountNum + "' and PLDT_accounts.PLDT_acct_num =" + PLDT_acct_num + ";", False)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)
    

    return json.dumps(result)
