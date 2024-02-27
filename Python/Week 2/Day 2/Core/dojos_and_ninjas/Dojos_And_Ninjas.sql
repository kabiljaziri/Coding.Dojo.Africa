SELECT * FROM dojos_ninjas.ninjas;
insert into dojos (name)
values ( 'dojo1'),( 'dojo2'),( 'dojo3');



delete from dojos;

insert into dojos (name)
values ( 'dojo1'),( 'dojo2'),( 'dojo3');


insert into ninjas (first_name,last_name,age,dojo_id)
values ('kabil','jaziri',23,1),('dali','midessi',20,1),('mohsen','elabbar',33,1);


insert into ninjas (first_name,last_name,age,dojo_id)
values ('yassin','deyra',21,2),('mariem','belhaj',19,2),('seif','kouki',20,2);


insert into ninjas (first_name,last_name,age,dojo_id)
values ('souleim','bensaid',27,3),('anis','rouis',29,3),('jasser','boualila',18,3);



select * from ninjas
where dojo_id=1;


select * from ninjas
where dojo_id=2; 


select * from ninjas
where dojo_id=3;



select * from ninjas
join dojos on dojos.id=ninjas.dojo_id;

select * from dojos
join ninjas on ninjas.dojo_id=dojos.id;
