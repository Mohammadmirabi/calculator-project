const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = ""; 
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "C") {
            expression = "";
            display.textContent = "";
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.textContent = expression;
            } catch {
                display.textContent = "Error";
            }
        }
        else {
            expression += value;
            display.textContent = expression;
        }
    });
});
