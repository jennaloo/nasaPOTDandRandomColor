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

        var myInfo = document.getElementById('info');
        myInfo.innerText = data.explanation;

        myInfo.style.backgroundColor = color();

    },

    type: "GET"
});


function color() {

    var dayArray = [0, 1, 2, 3, 4, 5, 6, 7];
    var colorArray = ["#39CCCC", "#FF4136", "#0074D9", "#FFDC00", "#3D9970", "#FF851B", "#9BBDBB", "#01FF70"];
    console.log(dayArray);
    console.log(colorArray);
    for (i = 0; i < dayArray.length; i++) {
        if (new Date().getDay() == dayArray[i]) {
            return color = colorArray[i];
        }
    }
}
