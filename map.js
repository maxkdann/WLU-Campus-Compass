
//mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xvZ2FuY3MiLCJhIjoiY2tuaTR3OGVsMHU3ODJ3cDVmMWZ5Z2tuciJ9.OquwBA2myFqOQCC9DiS6YQ';

//list of nodes for testing
//var nodeList = ["laz_se", "laz_n"];
var nodeList = [];
//position array
var posArr = [];
//destination node
var dest_node = "";
//array of every object
var mapIcons = {
    'type': 'FeatureCollection',
    //array of json
    'features': [
        {
            //testing popup area
            'type': 'Feature',
            'properties':{
                'description': 'Lazaridis School of Business and Economics, South East Entrance.',
                'name': 'laz_se',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52859,43.475]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Lazaridis School of Business and Economics, North Entrance.',
                'name': 'laz_n',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530131,43.475478]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Lazaridis School of Business and Economics, South West Entrance.',
                'name': 'laz_sw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529162,43.474775]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Music Building, North East Entrance.',
                'name': 'music_ne',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52833,43.474849]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Music Building, East Entrance.',
                'name': 'music_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528,43.4747]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Music Building, South West Entrance',
                'name': 'music_sw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528302,43.474223]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dining Hall, East Entrance.',
                'name': 'dh_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528301,43.474222]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dining Hall, South Entrance.',
                'name': 'dh_s',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52855,43.4742]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dining Hall, West Entrance.',
                'name': 'dh_w',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528900,43.474045]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building E, East Entrance.',
                'name': 'artse_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529137,43.474009]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building E, West Entrance.',
                'name': 'artse_w',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.5296,43.473855]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, East Entrance.',
                'name': 'artsc_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.5297,43.473854]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, North Entrance.',
                'name': 'artsc_n',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530071,43.473723]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, South Entrance.',
                'name': 'artsc_s',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530076,43.473616]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building, North East Entrance.',
                'name': 'peters_ne',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530535,43.473773]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building, South East Entrance.',
                'name': 'peters_se',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530288,43.473468]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building South West.',
                'name': 'peters_sw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530446,43.473465]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building North West.',
                'name': 'peters_nw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531102,43.47364]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Schliegel Building, Entrance.',
                'name': 'schliegel_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530287,43.473469]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Schliegel Building, North West.',
                'name': 'schliegel_nw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530447,43.473464]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dr. Alvin Woods Building (DAWB), North Entrance.',
                'name': 'dawb_n',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529416,43.473509]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dr. Alvin Woods Building (DAWB), South Entrance.',
                'name': 'dawb_s',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529671,43.473256]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Library, East Entrance.',
                'name': 'library_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529749,43.472942]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Seminary, North Entrance.',
                'name': 'seminary_n',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528888,43.472112]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Seminary, South Entrance.',
                'name': 'seminary_s',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528637,43.471897]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Academic, North Entrance.',
                'name': 'brickeracademic_n',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526549,43.472782]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Academic, South Entrance.',
                'name': 'brickeracademic_s',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526412,43.472621]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, North West Entrance.',
                'name': 'science_nw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525883,43.47349]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, North Entrance.',
                'name': 'science_ne',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525047,43.473593]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, South East Entrance.',
                'name': 'science_se',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524812,43.47326]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, South West Entrance.',
                'name': 'science_sw',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525437,43.472964]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Co-op Building, East Entrance.',
                'name': 'coop_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52426,43.473951]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Athletic Complex (AC), South Entrance.',
                'name': 'ac_s',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525896,43.474966]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Fred Nichols Building, East Entrance.',
                'name': 'frednichols_e',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529100,43.473774]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Southeast corner of University and Albert, on Albert.',
                'name': 'c_1',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531524,43.473590]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Southeast corner of University and Albert, on University.',
                'name': 'c_2',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531106,43.473848]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bus stop at University and Albert, north of Peters Building.',
                'name': 'c_3',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530304,43.474129]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Street lights between Lazaridis Hall and walkway to Solarium/Dining Hall/Arts E.',
                'name': 'c_4',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529473,43.474504]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Street lights at University and Hazel.',
                'name': 'c_5',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528081,43.475095]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Top of driveway into Conrad Hall, near garbage bins.',
                'name': 'c_6',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527125,43.475561]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Southwest corner of University and King.',
                'name': 'c_7',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525176,43.476178]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Driveway entrace to AC parking lot off of King St',
                'name': 'c_8',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524815,43.47491]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Walkway between Alumni Field and AC.',
                'name': 'c_9',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525754,43.47456]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bottom of ramp down from Willison hall into parking lot.',
                'name': 'c_10',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52639,43.474409]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Crossing between walkway up to Fred Nichols and small parking lot.',
                'name': 'c_11',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527389,43.474124]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Courtyard in front of Food Court and statue of Wilf.',
                'name': 'c_12',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528026,43.473784]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Walkway by patio outside of Food Court and back of Macdonald House.',
                'name': 'c_13',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528439,43.473634]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Stairs beside Alumni Hall up to parking lot.',
                'name': 'c_14',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528449,43.473200]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Path outside front of Library.',
                'name': 'c_15',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529388,43.472855]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Entrance to Peters, Scheigel, and Arts C.',
                'name': 'c_16',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530006,43.473451]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Entrance to Peters and Scheligel off of Albert St.',
                'name': 'c_17',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531029,43.473200]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Back of Library on Albert St.',
                'name': 'c_18',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530715,43.472726]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Path from Albert St into parking lot.',
                'name': 'c_19',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530097,43.472521]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Campus Directory sign near Library.',
                'name': 'c_20',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529467,43.472706]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Northeast corner of Albert and Bricker.',
                'name': 'c_21',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529280,43.471539]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Entrace to seminary from Bricker Ave.',
                'name': 'c_22',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528362,43.471883]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Top of pathway from Bricker Ave towards Leupold Residence.',
                'name': 'c_23',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528142,43.472323]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Grassy area between Euler, Leopold, and Bricker Residences.',
                'name': 'c_24',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527892,43.472828]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Ramp down from grassy are into parking lot by Bouckaert Residence.',
                'name': 'c_25',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52742,43.473142]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Ave between Bricker Residence and Academic Building.',
                'name': 'c_26',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.5269,43.472246]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Ave entrance to southwest corner of Science Building.',
                'name': 'c_27',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525464,43.472818]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Ave entrance to southeast corner of Science Building.',
                'name': 'c_28',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524646,43.472932]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'King St entrace to parking lot between Science Building and Alumni Field.',
                'name': 'c_29',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524515,43.473688]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Parking lot between Science Building and Alumni Field.',
                'name': 'c_30',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524842,43.473828]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Parking lot between Willison Hall and Science Reseach/Receiving.',
                'name': 'c_31',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526500,43.473303]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Top of parking lot outside Bricker Academic near Emergency Help Pole.',
                'name': 'c_32',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526909,43.473267]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Sidewalk between Little House and Willison Hall Residences.',
                'name': 'c_33',
                'iconSize': [30,30]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527229,43.473701]
            }
        },
    ]
};
//el array
var elArray = [];
//marker arrays
var markerArray = [];
var markerArray2 = [];

