-- DROP DATABASE
DROP DATABASE IF EXISTS techblog_db;

-- CREATE DATABASE
CREATE DATABASE techblog;

create user techblog identified by 'techblog';

grant drop, create, insert, select, update, delete on techblog to techblog;