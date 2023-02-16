const body = document.body;

body.addEventListener("click", function(event) {
    const dot = document.createElement("div");
    //dot.className = "dot";
    //zakomentuji a použiji druhý způsob:
    dot.classList.add("dot");
    dot.style.left = (event.clientX - 5) + "px";
    dot.style.top = event.clientY - 5 + "px";
    body.append(dot);
});