	CREATE TABLE transaction(
		receipt serial primary key,
		dates text,
		amount float,
		PLDT_acct_num_fk int references PLDT_accounts(PLDT_acct_num),
		accountNum_fk int references client(accountNum)
	);

	create or replace
		function create_transaction(p_dates text, p_amount
			float, p_PLDT_acct_num_fk int, p_accountNum_fk int)
		returns int as

	$BODY$
	declare v_receipt int;
	begin
		insert into transaction(dates, amount, accountNum_fk, PLDT_acct_num_fk)
			values (p_dates, p_amount, p_accountNum_fk, p_PLDT_acct_num_fk);
		
		select into v_receipt receipt from transaction
			where dates = p_dates
			and accountNum_fk = p_accountNum_fk
			and PLDT_acct_num_fk = p_PLDT_acct_num_fk;
		
		return v_receipt;
	end;
	$BODY$

	language 'plpgsql';

	--------------------------------------------------------------------------

	create or replace function
		get_transaction(in int, out int, out text, out float, out int)
	returns setof record as
	$$
		select receipt, dates, amount, accountNum_fk from transaction
		where receipt = $1;
	$$
		language 'sql';
	--------------------------------------------------------------------------
	create or replace function
		get_count(out bigint)
		returns bigint as
	$$
		select count(receipt) from transaction;
	$$
		language 'sql';





--------------------------------

