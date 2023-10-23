/**
 * Save Customer
 * */
$("#btnCSave").click(function () {

    // Create Object
    let CustomerArray = new customer(
        $("#txtCustomerId").val(),
        $("#txtCustomerName").val(),
        $("#txtCustomerAddress").val(),
        $("#txtCustomerSalary").val()
    );

    clearTextFieldsC();

    // Alert Save
    saveUpdateAlert("Customer", "saved.");

    // Add the customer object to the array
    customers.push(CustomerArray);

    $("#txtCustomerId").val(generateCustomerID());
    loadAllCustomers();
});

/**
 * Clear Text Fields in +New Customer
 * */
$("#btnClearC").click(function () {
    clearTextFieldsC();
});

function clearTextFieldsC() {
    txtCustomerId.value = '';
    txtCustomerName.value = '';
    txtCustomerAddress.value = '';
    txtCustomerSalary.value = '';
    $("#txtCustomerId").focus();
    checkValidity(customerValidations);
}

/**
 * Search Customer
 * */
$("#btnSearchCus").click(function () {
    var result = customers.find(({id}) => id === $("#searchCusId").val());
    console.log(result);

    if (result != null) {
        $("#customerTable").empty();
        var row = `<tr><td>${result.id}</td><td>${result.name}</td><td>${result.address}</td><td>${result.salary}</td></tr>`;
        $("#customerTable").append(row);

        $("#searchCustomerId").val(result.id);
        $("#nameUpdate").val(result.name);
        $("#addressUpdate").val(result.address);
        $("#salaryUpdate").val(result.salary);

        $("#searchCIdDelete").val(result.id);
        $("#disabledNameDelete").val(result.name);
        $("#disabledAddressDelete").val(result.address);
        $("#disabledSalaryDelete").val(result.salary);

    } else {
        emptyMassage();
        clearCDTextFields();
    }
});

/**
 * Clear Input Field in Search Bar
 * */
$("#clearSearchCus").click(function () {
    searchCusId.value = '';
    clearCDTextFields();
    clearCUTextFields();
    loadAllCustomers();
});

/**
 * Auto Forces Input Field in Search Bar
 * */
$('#searchCusId').keypress(function (event) {
    if (event.which === 13) {
        $('#btnSearchCus').focus();
    }
});
$('#btnSearchCus').keypress(function (event) {
    if (event.which === 13) {
        $('#searchCusId').focus();
    }
});

/**
 * Update Customer
 * */
$("#bntUpdateCustomer").click(function () {
    let CustomerId = $("#searchCustomerId").val();
    let response2 = updateCustomers(CustomerId);
    if (response2) {
        saveUpdateAlert(CustomerId, "updated.");
        clearCUTextFields();
        checkValidity(customerValidationsUpdate);
    } else {
        unSucsessUpdateAlert(CustomerId);
    }
});

function updateCustomers(CustomerId) {
    let customer = searchCustomer(CustomerId);
    if (customer != null) {
        customer.id = $("#searchCustomerId").val();
        customer.name = $("#nameUpdate").val();
        customer.address = $("#addressUpdate").val();
        customer.salary = $("#salaryUpdate").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

/**
 * Clear Text Fields in Update Customer
 * */
$("#btnUclearC").click(function () {
    clearCUTextFields();
});

function clearCUTextFields() {
    searchCustomerId.value = '';
    nameUpdate.value = '';
    addressUpdate.value = '';
    salaryUpdate.value = '';
}

/**
 * Delete Customer
 * */
$("#btnDeleteCustomer").click(function () {
    let deleteID = $("#searchCIdDelete").val();

    yesNoAlertDelete(deleteID);
});

/**
 * Search Id Enter Pressed And Load TextFields
 * */
$("#searchCIdDelete").keyup(function (event) {
    if (event.keyCode === 13) {
        var result = customers.find(({id}) => id === $("#searchCIdDelete").val());
        console.log(result);

        if (result != null) {
            $("#searchCIdDelete").val(result.id);
            $("#disabledNameDelete").val(result.name);
            $("#disabledAddressDelete").val(result.address);
            $("#disabledSalaryDelete").val(result.salary);
        } else {
            emptyMassage();
            clearCDTextFields();
        }
    }
});

/**
 * Clear Text Fields in Delete Customer
 * */
$("#btnDclearC").click(function () {
    clearCDTextFields();
});

function clearCDTextFields() {
    searchCIdDelete.value = '';
    disabledNameDelete.value = '';
    disabledAddressDelete.value = '';
    disabledSalaryDelete.value = '';
}

/**
 * View All Customers
 * */
$("#btnViewAllCustomer").click(function () {
    loadAllCustomers();
});

/**
 * Load All Customers
 * */
function loadAllCustomers() {

    // Remove all the table body content before adding data
    $("#customerTable").empty();

    // Get all customer records from the array
    for (var customer of customers) {
        console.log(customer);// customer object

        // Using String Literals to do the same thing as above
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        //then add it to the table body of customer table
        $("#customerTable").append(row);
    }
    blindClickEvents();
    dblRowClickEventsCus();
    loadAllCustomersForOption();
}

/**
 * Table Listener Click & Load To TextFields
 * */
function blindClickEvents() {
    $("#customerTable>tr").click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();
        console.log(id, name, address, salary);

        $("#searchCustomerId").val(id);
        $("#nameUpdate").val(name);
        $("#addressUpdate").val(address);
        $("#salaryUpdate").val(salary);

        $("#searchCIdDelete").val(id);
        $("#disabledNameDelete").val(name);
        $("#disabledAddressDelete").val(address);
        $("#disabledSalaryDelete").val(salary);
    });
}

