function complete(){
  let h = JSON.parse(localStorage.getItem("history") || "[]");
  h.push(today + " — " + quest);
  localStorage.setItem("history", JSON.stringify(h));

  document.getElementById("quest").innerText = "✅ Quest hari ini selesai";
  document.querySelector("button").innerText = "SELESAI";
  document.querySelector("button").disabled = true;
  document.querySelector("button").style.background = "#333";
}
