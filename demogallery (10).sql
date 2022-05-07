-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2022 at 08:06 PM
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
  `project_mentor` varchar(100) NOT NULL,
  `project_members` text NOT NULL,
  `project_members_name` text NOT NULL,
  `project_created_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finalprojects`
--

INSERT INTO `finalprojects` (`id`, `project_name`, `project_category`, `project_field`, `project_description`, `project_image`, `project_abstract`, `project_problem_statement`, `project_methodology`, `project_objective`, `project_results`, `project_references`, `project_year`, `project_achivements`, `project_mentor`, `project_members`, `project_members_name`, `project_created_at`) VALUES
(93, 'Object Recognition And Classification By Image Data Analysis Using Machine Learning Algorithm', 'mini-project', '', 'Object recognition is mainly done to recognize and classify the number of similar objects in an image. It is done with the help of a 2D plane which consists of x coordinate which is present horizontally while y co-ordinate deals vertically. Object can be recognized by its shape, colour and texture features. Classes can be created for classification among similar objects from an image. With the use of classes, it is easy to identify what the object is. The main goal of the project is to sort out all the different types of objects and classification it by using machine learning algorithm. It consists of the input layer, hidden layer and the output layer. With the help of this, we get the desired output. On comparing it with the actual output, accuracy is achieved. The objects can be differentiated from the other objects in the image and the total number of objects can easily be found out.\r\n', 'https://i.imgur.com/w2eMvZC.jpeg', 'Digital images are widely used in various applications such as entertainment, security, business purpose, scientific purposes and medical purposes etc. The captured images contain large amount of information. The information in these images are not understandable to the computer system therefore it is extracted by different computer vision methodologies and by optimization techniques for human interpretation. Nowadays there is a major emphasis on extracting information from images. So, some pre-processing enhancement on the image is required which eliminates the noise and prepares the image useful for particular application. In this project work Object recognition and counting number of object of particular class are the main objectives. In the first phase study of different methodologies for recognising the objects of use is done. Various object detection techniques such as morphological operations and Image Segmentation techniques are studied for object recognition.  In this project work, in phase I, identifying and extracting of the objects is done. Further these objects will be classified in the classes of interest in phase II.  This is performed by using the concepts of Back Propagation Machine Learning Algorithm. \r\nImage classification is an important problem for classifying objects of the image under consideration. Various image features are extracted and stored in the database.  Further machine learning algorithm such as Back Propagation can be applied for objects classification of different images.  \r\n', '', 'PSEUDO CODE\r\n PHASE-1:\r\n\r\n1. Acquire the given digital image.\r\n2.Divide the given RGB image into three different planes:- r-plane,g-plane,b-plane.\r\n3.Convert each of the three planes into black and white using a appropriate level.\r\n4.Increase the intensity of each pixels by a suitable value(50 in our case).\r\n5.Applying exponential algorithm so as to increase the intensity of the bright pixels.\r\n6.Perform contrast stretching.\r\n7.Perform Morphological operations.\r\n          7.1. Create morphological structuring element using strel function.\r\n           7.2. Perform Dilation on the image using imdilate.\r\n.           7.3. Remove small objects from binary image using bwareaopen.\r\n7.4. Find perimeter of objects in binary image using bwperim.\r\n7.5.  Morphologically close image using imclose.\r\n8.  Fill image regions and holes using imfill.\r\n9. Calculate the perimeter and the area of the objects.\r\n10. Count the number of objects.\r\n\r\nPHASE-2:\r\n1) Collect data\r\n2) Create the network\r\n3) Configure the network\r\n4) Initialize the weights and biases\r\n5) Train the network\r\n6) Validate the network (post-training analysis)\r\n7) Use the network\r\n\r\n\r\n', '', 'Thus, we have successfully implemented the phase I of the project that deals with the counting the number of objects present in the image. We have used the Image pre-processing techniques like conversion of RGB to gray-scale image and thereby thresholding it, to improve the quality of the desired objects in the image. Then we applied Image Enhancement techniques such as Morphological operations that smoothen the image and give us better results. By using the region property function on the obtained enhanced thresholded image, we could successfully count the number of objects by keeping in consideration the 8-point neighboring pixels. \r\nOur further work includes the extraction of various features like the Texture features, Shape features and others, using co-occurrence matrix and other such techniques. And thereby using Machine Learning algorithm like Back propagation to classify the objects in a given image frame.\r\n', '[1] S. Belongie, J. Malik & J. Puzicha, “Shape Matching and Object Recognition using\r\n     Shape context”, in IEEE Transactions on Pattern Analysis and Machine Intelligence,\r\n     vol 24.no.4,pp.509-522,Arp2002.\r\n[2] Gaurav Somi, V.K Runga, Amanpreet Singh,”Inshore ship Object Detection and \r\n      Recognition using Hybrid Combination Algorithm using MATLAB”, Page 1,978-1-\r\n      1673-9338-6/16,2016.\r\n[3] Evaluation of Texture Features for Content-Based Image Retrivial,pp 326-334,2010.\r\n[4] Dong ping Tian “A Review on Image Feature Extraction and Representation \r\n     Techniques”\r\n[5] Hieu Minh Bui, Margaret Lech, Eva Cheng, Katrina Neville, Ian S. Burnett,”Using    \r\n     Grayscale Images for Object Recognition with Convolutional-Recursive Neural \r\n     Network”, Page 1,978-1-5090-1801-7/16,2016 .\r\n\r\n\r\n', 2021, '', 'Mrs. Deepti  Nikumbh', '1,1,1,1', 'Niyati Shah -BE4-47,Raj Mehta-BE4-29,Sanket Shah-BE3-40,Siddhi Thakkar-BE3-46', '2022-5-7'),
(95, 'Question Bank Generation for online   Question Paper with Intelligent Answer Verifier', 'mini-project', '', 'As engineering students, we know the amount of effort that goes into assignments. Not only writing them, but also submitting them, and maintaining them appropriately.  Many a times, students lose their assignments, which results into writing them again, getting them corrected again.  This basically leads to a lot of time being wasted, and also, since the assignment is being submitted late, the student might get a lower grade, further affecting their GPA (Grade Point Index).  \r\nThe other problem with paper-based assignments is that the same question is given to all the students, which basically leads  to plagiarism which completely defeats the purpose of writing an assignment in the first place. To avoid all these issues with paper-based assignment, we have incepted a software through which students can appear for assignments, get them corrected via the software and their marks will be automatically updated in the college database.\r\nCompletely avoiding the rigorous task of maintaining the assignment and presenting it at the end of the semester. \r\n\r\n', 'https://i.imgur.com/RTzjiWf.jpeg', 'Exams are getting digitized all over the world. Basically, meaning that the traditional paper based tests are being replaced by the certain computer based tests which have proven to be both more consistent in allocating marks and faster than teacher correcting papers. The traditional exams usually consisted of subjective answers which were not the best way of grading the student’s perception of the subject.  Hence, we are developing a computer based system that will generate objective based question that will be better suited to grade students academically. The system will generate a question paper and it will grade the student after he/she has solved the question paper. This system will save time as well as the efforts put in by the teachers, which they can spend on more productive activities. \r\n', '', 'The student enters the answer for the question.\r\nThe answer is passed through a POS Tagger.\r\nProvided answer is in a subject-verb-object format,    the NER parser, will identify the category of words that  is required for that particular answer.\r\nThe adjectives from the sentence are identified.\r\nA graph is formed, mapping the subject, the adjective,  and the objective; hence identifying the tone of the  sentence.\r\nThe same process is applied on the answer stored in the database, provided by the teacher.\r\nThe two graphs will be compared. \r\nIf the student’s answer is more than 50% similar to the teachers answer, go to step 9; else go to step 10.\r\nAssign full marks to the student’s answer; go to 11.\r\nAssign 0 marks to the student’s answer.\r\nStop.\r\n\r\n', '', 'The software is successfully able to generate a question paper according to the need of the user. The question in the paper are, in fact selected in a random manner, with minimum repetition. The software is also able to check the question correctly, in a manner similar to actual human correction. For descriptive answers, a thorough analysis was performed on the software correction algorithm. Based on the analysis we performed on the results of the 20 testers, we achieved an accuracy of 83 percent. ', '1]  Amarjeet Kaur, M Sasikumar, Shikha Nema, Sanjay Pawar, “Algorithm for Automatic Evaluation of Single Sentence Descriptive Answer” \r\n2 ] Tilani Gunawardena, Medhavi Lokuhetti, Nishara Pathirana, Roshan Ragel and Sampath Deegalla ,“ An Automatic Answering System with Template Matching for Natural Language Questions,”\r\n3]  Anne-Laure Ligozat, Brigitte Grau, Anne Vilnat, Isabelle Robba, Arnaud Grappy, “Towards an automatic validation of answers in Question Answering”\r\n4]  “Design of Adaptive Question Bank Development and   Management System”\r\n\r\n', 2021, '', '', '1,1,1,1', 'SHRIMANGAL REWAGAD.,PRATEEK PISAT.,GANESH SAWANT.,DEVANSH MODY.', '2022-5-7'),
(96, 'E-PROCUREMENT', 'mini-project', '', 'The traditional systems of procurement in Service Industry departments through manual modes suffered from various problems such as inordinate delays (approximately 4 to 6 months) in tender/order processing, heavy paper work, multi-level scrutiny that consumes a lot of time, physical threats, human interface at every stage, inadequate transparency, discretionary treatment in the entire tender process, etc. The new system will help the Service Industry in the department of procurement unit to improve the speed of work, to reduce the time spent on writing reports and the staff will manage their documents more effectively and efficiently. E- Procurement is the electronic implementation of the procurement cycle. It is the technology enabled acquisition of goods and services required by an organization at the best value obtainable. The goal is the right product or service, at the right place and the right time, at the right price in the most efficient manner.\r\n\r\nObjectives of Project-\r\n\r\nThe prime objectives of e-procurement system are:\r\n\r\n Consistent procurement procedures across departments.\r\n\r\n Improve  service.\r\n\r\n Save time, both taken by the customer as well as the time taken for the entire process.\r\n\r\n Reduce process errors.\r\n\r\n\r\n\r\n\r\n', 'https://i.imgur.com/o1WDUlM.jpeg', 'E-procurement (electronic procurement, sometimes also known as supplier exchange) is the business-to- business or business-to- consumer or business-to- government purchase and sale of supplies, work, and services through the Internet as well as other information and networking systems, such as electronic data interchange and enterprise resource planning. \r\nE-commerce is considered as an umbrellas term which covers trade on the internet, it involve the buying, selling and marketing of goods and services. E-procurement which is a subject and a sub set of e-commerce technology can be said to be the use of information technology (IT) to facilitate transaction of materials and services.\r\n', '', 'Working\r\nInvoicing\r\nClient Management\r\nInfo-graphics\r\nProject Management\r\nChat Module\r\nFile Management\r\nTime Sheet Management      \r\n', '', 'The procurement process is one of the most important processes and its costs, reliability, and risks considerably influence the performance or even survival of a company. E-procurement leads to changes at different levels, including organizational, financial, and the information systems department. The structure of buying centers tends to flatten and fewer levels of management actively engage in each activity. E-procurement can lead to long-term efficiency gains by fundamentally changing the coordination mechanics and transaction practices. Still, many companies lack an approach to rigorously and quantitatively evaluate their options, benefits, and risk. The decrease in costs and time does not necessarily happen simultaneously, and organizational changes/process improvement can often bring even greater savings than implementation of a simple technology.\r\n', '[ 1 ] Peter Trkman and Kevin McCormack “Estimating the Benefits and Risks of Implementing E-Procurement” IEEE Transactions on Engineering Management,vol. 57, no. 2, May 2010\r\n\r\n[ 2 ] Haslinda Hassan, Alexei Tretiakov, Dick Whiddett, Iskandar Adon “Extent of E-Procurement use in SMEs: A descriptive study”\r\n\r\n[ 3 ] Wilfred Nyagaka Mbeche, Ngari, James Mark, Salome Richu “Employees’ Levelof E-Procurement Skills as a Challenge Facing the Implementations of Electronic Procurement System at Nakuru Water &amp; Sanitation Services Ltd, Nakuru, Kenya”\r\n\r\n\r\n', 2021, '', 'Prof: Vaishali Chavan', '1,1,1,1', 'Mrunal Shah,Juee Gawas,Balaji Katakam,Parth Shah', '2022-5-7'),
(97, 'Secure Image Transmission using Cipher Block Chaining mode & Visual Steganography', 'mini-project', '', 'Large volume of data is being transmitted every minute over the network. Hence confidentiality and integrity of the data being transmitted need to be preserved. While transmitting information, security related issues should be taken into consideration because hackers may utilize weak links over transmission to hack the information. This gave rise to the use of different cryptographic and steganography schemes in order to encrypt the secret data which helps in retaining its integrity. This project presents an approach of all the combined concepts.', 'https://i.imgur.com/HGqtGrD.jpeg', 'With the rise of technology in today’s information age, data security has become a major concern in terms of data storage and data transmission. This project proposes an advanced system of securing data that combines the features of cryptography, steganography along with multimedia data hiding.', '', 'The proposed method makes use of the concepts of image processing. AES encryption, Block cipher cryptography, Visual Steganography. By combining the aforementioned techniques, a more robust way of securing and transmitting images can be implemented.\r\nIn this system, first AES (Advanced Encryption Standard) algorithm is being used to encrypt the image, encryption is done by implementing a block cipher method called Cipher Block Chaining (CBC). Now the encrypted image is divided into shares before performing Visual Steganography i.e. the technique of hiding the shares into dummy cover images. \r\nDuring decryption, the stego-images are extracted and merged to form the cipher image. Now the AES algorithm is applied in decryption mode thereby finalising the entire decrypting process and generating the original image.\r\n', '', 'The proposed method improves the security and efficiency of the image encryption. This method clearly overcomes the shortcomings of the previous methods. Image transmission over the Internet is secured by introducing new levels of encryption. The image is first encrypted and then embedded into other images. This increases the privacy of the image many folds. Even if the attacker gets hold of the stego-image in transit, he/she would not be able to yield our the secret image thereby achieving higher level of security as compared to other traditional image securing methods.\r\n', '', 2021, '', 'Prof. Manoj Dhande', '1,1,1,1', 'Arjun Mudaliyar,Vineeta Pandey,Pranali Dalvi,Pranali Dalvi', '2022-5-7');

