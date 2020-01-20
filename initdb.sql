create table wardrobe (
id integer primary key,
item_name text
);

create table fridge (
id integer primary key,
item_name text
);

create table shelve (
id integer primary key,
item_name text
);

insert into wardrobe (id, item_name) values (1, 'red tshirt');
insert into wardrobe (id, item_name) values (2, 'black tshirt');
insert into wardrobe (id, item_name) values (3, 'jeans');
insert into wardrobe (id, item_name) values (4, 'sweatpants');
insert into wardrobe (id, item_name) values (5, 'black dress');

insert into fridge (id, item_name) values (1, '2 zucchini');
insert into fridge (id, item_name) values (2, '1 red paprika');
insert into fridge (id, item_name) values (3, '2 carrots');
insert into fridge (id, item_name) values (4, 'milk');
insert into fridge (id, item_name) values (5, 'beer');
insert into fridge (id, item_name) values (6, '1 apple');

insert into shelve (id, item_name) values (1, '10 books');
insert into shelve (id, item_name) values (2, 'decoration plant');
insert into shelve (id, item_name) values (3, 'family picture');
insert into shelve (id, item_name) values (4, 'folder');