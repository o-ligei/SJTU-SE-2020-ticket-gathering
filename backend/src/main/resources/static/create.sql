DROP TABLE IF EXISTS `TG_USERS`;
CREATE TABLE `TG_USERS` (
                            `userid` int NOT NULL AUTO_INCREMENT,
                            `username` varchar(50) DEFAULT NULL,
                            `gender` varchar(50) DEFAULT NULL,
                            `email` varchar(255) DEFAULT NULL,
                            `phone` varchar(50) DEFAULT NULL,
                            `password` varchar(255) DEFAULT NULL,
                            `type` varchar(50) DEFAULT NULL,
                            PRIMARY KEY (`userid`)
);
