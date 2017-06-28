-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: guardartododb
-- ------------------------------------------------------
-- Server version	5.7.17-log

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
INSERT INTO `client` VALUES (1,'Rosa Elia','efsd','dfgsfd','cvdsf','gdsfg','45355','fgfdsgfdhfgh','83769430','8119111667','gfdgr@sdfdf.com','Test','Persona Fisica','HOGAR',1,NULL,'2016-12-19 23:12:06'),(2,'Dino Renzo','eeeeeee','rrrrr','fdddddddd','fdddddddddddf 765','34200','','80089451','8119166338','r_viacava@hotmail.com','','Persona Fisica','HOGAR',1,NULL,'2016-12-19 23:12:06'),(3,'Test 1234 2345','Drdsf 45','Gdscvv 435','Fertdf 454','Gsdfvcd 456','34200','SADS23423543','344576587','3456547','msdfdfgds@gfdgfdg.com','sdfdsgsdf','sddsgdsfg','dfsdfdger',0,NULL,'2017-01-09 11:50:58'),(4,'Test with the largest infoooooooooo ooooooooo oooooooooooo oooooo oooooooo ooooooo ooooooooo ooooooooo oooooooo ooooooooo oooooooo oooooooooo ooooooooo ooooooooo ooooooooo ooooooooo ooooooooo oooooooo','Trtfgdgretre','Yrterfdg Tdgdfgdfdf Gdfgfdg','','','','','','','','Trer  dsfgfdg dfgdsfdsv dbdfbdfsvc sdfdfvcvc dfsgdfsvc dfbdvx cv fgdfgfdvdsfvcbfg dfbvcbghf fghtuyjyh gth fgfbfggb ghfgbvcb rth dsfbfbrtyfdbfghrt try rth fgbghfghfgjui bfrgtryh dfghvcbfghj erthdfsgfdsg hfguythgf dsfg dfgfhsfdg','Persona Moral','EMPRESA',1,NULL,'2017-01-12 13:04:10'),(5,'Elmo','','','','','','','','','','','','',1,NULL,'2017-01-13 16:06:45'),(6,'Test 123 456 789','Tfddg','Yergdfg','Urtytr','Yertdgdfg','32111','ERTE5463454646','6456547','56745766','mosh@fdfdg.com','Yrtyrtutyu','Persona Fisica','HOGAR',1,NULL,'2017-01-16 15:23:33'),(7,'ertrywer ertry','','','','','','','','','','','','',1,NULL,'2017-01-16 15:35:23'),(8,'Utyert rtyrty','','','','','','','','','','','','',1,NULL,'2017-01-16 15:36:05'),(9,'Ouioytejrt','','','','','','','','','','','','',0,NULL,'2017-01-16 15:52:30'),(10,'yrtyYityitio','','','','','','','','','','','','',0,NULL,'2017-01-16 16:12:42'),(11,'jfhgdfhgdfgj','dfhgdfgjh','dfhgdfgj','dfhgdfgj','','','','','','','','','',0,NULL,'2017-01-16 16:16:43');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientfile`
--

DROP TABLE IF EXISTS `clientfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientfile` (
  `clientfileId` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(2000) DEFAULT NULL,
  `name` varchar(2000) DEFAULT NULL,
  `originalname` varchar(2000) DEFAULT NULL,
  `enable` bit(1) DEFAULT NULL,
  PRIMARY KEY (`clientfileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientfile`
--

LOCK TABLES `clientfile` WRITE;
/*!40000 ALTER TABLE `clientfile` DISABLE KEYS */;
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
  `rentId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `transaction` datetime DEFAULT NULL,
  `promotionId` int(11) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `discount` decimal(10,2) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `comment` varchar(200) DEFAULT NULL,
  `methodOfPayment` varchar(45) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` varchar(45) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,18,'2017-02-14 00:00:00','2017-06-24 19:43:57',NULL,2552.00,NULL,NULL,'4534ergfv fdgrgt','Efectivo',1,NULL,'2017-06-24 19:43:57'),(2,NULL,NULL,'2017-06-24 19:44:52',NULL,4344.00,NULL,NULL,'4534dfv eferdcg','Transferencia',1,NULL,'2017-06-24 19:44:52'),(3,NULL,NULL,'2017-06-24 20:08:23',NULL,324.00,NULL,NULL,'3435345435','Tarjeta de credito',1,NULL,'2017-06-24 20:08:23'),(4,NULL,NULL,'2017-06-24 20:09:16',NULL,345.00,NULL,NULL,'45345345','Tarjeta de credito',1,NULL,'2017-06-24 20:09:16'),(5,24,'2017-02-16 00:00:00','2017-06-24 20:41:27',NULL,5456.00,NULL,NULL,'fgdfhdfgfh','Efectivo',1,NULL,'2017-06-24 20:41:27'),(6,16,'2017-02-14 00:00:00','2017-06-25 17:25:56',NULL,3435.00,NULL,NULL,'efgdgdfg','Tarjeta de credito',1,NULL,'2017-06-25 17:25:56'),(7,16,'2017-03-14 00:00:00','2017-06-25 17:33:22',NULL,3245.00,NULL,NULL,'dsfsdf dfgdsf','Transferencia',1,NULL,'2017-06-25 17:33:22'),(7,NULL,NULL,'2017-06-25 17:33:22',NULL,3455.00,NULL,'dsfsdfg4','dsfsdf dfgdsf','Transferencia',1,NULL,'2017-06-25 17:33:22'),(8,24,'2017-03-16 00:00:00','2017-06-25 17:35:37',NULL,3453.00,NULL,NULL,'dfsdfgdfg','Transferencia',1,NULL,'2017-06-25 17:35:37'),(8,NULL,NULL,'2017-06-25 17:35:37',NULL,34545.00,NULL,'dsfsdf','dfsdfgdfg','Transferencia',1,NULL,'2017-06-25 17:35:37'),(9,16,'2017-04-14 00:00:00','2017-06-25 18:17:39',NULL,3454.00,NULL,NULL,'rtgfghfhg','Tarjeta de credito',1,NULL,'2017-06-25 18:17:39'),(9,17,'2016-08-17 00:00:00','2017-06-25 18:17:39',NULL,5456.00,NULL,NULL,'rtgfghfhg','Tarjeta de credito',1,NULL,'2017-06-25 18:17:39'),(9,NULL,NULL,'2017-06-25 18:17:39',NULL,456.00,NULL,'fhyfhy','rtgfghfhg','Tarjeta de credito',1,NULL,'2017-06-25 18:17:39'),(10,18,'2017-03-14 00:00:00','2017-06-25 18:21:30',NULL,435.00,NULL,NULL,'fgfgfh','Tarjeta de credito',1,NULL,'2017-06-25 18:21:30'),(10,NULL,NULL,'2017-06-25 18:21:30',NULL,56.00,NULL,'rfgrft fgd45','fgfgfh','Tarjeta de credito',1,NULL,'2017-06-25 18:21:30'),(11,18,'2017-03-14 00:00:00','2017-06-25 18:23:22',NULL,234.00,NULL,NULL,'dfsdsf','Efectivo',1,NULL,'2017-06-25 18:23:22'),(11,NULL,NULL,'2017-06-25 18:23:22',NULL,343.00,NULL,'dsdfsf','dfsdsf','Efectivo',1,NULL,'2017-06-25 18:23:22'),(12,18,'2017-03-14 00:00:00','2017-06-25 18:29:40',NULL,324.00,NULL,NULL,'wedsf','Efectivo',1,NULL,'2017-06-25 18:29:40'),(12,NULL,NULL,'2017-06-25 18:29:40',NULL,343.00,NULL,'sdsaf','wedsf','Efectivo',1,NULL,'2017-06-25 18:29:40'),(13,15,'2017-06-13 00:00:00','2017-06-25 18:38:24',NULL,345.00,NULL,NULL,'sdfsd','Efectivo',1,NULL,'2017-06-25 18:38:24'),(13,NULL,NULL,'2017-06-25 18:38:24',NULL,453.00,NULL,'fsdfdsfg','sdfsd','Efectivo',1,NULL,'2017-06-25 18:38:24'),(14,18,'2017-03-14 00:00:00','2017-06-25 18:54:15',NULL,423325.00,NULL,NULL,'ersdfdsgdg','Efectivo',1,NULL,'2017-06-25 18:54:15'),(14,NULL,NULL,'2017-06-25 18:54:15',NULL,234234.00,NULL,'efsdfsr34','ersdfdsgdg','Efectivo',1,NULL,'2017-06-25 18:54:15'),(15,18,'2017-04-14 00:00:00','2017-06-25 18:58:23',NULL,32423.00,NULL,NULL,'jsdhskd','Efectivo',1,NULL,'2017-06-25 18:58:23'),(15,NULL,NULL,'2017-06-25 18:58:23',NULL,3432.00,NULL,'rewfsdfv sdfdsf3','jsdhskd','Efectivo',1,NULL,'2017-06-25 18:58:23'),(16,18,'2017-05-14 00:00:00','2017-06-25 19:00:57',NULL,2323.00,NULL,NULL,'sdfsdf sdfc','Efectivo',1,NULL,'2017-06-25 19:00:57'),(16,14,'2017-02-13 00:00:00','2017-06-25 19:00:57',NULL,3232.00,NULL,NULL,'sdfsdf sdfc','Efectivo',1,NULL,'2017-06-25 19:00:57'),(16,NULL,NULL,'2017-06-25 19:00:57',NULL,32323.00,NULL,'dasdfsf sdfsdc','sdfsdf sdfc','Efectivo',1,NULL,'2017-06-25 19:00:57'),(17,18,'2017-05-14 00:00:00','2017-06-25 19:39:19',NULL,234.00,NULL,NULL,'eredsr','Efectivo',1,NULL,'2017-06-25 19:39:19'),(18,18,'2017-06-14 00:00:00','2017-06-25 19:55:30',NULL,2300.00,NULL,NULL,'dasdsaf','Efectivo',1,NULL,'2017-06-25 19:55:31'),(19,18,'2017-06-14 00:00:00','2017-06-25 20:00:10',NULL,2200.00,NULL,NULL,'dsfdgdfvg','Efectivo',1,NULL,'2017-06-25 20:00:10'),(20,18,'2017-07-14 00:00:00','2017-06-25 20:56:54',NULL,323.00,0.00,NULL,'sdfsd sdf','Efectivo',1,NULL,'2017-06-25 20:56:54'),(21,18,'2017-07-14 00:00:00','2017-06-25 20:58:55',NULL,2000.00,0.00,NULL,'sdfsdc sdfsdf','Efectivo',1,NULL,'2017-06-25 20:58:55'),(22,26,'2017-06-26 00:00:00','2017-06-26 20:00:43',60,0.00,740.08,NULL,'jgfjv jbmnbmg kgkb','Efectivo',1,NULL,'2017-06-26 20:00:43'),(22,23,'2017-02-16 00:00:00','2017-06-26 20:00:43',NULL,566.00,0.00,NULL,'jgfjv jbmnbmg kgkb','Efectivo',1,NULL,'2017-06-26 20:00:43'),(23,26,'2017-06-26 00:00:00','2017-06-26 20:08:04',60,0.00,740.08,NULL,'sdf dfvxcv sdfsdcv','Efectivo',1,NULL,'2017-06-26 20:08:04'),(24,26,'2017-06-26 00:00:00','2017-06-26 20:09:33',NULL,700.00,0.00,NULL,'mbgbmnh','Tarjeta de credito',1,NULL,'2017-06-26 20:09:33'),(25,23,'2017-02-16 00:00:00','2017-06-26 20:11:14',NULL,1000.00,0.00,NULL,'kjnm,n,','Tarjeta de credito',1,NULL,'2017-06-26 20:11:14');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentpromotion`
