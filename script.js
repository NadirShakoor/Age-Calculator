const result = document.getElementById("result")
const nameresult = document.getElementById("your-name")

document.getElementById("calculate").addEventListener("click",function(){
    const dob = new Date(document.getElementById("dob").value)
    const today = new Date()

    const ageInMilliSeconds = today - dob

    const seconds = Math.floor(ageInMilliSeconds / 1000)
    const mints = Math.floor(seconds/60)
    const hours = Math.floor(mints/60)
    const days = Math.floor(hours/24)
    const week = Math.floor(days/7)
    const months = Math.floor(days/30.44)
    const years = Math.floor(days/365.25)
    
    const nameinput = nameresult.value.trim()
    
    result.innerHTML = `<h4>You are ${years} years, ${months} months <br> ,${week} weeks  ,${days} days <br> ,${hours} hours  , ${mints} mints <br>, ${seconds} Seconds </h4><br><label>Name:${nameinput}</label> `
    
})
