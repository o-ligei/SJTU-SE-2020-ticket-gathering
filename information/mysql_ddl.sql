DROP TABLE if EXISTS tg_orders;
DROP TABLE IF EXISTS tg_users;
DROP TABLE if EXISTS tg_actitems;
DROP TABLE if EXISTS tg_activities;

create table tg_users
(
    user_id INT,
    username VARCHAR(255),
    gender VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    password VARCHAR(255),

    PRIMARY KEY(user_id)
);

create table tg_activities
(
    activity_id INT,
    title VARCHAR(255),
    actor VARCHAR(255),
    timescale VARCHAR(255),
    venue VARCHAR(255),

    PRIMARY KEY(activity_id)
);

create table tg_actitems
(
    actitem_id INT,
    activity_id INT,
    website VARCHAR(255),

    PRIMARY KEY(actitem_id),
    FOREIGN KEY(activity_id) REFERENCES tg_activities(activity_id)
);

create table tg_orders
(
    order_id INT,
    user_id INT,
    actitem_id INT,
    price VARCHAR(255),
    amount INT,

    PRIMARY KEY(order_id),
    FOREIGN KEY(user_id) REFERENCES tg_users(user_id),
    FOREIGN KEY(actitem_id) REFERENCES tg_actitems(actitem_id)
);

