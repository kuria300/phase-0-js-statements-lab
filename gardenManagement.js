const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 80){
  console.log('Watering on')

}else{
    console.log('watering off')
}


if (timeOfDay == 'evening' || timeOfDay == 'night'){
    console.log('Lights on')
}else{
    console.log('Lights off')
}


// for(let i= 5; soilMoisture < 40; i++){
//     console.log(soilMoisture)


//     if( soilMoisture + i >40){
//        i= 40 - soilMoisture
//     }
//     soilMoisture += i
//     i++


// }

 let i =5
while(soilMoisture < 40){
   console.log(soilMoisture)
   soilMoisture += i

}
if (soilMoisture == 40){
    console.log(soilMoisture)
   }