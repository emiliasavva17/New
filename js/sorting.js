const $ = function (foo) {
    return document.getElementById(foo);
}
/*
let sortTeamAsc=$("sort_team_asc");
let sortTeamDes=$("sort_team_des");

let sortWinsAsc=$("sort_wins_asc");
let sortWinsDes=$("sort_wins_des");

let sortDrawsAsc=$("sort_draws asc");
let sortDeawsDes=$("sort_draws_des");

let sortLossesAsc=$("sort_losses_asc");
let sortLossesDes=$("sort_losses_des");

let sortPointsAsc=$("sort_points_asc");
let sortPointsDes=$("sort_points_des");*/ //create variables that match every button on the page for sorting the table

let teamName=document.getElementsByClassName('teamName');
let wins=document.getElementsByClassName('wins');
let draws=document.getElementsByClassName('draws');
let losses=document.getElementsByClassName('losses');
let points=document.getElementsByClassName('points'); //there are 5 arrays and each of it contains the information from the table 


ttable=[{name:'Sonderjyske', win:5, draw:2, losse:1, point:17},
		{name:'Midtjylland', win:5, draw:1, losse:12, point:16},
		{name:'Aarhus', win:4, draw:3, losse:1, point:15},
		{name:'Brondby', win:5, draw:0, losse:1, point:15},
		{name:'Vejle', win:4, draw:2, losse:2, point:14},] // recreated table info and make an array of objects where each object contain every team caracteristics

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}// sorting function


function ChangingTableValues(){
  for(i=0; i<6; i++){
    if (teamName[i+1])
      teamName[i+1].innerHTML=ttable[i].name;
    if (wins[i+1])
      wins[i+1].innerHTML=ttable[i].win;
    if (draws[i+1])
      draws[i+1].innerHTML=ttable[i].draw;
    if (losses[i+1])
      losses[i+1].innerHTML=ttable[i].losse;
    if (points[i+1])
      points[i+1].innerHTML=ttable[i].point;
  }
}


//sortTeamAsc.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('name', "asc"))));
//sortTeamDes.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('name', "desc"))));

//sortWinsAsc.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('win', 'asc'))));
//sortWinsDes.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('win', 'desc'))));

//sortDrawsAsc.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('draw', 'asc'))));
//sortDeawsDes.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('draw', 'desc'))));

//sortLossesAsc.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('losse', 'asc'))));
//sortLossesDes.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('losse', 'desc'))));

//sortPointsAsc.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('point', 'asc'))));
//sortPointsDes.addEventListener("click", ChangingTableValues(ttable.sort(compareValues('point', 'desc'))));









