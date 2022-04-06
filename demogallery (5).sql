-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2022 at 07:16 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demogallery`
--

-- --------------------------------------------------------

--
-- Table structure for table `finalprojects`
--

CREATE TABLE `finalprojects` (
  `id` bigint(20) NOT NULL,
  `project_name` text NOT NULL,
  `project_category` varchar(255) NOT NULL,
  `project_field` varchar(255) NOT NULL,
  `project_description` text NOT NULL,
  `project_image` text NOT NULL,
  `project_abstract` text NOT NULL,
  `project_problem_statement` text NOT NULL,
  `project_methodology` text NOT NULL,
  `project_objective` text NOT NULL,
  `project_results` text NOT NULL,
  `project_references` text NOT NULL,
  `project_year` bigint(20) NOT NULL,
  `project_achivements` text NOT NULL,
  `project_members` text NOT NULL,
  `project_created_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finalprojects`
--

INSERT INTO `finalprojects` (`id`, `project_name`, `project_category`, `project_field`, `project_description`, `project_image`, `project_abstract`, `project_problem_statement`, `project_methodology`, `project_objective`, `project_results`, `project_references`, `project_year`, `project_achivements`, `project_members`, `project_created_at`) VALUES
(67, 'SECURITY GUIDANCE USING VIRTUAL ', 'mini-project', '', 'The field of artificial and computational intelligence in security has seen major\r\nadvancements and several success stories in the roughly 10 years it has existed as a separate research field. Research into virtual environments on the one hand and\r\nartificial intelligence and artificial life on the other has largely been carried out by\r\ntwo different groups of people with different preoccupations and interests, but some convergence is now apparent between the two fields. Applications in which\r\nactivity independent of the user takes place — involving crowds or other agents are beginning to be tackled, while synthetic agents, virtual humans and computer\r\npets are all areas in which techniques from the two fields require strong\r\nintegration. The two communities have much to learn from each other if wheels are not to be reinvented on both sides. The issues arising from combining artificial\r\nintelligence and artificial life techniques with those of virtual environments to\r\nproduce just such intelligent virtual environments. The discussion which include\r\nenvironments providing knowledge to direct or assist the user rather than relying\r\nentirely on the user’s knowledge and skills, those in which the user is represented\r\nby a partially autonomous avatar, those containing intelligent agents separate\r\nfrom the user, and many others from both sides of the area. ', 'https://i.imgur.com/CuRBYMx.jpeg', 'Here we discuss about giving a high-level overview of the field of artificial and\r\ncomputational intelligence (AI/CI) in security, with particular reference to how the\r\ndifferent core research areas within this field inform and interact with each other,\r\nboth actually and potentially. In a period when niche areas of cutting-edge\r\ntechnological research are capturing the public imagination and moving out of the\r\nlaboratory into everyday life, there is a broad impetus that can be one of the key\r\ningredients in a recipe for dramatic progress. Indeed, the vision of exciting\r\napplications can be regarded as a driving force behind the premise of this paper\r\nthat a convergence has begun to take place between branches of advanced\r\ncomputing and research communities which, until recently, were quite separate — namely Artificial Intelligence (AI), Artificial Life (AL) and Virtual Reality (VR), or, as it is sometimes now known, Virtual Environments (VE). This combination of\r\nintelligent techniques and tools, embodied in autonomous creatures and agents,\r\ntogether with effective means for their graphical representation and interaction of\r\nvarious kinds, has given rise to a new area at their meeting point, which we call\r\nintelligent virtual environments.', ' ', 'User enters Username &amp; Password.\r\nDepending on the kind of the user (Visitor &amp;\r\nEmployee), two different views are shown.\r\nVideo starts playing in 360 Player. For VR View click\r\nthe goggles icon ()\r\nThe user can swipe through different fragments', 'User enters Username &amp; Password.\r\nDepending on the kind of the user (Visitor &amp;\r\nEmployee), two different views are shown.\r\nVideo starts playing in 360 Player. For VR View click\r\nthe goggles icon ()\r\nThe user can swipe through different fragments', ' ', '1) SIMULATION MODELING WITH ARTIFICIAL REALITY\r\nTECHNOLOGY (SMART): AN INTEGRATION OF aVIRTUAL REALITY\r\nANI) SIMULATION MODELING Hank Grant and Chuen-Ki Lai,\r\nProceedings of the I998 Winter Simulation Conference\r\n2) Research on Chinese Museum Design based on Virtual Reality\r\nLIU Xia and QIAO Jiangang, 2008 International Workshop on Modelling, Simulation and Optimization', 2017, ' ', 'CHINMAY AYEER BE-4 ROLLN0-2,\r\nTEJAS DESHPANDE BE-4 ROLLNO-8,\r\nAISHWARYA IYER BE-3 ROLLNO-62,\r\nJAY CHHEDA BE-3 ROLLNO,,,\r\nGuide: Dr. V.C. Kotak', '2021-12-13'),
(68, 'Object Recognition And Classification By Image Data Analysis Using Machine Learning Algorithm', 'out-house-project', '', 'Object recognition is mainly done to recognize and classify the number of similar objects in an image. It is done with the help of a 2D plane which consists of x coordinate which is present horizontally while y co-ordinate deals vertically. Object can be recognized by its shape, colour and texture features. Classes can be created for classification among similar objects from an image. With the use of classes, it is easy to identify what the object is. The main goal of the project is to sort out all the different types of objects and classification it by using machine learning algorithm. It consists of the input layer, hidden layer and the output layer. With the help of this, we get the desired output. On comparing it with the actual output, accuracy is achieved. The objects can be differentiated from the other objects in the image and the total number of objects can easily be found out.', 'https://i.imgur.com/0uTdmOX.jpeg', 'Digital images are widely used in various applications such as entertainment, security, business purpose, scientific purposes and medical purposes etc. The captured images contain large amount of information. The information in these images are not understandable to the computer system therefore it is extracted by different computer vision methodologies and by optimization techniques for human interpretation. Nowadays there is a major emphasis on extracting information from images. So, some pre-processing enhancement on the image is required which eliminates the noise and prepares the image useful for particular application. In this project work Object recognition and counting number of object of particular class are the main objectives. In the first phase study of different methodologies for recognising the objects of use is done. Various object detection techniques such as morphological operations and Image Segmentation techniques are studied for object recognition.  In this project work, in phase I, identifying and extracting of the objects is done. Further these objects will be classified in the classes of interest in phase II.  This is performed by using the concepts of Back Propagation Machine Learning Algorithm. \r\nImage classification is an important problem for classifying objects of the image under consideration. Various image features are extracted and stored in the database.  Further machine learning algorithm such as Back Propagation can be applied for objects classification of different images. \r\n', ' ', '1. Acquire the given digital image.\r\n2.Divide the given RGB image into three different planes:- r-plane,g-plane,b-plane.\r\n3.Convert each of the three planes into black and white using a appropriate level.\r\n4.Increase the intensity of each pixels by a suitable value(50 in our case).\r\n5.Applying exponential algorithm so as to increase the intensity of the bright pixels.\r\n6.Perform contrast stretching.\r\n7.Perform Morphological operations.\r\n          7.1. Create morphological structuring element using strel function.\r\n           7.2. Perform Dilation on the image using imdilate.\r\n.           7.3. Remove small objects from binary image using bwareaopen.\r\n7.4. Find perimeter of objects in binary image using bwperim.\r\n7.5.  Morphologically close image using imclose.\r\n8.  Fill image regions and holes using imfill.\r\n9. Calculate the perimeter and the area of the objects.\r\n10. Count the number of objects.\r\n\r\nPHASE-2:\r\n1) Collect data\r\n2) Create the network\r\n3) Configure the network\r\n4) Initialize the weights and biases\r\n5) Train the network\r\n6) Validate the network (post-training analysis)\r\n7) Use the network\r\n\r\n', '1. Acquire the given digital image.\r\n2.Divide the given RGB image into three different planes:- r-plane,g-plane,b-plane.\r\n3.Convert each of the three planes into black and white using a appropriate level.\r\n4.Increase the intensity of each pixels by a suitable value(50 in our case).\r\n5.Applying exponential algorithm so as to increase the intensity of the bright pixels.\r\n6.Perform contrast stretching.\r\n7.Perform Morphological operations.\r\n          7.1. Create morphological structuring element using strel function.\r\n           7.2. Perform Dilation on the image using imdilate.\r\n.           7.3. Remove small objects from binary image using bwareaopen.\r\n7.4. Find perimeter of objects in binary image using bwperim.\r\n7.5.  Morphologically close image using imclose.\r\n8.  Fill image regions and holes using imfill.\r\n9. Calculate the perimeter and the area of the objects.\r\n10. Count the number of objects.\r\n\r\nPHASE-2:\r\n1) Collect data\r\n2) Create the network\r\n3) Configure the network\r\n4) Initialize the weights and biases\r\n5) Train the network\r\n6) Validate the network (post-training analysis)\r\n7) Use the network\r\n\r\n', 'Thus, we have successfully implemented the phase I of the project that deals with the counting the number of objects present in the image. We have used the Image pre-processing techniques like conversion of RGB to gray-scale image and thereby thresholding it, to improve the quality of the desired objects in the image. Then we applied Image Enhancement techniques such as Morphological operations that smoothen the image and give us better results. By using the region property function on the obtained enhanced thresholded image, we could successfully count the number of objects by keeping in consideration the 8-point neighboring pixels. \r\nOur further work includes the extraction of various features like the Texture features, Shape features and others, using co-occurrence matrix and other such techniques. And thereby using Machine Learning algorithm like Back propagation to classify the objects in a given image frame.\r\n', '[1] S. Belongie, J. Malik & J. Puzicha, “Shape Matching and Object Recognition using\r\n     Shape context”, in IEEE Transactions on Pattern Analysis and Machine Intelligence,\r\n     vol 24.no.4,pp.509-522,Arp2002.\r\n[2] Gaurav Somi, V.K Runga, Amanpreet Singh,”Inshore ship Object Detection and \r\n      Recognition using Hybrid Combination Algorithm using MATLAB”, Page 1,978-1-\r\n      1673-9338-6/16,2016.\r\n[3] Evaluation of Texture Features for Content-Based Image Retrivial,pp 326-334,2010.\r\n[4] Dong ping Tian “A Review on Image Feature Extraction and Representation \r\n     Techniques”\r\n[5] Hieu Minh Bui, Margaret Lech, Eva Cheng, Katrina Neville, Ian S. Burnett,”Using    \r\n     Grayscale Images for Object Recognition with Convolutional-Recursive Neural \r\n     Network”, Page 1,978-1-5090-1801-7/16,2016 .\r\n', 2021, ' ', 'Niyati Shah -BE4-47,\r\nRaj Mehta-BE4-29,\r\nSanket Shah-BE3-40,\r\nSiddhi Thakkar-BE3-46,\r\n,,Mrs. Deepti  Nikumbh\r\n', '2021-12-15'),
(69, 'Fire Fighting Robot Using Raspberry Pi', 'mini-project', '', ' In this embedded project, we have   outlined a robot and heart of the robot is Raspberry Pi which is Linux based computer and it is connected with Wi-Fi to control and give live video output. The robot along with camera can wirelessly transmit real time video with night vision capabilities. At transmitting end ,commands are sent to receiver to control the movement of robot. At receiving end ,two robot are interfaced to the motor driver where they are used for the movement of the robot. ', 'https://i.imgur.com/qY32dSI.jpeg', 'In this project, we have designed a  robot system using Raspberry Pi which is used to extinguish fire without causing any harm to human and can be controlled using Wi-Fi or Internet Services. This kind of robot can be used in nuclear plants, chemical industry.', ' ', '1. Start\n\n2. Move the robot to fire location.\n\n3. If fire caught  go to step 4 else Step 5.\n\n4. Check the water pump is activated.\n\n5. Move to fire point and pour water.\n\n6. Go to Step 2\n\n7. Stop.', ' ', 'Thus, we conclude that a robot can be used in place of humans .They provide us greater efficiency to detect the fire using camera which interface before it become uncontrollable and threat to human life. ', '1) Swati A. Deskmukh  and Rashmi A. Pandhere, “Wireless Fire Fighting Robot,” in    ', 2016, '', 'Sandesh Jain,\nRohan Kunjir,\nMayank Lodaya,\nVaibhav Shukla,,,\nProf. Shashikant  S. Radke', '2021-12-15'),
(70, 'EXPLORING FIREBASE CLOUD CHARACTERISTICS FOR MOBILE STORAGE', 'mini-project', '', 'In this era everyone is using smartphones for performing several tasks.But the memory of a smartphone is restricted to certain amount;we cannot exceed that limit.Hence we need to store huge amount of data somewhere so that we can use it whenever we need it.So our application will allow the users to upload their data on cloud securely and download it from cloud as and when it is required.Our application is cost-effective,easy to use and efficient.', 'https://fileinfo.com/img/ss/lg/jpeg_43.jpg', ' Nowadays technology is advancing very rapidly and due to these new inventions our life has changed tremendously.As a result security of our smartphones  and social networking sites becomes very important.So there is a need to design such a system on which we could upload our data on cloud securely and retrieve it as and when it is required.The main advantage of this system is that there is no need of storing all the data in a smartphone as there is a memory limit in a smartphone.Our project deals with the uploading images,audios on the cloud and then downloading it from cloud as and when required.Our application will be useful for common people as well as investigators.', ' ', ' Firebase is a mobile and web application platform with tools and infrastructure designed to help developers build high quality apps.Firebase services include analytics,cloud messaging,auth,realtime database,storage,hosting,etc.Steps to implement a firebase project are as follows :\n', '1. Connect to firebase.\n\n2. Add firebase storage,realtime database to your app.\n\n3.Create a reference.\n\n4.Upload a file.\n\n5. Download a file.', ' As the technology is advancing new varieties of smartphones are emerging in the markets.But such a small device cannot accomodate huge amount of data.So we need to store the data on cloud and retrieve it whenever it is required.Thus this technique is userfriendly,cost-effective and efficient enough.', '1. Navdeep Singh ,“Study of Google Firebase API for Android”,2016, International Journal of Innovative Research in Computer and Communication Engineering.', 2016, ' ', 'Guide Name : Mrs. Sonali  A. Bhutad.,,\nMembers :,\nBhumi P. Lodaya.,\nShivangee D. Kulkarni.,\nManali R. Patil.,\nShweta K. Shimpi.,', '2021-12-15'),
(72, 'asd', 'mini-project', '', 'asd', 'https://i.imgur.com/m91tRwX.jpeg', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 2021, 'asd', 'asd', '2022-4-2'),
(73, 'fsdfs', 'mini-project', '', 'sdf', 'https://i.imgur.com/a4X4iC9.jpeg', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 2021, 'sdfsdf', 'sdf', '2022-4-2'),
(74, 'asd', 'mini-project', '', 'asd', 'https://i.imgur.com/ZR859af.jpeg', '', '', '', '', '', '', 2021, '', '', '2022-4-2'),
(75, 'ooooooo', 'mini-project', '', 'asd', 'https://i.imgur.com/hKUQctl.jpeg', 'asd', 'asd', 'asdasd', 'asd', 'asd', 'asd', 2020, 'asd', 'asd', '2022-4-3');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `regNo` int(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `branch` varchar(250) NOT NULL,
  `class` varchar(250) NOT NULL,
  `githubLink` varchar(250) NOT NULL,
  `linkedinLink` varchar(250) NOT NULL,
  `pfpLink` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`regNo`, `email`, `name`, `branch`, `class`, `githubLink`, `linkedinLink`, `pfpLink`) VALUES
(0, 'student', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', ' '),
(15529, 'aditya.sawant15529@gmail.com', 'Aditya Sawant', 'Comps', 'undefined', 'qwsdas', 'asdasd', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `role`) VALUES
('aditya.sawant15529@gmail.com', '057829fa5a65fc1ace408f490be486ac', 'student'),
('admin', '21232f297a57a5a743894a0e4a801fc3', 'admin'),
('admin1', 'e00cf25ad42683b3df678c61f42c6bda', 'admin'),
('admin2', 'c84258e9c39059a89ab77d846ddab909', 'admin'),
('std1', '0dce1f5d199b8fbd2c38fd4cf56aa653', 'student'),
('student', 'cd73502828457d15655bbd7a63fb0bc8', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `finalprojects`
--
ALTER TABLE `finalprojects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`regNo`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `finalprojects`
--
ALTER TABLE `finalprojects`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
