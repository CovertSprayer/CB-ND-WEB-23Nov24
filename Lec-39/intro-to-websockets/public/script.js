const socket = io();

const send_btn = document.querySelector("#send-btn");
const text_input = document.querySelector("#txt-inp");
const chat_messages = document.querySelector(".chat-messages");

send_btn.addEventListener("click", (e) => {
  const message = text_input.value;
  text_input.value = "";

  socket.emit("new_msg", message);
})

socket.on("msg", (data)=>{
  console.log("msg received: ", data);
  appendMessage(data);
})


function appendMessage(data){
  const div = document.createElement("div");
  div.classList.add("message");

  if(data.socketId == socket.id){
    div.classList.add("sent");
  } else {
    div.classList.add("received");
  }

  div.innerText = `${data.socketId} - ` + data.message;
  chat_messages.append(div);
}