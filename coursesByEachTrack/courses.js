document.addEventListener('DOMContentLoaded', function() {
    // Set the footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Get the selected track from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTrack = urlParams.get('track');

    // Update the header with the selected track
    const trackHeader = document.getElementById('trackHeader');
    if (selectedTrack) {
        trackHeader.textContent = `Courses for ${selectedTrack}`;
    } else {
        trackHeader.textContent = 'Courses';
    }

    // Define courses for each track
    const coursesData = {
        'Software Fundamentals': [
            { name: 'Introduction to Programming', description: 'Learn the basics of coding with Python. Perfect for beginners!' },
            { name: 'Data Structures', description: 'Understand arrays, lists, and more to build efficient programs.' },
            { name: 'Algorithms', description: 'Master problem-solving with key algorithms and techniques.' },
            { name: 'Version Control with Git', description: 'Learn how to manage your code using Git and GitHub.' }
        ],
        'Power BI': [
            { name: 'Power BI Basics', description: 'Get started with Power BI for data visualization.' },
            { name: 'Data Modeling', description: 'Learn to create relationships and models in Power BI.' },
            { name: 'DAX Fundamentals', description: 'Master Data Analysis Expressions for advanced calculations.' },
            { name: 'Dashboard Design', description: 'Create stunning dashboards to present your data.' }
        ],
        'MEARN': [
            { name: 'MongoDB Basics', description: 'Learn to work with MongoDB for NoSQL databases.' },
            { name: 'Express.js Essentials', description: 'Build RESTful APIs with Express.js.' },
            { name: 'React for Beginners', description: 'Create dynamic UIs with React.' },
            { name: 'Node.js Fundamentals', description: 'Understand server-side programming with Node.js.' }
        ],
        'DEVOPS': [
            { name: 'Introduction to DevOps', description: 'Understand the principles of DevOps and CI/CD.' },
            { name: 'Docker Essentials', description: 'Learn containerization with Docker.' },
            { name: 'Kubernetes Basics', description: 'Manage containerized apps with Kubernetes.' },
            { name: 'CI/CD with Jenkins', description: 'Automate your deployment pipeline with Jenkins.' }
        ]
    };

    // Get the course options container
    const courseOptions = document.getElementById('courseOptions');

    // Populate courses for the selected track
    if (selectedTrack && coursesData[selectedTrack]) {
        coursesData[selectedTrack].forEach(course => {
            const option = document.createElement('div');
            option.className = 'course-option';

            const title = document.createElement('h3');
            title.textContent = course.name;

            const description = document.createElement('p');
            description.textContent = course.description;

            option.appendChild(title);
            option.appendChild(description);

            // Apply styles to the course card
            option.style.background = '#E6F4EA'; // Light green background like in the image
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

            // Hover effects
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

            courseOptions.appendChild(option);
        });
    } else {
        // Fallback if no track is selected or track is invalid
        const fallback = document.createElement('p');
        fallback.textContent = 'Please select a track to view courses.';
        courseOptions.appendChild(fallback);
    }

    // Apply styles to other elements in JS
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
    header.style.backgroundColor = 'rgba(3, 106, 255, 0.9)';
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
});