//This adds map to the page
var map = new mapboxgl.Map({
    container: 'mapBox',
    center: [-80.5278, 43.4740],
    zoom: 16.65,
    style: 'mapbox://styles/mapbox/streets-v11'
    });


//this adds map control
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: false
        
    }),
);


//Adds markers to the map
mapIcons.features.forEach(function(marker){
    //create a DOM element for the marker
    var el = document.createElement('div');
    
    el.className = 'marker';   
    el.style.backgroundImage = 'url(images/inactive_node.png)';
    el.style.width = marker.properties.iconSize[1] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.style.backgroundSize = '100%';
    elArray.push(el);
    markerArray.push(marker);
    //console.log(elArray);
    //popup creation
    var popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: false,
    }).setText(marker.properties.description);
    
    //When user clicks a node, this code runs
    popup.on('open', function(popup){
        
        dest_node = marker.properties.name;
        console.log("The node you just clicked on is:"+dest_node)
        //console.log('name is: ' + dest_node);
        //these variables should be replaced with curr location data
        //start coordinates currently set to ac
        var start_lat = posArr[1];
        var start_long = posArr[0];
        //console.log("your current location is:"+posArr.toString())
        var g = new Graph();
        g.loadGraph();
        //g.display_graph(); uncomment if you wanna see the whole graph
        var start = g.get_closest_node_to_curr_location(start_lat,start_long);
        var end = g.get_vertex(dest_node);
        g.dijkstra(g.get_vertex(start),g.get_vertex(dest_node));
        var target = g.get_vertex(dest_node);
        var path = [];
        path.push(target.get_id());
        path = g.shortest(target,path);
        path.reverse()
        //console.log("The node closest to where ur current location is:"+start)
        //console.log("which has lat of:"+g.get_vertex(start).latitude+" and long of: "+g.get_vertex(start).longitude)
        console.log('Shortest path: '+path.toString());
        for(var i = 0; i < path.length; i++){
            nodeList.push(path[i]);
        }
        //reset node icons
        resetPath(elArray);
        //update node icons
        updatePath(nodeList,elArray,markerArray);
        //clearing nodeList after updating all nodes
        nodeList = [];
    });
    
    //adding marker to map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map)
    .setPopup(popup);
    
});


