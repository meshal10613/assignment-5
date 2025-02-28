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
document.getElementById("complete-1")
    .addEventListener("click",
        function(event){
            event.preventDefault();
            const title = document.getElementById("title-1").innerText;
            const now = new Date();
            const dateTime = now.toLocaleString();
            const messageContainer = document.getElementById("message-container");
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
            div.innerHTML = `
                You have completed the task ${title} at ${dateTime}.
            `;
            messageContainer.appendChild(div);

            const spanNumber = parseInt(document.getElementById("span-number").innerText);
            const newSpanNumber = spanNumber + 1;
            document.getElementById("span-number").innerText = newSpanNumber;

            const bodyNumber = parseInt(document.getElementById("body-number").innerText);
            const newBodyNumber = bodyNumber + 1;
            document.getElementById("body-number").innerText = newBodyNumber;
            document.getElementById("complete-1").disabled = true;
        }
    );

// card-2
document.getElementById("complete-2")
    .addEventListener("click",
        function(event){
            event.preventDefault();
            const title = document.getElementById("title-2").innerText;
            const now = new Date();
            const dateTime = now.toLocaleString();
            const messageContainer = document.getElementById("message-container");
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
            div.innerHTML = `
                You have completed the task ${title} at ${dateTime}.
            `;
            messageContainer.appendChild(div);

            const spanNumber = parseInt(document.getElementById("span-number").innerText);
            const newSpanNumber = spanNumber + 1;
            document.getElementById("span-number").innerText = newSpanNumber;

            const bodyNumber = parseInt(document.getElementById("body-number").innerText);
            const newBodyNumber = bodyNumber + 1;
            document.getElementById("body-number").innerText = newBodyNumber;
            document.getElementById("complete-2").disabled = true;
        }
    );

// card-3
document.getElementById("complete-3")
    .addEventListener("click",
        function(event){
            event.preventDefault();
            const title = document.getElementById("title-3").innerText;
            const now = new Date();
            const dateTime = now.toLocaleString();
            const messageContainer = document.getElementById("message-container");
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
            div.innerHTML = `
                You have completed the task ${title} at ${dateTime}.
            `;
            messageContainer.appendChild(div);

            const spanNumber = parseInt(document.getElementById("span-number").innerText);
            const newSpanNumber = spanNumber + 1;
            document.getElementById("span-number").innerText = newSpanNumber;

            const bodyNumber = parseInt(document.getElementById("body-number").innerText);
            const newBodyNumber = bodyNumber + 1;
            document.getElementById("body-number").innerText = newBodyNumber;
            document.getElementById("complete-3").disabled = true;
        }
    );

// card-4
document.getElementById("complete-4")
    .addEventListener("click",
        function(event){
            event.preventDefault();
            const title = document.getElementById("title-4").innerText;
            const now = new Date();
            const dateTime = now.toLocaleString();
            const messageContainer = document.getElementById("message-container");
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
            div.innerHTML = `
                You have completed the task ${title} at ${dateTime}.
            `;
            messageContainer.appendChild(div);

            const spanNumber = parseInt(document.getElementById("span-number").innerText);
            const newSpanNumber = spanNumber + 1;
            document.getElementById("span-number").innerText = newSpanNumber;

            const bodyNumber = parseInt(document.getElementById("body-number").innerText);
            const newBodyNumber = bodyNumber + 1;
            document.getElementById("body-number").innerText = newBodyNumber;
            document.getElementById("complete-4").disabled = true;
        }
    );

// card-5
document.getElementById("complete-5")
    .addEventListener("click",
        function(event){
            event.preventDefault();
            const title = document.getElementById("title-5").innerText;
            const now = new Date();
            const dateTime = now.toLocaleString();
            const messageContainer = document.getElementById("message-container");
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
            div.innerHTML = `
                You have completed the task ${title} at ${dateTime}.
            `;
            messageContainer.appendChild(div);

            const spanNumber = parseInt(document.getElementById("span-number").innerText);
            const newSpanNumber = spanNumber + 1;
            document.getElementById("span-number").innerText = newSpanNumber;

            const bodyNumber = parseInt(document.getElementById("body-number").innerText);
            const newBodyNumber = bodyNumber + 1;
            document.getElementById("body-number").innerText = newBodyNumber;
            document.getElementById("complete-5").disabled = true;
        }
    );

// card-6
document.getElementById("complete-6")
    .addEventListener("click",
        function(event){
            event.preventDefault();
            const title = document.getElementById("title-6").innerText;
            const now = new Date();
            const dateTime = now.toLocaleString();
            const messageContainer = document.getElementById("message-container");
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]", "m-4", "p-2", "rounded-lg")
            div.innerHTML = `
                You have completed the task ${title} at ${dateTime}.
            `;
            messageContainer.appendChild(div);

            const spanNumber = parseInt(document.getElementById("span-number").innerText);
            const newSpanNumber = spanNumber + 1;
            document.getElementById("span-number").innerText = newSpanNumber;

            const bodyNumber = parseInt(document.getElementById("body-number").innerText);
            const newBodyNumber = bodyNumber + 1;
            document.getElementById("body-number").innerText = newBodyNumber;
            document.getElementById("complete-6").disabled = true;
        }
    );