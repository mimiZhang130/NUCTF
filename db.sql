-- CREATE DATABASE nuctf;

USE nuctf;

-- has to be dropped in this order because writeupid is a foreign key for the other tables
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS writeups;


CREATE TABLE writeups
(
    writeupid int not null AUTO_INCREMENT,
    filepath varchar(64) not null,
    PRIMARY KEY (writeupid),
    UNIQUE (filepath)
);

ALTER TABLE writeups AUTO_INCREMENT = 1001; -- STARTING VALUE

CREATE TABLE comments
(
    commentid int not null AUTO_INCREMENT,
    writeupid int not null,
    email varchar(128) not null,
    comment varchar(256) not null,
    PRIMARY KEY (commentid),
    FOREIGN KEY (writeupid) REFERENCES writeups(writeupid) 
);

ALTER TABLE comments AUTO_INCREMENT = 5001; -- STARTING VALUE

CREATE TABLE tags
(
    tagname varchar(32) not null,
    writeupid int not null,
    FOREIGN KEY (writeupid) REFERENCES writeups(writeupid)
);
-- -- DROP TABLE IF EXISTS team;
-- -- DROP TABLE IF EXISTS blog;