//getting user position into a variable
//on success
function success(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
    setPosition(long,lat);
}
//on failure
function failure(){
    console.log("error nerd");
}
//setting the position
function setPosition(long,lat){
    posArr.push(long);
    posArr.push(lat);
}

//called before updatePath to get rid of any nodes that are already "lit"
function resetPath(elArray){
    
    for(var i = 0; i < elArray.length;i++){
        elArray[i].style.backgroundImage = 'url(images/inactive_node.png)';
    }
}

//this updates the node icons based on the algo and user input
function updatePath(nodeList,elArray){
    var indexArray = [];
    
    //markerArray2 is an array that only has the names of markerArray.properties.names
    for(var i = 0; i < markerArray.length; i++){
        markerArray2.push(markerArray[i].properties.name);  
    }
    
   // console.log("markerArray: " +markerArray);
    //console.log("markerArray2: "+markerArray2);
    //empty marker array
    //markerArray = [];
    //this outputs the indexs of markerArray2 that share elements with nodeList
    //console.log(nodeList.map(value => markerArray2.findIndex(thingInMarker => thingInMarker === value)));
    //this puts the above console output into index array
    indexArray = nodeList.map(value => markerArray2.findIndex(thingInMarker => thingInMarker === value));
    //console.log("this is index array: " + indexArray);

    //changing the background images of only the boys
    for(var i = 0; i < indexArray.length; i++){
        //console.log(indexArray[i]);
        elArray[indexArray[i]].style.backgroundImage = 'url(images/active_node_redone.png)';
    }
    
}

