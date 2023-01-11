
let line = 1;
let textSzie = 5;

for (let i = 0; i < 5; i++) {
    const p = document.createElement("p");
    const hue = 140 + (15 * i);

    document.body.append(p);
    p.innerText = "Rad " + line;
    p.style.background = `hsl(${hue}, 100%, 80%)`;
    p.style.color = `hsl(220, 100%, 64%)`;
    p.style.fontWeight = "bold";
    p.style.fontSize = textSzie + "px";
    p.style.textAlign = "center";
    line++;
    textSzie += 8;
}

const section = document.createElement("section");
document.body.append(section);

const arr = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

section.style.border = "2px solid black";
section.style.padding = "20px 0px";
section.style.display = "flex";
section.style.justifyContent = "space-around";

for (let i = 0; i < 3; i++) {

    const ol = document.createElement("ol");
    section.append(ol);
    ol.style.display = "flex";
    ol.style.flexDirection = "row";
    ol.style.flexDirection = "column";
    ol.style.padding = 0;
    ol.style.border = "6px solid hsl(270, 71%, 75%)";
    ol.style.width = "50px";

    if (i === 0) {
        for (let x = 0; x < 10; x++) {
            const list = document.createElement("li");
            ol.append(list);
            list.style.listStyle = "none";
            list.style.background = `white`;
            list.innerText = x;
            if (x % 2 == 0) {
                list.style.background = "black";
                list.style.color = "white";

            }
            if (x == 4) {
                list.style.background = "hsl(270, 71%, 75%)";
            }
        }


    } else if (i === 1) {
        for (let x = 9; x >= 0; x--) {
            const list = document.createElement("li");
            ol.append(list);
            list.style.listStyle = "none";
            list.style.textAlign = "center";
            list.style.background = "black";
            list.style.color = "white";
            list.innerText = x;

            if (x % 2 == 1) {
                list.style.background = "white";
                list.style.color = "black";
            }
            if (x == 8) {
                list.style.background = "hsl(270, 71%, 75%)";
            }
        }
    } else if (i === 2) {
        for (let [index, x] of arr.entries()) {
            const list = document.createElement("li");
            ol.append(list);
            list.style.listStyle = "none";
            list.style.textAlign = "right";
            list.style.background = "black";
            list.style.color = "white";
            list.innerText = x;

            if (index % 2 == 1) {
                list.style.background = "white";
                list.style.color = "black";
            }
            if (index == 5) {
                list.style.background = "hsl(270, 71%, 75%)";
            }
        }
    }

}

