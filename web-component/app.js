const divElement = document.createElement("div");

const headingElement = document.createElement("h1");

headingElement.innerText = "Ini merupakan kontent di dalam shadow DOM";

const shadowRoot = divElement.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
    <style>
    h1{
        color : green;
    }
    </style>
`;
shadowRoot.appendChild(headingElement);

document.body.appendChild(divElement);
