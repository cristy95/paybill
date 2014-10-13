	CREATE TABLE transaction(
		receipt serial primary key,
		dates char(8),
		amount int,
		PLDT_acct_num_fk int references PLDT_accounts(PLDT_acct_num)
		accountNum_fk int references client(accountNum)
	);

	create or replace
		function create_transaction(p_amount
			int, p_PLDT_acct_num_fk int, p_accountNum_fk int)
		returns text as

	$BODY$
	declare
		v_receipt int;
		v_dates text;
		v_accountNum_fk int;

	begin
		select into v_receipt receipt from transaction
		where accountNum_fk = p_accountNum_fk 
		and PLDT_acct_num = p_PLDT_acct_num_fk;

		if v_receipt isnull then
			insert into transaction(receipt, dates, amount, accountNum_fk)
			values (p_receipt, p_dates, p_amount, p_accountNum_fk);
		end if;

		return 'SET';
	end;
	$BODY$

	language 'plpgsql';

	--------------------------------------------------------------------------

	create or replace function
		get_transaction(in int, in int, out int, out text, out int, out int)
	returns setof record as
	$$
		select receipt, dates, amount, accountNum_fk from transaction
		where PLDT_acct_num_fk = $1 
		and accountNum_fk = $2;
	$$
		language 'sql';