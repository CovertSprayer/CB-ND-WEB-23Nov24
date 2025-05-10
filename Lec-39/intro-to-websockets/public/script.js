const socket = io();

const send_btn = document.querySelector("#send-btn");
const text_input = document.querySelector("#txt-inp");
const chat_messages = document.querySelector(".chat-messages");
const username_form = document.querySelector(".username-container form");
const username_input = document.querySelector(".username-container input");
const username_container = document.querySelector(".username-container");
const chat_container = document.querySelector(".chat-container");

send_btn.addEventListener("click", (e) => {
  const message = text_input.value;
  text_input.value = "";

  socket.emit("new_msg", message);
})


function appendMessage(data){
  const div = document.createElement("div");
  div.classList.add("message");

  if(data.socketId == socket.id){
    div.classList.add("sent");
  } else {
    div.classList.add("received");
  }

  div.innerText = `${data.username} - ` + data.message;
  chat_messages.append(div);
}

username_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = username_input.value;
  username_input.value = "";

  socket.emit("set_username", username);
})

// ======================== websocket event listeners
socket.on("msg", (data)=>{
  console.log("msg received: ", data);
  appendMessage(data);
})

socket.on("new_user", (data) => {
  if(data.socketId == socket.id){
    username_container.style.display = "none";
    chat_container.style.display = "flex";
  }
})