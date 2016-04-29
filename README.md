# Dashboard Amsterdam Oost

## The problem/project
Well, a typical drug deal has a known rhythm. A dealer stands on a spot, a person drives/walks up, pauses and drive/walks off. So if we measure a person coming up, standing still and driving/walking off, we could say that a possible drug deal occurred.

So why do we want to know this? We had an assignment of a community to measure if a drug deal occurs. We think it's more useful to measure how popular some spots are and then react, instead of a direct reaction by the police.

You can see the finished project [here](http://dashboard.dennisvanbennekom.com/)

## What's everybody been doing

### Martijn Nieuwenhuizen
##### Hardware
For hardware part, a NodeMCU and an Arduino Leonardo are used to measure the activity. For more information about this [read this readme](https://github.com/MartijnNieuwenhuizen/Internet_of_Things/tree/master/Eindopdracht)

##### Done
At the hardware part it was a lot of trial and error. The biggest hickup was to connect the custom Arduino to the NodeMCU. This is done by using the Serial connection, which in the end didn’t work properly :(. I’ve try’ed to connect the two on multiple ways’s, even by reformating the signal from a 5v to a 3.3v, even this didn’t work. But the rest of the sensors did! The outcome is a large data set, collected in a view day’s, which shows the movement at two points in the building.

### Dennis van Bennekom
During this project I was one of the frontenders. My main task was to create the real time map. Also I was responsible for keeping track of the code style and structure. We used git and GitHub to work together.

For the real time map I used the [Google Maps API](https://developers.google.com/maps/). I chose this API because it's easily customizable and you can add markers with `onclick` events so they can redirect to the correct page.

The pages with the charts are created with the [Chart.js](http://www.chartjs.org/) library. We chose this library because it's easy to create charts that can be updated after they are created. Every 5 seconds we fetch the data we need for the graphs and update them without a page reload.

### Tom Snepvangers
##### Notifications
The users should be informed when the sensor detect unusual activity in the streets. 
Therefore i created a notification system for the user. The user receive a notification on the accounts page, with this notifaction the user gets the information about when the unusual activity was detected, where it was detected and the ability to confirm if the mention was probably true / false or an blanco option if they don't know for sure.

If the browser of the user supports the Notification Web API, there will be send a push Notification aswell.
For further code explanation visit the [notification repo](https://github.com/tomsnep/project-3/tree/master/notifications)

## Sem Bakkum

##### Visual invetory
I started out creating a visual inventory to determine which colors and fonts we should use.
For more information about this inventory click on the following link: [Visual inventory](https://github.com/SemBakkum/IoT/blob/master/IoT/Week%204/Visual%20inventory/visualinventory_dashboard.pdf).

With these fundamentals Wesley and I started on coding the design of the website, becaus of the little time we had to complete this project this seemend to be a better idea. 

##### Google maps design
Wesley started on creating the menu of the website and after I finished the inventory I started on the design of the map we use on the home page. 
I made use of the google maps api wizard to design your own [map](http://googlemaps.github.io/js-samples/styledmaps/wizard/index.html).
On this map we display markers that hold a number. This number represents the amount of calls residents made about suspicious behaviour. The markers are my design and based on the colors we came upon in the visual inventory. 

##### Charts
For the charts we used [chart js](http://www.chartjs.org/). For a good uderstanding of how this library works we readed the docs and started changing some code. The changes resulted in how the charts look right know. 

##### Login
For the design of the login I didn't have to search for any patterns, because I still had a pretty good pattern from a previous project.

##### Rounding up
In the beginning we really started designing for this project, but as the week was going by we both started doing more front-end. Or better said we started doing more UI development. 

### Leander van Baekel
Ik ben begonnen met het stuk van de communicatie van de ESP. Ik heb er voor gezorgd dat de ESP's de data kunnen posten naar onze api en dat deze data wordt opgeslagen in een mongo database.

Vervolgens ben ik deze data gaan omreken in een 'cijfer' zodat er een waarde van 0 tot 10 zodat de data makkelijk leesbaar is.

Daarna heb ik de settings pagina gemaakt zodat de alarm meldingen makkelijk afgesteld kunnen worden.


### Maaike Hek
Ik ben begonnen met het opzetten van de alarmen, hoe ze worden aangemaakt en hoe we ze kunnen vinden in de database en updaten.

Verder ben ik aan de 'average' calls, hiermee kan de gebruiker de gemiddelde van een dag, week of maand opvragen.

Als laatste heb ik een index pagina met informatie, een klein beetje css en een mudkip toegevoegt.


### Wesley van Drimmelen
I've chosen to be part of the UX/UI together with Sem Bakkum. This meant we are responsible for the design/creation of the user interface of the website. Sem started by creating a visual inventory, and I started to look up some design principles and tips for dashboards.

By now, we had a rough idea about how the dashboard should look like, and this meant time for coding! I started coding the basis of the user interface, which was a working menu, layout and adding the necessary Chart.js library.

Sem and I sometimes had an argument about how things should look like, but in the end we've always managed to find ourselves a solution.

I've also made the html and css layout for the chart section and tried to make it as responsive as I can, but it didn't work out that well because of the chart.js library.

As Sem already said, in the beginning we've started with the UX/UI but we went to do front-end stuff.