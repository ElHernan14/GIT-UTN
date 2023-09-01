-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-09-2023 a las 22:39:03
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

DROP TABLE IF EXISTS `contactos`;
CREATE TABLE IF NOT EXISTS `contactos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `comentario` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `img_id` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `nombre`, `email`, `comentario`, `img_id`) VALUES
(29, 'Hernán Constante', 'hernanbonne98@gmail.com', 'Este comentario está en vivo, saludos profe!', 'jjqygxgnnnv6jqqhoix2'),
(21, 'Agricultura', 'hconstante@runaid.com.ar', 'asdasdasd', 'jckksddqvhjekpim2s9e'),
(22, 'asdasdasd', 'hernanbonne98@gmail.com', 'asdasdasd', 's8bha7qy8i1nxapykfta'),
(23, 'Hernán Constante', 'hernanbonne98@gmail.com', 'asdasdasd', 'ejdxoqugbholsr2sosmt'),
(24, 'asdasdasd', 'hernanbonne98@gmail.com', 'asdasdasd', 'zlz875duv6xoqbp4jzoq'),
(25, 'Hernán Constante', 'hernanbonne98@gmail.com', 'asdasdasd', 'oyrrdvevuvh9b738rkwg'),
(26, 'Sector Ganadero', 'hernanbonne98@gmail.com', 'asdasdasd', 'shgeq0w6r3f9fweilxux'),
(27, 'Hernán Constante', 'hconstante@runaid.com.ar', 'asdasdasda', 'v98eask4mhf3q7jxw29s'),
(28, 'Gonzalo14', 'hernanbonne98@gmail.com', 'Este es un comentario que quería agregar para enviarme un correo.', 'ermbpoczennbe0mwp8bh');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE IF NOT EXISTS `peliculas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `sinopsis` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `reparto` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `director` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `año` int NOT NULL,
  `genero` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `calificacion` float NOT NULL,
  `img_id` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `link` varchar(500) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `sinopsis`, `reparto`, `director`, `año`, `genero`, `calificacion`, `img_id`, `link`) VALUES
