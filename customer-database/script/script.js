let customerList = [];

function init() {
   try{
      let customersFromCustomerList = localStorage.getItem("customerList");
      customerList = customersFromCustomerList ? JSON.parse(customersFromCustomerList) :[];
   }catch (error){
      console.warn("No customers found in local Storage.");
      customerList = [];
   }

   createAllHtmlContainer();
}

function createAllHtmlContainer() {
   createHeader();
   createLimitedContent();
   createForm();
   createSearchForm();
   createSearchCustomerButton();
   createGoBackButton();
   createFooter();
   createSafeToPcButton();
   createLoadFromPcButton();
}

function addCustomer(event) {
   event.preventDefault();
    let customerName = document.getElementById("name").value.trim().toLowerCase();
    let customerEmail = document.getElementById("email").value.trim().toLowerCase();
    let customerPhone = document.getElementById("phone").value.trim().toLowerCase();
    let customerObject={
      name: customerName,
      email: customerEmail,
      phone: customerPhone
    }
customerList.push(customerObject);
localStorage.setItem("customerList", JSON.stringify(customerList));
createInfoText();
}

function searchCustomer(event) {
   event.preventDefault();
   let searchName = document.getElementById("searchName").value.trim().toLowerCase();
   let searchEmail = document.getElementById("searchEmail").value.trim().toLowerCase();
   let searchPhone = document.getElementById("searchPhone").value.trim().toLowerCase();
   if(!customerList || customerList.length === 0) {
      alert("No Customers in the Database");
      document.getElementById("customerSearchForm").reset();
      return;
   }
   try {
   let filteredCustomers = customerList.filter(customer => {
      let nameMatch = searchName === "" || customer.name.toLowerCase().includes(searchName);
      let emailMatch = searchEmail === "" || customer.email.toLowerCase().includes(searchEmail);
      let phoneMatch = searchPhone === "" || customer.phone.toLowerCase().includes(searchPhone);
      return nameMatch && emailMatch && phoneMatch;
   });
   if (filteredCustomers.length === 0) {
      alert("No Customers found with the given criteria.");
      document.getElementById("customerSearchForm").reset();
      return;
   }
   console.table(filteredCustomers);
} catch (error) {
   alert("No Customers in the Database:", error);
   document.getElementById("customerSearchForm").reset();
   return
}
document.getElementById("customerSearchForm").reset();
}

function toggleSearchForm(){
   document.getElementById("customerForm").classList.toggle("d-none");
   document.getElementById("searchCustomerButton").classList.toggle("d-none");
   document.getElementById("customerForm").reset();
   document.getElementById("customerSearchForm").classList.toggle("d-none");
   document.getElementById("goBackButton").classList.toggle("d-none");
   document.getElementById("customerSearchForm").reset();
}

function saveToPC(){
   let dataStr = JSON.stringify(customerList);
   let blob = new Blob([dataStr], { type: "application/json" });
   let url = URL.createObjectURL(blob);
   let a = document.createElement("a");
   a.href = url;
   a.download = "customerData.json";
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
};

function importFromPC(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (Array.isArray(data)) {
                localStorage.setItem("customerList", JSON.stringify(data));
                customerList = data;
                alert("Import erfolgreich. Kundendaten wurden geladen.");
            } else {
                alert("Ungültiges Datenformat.");
            }
        } catch (err) {
            alert("Fehler beim Lesen der Datei.");
            console.error(err);
        }
    };
    reader.readAsText(file);
}