/**
 * Table Listener Double Click & Remove
 * */
function dblRowClickEventsCus() {
    $("#customerTable>tr").on('dblclick', function () {
        let deleteCusID = $(this).children().eq(0).text();
        yesNoAlertDelete(deleteCusID);
    });
}

/**
 * Generate New Customer ID
 * */
function generateCustomerID() {
    if (customers.length > 0) {
        let lastId = customers[customers.length - 1].id;
        let digit = lastId.substring(6);
        let number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "C00-001";
    }
}

/**
 * Input Fields warnings in +New Customer
 * */
$("#txtCustomerId").focus();
const regExCusID = /^(C00-)[0-9]{3,4}$/;
const regExCusName = /^[A-z ]{3,20}$/;
const regExCusAddress = /^[A-z0-9/ ]{4,30}$/;
const regExSalary = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({
    reg: regExCusID,
    field: $('#txtCustomerId'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
customerValidations.push({
    reg: regExCusName,
    field: $('#txtCustomerName'),
    error: 'Customer Name Pattern is Wrong : A-z 3-20'
});
customerValidations.push({
    reg: regExCusAddress,
    field: $('#txtCustomerAddress'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidations.push({
    reg: regExSalary,
    field: $('#txtCustomerSalary'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

/**
 * Input Fields warnings in Update Customer
 * */
let customerValidationsUpdate = [];
customerValidationsUpdate.push({
    reg: regExCusID,
    field: $('#searchCustomerId'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
customerValidationsUpdate.push({
    reg: regExCusName,
    field: $('#nameUpdate'),
    error: 'Customer Name Pattern is Wrong : A-z 3-20'
});
customerValidationsUpdate.push({
    reg: regExCusAddress,
    field: $('#addressUpdate'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidationsUpdate.push({
    reg: regExSalary,
    field: $('#salaryUpdate'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

/**
 * Disable "Tab" Key in +New Customer
 * */
$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keyup', function (event) {
    checkValidity(customerValidations);
});

$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('blur', function (event) {
    checkValidity(customerValidations);
});

/**
 * Enable "Enter" Key in +New Customer
 * */
$("#txtCustomerId").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusID, $("#txtCustomerId"))) {
        $("#txtCustomerName").focus();
    } else {
        focusText($("#txtCustomerId"));
    }
});

$("#txtCustomerName").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusName, $("#txtCustomerName"))) {
        focusText($("#txtCustomerAddress"));
    }
});

$("#txtCustomerAddress").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusAddress, $("#txtCustomerAddress"))) {
        focusText($("#txtCustomerSalary"));
    }
});

$("#txtCustomerSalary").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExSalary, $("#txtCustomerSalary"))) {
        if (event.which === 13) {
            $('#btnCSave').focus();
        }
    }
});

/**
 * Disable Save Customer Button
 * */
function setButtonStateCS(value) {
    if (value > 0) {
        $("#btnCSave").attr('disabled', true);
    } else {
        $("#btnCSave").attr('disabled', false);
    }
}

/**
 * Disable "Tab" Key in Update Customer
 * */
$("#searchCustomerId,#nameUpdate,#addressUpdate,#salaryUpdate").on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

$("#searchCustomerId,#nameUpdate,#addressUpdate,#salaryUpdate").on('keyup', function (event) {
    checkValidity(customerValidationsUpdate);
});

$("#searchCustomerId,#nameUpdate,#addressUpdate,#salaryUpdate").on('blur', function (event) {
    checkValidity(customerValidationsUpdate);
});

/**
 * Enable "Enter" Key in Update Customer
 * */
$("#searchCustomerId").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusID, $("#searchCustomerId"))) {
        $("#nameUpdate").focus();
    } else {
        focusText($("#searchCustomerId"));
    }
});

$("#nameUpdate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusName, $("#nameUpdate"))) {
        focusText($("#addressUpdate"));
    }
});

$("#addressUpdate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusAddress, $("#addressUpdate"))) {
        focusText($("#salaryUpdate"));
    }
});

$("#salaryUpdate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExSalary, $("#salaryUpdate"))) {
        if (event.which === 13) {
            $('#bntUpdateCustomer').focus();
        }
    }
});

/**
 * Disable Update Customer Button
 * */
function setButtonStateCU(value) {
    if (value > 0) {
        $("#bntUpdateCustomer").attr('disabled', true);
    } else {
        $("#bntUpdateCustomer").attr('disabled', false);
    }
}

function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomers();
        clearCDTextFields();
        return true;
    } else {
        return false;
    }
}

function searchCustomer(cusId) {
    for (let customer of customers) {
        if (customer.id === cusId) {
            return customer;
        }
    }
    return null;
}