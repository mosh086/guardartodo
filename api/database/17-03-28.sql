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
INSERT INTO `payment` VALUES (1,59,'2017-03-23 00:00:00',NULL,NULL,3712.00,NULL,'Efectivo',1,NULL,'2017-03-23 17:49:01'),(2,57,'2017-03-23 00:00:00',NULL,NULL,3712.00,NULL,NULL,1,NULL,'2017-03-27 12:36:49'),(3,57,'2017-04-23 00:00:00',NULL,NULL,3712.00,NULL,'Efectivo',1,NULL,'2017-03-27 13:46:42'),(4,52,'2017-03-23 00:00:00',NULL,NULL,2552.00,NULL,'Efectivo',1,NULL,'2017-03-27 13:59:02'),(5,68,'2017-03-23 00:00:00',NULL,NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-27 15:08:32'),(6,68,'2017-04-23 00:00:00',NULL,NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-27 15:14:38'),(7,68,'2017-05-23 00:00:00',NULL,NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-27 15:16:14'),(8,65,'2017-03-23 00:00:00',NULL,NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-27 15:23:13'),(9,52,'2017-04-23 00:00:00',NULL,NULL,2552.00,NULL,'Tarjeta de credito',1,NULL,'2017-03-27 15:27:14'),(10,68,'2017-06-23 00:00:00',NULL,NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-27 15:41:07'),(11,57,'2017-05-23 00:00:00',NULL,NULL,3712.00,NULL,'Tarjeta de credito',1,NULL,'2017-03-27 15:44:17'),(12,68,'2017-07-23 00:00:00',NULL,NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-27 15:51:51'),(13,68,'2017-08-23 00:00:00',NULL,NULL,638.00,NULL,'Transferencia',1,NULL,'2017-03-27 15:52:44'),(14,52,'2017-05-23 00:00:00',NULL,NULL,2552.00,NULL,'Efectivo',1,NULL,'2017-03-27 16:06:35'),(15,60,'2017-03-23 00:00:00',NULL,NULL,3712.00,NULL,NULL,1,NULL,'2017-03-27 16:15:32'),(16,54,'2017-03-23 00:00:00',NULL,NULL,3712.00,NULL,NULL,1,NULL,'2017-03-27 16:19:18'),(17,56,'2017-03-23 00:00:00',NULL,NULL,638.00,NULL,NULL,1,NULL,'2017-03-27 16:28:03'),(18,52,'2017-06-23 00:00:00',NULL,NULL,2552.00,NULL,'Efectivo',1,NULL,'2017-03-27 17:37:04'),(19,56,'2017-04-23 00:00:00',NULL,NULL,638.00,NULL,NULL,1,NULL,'2017-03-27 17:53:41'),(20,56,'2017-05-23 00:00:00',NULL,NULL,638.00,NULL,'Tarjeta de credito',1,NULL,'2017-03-28 09:40:14'),(21,56,'2017-06-23 00:00:00',NULL,NULL,1276.00,NULL,'Tarjeta de credito',1,NULL,'2017-03-28 09:41:08'),(22,56,'2017-07-23 00:00:00','2017-03-28 11:22:52',NULL,638.00,NULL,'Efectivo',1,NULL,'2017-03-28 11:22:52'),(23,65,'2017-04-23 00:00:00','2017-03-28 11:53:07',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 11:53:07'),(24,54,'2017-04-23 00:00:00','2017-03-28 11:57:31',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 11:57:31'),(25,54,'2017-05-23 00:00:00','2017-03-28 12:03:43',NULL,7424.00,NULL,'Efectivo',1,NULL,'2017-03-28 12:03:43'),(25,54,'2017-06-23 00:00:00','2017-03-28 12:03:43',NULL,7424.00,NULL,'Efectivo',1,NULL,'2017-03-28 12:03:43'),(26,54,'2017-07-23 00:00:00','2017-03-28 12:13:58',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 12:13:58'),(27,65,'2017-05-23 00:00:00','2017-03-28 12:15:53',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 12:15:53'),(28,55,'2017-03-23 00:00:00','2017-03-28 12:16:34',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 12:16:34'),(29,60,'2017-04-23 00:00:00','2017-03-28 12:21:51',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 12:21:51'),(30,57,'2017-06-23 00:00:00','2017-03-28 12:23:58',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 12:23:58'),(31,54,'2017-08-23 00:00:00','2017-03-28 12:54:40',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 12:54:40'),(32,68,'2017-09-23 00:00:00','2017-03-28 12:59:20',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 12:59:20'),(33,54,'2017-09-23 00:00:00','2017-03-28 13:04:31',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 13:04:31'),(34,68,'2017-10-23 00:00:00','2017-03-28 13:09:18',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 13:09:18'),(35,66,'2017-03-23 00:00:00','2017-03-28 13:14:06',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 13:14:06'),(36,51,'2017-03-23 00:00:00','2017-03-28 13:18:13',NULL,2552.00,NULL,NULL,1,NULL,'2017-03-28 13:18:13'),(37,60,'2017-05-23 00:00:00','2017-03-28 13:19:11',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 13:19:11'),(38,55,'2017-04-23 00:00:00','2017-03-28 15:09:57',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:09:57'),(39,55,'2017-05-23 00:00:00','2017-03-28 15:12:32',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:12:32'),(40,55,'2017-06-23 00:00:00','2017-03-28 15:13:18',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:13:18'),(41,51,'2017-04-23 00:00:00','2017-03-28 15:25:42',NULL,2552.00,NULL,NULL,1,NULL,'2017-03-28 15:25:42'),(42,56,'2017-08-23 00:00:00','2017-03-28 15:27:37',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:27:37'),(43,60,'2017-06-23 00:00:00','2017-03-28 15:29:45',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 15:29:45'),(44,65,'2017-06-23 00:00:00','2017-03-28 15:31:02',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:31:02'),(45,65,'2017-07-23 00:00:00','2017-03-28 15:34:08',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:34:08'),(46,63,'2017-03-23 00:00:00','2017-03-28 15:36:26',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 15:36:26'),(47,50,'2017-03-23 00:00:00','2017-03-28 15:44:33',NULL,2552.00,NULL,NULL,1,NULL,'2017-03-28 15:44:33'),(48,59,'2017-04-23 00:00:00','2017-03-28 15:46:21',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 15:46:21'),(49,59,'2017-05-23 00:00:00','2017-03-28 15:54:47',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 15:54:47'),(50,56,'2017-09-23 00:00:00','2017-03-28 15:57:16',NULL,638.00,NULL,NULL,1,NULL,'2017-03-28 15:57:16'),(51,59,'2017-06-23 00:00:00','2017-03-28 16:00:43',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 16:00:43'),(52,50,'2017-04-23 00:00:00','2017-03-28 16:11:40',NULL,2552.00,NULL,NULL,1,NULL,'2017-03-28 16:11:40'),(53,50,'2017-05-23 00:00:00','2017-03-28 16:13:07',NULL,2552.00,NULL,'Efectivo',1,NULL,'2017-03-28 16:13:07'),(54,54,'2017-10-23 00:00:00','2017-03-28 16:19:35',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 16:19:35'),(55,59,'2017-07-23 00:00:00','2017-03-28 16:29:26',NULL,3712.00,NULL,NULL,1,NULL,'2017-03-28 16:29:26'),(56,53,'2017-03-23 00:00:00','2017-03-28 17:02:05',NULL,2552.00,NULL,NULL,1,NULL,'2017-03-28 17:02:05'),(57,51,'2017-05-23 00:00:00','2017-03-28 17:05:52',NULL,2552.00,'textextyjgb kghmv kjgvcmn vnm cjv jcv jkv',NULL,1,NULL,'2017-03-28 17:05:52'),(58,59,'2017-08-23 00:00:00','2017-03-28 17:12:55',NULL,3712.00,'h',NULL,1,NULL,'2017-03-28 17:12:55'),(59,62,'2017-03-23 00:00:00','2017-03-28 17:18:50',NULL,638.00,'ytrytfhgh ghgn hhnhnhm',NULL,1,NULL,'2017-03-28 17:18:50'),(60,55,'2017-07-23 00:00:00','2017-03-28 17:21:56',NULL,638.00,'yyyyyyyyyyyubgh vgh bvhj',NULL,1,NULL,'2017-03-28 17:21:56'),(61,60,'2017-07-23 00:00:00','2017-03-28 17:28:48',NULL,3712.00,'lllllllllllllll',NULL,1,NULL,'2017-03-28 17:28:48'),(62,53,'2017-04-23 00:00:00','2017-03-28 17:33:46',NULL,2552.00,'kkkkkkk',NULL,1,NULL,'2017-03-28 17:33:46'),(63,63,'2017-04-23 00:00:00','2017-03-28 17:35:50',NULL,3712.00,'uuuuuuuu','Transferencia',1,NULL,'2017-03-28 17:35:50'),(64,53,'2017-05-23 00:00:00','2017-03-28 17:36:37',NULL,2552.00,'o','Tarjeta de credito',1,NULL,'2017-03-28 17:36:37'),(65,56,'2017-10-23 00:00:00','2017-03-28 17:38:03',NULL,638.00,'65421','Efectivo',1,NULL,'2017-03-28 17:38:03'),(66,65,'2017-08-23 00:00:00','2017-03-28 17:41:20',NULL,638.00,'lll','Tarjeta de credito',1,NULL,'2017-03-28 17:41:20'),(67,57,'2017-07-23 00:00:00','2017-03-28 17:46:00',NULL,3712.00,'l','Transferencia',1,NULL,'2017-03-28 17:46:00'),(68,60,'2017-08-23 00:00:00','2017-03-28 17:47:16',NULL,3712.00,'i','Efectivo',1,NULL,'2017-03-28 17:47:16'),(69,54,'2017-11-23 00:00:00','2017-03-28 17:57:49',NULL,3712.00,'g','Efectivo',1,NULL,'2017-03-28 17:57:49'),(70,66,'2017-04-23 00:00:00','2017-03-28 18:00:51',NULL,638.00,'fdgsdfsdg','Transferencia',1,NULL,'2017-03-28 18:00:51'),(71,56,'2017-11-23 00:00:00','2017-03-28 18:04:01',NULL,638.00,'hjfghj','Efectivo',1,NULL,'2017-03-28 18:04:01');
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
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`promotionId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,1,'3 X 2','Renta por dos meses y llevate el tercero gratis',1,NULL,NULL),(2,1,'Mes gratis al año de renta','Renta por un año y llevate el siguiente mes gratis',1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent`
--

LOCK TABLES `rent` WRITE;
/*!40000 ALTER TABLE `rent` DISABLE KEYS */;
INSERT INTO `rent` VALUES (50,1,1,'2017-03-23 16:50:52',NULL,2000.00,52.00,500.00,2552.00,'','B1703A01050',1,1,NULL,NULL),(51,2,2,'2017-03-23 16:53:54',NULL,2000.00,52.00,500.00,2552.00,'','B1703A02051',1,1,NULL,NULL),(52,2,7,'2017-03-23 17:00:27',NULL,2000.00,52.00,500.00,2552.00,'','B1703A07052',1,1,NULL,NULL),(53,5,6,'2017-03-23 17:01:28',NULL,2000.00,52.00,500.00,2552.00,'','B1703A06053',1,1,NULL,NULL),(54,8,8,'2017-03-23 17:04:44',NULL,3000.00,12.00,700.00,3712.00,'','B1703A08054',1,1,NULL,NULL),(55,5,3,'2017-03-23 17:06:00',NULL,0.00,0.00,0.00,638.00,'','B1703A03055',1,1,NULL,NULL),(56,6,4,'2017-03-23 17:08:30',NULL,600.00,8.00,30.00,638.00,'','B1703A04056',1,1,NULL,NULL),(57,2,12,'2017-03-23 17:25:15',NULL,3000.00,12.00,700.00,3712.00,'','B1703B01057',1,1,NULL,NULL),(58,7,13,'2017-03-23 17:30:08',NULL,3000.00,12.00,700.00,3712.00,'','B1703B02058',1,1,NULL,NULL),(59,1,5,'2017-03-23 17:36:32',NULL,3000.00,12.00,700.00,3712.00,'','B1703A05059',1,1,NULL,NULL),(60,4,9,'2017-03-23 17:41:12',NULL,3000.00,12.00,700.00,3712.00,'','B1703A09060',1,1,NULL,NULL),(61,1,11,'2017-03-23 17:50:42',NULL,3000.00,12.00,700.00,3712.00,'','B1703A11061',1,1,NULL,NULL),(62,1,14,'2017-03-23 17:53:28',NULL,600.00,0.00,38.00,638.00,'','B1703B03062',1,1,NULL,NULL),(63,1,10,'2017-03-23 17:56:13',NULL,0.00,0.00,0.00,3712.00,'','B1703A10063',1,1,NULL,NULL),(64,1,15,'2017-03-23 17:57:41',NULL,0.00,0.00,0.00,638.00,'','B1703B04064',1,1,NULL,NULL),(65,7,17,'2017-03-23 18:02:34',NULL,0.00,0.00,0.00,638.00,'','B1703B06065',1,1,NULL,NULL),(66,1,16,'2017-03-23 18:03:46',NULL,0.00,0.00,0.00,638.00,'','B1703B05066',1,1,NULL,NULL),(67,1,19,'2017-03-23 18:05:45',NULL,0.00,0.00,0.00,638.00,'','B1703B08067',1,1,NULL,NULL),(68,1,18,'2017-03-23 18:14:24',NULL,0.00,0.00,0.00,638.00,'','B1703B07068',1,1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentauthorization`
--

LOCK TABLES `rentauthorization` WRITE;
/*!40000 ALTER TABLE `rentauthorization` DISABLE KEYS */;
INSERT INTO `rentauthorization` VALUES (91,50,6,1,NULL,'2017-03-23 16:51:10'),(92,50,4,1,NULL,'2017-03-23 16:51:10'),(93,51,4,1,NULL,'2017-03-23 16:54:10'),(94,52,6,1,NULL,'2017-03-23 17:00:48'),(95,55,7,1,NULL,'2017-03-23 17:06:11'),(96,56,4,1,NULL,'2017-03-23 17:08:49'),(97,57,4,1,NULL,'2017-03-23 17:25:32'),(98,58,6,1,NULL,'2017-03-23 17:30:24'),(99,60,4,1,NULL,'2017-03-23 17:41:29'),(100,62,4,1,NULL,'2017-03-23 17:53:41'),(101,65,4,1,NULL,'2017-03-23 18:02:44'),(102,66,4,1,NULL,'2017-03-23 18:03:54'),(103,67,4,1,NULL,'2017-03-23 18:05:52'),(104,68,4,1,NULL,'2017-03-23 18:14:31');
/*!40000 ALTER TABLE `rentauthorization` ENABLE KEYS */;
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
  `applied` tinyint(1) DEFAULT '1',
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rentpromotionId`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentpromotion`
--

LOCK TABLES `rentpromotion` WRITE;
/*!40000 ALTER TABLE `rentpromotion` DISABLE KEYS */;
INSERT INTO `rentpromotion` VALUES (73,50,1,1,1,NULL,'2017-03-23 16:51:10'),(74,50,2,1,1,NULL,'2017-03-23 16:51:10'),(75,51,2,1,1,NULL,'2017-03-23 16:54:10'),(76,52,1,1,1,NULL,'2017-03-23 17:00:48'),(77,54,2,1,1,NULL,'2017-03-23 17:05:04'),(78,55,2,1,1,NULL,'2017-03-23 17:06:11'),(79,55,1,1,1,NULL,'2017-03-23 17:06:11'),(80,56,1,1,1,NULL,'2017-03-23 17:08:49'),(81,57,1,1,1,NULL,'2017-03-23 17:25:32'),(82,57,2,1,1,NULL,'2017-03-23 17:25:32'),(83,58,2,1,1,NULL,'2017-03-23 17:30:24'),(84,59,2,1,1,NULL,'2017-03-23 17:36:45'),(85,59,1,1,1,NULL,'2017-03-23 17:36:45'),(86,60,2,1,1,NULL,'2017-03-23 17:41:29'),(87,61,1,1,1,NULL,'2017-03-23 17:50:55'),(88,62,1,1,1,NULL,'2017-03-23 17:53:41'),(89,64,1,1,1,NULL,'2017-03-23 17:57:49'),(90,65,2,1,1,NULL,'2017-03-23 18:02:44'),(91,66,1,1,1,NULL,'2017-03-23 18:03:54'),(92,67,1,1,1,NULL,'2017-03-23 18:05:52'),(93,68,1,1,1,NULL,'2017-03-23 18:14:31');
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
			WHERE p.rentId = rentId AND p.date BETWEEN DATE_ADD(r.startDate, INTERVAL i-1 MONTH) AND DATE_ADD(r.startDate, INTERVAL i MONTH)
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-28 18:08:12
