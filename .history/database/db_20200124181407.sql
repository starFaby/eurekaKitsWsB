create database eurekakitsdb;
use eurekakitsdb;
create table persona(
    id int(11) not null,
    cedula varchar(15) not null,
    nombres varchar(30) not null,
    apellidos varchar(30) not null,
    direccion varchar(50) not null,
    telefono  varchar(50) not null,
    email  varchar(50) not null,
    password varchar(60) not null,
    estado int(1) not null
);
alter table persona
add Primary key (id);

alter table persona
modify id int(11) not null auto_increment, auto_increment = 2;

describe persona;