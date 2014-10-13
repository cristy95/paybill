create table client
(
		accountNum int primary key,
		emoney float,
		password char(5)


);

create or replace function
	getemoney(in int, out float)
returns float as

$$

select emoney from client
	where accountNum = $1; 

$$


language 'sql';

------------------------

create or replace function
    confirmpassword(in int, out char(5))
returns character as
$$
    select password from client
    where accountNum = $1;
$$
    language 'sql';

----------------------

