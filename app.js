document.getElementById('downloadbtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'deepesh agarwal resume (2) (1).pdf';
    link.download = 'deepesh agarwal resume (2) (1).pdf'; // Change this to the desired file name
    document.body.appendChild(link);
    link.click();
    console.log('btn was clicked');
    document.body.removeChild(link);
});
