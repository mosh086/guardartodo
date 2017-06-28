-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: guardartododb
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `clientId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `street` varchar(200) DEFAULT NULL,
  `town` varchar(200) DEFAULT NULL,
  `country` varchar(200) DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `zipcode` varchar(5) DEFAULT NULL,
  `rfc` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `cellPhone` varchar(45) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `legalRepresentative` varchar(400) DEFAULT NULL,
  `lineOfBusiness` varchar(200) DEFAULT NULL,
  `kindOfBusiness` varchar(200) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`clientId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Dan Stevens','Downton Abbey','The Magic of the Brass Ring','Croydon','Reino Unido','45355','DAST45234333REDF','83769430','8119111667','dan@sdfdf.com','KING','Persona Fisica','HOGAR',1,NULL,'2016-12-19 23:12:06'),(2,'Aubrey Plaza','April Ludgate','Parks and Recreation','Wilmington, Delaware','Estados Unidos','34200','AUPL654215521FDSR','80089451','8119166338','aubrey@hotmail.com','KING','Persona Fisica','HOGAR',1,NULL,'2016-12-19 23:12:06'),(3,'Test 1234 2345','Drdsf 45','Gdscvv 435','Fertdf 454','Gsdfvcd 456','34200','SADS23423543','344576587','3456547','msdfdfgds@gfdgfdg.com','sdfdsgsdf','sddsgdsfg','dfsdfdger',0,NULL,'2017-01-09 11:50:58'),(4,'Rachel Keller','Trtfgdgretre','Yrterfdg Tdgdfgdfdf Gdfgfdg','Saint Paul, Minnesota','Estados Unidos','95452','RAKL43523453FEFD','345234235345','234235234','rachel@dfsd.com','Trer  dfbvcbghf fghtuyjyh gth fgfbfggb ghfgbvcb rth dsfbfbrtyfdbfghrt try rth fgbghfghfgjui bfrgtryh dfghvcbfghj erthdfsgfdsg hfguythgf dsfg dfgfhsfdg','Persona Moral','EMPRESA',1,NULL,'2017-01-12 13:04:10'),(5,'Amber Midthunder','','','','','','','','','','','','',1,NULL,'2017-01-13 16:06:45'),(6,'Bill Irwin','Cocktail Piano Styles, Special Wedding','Old Hats','Santa Mónica, California','Estados Unidos','32111','ERTE5463454646','6456547','56745766','mosh@fdfdg.com','Yrtyrtutyu','Persona Fisica','HOGAR',1,NULL,'2017-01-16 15:23:33'),(7,'Katie Aselton','','','','','','','','','','','','',1,NULL,'2017-01-16 15:35:23'),(8,'Jean Smart','','','','','','','','','','','','',1,NULL,'2017-01-16 15:36:05'),(9,'Ouioytejrt','','','','','','','','','','','','',0,NULL,'2017-01-16 15:52:30'),(10,'yrtyYityitio','','','','','','','','','','','','',0,NULL,'2017-01-16 16:12:42'),(11,'jfhgdfhgdfgj','dfhgdfgjh','dfhgdfgj','dfhgdfgj','','','','','','','','','',0,NULL,'2017-01-16 16:16:43');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientfile`
--

