-- 这个文件时创建一个数据库，并新建四个主要的数据表
SET NAMES UTF8;
# 如果MySQL中有 bookWeb数据库，就删除它
DROP DATABASE IF EXISTS bookWeb;
# 新建一个数据文件，定义它的编码格式为utf-8
CREATE DATABASE bookWeb CHARSET=UTF8;
USE bookWeb;
CREATE TABLE bookClass(
    bookID BIGINT PRIMARY KEY,
    bookName VARCHAR(32),
    bookAddress VARCHAR(32),
    picUrl VARCHAR(64),
    bookSum INT,
    bookNum INT,
    bookTime INT,
    bookDes VARCHAR(64),
    isRecommend BOOLEAN,
    bookOther VARCHAR(128)
);
CREATE TABLE orderClass(
    userID BIGINT PRIMARY KEY,
    userName VARCHAR(16),
    IDCart VARCHAR(18),
    pwd VARCHAR(32),
    userPhone BIGINT,
    isAdmin BOOLEAN,
    userOther VARCHAR(128)
);
CREATE TABLE rentClass(
    userID BIGINT,
    userName VARCHAR(16),
    bookID BIGINT,
    bookName VARCHAR(32),
    rentTime DATE,
    rentStatus BOOLEAN,
    returnTime DATE,
    rentOther VARCHAR(128)
);
CREATE TABLE messageClass(
    name VARCHAR(16),
    sex VARCHAR(8),
    emailUrl VARCHAR(64),
    messageText VARCHAR(128),
    messageStatus BOOLEAN,
    messageOther VARCHAR(128)
);
# 显示当前数据库的所有的表
SHOW TABLES;