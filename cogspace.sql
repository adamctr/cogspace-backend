-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 18 sep. 2024 à 13:43
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cogspace`
--

-- --------------------------------------------------------

--
-- Structure de la table `Categorie`
--

CREATE TABLE `Categorie` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(100) NOT NULL,
  `Description` text DEFAULT NULL,
  `CategorieParentID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Categorie`
--

INSERT INTO `Categorie` (`ID`, `Nom`, `Description`, `CategorieParentID`) VALUES
(1, 'Développement Web', 'Développement de sites et d’applications web', NULL),
(2, 'Frontend', 'Développement côté client', 1),
(3, 'HTML/CSS', 'Langages de balisage et de style pour le développement frontend', 2),
(4, 'JavaScript', 'Langage de programmation pour le développement frontend', 2),
(5, 'Frameworks', 'Frameworks pour le développement frontend', 2),
(6, 'React', 'Bibliothèque JavaScript pour créer des interfaces utilisateur', 4),
(7, 'Angular', 'Framework pour développer des applications web', 4),
(8, 'Vue', 'Framework JavaScript pour créer des interfaces utilisateur', 4),
(9, 'Backend', 'Développement côté serveur', 1),
(10, 'Serveurs', 'Serveurs pour le développement backend', 9),
(11, 'Node.js', 'Environnement d’exécution JavaScript côté serveur', 10),
(12, 'PHP', 'Langage de script pour le développement backend', 10),
(13, 'Python', 'Langage de programmation polyvalent pour le backend', 10),
(14, 'APIs', 'Interfaces de programmation pour les applications', 9),
(15, 'REST', 'Architecture de services web', 12),
(16, 'GraphQL', 'Langage de requêtes pour API', 12),
(17, 'Bases de données', 'Stockage et gestion des données', 9),
(18, 'SQL', 'Langage de requêtes pour bases de données relationnelles', 15),
(19, 'NoSQL', 'Bases de données non relationnelles', 15),
(20, 'Déploiement', 'Déploiement et gestion des applications', 1),
(21, 'Docker', 'Conteneurisation d’applications', 18),
(22, 'Kubernetes', 'Orchestration de conteneurs', 18),
(23, 'Serveurs web', 'Serveurs pour héberger des applications web', 18),
(24, 'Nginx', 'Serveur web et proxy', 21),
(25, 'Apache', 'Serveur web', 21),
(26, 'Intégration continue', 'Automatisation du déploiement', 18),
(27, 'CI/CD', 'Pratiques d’intégration et déploiement continus', 24),
(28, 'Sécurité', 'Pratiques pour assurer la sécurité des systèmes', NULL),
(29, 'Authentification et Autorisation', 'Gestion des accès et vérification d’identité', 25),
(30, 'OAuth2', 'Protocoles d’autorisation', 26),
(31, 'JWT', 'JSON Web Tokens pour l’authentification', 26),
(32, 'SSO', 'Authentification unique', 26),
(33, 'Sécurisation des Données', 'Protection des informations', 25),
(34, 'Cryptographie', 'Chiffrement des données', 30),
(35, 'SSL/TLS', 'Protocoles de sécurité pour les communications', 30),
(36, 'Sécurité des Applications', 'Protection des applications contre les attaques', 25),
(37, 'OWASP', 'Open Web Application Security Project', 34),
(38, 'XSS', 'Cross-Site Scripting', 34),
(39, 'CSRF', 'Cross-Site Request Forgery', 34),
(40, 'Tests de sécurité', 'Évaluation des vulnérabilités', 34),
(41, 'Pen Testing', 'Tests de pénétration pour identifier les failles', 38),
(42, 'Méthodologies de Développement', 'Approches pour le développement logiciel', NULL),
(43, 'Agile', 'Méthodes flexibles et itératives', 39),
(44, 'Scrum', 'Méthode Agile pour la gestion de projet', 40),
(45, 'Kanban', 'Méthode Agile pour la gestion des tâches', 40),
(46, 'DevOps', 'Méthodes pour l’intégration et le déploiement continu', 39),
(47, 'CI/CD', 'Pratiques d’intégration et déploiement continus', 43),
(48, 'Automatisation', 'Automatisation des processus', 43),
(49, 'Testing', 'Méthodes pour tester les logiciels', 39),
(50, 'Unit Testing', 'Tests unitaires pour les composants individuels', 48),
(51, 'Integration Testing', 'Tests d’intégration des composants', 48),
(52, 'Outils et Technologies', 'Outils et technologies pour le développement', NULL),
(53, 'Environnements de Développement', 'Outils pour le développement logiciel', 49),
(54, 'IDEs', 'Environnements de développement intégrés', 50),
(55, 'VSCode', 'Éditeur de code source', 51),
(56, 'IntelliJ', 'IDE pour le développement Java', 51),
(57, 'Outils de gestion de version', 'Gestion des versions du code', 49),
(58, 'Git', 'Système de contrôle de version', 55),
(59, 'GitHub', 'Plateforme de gestion de code source', 55),
(60, 'Outils de Productivité', 'Outils pour la gestion des projets', 49),
(61, 'Trello', 'Outil de gestion de tâches', 59),
(62, 'Notion', 'Outil de gestion de projets et de notes', 59),
(63, 'Conteneurs et Virtualisation', 'Technologies pour la virtualisation', 49),
(64, 'Docker', 'Conteneurisation d’applications', 63),
(65, 'JavaScript', 'Langage de programmation pour le développement frontend', 2),
(66, 'Frameworks', 'Frameworks pour le développement frontend', 2),
(67, 'React', 'Bibliothèque JavaScript pour créer des interfaces utilisateur', 4),
(68, 'Angular', 'Framework pour développer des applications web', 4),
(69, 'Vue', 'Framework JavaScript pour créer des interfaces utilisateur', 4),
(70, 'Backend', 'Développement côté serveur', 1),
(71, 'Serveurs', 'Serveurs pour le développement backend', 9),
(72, 'Node.js', 'Environnement d’exécution JavaScript côté serveur', 10),
(73, 'PHP', 'Langage de script pour le développement backend', 10),
(74, 'Python', 'Langage de programmation polyvalent pour le backend', 10),
(75, 'APIs', 'Interfaces de programmation pour les applications', 9),
(76, 'REST', 'Architecture de services web', 12),
(77, 'GraphQL', 'Langage de requêtes pour API', 12),
(78, 'Bases de données', 'Stockage et gestion des données', 9),
(79, 'SQL', 'Langage de requêtes pour bases de données relationnelles', 15),
(80, 'NoSQL', 'Bases de données non relationnelles', 15),
(81, 'Déploiement', 'Déploiement et gestion des applications', 1),
(82, 'Docker', 'Conteneurisation d’applications', 18),
(83, 'Kubernetes', 'Orchestration de conteneurs', 18),
(84, 'Serveurs web', 'Serveurs pour héberger des applications web', 18),
(85, 'Nginx', 'Serveur web et proxy', 21),
(86, 'Apache', 'Serveur web', 21),
(87, 'Intégration continue', 'Automatisation du déploiement', 18),
(88, 'CI/CD', 'Pratiques d’intégration et déploiement continus', 24),
(89, 'Sécurité', 'Pratiques pour assurer la sécurité des systèmes', NULL),
(90, 'Authentification et Autorisation', 'Gestion des accès et vérification d’identité', 25),
(91, 'OAuth2', 'Protocoles d’autorisation', 26),
(92, 'JWT', 'JSON Web Tokens pour l’authentification', 26),
(93, 'SSO', 'Authentification unique', 26),
(94, 'Sécurisation des Données', 'Protection des informations', 25),
(95, 'Cryptographie', 'Chiffrement des données', 30),
(96, 'SSL/TLS', 'Protocoles de sécurité pour les communications', 30),
(97, 'Sécurité des Applications', 'Protection des applications contre les attaques', 25),
(98, 'OWASP', 'Open Web Application Security Project', 34),
(99, 'XSS', 'Cross-Site Scripting', 34),
(100, 'CSRF', 'Cross-Site Request Forgery', 34),
(101, 'Tests de sécurité', 'Évaluation des vulnérabilités', 34),
(102, 'Pen Testing', 'Tests de pénétration pour identifier les failles', 38),
(103, 'Méthodologies de Développement', 'Approches pour le développement logiciel', NULL),
(104, 'Agile', 'Méthodes flexibles et itératives', 39),
(105, 'Scrum', 'Méthode Agile pour la gestion de projet', 40),
(106, 'Kanban', 'Méthode Agile pour la gestion des tâches', 40),
(107, 'DevOps', 'Méthodes pour l’intégration et le déploiement continu', 39),
(108, 'CI/CD', 'Pratiques d’intégration et déploiement continus', 43),
(109, 'Automatisation', 'Automatisation des processus', 43),
(110, 'Testing', 'Méthodes pour tester les logiciels', 39),
(111, 'Unit Testing', 'Tests unitaires pour les composants individuels', 48),
(112, 'Integration Testing', 'Tests d’intégration des composants', 48),
(113, 'Outils et Technologies', 'Outils et technologies pour le développement', NULL),
(114, 'Environnements de Développement', 'Outils pour le développement logiciel', 49),
(115, 'IDEs', 'Environnements de développement intégrés', 50),
(116, 'VSCode', 'Éditeur de code source', 51),
(117, 'IntelliJ', 'IDE pour le développement Java', 51),
(118, 'Outils de gestion de version', 'Gestion des versions du code', 49),
(119, 'Git', 'Système de contrôle de version', 55),
(120, 'GitHub', 'Plateforme de gestion de code source', 55),
(121, 'Outils de Productivité', 'Outils pour la gestion des projets', 49),
(122, 'Trello', 'Outil de gestion de tâches', 59),
(123, 'Notion', 'Outil de gestion de projets et de notes', 59),
(124, 'Conteneurs et Virtualisation', 'Technologies pour la virtualisation', 49),
(125, 'Docker', 'Conteneurisation d’applications', 63),
(126, 'VirtualBox', 'Virtualisation de systèmes', 63);

-- --------------------------------------------------------

--
-- Structure de la table `Categorie_Fiche`
--

CREATE TABLE `Categorie_Fiche` (
  `ID` int(11) NOT NULL,
  `FicheID` int(11) DEFAULT NULL,
  `CategorieID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Commentaires`
--

CREATE TABLE `Commentaires` (
  `ID` int(11) NOT NULL,
  `Contenu` text NOT NULL,
  `Position` int(11) DEFAULT NULL,
  `AuteurID` int(11) DEFAULT NULL,
  `FicheID` int(11) DEFAULT NULL,
  `DatePublication` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Fiche`
