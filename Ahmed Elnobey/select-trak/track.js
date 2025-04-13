document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    const tracks = ['Software Fundamentals', 'Power BI', 'MEARN', 'DEVOPS'];
    const trackOptions = document.getElementById('trackOptions');
    
    tracks.forEach(track => {
        const option = document.createElement('div');
        option.className = 'track-option';
        option.textContent = track;
        option.style.background = 'rgba(255, 255, 255, 0.9)';
        option.style.border = '2px solid #036AFF';
        option.style.borderRadius = '8px';
        option.style.padding = '20px';
        option.style.cursor = 'pointer';
        option.style.transition = 'all 0.3s';
        option.style.fontSize = '18px';


        option.addEventListener('mouseover', function() {
            this.style.background = '#036AFF';
            this.style.color = 'white';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(3, 106, 255, 0.2)';
        });

        option.addEventListener('mouseout', function() {
            if (!this.classList.contains('selected')) {
                this.style.background = 'rgba(255, 255, 255, 0.9)';
                this.style.color = '#191818';
            }
        });

        option.addEventListener('click', function() {
            document.querySelectorAll('.track-option').forEach(opt => {
                opt.classList.remove('selected');
                opt.style.background = 'rgba(255, 255, 255, 0.9)';
                opt.style.color = '#191818';
                opt.style.fontWeight = 'normal';
            });
            this.classList.add('selected');
            this.style.background = '#036AFF';
            this.style.color = 'white';
            this.style.fontWeight = '500';
            localStorage.setItem('selectedTrack', track);
            window.location.href = `../coursesByEachTrack/courses.html?track=${encodeURIComponent(track)}`;
        });
        trackOptions.appendChild(option);
    });

    const selectedTrack = localStorage.getItem('selectedTrack');
    if (selectedTrack) {
        const options = document.querySelectorAll('.track-option');
        options.forEach(opt => {
            if (opt.textContent === selectedTrack) {
                opt.classList.add('selected');
                opt.style.background = '#036AFF';
                opt.style.color = 'white';
                opt.style.fontWeight = '500';
            }
        });
    }
    document.body.style.fontFamily = "'Circular Std', sans-serif";
    document.body.style.color = '#191818';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';

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
    header.style.backgroundImage = 'linear-gradient(120deg, #ed10de 0%, #9405e7 100%)';
    header.style.color = 'white';
    header.style.padding = '20px';
    header.style.textAlign = 'center';
    header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

    const container = document.querySelector('.container');
    container.style.maxWidth = '800px';
    container.style.margin = '40px auto';
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    container.style.flex = '1';
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';

    const trackOptionsContainer = document.getElementById('trackOptions');
    trackOptionsContainer.style.display = 'flex';
    trackOptionsContainer.style.flexDirection = 'column';
    trackOptionsContainer.style.gap = '15px';
    trackOptionsContainer.style.marginTop = '30px';

    const footer = document.querySelector('footer');
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.style.backgroundColor = 'rgba(25, 24, 24, 0.9)';
    footer.style.color = 'white';
    footer.style.marginTop = 'auto';
});