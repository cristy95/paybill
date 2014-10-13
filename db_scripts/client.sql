create table client
(
		accountNum int primary key,
		emoney float,
		password char(5)


);

create or replace function
	getemoney(in int, out float)
returns int as

$$

select emoney from client
	where accountNum = $1; 

$$


language 'sql';