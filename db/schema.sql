CREATE DATABASE burgers;
USE burgers;

CREATE TABLE `burgers` (
id integer(11) auto_increment not null,
burger_name varchar (55) not null,
devoured boolean,

primary key (id)
)
