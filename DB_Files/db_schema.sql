database
--------------
create database fat_to_fit;
----------------


Tables
----------------


1.Exercise Table
***************
create table exercise ( 
ex_id int auto_increment primary key,
ex_name varchar(100) not null,
body_part_affected varchar(50) not null
);

------------------------


2.Plans
*************

create table plans(
plan_id int auto_increment primary key,
plan_name varchar (255) unique not null,
plan_type varchar (10) not null
); 
-------------------------------


3.Plan Details
**********************
create table plan_details (
plan_id int not null,
day int ,
day_details varchar(2000),
primary key(plan_id, day),
foreign key(plan_id) references plans (plan_id)
);
------------------------



4.Admins
*****************


create table admins(
admin_id int auto_increment primary key,
username varchar(255) unique not null,
password varchar (20) not null,
first_name varchar (50) not null,
last_name varchar (50) not null,
clients varchar ( 60535)
);

----------------------



 5.Users
***************

create table users(
user_id int auto_increment primary key ,
username varchar (255) unique not null,
password varchar (20) not null,
first_name varchar (50) not null,
last_name varchar (50) not null,
current_workout_plan int,
current_diet_plan int,
curr_plan_start_date date,
weight_kgs int not null,
height_cms int not null,
age int not null,
CONSTRAINT fk1 FOREIGN KEY (current_workout_plan ) REFERENCES plans (plan_id),
CONSTRAINT fk2 FOREIGN KEY (current_diet_plan) REFERENCES plans (plan_id)
);


-----------------------

6.Allotments
************

create table allotments (
allotment_id int auto_increment  primary key,
admin_id int not null,
user_id  int not null,
workout_plan_id int not null,
diet_plan_id  int  not null,
start_date date,
CONSTRAINT fk3 FOREIGN KEY (admin_id) REFERENCES admins (admin_id),
CONSTRAINT fk4 FOREIGN KEY (user_id) REFERENCES  users (user_id),
CONSTRAINT fk5 FOREIGN KEY (workout_plan_id ) REFERENCES plans (plan_id),
CONSTRAINT fk6 FOREIGN KEY (diet_plan_id)     REFERENCES plans (plan_id)
);



-------------------------


7.User Workout Records
*******************

create table user_workout_records (
user_id int not null,
workout_id int not null,
day int not null,
ex_id int not null,
allotment_id int not null,
status varchar (35) not null,
sets_completed int not null,
primary key (allotment_id,day ,ex_id),
CONSTRAINT fk7 FOREIGN KEY (user_id) REFERENCES users(user_id),
CONSTRAINT fk8 FOREIGN KEY (workout_id, day) REFERENCES  plan_details (plan_id, day) ,
CONSTRAINT fk9 FOREIGN KEY (allotment_id) REFERENCES allotments (allotment_id),
CONSTRAINT fk10 FOREIGN KEY (ex_id) REFERENCES exercises (ex_id)
);


-----------------------------------

8.User Diet Records
*********************

create table user_diet_records (
user_id int not null,
diet_id int not null,
day int not null,
calorie_intake int not null,
allotment_id int not null,
primary key (allotment_id,day),
CONSTRAINT fk11 FOREIGN KEY (user_id) REFERENCES users(user_id),
CONSTRAINT fk12 FOREIGN KEY (diet_id, day) REFERENCES  plan_details (plan_id, day) ,
CONSTRAINT fk13 FOREIGN KEY (allotment_id) REFERENCES allotments (allotment_id) 
);

--------------------------------


















