var data = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {   // Aantal meldingen
            label: "Voltaplein (meldingen)",
            backgroundColor: "rgba(255,100,100,0.5)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]
        }
    ]
};



var voltaplein = document.getElementById("VoltapleinMelding");

var voltapleinChart = new Chart(voltaplein, {
    type: 'bar',
    data: data,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});

var activity = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {
            label: "Voltaplein (Activiteit)",
            backgroundColor: "rgba(255,100,100,0.5)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]  
        }
    ]
};

var voltapleinActivity = document.getElementById("VoltapleinActivity");

var voltapleinActivityChart = new Chart(voltapleinActivity, {
    type: 'line',
    data: activity,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});

var sound = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {
            label: "Voltaplein (Sound)",
            backgroundColor: "rgba(255,100,100,0.5)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]  
        }
    ]
};

var voltapleinSound = document.getElementById("VoltapleinSound");

var voltapleinSoundChart = new Chart(voltapleinSound, {
    type: 'line',
    data: sound,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});

var light = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {
            label: "Voltaplein (Light)",
            backgroundColor: "rgba(255,100,100,0.5)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]  
        }
    ]
};

var voltapleinLight = document.getElementById("VoltapleinLight");

var voltapleinLightChart = new Chart(voltapleinLight, {
    type: 'line',
    data: light,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});

function updateData() {
    var currentDate = new Date();
    var day = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1;
    var year = currentDate.getUTCFullYear();
    
    fetch('http://api.leandervanbaekel.nl/alarm/day/' + day + '/' + month + '/' + year)
        .then(function(response) {
           return response.json(); 
        })
        .then(function(data) {
            console.log(data);
        });
    
    voltapleinChart.update();
    voltapleinActivityChart.update();
    voltapleinSoundChart.update();
    voltapleinLightChart.update();
}

updateData();
setInterval(updateData, 5000);