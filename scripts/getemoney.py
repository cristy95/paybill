from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, accountNum):
  
  accountNum = cgi.escape(accountNum)

  x = doSql()
  studs = x.execqry("select * from getemoney('" + accountNum + "');", 'False')
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)


def get_bal(req, PLDT_acct_num, accountNum):
  PLDT_acct_num = cgi.escape(PLDT_acct_num)
  accountNum = cgi.escape(accountNum)

  y= doSql()
  rets = y.execqry("select * from get_bal(" + PLDT_acct_num + ", " + accountNum + ");", 'False')
  result = []

  for ret in rets:
    stringed = map(str, ret)
    result.append(stringed)

  return json.dumps(result)
