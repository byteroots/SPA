function init(){
   load_dashboard(); //By default
    $( ".nav_dashboard" ).click(function() {
        load_dashboard();
    });
    $( ".nav_customers" ).click(function() {
        load_customers();
    });
    $( ".nav_items" ).click(function() {
        load_items()
    });
    $( ".nav_orders" ).click(function() {
       load_orders();
    });
    $( ".nav_searchOrders" ).click(function() {
        load_searchOrders();
    });
}

function  load_dashboard(){
    $("#dashboard_wrapper").css("display", "block");
    $("#customers_wrapper").css("display", "none");
    $("#items_wrapper").css("display", "none");
    $("#orders_wrapper").css("display", "none");
    $("#searchOrders_wrapper").css("display", "none");
}
function  load_customers(){
    $("#dashboard_wrapper").css("display", "none");
    $("#customers_wrapper").css("display", "block");
    $("#items_wrapper").css("display", "none");
    $("#orders_wrapper").css("display", "none");
    $("#searchOrders_wrapper").css("display", "none");
}
function  load_items(){
    $("#dashboard_wrapper").css("display", "none");
    $("#customers_wrapper").css("display", "none");
    $("#items_wrapper").css("display", "block");
    $("#orders_wrapper").css("display", "none");
    $("#searchOrders_wrapper").css("display", "none");
}
function  load_orders(){
    $("#dashboard_wrapper").css("display", "none");
    $("#customers_wrapper").css("display", "none");
    $("#items_wrapper").css("display", "none");
    $("#orders_wrapper").css("display", "block");
    $("#searchOrders_wrapper").css("display", "none");
}
function  load_searchOrders(){
    $("#dashboard_wrapper").css("display", "none");
    $("#customers_wrapper").css("display", "none");
    $("#items_wrapper").css("display", "none");
    $("#orders_wrapper").css("display", "none");
    $("#searchOrders_wrapper").css("display", "block");
}