--

CREATE TABLE `Fiche` (
  `ID` int(11) NOT NULL,
  `Titre` varchar(255) NOT NULL,
  `Contenu` text NOT NULL,
  `UtilisateurID` int(11) DEFAULT NULL,
  `CategorieID` int(11) DEFAULT NULL,
  `DateCreation` datetime NOT NULL DEFAULT current_timestamp(),
  `DateModification` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `FicheNoteMoyenne` float DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Liens`
--

CREATE TABLE `Liens` (
  `ID` int(11) NOT NULL,
  `SourceID` int(11) DEFAULT NULL,
  `CibleID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Lien_Fiche`
--

CREATE TABLE `Lien_Fiche` (
  `ID` int(11) NOT NULL,
  `SourceID` int(11) DEFAULT NULL,
  `CibleID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Permission`
--

CREATE TABLE `Permission` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(100) NOT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Permission`
--

INSERT INTO `Permission` (`ID`, `Nom`, `Description`) VALUES
(1, 'Créer une fiche', 'Autorisation de créer de nouvelles fiches dans la base de connaissances'),
(2, 'Modifier une fiche', 'Autorisation de modifier les fiches existantes'),
(3, 'Supprimer une fiche', 'Autorisation de supprimer des fiches'),
(4, 'Ajouter un commentaire', 'Autorisation d’ajouter des commentaires aux fiches'),
(5, 'Modifier un commentaire', 'Autorisation de modifier les commentaires existants'),
(6, 'Supprimer un commentaire', 'Autorisation de supprimer des commentaires'),
(7, 'Voir les fiches', 'Autorisation de consulter les fiches dans la base de connaissances'),
(8, 'Noter une fiche', 'Autorisation de donner une note aux fiches'),
(9, 'Créer une catégorie', 'Autorisation de créer de nouvelles catégories'),
(10, 'Modifier une catégorie', 'Autorisation de modifier les catégories existantes'),
(11, 'Supprimer une catégorie', 'Autorisation de supprimer des catégories'),
(12, 'Gérer les rôles', 'Autorisation de créer, modifier ou supprimer des rôles'),
(13, 'Gérer les permissions', 'Autorisation de créer, modifier ou supprimer des permissions'),
(14, 'Gérer les utilisateurs', 'Autorisation de créer, modifier ou supprimer des utilisateurs'),
(15, 'Voir les utilisateurs', 'Autorisation de consulter les informations des utilisateurs');

-- --------------------------------------------------------

--
-- Structure de la table `Role`
--

CREATE TABLE `Role` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Role`
--

INSERT INTO `Role` (`ID`, `Nom`) VALUES
(2, 'Administrateur'),
(4, 'Invité'),
(1, 'Modérateur'),
(3, 'Utilisateur');

-- --------------------------------------------------------

--
-- Structure de la table `Role_Permission`
--

CREATE TABLE `Role_Permission` (
  `RoleID` int(11) NOT NULL,
  `PermissionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Role_Utilisateur`
--

CREATE TABLE `Role_Utilisateur` (
  `UtilisateurID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateurs`
--

CREATE TABLE `Utilisateurs` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(100) NOT NULL,
  `Prenom` varchar(100) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `MotDePasse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur_Fiche_Notes`
--

CREATE TABLE `Utilisateur_Fiche_Notes` (
  `ID` int(11) NOT NULL,
  `FicheID` int(11) DEFAULT NULL,
  `UtilisateurID` int(11) DEFAULT NULL,
  `Note` int(11) DEFAULT NULL CHECK (`Note` >= 0 and `Note` <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Categorie`
--
ALTER TABLE `Categorie`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CategorieParentID` (`CategorieParentID`);

--
-- Index pour la table `Categorie_Fiche`
--
ALTER TABLE `Categorie_Fiche`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FicheID` (`FicheID`),
  ADD KEY `CategorieID` (`CategorieID`);

--
-- Index pour la table `Commentaires`
--
ALTER TABLE `Commentaires`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AuteurID` (`AuteurID`),
  ADD KEY `FicheID` (`FicheID`);

--
-- Index pour la table `Fiche`
--
ALTER TABLE `Fiche`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UtilisateurID` (`UtilisateurID`),
  ADD KEY `CategorieID` (`CategorieID`);

--
-- Index pour la table `Liens`
--
ALTER TABLE `Liens`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SourceID` (`SourceID`),
  ADD KEY `CibleID` (`CibleID`);

--
-- Index pour la table `Lien_Fiche`
--
ALTER TABLE `Lien_Fiche`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SourceID` (`SourceID`),
  ADD KEY `CibleID` (`CibleID`);

--
-- Index pour la table `Permission`
--
ALTER TABLE `Permission`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Nom` (`Nom`);

--
-- Index pour la table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Nom` (`Nom`);

--
-- Index pour la table `Role_Permission`
--
ALTER TABLE `Role_Permission`
  ADD PRIMARY KEY (`RoleID`,`PermissionID`),
  ADD KEY `PermissionID` (`PermissionID`);

--
-- Index pour la table `Role_Utilisateur`
--
ALTER TABLE `Role_Utilisateur`
  ADD PRIMARY KEY (`UtilisateurID`,`RoleID`),
  ADD KEY `RoleID` (`RoleID`);

--
-- Index pour la table `Utilisateurs`
--
ALTER TABLE `Utilisateurs`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Index pour la table `Utilisateur_Fiche_Notes`
--
ALTER TABLE `Utilisateur_Fiche_Notes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FicheID` (`FicheID`),
  ADD KEY `UtilisateurID` (`UtilisateurID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Categorie`
--
ALTER TABLE `Categorie`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT pour la table `Categorie_Fiche`
--
ALTER TABLE `Categorie_Fiche`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Commentaires`
--
ALTER TABLE `Commentaires`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Fiche`
--
ALTER TABLE `Fiche`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Liens`
--
ALTER TABLE `Liens`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Lien_Fiche`
--
ALTER TABLE `Lien_Fiche`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Permission`
--
ALTER TABLE `Permission`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `Role`
--
ALTER TABLE `Role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Utilisateurs`
--
ALTER TABLE `Utilisateurs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Utilisateur_Fiche_Notes`
--
ALTER TABLE `Utilisateur_Fiche_Notes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Categorie`
--
ALTER TABLE `Categorie`
  ADD CONSTRAINT `categorie_ibfk_1` FOREIGN KEY (`CategorieParentID`) REFERENCES `Categorie` (`ID`) ON DELETE SET NULL;

--
-- Contraintes pour la table `Categorie_Fiche`
--
ALTER TABLE `Categorie_Fiche`
  ADD CONSTRAINT `categorie_fiche_ibfk_1` FOREIGN KEY (`FicheID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `categorie_fiche_ibfk_2` FOREIGN KEY (`CategorieID`) REFERENCES `Categorie` (`ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Commentaires`
--
ALTER TABLE `Commentaires`
  ADD CONSTRAINT `commentaires_ibfk_1` FOREIGN KEY (`AuteurID`) REFERENCES `Utilisateurs` (`ID`) ON DELETE SET NULL,
  ADD CONSTRAINT `commentaires_ibfk_2` FOREIGN KEY (`FicheID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Fiche`
--
ALTER TABLE `Fiche`
  ADD CONSTRAINT `fiche_ibfk_1` FOREIGN KEY (`UtilisateurID`) REFERENCES `Utilisateurs` (`ID`) ON DELETE SET NULL,
  ADD CONSTRAINT `fiche_ibfk_2` FOREIGN KEY (`CategorieID`) REFERENCES `Categorie` (`ID`) ON DELETE SET NULL;

--
-- Contraintes pour la table `Liens`
--
ALTER TABLE `Liens`
  ADD CONSTRAINT `liens_ibfk_1` FOREIGN KEY (`SourceID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `liens_ibfk_2` FOREIGN KEY (`CibleID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Lien_Fiche`
--
ALTER TABLE `Lien_Fiche`
  ADD CONSTRAINT `lien_fiche_ibfk_1` FOREIGN KEY (`SourceID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `lien_fiche_ibfk_2` FOREIGN KEY (`CibleID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Role_Permission`
--
ALTER TABLE `Role_Permission`
  ADD CONSTRAINT `role_permission_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `Role` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_permission_ibfk_2` FOREIGN KEY (`PermissionID`) REFERENCES `Permission` (`ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Role_Utilisateur`
--
ALTER TABLE `Role_Utilisateur`
  ADD CONSTRAINT `role_utilisateur_ibfk_1` FOREIGN KEY (`UtilisateurID`) REFERENCES `Utilisateurs` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_utilisateur_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `Role` (`ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Utilisateur_Fiche_Notes`
--
ALTER TABLE `Utilisateur_Fiche_Notes`
  ADD CONSTRAINT `utilisateur_fiche_notes_ibfk_1` FOREIGN KEY (`FicheID`) REFERENCES `Fiche` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `utilisateur_fiche_notes_ibfk_2` FOREIGN KEY (`UtilisateurID`) REFERENCES `Utilisateurs` (`ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
