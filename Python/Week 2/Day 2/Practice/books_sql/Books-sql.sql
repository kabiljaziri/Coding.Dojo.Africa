insert users (first_name,last_name)
values ('Jane','Adams'),('Emily','Dixon'),('Theodore','Dasotoevsky'),('Wiliam','Shapiro'),('Lao','Xiu');
SELECT * FROM users;
SELECT * FROM books;
SET SQL_SAFE_UPDATES =0;

insert into books (title,num_of_pages)
values ('C Sharp',100),('Java',200),('Python',300),('PHP',400),('Ruby',500);


Update books set title ='c#'
where title = 'C Sharp';

update users set first_name='Bill'
where id = 4;

insert into favorites (users_id, books_id)
 VALUES (1, 1);
insert into  favorites(users_id, books_id)
 VALUES (1, 2);
 
 insert into favorites (users_id, books_id)
 values (2, 1);
  insert into favorites (users_id, books_id)
 values (2, 2);
  insert into favorites (users_id, books_id)
 values (2, 3);
 
  insert into favorites (users_id, books_id)
 values (3, 1);
  insert into favorites (users_id, books_id)
 values (3, 2);
  insert into favorites (users_id, books_id)
 values (3, 3);
  insert into favorites (users_id, books_id)
 values (3, 4);
 
insert into favorites ( users_id,books_id) select 4,id from books;
select*from favorites;

select users.*
from favorites
join users on favorites.users_id
where favorites.books_id=3;

delete from favorites 
where books=3
limit 1;

insert into  favorites(users_id, books_id)
 VALUES (5, 2);
 
 select books.*from books
 join favorites on books_id= favorites.books_id
 where favorites.users_id=3;
 
 select users from users
 join favorites on users_id= favorites.users_id
 where favorites.books_id=5;
 
 
 





 
 







