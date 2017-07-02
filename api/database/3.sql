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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (12,'CARLOS RAYMUNDO LLAMAS GARCIA','PLAYA MONTECARLO, PRIMAVERA','MONTERREY','Mexico','NUEVO LEON','64830','N/A','8123712694','8122171817','Factura@guardartodo.com','N/A','Persona Fisica','HOGAR',0,NULL,'2017-01-20 16:13:04'),(13,'Valeria Perez','PLAYA MONTECARLO, PRIMAVERA','MONTERREY','Mexico','NUEVO LEON','64830','N/A','812365494','811652398','Factura@guardartodo.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-04-29 09:51:42'),(16,'Test','1234','12334','24234','234234','23423','','N/A','N/A','N/A','N/A','PERSONA FISICA','EMPRESA',0,NULL,'2017-05-04 21:07:50'),(17,'Veronica Betancourt Gonzalez','Calzada de los Pinos','Las Calzadas Recidencial','San Pedro','Nuevo Leon','','N/A','83523488','8182534438','N/A','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 09:43:10'),(18,'Rosa Elia Sanchez Sauceda','Mario Talavera 221','Lomas del Roble','San Nicolas','Nuevo Leon','66456','N/A','83523488','8182534438','n','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 09:45:47'),(19,'Rosa Elia Sanchez  Sauceda','Mario Talavera No. 221','Lomas del Roble','San Nicolas','Nuevo Leon','66450','N/A','83769430','8119111667','N/A','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 10:09:17'),(20,'DINO RENZO VIACAVA PARIODEO','Villa del Olvo 114','Villas de Anahuac','General Escobedo','Nuevo Leon','','N/A','80089451','8119166338','r_viacava@hotmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 10:49:58'),(21,'Hector Osvaldo Niño Rodriguez','Roan 148','Santa Luz','General Escobedo','Nuevo Leon','','N/A','83769563','8182532320','TORECRDZ@GMAIL.COM','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 10:53:08'),(22,'Hiram Cantu Obregon','Privada Edmonton 213','Privadas del Canada','San Nicolas','Nuevo Leon','','N/A','22302436','8118001968','c_oziel@hotmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 10:56:01'),(23,'Armando Posadas Morales','Bodega','Colonia PEDREGAL','Apodaca','Nuevo Leon','','N/A','24082747','8115909598','a06m07p80@hotmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 10:59:04'),(24,'Alfredo Javier Peimbert Martinez','Cd Baez 246','Cerradas de Cumbres','Monterrey','Nuevo Leon','','N/A','82535646','8112559841','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:01:45'),(25,'Nora Laura Fernandez Cavazos','Lhmiouilpan 2722','Mitras Centro','Monterrey','Nuevo Leon','','N/A','83485662','8120056222','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:05:25'),(26,'Veronica Bentacurt Gonzalez','Calzada de los Pinos 104','Las Calzadas Residencial','San Pedro Garza Garcia','Nuevo Leon','','N/A','83523888','8182534438','N/A','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:07:50'),(27,'Veronica Betancurt','','Las Calzadas Residencial','San Pedro Garza Garcias','Nuevo Leon','','N/A','83523488','8182534438','N/A','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:10:06'),(28,'Marco Antonio Ortiz Garza','tenayuca 7809','Lomas Modelo','Monterrey','Nuevo Leon','','N/A','83220636','8326799042','marko.ortiz@gmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:12:19'),(29,'Angel Montes Iturriaga','Cd Del Halcon 143','Los Viñedos','Torreon','Coahuila','27019','N/A','','8718871574','angeles.arellano@comissamexico.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:15:39'),(30,'Ramiro Armando Saucedo Torres','19 de Marzo 420','El Roble','San Nicolas','Nuevo Leon','66450','SATR680329UI1','81151214','8111219890','ramsa4@lycos.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-05-06 11:18:17'),(31,'Comercializadora BACSSA','Amayuca 130','Valle Morelos','Monterrey','Nuevo Leon','64830','CBT131028U75','14924210','8110458917','contacto@bacssamty.com','Claudia Veronica Garza','PERSONA MORAL','EMPRESA',1,NULL,'2017-05-06 11:28:38'),(32,'DEACERO S.A.P.I DE CV','Av. Lazaro Cardenas #2333','Valle Oriente','San pedro Garza Garcia','Nuevo Leon','66269','DEA7103086X2','8448084000','8115318586','rvasquez@deacero.com','Romualdo Vasquez Hernandez','PERSONA MORAL','EMPRESA',1,NULL,'2017-05-20 12:49:07');
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
INSERT INTO `payment` VALUES (1,33,'2017-05-04 00:00:00','2017-05-04 21:10:29',NULL,3712.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-04 21:10:29'),(2,42,'2017-04-03 00:00:00','2017-05-11 13:27:29',NULL,1450.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:27:29'),(3,42,'2017-05-03 00:00:00','2017-05-11 13:27:53',NULL,1450.00,NULL,NULL,NULL,NULL,1,NULL,'2017-05-11 13:27:53'),(3,42,'2017-06-03 00:00:00','2017-05-11 13:27:53',NULL,1450.00,NULL,NULL,NULL,NULL,1,NULL,'2017-05-11 13:27:53'),(4,46,'2017-04-10 00:00:00','2017-05-11 13:29:39',NULL,3712.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:29:39'),(5,39,'2017-01-12 00:00:00','2017-05-11 13:36:57',NULL,638.00,NULL,NULL,'SE PAGARON 3 MESES','Efectivo',1,NULL,'2017-05-11 13:36:57'),(6,46,'2017-05-10 00:00:00','2017-05-11 13:38:22',NULL,3712.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:38:22'),(7,45,'2017-03-09 00:00:00','2017-05-11 13:42:26',NULL,1160.00,NULL,NULL,NULL,NULL,1,NULL,'2017-05-11 13:42:26'),(8,45,'2017-04-09 00:00:00','2017-05-11 13:50:26',NULL,1160.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:50:26'),(9,44,'2017-03-06 00:00:00','2017-05-13 14:14:06',NULL,1450.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-13 14:14:06');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
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
  `folio` varchar(20) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`rentId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent`