function onclickSearchBar(elArray,e){
        dest_node = e.target.className;
        console.log("The node you just clicked on is:"+dest_node)
        //console.log('name is: ' + dest_node);
        //these variables should be replaced with curr location data
        //start coordinates currently set to ac
        var start_lat = posArr[1];
        var start_long = posArr[0];
        //console.log("your current location is:"+posArr.toString())
        var g = new Graph();
        g.loadGraph();
        //g.display_graph(); uncomment if you wanna see the whole graph
        var start = g.get_closest_node_to_curr_location(start_lat,start_long);
        var end = g.get_vertex(dest_node);
        g.dijkstra(g.get_vertex(start),g.get_vertex(dest_node));
        var target = g.get_vertex(dest_node);
        var path = [];
        path.push(target.get_id());
        path = g.shortest(target,path);
        path.reverse()
        //console.log("The node closest to where ur current location is:"+start)
        //console.log("which has lat of:"+g.get_vertex(start).latitude+" and long of: "+g.get_vertex(start).longitude)
        console.log('Shortest path: '+path.toString());
        for(var i = 0; i < path.length; i++){
            nodeList.push(path[i]);
        }
        //reset node icons
        resetPath(elArray);
        //update node icons
        updatePath(nodeList,elArray,markerArray);
        //clearing nodeList after updating all nodes
        nodeList = [];
}
navigator.geolocation.getCurrentPosition(success,failure);
//console.log(posArr);
//-------------GRAPH CODE----------------------
/**
 * Vertex (node) class
 */
 class Vertex{
    /**
     * Vertex constructor
     * @param {*} node node id
     * @param {*} latitude latitude of the node
     * @param {*} longitude longitude of the node
     */
    constructor(node,latitude,longitude){
        //set initial properties
        this.id = node;
        this.adjacent = {};
        this.latitude = latitude;
        this.longitude = longitude;
        //set distance to infinity
        this.distance = 99999;
        //mark all nodes unvisited
        this.visited = false;
        //predecessor
        this.previous = null;
    }   
    /**
     * Adds a neighbor to the vertex
     * @param {*} neighbor name of neighbor node 
     * @param {*} weight weight of the edge between them
     */
    add_neighbor(neighbor,weight){
        this.adjacent[neighbor] = weight;
    }
    /**
     * returns all nodes adjacent to the node
     * @returns adjacent nodes
     */
    get_connections(){
        return this.adjacent.keys();
    }
    /**
     * returns the node name (its id)
     * @returns the name of the node
     */
    get_id(){
        return this.id;
    }
    /**
     * Returns the weight of the edge between the node and neighbor
     * @param {*} neighbor another node
     * @returns weight
     */
    get_weight(neighbor){
        return this.adjacent[neighbor];
    }
    /**
     * sets the distance for the node (used in dijkstras)
     * @param {*} dist distance
     */
    set_distance(dist){
        this.distance = dist;
    }
    /**
     * returns the current distance of the node
     * @returns distance
     */
    get_distance(){
        return this.distance;
    }
    /**
     * Updates the node to store the node before it in the shortest path
     * @param {*} prev previous node in the path
     */
    set_previous(prev){
        //console.log("setting "+prev.id+"as previous for "+this.id)
        this.previous = prev;
       // console.log(this.previous.id)
    }
    /**
     * update the visited status of the node so as to only visit it once
     */
    set_visited(){
        this.visited = true;
    }
}
/**
 * toString method for the Vertex
 * @returns a string containing the node and all nodes adjacent to it
 */
Vertex.prototype.toString = function VertexToString(){
    var out = "";
    var i =0;
    for(i=0;i<Object.keys(this.adjacent).length;i++){
        out.concat(this.adjacent[i]);
    }
    return String(this.id)+ ' adjacent: '+out;
}
/**
 * equals override for Vertex objects
 * @param {*} other another object (will only return true for Vertex objects)
 * @returns true if two Vertex objects are the same else false
 */
Vertex.prototype.equals = function (other){
    var same = true;
    //make sure both objects are Vertices
    if(typeof other != typeof this){
        same = false;
    }
    //compare each attribute of the objects
    else if(!this.id.equals(other.id)){
        same = false;
    }
    else if(this.latitude!=other.latitude){
        same = false;
    }
    else if(this.longitude!=other.longitude){
        same = false;
    }
    return same;
}
/**
 * Minimum Heap class used as a Priority Queue in Dijkstra's
 */
 class MinHeap {
    constructor() {
       this.items = []; 
    }
    /**
     * swaps one and two
     * @param {} one 
     * @param {*} two 
     */
    swap(one, two){
        var temp = one;
        one = two;
        two = temp;
    }
    /**
     * inserts an object into the heap
     */
    insert(item) {
       let i = this.items.length;
       //add item to the end of the array
       this.items.push(item);
       //heapify up if need be
       let parentIndex = Math.floor((i + 1) / 2 - 1);
       if (parentIndex < 0) parentIndex = 0;
       let parentVal = this.items[parentIndex][0];
       const pushedVal = this.items[i][0];
       while (i > 0 && parentVal > pushedVal) {
          parentIndex = Math.floor((i + 1) / 2 - 1);
          this.swap(i, parentIndex);
          i = parentIndex;
          parentVal = this.items[Math.max(Math.floor((i + 1) / 2 - 1), 0)][0];
       }
       this.items[i]=item;
    }
    /**
     * Removes the minimum object from the heap
     * @returns 
     */
    remove() {
        if (this.items.length <= 1) return this.items.pop();
        const ret = this.items[0]; // What we will return
        let temp = this.items.pop();
        this.items[0] = temp; // Place last element in array at front
        let i = 0; // We adjust heap from top to down
        while (true) {
           let rightChildIndex = (i + 1) * 2;
           let leftChildIndex = (i + 1) * 2 - 1;
           let lowest = rightChildIndex;
           if (
           leftChildIndex >= this.items.length &&
           rightChildIndex >= this.items.length
           )
           break;
           if (leftChildIndex >= this.items.length) lowest =        rightChildIndex;
           if (rightChildIndex >= this.items.length) lowest =    leftChildIndex;
           if (!(leftChildIndex >= this.items.length) &&
           !(rightChildIndex >= this.items.length)
            ) {
           lowest = this.items[rightChildIndex] < this.items[leftChildIndex]? rightChildIndex: leftChildIndex;
           } // Find the smallest child
           // If the parent is greater than the smallest child: swap
           if (this.items[i] > this.items[lowest]) {
           this.swap(i, lowest);
           i = lowest;
           } else break; // We have finished setting up the heap
         }
     // Return topmost element
     return ret;
     }
 }
