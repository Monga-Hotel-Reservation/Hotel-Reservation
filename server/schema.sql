-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';



-- -----------------------------------------------------
-- Schema hotel
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hotel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `hotel` ;

-- -----------------------------------------------------
-- Table `hotel`.`rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hotel`.`rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` ENUM('Single', 'Double', 'Triple', 'Family Room') NOT NULL DEFAULT 'Single',
  `meals` ENUM('Bed and Breakfast', 'Half board', 'All inclusives') NOT NULL DEFAULT 'Bed and Breakfast',
  `price` INT NOT NULL,
  `name` LONGTEXT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hotel`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hotel`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imgURL` VARCHAR(255) NOT NULL,
  `rooms_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_table1_rooms1_idx` (`rooms_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_rooms1`
    FOREIGN KEY (`rooms_id`)
    REFERENCES `hotel`.`rooms` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hotel`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hotel`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hotel`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hotel`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `rooms_id` INT NOT NULL,
  `CheckIn` DATETIME NOT NULL,
  `CheckOut` DATETIME NOT NULL,
  `Total` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservation_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_reservation_rooms1_idx` (`rooms_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_rooms1`
    FOREIGN KEY (`rooms_id`)
    REFERENCES `hotel`.`rooms` (`id`),
  CONSTRAINT `fk_reservation_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `hotel`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
