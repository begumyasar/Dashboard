(function() {
    var data2 = {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {   // Aantal meldingen
                label: "Linnaeusparkweg (meldingen)",
                backgroundColor: "rgba(255,100,100,0.5)",
                borderColor: "rgba(255,0,0,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []
            }
        ]
    };

    var linnaeusparkweg = document.getElementById("LinnaeusparkwegMelding");

    var linnaeusparkwegChart = new Chart(linnaeusparkweg, {
        type: 'bar',
        data: data2,
        responsive: true,
        position: 'bottom',
        defaultFontColor: "#FFFFFF"
    });

    var activity2 = {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {
                label: "Linnaeusparkweg (Activiteit)",
                backgroundColor: "rgba(0,172,80,0.5)",
                borderColor: "rgba(0,172,80,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []  
            }
        ]
    };

    var linnaeusparkwegActivity = document.getElementById("LinnaeusparkwegActivity");

    var linnaeusparkwegActivityChart = new Chart(linnaeusparkwegActivity, {
        type: 'line',
        data: activity2,
        responsive: true,
        position: 'bottom',
        defaultFontColor: "#FFFFFF"
    });

    var sound2 = {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {
                label: "Linnaeusparkweg (Sound)",
                backgroundColor: "rgba(244,138,56,0.5)",
                borderColor: "rgba(244,138,56,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []  
            }
        ]
    };

    var linnaeusparkwegSound = document.getElementById("LinnaeusparkwegSound");

    var linnaeusparkwegSoundChart = new Chart(linnaeusparkwegSound, {
        type: 'line',
        data: sound2,
        responsive: true,
        position: 'bottom',
        defaultFontColor: "#FFFFFF"
    });

    var light2 = {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
            {
                label: "Linnaeusparkweg (Light)",
                backgroundColor: "rgba(23,35,51,0.5)",
                borderColor: "rgba(23,35,51,1)",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(53,64,82,0.5)",
                hoverBorderColor: "rgba(53,64,82,1)",
                data: []  
            }
        ]
    };

    var linnaeusparkwegLight = document.getElementById("LinnaeusparkwegLight");

    var linnaeusparkwegLightChart = new Chart(linnaeusparkwegLight, {
        type: 'line',
        data: light2,
        responsive: true,
        position: 'bottom',
        defaultFontColor: "#FFFFFF"
    });
    
    function updateData() {
        var currentDate = new Date();
        var day = currentDate.getUTCDate();
        var month = currentDate.getUTCMonth() + 1;
        var year = currentDate.getUTCFullYear();
        
        fetch('http://api.leandervanbaekel.nl/alarm/day/' + day + '/' + month + '/' + year + '/esp2')
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
                
                linnaeusparkwegChart.data.datasets[0].data = chartData;
                linnaeusparkwegChart.update();
            });
            
        fetch('http://api.leandervanbaekel.nl/activity/day/' + day + '/' + month + '/' + year + '/esp2')
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
                
                linnaeusparkwegActivityChart.data.datasets[0].data = chartData;
                linnaeusparkwegActivityChart.update();
            });
            
        fetch('http://api.leandervanbaekel.nl/average/day/esp2/' + day + '/' + month + '/' + year)
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
                
                linnaeusparkwegSoundChart.data.datasets[0].data = sound;
                linnaeusparkwegSoundChart.update();
                
                linnaeusparkwegLightChart.data.datasets[0].data = ldr;
                linnaeusparkwegLightChart.update();
            });
    }

    updateData();
    var interval = setInterval(updateData, 5000);
    
    window.onbeforeunload = function(event) {
        interval.clear();
    };
}());