--

LOCK TABLES `rent` WRITE;
/*!40000 ALTER TABLE `rent` DISABLE KEYS */;
INSERT INTO `rent` VALUES (24,12,2,'2017-01-20 16:01:00','2017-04-27 13:04:52',2200.00,252.00,0.00,2552.00,'','B1701A02024',0,0,NULL,NULL),(25,12,2,'2017-01-20 16:01:00',NULL,2200.00,252.00,0.00,2552.00,'','B1701A02025',1,0,NULL,NULL),(26,12,2,'2017-01-20 16:01:00',NULL,2200.00,252.00,0.00,2552.00,'','B1701A02026',1,0,NULL,NULL),(27,12,8,'2017-01-24 23:01:00',NULL,200.00,0.00,0.00,3200.00,'','B1701A08027',1,0,NULL,NULL),(28,12,8,'2017-01-24 23:01:00',NULL,200.00,0.00,0.00,3200.00,'','B1701A08028',1,0,NULL,NULL),(29,12,8,'2017-01-24 23:01:00',NULL,200.00,0.00,0.00,3200.00,'','B1701A08029',1,0,NULL,NULL),(30,12,9,'2017-04-27 13:05:10',NULL,1250.00,16.00,0.00,1450.00,'','B1704A09030',1,0,NULL,NULL),(31,13,6,'2017-04-29 09:52:14',NULL,2200.00,352.00,NULL,2552.00,'','B1704A06031',1,0,NULL,NULL),(33,16,5,'2017-05-04 21:07:58',NULL,3200.00,512.00,0.00,3712.00,'','B1705A05033',1,0,NULL,NULL),(34,19,45,'2016-11-10 10:10:14',NULL,550.00,88.00,0.00,638.00,'','B1611A04034',1,1,NULL,NULL),(35,20,49,'2016-12-01 10:50:09',NULL,550.00,88.00,0.00,638.00,'','B1612B05035',1,1,NULL,NULL),(36,21,52,'2016-12-09 10:53:11',NULL,550.00,88.00,0.00,638.00,'','B1612B08036',1,1,NULL,NULL),(37,22,51,'2016-12-16 10:56:03',NULL,550.00,88.00,0.00,638.00,'','B1612B07037',1,1,NULL,NULL),(38,23,41,'2016-12-30 10:59:07',NULL,3200.00,512.00,0.00,3712.00,'','B1612D02038',1,1,NULL,NULL),(39,24,48,'2017-01-12 11:01:49',NULL,550.00,88.00,0.00,638.00,'','B1701B04039',1,1,NULL,NULL),(40,25,53,'2017-01-24 11:05:27',NULL,550.00,88.00,0.00,638.00,'','B1701B09040',1,1,NULL,NULL),(41,26,46,'2017-01-23 11:07:52',NULL,550.00,88.00,0.00,638.00,'','B1701A03041',1,1,NULL,NULL),(42,27,28,'2017-04-03 11:10:09',NULL,1250.00,200.00,0.00,1450.00,'','B1704C03042',1,1,NULL,NULL),(43,28,27,'2017-02-24 11:12:22',NULL,1250.00,200.00,0.00,1450.00,'','B1702C02043',1,1,NULL,NULL),(44,29,22,'2017-03-06 11:15:43',NULL,1250.00,200.00,0.00,1450.00,'','B1703B11044',1,1,NULL,NULL),(45,30,26,'2017-03-09 11:18:20',NULL,1000.00,160.00,0.00,1160.00,'','B1703C01045',1,1,NULL,NULL),(46,31,12,'2017-03-10 11:28:44',NULL,3200.00,512.00,0.00,3712.00,'','B1703B01046',1,1,NULL,NULL),(47,32,57,'2017-05-20 12:51:13',NULL,4400.00,704.00,0.00,5104.00,'','B1705C0506047',1,1,NULL,NULL);
/*!40000 ALTER TABLE `rent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentauthorization`
--

DROP TABLE IF EXISTS `rentauthorization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentauthorization` (
  `rentauthorizationId` int(11) NOT NULL AUTO_INCREMENT,
  `rentId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rentauthorizationId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentauthorization`
--

LOCK TABLES `rentauthorization` WRITE;
/*!40000 ALTER TABLE `rentauthorization` DISABLE KEYS */;
INSERT INTO `rentauthorization` VALUES (1,30,11,1,NULL,'2017-04-27 13:05:55'),(2,31,11,1,NULL,'2017-04-29 09:54:43'),(3,33,11,1,NULL,'2017-05-04 21:08:13');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentfile`
--

LOCK TABLES `rentfile` WRITE;
/*!40000 ALTER TABLE `rentfile` DISABLE KEYS */;
INSERT INTO `rentfile` VALUES (1,42,'BD Clientes GuardarTodo.accdb','BD Clientes GuardarTodo.accdb',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentpromotion`
--