(1, 'Drácula: Mar de sangre ( 2023 )', 'Basado en un solo capítulo, el Captain\'s Log, de la clásica novela Drácula de 1897 de Bram Stoker, la historia se desarrolla a bordo de la goleta rusa Demeter, que fue fletada para transportar carga privada (veinticuatro cajas de madera sin marcar) desde Carpatia a Londres. La película detallará los extraños eventos que acontecieron a la tripulación condenada mientras intentan sobrevivir al viaje por el océano, acechados cada noche por una aterradora presencia a bordo del barco. Cuando finalmente llegó cerca del puerto de Whitby, estaba totalmente en ruinas. No había rastro de la tripulación.', 'Corey Hawkins, Aisling Franciosi, Liam Cunningham, David Dastmalchian, Chris Walley, Jon Jon Briones, Stefan Kapičić, Martin Furulund, Nikolai Nikolaeff, Woody Norman, Javier Botet, Graham Turner, Andy Murray, Nicolo Pasetti, Christopher York', 'Guillermo del Toro', 2023, 'Terror, Fantasía', 7, 'wtuzsbdllx7xvttbujus', 'https://www.youtube.com/embed/r_OLH6pU-EM'),
(2, 'Megalodón 2: El gran abismo ( 2023 )', 'Un equipo de investigación inicia una misión que va a explorar las profundidades más abismales del mar. Pero su viaje se convierte en caos cuando un malévolo operativo minero amenaza su misión y los obliga a librar una batalla de alto riesgo por la supervivencia. Enfrentados a colosales Megalodones y a implacables saqueadores medioambientales, nuestros héroes deben correr más rápido, ser más astutos y nadar a mayor velocidad que sus despiadados depredadores en una trepidante carrera contra el tiempo.', 'Jason Statham, Wu Jing, Shuya Sophia Cai, Sergio Peris-Mencheta, Skyler Samuels, Cliff Curtis, Page Kennedy, Sienna Guillory, Melissanthi Mahut, Kiran Sonia Sawar, Felix Mayr, Whoopie van Raam, Guo Tao, Dai Lele, Sui Fong Ivy Tsui', 'Ben Wheatley', 2023, 'Acción, Ciencia ficción, Terror', 7, 'yibea1tlgudytp1psod1', 'https://www.youtube.com/embed/7wuK5PhzcNY'),
(3, 'Oppenheimer ( 2023 ) ', 'Película sobre el físico J. Robert Oppenheimer y su papel como desarrollador de la bomba atómica. Basada en el libro \'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer\' de Kai Bird y Martin J. Sherwin.', 'Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Josh Hartnett, Casey Affleck, Rami Malek, Kenneth Branagh, Jason Clarke, Dylan Arnold, Tom Conti, James D\'Arcy, David Dastmalchian, Dane DeHaan.', 'Christopher Nolan', 2023, 'Drama, Historia', 8.5, 'nwugymujawk3rwhklpys', 'https://www.youtube.com/embed/MVvGSBKV504'),
(4, 'Flash ( 2023 ) ', 'Cuando su intento de salvar a su familia altera el futuro sin darse cuenta, Barry Allen queda atrapado en una realidad en la que el general Zod ha regresado y no hay superhéroes a los que recurrir. En última instancia, para salvar el mundo en el que se encuentra y regresar al futuro que conoce, la única esperanza de Barry es escapar de él para salvar su vida. Pero, ¿será suficiente hacer el último sacrificio para reiniciar el universo?', 'Ezra Miller, Sasha Calle, Michael Keaton, Michael Shannon, Ron Livingston, Maribel Verdú, Kiersey Clemons, Antje Traue, Saoirse-Monica Jackson, Rudy Mancuso, Ed Wade, Jeremy Irons, Temuera Morrison, Sanjeev Bhaskar, Sean Rogers', 'Andy Muschietti, James Gunn', 2023, 'Acción, Aventura, Ciencia ficción', 7, 'iamrlqildnrkp348tf0r', 'https://www.youtube.com/embed/LmC5pxr9JZY'),
(5, 'Rápidos y furiosos X ( 2023 ) ', 'A través de varias misiones y contra lo imposible, Dom Toretto y su familia han sido más astutos y más rápidos que todos los enemigos se le han cruzado en su camino. Ahora se enfrentan a su enemigo más letal: una amenaza aterradora que surge de las sombras del pasado que está alimentado de una venganza sangrienta, y está decidido a destruir a su familia y destruir todo, y a cualquier persona, a los que Dom ama.', 'Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Jason Momoa, Scott Eastwood, Daniela Melchior, Alan Ritchson, Helen Mirren, Brie Larson, Jason Statham', 'Justin Lin', 2023, 'Acción, Crimen, Suspenso', 7.5, 'ebjnwja3nte97ijtgkk3', 'https://www.youtube.com/embed/DJWwk68t3Bs'),
(6, 'Spider-Man: A través del Spider-Verso', 'Después de reunirse con Gwen Stacy, Miles Morales, el amigable Spider-Man del vecindario de tiempo completo de Brooklyn, es catapultado a través del Multiverso, donde se encuentra con un equipo de Spider-People encargado de proteger su existencia. Pero cuando los héroes chocan sobre cómo manejar una nueva amenaza, Miles se enfrenta a las otras arañas y debe redefinir lo que significa ser un héroe para poder salvar a las personas que más ama.', 'Shameik Moore, Hailee Steinfeld, Jason Schwartzman, Oscar Isaac, Brian Tyree Henry, Luna Lauren Velez, Jake Johnson, Issa Rae, Karan Soni, Shea Whigham, Greta Lee, Amandla Stenberg, Jharrel Jerome, Andy Samberg, Jack Quaid', 'Lashana Rodriguez', 2023, 'Animación, Acción, Aventura', 8.5, 'imacosd95t92z0odk4yg', 'https://www.youtube.com/embed/oBmazlyP220'),
(7, 'Guardianes de la Galaxia volumen 3', 'Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en torno a él para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se lleva a cabo con éxito, podría suponer el fin de los Guardianes tal y como los conocemos.', 'Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Sean Gunn, Chukwudi Iwuji, Will Poulter, Maria Bakalova, Elizabeth Debicki, Sylvester Stallone, Austin Freeman, Stephen Blackehart', 'Elan Gale', 2023, 'Ciencia ficción, Aventura, Acción', 8, 'jlhmbwlbnghwpronpgrg', 'https://www.youtube.com/embed/nFYA2kdHy0s'),
(8, 'John Wick 4', 'John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.', 'Keanu Reeves, Donnie Yen, Bill Skarsgård, Ian McShane, Laurence Fishburne, Lance Reddick, Clancy Brown, Hiroyuki Sanada, Rina Sawayama, Scott Adkins, Aimée Kwan, Marko Zaror, Natalia Tena, Shamier Anderson, George Georgiou', 'Chad Stahelski', 2023, 'Acción, Suspenso, Crimen', 8, 'ina2rlsurlvkgshjpeke', 'https://www.youtube.com/embed/OkC_YaSFBHA'),
(9, 'Transformers: El despertar de las bestias', 'Una aventura alrededor del mundo con los Autobots que introducirá una nueva facción de Transformers - los Maximals - en la batalla existente en la Tierra entre Autobots y Decepticons.', 'Anthony Ramos, Dominique Fishback, Peter Cullen, Ron Perlman, Peter Dinklage, Michelle Yeoh, Pete Davidson, Liza Koshy, Cristo Fernández, Luna Lauren Velez, Dean Scott Vazquez, Tobe Nwigwe, Sarah Stiles, Leni Parker, Frank Marrs', 'Steven Spielberg', 2023, 'Acción, Aventura, Ciencia ficción', 7.5, 'xrebzpfx6jcnwafonddp', 'https://www.youtube.com/embed/v0d0id78XdE'),
(10, 'Insidious: La puerta roja ', 'Para enterrar sus demonios de una vez por todas, Josh Lambert y un ya universitario Dalton Lambert, deberán profundizar en El Mas Allá (The Further) más que nunca, enfrentándose al oscuro pasado familiar y a un huésped de nuevos horrores terroríficos que acechan tras la puerta roja.', 'Ty Simpkins, Patrick Wilson, Rose Byrne, Sinclair Daniel, Hiam Abbass, Andrew Astor, Lin Shaye, Steve Coulter, Juliana Davies, Peter Dager, Joseph Bishara, David Call, Justin Sturgis, Angus Sampson, Leigh Whannell, Mary Looram, Jaylin Loveday, AJ Dyer, Tom Toland, Jarquez McClendon ', 'Patrick Wilson', 2023, 'Misterio Terror Thriller ', 7, 'nqkq0pkopzjsvkbybdkn', 'https://www.youtube.com/embed/ujpQGz3MBfU'),
(11, 'The Machine', 'El pasado borracho de Bert lo alcanza 20 años después cuando él y su padre son secuestrados por aquellos a quienes Bert agravió hace 20 años mientras estaba borracho en un semestre universitario en el extranjero en Rusia.', 'Bert Kreischer, Mark Hamill, Jimmy Tatro, Stephanie Kurtzuba, Nikola Đuričko, Iva Babić, Martyn Ford, Robert Maaser, Jessica Gabor, Rita Bernard-Shaw, Oleg Taktarov, Amelie Child-Villiers, Aleksandar Srećković \'Kubura\', Jovan Savić, Marko Nedeljković, Set Sjöstrand, Mercedes De La Cruz, Vladimir Gvojić, Aleksandar Dragutinovic, Đorđe Simić ', 'Peter Atencio', 2023, 'Accion Comedia Crimen ', 7, 'rw7la8ip9sc5ki40k8po', 'https://www.youtube.com/embed/AwDKLEaJxMk'),
(12, 'El Pacto (The Covenant) ', 'Después de una emboscada, el intérprete afgano Ahmed hace todo lo posible para salvar la vida del sargento del ejército estadounidense John Kinley. Cuando Kinley se entera de que a Ahmed y su familia no se les dio un pasaje seguro a Estados Unidos como prometieron, debe pagar su deuda regresando a la zona de guerra para recuperarlos antes de que los talibanes los persigan.', 'Jake Gyllenhaal, Dar Salim, Antony Starr, Alexander Ludwig, Jonny Lee Miller, Emily Beecham, Jason Wong, Bobby Schofield, Sina Parvaneh, Sean Sagar, James Nelson-Joyce, Reza Diako, Abbas Fasaei, Swen Temmel, Rhys Yates, Ash Goldeh, Christian Ochoa Lavernia, Marcel Zadé, Hadi Khanjanpour, Gary Anthony Stennette ', 'Guy Ritchieeee', 2023, 'Accion Drama Belica ', 7.5, 'p3hwf7stj8bedlfpqyra', 'https://www.youtube.com/embed/FjvuUeo6cSg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'hernan', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
