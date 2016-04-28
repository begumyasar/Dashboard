var data = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
        {   // Aantal meldingen
            label: "Voltastraat 1 (meldingen)",
            backgroundColor: "rgba(255,100,100,0.5)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [3, 5, 2, 0, 0, 1, 0, 0, 0, 1, 5, 6, 4, 5, 3, 6, 5, 4, 3, 8, 12, 14, 19, 17, 6]
        },
        {   // Activity
            label: "Voltastraat 1 (activity)",
            backgroundColor: "rgba(100,100,255,0.5)",
            borderColor: "rgba(0,0,255,1)",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(53,64,82,0.5)",
            hoverBorderColor: "rgba(53,64,82,1)",
            data: [5, 11, 4, 0, 0, 0, 3, 1, 0, 0, 4, 3, 1, 7, 15, 23, 14, 9, 15, 12, 16, 19, 21, 17, 13]
        }
    ]
};



var ctx = document.getElementById("myChart");

var myBarChart = new Chart(ctx, {
    type: 'line',
    data: data,
    responsive: true,
    position: 'bottom',
    defaultFontColor: "#FFFFFF"
});

