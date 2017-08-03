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
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (12,'CARLOS RAYMUNDO LLAMAS GARCIA','PLAYA MONTECARLO, PRIMAVERA','MONTERREY','Mexico','NUEVO LEON','64830','N/A','8123712694','8122171817','Factura@guardartodo.com','N/A','Persona Fisica','HOGAR',0,NULL,'2017-01-20 16:13:04'),(13,'Valeria Perez','PLAYA MONTECARLO, PRIMAVERA','MONTERREY','Mexico','NUEVO LEON','64830','N/A','812365494','811652398','Factura@guardartodo.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-04-29 09:51:42'),(16,'Test','1234','12334','24234','234234','23423','','N/A','N/A','N/A','N/A','PERSONA FISICA','EMPRESA',0,NULL,'2017-05-04 21:07:50'),(17,'Veronica Betancourt Gonzalez','Calzada de los Pinos','Las Calzadas Recidencial','San Pedro','Nuevo Leon','','N/A','83523488','8182534438','N/A','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 09:43:10'),(18,'Rosa Elia Sanchez Sauceda','Mario Talavera 221','Lomas del Roble','San Nicolas','Nuevo Leon','66456','N/A','83523488','8182534438','n','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 09:45:47'),(19,'Rosa Elia Sanchez  Sauceda','Mario Talavera No. 221','Lomas del Roble','San Nicolas','Nuevo Leon','66450','N/A','83769430','8119111667','N/A','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 10:09:17'),(20,'DINO RENZO VIACAVA PARIODEO','Villa del Olvo 114','Villas de Anahuac','General Escobedo','Nuevo Leon','','N/A','80089451','8119166338','r_viacava@hotmail.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 10:49:58'),(21,'Hector Osvaldo Niño Rodriguez','Roan 148','Santa Luz','General Escobedo','Nuevo Leon','','N/A','83769563','8182532320','TORECRDZ@GMAIL.COM','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 10:53:08'),(22,'Hiram Cantu Obregon','Privada Edmonton 213','Privadas del Canada','San Nicolas','Nuevo Leon','','N/A','22302436','8118001968','c_oziel@hotmail.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 10:56:01'),(23,'Armando Posadas Morales','Bodega','Colonia PEDREGAL','Apodaca','Nuevo Leon','','N/A','24082747','8115909598','a06m07p80@hotmail.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 10:59:04'),(24,'Alfredo Javier Peimbert Martinez','Cd Baez 246','Cerradas de Cumbres','Monterrey','Nuevo Leon','','N/A','82535646','8112559841','','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:01:45'),(25,'Nora Laura Fernandez Cavazos','Lhmiouilpan 2722','Mitras Centro','Monterrey','Nuevo Leon','','N/A','83485662','8120056222','','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:05:25'),(26,'Veronica Bentacurt Gonzalez','Calzada de los Pinos 104','Las Calzadas Residencial','San Pedro Garza Garcia','Nuevo Leon','','N/A','83523888','8182534438','N/A','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:07:50'),(27,'Veronica Betancurt','','Las Calzadas Residencial','San Pedro Garza Garcias','Nuevo Leon','','N/A','83523488','8182534438','N/A','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:10:06'),(28,'Marco Antonio Ortiz Garza','tenayuca 7809','Lomas Modelo','Monterrey','Nuevo Leon','','N/A','83220636','8326799042','marko.ortiz@gmail.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:12:19'),(29,'Angel Montes Iturriaga','Cd Del Halcon 143','Los Viñedos','Torreon','Coahuila','27019','N/A','','8718871574','angeles.arellano@comissamexico.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:15:39'),(30,'Ramiro Armando Saucedo Torres','19 de Marzo 420','El Roble','San Nicolas','Nuevo Leon','66450','SATR680329UI1','81151214','8111219890','ramsa4@lycos.com','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-05-06 11:18:17'),(31,'Comercializadora BACSSA','Amayuca 130','Valle Morelos','Monterrey','Nuevo Leon','64830','CBT131028U75','14924210','8110458917','contacto@bacssamty.com','Claudia Veronica Garza','PERSONA MORAL','EMPRESA',0,NULL,'2017-05-06 11:28:38'),(32,'DEACERO S.A.P.I DE CV','Av. Lazaro Cardenas #2333','Valle Oriente','San pedro Garza Garcia','Nuevo Leon','66269','DEA7103086X2','8448084000','8115318586','rvasquez@deacero.com','Romualdo Vasquez Hernandez','PERSONA MORAL','EMPRESA',1,NULL,'2017-05-20 12:49:07'),(33,'Rosa Elia','Mario Talavera No. 221','Lomas del Roble','San Nicolas','NUEVO LEON','','N/A','83769430','8119111667','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:05:13'),(34,'Dino Renzo Viacava Pariodeo','Villa del Olvo 114','Villas de Anahuac','General Escobedo','Nuevo Leon','66059','N/A','','81 1916 6338','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:29:22'),(35,'Hector Osvaldo Niño Rodriguez','C. Ruan','Santa Luz','General Escobedo','Nuevo Leon','64830','N/A','','8182532320','torecrdz@gmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:31:25'),(36,'Armando Posadas Morales','Zaragoza 926','Pedregal de Apodaca','Apodaca','Nuevo Leon','66605','N/A','','81 1762 3122','a06m07p80@hotmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:34:00'),(37,'Alfredo Javier Peimbert Martinez','Cda. Baez 246','Cerradas de Cumbres','Monterrey','Nuevo Leon','','N/A','','81 8253 5646','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:36:45'),(38,'Nora Laura Fernandez Cavazos','Lymiouilpan 2722','Mitras Centro','Monterrey','Nuevo Leon','','N/A','','81 2005 6622','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:38:24'),(39,'Veronica Betancourt Gonzales','Calzada de los Pinos 104','Las Calzadas Recidencial','San pedro Garza Garcia','Nuevo Leon','','N/A','8182534438','8182534438','','','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:39:58'),(40,'Marco Antonio Ortiz Garza','Tenayuca 7809','Lomas Modelo','Monterrey','Nuevo Leon','','N/A','','1 (832) 679-9042','marko.ortiz@gmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:46:13'),(41,'Angel Montes Iturriaga','Halcon 43','Los Viñedos','Torreón','coahuila','27019','N/A','','8718871574','angeles.arellano@comissamexico.com.mx','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:48:31'),(42,'Ramiro Armando Saucedo Torres','19 de Marzo, #420','El roble','San Nicolas','Nuevo Leon','66450','N/A','','8111219890','ramsa4@lycos.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-14 12:51:31'),(43,'Clyde Martinez Ramos','Lirio 420','Valle de las Palmas','Apodaca','Nuevo Leon','66612','N/A','21703009','8184666140','clyde811@me.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-17 12:25:09'),(44,'Nemo Miguel Guardiana Gonzales','Mc allen 403','Recidencial Puerta del Norte','General Escobedo','Nuevo Leon','66054','N/A','805816250','8120743887','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-18 12:08:27'),(45,'Pedro Ricardo Salazar Mata','C. Calzada Suiza 121','Calzada de Anahuac','Gral. Escobedo','Nuevo Leon','66059','N/A','21385288','811981673','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-21 13:35:14'),(46,'Laura Almazan Gomez','Fray Lucas de Pastrana 360','Roble','San Nicolas','NUEVO LEON','64830','N/A','83766431','8115194464','N/A','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-22 10:46:11'),(47,'Alicia Esparza Coss','Guayana Holandesa 226','Vista Hermosa','Monterrey','NUEVO LEON','64620','N/A','','8112519567','','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-07-22 10:48:03'),(48,'Silvia Aida Elizondo Moreno','C. Gaviota 432','Hacienda las palmas','Apodaca','NUEVO LEON','66635','N/A','','','N/A','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 09:57:02'),(49,'Menzies Aviation SA DE CV','Boulevard luis donaldo colosio Mza 26, Lote 03-01, Local 2','SM 311','Benito Juarez','Quintana Roo','','MAM971023SK7','10888562','8123548264','elena.serna@menziesaviation.com','Imelda Santos','PERSONA MORAL','EMPRESA',1,NULL,'2017-07-24 10:20:55'),(50,'Mekra Lang Mexico','Av. Sendero Norte, Bodega L, No. Ext. 510,','Balcones de Anahuac','San Nicolas','Nuevo Leon','66422','LME080505HT2','19462055','','Benny.manzano@mekralang.com','Benny. Manzano','PERSONA MORAL','EMPRESA',1,NULL,'2017-07-24 10:24:23'),(51,'Andrea Cecilia Ramirez Espinosa','Agustin de Inturbide 416','Heroes de Mexico','San Nicolas','Nuevo Leon','66415','N/A','83131888','8117639894','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:26:52'),(52,'Nancy Gutierrez Gonzales','C. Montes Pirinelos 912','Las puentes 7sec.','San Nicolas','Nuevo Leon','66460','N/A','96887981','8119084230','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:28:54'),(53,'Juan Eliseo Vargas Sifuentes','C.Calzada Inglesa 270.','Calzadas Anahuac, Sec. Frances','San Nicolas','Nuevo Leon','66050','N/A','','8111825172','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:31:36'),(54,'Fabiola Martinez Gonzales','San Carlos 1312,Cam Real San Jose','hda. Los Cantus','General Escobedo','Nuevo Leon','66059','N/A','86616260','8182541085','fabiolamgzz@hotmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:37:50'),(55,'Rodotours S. DE R.L DE CV','Jose Benitez 2186, Interior 2','Obispado','Monterrey','Nuevo Leon','64060','ROOD140627F8A','83761499','8184709639','rs.com','Rodolfo Elizondo Cervantes','PERSONA MORAL','EMPRESA',1,NULL,'2017-07-24 10:42:38'),(56,'Carlos Alberto Ortiz Galindo','C. Mision de San Jorge 152','Fracc. Mision de Huinala','Apodaca','Nuevo Leon','66646','N/A','25296854','8115616007','cotizga@gmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:45:08'),(57,'Leticia Angelica Valdez Ramirez','C. Sirio. No.401','Fracc. Anahuac Sendero','General Escobedo','Nuevo Leon','66418','N/A','81053032','8182524658','','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:47:16'),(58,'Alexander Yanchuk','6 de Enero, No.205.','El roble','San Nicolas','Nuevo Leon','','N/A','','8120028878','alexanderryanchuk@gmail.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-24 10:49:01'),(59,'UYGXIAKOFGVS','DZBG','XFBGB','GXFGB','GBFGB','GF','GFB','FXGB','FGB','GBF','GBF','PERSONA FISICA','HOGAR',0,NULL,'2017-07-25 13:31:58'),(60,'Elsa Gabriela Treviño Galindo','Barranca del Cobre #201','Las sierras','Mexico','NUEVO LEON','66377','N/A','','8111885147','Factura@guardartodo.com','N/A','PERSONA FISICA','HOGAR',1,NULL,'2017-07-26 15:38:52'),(61,'Prueba','Prueba','Prueba','Prueba','Prueba','Prueb','Prueba','Prueba','Prueba','Prueba','N/A','PERSONA FISICA','HOGAR',0,NULL,'2017-07-27 13:52:11'),(62,'Cesar Yanez Garza','J Arco 433','Roma','Monterrey','Nuevo Leon','64700','YAGC790621S60','','8112770365','drcesaryaez@gmail.com','','PERSONA FISICA','HOGAR',1,NULL,'2017-07-27 16:24:41'),(63,'XDN DHGN','GHN','GHNGH','NGH','NHG','NGHN','GHNGH','NGHN','GHNGHN','GHNGH','','PERSONA FISICA','',0,NULL,'2017-07-28 15:24:26');
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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientfile`
--

LOCK TABLES `clientfile` WRITE;
/*!40000 ALTER TABLE `clientfile` DISABLE KEYS */;
INSERT INTO `clientfile` VALUES (11,48,'Credencial','2017-07-24 08.48.12.jpg','2017-07-24 08.48.12.jpg',''),(12,48,'Comprobante','2017-07-24 08.48.16.jpg','2017-07-24 08.48.16.jpg',''),(13,60,'Credencial','WhatsApp Image 2017-07-26 at 3.40.42 PM.jpeg','WhatsApp Image 2017-07-26 at 3.40.42 PM.jpeg',''),(14,45,'INE Y comprobante Dom','Pedro Riccardo.pdf','Pedro Riccardo.pdf','\0'),(15,45,'INE Y comprobante Dom','Pedro Riccardo.pdf','Pedro Riccardo.pdf',''),(16,40,'IFE','Sr. Marco.pdf','Sr. Marco.pdf',''),(17,58,'Licencia y Comprobante Dom','Alexander Yanchuk.pdf','Alexander Yanchuk.pdf','\0'),(18,58,'Licencia y Comprobante de Dom','D08 Alexander Yanchuk.pdf','D08 Alexander Yanchuk.pdf',''),(19,32,'Acta Constitutiva B01','EP 7719 constitutiva DEACERO c última pagina.pdf','EP 7719 constitutiva DEACERO c última pagina.pdf',''),(20,32,'RFC B01','image001.jpg','image001.jpg',''),(21,32,'INE B01','image002.jpg','image002.jpg',''),(22,32,'Comprobante Dom. B01','image003.png','image003.png',''),(23,34,'Pasaporte y Comprobante B','DINO RENZO.pdf','DINO RENZO.pdf','\0'),(24,34,'Pasaporte y Comprobante B05','DINO RENZO.pdf','DINO RENZO.pdf',''),(25,35,'IFE B08','REQUISITOS HECTOR.pdf','REQUISITOS HECTOR.pdf',''),(26,37,'INE B04','Alfredo Javier 2.jpeg','Alfredo Javier 2.jpeg',''),(27,37,'Comprobante B04','Alfredo Javier.jpeg','Alfredo Javier.jpeg',''),(28,38,'INE B09','Nora Laura.pdf','Nora Laura.pdf',''),(29,35,'Comprobante B08','Hector Comprobante.jpeg','Hector Comprobante.jpeg',''),(30,39,'IFE y Comprobante de domicilio','Sra. Veronica.pdf','Sra. Veronica.pdf',''),(31,40,'Comprobante Dom.','Marco comprobante.jpeg','Marco comprobante.jpeg',''),(32,41,'Comprobante Dom.','Sr. Angel Comprobante.pdf','Sr. Angel Comprobante.pdf',''),(33,41,'IFE','Sr. Angel IFE.pdf','Sr. Angel IFE.pdf',''),(34,43,'gfdg','Balance.xlsx','Balance.xlsx','\0'),(35,43,'g','Espacio BK.jpeg','Espacio BK.jpeg','\0');
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
INSERT INTO `payment` VALUES (1,33,'2017-05-04 00:00:00','2017-05-04 21:10:29',NULL,3712.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-04 21:10:29'),(2,42,'2017-04-03 00:00:00','2017-05-11 13:27:29',NULL,1450.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:27:29'),(3,42,'2017-05-03 00:00:00','2017-05-11 13:27:53',NULL,1450.00,NULL,NULL,NULL,NULL,1,NULL,'2017-05-11 13:27:53'),(3,42,'2017-06-03 00:00:00','2017-05-11 13:27:53',NULL,1450.00,NULL,NULL,NULL,NULL,1,NULL,'2017-05-11 13:27:53'),(4,46,'2017-04-10 00:00:00','2017-05-11 13:29:39',NULL,3712.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:29:39'),(5,39,'2017-01-12 00:00:00','2017-05-11 13:36:57',NULL,638.00,NULL,NULL,'SE PAGARON 3 MESES','Efectivo',1,NULL,'2017-05-11 13:36:57'),(6,46,'2017-05-10 00:00:00','2017-05-11 13:38:22',NULL,3712.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:38:22'),(7,45,'2017-03-09 00:00:00','2017-05-11 13:42:26',NULL,1160.00,NULL,NULL,NULL,NULL,1,NULL,'2017-05-11 13:42:26'),(8,45,'2017-04-09 00:00:00','2017-05-11 13:50:26',NULL,1160.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-11 13:50:26'),(9,44,'2017-03-06 00:00:00','2017-05-13 14:14:06',NULL,1450.00,NULL,NULL,NULL,'Efectivo',1,NULL,'2017-05-13 14:14:06'),(10,48,'2017-07-02 00:00:00','2017-07-02 00:35:13',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:13'),(10,NULL,NULL,'2017-07-02 00:35:13',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:13'),(10,NULL,NULL,'2017-07-02 00:35:13',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:13'),(11,48,'2017-07-02 00:00:00','2017-07-02 00:35:21',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:22'),(11,NULL,NULL,'2017-07-02 00:35:21',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:22'),(11,NULL,NULL,'2017-07-02 00:35:21',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:22'),(12,48,'2017-07-02 00:00:00','2017-07-02 00:35:38',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:38'),(12,NULL,NULL,'2017-07-02 00:35:38',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:38'),(12,NULL,NULL,'2017-07-02 00:35:38',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:38'),(13,48,'2017-07-02 00:00:00','2017-07-02 00:35:49',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:49'),(13,NULL,NULL,'2017-07-02 00:35:49',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:49'),(13,NULL,NULL,'2017-07-02 00:35:49',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:49'),(14,48,'2017-07-02 00:00:00','2017-07-02 00:35:51',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:51'),(14,NULL,NULL,'2017-07-02 00:35:51',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:51'),(14,NULL,NULL,'2017-07-02 00:35:51',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:51'),(15,48,'2017-07-02 00:00:00','2017-07-02 00:35:51',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:51'),(15,NULL,NULL,'2017-07-02 00:35:51',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:51'),(15,NULL,NULL,'2017-07-02 00:35:51',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:51'),(16,48,'2017-07-02 00:00:00','2017-07-02 00:35:52',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:53'),(16,NULL,NULL,'2017-07-02 00:35:52',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:53'),(16,NULL,NULL,'2017-07-02 00:35:52',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:53'),(17,48,'2017-07-02 00:00:00','2017-07-02 00:35:53',NULL,5104.00,0.00,NULL,'sad','Efectivo',1,NULL,'2017-07-02 00:35:53'),(17,NULL,NULL,'2017-07-02 00:35:53',NULL,34.00,NULL,'dsfdsf','sad','Efectivo',1,NULL,'2017-07-02 00:35:53'),(17,NULL,NULL,'2017-07-02 00:35:53',NULL,43.00,NULL,'dfssdfd','sad','Efectivo',1,NULL,'2017-07-02 00:35:53'),(18,49,'2017-07-02 00:00:00','2017-07-02 11:46:33',NULL,5104.00,0.00,NULL,'dsfsdg','Efectivo',0,NULL,'2017-07-02 11:46:33'),(18,NULL,NULL,'2017-07-06 15:55:01',NULL,100.00,NULL,'Candando',NULL,'Efectivo',1,NULL,'2017-07-06 15:55:01'),(18,47,'2017-08-20 00:00:00','2017-07-06 15:55:01',NULL,5104.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-06 15:55:01'),(19,50,'2017-07-14 00:00:00','2017-07-14 11:23:12',NULL,2552.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-14 11:23:13'),(20,52,'2017-07-17 00:00:00','2017-07-17 12:40:04',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-17 12:40:04'),(21,53,'2017-07-21 00:00:00','2017-07-21 13:39:41',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-21 13:39:41'),(22,54,'2017-07-24 00:00:00','2017-07-24 09:59:31',NULL,3712.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-24 09:59:31'),(23,51,'2017-07-14 00:00:00','2017-07-24 10:49:56',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:49:56'),(24,55,'2017-06-30 00:00:00','2017-07-24 10:51:54',NULL,3712.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:51:54'),(25,56,'2016-12-01 00:00:00','2017-07-24 10:53:55',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:53:55'),(26,56,'2017-01-01 00:00:00','2017-07-24 10:54:05',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:54:05'),(27,56,'2017-02-01 00:00:00','2017-07-24 10:54:16',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:54:16'),(28,56,'2017-03-01 00:00:00','2017-07-24 10:54:30',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:54:30'),(29,56,'2017-04-01 00:00:00','2017-07-24 10:54:43',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:54:43'),(30,56,'2017-05-01 00:00:00','2017-07-24 10:54:56',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:54:56'),(31,56,'2017-06-01 00:00:00','2017-07-24 10:55:14',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:55:14'),(32,56,'2017-07-01 00:00:00','2017-07-24 10:55:34',NULL,638.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-24 10:55:35'),(33,80,'2017-07-11 00:00:00','2017-07-25 14:09:48',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-25 14:09:48'),(34,81,'2017-07-26 00:00:00','2017-07-26 15:56:34',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-26 15:56:34'),(35,57,'2016-12-09 00:00:00','2017-07-28 09:17:50',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:17:50'),(36,57,'2017-01-09 00:00:00','2017-07-28 09:18:19',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:18:19'),(37,57,'2017-02-09 00:00:00','2017-07-28 09:18:59',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:18:59'),(38,57,'2017-03-09 00:00:00','2017-07-28 09:19:15',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:19:15'),(39,57,'2017-04-09 00:00:00','2017-07-28 09:19:34',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:19:34'),(40,57,'2017-05-09 00:00:00','2017-07-28 09:19:52',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:19:52'),(41,57,'2017-06-09 00:00:00','2017-07-28 09:20:09',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:20:09'),(42,57,'2017-07-09 00:00:00','2017-07-28 09:20:31',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:20:31'),(43,58,'2016-12-30 00:00:00','2017-07-28 09:20:59',NULL,3712.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:20:59'),(44,58,'2017-01-30 00:00:00','2017-07-28 09:21:31',NULL,3712.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:21:31'),(45,58,'2017-02-28 00:00:00','2017-07-28 09:21:49',NULL,3712.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:21:49'),(46,58,'2017-03-30 00:00:00','2017-07-28 09:22:13',NULL,3712.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:22:13'),(47,58,'2017-04-30 00:00:00','2017-07-28 09:22:30',NULL,3712.00,0.00,NULL,NULL,NULL,1,NULL,'2017-07-28 09:22:31'),(48,58,'2017-05-30 00:00:00','2017-07-28 09:22:49',NULL,3712.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:22:49'),(49,59,'2017-01-12 00:00:00','2017-07-28 09:23:08',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:23:08'),(50,59,'2017-02-12 00:00:00','2017-07-28 09:23:26',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:23:26'),(51,59,'2017-03-12 00:00:00','2017-07-28 09:23:44',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:23:44'),(52,59,'2017-04-12 00:00:00','2017-07-28 09:23:56',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:23:56'),(53,59,'2017-05-12 00:00:00','2017-07-28 09:24:12',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:24:12'),(54,59,'2017-06-12 00:00:00','2017-07-28 09:24:29',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:24:29'),(55,59,'2017-07-12 00:00:00','2017-07-28 09:24:48',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:24:48'),(56,60,'2017-01-24 00:00:00','2017-07-28 09:25:18',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:25:18'),(57,60,'2017-02-24 00:00:00','2017-07-28 09:25:30',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:25:30'),(58,60,'2017-03-24 00:00:00','2017-07-28 09:26:35',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:26:35'),(59,60,'2017-04-24 00:00:00','2017-07-28 09:26:46',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:26:46'),(60,60,'2017-05-24 00:00:00','2017-07-28 09:26:58',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:26:58'),(61,60,'2017-06-24 00:00:00','2017-07-28 09:27:12',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:27:12'),(62,60,'2017-07-24 00:00:00','2017-07-28 09:27:24',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:27:24'),(63,61,'2017-01-31 00:00:00','2017-07-28 09:28:18',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:28:18'),(64,61,'2017-02-28 00:00:00','2017-07-28 09:28:34',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:28:34'),(65,61,'2017-03-31 00:00:00','2017-07-28 09:28:46',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:28:46'),(66,61,'2017-04-30 00:00:00','2017-07-28 09:30:40',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:30:40'),(67,61,'2017-05-31 00:00:00','2017-07-28 09:31:04',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:31:04'),(68,61,'2017-06-30 00:00:00','2017-07-28 09:31:17',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:31:17'),(69,64,'2017-02-24 00:00:00','2017-07-28 09:31:40',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:31:40'),(70,64,'2017-03-24 00:00:00','2017-07-28 09:31:51',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:31:51'),(71,64,'2017-04-24 00:00:00','2017-07-28 09:32:02',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:32:02'),(72,64,'2017-05-24 00:00:00','2017-07-28 09:32:14',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:32:14'),(73,64,'2017-06-24 00:00:00','2017-07-28 09:32:28',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:32:28'),(74,64,'2017-07-24 00:00:00','2017-07-28 09:32:41',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:32:41'),(75,65,'2017-03-06 00:00:00','2017-07-28 09:32:58',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:32:58'),(76,65,'2017-04-06 00:00:00','2017-07-28 09:33:17',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:33:17'),(77,65,'2017-05-06 00:00:00','2017-07-28 09:33:31',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:33:31'),(78,65,'2017-06-06 00:00:00','2017-07-28 09:33:42',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:33:42'),(79,65,'2017-07-06 00:00:00','2017-07-28 09:33:55',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:33:55'),(80,66,'2017-03-09 00:00:00','2017-07-28 09:34:17',NULL,1160.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:34:17'),(81,66,'2017-04-09 00:00:00','2017-07-28 09:34:29',NULL,1160.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:34:29'),(82,66,'2017-05-09 00:00:00','2017-07-28 09:34:40',NULL,1160.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:34:40'),(83,66,'2017-06-09 00:00:00','2017-07-28 09:35:27',NULL,1160.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:35:27'),(84,66,'2017-07-09 00:00:00','2017-07-28 09:35:39',NULL,1160.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:35:39'),(85,69,'2017-03-29 00:00:00','2017-07-28 09:36:05',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:36:05'),(86,69,'2017-04-29 00:00:00','2017-07-28 09:36:16',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:36:16'),(87,69,'2017-05-29 00:00:00','2017-07-28 09:36:27',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:36:27'),(88,69,'2017-06-29 00:00:00','2017-07-28 09:36:42',NULL,638.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:36:42'),(89,62,'2017-04-24 00:00:00','2017-07-28 09:42:05',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:42:05'),(90,62,'2017-05-24 00:00:00','2017-07-28 09:44:22',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:44:22'),(91,62,'2017-06-24 00:00:00','2017-07-28 09:44:35',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:44:35'),(92,62,'2017-07-24 00:00:00','2017-07-28 09:44:48',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:44:48'),(93,70,'2017-04-26 00:00:00','2017-07-28 09:46:05',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:46:05'),(94,70,'2017-05-26 00:00:00','2017-07-28 09:46:16',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:46:16'),(95,70,'2017-06-26 00:00:00','2017-07-28 09:47:54',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:47:54'),(96,70,'2017-07-26 00:00:00','2017-07-28 09:48:06',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:48:06'),(97,71,'2017-05-25 00:00:00','2017-07-28 09:48:26',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:48:26'),(98,NULL,NULL,'2017-07-28 09:48:55',NULL,100.00,NULL,'Candado',NULL,'Transferencia',1,NULL,'2017-07-28 09:48:55'),(98,71,'2017-06-25 00:00:00','2017-07-28 09:48:55',NULL,1450.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:48:55'),(99,72,'2017-05-26 00:00:00','2017-07-28 09:49:25',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:49:25'),(100,72,'2017-06-26 00:00:00','2017-07-28 09:49:36',NULL,638.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:49:36'),(101,72,'2017-07-26 00:00:00','2017-07-28 09:49:49',NULL,638.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:49:49'),(102,82,'2017-06-09 00:00:00','2017-07-28 09:51:10',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:51:10'),(103,85,'2017-06-09 00:00:00','2017-07-28 09:51:51',NULL,928.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:51:51'),(104,85,'2017-07-09 00:00:00','2017-07-28 09:53:05',NULL,928.00,0.00,NULL,NULL,'Transferencia',1,NULL,'2017-07-28 09:53:05'),(105,75,'2017-06-13 00:00:00','2017-07-28 09:53:35',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:53:35'),(106,75,'2017-07-13 00:00:00','2017-07-28 09:53:48',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:53:48'),(107,86,'2017-06-27 00:00:00','2017-07-28 09:54:06',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:54:06'),(108,86,'2017-07-27 00:00:00','2017-07-28 09:54:41',NULL,1450.00,0.00,NULL,'Vence los 27/07/2017 MES GRATIS','Efectivo',1,NULL,'2017-07-28 09:54:41'),(109,76,'2017-06-27 00:00:00','2017-07-28 09:54:55',NULL,1450.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:54:55'),(110,76,'2017-07-27 00:00:00','2017-07-28 09:55:14',NULL,1450.00,0.00,NULL,'mes de julio gratis','Efectivo',1,NULL,'2017-07-28 09:55:14'),(111,77,'2017-06-27 00:00:00','2017-07-28 09:55:33',NULL,2552.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:55:33'),(112,77,'2017-07-27 00:00:00','2017-07-28 09:55:59',NULL,2552.00,0.00,NULL,'MES  JULIO GRATIS.','Efectivo',1,NULL,'2017-07-28 09:55:59'),(113,78,'2017-06-30 00:00:00','2017-07-28 09:56:27',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:56:27'),(114,79,'2017-06-30 00:00:00','2017-07-28 09:56:54',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:56:54'),(115,67,'2017-07-07 00:00:00','2017-07-28 09:57:40',NULL,2552.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:57:40'),(116,68,'2017-07-07 00:00:00','2017-07-28 09:57:51',NULL,2552.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-07-28 09:57:51'),(117,61,'2017-07-31 00:00:00','2017-08-02 11:15:04',NULL,638.00,0.00,NULL,NULL,'Efectivo',1,NULL,'2017-08-02 11:15:04');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,1,'1','2',NULL,100,0,NULL,NULL),(2,1,'3','4',NULL,100,0,NULL,NULL),(3,1,'3 x 2','Te regalamos 1 mes, pagando 2.',NULL,100,1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent`
--

