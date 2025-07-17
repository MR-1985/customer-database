function createHeader() {
   let header = document.createElement("header");
   header.className = "header";
   header.innerHTML = "<h1 class='header-title'>Customer Database</h1>";
   document.getElementById("body").appendChild(header);
}

function createLimitedContent(){
    let limitedContent = document.createElement("div");
    limitedContent.id = "limitedContent"
    limitedContent.className = "limited-content";
    document.getElementById("body").appendChild(limitedContent);
}

function createFooter() {
   let footer = document.createElement("footer");
   footer.className = "footer";
   footer.innerHTML = "<p class='footer-text'>© 2025 Customer Database</p><p class='footer-text'>created by Marco Rößler</p>";
   document.getElementById("body").appendChild(footer);
}

function createForm(){
    let form = document.createElement("form");
    form.id = "customerForm";
    form.className = "customer-form";
    form.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required placeholder="Enter new customer">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="Enter customer Email">
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required placeholder="Enter customer phone number">
    <button type="submit" onsubmit="addCustomer()" id="submit-button">Add customer</button>
    `
    document.getElementById("limitedContent").appendChild(form);
}