/**
 * Graph class
 */
class Graph{
    /**
     * Constructor, initialize vertex dictionary and count
     */
    constructor(){
        this.vert_dict = {};
        this.num_vertices = 0;
    }
    /**
     * adds a vertex to the graph
     * @param {*} node vertex name
     * @param {*} latitude latitude of the vertex
     * @param {*} longitude longitude of the vertex
     * @returns the vertex in the graph
     */
    add_vertex(node,latitude,longitude){
        //increase vertex count
        this.num_vertices+=1;
        //create the vertex object
        var new_vertex = new Vertex(node,latitude,longitude);
        //add it to the vertex dictionary
        this.vert_dict[node] = new_vertex;
        return new_vertex;
    }
    /**
     * returns a vertex if it exists in the graph
     * @param {*} n vertex object
     * @returns the vertex object or null if it doesn't exist
     */
    get_vertex(n){
        if (n in this.vert_dict){
            return this.vert_dict[n];
        }
        else{
            return null;
        }
    }
    /**
     * get the distance between two vertex objects in the graph
     * @param {} frm vertex object
     * @param {*} to vertex object
     * @returns the distance using Pythagorean theorum
     */
    get_distance(frm,to){
        return Math.sqrt((to.latitude-frm.latitude)*(to.latitude-frm.latitude)+(to.longitude-frm.longitude)*(to.longitude-frm.longitude));
    }
    /**
     * adds an edge between two vertices in the graph
     * @param {} frm vertex object
     * @param {*} to vertex object
     */
    add_edge(frm,to){
        //add frm and to to the graph if they aren't already there
        if (!frm in this.vert_dict){
            this.add_vertex(frm);
        }
        if(!to in this.vert_dict){
            this.add_vertex(to);
        }
        //calculate distance
        var one = this.vert_dict[to].latitude-this.vert_dict[frm].latitude;
        var distance = Math.sqrt((this.vert_dict[to].latitude-this.vert_dict[frm].latitude)*(this.vert_dict[to].latitude-this.vert_dict[frm].latitude)+(this.vert_dict[to].longitude-this.vert_dict[frm].longitude)*(this.vert_dict[to].longitude-this.vert_dict[frm].longitude));
        //update each vertex's adjacency lists to include the other vertex
        //CHECK ME
        this.vert_dict[frm].add_neighbor(this.vert_dict[to].id,distance); 
        this.vert_dict[to].add_neighbor(this.vert_dict[frm].id,distance);
    }
    /**
     * returns a list of all vertices in the graph
     * @returns all vertex objects stored in the vertex dictionary
     */
    get_vertices(){
        return this.vert_dict.keys();
    }
    /**
     * displays the graph in console for debugging
     */
    display_graph(){
        //display all nodes and their adjacent nodes
        var v;
        var i=0;
        for(var temp in this.vert_dict){
            v = this.vert_dict[temp];
            console.log(v);
        }
    }
    /**
     * loads the graph to include all nodes and all edges contained in a csv file
     */
    loadGraph(){
        //add vertices
        this.add_vertex("laz_se",43.475,-80.52859);
        this.add_vertex("laz_n",43.475478,-80.530131);
        this.add_vertex("laz_sw",43.474775,-80.529162);
        this.add_vertex("music_ne",43.474849,-80.52833);
        this.add_vertex("music_e",43.4747,-80.528);
        this.add_vertex("music_sw",43.474223,-80.528302);
        this.add_vertex("dh_e",43.474222,-80.528301);
        this.add_vertex("dh_s",43.4742,-80.52855);
        this.add_vertex("dh_w",43.474145,-80.529199);
        this.add_vertex("artse_e",43.474109,-80.529137);
        this.add_vertex("artse_w",43.473855,-80.5296);
        this.add_vertex("artsc_e",43.473854,-80.5297);
        this.add_vertex("artsc_n",43.473853,-80.530201);
        this.add_vertex("artsc_s",43.473616,-80.530076);
        this.add_vertex("peters_ne",43.473773,-80.530535);
        this.add_vertex("peters_se",43.473468,-80.530288);
        this.add_vertex("peters_sw",43.473465,-80.530446);
        this.add_vertex("peters_nw",43.47364,-80.531102);
        this.add_vertex("schliegel_e",43.473469,-80.530287);
        this.add_vertex("schliegel_nw",43.473464,-80.530447);
        this.add_vertex("dawb_n",43.473509,-80.529416);
        this.add_vertex("dawb_s",43.473256,-80.529671);
        this.add_vertex("library_e",43.472942,-80.529749);
        this.add_vertex("seminary_n",43.472112,-80.528888);
        this.add_vertex("seminary_s",43.471897,-80.528637);
        this.add_vertex("brickeracademic_n",43.472782,-80.526549);
        this.add_vertex("brickeracademic_s",43.472621,-80.526412);
        this.add_vertex("science_nw",43.47349,-80.525883);
        this.add_vertex("science_ne",43.473593,-80.525047);
        this.add_vertex("science_se",43.47326,-80.524812);
        this.add_vertex("science_sw",43.472964,-80.525437);
        this.add_vertex("coop_e",43.473951,-80.52426);
        this.add_vertex("ac_s",43.474966,-80.525896);
        this.add_vertex("frednichols_e",43.473764,-80.528539);
        this.add_vertex("c_1",43.473292,-80.531674);
        this.add_vertex("c_2",43.473848,-80.531106);
        this.add_vertex("c_3",43.474129,-80.530304);
        this.add_vertex("c_4",43.474504,-80.529473);
        this.add_vertex("c_5",43.475095,-80.528081);
        this.add_vertex("c_6",43.475561,-80.527125);
        this.add_vertex("c_7",43.476178,-80.525176);
        this.add_vertex("c_8",43.47491,-80.524815);
        this.add_vertex("c_9",43.47456,-80.525754);
        this.add_vertex("c_10",43.474409,-80.52639);
        this.add_vertex("c_11",43.474124,-80.527389);
        this.add_vertex("c_12",43.473784,-80.528026);
        this.add_vertex("c_13",43.473764,-80.528539);
        this.add_vertex("c_14",43.473200,-80.528449);
        this.add_vertex("c_15",43.472855,-80.529388);
        this.add_vertex("c_16",43.473351,-80.530066);
        this.add_vertex("c_17",43.473200,-80.531029);
        this.add_vertex("c_18",43.472726,-80.530715);
        this.add_vertex("c_19",43.472521,-80.530097);
        this.add_vertex("c_20",43.472706,-80.529467);
        this.add_vertex("c_21",43.471539,-80.529280);
        this.add_vertex("c_22",43.471883,-80.528362);
        this.add_vertex("c_23",43.472323,-80.528142);
        this.add_vertex("c_24",43.472828,-80.527892);
        this.add_vertex("c_25",43.473142,-80.52742);
        this.add_vertex("c_26",43.472246,-80.5269);
        this.add_vertex("c_27",43.472818,-80.525464);
        this.add_vertex("c_28",43.472932,-80.524646);
        this.add_vertex("c_29",43.473688,-80.524515);
        this.add_vertex("c_30",43.473828,-80.524842);
        this.add_vertex("c_31",43.473303,-80.526500);
        this.add_vertex("c_32",43.473267,-80.526909);
        this.add_vertex("c_33",43.473701,-80.527229);

               //add edges
               this.add_edge('c_1','peters_nw');
               this.add_edge("c_1","c_2");
               this.add_edge("c_1","c_17");
               
               this.add_edge("c_2","peters_nw");
               this.add_edge("c_2","c_3");
               
               this.add_edge("c_3","peters_ne");
               this.add_edge("c_3","c_4");
               
               this.add_edge("c_4","artse_e");
               this.add_edge("c_4","dh_w");
               this.add_edge("c_4","c_5");
               this.add_edge("c_4","laz_sw");
               this.add_edge("c_4","music_ne")
               this.add_edge("c_4","artsc_e")
       
               this.add_edge("c_5","laz_se")
               this.add_edge("c_5","music_ne");
               this.add_edge("c_5","c_11");
               this.add_edge("c_5","c_6");
       
               this.add_edge("c_6","c_9");
               this.add_edge("c_6","c_7");
               
               this.add_edge("c_7","c_8");
               
               this.add_edge("c_8","c_9");
               this.add_edge("c_8","coop_e")
               this.add_edge("c_8","c_29");
               
               this.add_edge("c_9","ac_s");
               this.add_edge("c_9","c_10");
               
               this.add_edge("c_10","c_11");
               this.add_edge("c_10","c_31");
               
               this.add_edge("c_11","c_12");
               this.add_edge("c_11","c_33");
               this.add_edge("c_11","music_e");
               
               this.add_edge("c_12","music_sw");
               this.add_edge("c_12","dh_s");
               this.add_edge("c_12","frednichols_e");
               this.add_edge("c_12","dh_e")
               this.add_edge("c_12","c_13");
               
               this.add_edge("c_13","c_14");
               this.add_edge("c_13","c_24");
               this.add_edge("c_13","c_25");
               this.add_edge("c_13","c_33")
               
               this.add_edge("c_14","dawb_s");
               this.add_edge("c_14","c_15");
               this.add_edge("c_14","c_20");
               this.add_edge("c_14","c_23");
               this.add_edge("c_14","c_25")
               
               this.add_edge("c_15","dawb_s");
               this.add_edge("c_15","c_16");
               this.add_edge("c_15","library_e");   
               this.add_edge("c_15","c_20");
               
               this.add_edge("c_16","dawb_n");
               this.add_edge("c_16","artsc_s");
               this.add_edge("c_16","peters_se");
               this.add_edge("c_16","schliegel_e");
               this.add_edge("c_16","c_18");
               
               this.add_edge("c_17","peters_sw");
               this.add_edge("c_17","schliegel_nw");
               this.add_edge("c_17","c_18");
               
               this.add_edge("c_18","c_19");
               
               this.add_edge("c_19","c_20");
               this.add_edge("c_19","c_21");
               
               this.add_edge("c_20","seminary_n");
               this.add_edge("c_20","c_23");
               
               this.add_edge("c_21","seminary_s");
               this.add_edge("c_21","c_22");
               
               this.add_edge("c_22","c_23");
               this.add_edge("c_22","seminary_s");
               this.add_edge("c_22","c_26");
               
               this.add_edge("c_23","c_24");
               this.add_edge("c_23","seminary_n")
               
               this.add_edge("c_24","c_25");
               
               this.add_edge("c_25","c_32");
               this.add_edge("c_25","c_26");
               
               this.add_edge("c_26","brickeracademic_s");
               this.add_edge("c_26","c_27");
               
               this.add_edge("c_27","science_sw");
               this.add_edge("c_27","c_28");
               this.add_edge("c_27","brickeracademic_s")
               
               this.add_edge("c_28","c_29");
               this.add_edge("c_28","science_se");
               
               this.add_edge("c_29","c_30");
               
               this.add_edge("c_30","science_ne");
               this.add_edge("c_30","c_31");
               this.add_edge("c_30","coop_e")
               
               this.add_edge("c_31","c_32");
               this.add_edge("c_31","science_nw");
               
               this.add_edge("c_32","brickeracademic_n");
               this.add_edge("c_32","c_33");
           //adding inter building connections
               this.add_edge("artsc_e","artse_w");
               this.add_edge("dawb_s","frednichols_e");
               this.add_edge("music_ne","laz_se")
               this.add_edge("music_ne","music_e")
               this.add_edge("laz_se","laz_sw")
               this.add_edge("laz_n","laz_se")
               this.add_edge("laz_se","c_5");
               this.add_edge("coop_e","c_29")

               this.add_edge("artsc_n","c_3")
               this.add_edge("artsc_n","peters_nw")
               this.add_edge("artsc_n","peters_ne")
               this.add_edge("artsc_n","artsc_s")
               this.add_edge("artsc_n","artsc_e")

               this.add_edge("artsc_s","schliegel_e")
               this.add_edge("artsc_s","artsc_e")
               this.add_edge("artsc_s","schliegel_nw")
               this.add_edge("schliegel_nw","schliegel_e")

               this.add_edge("artsc_e","artse_w")
               this.add_edge("dh_e","music_e")
               this.add_edge("dh_e","dh_s")
               this.add_edge("dh_w","dh_s")
               this.add_edge("dh_w","artse_e")
               
               this.add_edge("frednichols_e","artse_w")
               this.add_edge("frednichols_e","dawb_n")
               this.add_edge("frednichols_e","dawb_s")
               this.add_edge("dawb_n","dawb_s")
    }
    /**
     * creates the minimum spanning tree for a graph
     * @param {*} start Vertex object
     * @param {*} end Vertex object
     */
    dijkstra(start,end){
        //set the distance of the start node to be 0
        start.set_distance(0);
        var unvisited_queue = new MinHeap();
        var v;
        var i=0;
        //add every node adjacent to the start node to the heap
        for(let temp in this.vert_dict){
            v = this.vert_dict[temp];
            unvisited_queue.insert([v.get_distance(),v]);
        }
        //loop through those nodes and add more as needed
        while(unvisited_queue.items.length>0){
            //remove the vertex with the smallest distance
            var uv = unvisited_queue.remove();
            var current = uv[1];
            current.set_visited();//update the visited flag of the current node
            //go through each node adjacent to current
            for(var adj in current.adjacent){
               //otherwise relax distances
               var new_dist = current.get_distance()+current.get_weight(adj);
                //skip if visited
                if(this.vert_dict[adj].visited){
                    continue;
                }
                //otherwise relax distances
                var new_dist = current.get_distance()+current.get_weight(adj);
                if(new_dist<this.vert_dict[adj].get_distance()){
                    this.vert_dict[adj].set_distance(new_dist);
                    this.vert_dict[adj].set_previous(current);
                }
            }
            
            //rebuild heap
            //pop every item
            while(unvisited_queue.items.length>0){
                unvisited_queue.remove();
            }
            //add back in ones that haven't been visited yet
            for(var temp in this.vert_dict){
                v = this.vert_dict[temp];
                if(v.visited==false){
                    unvisited_queue.insert([v.get_distance(),v]);
                }
            }
        }
    }
    /**
     *Helper function called after Dijkstra's has been used
     *goes through the graph and finds all the previous nodes in the path from v
     * @param {*} v the end node to trace back from (target)
     * @param {*} path the path of nodes in the shortest path (array)
     */
    shortest(v, path){
        if(v.previous!=null){
            path.push(v.previous.get_id());//add node to path
            //console.log("path:"+v.previous.get_id());
            this.shortest(v.previous,path)//recall function from previous node
        }
        return path;
    }
    /**
     * finds the node in the graph closest to your current location given by lat and long
     * @param {*} latitude current latitude
     * @param {*} longitude current longitude
     */
    get_closest_node_to_curr_location(latitude,longitude){
        var curr_location = new Vertex("curr_location",latitude,longitude);
        //find the node with the minimum distance
        //var vals = this.vert_dict.values();
        var min_distance = 99999;
        var min_node;
        for(var v in this.vert_dict){
            var temp_distance = this.get_distance(curr_location,this.vert_dict[v]);
            if(temp_distance<min_distance){
                min_distance = temp_distance;
                min_node = v;
            }
        }
        return min_node;
    }
}
