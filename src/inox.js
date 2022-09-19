
var cities = ["Select City", "Bangalore", "Hyderabad"];
        var banCinemas = ["Select Cinema", "PVR: Forum Mall","7D VR Voyage: Garuda Mall"];
        var hydCinemas = ["Select Cinema", "INOX: GSM Mall","Platinum Movietime"];
          
        var _7dMovies = ["Select Movie", "Brahmastra Part One ","Karthikeya - 2"];
        var pvrMovies = ["Select Movie", "Pathaan", "Dunki","Jawaan"];
        var inoxMovies = ["Select Movie",  "Ek tha Tiger 3","Brahmastra Part One "];
        var platinumMovies = ["Select Movie","Fast & Furious 10","Don-3"];

        var movieDetails = [
             
            { Name: "Brahmastra Part One ", Photo: "../images/Brah.jpg", time: ["6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            { Name: "Karthikeya - 2", Photo: "../images/Kart.jpg", time: ["6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            
            { Name: "Pathaan", Photo: "../images/Pathaan.jpg", time: ["12:00AM","3:00AM","6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            { Name: "Dunki", Photo: "../images/Dunki.jpg", time: ["12:00AM","3:00AM","6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            { Name: "Jawaan", Photo: "../images/Jawaan.jpg", time: ["12:00AM","3:00AM","6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            { Name: "Ek tha Tiger 3", Photo: "../images/Tiger.jpg", time: ["12:00AM","3:00AM","6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            { Name: "Don-3", Photo: "../images/Don.jpg", time: ["12:00AM","3:00AM","6:00AM","9:00AM","12:00PM","3:00PM", "7:00PM"] },
            
            { Name: "Fast & Furious 10", Photo: "../images/Fast.png", time: ["9:00AM","12:00PM","3:00PM", "7:00PM"] },


        ]
        var seats = [1, 2, 3, 4, 5];
        var classes = ["Normal", "Gold", "Premium"]

        function bodyload() {

            var lstCity = document.getElementById('lstCity');
            for (var i = 0; i < cities.length; i++) {
                var option = document.createElement('option')
                option.text = cities[i];
                option.value = cities[i];
                lstCity.appendChild(option)
            }
            var lstSeats = document.getElementById('lstSeats');

            for (var i = 0; i < seats.length; i++) {

                var option = document.createElement('option');
                option.text = seats[i];
                option.value = seats[i];
                lstSeats.appendChild(option)

            }

            var lstClasses = document.getElementById('lstClasses');
            for (var i = 0; i < classes.length; i++) {
                var option = document.createElement('option');
                option.text = classes[i];
                option.value = classes[i];
                lstClasses.appendChild(option)
            }

        }
        var getSeat = 1;
        function SeatsChanged() {
            getSeat = document.getElementById('lstSeats').value;
        }

        var classVal
        var normalCost = 150;
        var goldCost = 0;
        var premiumCost = 0;
        var totalAmount = 0;
        function ClassesChanged() {
            classVal = document.getElementById('lstClasses').value
            if (classVal == "Normal") {
                normalCost = 150;
            }
            if (classVal == "Gold") {
                goldCost = 300;
            }
            if (classVal == "Premium") {
                premiumCost = 600;
            }
        }
        function AddCinemas(cinema) {
            var lstCinema = document.getElementById('lstCinema');
            for (var i = 0; i < cinema.length; i++) {
                var option = document.createElement('option');
                option.text = cinema[i];
                option.value = cinema[i];
                lstCinema.appendChild(option)
            }
        }
        function CityChanged() {
            var city = document.getElementById('lstCity').value;
            switch (city) {
                case "Bangalore":
                    document.getElementById('lstCinema').innerHTML = "";
                    AddCinemas(banCinemas);
                    break;
                case "Hyderabad":
                    document.getElementById('lstCinema').innerHTML = "";
                    AddCinemas(hydCinemas);
                    break;
                default:
                    document.getElementById('lstCinema').innerHTML = "";
                    alert('Please Select City');
                    break;
            }
        }

        function AddMovies(cinema) {
            var lstMovies = document.getElementById('lstMovies');
            for (var i = 0; i < cinema.length; i++) {
                var option = document.createElement('option');
                option.text = cinema[i];
                option.value = cinema[i];
                lstMovies.appendChild(option)
            }
        }
        function CinemaChanged() {
            var cinemas = document.getElementById('lstCinema').value;
            switch (cinemas) {
                case "7D VR Voyage: Garuda Mall":
                     document.getElementById("lstMovies").innerHTML = "";
                     AddMovies(_7dMovies);
                     break;
                case "PVR: Forum Mall":
                    document.getElementById("lstMovies").innerHTML = "";
                    AddMovies(pvrMovies);
                    break;
                case "INOX: GSM Mall":
                    document.getElementById("lstMovies").innerHTML = "";
                    AddMovies(inoxMovies);
                    break;
                 case "Platinum Movietime":
                     document.getElementById("lstMovies").innerHTML = "";
                     AddMovies(platinumMovies);
                     break;
                default:
                    document.getElementById("lstMovies").innerHTML = "";
                    alert("Please Select a Cinema")
            }
        }

        function AddShowTime(time) {
            var lstShowTimes = document.getElementById('lstShowTimes');
            for (var i = 0; i < time.length; i++) {
                var option = document.createElement('option');
                option.text = time[i];
                option.value = time[i];
                lstShowTimes.appendChild(option);
            }
        }

        var movie;
        var showTime = [];
        function MovieChanged() {
            var movieName = document.getElementById('lstMovies').value;
            movie = movieDetails.filter(x => x.Name == movieName);
            document.getElementById("poster").src = movie[0].Photo;
            showTime = movie[0].time
            var lstShowTimes = document.getElementById('lstShowTimes');
            document.getElementById('lstShowTimes').innerHTML = '';
            for (var i = 0; i < showTime.length; i++) {
                var option = document.createElement('option');
                option.text = showTime[i];
                option.value = showTime[i];
                lstShowTimes.appendChild(option)

            }
        }


        function BookTicketClick(d1) {
            document.getElementById('lblDate').innerHTML = document.getElementById(d1).value;
            document.getElementById('lblCity').innerHTML = document.getElementById('lstCity').value;
            document.getElementById('lblCinema').innerHTML = document.getElementById('lstCinema').value;
            document.getElementById('lblMovie').innerHTML = document.getElementById('lstMovies').value;
            document.getElementById('lblTime').innerHTML = document.getElementById('lstShowTimes').value;
            document.getElementById('lblSeat').innerHTML = document.getElementById('lstSeats').value;
            document.getElementById('lblClass').innerHTML = document.getElementById('lstClasses').value;

            totalAmount = getSeat * normalCost;
            if (classVal == "Normal" && getSeat) {
                normalCost = 150;
                totalAmount = getSeat * normalCost;
            }
            if (classVal == "Gold") {
                goldCost = 300;
                totalAmount = getSeat * goldCost;

            }
            if (classVal == "Premium") {
                premiumCost = 600;
                totalAmount = getSeat * premiumCost;

            }
            document.getElementById('totalAmount').innerHTML = totalAmount;
        }