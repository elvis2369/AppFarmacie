-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: farmacie
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `medicament`
--

DROP TABLE IF EXISTS `medicament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicament` (
  `Medicament_ID` int NOT NULL,
  `Nume` varchar(45) NOT NULL,
  `Gramaj` varchar(45) NOT NULL,
  `Stoc` int NOT NULL,
  `Forma_pastila` varchar(45) DEFAULT NULL,
  `Descriere` varchar(45) DEFAULT NULL,
  `Lot` varchar(45) DEFAULT NULL,
  `Data_expirare` datetime NOT NULL,
  PRIMARY KEY (`Medicament_ID`),
  UNIQUE KEY `Nume_UNIQUE` (`Nume`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicament`
--

LOCK TABLES `medicament` WRITE;
/*!40000 ALTER TABLE `medicament` DISABLE KEYS */;
INSERT INTO `medicament` VALUES (1,'Xanax','26',6,'Capsula',NULL,'120','2029-01-01 00:00:00'),(2,'Para','134',4,'Cub',NULL,'11','2024-01-01 00:00:00'),(3,'Dove','12',100,'Cub','NULL','NULL','2025-01-01 00:00:00'),(4,'Dovel','13',100,'Cup','NULL','NULL','2024-01-01 00:00:00'),(5,'Nivea','14',100,'Cup','NULL','NULL','2024-02-01 00:00:00'),(6,'Colgate','75g',15,'Cilindru','Pasta de dinti','100','2024-02-02 00:00:00'),(7,'Parodontax','75g',15,'Cilindru','Pasta de dinti','100','2024-02-02 00:00:00'),(8,'Parodontax1','75g',15,'Cilindru','Pasta de dinti','100','2024-02-02 00:00:00'),(9,'Parodontax2','75g',15,'Cilindru','Pasta de dinti','100','2024-02-02 00:00:00'),(10,'Paracetamoll','75g',15,'Cilindru','Pasta de dinti','100','2024-02-02 00:00:00');
/*!40000 ALTER TABLE `medicament` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-26 21:11:04
