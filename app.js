const hour=document.querySelector(".hour");
const min=document.querySelector(".min");
const secs=document.querySelector(".secs");
ilerle()
function ilerle(){
    var zaman=new Date();
    var seconds=zaman.getSeconds();
    var minute=zaman.getMinutes();
    var hours=zaman.getHours();
    secs.style.transform=`rotate(${180+seconds*6}deg)`;
    min.style.transform= `rotate(${180+minute*6}deg)`;
    hour.style.transform=`rotate(${180+hours*30}deg)`;
}
setInterval(ilerle,1000);
