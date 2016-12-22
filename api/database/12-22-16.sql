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
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
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
  `enable` bit(1) DEFAULT b'1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`clientId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Rosa Elia','Sanchez Sauceda','efsd','dfgsfd','cvdsf','gdsfg','45355','fgfdsgfdhfgh','83769430','8119111667','gfdgr@sdfdf.com',NULL,'HOGAR','Persona Fisica','',NULL,'2016-12-19 23:12:06'),(2,'Dino Renzo','Viacava Paradio','eeeeeee','rrrrr','fdddddddd','fdddddddddddf','34200',NULL,'80089451','8119166338','r_viacava@hotmail.com',NULL,'','HOGAR','',NULL,'2016-12-19 23:12:06');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
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
-- Table structure for table `storageloker`
--

DROP TABLE IF EXISTS `storageloker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storageloker` (
  `storagelokerId` int(11) NOT NULL AUTO_INCREMENT,
  `storagelokertypeId` int(11) NOT NULL,
  `number` varchar(45) NOT NULL,
  `enable` bit(1) DEFAULT b'1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`storagelokerId`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storageloker`
--

LOCK TABLES `storageloker` WRITE;
/*!40000 ALTER TABLE `storageloker` DISABLE KEYS */;
INSERT INTO `storageloker` VALUES (1,3,'A01','',NULL,'2016-12-19 21:01:47'),(2,3,'A02','',NULL,'2016-12-19 21:01:47'),(3,1,'A03','',NULL,'2016-12-19 21:01:47'),(4,1,'A04','',NULL,'2016-12-19 21:01:47'),(5,4,'A05','',NULL,'2016-12-19 21:01:47'),(6,3,'A06','',NULL,'2016-12-19 21:01:47'),(7,3,'A07','',NULL,'2016-12-19 21:01:47'),(8,4,'A08','',NULL,'2016-12-19 21:01:47'),(9,4,'A09','',NULL,'2016-12-19 21:01:47'),(10,4,'A10','',NULL,'2016-12-19 21:01:47'),(11,4,'A11','',NULL,'2016-12-19 21:01:47'),(12,4,'B01','',NULL,'2016-12-19 21:01:47'),(13,4,'B02','',NULL,'2016-12-19 21:01:47'),(14,1,'B03','',NULL,'2016-12-19 21:01:47'),(15,1,'B04','',NULL,'2016-12-19 21:01:47'),(16,1,'B05','',NULL,'2016-12-19 21:01:47'),(17,1,'B06','',NULL,'2016-12-19 21:01:47'),(18,1,'B07','',NULL,'2016-12-19 21:01:47'),(19,1,'B08','',NULL,'2016-12-19 21:01:47'),(20,1,'B09','',NULL,'2016-12-19 21:01:47'),(21,1,'B10','',NULL,'2016-12-19 21:01:47'),(22,2,'B11','',NULL,'2016-12-19 21:01:47'),(23,2,'B12','',NULL,'2016-12-19 21:01:47'),(24,2,'B13','',NULL,'2016-12-19 21:01:47'),(25,2,'B14','',NULL,'2016-12-19 21:01:47'),(26,2,'C01','',NULL,'2016-12-19 21:01:47'),(27,2,'C02','',NULL,'2016-12-19 21:01:47'),(28,2,'C03','',NULL,'2016-12-19 21:01:47'),(29,3,'C04','',NULL,'2016-12-19 21:01:47'),(30,3,'C05','',NULL,'2016-12-19 21:01:47'),(31,3,'C06','',NULL,'2016-12-19 21:01:47'),(32,2,'C07','',NULL,'2016-12-19 21:01:47'),(33,3,'C08','',NULL,'2016-12-19 21:01:47'),(34,1,'C09','',NULL,'2016-12-19 21:01:47'),(35,2,'C10','',NULL,'2016-12-19 21:01:47'),(36,4,'C11','',NULL,'2016-12-19 21:01:47'),(37,2,'C12','',NULL,'2016-12-19 21:01:47'),(38,2,'C13','',NULL,'2016-12-19 21:01:47'),(39,1,'C14','',NULL,'2016-12-19 21:01:47'),(40,4,'D01','',NULL,'2016-12-19 21:01:47'),(41,4,'D02','',NULL,'2016-12-19 21:01:47'),(42,3,'D03','',NULL,'2016-12-19 21:01:47'),(43,3,'D04','',NULL,'2016-12-19 21:01:47'),(44,3,'D05','',NULL,'2016-12-19 21:01:47'),(47,3,'W01','',NULL,'2016-12-22 00:39:31');
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
  `enable` bit(1) DEFAULT b'1',
  `createByUserId` int(11) DEFAULT NULL,
  `createDatetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`storagelokertypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storagelokertype`
--

LOCK TABLES `storagelokertype` WRITE;
/*!40000 ALTER TABLE `storagelokertype` DISABLE KEYS */;
INSERT INTO `storagelokertype` VALUES (1,'MiniBodega',NULL,638.00,'3mts','',NULL,'2016-12-19 20:26:29'),(2,'Chica',NULL,1624.00,'7mts','',NULL,'2016-12-19 20:26:29'),(3,'Mediana',NULL,2552.00,'11mts','',NULL,'2016-12-19 20:26:29'),(4,'Grande',NULL,3712.00,'16mts','',NULL,'2016-12-19 20:26:29');
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
  `firstName` varchar(200) DEFAULT NULL,
  `lastName` varchar(200) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`userId`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,NULL,'gonto','gonto','gonto@me.com'),(2,'Edilberto','Salazar','mosh@hotmail.com','12345','admin@guardartodo.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-22  1:07:04
