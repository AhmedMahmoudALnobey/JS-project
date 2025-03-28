document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    const tracks = ['Software Fundamentals', 'Power BI', 'MEARN'];
    const trackOptions = document.getElementById('trackOptions');
    tracks.forEach(track => {
        const option = document.createElement('div');
        option.className = 'track-option';
        option.textContent = track;
        
        option.addEventListener('click', function() {
            document.querySelectorAll('.track-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            localStorage.setItem('selectedTrack', track);
            alert(`You selected: ${track}`);
        });
        trackOptions.appendChild(option);
    });
    const selectedTrack = localStorage.getItem('selectedTrack');
    if (selectedTrack) {
        const options = document.querySelectorAll('.track-option');
        options.forEach(opt => {
            if (opt.textContent === selectedTrack) {
                opt.classList.add('selected');
            }
        });
    }
});