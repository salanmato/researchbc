# instalação de módulos do node.js

npm install cors express  mysql


# criação de database + tabela no mysql

create database research_db;

use research_db;

create table research_form (
	nome varchar(100),
    ra int,
    email varchar(100),
    web int,
    mobile int,
    desktop int,
    games int,
    infra int,
    seg int,
    projetos int
);

alter user 'root'@'localhost' identified with mysql_native_password by 'toor';

select * from research_form;
