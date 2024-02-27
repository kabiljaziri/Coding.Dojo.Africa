insert into users (first_name,last_name,email)
values ( 'kabil','jaziri','kj@gmail.com') , ( 'dali','midessi','dm@gmail.com') , ( 'mohsen','elabbar','me@gmail.com');


select * from users;


select email from users
where id=1;

select * from users
where id=1
order by id DESC;


update users
set last_name='pancakes'
where id=3;


SET SQL_SAFE_UPDATES = 0;


delete from users
where id=2;


select * from users
order by first_name;

select * from users
order by first_name DESC;