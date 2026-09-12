export default class Alert {
  constructor() {
    this.path = "../json/alerts.json";
  }

  async init() {
    try {
      const response = await fetch(this.path);
      if (response.ok) {
        const alerts = await response.json();
        this.renderAlerts(alerts);
      }
    } catch (error) {
      console.error("Error loading alerts:", error);
    }
  }

  renderAlerts(alerts) {
    if (alerts && alerts.length > 0) {
      const alertSection = document.createElement("section");
      alertSection.classList.add("alert-list");

      alerts.forEach((alert) => {
        const p = document.createElement("p");
        p.textContent = alert.message;
        p.style.backgroundColor = alert.background;
        p.style.color = alert.color;
        p.style.padding = "10px";
        p.style.margin = "0";
        p.style.textAlign = "center";
        alertSection.appendChild(p);
      });

      const main = document.querySelector("main");
      if (main) {
        main.prepend(alertSection);
      }
    }
  }
}