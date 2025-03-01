document.getElementById("logo-refresh")
    .addEventListener("click",
        function(){
            window.location.href = "./index.html";
        }
    );

document.getElementById("blog-html")
    .addEventListener("click",
        function(){
            window.location.href = "./blog.html";
        }
    );

const colors = ["#7096ff", "#c670ff", "#fa70ff", "#ff9170", "#a4ff70", "#F4F7FF"];
let index = 0;
document.getElementById("theme-btn")
    .addEventListener("click", function(){
        document.body.style.backgroundColor = colors[index];
        index++;
        if(index === colors.length){
            index = 0;
        }
    });

// card-1
// document.getElementById("complete-1")
//     .addEventListener("click",
//         function(event){
//             event.preventDefault();
//             alert("Board Updated Successfully");
//             const title = document.getElementById("title-1").innerText;
//             const now = new Date();
//             const dateTime = now.toLocaleString();
//             const messageContainer = document.getElementById("message-container");
//             const div = document.createElement("div");
//             div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
//             div.innerHTML = `
//                 <p>
//                     You have completed the task ${title} at ${dateTime}.
//                 </p>
//             `;
//             messageContainer.appendChild(div);

//             const spanNumber = parseInt(document.getElementById("span-number").innerText);
//             const newSpanNumber = spanNumber + 1;
//             document.getElementById("span-number").innerText = newSpanNumber;

//             const bodyNumber = parseInt(document.getElementById("body-number").innerText);
//             const newBodyNumber = bodyNumber - 1;
//             document.getElementById("body-number").innerText = newBodyNumber;
//             document.getElementById("complete-1").disabled = true;
//         }
//     );

//card-1
btnClicked("complete-1", "title-1", "message-container", "span-number", "body-number");
//card-2
btnClicked("complete-2", "title-2", "message-container", "span-number", "body-number");
//card-3
btnClicked("complete-3", "title-3", "message-container", "span-number", "body-number");
//card-4
btnClicked("complete-4", "title-4", "message-container", "span-number", "body-number");
//card-5
btnClicked("complete-5", "title-5", "message-container", "span-number", "body-number");
//card-6
btnClicked("complete-6", "title-6", "message-container", "span-number", "body-number");

//clear history btn
document.getElementById("clear-history")
    .addEventListener("click",
        function(){
            document.getElementById("message-container").innerText = " ";
        }
    );


//all task completed
document.querySelectorAll(".text-xs");


//day-date
const now = new Date();
const dateTime = now.toDateString().split(" ")[0];
const dateTime2 = now.toDateString().split(" ")[1];
const dateTime3 = now.toDateString().split(" ")[2];
const dateTime4 = now.toDateString().split(" ")[3];
// document.getElementById("day-date").innerText = dateTime;
const dayDateContainer = document.getElementById("day-date");
const div = document.createElement("div");
div.innerHTML = `
    <h1> ${dateTime}, </h1>
    <h1 class = "font-semibold"> ${dateTime2} ${dateTime3} ${dateTime4} </h1>
`;
dayDateContainer.appendChild(div);
