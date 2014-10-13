	CREATE TABLE transaction(
		receipt serial primary key,
		dates char(8),
		amount int,
		acctno_fk int references client(accountNum)
	);

	create or replace
		function create_transaction(p_dates char(8), p_amount
			int, p_acctno_fk int)
		returns text as

	$BODY$
	declare
		v_receipt int;
		v_acctno_fk int;

	begin
		select into v_receipt receipt from transaction
		where acctno_fk = p_acctno_fk;

		if v_receipt isnull then
			insert into transaction(receipt, dates, amount, acctno_fk)
			values (p_receipt, p_dates, p_amount, p_acctno_fk);
		end if;

		return 'SET';
	end;
	$BODY$

	language 'plpgsql';

	--------------------------------------------------------------------------

	create or replace function
		get_transaction(in int, out int, out char(8), out int, out int)
	returns setof record as
	$$
		select receipt, dates, amount, acctno_fk from transaction
		where acctno_fk = $1;
	$$
		language 'sql';