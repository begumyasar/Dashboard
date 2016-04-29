(function() {
    var data = {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {   // Aantal meldingen
                label: "Voltaplein (meldingen)",
                backgroundColor: "rgba(255,100,100,0.5)",
                borderColor: "rgba(255,0,0,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []
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
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {
                label: "Voltaplein (Activiteit)",
                backgroundColor: "rgba(0,172,80,0.5)",
                borderColor: "rgba(0,172,80,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []  
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
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {
                label: "Voltaplein (Sound)",
                backgroundColor: "rgba(244,138,56,0.5)",
                borderColor: "rgba(244,138,56,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []  
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
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {
                label: "Voltaplein (Light)",
                backgroundColor: "rgba(23,35,51,0.5)",
                borderColor: "rgba(23,35,51,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []  
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
        
        fetch('http://api.leandervanbaekel.nl/alarm/day/' + day + '/' + month + '/' + year + '/' + esp)
            .then(function(response) {
            return response.json(); 
            })
            .then(function(data) {
                var index = 0;
                var chartData = [];
                
                for (var i = 0; i < 24; i++) { chartData[i] = 0 }
                
                data.forEach(function(d) {
                chartData[d.hour]++;
                });
                
                voltapleinChart.data.datasets[0].data = chartData;
                voltapleinChart.update();
            });
            
        fetch('http://api.leandervanbaekel.nl/activity/day/' + day + '/' + month + '/' + year + '/' + esp)
            .then(function(response) {
            return response.json(); 
            })
            .then(function(data) {
                var temp = [];
                
                for (var i = 0; i < 24; i++) { temp[i] = { count: 0, activity: 0 }; }
                
                data.forEach(function(d) {
                    temp[d.hour].count++;
                    temp[d.hour].activity += d.value; 
                });
                
                var chartData =  temp.map(function(d) {
                if (d.count === 0) return 0;
                
                return (d.activity / d.count).toFixed(2); 
                });
                
                voltapleinActivityChart.data.datasets[0].data = chartData;
                voltapleinActivityChart.update();
            });
            
        fetch('http://api.leandervanbaekel.nl/average/day/' + esp + '/' + day + '/' + month + '/' + year)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var ldr = [];
                var pir = [];
                var sound = [];
                
                data.forEach(function(d) {
                d.ldr ? ldr.push(d.ldr) : ldr.push(0);
                d.pir ? pir.push(Math.round(d.pir)) : pir.push(0);
                d.sound ? sound.push(d.sound) : sound.push(0);
                });
                
                voltapleinSoundChart.data.datasets[0].data = sound;
                voltapleinSoundChart.update();
                
                voltapleinLightChart.data.datasets[0].data = ldr;
                voltapleinLightChart.update();
            });
    }

    updateData();
    var interval = setInterval(updateData, 5000);
    
    window.onbeforeunload = function(event) {
        voltapleinChart.data.datasets[0].data = [];
        voltapleinActivityChart.data.datasets[0].data = [];
        voltapleinLightChart.data.datasets[0].data = [];
        voltapleinSoundChart.data.datasets[0].data = [];
        voltapleinChart.update();
        voltapleinActivityChart.update();
        voltapleinLightChart.update();
        voltapleinSoundChart.update();
        
        
        interval.clear();
    };
}());