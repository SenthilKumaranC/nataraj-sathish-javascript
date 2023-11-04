const iframe = document.createElement("iframe");
iframe.src = "https://www.autodraw.com/";

document.body.appendChild(iframe)

const button = document.createElement("button")
button.textContent = "close iframe"
document.body.appendChild(button)
