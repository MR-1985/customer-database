function formTemplate(){
    return `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required placeholder="Enter new customer">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="Enter new customer Email">
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required placeholder="Enter new customer phone number">
    <button type="submit" id="submit-button">Add customer</button>
    `
}

function searchFormTemplate(){
    return `
    <label for="name">Search Name:</label>
    <input type="text" id="searchName" name="searchname" placeholder="Enter customer name">
    <label for="email">Search Email:</label>
    <input type="email" id="searchEmail" name="searchEmail" placeholder="Enter customer Email">
    <label for="phone">Search Phone:</label>
    <input type="tel" id="searchPhone" name="searchPhone" placeholder="Enter customer phone number">
    <button type="submit" id="search-button">Search customer</button>
    `
}