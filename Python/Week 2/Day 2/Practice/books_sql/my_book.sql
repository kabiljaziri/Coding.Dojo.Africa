INSERT INTO users (first_name,last_name) VALUES ('Jane','Amsden'),('Emily','Dixon'),('Theodore','Dostoevsky'),('William','Shapiro'),('Lao','Xiu');

SELECT * FROM users;
SELECT * FROM books;

SET SQL_SAFE_UPDATES =0;

INSERT INTO books (title,num_of_pages) VALUES ('C Sharp',100),('JAVA',200),('Python',300),('PHP',1400),('Ruby',500);

UPDATE books SET title = 'C#' WHERE title = 'C Sharp';
UPDATE users SET first_name = 'Bill' WHERE id = 4;

INSERT INTO favorites (users_id, books_id) VALUES (1, 1);
INSERT INTO favorites (users_id, books_id) VALUES (1, 2);

INSERT INTO favorites(users_id, books_id) VALUES (2, 1);
INSERT INTO favorites (users_id, books_id) VALUES (2, 2);
INSERT INTO favorites (users_id, books_id) VALUES (2, 3);

INSERT INTO favorites (users_id, books_id) VALUES (3, 1);
INSERT INTO favorites (users_id, books_id) VALUES (3, 2);
INSERT INTO favorites (users_id, books_id) VALUES (3, 3);
INSERT favorites (users_id, books_id) VALUES (3, 4);

INSERT INTO favorites (users_id, books_id) SELECT 4,id FROM books;
select * from favorites;

SELECT users.*
FROM favorites
JOIN users ON favorites.users_id = users.id
WHERE favorites.books_id = 3;

DELETE FROM favorites
WHERE books_id = 3
LIMIT 1;

INSERT INTO favorites (users_id, books_id) VALUES (5, 2);

SELECT books.*
FROM books
JOIN favorites ON books.id = books_has_users.books_id
WHERE favorites.users_id = 3;

SELECT users.*
FROM users
JOIN favorites ON users.id = favorites.users_id
WHERE favorites.books_id = 5;