LOCK TABLES `rentpromotion` WRITE;
/*!40000 ALTER TABLE `rentpromotion` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storageloker`
--

LOCK TABLES `storageloker` WRITE;
/*!40000 ALTER TABLE `storageloker` DISABLE KEYS */;
INSERT INTO `storageloker` VALUES (1,5,'A01',1,NULL,'2016-12-19 21:01:47'),(2,6,'A02',1,NULL,'2016-12-19 21:01:47'),(3,1,'A03',1,NULL,'2016-12-19 21:01:47'),(4,1,'A04',1,NULL,'2016-12-19 21:01:47'),(5,4,'A05',1,NULL,'2016-12-19 21:01:47'),(6,3,'A06',1,NULL,'2016-12-19 21:01:47'),(7,3,'A07',1,NULL,'2016-12-19 21:01:47'),(8,4,'A08',1,NULL,'2016-12-19 21:01:47'),(9,4,'A09',1,NULL,'2016-12-19 21:01:47'),(10,4,'A10',1,NULL,'2016-12-19 21:01:47'),(11,4,'A11',1,NULL,'2016-12-19 21:01:47'),(12,4,'B01',1,NULL,'2016-12-19 21:01:47'),(13,4,'B02',1,NULL,'2016-12-19 21:01:47'),(14,1,'B03',1,NULL,'2016-12-19 21:01:47'),(15,1,'B04',1,NULL,'2016-12-19 21:01:47'),(16,1,'B05',1,NULL,'2016-12-19 21:01:47'),(17,1,'B06',1,NULL,'2016-12-19 21:01:47'),(18,1,'B07',1,NULL,'2016-12-19 21:01:47'),(19,1,'B08',1,NULL,'2016-12-19 21:01:47'),(20,1,'B09',1,NULL,'2016-12-19 21:01:47'),(21,1,'B10',1,NULL,'2016-12-19 21:01:47'),(22,2,'B11',1,NULL,'2016-12-19 21:01:47'),(23,2,'B12',1,NULL,'2016-12-19 21:01:47'),(24,2,'B22',1,NULL,'2016-12-19 21:01:47'),(25,2,'B14',1,NULL,'2016-12-19 21:01:47'),(26,8,'C01',1,NULL,'2016-12-19 21:01:47'),(27,2,'C02',1,NULL,'2016-12-19 21:01:47'),(28,2,'C03',1,NULL,'2016-12-19 21:01:47'),(29,3,'C04',1,NULL,'2016-12-19 21:01:47'),(30,3,'C05',1,NULL,'2016-12-19 21:01:47'),(31,3,'C06',1,NULL,'2016-12-19 21:01:47'),(32,2,'C07',1,NULL,'2016-12-19 21:01:47'),(33,3,'C08',1,NULL,'2016-12-19 21:01:47'),(34,1,'C09',1,NULL,'2016-12-19 21:01:47'),(35,2,'C10',1,NULL,'2016-12-19 21:01:47'),(36,4,'C11',1,NULL,'2016-12-19 21:01:47'),(37,2,'C12',1,NULL,'2016-12-19 21:01:47'),(38,2,'C13',1,NULL,'2016-12-19 21:01:47'),(39,1,'C14',1,NULL,'2016-12-19 21:01:47'),(40,4,'D01',1,NULL,'2016-12-19 21:01:47'),(41,4,'D02',1,NULL,'2016-12-19 21:01:47'),(42,3,'D03',1,NULL,'2016-12-19 21:01:47'),(43,3,'D04',1,NULL,'2016-12-19 21:01:47'),(44,3,'D05',1,NULL,'2016-12-19 21:01:47'),(45,7,'A04',1,NULL,'2017-05-06 10:10:09'),(46,7,'A03',1,NULL,'2017-05-06 10:44:28'),(47,7,'B03',1,NULL,'2017-05-06 10:44:39'),(48,7,'B04',1,NULL,'2017-05-06 10:44:50'),(49,7,'B05',1,NULL,'2017-05-06 10:44:56'),(50,7,'B06',1,NULL,'2017-05-06 10:45:01'),(51,7,'B07',1,NULL,'2017-05-06 10:45:09'),(52,7,'B08',1,NULL,'2017-05-06 10:45:15'),(53,7,'B09',1,NULL,'2017-05-06 10:45:21'),(54,7,'B10',1,NULL,'2017-05-06 10:45:27'),(55,7,'C09',1,NULL,'2017-05-06 10:45:37'),(56,7,'C14',1,NULL,'2017-05-06 10:45:43'),(57,9,'C0506',1,NULL,'2017-05-20 12:50:43');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storagelokertype`
--

LOCK TABLES `storagelokertype` WRITE;
/*!40000 ALTER TABLE `storagelokertype` DISABLE KEYS */;
INSERT INTO `storagelokertype` VALUES (1,'MiniBodega','Medidas 1 x 3',550.00,'3mts²',0,NULL,'2016-12-19 20:26:29'),(2,'Chica','Medidas 2.4 x 3',1250.00,'7mts²',1,NULL,'2016-12-19 20:26:29'),(3,'Mediana','Medidas  2.9 x 3.7',2200.00,'11mts²',1,NULL,'2016-12-19 20:26:29'),(4,'Grande','Medidas 4 x 4',3200.00,'16mts²',1,NULL,'2016-12-19 20:26:29'),(5,'Especial','42mts²',0.00,NULL,0,NULL,'2017-01-21 13:17:18'),(6,'Especial',NULL,2563.00,NULL,0,NULL,'2017-01-21 13:34:59'),(7,'Minibodega','1 x 3',550.00,'3 mts²',1,NULL,'2017-05-06 09:40:16'),(8,'Especial CH 5mts²','Bodega Chica, tiene menos metros cuadrados',1000.00,'2.5 x 3',1,NULL,'2017-05-11 13:49:03'),(9,'Especial 22mts²','Mayor capacidad',4400.00,NULL,1,NULL,'2017-05-20 12:50:24');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Administrador','','admin','Gu4rdar@Todo',0,'users-1.svg',1),(11,'Valeria Natali','Perez Morales','Valeria','GT1234',0,'users-5.svg',1),(12,'Edilberto','Salazar','mosh','tool4',0,'users-10.svg',1);
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
			WHERE p.rentId = rentId AND 
				p.enable = 1 AND
                p.date BETWEEN DATE_ADD(DATE(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(DATE(r.startDate), INTERVAL i MONTH)
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
			WHERE p.rentId = p_rentId AND 
				p.enable = 1 AND
                p.date BETWEEN DATE_ADD(DATE(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(DATE(r.startDate), INTERVAL i MONTH);


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

-- Dump completed on 2017-07-02  0:30:01
