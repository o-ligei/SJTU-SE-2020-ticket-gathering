DROP TABLE if EXISTS tg_orders;
DROP TABLE IF EXISTS tg_users;
DROP TABLE if EXISTS tg_actitems;
DROP TABLE if EXISTS tg_activities;

create table tg_users
(
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
    gender VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    password VARCHAR(255),
    type VARCHAR(255),

    PRIMARY KEY(user_id)
);

create table tg_activities
(
    activity_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    actor VARCHAR(255),
    timescale VARCHAR(255),
    venue VARCHAR(255),

    PRIMARY KEY(activity_id)
);

create table tg_actitems
(
    actitem_id INT NOT NULL AUTO_INCREMENT,
    activity_id INT,
    website VARCHAR(255),

    PRIMARY KEY(actitem_id),
    FOREIGN KEY(activity_id) REFERENCES tg_activities(activity_id)
);

create table tg_orders
(
    order_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    actitem_id INT,
    price INT,
    amount INT,

    PRIMARY KEY(order_id),
    FOREIGN KEY(user_id) REFERENCES tg_users(user_id),
    FOREIGN KEY(actitem_id) REFERENCES tg_actitems(actitem_id)
);

