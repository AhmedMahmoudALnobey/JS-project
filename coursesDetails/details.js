document.addEventListener('DOMContentLoaded', function() {
    console.log('details.js loaded'); // Debug: Check if the script loads

    // Set the footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Get the course details from localStorage
    let selectedCourse = JSON.parse(localStorage.getItem('selectedCourse'));

    // If localStorage is empty, use fallback data
    if (!selectedCourse) {
        console.log('No data in localStorage, using fallback data'); // Debug: Check if fallback is used
        selectedCourse = {
            name: 'Sample Course',
            groupName: 'Group:Sample',
            instructor: 'Sample Instructor',
            startDate: '2024-01-01',
            endDate: '2024-06-01',
            numStudents: 3,
            price: '100 $'
        };
        // Optionally, store the fallback data in localStorage for the next page
        localStorage.setItem('selectedCourse', JSON.stringify(selectedCourse));
    }

    // Update the header with the course name
    const courseHeader = document.getElementById('courseHeader');
    if (selectedCourse && selectedCourse.name) {
        courseHeader.textContent = selectedCourse.name;
    } else {
        courseHeader.textContent = 'Course Details';
    }

    // Get the course details container
    const courseDetails = document.getElementById('courseDetails');

    // Populate course details
    if (selectedCourse) {
        // Create elements for each piece of information
        const groupName = document.createElement('p');
        groupName.textContent = `Group Name: ${selectedCourse.groupName}`;
        groupName.style.margin = '10px 0';
        groupName.style.fontSize = '16px';
        groupName.style.color = '#333';

        const instructor = document.createElement('p');
        instructor.textContent = `Instructor Name: ${selectedCourse.instructor}`;
        instructor.style.margin = '10px 0';
        instructor.style.fontSize = '16px';
        instructor.style.color = '#FF0000'; // Red color for instructor name like in the image

        const startDate = document.createElement('p');
        startDate.textContent = `Start Date: ${selectedCourse.startDate}`;
        startDate.style.margin = '10px 0';
        startDate.style.fontSize = '16px';
        startDate.style.color = '#333';

        const endDate = document.createElement('p');
        endDate.textContent = `End Date: ${selectedCourse.endDate}`;
        endDate.style.margin = '10px 0';
        endDate.style.fontSize = '16px';
        endDate.style.color = '#333';

        const numStudents = document.createElement('p');
        numStudents.textContent = `Number of Students in Group: ${selectedCourse.numStudents}`;
        numStudents.style.margin = '10px 0';
        numStudents.style.fontSize = '16px';
        numStudents.style.color = '#333';

        const price = document.createElement('p');
        price.textContent = `Price: ${selectedCourse.price}`;
        price.style.margin = '10px 0';
        price.style.fontSize = '16px';
        price.style.color = '#333';

        // Create the Enroll button
        const enrollButton = document.createElement('button');
        enrollButton.textContent = 'Enroll';
        enrollButton.style.backgroundColor = '#036AFF';
        enrollButton.style.color = 'white';
        enrollButton.style.padding = '12px 25px';
        enrollButton.style.fontSize = '18px';
        enrollButton.style.fontWeight = 'bold';
        enrollButton.style.border = 'none';
        enrollButton.style.borderRadius = '8px';
        enrollButton.style.cursor = 'pointer';
        enrollButton.style.transition = 'background-color 0.3s, transform 0.3s';

        enrollButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#024DBA';
            this.style.transform = 'translateY(-2px)';
        });

        enrollButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#036AFF';
            this.style.transform = 'translateY(0)';
        });

        enrollButton.addEventListener('click', function() {
            // Ensure the course data is in localStorage
            localStorage.setItem('selectedCourse', JSON.stringify(selectedCourse));
            // Redirect to the session page
            try {
                window.location.href = '../sessionDetails/session.html';
            } catch (error) {
                console.error('Redirection to session page failed:', error); // Debug: Catch redirection errors
            }
        });

        // Append all elements to the container
        courseDetails.appendChild(groupName);
        courseDetails.appendChild(instructor);
        courseDetails.appendChild(startDate);
        courseDetails.appendChild(endDate);
        courseDetails.appendChild(numStudents);
        courseDetails.appendChild(price);
        courseDetails.appendChild(enrollButton);
    } else {
        // Fallback if no course is selected
        const fallback = document.createElement('p');
        fallback.textContent = 'No course selected. Please go back and select a course.';
        courseDetails.appendChild(fallback);
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
    header.style.backgroundColor = '#036AFF';
    header.style.color = 'white';
    header.style.padding = '20px';
    header.style.textAlign = 'center';
    header.style.fontSize = '24px';
    header.style.fontWeight = 'bold';
    header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

    const container = document.querySelector('.container');
    container.style.maxWidth = '1000px';
    container.style.margin = '40px auto';
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    container.style.flex = '1';
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';

    const courseDetailsContainer = document.getElementById('courseDetails');
    courseDetailsContainer.style.display = 'grid';
    courseDetailsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    courseDetailsContainer.style.gap = '20px';
    courseDetailsContainer.style.marginTop = '30px';
    courseDetailsContainer.style.padding = '20px';

    const courseDetailsElements = courseDetailsContainer.children;
    Array.from(courseDetailsElements).forEach(detail => {
        detail.style.background = '#F9F9F9'; // Light background
        detail.style.border = '1px solid #036AFF';
        detail.style.borderRadius = '10px';
        detail.style.padding = '15px';
        detail.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        detail.style.transition = 'transform 0.3s, box-shadow 0.3s';

        detail.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        detail.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    const footer = document.querySelector('footer');
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.style.backgroundColor = '#191818';
    footer.style.color = 'white';
    footer.style.marginTop = 'auto';

    const footerLinks = footer.querySelectorAll('a');
    footerLinks.forEach(link => {
        link.style.color = '#036AFF';
        link.style.textDecoration = 'none';
        link.style.transition = 'color 0.3s';

        link.addEventListener('mouseover', function() {
            this.style.color = '#024DBA';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = '#036AFF';
        });
    });
});