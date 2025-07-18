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

function createForm(){
    let form = document.createElement("form");
    form.id = "customerForm";
    form.className = "customer-form";
    form.innerHTML = formTemplate();
    form.onsubmit = addCustomer;
    document.getElementById("limitedContent").appendChild(form);
}

function createSearchCustomerButton(){
    let searchCustomerButton = document.createElement("button");
    searchCustomerButton.id = "searchCustomerButton";
    searchCustomerButton.innerHTML = "Search Customer";
    searchCustomerButton.onclick = toggleSearchForm;
    document.getElementById("limitedContent").appendChild(searchCustomerButton);
}

function createGoBackButton(){
    let goBackButton = document.createElement("button");
    goBackButton.id = "goBackButton";
    goBackButton.className = "d-none";
    goBackButton.innerHTML = "Go Back";
    goBackButton.onclick = toggleSearchForm;
    document.getElementById("limitedContent").appendChild(goBackButton);
}

function createInfoText(){
    let infoText = document.createElement("p");
    infoText.className="info-text";
    infoText.innerHTML="Customer successfully added to database.";
    document.getElementById("limitedContent").appendChild(infoText);
    setTimeout(() => {
        infoText.remove();
        document.getElementById("customerForm").reset();
    },2000);
}

function createSearchForm(){
    let searchForm = document.createElement("form");
    searchForm.id = "customerSearchForm";
    searchForm.className = "customer-form d-none";
    searchForm.innerHTML = searchFormTemplate();
    searchForm.onsubmit = searchCustomer;
    document.getElementById("limitedContent").appendChild(searchForm);
}

function createFooter() {
   let footer = document.createElement("footer");
   footer.className = "footer";
   footer.innerHTML = "<p class='footer-text'>© 2025 Customer Database</p><p class='footer-text'>created by Marco Rößler</p>";
   document.getElementById("body").appendChild(footer);
}
function createSafeToPcButton(){
    const createSafeToPcButton = document.createElement("button");
    createSafeToPcButton.id = "saveToPc";
    createSafeToPcButton.className = "save-to-pc-button";
    createSafeToPcButton.innerHTML = "Save to PC";
    createSafeToPcButton.onclick = saveToPC;
    document.getElementById("body").appendChild(createSafeToPcButton);
}

function createLoadFromPcButton(){
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.style.display = "none";
    fileInput.onchange = importFromPC;
    const button = document.createElement("button");
    button.innerText = "Kundendatei laden";
    button.className = "save-to-pc-button";
    button.onclick = () => fileInput.click();
    document.body.appendChild(fileInput);
    document.getElementById("body").appendChild(button);
}

