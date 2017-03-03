DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `paymentId` int(11) NOT NULL,
  `rentId` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `information` varchar(200) DEFAULT NULL,
  `methodOfPayment` varchar(45) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`paymentId`,`rentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `paymentpromotion`;
CREATE TABLE `paymentpromotion` (
  `paymentpromotionId` int(11) NOT NULL,
  `paymentid` int(11) NOT NULL,
  `promotionId` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`paymentpromotionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE `promotion` (
  `promotionId` int(11) NOT NULL AUTO_INCREMENT,
  `promotiontypeId` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`promotionId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `promotiontype`;
CREATE TABLE `promotiontype` (
  `promotiontypeId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`promotiontypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

ALTER TABLE `guardartododb`.`rent`
ADD COLUMN `folio` VARCHAR(20) NULL AFTER `comment`;

DROP TABLE IF EXISTS `rentauthorization`;
CREATE TABLE `rentauthorization` (
  `rentAuthorizationId` int(11) NOT NULL AUTO_INCREMENT,
  `rentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rentAuthorizationId`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `rentpromotion`;
CREATE TABLE `rentpromotion` (
  `rentpromotionId` int(11) NOT NULL AUTO_INCREMENT,
  `rentId` int(11) NOT NULL,
  `promotionId` int(11) NOT NULL,
  `applied` tinyint(1) DEFAULT '1',
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rentpromotionId`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;


INSERT INTO `promotiontype` VALUES (1,'Mes gratis',1,NULL,NULL),(2,'Descuento',1,NULL,NULL);

INSERT INTO `promotion` VALUES (1,1,'3 X 2','Renta por dos meses y llevate el tercero gratis',1,NULL,NULL),(2,1,'Mes gratis al año de renta','Renta por un año y llevate el siguiente mes gratis',1,NULL,NULL);
