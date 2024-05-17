import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Software Engineer with a strong background in backend development, automation, and cloud technologies. With hands-on experience in building high-level APIs, continuous integration, containerization, and virtualization solutions, I have honed my skills in technologies such as AWS, Kubernetes, Docker, Ansible, Openstack and Monitoring . My expertise extends to front-end frameworks like Angular and backend frameworks like Spring Boot. My goal is to leverage my skills to create robust, scalable, and innovative solutions that enhance business operations and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for building robust and scalable infrastructure and Automation Solutions. With a strong background in backend development, automation, and cloud technologies, I have gained hands-on experience in technologies such as AWS, Kubernetes, Docker, Ansible, OpenStack, and Spring Boot. My journey in DevOps began with a deep curiosity for optimizing and automating processes, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and enhancing my skills through continuous learning and open-source contributions.`;

export const EXPERIENCES = [
  {
    year: "August 2023 - May 2024",
    role: "Graduate Teaching Assistant",
    company: "Oklahoma State University",
    description: `Instructed students in Data Structures and Algorithms, C/C++ programming, and organization of programming languages, offering personalized assistance to address queries and enhance student engagement there by boosting retention by 15%.`,
    technologies: ["Java", "C++", "MATLAB", "SML"],
  },
  {
    year: "July 2021 - August 2022",
    role: "Software Development Engineer ",
    company: "Tata Communications",
    description: 
    `Led as backend developer to build custom controllers as high-level APIs for the Fusion Stack website that facilitate over 5,000 users, using the Operator-SDK for controlling event handling with Python and automation with Jenkins.
     
     Established continuous integration flow and Containerization for microservices using Kubernetes and Docker, resulting in a 30% reduction in deployment time. 
     
     Collaborated on load balancing, gRPC research with Istio service mesh, for monitoring and logging solutions with Prometheus and Grafana. 
     
     Developed Ansible playbooks and Helm charts to automate deployment and configuration of analytic data applications, resulting in a 50% decrease in deployment time for multi-cluster setups. 
     
     Deployed and maintained Kubevirt-based virtualization solutions to automate the deployment of new clusters by using Cluster API functionality, maximizing resource utilization by 30% of availability and workload flexibility.`,
    technologies: ["Docker", "Kubernetes", "Ansible", "Helm", "Python", "GO", "Openstack", "DNS", "OperatorSDK"],
  },
  {
    year: "March 2021 - June 2021 ",
    role: "Software Engineer Intern",
    company: "Cognizant",
    description: `Engineered and released a RESTful web application using spring boot data JPA that integrated real-time banking application resulting in a 15% increase in user engagement.`,
    technologies: ["Spring Boot", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    year: "November 2019 - January 2020 ",
    role: "Machine Learning Intern",
    company: "Experts Hub",
    description: `Build the extracted features and corresponding labels to perform audio tagging using deep neural networks and convolutional neural networks CNN that outperformed the existing models with 20% accuracy.`,
    technologies: ["Python", "CNN", "RNN"],
  },
];

export const PROJECTS = [
  {
    title: "Systematic Behavioral Analysis and Adaptive Traffic Routing for Services within Microservice Architecture Service Mesh",
    image: project1,
    description:
      "Integrate an Adaptation component to the Istio service mesh that changes traffic patterns on demand based on real-time analysis to improve the security by changing the traffic routing of the web application.",
    technologies: ["Docker", "Kubernetes", "Istio", "YAML", "Python", "Kiali"],
  },
  {
    title: "Distributed Decentralized Chain and k-Queue Variable Bulk Arrival and Bulk Service Model",
    image: project2,
    description:
      "Implemented priority queuing in Markovian queuing to diminish network latency, transaction waiting times, and addressed 50% attack with probability distribution to improve throughput by 30% and visualized using MATLAB.",
    technologies: ["MATLAB", "BlockChain"],
  },

  {
    title: "Pharmacy Management System",
    image: project3,
    description:
      "Employed SQL for database with PL/SQL, utilized Spring Boot for backend, and designed a responsive front-end user interface using the Angular for system functionalities and application routing.",
    technologies: ["HTML", "CSS", "Angular", "Spring Boot", "MySQL"],
  },

  {
    title: "Customer profiling in Video-on-demand services using clustering and Association rule mining",
    image: project4,
    description:
      "Analyzed IPTV datasets using K-means, hierarchical clustering and Apriori algorithms to uncover rental preferences and subscriber groups, employing statistical analysis and testing, achieving a 20% increase in accuracy and reliability compared to actual results.",
    technologies: ["Python", "Clustering"],
  },

];

export const CONTACT = {
  address: "314 N Duncan Street, StillWater, OK, 74075 ",
  phoneNo: "+1 9452348634",
  email: "raghumedarametla9191@gmail.com",
};
