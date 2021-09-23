const clockAngles = (minutes) => {
    //calculate degree for hour hand
    let hourMovement = (Math.floor(minutes/60)*30)
    let minuteMovement = ((minutes%60)*6)

    console.log(hourMovement+" hour movement pre-compensate")
    hourMovement += (minutes%60)*.5

    let result = Math.abs(hourMovement-minuteMovement)

    console.log(minutes+ " minutes")
    console.log(hourMovement+" hour movement compensated")
    console.log(minuteMovement+" minute movement")
    // console.log(result+"result")

    result = result%360
    return result
}

// console.log(clockAngles(360));
// console.log(clockAngles(180));
// console.log(clockAngles(210));
// console.log(clockAngles(588));
console.log(clockAngles(980));
// console.log(clockAngles(361));

//every 60 min is 30 degrees for the hour hand
//every minute is 6 degrees for the minute hand
//hour hand moves .5 degrees every minute

//take every number, divide by 60. the remainder is the minutes