document.addEventListener('DOMContentLoaded', function() {
    console.log('courses.js loaded');
    document.getElementById('year').textContent = new Date().getFullYear();
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTrack = urlParams.get('track');
    console.log('Selected Track:', selectedTrack);
    const trackHeader = document.getElementById('trackHeader');
    if (selectedTrack) {
        trackHeader.textContent = `Courses for ${selectedTrack}`;
    } else {
        trackHeader.textContent = 'Courses';
    }
    const coursesData = {
        'Software Fundamentals': [
            { 
                name: 'Introduction to Programming', 
                description: 'Learn the basics of coding with Python. Perfect for beginners!',
                groupName: 'Group:1',
                instructor: 'Ahmed',
                startDate: '2024-01-15',
                endDate: '2024-05-15',
                numStudents: 5,
                price: '150 $'
            },
            { 
                name: 'Data Structures', 
                description: 'Understand arrays, lists, and more to build efficient programs.',
                groupName: 'Group:2',
                instructor: 'Sara',
                startDate: '2024-02-10',
                endDate: '2024-06-10',
                numStudents: 4,
                price: '180 $'
            },
            { 
                name: 'Algorithms', 
                description: 'Master problem-solving with key algorithms and techniques.',
                groupName: 'Group:3',
                instructor: 'Mohamed',
                startDate: '2024-03-01',
                endDate: '2024-07-01',
                numStudents: 3,
                price: '200 $'
            },
            { 
                name: 'Version Control with Git', 
                description: 'Learn how to manage your code using Git and GitHub.',
                groupName: 'Group:4',
                instructor: 'Fatima',
                startDate: '2024-04-01',
                endDate: '2024-08-01',
                numStudents: 6,
                price: '120 $'
            }
        ],
        'Power BI': [
            { 
                name: 'Power BI Basics', 
                description: 'Get started with Power BI for data visualization.',
                groupName: 'Group:1',
                instructor: 'Laila',
                startDate: '2024-01-20',
                endDate: '2024-05-20',
                numStudents: 3,
                price: '130 $'
            },
            { 
                name: 'Data Modeling', 
                description: 'Learn to create relationships and models in Power BI.',
                groupName: 'Group:2',
                instructor: 'Omar',
                startDate: '2024-02-15',
                endDate: '2024-06-15',
                numStudents: 5,
                price: '160 $'
            },
            { 
                name: 'DAX Fundamentals', 
                description: 'Master Data Analysis Expressions for advanced calculations.',
                groupName: 'Group:3',
                instructor: 'Nadia',
                startDate: '2024-03-10',
                endDate: '2024-07-10',
                numStudents: 4,
                price: '170 $'
            },
            { 
                name: 'Dashboard Design', 
                description: 'Create stunning dashboards to present your data.',
                groupName: 'Group:4',
                instructor: 'Khaled',
                startDate: '2024-04-05',
                endDate: '2024-08-05',
                numStudents: 2,
                price: '140 $'
            }
        ],
        'MEARN': [
            { 
                name: 'MongoDB Basics', 
                description: 'Learn to work with MongoDB for NoSQL databases.',
                groupName: 'Group:1',
                instructor: 'Aisha',
                startDate: '2024-01-25',
                endDate: '2024-05-25',
                numStudents: 4,
                price: '150 $'
            },
            { 
                name: 'Express.js Essentials', 
                description: 'Build RESTful APIs with Express.js.',
                groupName: 'Group:2',
                instructor: 'Youssef',
                startDate: '2024-02-20',
                endDate: '2024-06-20',
                numStudents: 3,
                price: '160 $'
            },
            { 
                name: 'React for Beginners', 
                description: 'Create dynamic UIs with React.',
                groupName: 'Group:3',
                instructor: 'Hana',
                startDate: '2024-03-15',
                endDate: '2024-07-15',
                numStudents: 5,
                price: '180 $'
            },
            { 
                name: 'Node.js Fundamentals', 
                description: 'Understand server-side programming with Node.js.',
                groupName: 'Group:4',
                instructor: 'Ali',
                startDate: '2024-04-10',
                endDate: '2024-08-10',
                numStudents: 2,
                price: '140 $'
            }
        ],
        'DEVOPS': [
            { 
                name: 'Introduction to DevOps', 
                description: 'Understand the principles of DevOps and CI/CD.',
                groupName: 'Group:1',
                instructor: 'Rania',
                startDate: '2024-01-30',
                endDate: '2024-05-30',
                numStudents: 6,
                price: '170 $'
            },
            { 
                name: 'Docker Essentials', 
                description: 'Learn containerization with Docker.',
                groupName: 'Group:2',
                instructor: 'Mahmoud',
                startDate: '2024-02-25',
                endDate: '2024-06-25',
                numStudents: 4,
                price: '150 $'
            },
            { 
                name: 'Kubernetes Basics', 
                description: 'Manage containerized apps with Kubernetes.',
                groupName: 'Group:3',
                instructor: 'Sami',
                startDate: '2024-03-20',
                endDate: '2024-07-20',
                numStudents: 3,
                price: '160 $'
            },
            { 
                name: 'CI/CD with Jenkins', 
                description: 'Automate your deployment pipeline with Jenkins.',
                groupName: 'Group:4',
                instructor: 'Leila',
                startDate: '2024-04-15',
                endDate: '2024-08-15',
                numStudents: 5,
                price: '180 $'
            }
        ]
    };
    const courseOptions = document.getElementById('courseOptions');
    if (selectedTrack && coursesData[selectedTrack]) {
        console.log('Populating courses for track:', selectedTrack);
        coursesData[selectedTrack].forEach(course => {
            const option = document.createElement('div');
            option.className = 'course-option';

            const title = document.createElement('h3');
            title.textContent = course.name;

            const description = document.createElement('p');
            description.textContent = course.description;

            option.appendChild(title);
            option.appendChild(description);
            option.style.background = '#E6F4EA';
            option.style.border = '2px solid #036AFF';
            option.style.borderRadius = '8px';
            option.style.padding = '20px';
            option.style.width = '200px';
            option.style.cursor = 'pointer';
            option.style.transition = 'all 0.3s';
            option.style.backdropFilter = 'blur(2px)';

            title.style.margin = '0 0 10px';
            title.style.fontSize = '20px';
            title.style.color = '#191818';

            description.style.margin = '0';
            description.style.fontSize = '14px';
            description.style.color = '#333';
            option.addEventListener('mouseover', function() {
                this.style.background = '#036AFF';
                this.style.color = 'white';
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 8px rgba(3, 106, 255, 0.2)';
                title.style.color = 'white';
                description.style.color = 'white';
            });

            option.addEventListener('mouseout', function() {
                this.style.background = '#E6F4EA';
                this.style.color = '#191818';
                this.style.transform = 'none';
                this.style.boxShadow = 'none';
                title.style.color = '#191818';
                description.style.color = '#333';
            });
            option.addEventListener('click', function() {
                console.log('Course clicked:', course.name);
                localStorage.setItem('selectedCourse', JSON.stringify(course));
                console.log('localStorage set:', localStorage.getItem('selectedCourse'));
                try {
                    window.location.href = `../coursesDetails/details.html?course=${encodeURIComponent(course.name)}`;
                } catch (error) {
                    console.error('Redirection failed:', error);
                }
            });

            courseOptions.appendChild(option);
        });
    } else {
        const fallback = document.createElement('p');
        fallback.textContent = 'Please select a track to view courses.';
        courseOptions.appendChild(fallback);
    }
    document.body.style.fontFamily = "'Circular Std', sans-serif";
    document.body.style.color = '#191818';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.position = 'relative';

    const backgroundLayer = document.querySelector('.background-layer');
    backgroundLayer.style.position = 'fixed';
    backgroundLayer.style.top = '0';
    backgroundLayer.style.left = '0';
    backgroundLayer.style.width = '100%';
    backgroundLayer.style.height = '100%';
    backgroundLayer.style.backgroundImage = "url('https://identity.iti.gov.eg/images/ITI%20logo.png')";
    backgroundLayer.style.backgroundRepeat = 'no-repeat';
    backgroundLayer.style.backgroundPosition = 'center';
    backgroundLayer.style.backgroundSize = 'contain';
    backgroundLayer.style.opacity = '0.1';
    backgroundLayer.style.zIndex = '-1';

    const header = document.querySelector('header');
    // header.style.backgroundColor = 'rgba(3, 106, 255, 0.9)';
    header.style.backgroundImage = 'linear-gradient(120deg, #ed10de 0%, #9405e7 100%)';
    header.style.color = 'white';
    header.style.padding = '20px';
    header.style.textAlign = 'center';
    header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

    const container = document.querySelector('.container');
    container.style.maxWidth = '1000px';
    container.style.margin = '40px auto';
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    container.style.flex = '1';
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';

    const courseOptionsContainer = document.getElementById('courseOptions');
    courseOptionsContainer.style.display = 'flex';
    courseOptionsContainer.style.flexWrap = 'wrap';
    courseOptionsContainer.style.gap = '20px';
    courseOptionsContainer.style.justifyContent = 'center';
    courseOptionsContainer.style.marginTop = '30px';

    const footer = document.querySelector('footer');
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.style.backgroundColor = 'rgba(25, 24, 24, 0.9)';
    footer.style.color = 'white';
    footer.style.marginTop = 'auto';

    const navbar = document.querySelector(".navbar");
    const navbarContainer = document.querySelector(".navbar-container");
    const navbarLogo = document.querySelector(".navbar-logo");
    const navbarLinks = document.querySelector(".navbar-links");
    const navLinks = document.querySelectorAll(".nav-link");
  
    navbar.style.backgroundColor = "rgba(3, 106, 255, 0.9)";
    navbar.style.color = "white";
    navbar.style.padding = "10px 0";
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    navbar.style.zIndex = "1000";
    navbar.style.fontFamily = "'Circular Std', sans-serif";
  
    navbarContainer.style.maxWidth = "1200px";
    navbarContainer.style.margin = "0 auto";
    navbarContainer.style.display = "flex";
    navbarContainer.style.alignItems = "center";
    navbarContainer.style.justifyContent = "space-between";
    navbarContainer.style.padding = "0 20px";
  
    navbarLogo.style.fontSize = "20px";
    navbarLogo.style.fontWeight = "bold";
    navbarLogo.style.color = "white";
    navbarLogo.style.textDecoration = "none";
  
    navbarLinks.style.display = "flex";
    navbarLinks.style.gap = "15px";
  
    navLinks.forEach((link) => {
        link.style.color = "white";
        link.style.textDecoration = "none";
        link.style.fontSize = "16px";
        link.style.padding = "8px 12px";
        link.style.borderRadius = "5px";
    });
});