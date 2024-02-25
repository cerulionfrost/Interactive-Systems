//let var1 =document.quesrySelector//
const activity = document.querySelector("#activity")
const participants= document.querySelector("#participants")
const price= document.querySelector("#price")
const type= document.querySelector("#type")

let var1 =document.querySelector("h1");

var1.innerHTML = "Your Activity of the Day";

const url = 'https://www.boredapi.com/api/activity'




async function getData()
{
    const resp = await fetch(url);
    //console.gog(resp);
    const respData = await resp.json()
    console.log(respData);
    console.log(respData.activity)

    activity.innerHTML = respData.activity;
    participants.innerHTML = respData.participants;
    price.innerHTML = respData.price;
    type.innerHTML = respData.type;


}

getData()