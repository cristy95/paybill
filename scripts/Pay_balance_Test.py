from pay_balance import index
import unittest

class Pay_balance_Test(unittest.TestCase):
  def runTest(pay_balance):
  """Pay Balance Test """
  pay_balance.failUnless(index('1', '2000', '1') == 'OK', "Fail")

def suite():
  suite_=unittest.TestSuite()
  suite_.AddTest(Pay_balance_Test())
  return suite_

runner = unittest.TextTextRunner()
test_suite = suite()
runner.run(test_suite)