-- --------------------------------------------------------

--
-- Table structure for table `pendingprojects`
--

CREATE TABLE `pendingprojects` (
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
  `project_mentor` varchar(100) NOT NULL,
  `project_members` text NOT NULL,
  `project_members_name` text NOT NULL,
  `project_created_at` text NOT NULL,
  `project_submitted_by` varchar(255) NOT NULL,
  `project_approved` text NOT NULL,
  `project_remark` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pendingprojects`
--

INSERT INTO `pendingprojects` (`id`, `project_name`, `project_category`, `project_field`, `project_description`, `project_image`, `project_abstract`, `project_problem_statement`, `project_methodology`, `project_objective`, `project_results`, `project_references`, `project_year`, `project_achivements`, `project_mentor`, `project_members`, `project_members_name`, `project_created_at`, `project_submitted_by`, `project_approved`, `project_remark`) VALUES
(5, 'SECURITY GUIDANCE USING VIRTUAL REALITY', 'mini-project', '', 'The field of artificial and computational intelligence in security has seen major advancements and several success stories in the roughly 10 years it has existed as a separate research field. Research into virtual environments on the one hand and artificial intelligence and artificial life on the other has largely been carried out by two different groups of people with different preoccupations and interests, but some convergence is now apparent between the two fields. Applications in which activity independent of the user takes place — involving crowds or other agents are beginning to be tackled, while synthetic agents, virtual humans and computer pets are all areas in which techniques from the two fields require strong integration. The two communities have much to learn from each other if wheels are not to be reinvented on both sides. The issues arising from combining artificial intelligence and artificial life techniques with those of virtual environments to produce just such intelligent virtual environments. The discussion which include environments providing knowledge to direct or assist the user rather than relying entirely on the user’s knowledge and skills, those in which the user is represented by a partially autonomous avatar, those containing intelligent agents separate from the user, and many others from both sides of the area.                                                                                                                                       ', 'https://i.imgur.com/OND4CMu.jpeg', '\r\nHere we discuss about giving a high-level overview of the field of artificial and computational intelligence (AI/CI) in security, with particular reference to how the different core research areas within this field inform and interact with each other, both actually and potentially. In a period when niche areas of cutting-edge technological research are capturing the public imagination and moving out of the laboratory into everyday life, there is a broad impetus that can be one of the key ingredients in a recipe for dramatic progress. Indeed, the vision of exciting applications can be regarded as a driving force behind the premise of this paper that a convergence has begun to take place between branches of advanced computing and research communities which, until recently, were quite separate — namely Artificial Intelligence (AI), Artificial Life (AL) and Virtual Reality (VR), or, as it is sometimes now known, Virtual Environments (VE). This combination of intelligent techniques and tools, embodied in autonomous creatures and agents, together with effective means for their graphical representation and interaction of various kinds, has given rise to a new area at their meeting point, which we call intelligent virtual environments.\r\n\r\n\r\n', '', '\r\n\r\nUser enters Username & Password.\r\nDepending on the kind of the user (Visitor & Employee), two different views are shown.\r\nVideo starts playing in 360 Player. For VR View click the goggles icon ()\r\nThe user can swipe through different fragments\r\n', '', 'This system aims to find whether a person is in stress or not depending on different factors like Blood Pressure, Body Temperature, Galvanic Skin Response etc. The System uses learning algorithm to decide on the final result. The system will be trained using few cases. Depending on training data which is given as input, the system will determine whether a person is in stress or not and also generate a decision tree simultaneously. Applications will be Hospitals and Stress Relieving centers.', '  \r\n1) SIMULATION MODELING WITH ARTIFICIAL REALITY TECHNOLOGY (SMART): AN INTEGRATION OF aVIRTUAL REALITY ANI) SIMULATION MODELING Hank Grant and Chuen-Ki Lai, Proceedings of the I998 Winter Simulation Conference\r\n\r\n2) Research on Chinese Museum Design based on Virtual Reality LIU Xia and QIAO Jiangang, 2008 International Workshop on Modelling, Simulation and Optimization\r\n', 2021, '', 'Dr. V.C. Kotak', '1,1,1,1', 'CHINMAY AYEER    BE-4   ROLLN0-2,TEJAS DESHPANDE BE-4   ROLLNO-8,AISHWARYA IYER   BE-3   ROLLNO-62,JAY CHHEDA  BE-3   ROLLNO', '2022-5-7', '1', 'not-approved', 'Some Remark');

-- --------------------------------------------------------

--
-- Table structure for table `projectholdby`
--

CREATE TABLE `projectholdby` (
  `id` bigint(20) NOT NULL,
  `regNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projectholdby`
--

INSERT INTO `projectholdby` (`id`, `regNo`) VALUES
(95, 1),
(95, 1),
(95, 1),
(95, 1),
(93, 1),
(93, 1),
(93, 1),
(93, 1),
(96, 1),
(96, 1),
(96, 1),
(96, 1),
(97, 1),
(97, 1),
(97, 1),
(97, 1);

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
(0, 'student', 'Student Account', 'Computer Engineering', ' ', 'https://github.com/', 'https://www.linkedin.com/', 'https://avatars.dicebear.com/api/micah/r7q05y5b.svg?mood[]=sad'),
(1, 'JohnDoe', 'John Doe', 'Computer Engineering', ' ', 'https://github.com/', 'https://www.linkedin.com/', 'https://avatars.dicebear.com/api/micah/ptnyjufu.svg?mood[]=sad'),
(15529, 'aditya.sawant15529@sakec.ac.in', 'Aditya Sawant', 'Computer Engineering', ' ', 'https://github.com/AdityaSawant0912', 'https://www.linkedin.com/in/adityasawant09/', 'https://avatars.dicebear.com/api/micah/fr2ne39f.svg?mood[]=sad');

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
('aditya.sawant15529@sakec.ac.in', '057829fa5a65fc1ace408f490be486ac', 'student'),
('admin', '21232f297a57a5a743894a0e4a801fc3', 'admin'),
('JohnDoe', '6579e96f76baa00787a28653876c6127', 'student'),
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
-- Indexes for table `pendingprojects`
--
ALTER TABLE `pendingprojects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projectholdby`
--
ALTER TABLE `projectholdby`
  ADD KEY `regNo` (`regNo`),
  ADD KEY `id` (`id`);

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `pendingprojects`
--
ALTER TABLE `pendingprojects`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `projectholdby`
--
ALTER TABLE `projectholdby`
  ADD CONSTRAINT `projectholdby_ibfk_1` FOREIGN KEY (`regNo`) REFERENCES `students` (`regNo`),
  ADD CONSTRAINT `projectholdby_ibfk_2` FOREIGN KEY (`id`) REFERENCES `finalprojects` (`id`);

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