LOCK TABLES `rent` WRITE;
/*!40000 ALTER TABLE `rent` DISABLE KEYS */;
INSERT INTO `rent` VALUES (24,12,2,'2017-01-20 16:01:00','2017-04-27 13:04:52',2200.00,252.00,0.00,2552.00,'','B1701A02024',0,0,NULL,NULL),(25,12,2,'2017-01-20 16:01:00',NULL,2200.00,252.00,0.00,2552.00,'','B1701A02025',1,0,NULL,NULL),(26,12,2,'2017-01-20 16:01:00',NULL,2200.00,252.00,0.00,2552.00,'','B1701A02026',1,0,NULL,NULL),(27,12,8,'2017-01-24 23:01:00',NULL,200.00,0.00,0.00,3200.00,'','B1701A08027',1,0,NULL,NULL),(28,12,8,'2017-01-24 23:01:00',NULL,200.00,0.00,0.00,3200.00,'','B1701A08028',1,0,NULL,NULL),(29,12,8,'2017-01-24 23:01:00',NULL,200.00,0.00,0.00,3200.00,'','B1701A08029',1,0,NULL,NULL),(30,12,9,'2017-04-27 13:05:10',NULL,1250.00,16.00,0.00,1450.00,'','B1704A09030',1,0,NULL,NULL),(31,13,6,'2017-04-29 09:52:14',NULL,2200.00,352.00,NULL,2552.00,'','B1704A06031',1,0,NULL,NULL),(33,16,5,'2017-05-04 21:07:58',NULL,3200.00,512.00,0.00,3712.00,'','B1705A05033',1,0,NULL,NULL),(34,19,45,'2016-11-10 10:10:14',NULL,550.00,88.00,0.00,638.00,'','B1611A04034',1,0,NULL,NULL),(35,20,49,'2016-12-01 10:50:09','2017-07-06 15:55:31',550.00,88.00,0.00,638.00,'','B1612B05035',0,0,NULL,NULL),(36,21,52,'2016-12-09 10:53:11',NULL,550.00,88.00,0.00,638.00,'','B1612B08036',1,0,NULL,NULL),(37,22,51,'2016-12-16 10:56:03',NULL,550.00,88.00,0.00,638.00,'','B1612B07037',1,0,NULL,NULL),(38,23,41,'2016-12-30 10:59:07',NULL,3200.00,512.00,0.00,3712.00,'','B1612D02038',1,0,NULL,NULL),(39,24,48,'2017-01-12 11:01:49',NULL,550.00,88.00,0.00,638.00,'','B1701B04039',1,0,NULL,NULL),(40,25,53,'2017-01-24 11:05:27',NULL,550.00,88.00,0.00,638.00,'','B1701B09040',1,0,NULL,NULL),(41,26,46,'2017-01-23 11:07:52',NULL,550.00,88.00,0.00,638.00,'','B1701A03041',1,0,NULL,NULL),(42,27,28,'2017-04-03 11:10:09',NULL,1250.00,200.00,0.00,1450.00,'','B1704C03042',1,0,NULL,NULL),(43,28,27,'2017-02-24 11:12:22',NULL,1250.00,200.00,0.00,1450.00,'','B1702C02043',1,0,NULL,NULL),(44,29,22,'2017-03-06 11:15:43',NULL,1250.00,200.00,0.00,1450.00,'','B1703B11044',1,0,NULL,NULL),(45,30,26,'2017-03-09 11:18:20',NULL,1000.00,160.00,0.00,1160.00,'','B1703C01045',1,0,NULL,NULL),(46,31,12,'2017-03-10 11:28:44',NULL,3200.00,512.00,0.00,3712.00,'','B1703B01046',1,0,NULL,NULL),(47,32,57,'2017-05-20 12:51:13',NULL,4400.00,704.00,0.00,5104.00,'','B1705C0506047',1,0,NULL,NULL),(48,32,58,'2017-07-02 00:33:36',NULL,4400.00,704.00,0.00,5104.00,'','B1707W01048',1,0,NULL,NULL),(49,32,58,'2017-07-02 11:45:25',NULL,4400.00,704.00,0.00,5104.00,'','B1707W01049',1,0,NULL,NULL),(50,32,6,'2017-07-14 11:16:36',NULL,2200.00,352.00,0.00,2552.00,'','B1707A06050',1,0,NULL,NULL),(51,33,74,'2017-07-14 12:25:56',NULL,550.00,88.00,0.00,638.00,'','B1707A04051',1,1,NULL,NULL),(52,43,75,'2017-07-17 12:26:48',NULL,1250.00,200.00,0.00,1450.00,'','B1707D13052',1,1,NULL,NULL),(53,45,76,'2017-07-21 13:36:46',NULL,1250.00,200.00,0.00,1450.00,'','B1707D12053',1,1,NULL,NULL),(54,48,13,'2017-07-24 09:57:52',NULL,3200.00,512.00,0.00,3712.00,'','B1707B02054',1,1,NULL,NULL),(55,32,12,'2017-06-30 10:50:06',NULL,3200.00,512.00,0.00,3712.00,'','B1706B01055',1,1,NULL,NULL),(56,34,49,'2016-12-01 10:52:06',NULL,550.00,88.00,0.00,638.00,'','B1612B05056',1,1,NULL,NULL),(57,35,52,'2016-12-09 10:56:03',NULL,550.00,88.00,0.00,638.00,'','B1612B08057',1,1,NULL,NULL),(58,36,41,'2016-12-30 10:58:34',NULL,3200.00,512.00,0.00,3712.00,'','B1612D02058',1,1,NULL,NULL),(59,37,48,'2017-01-12 10:59:55',NULL,550.00,88.00,0.00,638.00,'','B1701B04059',1,1,NULL,NULL),(60,38,53,'2017-01-24 11:00:46',NULL,550.00,88.00,0.00,638.00,'','B1701B09060',1,1,NULL,NULL),(61,39,46,'2017-01-31 11:01:39',NULL,550.00,88.00,0.00,638.00,'','B1701A03061',1,1,NULL,NULL),(62,39,28,'2017-04-24 11:02:40',NULL,1250.00,200.00,0.00,1450.00,'','B1704C03062',1,1,NULL,NULL),(63,40,27,'2017-02-02 11:03:53',NULL,1250.00,200.00,0.00,1450.00,'','B1702C02063',1,0,NULL,NULL),(64,40,27,'2017-02-24 11:04:48',NULL,1250.00,200.00,0.00,1450.00,'','B1702C02064',1,1,NULL,NULL),(65,41,69,'2017-03-06 11:05:29',NULL,1250.00,200.00,0.00,1450.00,'','B1703B19065',1,1,NULL,NULL),(66,42,78,'2017-03-09 11:09:20',NULL,1000.00,160.00,0.00,1160.00,'','B1703C01066',1,1,NULL,NULL),(67,44,30,'2017-07-07 11:11:12',NULL,2200.00,352.00,0.00,2552.00,'','B1707C05067',1,1,NULL,NULL),(68,44,31,'2017-07-07 11:11:42',NULL,2200.00,352.00,0.00,2552.00,'','B1707C06068',1,1,NULL,NULL),(69,46,50,'2017-03-29 13:09:27',NULL,550.00,88.00,0.00,638.00,'','B1703B06069',1,1,NULL,NULL),(70,49,70,'2017-04-26 13:11:15',NULL,1250.00,200.00,0.00,1450.00,'','B1704B20070',1,1,NULL,NULL),(71,50,37,'2017-05-25 13:13:09',NULL,1250.00,200.00,0.00,1450.00,'','B1705C12071',1,1,NULL,NULL),(72,51,47,'2017-05-26 13:17:39',NULL,550.00,88.00,0.00,638.00,'','B1705B03072',1,1,NULL,NULL),(73,59,6,'2017-07-25 13:32:01',NULL,2200.00,352.00,0.00,2552.00,'','B1707A06073',1,0,NULL,NULL),(74,52,63,'2017-06-09 13:49:14',NULL,550.00,88.00,0.00,638.00,'','B1706B13074',1,0,NULL,NULL),(75,53,35,'2017-06-13 13:50:25',NULL,1250.00,200.00,0.00,1450.00,'','B1706C10075',1,1,NULL,NULL),(76,54,38,'2017-06-27 13:52:07',NULL,1250.00,200.00,0.00,1450.00,'','B1706C13076',1,1,NULL,NULL),(77,55,59,'2017-06-27 13:52:59',NULL,2200.00,352.00,0.00,2552.00,'','B1706A01077',1,1,NULL,NULL),(78,56,51,'2017-06-30 13:54:04',NULL,550.00,88.00,0.00,638.00,'','B1706B07078',1,1,NULL,NULL),(79,57,54,'2017-06-30 13:54:37',NULL,550.00,88.00,0.00,638.00,'','B1706B10079',1,1,NULL,NULL),(80,39,79,'2017-07-11 13:56:45',NULL,550.00,88.00,0.00,638.00,'','B1707D03080',1,1,NULL,NULL),(81,60,80,'2017-07-26 15:43:26',NULL,1250.00,200.00,0.00,1450.00,'','B1707D07081',1,0,NULL,NULL),(82,52,71,'2017-06-09 13:28:59',NULL,1250.00,200.00,0.00,1450.00,'','B1706B21082',1,1,NULL,NULL),(83,61,81,'2017-07-27 13:53:31','2017-07-27 13:55:15',550.00,88.00,0.00,638.00,'','B1707A04083',0,0,NULL,NULL),(84,62,95,'2017-06-09 16:24:58','2017-07-27 16:31:18',800.00,128.00,0.00,928.00,'','B1706X01084',0,0,NULL,NULL),(85,62,95,'2017-06-09 16:31:36',NULL,800.00,128.00,0.00,928.00,'','B1706X01085',1,1,NULL,NULL),(86,54,32,'2017-06-27 09:15:14',NULL,1250.00,200.00,0.00,1450.00,'','B1706C07086',1,1,NULL,NULL),(87,58,80,'2017-06-02 14:06:02',NULL,1250.00,200.00,0.00,1450.00,'','B1706D07087',1,1,NULL,NULL),(88,63,82,'2017-07-28 15:24:28',NULL,550.00,88.00,0.00,638.00,'','B1707A04088',1,0,NULL,NULL),(89,38,8,'2017-07-28 15:29:48',NULL,3200.00,512.00,0.00,3712.00,'','B1707A08089',1,1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentauthorization`
--

LOCK TABLES `rentauthorization` WRITE;
/*!40000 ALTER TABLE `rentauthorization` DISABLE KEYS */;
INSERT INTO `rentauthorization` VALUES (1,30,11,1,NULL,'2017-04-27 13:05:55'),(2,31,11,1,NULL,'2017-04-29 09:54:43'),(3,33,11,1,NULL,'2017-05-04 21:08:13'),(4,48,12,1,NULL,'2017-07-02 00:33:59'),(5,49,12,1,NULL,'2017-07-02 11:45:47'),(6,50,11,1,NULL,'2017-07-14 11:16:48'),(7,84,13,1,NULL,'2017-07-27 16:27:09'),(8,84,11,1,NULL,'2017-07-27 16:27:09'),(9,85,11,1,NULL,'2017-07-27 16:32:06'),(10,85,13,1,NULL,'2017-07-27 16:32:06'),(11,89,13,1,NULL,'2017-07-28 15:30:27'),(12,89,11,1,NULL,'2017-07-28 15:30:27'),(13,89,14,1,NULL,'2017-07-28 15:30:27');
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
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storageloker`
--

LOCK TABLES `storageloker` WRITE;
/*!40000 ALTER TABLE `storageloker` DISABLE KEYS */;
INSERT INTO `storageloker` VALUES (1,5,'A01',1,NULL,'2016-12-19 21:01:47'),(2,6,'A02',1,NULL,'2016-12-19 21:01:47'),(3,1,'A03',1,NULL,'2016-12-19 21:01:47'),(4,1,'A04',1,NULL,'2016-12-19 21:01:47'),(5,4,'A05',1,NULL,'2016-12-19 21:01:47'),(6,3,'A06',1,NULL,'2016-12-19 21:01:47'),(7,3,'A07',0,NULL,'2016-12-19 21:01:47'),(8,4,'A08',1,NULL,'2016-12-19 21:01:47'),(9,4,'A09',1,NULL,'2016-12-19 21:01:47'),(10,4,'A10',1,NULL,'2016-12-19 21:01:47'),(11,4,'A11',1,NULL,'2016-12-19 21:01:47'),(12,4,'B01',1,NULL,'2016-12-19 21:01:47'),(13,4,'B02',1,NULL,'2016-12-19 21:01:47'),(14,1,'B03',1,NULL,'2016-12-19 21:01:47'),(15,1,'B04',1,NULL,'2016-12-19 21:01:47'),(16,1,'B05',1,NULL,'2016-12-19 21:01:47'),(17,1,'B06',1,NULL,'2016-12-19 21:01:47'),(18,1,'B07',1,NULL,'2016-12-19 21:01:47'),(19,1,'B08',1,NULL,'2016-12-19 21:01:47'),(20,1,'B09',1,NULL,'2016-12-19 21:01:47'),(21,1,'B10',1,NULL,'2016-12-19 21:01:47'),(22,2,'B11',0,NULL,'2016-12-19 21:01:47'),(23,2,'B12',0,NULL,'2016-12-19 21:01:47'),(24,2,'B22',0,NULL,'2016-12-19 21:01:47'),(25,2,'B14',0,NULL,'2016-12-19 21:01:47'),(26,8,'C01',1,NULL,'2016-12-19 21:01:47'),(27,2,'C02',1,NULL,'2016-12-19 21:01:47'),(28,2,'C03',1,NULL,'2016-12-19 21:01:47'),(29,3,'C04',1,NULL,'2016-12-19 21:01:47'),(30,3,'C05',1,NULL,'2016-12-19 21:01:47'),(31,3,'C06',1,NULL,'2016-12-19 21:01:47'),(32,2,'C07',1,NULL,'2016-12-19 21:01:47'),(33,3,'C08',1,NULL,'2016-12-19 21:01:47'),(34,1,'C09',1,NULL,'2016-12-19 21:01:47'),(35,2,'C10',1,NULL,'2016-12-19 21:01:47'),(36,4,'C11',1,NULL,'2016-12-19 21:01:47'),(37,2,'C12',1,NULL,'2016-12-19 21:01:47'),(38,2,'C13',1,NULL,'2016-12-19 21:01:47'),(39,1,'C14',1,NULL,'2016-12-19 21:01:47'),(40,4,'D01',1,NULL,'2016-12-19 21:01:47'),(41,4,'D02',1,NULL,'2016-12-19 21:01:47'),(42,3,'D03',0,NULL,'2016-12-19 21:01:47'),(43,3,'D04',0,NULL,'2016-12-19 21:01:47'),(44,3,'D05',0,NULL,'2016-12-19 21:01:47'),(45,7,'A04',0,NULL,'2017-05-06 10:10:09'),(46,7,'A03',1,NULL,'2017-05-06 10:44:28'),(47,7,'B03',1,NULL,'2017-05-06 10:44:39'),(48,7,'B04',1,NULL,'2017-05-06 10:44:50'),(49,7,'B05',1,NULL,'2017-05-06 10:44:56'),(50,7,'B06',1,NULL,'2017-05-06 10:45:01'),(51,7,'B07',1,NULL,'2017-05-06 10:45:09'),(52,7,'B08',1,NULL,'2017-05-06 10:45:15'),(53,7,'B09',1,NULL,'2017-05-06 10:45:21'),(54,7,'B10',1,NULL,'2017-05-06 10:45:27'),(55,7,'C09',1,NULL,'2017-05-06 10:45:37'),(56,7,'C14',0,NULL,'2017-05-06 10:45:43'),(57,9,'C0506',0,NULL,'2017-05-20 12:50:43'),(58,9,'W01',0,NULL,'2017-07-02 00:31:40'),(59,3,'A01',1,NULL,'2017-07-14 12:06:08'),(60,3,'A02',1,NULL,'2017-07-14 12:08:04'),(61,7,'B11',1,NULL,'2017-07-14 12:14:47'),(62,7,'B12',1,NULL,'2017-07-14 12:14:59'),(63,7,'B13',1,NULL,'2017-07-14 12:15:08'),(64,7,'B14',1,NULL,'2017-07-14 12:15:23'),(65,7,'B15',1,NULL,'2017-07-14 12:15:31'),(66,7,'B16',1,NULL,'2017-07-14 12:15:45'),(67,7,'B17',1,NULL,'2017-07-14 12:15:54'),(68,7,'B18',1,NULL,'2017-07-14 12:16:04'),(69,2,'B19',1,NULL,'2017-07-14 12:16:39'),(70,2,'B20',1,NULL,'2017-07-14 12:16:48'),(71,2,'B21',1,NULL,'2017-07-14 12:16:59'),(72,2,'B22',0,NULL,'2017-07-14 12:17:10'),(73,7,'A03',0,NULL,'2017-07-14 12:25:46'),(74,7,'A04',0,NULL,'2017-07-14 12:25:52'),(75,2,'D13',1,NULL,'2017-07-17 12:26:46'),(76,2,'D12',1,NULL,'2017-07-21 13:36:38'),(77,4,'B02',0,NULL,'2017-07-24 09:57:49'),(78,11,'C01',1,NULL,'2017-07-24 11:09:17'),(79,7,'D03',1,NULL,'2017-07-25 13:56:42'),(80,2,'D07',1,NULL,'2017-07-26 15:43:23'),(81,7,'A04',0,NULL,'2017-07-27 13:49:59'),(82,7,'A04',1,NULL,'2017-07-27 13:59:19'),(83,12,'B22',1,NULL,'2017-07-27 14:03:56'),(84,7,'D04',1,NULL,'2017-07-27 14:06:09'),(85,7,'D05',1,NULL,'2017-07-27 14:06:24'),(86,7,'D06',1,NULL,'2017-07-27 14:06:37'),(87,2,'D08',1,NULL,'2017-07-27 14:06:58'),(88,7,'D09',1,NULL,'2017-07-27 14:07:11'),(89,7,'D10',1,NULL,'2017-07-27 14:07:25'),(90,7,'D11',1,NULL,'2017-07-27 14:07:36'),(91,2,'D14',1,NULL,'2017-07-27 14:08:06'),(92,3,'D15',1,NULL,'2017-07-27 14:08:18'),(93,3,'D16',1,NULL,'2017-07-27 14:08:30'),(94,3,'D17',1,NULL,'2017-07-27 14:08:41'),(95,14,'X01',1,NULL,'2017-07-27 16:23:37'),(96,3,'A07',1,NULL,'2017-07-28 15:18:49');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storagelokertype`
--

LOCK TABLES `storagelokertype` WRITE;
/*!40000 ALTER TABLE `storagelokertype` DISABLE KEYS */;
INSERT INTO `storagelokertype` VALUES (1,'MiniBodega','Medidas 1 x 3',550.00,'3mts²',0,NULL,'2016-12-19 20:26:29'),(2,'Chica','Medidas 2.4 x 3',1250.00,'7mts²',1,NULL,'2016-12-19 20:26:29'),(3,'Mediana','Medidas  2.9 x 3.7',2200.00,'11mts²',1,NULL,'2016-12-19 20:26:29'),(4,'Grande','Medidas 4 x 4',3200.00,'16mts²',1,NULL,'2016-12-19 20:26:29'),(5,'Especial','42mts²',0.00,NULL,0,NULL,'2017-01-21 13:17:18'),(6,'Especial',NULL,2563.00,NULL,0,NULL,'2017-01-21 13:34:59'),(7,'Minibodega','1 x 3',550.00,'3 mts²',1,NULL,'2017-05-06 09:40:16'),(8,'Especial CH 5mts²','Bodega Chica, tiene menos metros cuadrados',1000.00,'2.5 x 3',0,NULL,'2017-05-11 13:49:03'),(9,'Especial 22mts²','Mayor capacidad',4400.00,NULL,0,NULL,'2017-05-20 12:50:24'),(10,'1',NULL,2.00,'3 mts²',0,NULL,'2017-07-02 00:30:59'),(11,'Especial 5m','Bodega de',1000.00,'5 mts²',1,NULL,'2017-07-24 11:08:43'),(12,'Especial 13m','Bodega de',2600.00,'13 mts²',1,NULL,'2017-07-27 15:15:39'),(13,'Especial 4m','Medias 1.3X3',600.00,'4 mts²',1,NULL,'2017-07-27 16:09:05'),(14,'Ext','Espacio Libre, Sin bodega (Carros, Tarimas)',800.00,'Variaible',1,NULL,'2017-07-27 16:23:05');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Administrador','','admin','Gu4rdar@Todo',0,'users-1.svg',1),(11,'Valeria Natali','Perez Morales','Valeria','GT1234',0,'users-5.svg',1),(12,'Edilberto','Salazar','mosh','tool4',0,'users-10.svg',0),(13,'Carlos R.','Llamas','Llamas','12345',1,'users-10.svg',1),(14,'VXDV','SDVSD','Miguel','12345',1,'users-8.svg',1);
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

-- Dump completed on 2017-08-02 23:20:56
