$(document).ready(function () {
    const hide_all_contents = function () {
        $('#HomeSection').css('display', 'none');
        $('#CustomerSection').css('display', 'none');
        $('#ItemSection').css('display', 'none');
        $('#OrderSection').css('display', 'none');
        $('#OrderDetails').css('display', 'none');
    };

    hide_all_contents();
    $('#HomeSection').css('display', 'block');

    $('#homeBtn').click(function () {
        hide_all_contents();
        $('#HomeSection').css('display', 'block');
    });

    $('#customerBtn').click(function () {
        hide_all_contents();
        $('#CustomerSection').css('display', 'block');
        $("#txtCustomerId").val(generateCustomerID());
    });

    $('#itemBtn').click(function () {
        hide_all_contents();
        $('#ItemSection').css('display', 'block');
        $("#txtItemsId").val(generateItemID());
    });

    $('#orderBtn').click(function () {
        hide_all_contents();
        $('#OrderSection').css('display', 'block');
        $("#orderId").val(generateOrderID());
        setCurrentDate();
    });

    $('#orderDetailsBtn').click(function () {
        hide_all_contents();
        $('#OrderDetails').css('display', 'block');
        loadAllOrders();
        loadAllOrderDetails();
    });
});