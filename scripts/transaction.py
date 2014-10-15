from dosql import *
import cgi
import json

def index(req, date,  amount, PLDT_acct_num, accountNum):
    date = cgi.escape(date)
    amount = cgi.escape(amount)
    PLDT_acct_num = cgi.escape(PLDT_acct_num)
    accountNum = cgi.escape(accountNum)

    x = doSql()
    receipt = x.execqry("select * from create_transaction('" +date+ "', " + amount +", " + PLDT_acct_num + ", " + accountNum+");", 'True')

    result = []
    for rec in receipt:
        stringed = map(str, rec)
        result.append(stringed)

    return json.dumps(result)


def getcount(req):
  
  y = doSql()
  count = y.execqry("select * from get_count();", 'False')

  res = []
  for cou in count:
    stringed = map(str, cou)
    res.append(stringed)

  return json.dumps(res)
