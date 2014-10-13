create table PLDT_accounts(
	PLDT_acct_num int primary key,
	balance float,
	acct_num_fk int references client(accountNum)
);

-----------------------------------------------------------------
create or replace
	function get_balance(in int, out float)
	returns float as
$$
    select balance from PLDT_accounts
    where PLDT_acct_num = $1;
$$
    language 'sql';

-----------------------------------------------------------------
create or replace
	function pay_balance(p_PLDT_acct_num int, p_balance float, p_acct_num int)
	returns text as
$$
  declare 
	v_PLDT_acct int;

  begin
	select into v_PLDT_acct PLDT_acct_num from PLDT_accounts
	where PLDT_acct_num = p_PLDT_acct_num 
	and acct_num_fk = p_acct_num;

	if v_PLDT_acct isnull then
		return 'Account Not Found';
	else 
		update PLDT_accounts
		set balance = p_balance
		where PLDT_acct_num = p_PLDT_acct_num;
		return 'OK';
end if;
end;
$$
language 'plpgsql';