DROP TABLE IF EXISTS `clientfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientfile` (
  `fileId` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `name` varchar(2000) DEFAULT NULL,
  `originalname` varchar(2000) DEFAULT NULL,
  `enable` bit(1) DEFAULT b'1',
  PRIMARY KEY (`fileId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientfile`
--

LOCK TABLES `clientfile` WRITE;
/*!40000 ALTER TABLE `clientfile` DISABLE KEYS */;
INSERT INTO `clientfile` VALUES (1,1,NULL,'835-5483.txt','835-5483.txt',NULL),(2,1,NULL,'835-5439.txt','835-5439.txt',NULL),(3,1,NULL,'835-5431.txt','835-5431.txt',NULL),(4,1,NULL,'835-5441.txt','835-5441.txt',NULL),(5,1,NULL,'835-5347.txt','835-5347.txt',NULL),(6,1,NULL,'835-5440.txt','835-5440.txt',NULL),(7,1,NULL,'835-5463.txt','835-5463.txt',NULL),(8,1,NULL,'835-5440.txt','835-5440.txt',NULL),(9,1,NULL,'835-5488.txt','835-5488.txt',NULL),(10,1,'xcbvdfsgzcvdsfg cfvdfb','835-5440.txt','835-5440.txt','');
/*!40000 ALTER TABLE `clientfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `paymentId` int(11) NOT NULL,
  `rentId` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `transaction` datetime DEFAULT NULL,
  `promotionId` int(11) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `discount` decimal(10,2) DEFAULT '0.00',
  `comment` varchar(200) DEFAULT NULL,
  `methodOfPayment` varchar(45) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`paymentId`,`rentId`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,50,'2017-03-23 00:00:00','2017-04-12 12:57:50',NULL,2552.00,NULL,'fghjgj','Efectivo',1,NULL,'2017-04-12 12:57:50'),(1,50,'2017-04-23 00:00:00','2017-04-12 12:57:50',NULL,2552.00,NULL,'fghjgj','Efectivo',1,NULL,'2017-04-12 12:57:50'),(2,51,'2017-03-23 00:00:00','2017-04-12 17:11:03',NULL,2552.00,NULL,'test','Efectivo',1,NULL,'2017-04-12 17:11:03'),(2,52,'2017-03-23 00:00:00','2017-04-12 17:11:03',NULL,2552.00,NULL,'test','Efectivo',1,NULL,'2017-04-12 17:11:03'),(2,57,'2017-03-23 00:00:00','2017-04-12 17:11:03',NULL,3712.00,NULL,'test','Efectivo',1,NULL,'2017-04-12 17:11:03'),(3,53,'2017-03-23 00:00:00','2017-04-12 17:33:57',NULL,2552.00,NULL,'Gesdfsdgfdg','Efectivo',1,NULL,'2017-04-12 17:33:57'),(3,55,'2017-03-23 00:00:00','2017-04-12 17:33:57',NULL,638.00,NULL,'Gesdfsdgfdg','Efectivo',1,NULL,'2017-04-12 17:33:57'),(4,56,'2017-03-23 00:00:00','2017-04-12 17:35:22',NULL,638.00,NULL,'Dsdcsd sdffsdf xcvcv','Efectivo',1,NULL,'2017-04-12 17:35:22'),(4,70,'2017-04-11 00:00:00','2017-04-12 17:35:22',105,2552.00,2552.00,'Dsdcsd sdffsdf xcvcv','Efectivo',1,NULL,'2017-04-12 17:35:22'),(5,65,'2017-03-23 00:00:00','2017-04-12 17:36:13',NULL,638.00,NULL,'dfgdsfg sdfgcxvfg','Efectivo',1,NULL,'2017-04-12 17:36:13'),(5,72,'2017-04-12 00:00:00','2017-04-12 17:36:13',NULL,1624.00,NULL,'dfgdsfg sdfgcxvfg','Efectivo',1,NULL,'2017-04-12 17:36:13'),(6,65,'2017-04-23 00:00:00','2017-04-12 17:38:05',NULL,638.00,NULL,'dfgsdfhgcvbfh fhg cvb','Efectivo',1,NULL,'2017-04-12 17:38:05'),(6,72,'2017-05-12 00:00:00','2017-04-12 17:38:05',110,1624.00,1624.00,'dfgsdfhgcvbfh fhg cvb','Efectivo',1,NULL,'2017-04-12 17:38:05'),(7,58,'2017-03-23 00:00:00','2017-04-12 17:41:58',NULL,3712.00,NULL,'fgsdfhfh','Efectivo',1,NULL,'2017-04-12 17:41:58'),(7,65,'2017-05-23 00:00:00','2017-04-12 17:41:58',NULL,638.00,NULL,'fgsdfhfh','Efectivo',1,NULL,'2017-04-12 17:41:58'),(8,53,'2017-04-23 00:00:00','2017-04-12 18:00:11',NULL,2552.00,NULL,'test 1','Tarjeta de credito',1,NULL,'2017-04-12 18:00:11'),(8,55,'2017-04-23 00:00:00','2017-04-12 18:00:11',NULL,638.00,NULL,'test 1','Tarjeta de credito',1,NULL,'2017-04-12 18:00:11'),(9,54,'2017-03-23 00:00:00','2017-04-12 18:00:54',NULL,3712.00,NULL,'teretet','Efectivo',1,NULL,'2017-04-12 18:00:54'),(9,69,'2017-05-10 00:00:00','2017-04-12 18:00:54',NULL,1624.00,NULL,'teretet','Efectivo',1,NULL,'2017-04-12 18:00:54'),(9,71,'2017-04-12 00:00:00','2017-04-12 18:00:54',109,638.00,638.00,'teretet','Efectivo',1,NULL,'2017-04-12 18:00:54'),(10,71,'2017-05-12 00:00:00','2017-04-18 11:35:02',NULL,638.00,NULL,'text','Efectivo',1,NULL,'2017-04-18 11:35:02'),(11,52,'2017-04-23 00:00:00','2017-06-21 18:12:35',NULL,4323.00,NULL,'3dsfsdwecds','Efectivo',1,NULL,'2017-06-21 18:12:35');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promotion` (
  `promotionId` int(11) NOT NULL AUTO_INCREMENT,
  `promotiontypeId` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`promotionId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,1,'3 X 2','Renta por dos meses y llevate el tercero gratis',NULL,100,1,NULL,NULL),(2,1,'Mes gratis al año de renta','Renta por un año y llevate el siguiente mes gratis',NULL,100,1,NULL,NULL),(7,1,'test',NULL,NULL,100,0,NULL,NULL),(8,2,'test2','test test test',67688,NULL,0,NULL,NULL),(9,2,'uyjjhj','khjhk',NULL,67,0,NULL,NULL),(10,2,'Descuento por Referir',NULL,500,NULL,1,NULL,NULL),(11,2,'80% de descuento',NULL,NULL,80,1,NULL,NULL);
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotiontype`
--

DROP TABLE IF EXISTS `promotiontype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promotiontype` (
  `promotiontypeId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`promotiontypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotiontype`
--

LOCK TABLES `promotiontype` WRITE;
/*!40000 ALTER TABLE `promotiontype` DISABLE KEYS */;
INSERT INTO `promotiontype` VALUES (1,'Mes gratis',1,NULL,NULL),(2,'Descuento',1,NULL,NULL);
/*!40000 ALTER TABLE `promotiontype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rent`
--

DROP TABLE IF EXISTS `rent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rent` (
  `rentId` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL,
  `storagelokerId` int(11) NOT NULL,
  `startDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `endDate` datetime DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT '0.00',
  `iva` decimal(10,2) DEFAULT '0.00',
  `extra` decimal(10,2) DEFAULT '0.00',
  `total` decimal(10,2) DEFAULT '0.00',
  `comment` varchar(500) NOT NULL DEFAULT '',
  `folio` varchar(20) NOT NULL DEFAULT '',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`rentId`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent`
--

LOCK TABLES `rent` WRITE;
/*!40000 ALTER TABLE `rent` DISABLE KEYS */;
INSERT INTO `rent` VALUES (50,1,1,'2016-12-23 16:50:52',NULL,2000.00,52.00,500.00,2552.00,'','B1703A01050',1,1,NULL,NULL),(51,2,2,'2017-01-23 16:53:54',NULL,2000.00,52.00,500.00,2552.00,'','B1703A02051',1,1,NULL,NULL),(52,2,7,'2017-01-23 17:00:27',NULL,2000.00,52.00,500.00,2552.00,'','B1703A07052',1,1,NULL,NULL),(53,5,6,'2017-01-23 17:01:28',NULL,2000.00,52.00,500.00,2552.00,'','B1703A06053',1,1,NULL,NULL),(54,8,8,'2017-02-23 17:04:44',NULL,3000.00,12.00,700.00,3712.00,'','B1703A08054',1,1,NULL,NULL),(55,5,3,'2017-02-23 17:06:00',NULL,0.00,0.00,0.00,638.00,'','B1703A03055',1,1,NULL,NULL),(56,6,4,'2017-03-23 17:08:30',NULL,600.00,8.00,30.00,638.00,'','B1703A04056',1,1,NULL,NULL),(57,2,12,'2017-03-23 17:25:15',NULL,3000.00,12.00,700.00,3712.00,'','B1703B01057',1,1,NULL,NULL),(58,7,13,'2017-03-23 17:30:08',NULL,3000.00,12.00,700.00,3712.00,'','B1703B02058',1,1,NULL,NULL),(59,1,5,'2017-03-23 17:36:32',NULL,3000.00,12.00,700.00,3712.00,'','B1703A05059',1,1,NULL,NULL),(60,4,9,'2017-03-23 17:41:12',NULL,3000.00,12.00,700.00,3712.00,'','B1703A09060',1,1,NULL,NULL),(61,1,11,'2017-03-23 17:50:42',NULL,3000.00,12.00,700.00,3712.00,'','B1703A11061',1,1,NULL,NULL),(62,1,14,'2017-03-23 17:53:28',NULL,600.00,0.00,38.00,638.00,'','B1703B03062',1,1,NULL,NULL),(63,1,10,'2017-03-23 17:56:13',NULL,0.00,0.00,0.00,3712.00,'','B1703A10063',1,1,NULL,NULL),(64,1,15,'2017-03-23 17:57:41',NULL,0.00,0.00,0.00,638.00,'','B1703B04064',1,1,NULL,NULL),(65,7,17,'2017-03-23 18:02:34',NULL,0.00,0.00,0.00,638.00,'','B1703B06065',1,1,NULL,NULL),(66,1,16,'2017-03-23 18:03:46',NULL,0.00,0.00,0.00,638.00,'','B1703B05066',1,1,NULL,NULL),(67,1,19,'2017-03-23 18:05:45',NULL,0.00,0.00,0.00,638.00,'','B1703B08067',1,1,NULL,NULL),(68,1,18,'2017-03-23 18:14:24',NULL,0.00,0.00,0.00,638.00,'','B1703B07068',1,1,NULL,NULL),(69,8,22,'2017-04-10 12:29:52',NULL,1000.00,24.00,600.00,1624.00,'','B1704B11069',1,1,NULL,NULL),(70,6,44,'2017-04-11 12:23:39',NULL,2000.00,52.00,500.00,2552.00,'','B1704D05070',1,1,NULL,NULL),(71,8,20,'2017-04-12 11:31:46',NULL,1.00,3.00,1.00,638.00,'','B1704B09071',1,1,NULL,NULL),(72,7,27,'2017-04-12 11:46:41',NULL,1000.00,24.00,600.00,1624.00,'','B1704C02072',1,1,NULL,NULL);
/*!40000 ALTER TABLE `rent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentauthorization`
--

DROP TABLE IF EXISTS `rentauthorization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentauthorization` (
  `rentAuthorizationId` int(11) NOT NULL AUTO_INCREMENT,
  `rentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rentAuthorizationId`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentauthorization`
--

LOCK TABLES `rentauthorization` WRITE;
/*!40000 ALTER TABLE `rentauthorization` DISABLE KEYS */;
INSERT INTO `rentauthorization` VALUES (91,50,6,1,NULL,'2017-03-23 16:51:10'),(92,50,4,1,NULL,'2017-03-23 16:51:10'),(93,51,4,1,NULL,'2017-03-23 16:54:10'),(94,52,6,1,NULL,'2017-03-23 17:00:48'),(95,55,7,1,NULL,'2017-03-23 17:06:11'),(96,56,4,1,NULL,'2017-03-23 17:08:49'),(97,57,4,1,NULL,'2017-03-23 17:25:32'),(99,60,4,1,NULL,'2017-03-23 17:41:29'),(100,62,4,1,NULL,'2017-03-23 17:53:41'),(101,65,4,1,NULL,'2017-03-23 18:02:44'),(102,66,4,1,NULL,'2017-03-23 18:03:54'),(103,67,4,1,NULL,'2017-03-23 18:05:52'),(104,68,4,1,NULL,'2017-03-23 18:14:31'),(106,69,4,1,NULL,'2017-04-10 15:44:01'),(107,58,6,1,NULL,'2017-04-11 12:18:06'),(108,70,4,1,NULL,'2017-04-11 12:24:19'),(109,71,4,1,NULL,'2017-04-12 11:32:02'),(110,72,4,1,NULL,'2017-04-12 11:46:56');
/*!40000 ALTER TABLE `rentauthorization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentfile`
--

DROP TABLE IF EXISTS `rentfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentfile` (
  `rentfileId` int(11) NOT NULL AUTO_INCREMENT,
  `rentId` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `originalname` varchar(200) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`rentfileId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentfile`
--

LOCK TABLES `rentfile` WRITE;
/*!40000 ALTER TABLE `rentfile` DISABLE KEYS */;
INSERT INTO `rentfile` VALUES (1,72,'835-5439.txt','835-5439.txt',1),(2,71,'835-5348.txt','835-5348.txt',1);
/*!40000 ALTER TABLE `rentfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentpromotion`
--

DROP TABLE IF EXISTS `rentpromotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentpromotion` (
  `rentpromotionId` int(11) NOT NULL AUTO_INCREMENT,
  `rentId` int(11) NOT NULL,
  `promotionId` int(11) NOT NULL,
  `applied` tinyint(1) DEFAULT '0',
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rentpromotionId`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentpromotion`
--

LOCK TABLES `rentpromotion` WRITE;
/*!40000 ALTER TABLE `rentpromotion` DISABLE KEYS */;
INSERT INTO `rentpromotion` VALUES (73,50,1,1,1,NULL,'2017-03-23 16:51:10'),(74,50,2,1,1,NULL,'2017-03-23 16:51:10'),(75,51,2,1,1,NULL,'2017-03-23 16:54:10'),(76,52,1,1,1,NULL,'2017-03-23 17:00:48'),(77,54,2,1,1,NULL,'2017-03-23 17:05:04'),(78,55,2,1,1,NULL,'2017-03-23 17:06:11'),(79,55,1,1,1,NULL,'2017-03-23 17:06:11'),(80,56,1,1,1,NULL,'2017-03-23 17:08:49'),(81,57,1,1,1,NULL,'2017-03-23 17:25:32'),(82,57,2,1,1,NULL,'2017-03-23 17:25:32'),(84,59,2,1,1,NULL,'2017-03-23 17:36:45'),(85,59,1,1,1,NULL,'2017-03-23 17:36:45'),(86,60,2,1,1,NULL,'2017-03-23 17:41:29'),(87,61,1,1,1,NULL,'2017-03-23 17:50:55'),(88,62,1,1,1,NULL,'2017-03-23 17:53:41'),(89,64,1,1,1,NULL,'2017-03-23 17:57:49'),(90,65,2,1,1,NULL,'2017-03-23 18:02:44'),(91,66,1,1,1,NULL,'2017-03-23 18:03:54'),(92,67,1,1,1,NULL,'2017-03-23 18:05:52'),(93,68,1,1,1,NULL,'2017-03-23 18:14:31'),(99,69,1,0,1,NULL,'2017-04-10 15:44:01'),(100,69,2,0,1,NULL,'2017-04-10 15:44:01'),(101,69,10,0,1,NULL,'2017-04-10 15:44:01'),(102,69,11,0,1,NULL,'2017-04-10 15:44:01'),(103,58,2,1,1,NULL,'2017-04-11 12:18:06'),(104,58,1,0,1,NULL,'2017-04-11 12:18:06'),(105,70,1,0,1,NULL,'2017-04-11 12:24:19'),(106,70,10,0,1,NULL,'2017-04-11 12:24:19'),(107,70,2,0,1,NULL,'2017-04-11 12:24:19'),(108,70,11,0,1,NULL,'2017-04-11 12:24:19'),(109,71,1,0,1,NULL,'2017-04-12 11:32:02'),(110,72,2,0,1,NULL,'2017-04-12 11:46:56');
/*!40000 ALTER TABLE `rentpromotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storageloker`
--

DROP TABLE IF EXISTS `storageloker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storageloker` (
  `storagelokerId` int(11) NOT NULL AUTO_INCREMENT,
  `storagelokertypeId` int(11) NOT NULL,
  `number` varchar(45) NOT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`storagelokerId`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storageloker`
--

LOCK TABLES `storageloker` WRITE;
/*!40000 ALTER TABLE `storageloker` DISABLE KEYS */;
INSERT INTO `storageloker` VALUES (1,3,'A01',1,NULL,'2016-12-19 21:01:47'),(2,3,'A02',1,NULL,'2016-12-19 21:01:47'),(3,1,'A03',1,NULL,'2016-12-19 21:01:47'),(4,1,'A04',1,NULL,'2016-12-19 21:01:47'),(5,4,'A05',1,NULL,'2016-12-19 21:01:47'),(6,3,'A06',1,NULL,'2016-12-19 21:01:47'),(7,3,'A07',1,NULL,'2016-12-19 21:01:47'),(8,4,'A08',1,NULL,'2016-12-19 21:01:47'),(9,4,'A09',1,NULL,'2016-12-19 21:01:47'),(10,4,'A10',1,NULL,'2016-12-19 21:01:47'),(11,4,'A11',1,NULL,'2016-12-19 21:01:47'),(12,4,'B01',1,NULL,'2016-12-19 21:01:47'),(13,4,'B02',1,NULL,'2016-12-19 21:01:47'),(14,1,'B03',1,NULL,'2016-12-19 21:01:47'),(15,1,'B04',1,NULL,'2016-12-19 21:01:47'),(16,1,'B05',1,NULL,'2016-12-19 21:01:47'),(17,1,'B06',1,NULL,'2016-12-19 21:01:47'),(18,1,'B07',1,NULL,'2016-12-19 21:01:47'),(19,1,'B08',1,NULL,'2016-12-19 21:01:47'),(20,1,'B09',1,NULL,'2016-12-19 21:01:47'),(21,1,'B10',1,NULL,'2016-12-19 21:01:47'),(22,2,'B11',1,NULL,'2016-12-19 21:01:47'),(23,2,'B12',1,NULL,'2016-12-19 21:01:47'),(24,2,'B13',1,NULL,'2016-12-19 21:01:47'),(25,2,'B14',1,NULL,'2016-12-19 21:01:47'),(26,2,'C01',1,NULL,'2016-12-19 21:01:47'),(27,2,'C02',1,NULL,'2016-12-19 21:01:47'),(28,2,'C03',1,NULL,'2016-12-19 21:01:47'),(29,3,'C04',1,NULL,'2016-12-19 21:01:47'),(30,3,'C05',1,NULL,'2016-12-19 21:01:47'),(31,3,'C06',1,NULL,'2016-12-19 21:01:47'),(32,2,'C07',1,NULL,'2016-12-19 21:01:47'),(33,3,'C08',1,NULL,'2016-12-19 21:01:47'),(34,1,'C09',1,NULL,'2016-12-19 21:01:47'),(35,2,'C10',1,NULL,'2016-12-19 21:01:47'),(36,4,'C11',1,NULL,'2016-12-19 21:01:47'),(37,2,'C12',1,NULL,'2016-12-19 21:01:47'),(38,2,'C13',1,NULL,'2016-12-19 21:01:47'),(39,1,'C14',1,NULL,'2016-12-19 21:01:47'),(40,4,'D01',1,NULL,'2016-12-19 21:01:47'),(41,4,'D02',1,NULL,'2016-12-19 21:01:47'),(42,3,'D03',1,NULL,'2016-12-19 21:01:47'),(43,3,'D04',1,NULL,'2016-12-19 21:01:47'),(44,3,'D05',1,NULL,'2016-12-19 21:01:47'),(47,4,'W01',0,NULL,'2016-12-22 00:39:31'),(48,3,'W02',0,NULL,'2017-01-09 11:27:44'),(49,1,'X01',0,NULL,'2017-01-09 14:07:05'),(50,9,'X02',0,NULL,'2017-01-16 14:53:26'),(51,3,'W02',0,NULL,'2017-01-16 16:18:56'),(52,4,'Q02',0,NULL,'2017-01-17 11:01:09');
/*!40000 ALTER TABLE `storageloker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storagelokertype`
--

DROP TABLE IF EXISTS `storagelokertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storagelokertype` (
  `storagelokertypeId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `price` decimal(8,2) NOT NULL,
  `size` varchar(45) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`storagelokertypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storagelokertype`
--

LOCK TABLES `storagelokertype` WRITE;
/*!40000 ALTER TABLE `storagelokertype` DISABLE KEYS */;
INSERT INTO `storagelokertype` VALUES (1,'MiniBodega',NULL,638.00,'3mts',1,NULL,'2016-12-19 20:26:29'),(2,'Chica',NULL,1624.00,'7mts',1,NULL,'2016-12-19 20:26:29'),(3,'Mediana',NULL,2552.00,'11mts',1,NULL,'2016-12-19 20:26:29'),(4,'Grande',NULL,3712.00,'16mts',1,NULL,'2016-12-19 20:26:29'),(8,'fsdfsdfds','sdfadsfdsf',0.00,'',0,NULL,'2017-01-08 12:57:54'),(9,'Tesrtf 32345345','dsfsdcsc',323.00,'32423',1,NULL,'2017-01-08 14:17:12'),(10,'Test 1234','Sdfscsdf',3244.00,'345x3425mts',0,NULL,'2017-01-09 09:54:56'),(11,'Test 9',NULL,23.00,NULL,0,NULL,'2017-01-09 13:27:51'),(12,'567657',NULL,100000.00,NULL,0,NULL,'2017-01-09 17:54:56'),(13,'Mega grande','Tesd',567.00,'65412 mts',0,NULL,'2017-01-16 15:09:03'),(14,'Uyrty','tuytru',564.00,'456457',1,NULL,'2017-01-16 16:22:20'),(15,'Uyryerxhdfgbh',NULL,5464.00,'345346mts',0,NULL,'2017-01-16 16:23:20'),(16,'Test02','Fsdf sdxcv fdsf',4533.00,'34564',0,NULL,'2017-01-17 11:01:44');
/*!40000 ALTER TABLE `storagelokertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `reset` tinyint(1) DEFAULT '1',
  `imgUrl` varchar(200) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`userId`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'Edilberto','Salazar','mosh','tool4',0,'users-2.svg',1),(5,'Apolo','Salazar','apolin','12345',1,NULL,0),(6,'Apolo','Salazar','apolin','tool4',0,NULL,1),(7,'Mario','Gallardo','acanijo','12345',0,NULL,1),(8,'Mimis','Fdfdscxv sdfsdcxzcvsd','mimis','12345',1,NULL,0),(9,'Ytegdfg 5','Fsdgsdfg Hjrtgfd','terywe','12345',1,NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'guardartododb'
--
/*!50003 DROP FUNCTION IF EXISTS `f_get_payment_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `f_get_payment_status`(rentId int) RETURNS int(11)
BEGIN

RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `f_pending_payments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `f_pending_payments`(rentId int) RETURNS int(11)
BEGIN
	DECLARE pending INT;
    DECLARE i INT;
    DECLARE counter INT;
    DECLARE valida BIT;
    
	SELECT timestampdiff(month, r.startDate, DATE_ADD(NOW(), INTERVAL 1 MONTH)) FROM rent r WHERE r.rentId = rentId INTO pending;
	SET i = 0;
    SET counter = 0;

    WHILE(i < pending) DO
		SET i = i + 1;

		SELECT COALESCE(sum(p.amount),0) < r.total
			from payment p
			INNER JOIN rent r ON p.rentId = r.rentId
			WHERE p.rentId = rentId AND p.date BETWEEN DATE_ADD(date(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(date(r.startDate), INTERVAL i MONTH)
			INTO valida;
        
        set counter = counter + IF(valida = 1, 1, 0); 

    END WHILE;
    
    RETURN counter;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_pendingpayment_rent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_pendingpayment_rent`(p_rentId int)
BEGIN
	DECLARE pending INT;
    DECLARE i INT;
    DECLARE counter INT;
    drop temporary table if exists valida;
    create temporary table valida (
		id int unsigned not null,
        valid int null,
		date date not null
	);
    
	SELECT timestampdiff(month, r.startDate,  DATE_ADD(NOW(), INTERVAL 12 MONTH)) FROM rent r WHERE r.rentId = p_rentId INTO pending;
	SET i = 0;
    SET counter = 0;

    WHILE(i < pending) DO
		SET i = i + 1;

		INSERT INTO valida
        SELECT i, COALESCE(sum(p.amount),0) < r.total, DATE_ADD(date(r.startDate), INTERVAL i-1 MONTH)
			from payment p
			INNER JOIN rent r ON p.rentId = r.rentId
			WHERE p.rentId = p_rentId AND p.date BETWEEN DATE_ADD(date(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(date(r.startDate), INTERVAL i MONTH);
        
        
    END WHILE;
    
	select * FROM valida;
    drop temporary table if exists valida;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_storagelokers_rented` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_storagelokers_rented`()
BEGIN
  DECLARE i INT;
  DECLARE counter INT;
  SET i = 0;
  SET counter = 5;
  
  drop temporary table if exists tabletemp;
    create temporary table tabletemp (
        count int null,
		date date not null
	);
  
  WHILE(i < counter) DO
		

		INSERT INTO tabletemp
        SELECT count(r.rentId),  DATE_ADD(date_format(now(), '%y-%m-01' ), INTERVAL i - counter MONTH)
		FROM rent r 
		WHERE  r.enable = 1 

			AND 

			date(r.startDate) BETWEEN 

			DATE_ADD(date_format(now(), '%y-%m-01' ), INTERVAL i - counter MONTH)

			AND 

			last_day(DATE_ADD(date_format(now(), '%y-%m-01' ), INTERVAL i - counter MONTH));
        
        SET i = i + 1;
        
  END WHILE;
  
  select * FROM tabletemp;
  drop temporary table if exists tabletemp;
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-27 19:12:35
