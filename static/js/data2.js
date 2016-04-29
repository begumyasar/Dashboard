var data2 = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {   // Aantal meldingen
            label: "Linnaeusparkweg (meldingen)",
            backgroundColor: "rgba(255,100,100,0.5)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]
        }
    ]
};



var Linnaeusparkweg = document.getElementById("LinnaeusparkwegMelding");

var myBarChart2 = new Chart(Linnaeusparkweg, {
    type: 'bar',
    data: data2,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});

var activity = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {
            label: "Linnaeusparkweg (Activiteit)",
            backgroundColor: "rgba(0,172,80,0.5)",
            borderColor: "rgba(0,172,80,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]  
        }
    ]
};

var LinnaeusparkwegActivity = document.getElementById("LinnaeusparkwegActivity");

var myLineChart = new Chart(LinnaeusparkwegActivity, {
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
            label: "Linnaeusparkweg (Sound)",
            backgroundColor: "rgba(244,138,56,0.5)",
            borderColor: "rgba(244,138,56,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]  
        }
    ]
};

var LinnaeusparkwegSound = document.getElementById("LinnaeusparkwegSound");

var myLineChart = new Chart(LinnaeusparkwegSound, {
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
            label: "Linnaeusparkweg (Light)",
            backgroundColor: "rgba(23,35,51,0.5)",
            borderColor: "rgba(23,35,51,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]  
        }
    ]
};

var LinnaeusparkwegLight = document.getElementById("LinnaeusparkwegLight");

var myLineChart = new Chart(LinnaeusparkwegLight, {
    type: 'line',
    data: light,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});