--

DROP TABLE IF EXISTS `paymentpromotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentpromotion`
--

LOCK TABLES `paymentpromotion` WRITE;
/*!40000 ALTER TABLE `paymentpromotion` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentpromotion` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,1,'3 X 2','Renta por dos meses y llevate el tercero gratis',NULL,100,1,NULL,NULL),(2,1,'Mes gratis al año de renta','Renta por un año y llevate el siguiente mes gratis',NULL,100,1,NULL,NULL);
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
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(150) NOT NULL,
  `private` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes`
--

LOCK TABLES `quotes` WRITE;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
INSERT INTO `quotes` VALUES (1,'SADFGDAGDScdsfgsdcdfgsdfgsd',0),(2,'SADFxsvccvGDA GDSc dsfg sdcdfgsdfgsd',0),(3,'SAfgsd',1);
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent`
--

LOCK TABLES `rent` WRITE;
/*!40000 ALTER TABLE `rent` DISABLE KEYS */;
INSERT INTO `rent` VALUES (11,5,1,'2017-02-13 12:51:10','2017-02-13 12:56:27',10.00,10.00,10.00,2552.00,'','B1702A01011',0,1,NULL,NULL),(12,5,2,'2017-02-13 12:52:46','2017-02-13 13:51:49',0.00,0.00,0.00,2552.00,'','B1702A02012',0,1,NULL,NULL),(13,2,4,'2017-02-13 12:56:30',NULL,12.00,14.00,13.00,638.00,'','B1702A04013',1,0,NULL,NULL),(14,1,19,'2017-02-13 15:10:28',NULL,123.00,456.00,435.00,638.00,'','B1702B08014',1,1,NULL,NULL),(15,2,5,'2017-02-13 17:22:31',NULL,122.00,144.00,122.00,3712.00,'','B1702A05015',1,1,NULL,NULL),(16,2,31,'2017-02-14 09:12:40',NULL,2000.00,500.00,52.00,2552.00,'','B1702C06016',1,1,NULL,NULL),(17,2,27,'2016-08-17 09:17:54',NULL,14.00,12.00,45.00,1624.00,'','B1608C02017',1,1,NULL,NULL),(18,1,7,'2017-02-14 12:09:51',NULL,0.00,0.00,0.00,2552.00,'','B1702A07018',1,1,NULL,NULL),(19,8,3,'2017-02-16 15:03:56',NULL,12.00,14.00,13.00,638.00,'','B1702A03019',1,1,NULL,NULL),(20,7,9,'2017-02-16 15:14:18',NULL,21.00,45.00,12.00,3712.00,'','B1702A09020',1,1,NULL,NULL),(21,6,40,'2017-02-16 15:55:29',NULL,234.00,345.00,534.00,3712.00,'','B1702D01021',1,1,NULL,NULL),(22,6,36,'2017-02-16 15:57:50',NULL,0.00,0.00,0.00,3712.00,'','B1702C11022',1,1,NULL,NULL),(23,6,38,'2017-02-16 16:00:14',NULL,0.00,0.00,0.00,1624.00,'','B1702C13023',1,1,NULL,NULL),(24,5,6,'2017-02-16 16:02:57',NULL,0.00,0.00,0.00,2552.00,'','B-1702024',1,1,NULL,NULL),(25,7,8,'2017-02-17 12:35:07',NULL,43.00,76.00,65.00,3712.00,'','B-1702025',1,1,NULL,NULL),(26,6,4,'2017-06-26 19:54:40',NULL,638.00,102.08,0.00,740.08,'','B1706A04026',1,1,NULL,NULL),(27,1,12,'2017-06-26 20:12:32',NULL,3712.00,593.92,0.00,4305.92,'','B1706B01027',1,1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentauthorization`
--

LOCK TABLES `rentauthorization` WRITE;
/*!40000 ALTER TABLE `rentauthorization` DISABLE KEYS */;
INSERT INTO `rentauthorization` VALUES (53,11,4,1,NULL,'2017-02-13 12:52:41'),(57,12,4,1,NULL,'2017-02-13 12:54:28'),(58,13,4,1,NULL,'2017-02-13 12:56:45'),(60,14,6,1,NULL,'2017-02-13 15:10:51'),(61,15,4,1,NULL,'2017-02-13 17:22:46'),(62,16,4,1,NULL,'2017-02-14 09:13:31'),(63,17,4,1,NULL,'2017-02-14 09:18:28'),(69,18,4,1,NULL,'2017-02-16 12:46:48'),(70,19,6,1,NULL,'2017-02-16 15:04:12'),(71,20,4,1,NULL,'2017-02-16 15:14:30'),(72,21,4,1,NULL,'2017-02-16 15:55:42'),(73,26,4,1,NULL,'2017-06-26 19:55:00'),(74,27,4,1,NULL,'2017-06-26 20:12:44');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentfile`
--

LOCK TABLES `rentfile` WRITE;
/*!40000 ALTER TABLE `rentfile` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentpromotion`
--

LOCK TABLES `rentpromotion` WRITE;
/*!40000 ALTER TABLE `rentpromotion` DISABLE KEYS */;
INSERT INTO `rentpromotion` VALUES (47,11,1,1,1,NULL,'2017-02-13 12:52:41'),(50,12,1,1,1,NULL,'2017-02-13 12:54:28'),(51,13,2,1,1,NULL,'2017-02-13 12:56:45'),(53,14,2,1,1,NULL,'2017-02-13 15:10:51'),(54,15,1,1,1,NULL,'2017-02-13 17:22:46'),(55,16,1,1,1,NULL,'2017-02-14 09:13:31'),(56,17,1,1,1,NULL,'2017-02-14 09:18:28'),(57,19,2,1,1,NULL,'2017-02-16 15:04:12'),(58,20,2,0,1,NULL,'2017-02-16 15:14:31'),(59,21,1,0,1,NULL,'2017-02-16 15:55:42'),(60,26,1,1,1,NULL,'2017-06-26 19:55:00'),(61,27,2,0,1,NULL,'2017-06-26 20:12:44');
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
INSERT INTO `storagelokertype` VALUES (1,'MiniBodega',NULL,638.00,'3mts',1,NULL,'2016-12-19 20:26:29'),(2,'Chica',NULL,1624.00,'7mts',1,NULL,'2016-12-19 20:26:29'),(3,'Mediana',NULL,2552.00,'11mts',1,NULL,'2016-12-19 20:26:29'),(4,'Grande',NULL,3712.00,'16mts',1,NULL,'2016-12-19 20:26:29'),(8,'fsdfsdfds','sdfadsfdsf',0.00,'',0,NULL,'2017-01-08 12:57:54'),(9,'Tesrtf 32345345','dsfsdcsc',323.00,'32423',0,NULL,'2017-01-08 14:17:12'),(10,'Test 1234','Sdfscsdf',3244.00,'345x3425mts',0,NULL,'2017-01-09 09:54:56'),(11,'Test 9',NULL,23.00,NULL,0,NULL,'2017-01-09 13:27:51'),(12,'567657',NULL,100000.00,NULL,0,NULL,'2017-01-09 17:54:56'),(13,'Mega grande','Tesd',567.00,'65412 mts',0,NULL,'2017-01-16 15:09:03'),(14,'Uyrty','tuytru',564.00,'456457',0,NULL,'2017-01-16 16:22:20'),(15,'Uyryerxhdfgbh',NULL,5464.00,'345346mts',0,NULL,'2017-01-16 16:23:20'),(16,'Test02','Fsdf sdxcv fdsf',4533.00,'34564',0,NULL,'2017-01-17 11:01:44');
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
			WHERE p.rentId = rentId AND p.date BETWEEN DATE_ADD(DATE(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(DATE(r.startDate), INTERVAL i MONTH)
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
        SELECT i, COALESCE(sum(p.amount),0) < r.total, DATE_ADD(DATE(r.startDate), INTERVAL i-1 MONTH)
			from payment p
			INNER JOIN rent r ON p.rentId = r.rentId
			WHERE p.rentId = p_rentId AND p.date BETWEEN DATE_ADD(DATE(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(DATE(r.startDate), INTERVAL i MONTH);


    END WHILE;

	select * FROM valida;
    drop temporary table if exists valida;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_new_clients` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_new_clients`()
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
        SELECT count(c.clientId),  DATE_ADD(date_format(now(), '%y-%m-01' ), INTERVAL i - counter MONTH)
		FROM client c 
		WHERE  c.enable = 1 

			AND 

			date(c.createDatetime) BETWEEN 

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

-- Dump completed on 2017-06-26 22:31:14
