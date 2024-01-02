var time=document.getElementById("timecurrent");
var year=document.getElementById("yearcurrent");
var duration=document.getElementById("durationcurrent");
var mainplay=document.getElementById("playlist");
var addlist=document.getElementById('sub');
addlist.addEventListener("click",fun);
var counter=0;
const list=[{
    name:'',
    year:'',
    dur:'',
    id:'',
}]
function fun(){
    list.name=document.getElementById('name').value;
    list.year=document.getElementById('year').value;
    list.dur=document.getElementById('duration').value;
    let elemet=document.createElement('div');
    elemet.setAttribute('id',"el"+counter);
    elemet.setAttribute('class',"el");
    currentid=elemet.getAttribute('id');
    counter=counter+1;
    elemet.style.background="white";
    let head=document.createElement('h4');
    head.appendChild(document.createTextNode("name of movie:"+list.name+"      "+"Year released:  "+list.year+"      "+"Duration:"+list.dur));
    elemet.appendChild(head);
    mainplay.appendChild(elemet);
}
function show(){
  alert("test");
}