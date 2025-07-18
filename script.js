// Write your code here

const lightBulb1 = document.querySelector("#lightbulb1");
const lightBulb2 = document.querySelector("#lightbulb2");
const lightBulb3 = document.querySelector("#lightbulb3");

const lightBulbs = document.querySelectorAll(".row > div");;

const count = document.querySelector("h3");
counter = 0;


for (let i = 0; i < lightBulbs.length; i++) 
{
    lightBulbs[i].addEventListener("click", function() {
        if (lightBulbs[i].className == "item lightbulb active")
        {
            lightBulbs[i].className = "item lightbulb";
        } else
        {
            lightBulbs[i].className = "item lightbulb active";
        }
        counter ++;
        if (counter == 1)
        {
            count.innerHTML = "You've clicked the light once";
        } else 
        {
            count.innerHTML = "You've clicked the lights "+ counter + " times";
        }
    })
}

// lightBulb2.addEventListener("click", function() {
//     if (lightBulb2.className == "item lightbulb active")
//     {
//         lightBulb2.className = "item lightbulb";
//     } else
//     {
//         lightBulb2.className = "item lightbulb active";
//     }
//     counter ++;
//     if (counter == 1)
//     {
//         count.innerHTML = "You've clicked the light once";
//     } else 
//     {
//         count.innerHTML = "You've clicked the lights "+ counter + " times";
//     }
// })

// lightBulb3.addEventListener("click", function() {
//     if (lightBulb3.className == "item lightbulb active")
//     {
//         lightBulb3.className = "item lightbulb";
//     } else
//     {
//         lightBulb3.className = "item lightbulb active";
//     }
//     counter ++;
//     if (counter == 1)
//     {
//         count.innerHTML = "You've clicked the light once";
//     } else 
//     {
//         count.innerHTML = "You've clicked the lights "+ counter + " times";
//     }
// })

