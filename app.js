//this file controls the search bar
const wluBuilding = document.getElementById('wluBuilding');
const searchBarjs =   document.querySelector('#searchBarjs');// document.querySelector('#searchBarjs'); //document.getElementById('searchBarjs');
let wluRooms = [];

const wluBuildings =[
    {name: "Fred Nichols Campus Centre",description: "Hub",img: "images/fredniccc.png",pos: [], graph_name: "frednichols_e"},
    {name: "Athletic Complex (ac)",description: "Gym",img: "images/athleticcomp.png", pos: [], graph_name: "ac_s"},
    {name: "Lazaridis Hall (North)",description: "Lazaridis Hall North Entrance",img: "images/lazn.png",pos: [], graph_name: "laz_n"},
    {name: "Dr. Alvin Woods Building Front (dawb front)",description: "",img: "images/dawbfront.png",pos:[], graph_name: "dawb_n"},
    {name: "Dr. Alvin Woods Building Side (dawb side)",description: "The side of dawb",img:"images/dawbside.png",pos: [], graph_name: "dawb_s"},
    {name: "Arts",description: "Arts Building",img:"images/artsace.png",pos:[], graph_name: "artse_e"},
    {name: "Library",description: "Library",img:"images/library.png",pos: [], graph_name: "library_e"},
    {name: "Concourse (back)",description: "concourse back",img:"images/concback.png",pos: [], graph_name: ""},
    {name: "Franklin C. Peters Building ",description: "Franklin Building",img:"images/frankcpb.png",pos: [], graph_name: ""},
    {name: "Arts West", description: " Arts Building West Entrance", img: "images/artswest.png", pos: [], graph_name: "artsc_w"},
    {name: "Bricker Academic (North)", description: "Bricker Academic North Entrance", img: "images/banorth.png", pos: [], graph_name: "brickeracademic_n"},
    {name: "Co-op Building", description: "Co-op Building Entrance", img: "images/coop.png", pos: [], graph_name: "coop_e"},
    {name: "Lazaridis Hall (South East)", description: "Lazaridis Hall South East Entrance", img: "images/lazse.png", pos: [], graph_name: "laz_se"},
    {name: "Lazaridis Hall (South West)", description: "Lazaridis Hall South West Entrance", img: "images/lazsw.png", pos: [], graph_name: "laz_sw"},
    {name: "Music Building", description: "Music Building East Entrance", img: "images/musiceast.png", pos: [], graph_name: "music_e"},
    {name: "Science Building", description: "Science Building North Entrance", img: "images/sciencenorth.png", pos: [], graph_name: "science_ne"},
    {name: "Science Building", description: "Science Building North West Entrance", img: "images/sciencenorthw.png", pos: [], graph_name: "science_nw"},
    {name: "Science Building", description: "Science Building South East Entrance", img: "images/sciencesouthe.png", pos: [], graph_name: "science_se"},
    {name: "Science Building", description: "Science Building South West Entrance", img: "images/sciencesouthw.png", pos: [], graph_name: "science_sw"}
];
//console.log(window.searchBarjs);
//console.log(searchBarjs);


//This is the auto filter function ; SEARCHBAR  
searchBarjs.addEventListener('keyup', (e) =>{ //anytime a key is pressed then up it triggers the following function
    const targetRoom = e.target.value.toLowerCase(); //setting targetRoom to lower case to ensure monkeys can type

    const filteredWluClassRooms = wluRooms.filter((roomNumber) =>{ //we want to filter room numbers
        return (roomNumber.name.toLowerCase().includes(targetRoom));
    });
    displayRooms(filteredWluClassRooms);
});
//This is the event listener for clicking an image in div
//1. On click, update and highlight the node you are to travel to
//2. Then plot the path
wluBuildingWrapper.addEventListener('click', function (e) {

});
//current issue is getting the stuff to load
const loadRooms = async()=>{
    try{
        const campusRooms = wluBuildings
        wluRooms = campusRooms;
        displayRooms(wluRooms);
        //console.log(wluClassRooms)
    }catch(error){
        console.log(error);
    }
};
//<p>Description: ${building.description}</p> taken from inside wluBuildingsItems <li>
const displayRooms = (wluRooms)=>{
    const htmlString = wluRooms
        .map((building) =>{
            return `
            <div class = ${building.graph_name} id = searchDiv>
                <li class=wluBuildingsItems>
                    <p>${building.name}</p> 
                    <img id = wluImage src =${building.img}></img>
                </li>
            </div>
            `;
        })
         .join('');
    wluBuildingWrapper.innerHTML = htmlString; 
    //console.log(wluBuilding);    
};
//COPY PASTED FROM MAIN

loadRooms();