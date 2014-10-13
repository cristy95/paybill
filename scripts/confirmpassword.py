from dosql import *
import cgi
import simplejson as json

def index(req, password):
  password = cgi.escape(password)

  x = dosql()
  studs = x.execqry("select * from confirmpassword('" + password + "'); ")

  for stud in studs:
  	stringed = map (str, stud)
  	result.append(stringed)

  return json.dumps(result)