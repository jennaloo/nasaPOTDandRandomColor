function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=epssU1ZK74uOEA8A9snNQ7BcQSORkwbsf7SG2cmi',
    dataType: "json",

    success: function (data) {
        console.log(data);

        var myTitle = document.getElementById('title');
        myTitle.innerText = data.title;


        var myImg = document.getElementById("image");
        myImg.innerHTML = '<img src=' + data.url + '>'


        var myh5 = document.getElementById('h5');
        myh5.innerText = data.explanation;

        myh5.style.backgroundColor = '' + getRandomColor() + ''

    },

    type: "GET"
})
