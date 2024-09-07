let start = document.getElementById("st");

let sc = document.getElementById("screen");

let he1 = document.getElementById("hero1");
let he2 = document.getElementById("hero2");
let he3 = document.getElementById("hero3");
let he4 = document.getElementById("hero4");

let box = document.querySelectorAll(".hero");

let arr = ["bara", "mirana", "tekis", "tuskar", "beast", "ring", "mk", "tide"];

let current = "";
let score = document.getElementById("score");
let cr = 0;

start.onclick = star;

function star() {
  sc.style.height = 350 + "px";
  sc.style.width = 600 + "px";
  start.style.display = "none";
  cr++;

  if (cr === 11) {
    cr = 0;
    start.style.display = "block";
  }

  score.textContent = cr + "/" + "10";
  box.forEach((item) => {
    item.style.border = "5px white solid";
  });
  let random = Math.floor(Math.random() * arr.length);
  current = arr[random];
  console.log(current);
  if (current === "bara") {
    sc.style.backgroundImage = "url(img/bara.png)";
    he1.style.backgroundImage = "url(img/Phoenix_icon.webp)";
    he2.style.backgroundImage = "url(img/Mirana_icon.webp)";
    he3.style.backgroundImage = "url(img/Spirit_Breaker_icon.jpg)";
    he4.style.backgroundImage = "url(img/Techies_icon.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero3" && current === "bara") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/baramm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "mirana") {
    sc.style.backgroundImage = "url(img/mirana.png)";
    he1.style.backgroundImage = "url(img/Witch_Doctor_icon.webp)";
    he2.style.backgroundImage = "url(img/Mirana_icon.webp)";
    he3.style.backgroundImage = "url(img/tidehunter.png)";
    he4.style.backgroundImage = "url(img/Ringmaster.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero2" && current === "mirana") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/miramm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "tekis") {
    sc.style.backgroundImage = "url(img/tekis.png)";
    he1.style.backgroundImage = "url(img/Monkey_King_icon.webp)";
    he2.style.backgroundImage = "url(img/Primal_Beast_icon.webp)";
    he3.style.backgroundImage = "url(img/Spirit_Breaker_icon.jpg)";
    he4.style.backgroundImage = "url(img/Techies_icon.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero4" && current === "tekis") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/tekismm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "tuskar") {
    sc.style.backgroundImage = "url(img/tuskar.png)";
    he1.style.backgroundImage = "url(img/Tusk_icon.webp)";
    he2.style.backgroundImage = "url(img/Witch_Doctor_icon.webp)";
    he3.style.backgroundImage = "url(img/tidehunter.png)";
    he4.style.backgroundImage = "url(img/Clockwerk_icon.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero1" && current === "tuskar") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/tuskmm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "beast") {
    sc.style.backgroundImage = "url(img/beast.png)";
    he1.style.backgroundImage = "url(img/tidehunter.png)";
    he2.style.backgroundImage = "url(img/Primal_Beast_icon.webp)";
    he3.style.backgroundImage = "url(img/Nyx_Assassin_icon.webp)";
    he4.style.backgroundImage = "url(img/Ringmaster.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero2" && current === "beast") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/beastmm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "ring") {
    sc.style.backgroundImage = "url(img/ring.png)";
    he1.style.backgroundImage = "url(img/Ringmaster.webp)";
    he2.style.backgroundImage = "url(img/Witch_Doctor_icon.webp)";
    he3.style.backgroundImage = "url(img/Clockwerk_icon.webp)";
    he4.style.backgroundImage = "url(img/Techies_icon.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero1" && current === "ring") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/ringmm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "mk") {
    sc.style.backgroundImage = "url(img/mk.png)";
    he1.style.backgroundImage = "url(img/Monkey_King_icon.webp)";
    he2.style.backgroundImage = "url(img/Phoenix_icon.webp)";
    he3.style.backgroundImage = "url(img/Spirit_Breaker_icon.jpg)";
    he4.style.backgroundImage = "url(img/Nyx_Assassin_icon.webp)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero1" && current === "mk") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/mkmm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }

  if (current === "tide") {
    sc.style.backgroundImage = "url(img/tide.png)";
    he1.style.backgroundImage = "url(img/Mirana_icon.webp)";
    he2.style.backgroundImage = "url(img/Tusk_icon.webp)";
    he3.style.backgroundImage = "url(img/Witch_Doctor_icon.webp)";
    he4.style.backgroundImage = "url(img/tidehunter.png)";

    box.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.id === "hero4" && current === "tide") {
          item.style.border = "5px green solid";
          sc.style.height = 600 + "px";
          sc.style.width = 700 + "px";
          sc.style.backgroundImage = "url(img/tidemm.png)";
          setTimeout(star, 3000);
        } else {
          item.style.border = "5px red solid";
        }
      });
    });
  }
}
