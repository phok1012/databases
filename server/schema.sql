drop database chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users(
  id int(16) not null auto_increment,
  name varchar(25),
  primary key (id)
);

CREATE TABLE messages (
  id int(16) not null auto_increment,
  text varchar(255),
  roomname varchar(30) not null,
  userid int(16) not null,
  primary key (id),
  foreign key (userid) references users(id) on update cascade on delete cascade
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

