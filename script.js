$(document).ready(function () {

    //checked droneId and descriptio
    $("#checkDisabled").click(function () {
        if ($("#checkDisabled").prop('checked') == false) {

            $(".disabledButton").addClass('ui-disabled');
        }
        else {
            $("#checkDisabled").prop('checked', true);
            $(".disabledButton").removeClass('ui-disabled');
        }
    });

    $("#saveUser").on("click", function () {

        var userEmpty = $("#userName").val();
        var fstEmpty = $("#fstName").val();
        var lstEmpty = $("#lstName").val();
        var droneEmpty = $("#droneId").val();
        //Chek for usename
        if (check_empty(userEmpty)) {
            $("#userName").parent().css({ "border": "1px solid green" });
        }
        else {
            $('#userName').parent().css({ "border": "1px solid red" });
        }

        if (check_empty(fstEmpty)) {
            $("#fstName").parent().css({ "border": "1px solid green" });
        }
        else {
            $('#fstName').parent().css({ "border": "1px solid red" });
        }

        if (check_empty(lstEmpty)) {
            $("#lstName").parent().css({ "border": "1px solid green" });
        }
        else {
            $('#lstName').parent().css({ "border": "1px solid red" });
        }

        if (check_empty(droneEmpty)) {
            $("#droneId").parent().css({ "border": "1px solid green" });
        }
        else {
            $('#droneId').parent().css({ "border": "1px solid red" });
        }

        //Check Email field
        var sEmail = $('#userEmail').val();

        if (validateEmail(sEmail)) {
            $("#userEmail").parent().css({ "border": "1px solid green" });
        }
        else {
            $("#userEmail").parent().css({ "border": "1px solid red" });
        }


        //Check Phone Field
        if (!validatePhone('txtPhone')) {
            $('#phoneNumber').parent().css({ "border": "1px solid red" });
        }

        else {
            $('#phoneNumber').parent().css({ "border": "1px solid green" });
        }

        //Check Password
        if (!validatePassword()) {
            var errorMessage = "The passwords don't match.";
            $('#confirm_password').parent().css({ "border": "1px solid red" });
            $('#password').parent().css({ "border": "1px solid red" });
        }

        else {
            $('#confirm_password').parent().css({ "border": "1px solid green" });
            $('#password').parent().css({ "border": "1px solid green" });

        }

        addUser();
    });


    $(".hideDescription").hide();
    //Search Function
    $('#search-menu').parent().on("input", function () {
            for (i = 2; i <= $('#listEmail > li').length; i++) {
                $(' .resultsList  > li:nth-child(' + i + ')').show();
            }

            var searchText = $('#search-menu').val();

            var listLength = $('ul.resultsList > li');
            var result = [];

            for (i = 0; i < 4; i++) {
                debugger;
                for (j = 2; j <= $('#listEmail > li').length; j++) {
                    switch(i)
                    {
                        case 0: //Email
                            if ($('#listEmail > li:nth-child(' + j + ')').text().search(searchText) > -1)
                            {
                                var exists = false;
                                var element = $(' #listEmail  > li:nth-child(' + j + ')').text().toString();

                                // Check for element exists in result array
                                for (var k = 0; k < result.length; k++)
                                {
                                    if(result[k] == element)
                                    {
                                        exists = true;
                                    }
                                }

                                if (!exists)
                                {
                                    result.push(element);
                                }
                            }
                            break;

                        case 1: //First name
                            if ($('#listFstName > li:nth-child(' + j + ')').text().search(searchText) > -1) {
                                var exists = false;
                                var element = $(' #listEmail  > li:nth-child(' + j + ')').text().toString();

                                // Check for element exists in result array
                                for (var k = 0; k < result.length; k++) {
                                    if (result[k] == element) {
                                        exists = true;
                                    }
                                }

                                if (!exists) {
                                    result.push(element);
                                }
                            }
                            break;

                        case 2: //Last name
                            if ($('#listLstName > li:nth-child(' + j + ')').text().search(searchText) > -1) {
                                var exists = false;
                                var element = $(' #listEmail  > li:nth-child(' + j + ')').text().toString();

                                // Check for element exists in result array
                                for (var k = 0; k < result.length; k++) {
                                    if (result[k] == element) {
                                        exists = true;
                                    }
                                }

                                if (!exists) {
                                    result.push(element);
                                }
                            }
                            break;

                        case 3: //Phone
                            if ($('#listPhoneNumber > li:nth-child(' + j + ')').text().search(searchText) > -1) {
                                var exists = false;
                                var element = $(' #listEmail  > li:nth-child(' + j + ')').text().toString();

                                // Check for element exists in result array
                                for (var k = 0; k < result.length; k++) {
                                    if (result[k] == element) {
                                        exists = true;
                                    }
                                }

                                if (!exists) {
                                    result.push(element);
                                }
                            }
                            break;
                    }
                }
            }

            for(var i = 2; i <= $('#listEmail > li').length; i++)
            {
                var element = $(' #listEmail  > li:nth-child(' + i + ')').text().toString();
                var exists = false;
                for (var j = 0; j<result.length; j++)
                {
                    if(result[j] == element)
                    {
                        exists = true;
                    }
                }

                if(!exists)
                {
                    $(' .resultsList  > li:nth-child(' + i + ')').hide();
                }
            }
        });
    //buttons for show user list
    $("#showListUsers").click(function () {
        if ($("#popupList").is(':hidden')) {
            // Calculate width, height and position before show
            var maxHeight = $(window).height() - 10 + 'px';
            var leftSide = $(".leftSide").width() + 6 + 'px';
            var topSide = $(".headerPage").height() + 5 + 'px';
            $('.popupList').css({ "max-height": maxHeight });
            $("#popupList").show();
            $('[data-role="popup"]').popup("close");
            $('#popupList').resize();

        }

        getUsersList();
    });

    //buttons for hide user list
    $(".closeButton").click(function () {
        $(".popupList").css({ "display": "none" });

    });

    //buttons for show drone list
    $('#showDroneUsers').click(function () {
        
        // Calculate width, height and position before show
        var maxHeight = $(window).height() - 10 + 'px';
        var leftSide = $(".leftSide").width() + 6 + 'px';
        var topSide = $(".headerPage").height() + 5 + 'px';
        $('.popupListDrone').css({ "max-height": maxHeight });
        $("#popupListDrone").show();
        $('#popupListDrone').resize();
    });
    //height of left side

    heightLeftSide();
    heightIconMenu();

    //closebuttons for AddUser box
    $(".closeAddUser").click(function () {
        $('#userName').parent().css({ "border": "1px solid #444" });
        $("#fstName").parent().css({ "border": "1px solid #444" });
        $("#lstName").parent().css({ "border": "1px solid #444" });
        $("#droneId").parent().css({ "border": "1px solid #444" });
        $("#userEmail").parent().css({ "border": "1px solid #444" });
        $('#phoneNumber').parent().css({ "border": "1px solid #444" });
        $('#confirm_password').parent().css({ "border": "1px solid #444" });
        $('#password').parent().css({ "border": "1px solid #444" });
        $("#popupUser").popup("close");

    });
 

    $(".iconListUser").on("click", function () {
        $(".listOfUsers").toggle(function () {
            getUsersList();
        });
    });

    //open log popup 
    $("#showLogList").on("click", function () {
        debugger;
        var leftSide = $(".leftSide").width()  + 6 + 'px';
        var topSide = $(".headerPage").height() + 5 + 'px';
        var widthLog = $(".headerPage ").width() - 15 + "px";
        $("#logUser").popup('open');
        $("#popupList").hide();
        $("#logUser").parent().css({ "position": "absolute", "top": topSide, "left": leftSide, "width": widthLog  })
        getLogsList();

    });

        //open log popup 
    $("#showBase").on("click", function () {
        debugger;
        var leftSide = $(".leftSide").width()  + 6 + 'px';
        var topSide = $(".headerPage").height() + 5 + 'px';
        var widthLog = $(".headerPage ").width() - 15 + "px";
        $("#baseStation").popup('open');
        $("#popupList").hide();
        $("#baseStation").parent().css({ "position": "absolute", "top": topSide, "left": leftSide, "width": widthLog })
        getBase();

    });
    
    //checked droneId and description
    $("#checkAddDrone").click(function () {
        if ($("#checkAddDrone").prop('checked') == false) {

            $(".addDrone").textinput("disable");
        }
        else {
            $(".addDrone").textinput("enable");
        }
    });

    $("#checkAddBase").click(function () {
        if ($("#checkAddBase").prop('checked') == false) {

            $(".addBase").textinput("disable");
        }
        else {
            $(".addBase").textinput("enable");
        }
    });
});

$(window).on("resize", function () {

    heightLeftSide();
    heightIconMenu();
});

//Validate Function///////////////////////////////////////////////////////
//Check for empty field
function check_empty(userEmpty, fstEmpty, lstEmpty, droneEmpty) {
    if ($.trim(userEmpty).length == 0) {
        return false;
    }
    else {
        return true;
    }

    if ($.trim(fstEmpty).length == 0) {
        return false;
    }
    else {
        return true;
    }

    if ($.trim(lstEmpty).length == 0) {
        return false;
    }
    else {
        return true;
    }
    if ($.trim(droneEmpty).length == 0) {
        return false;
    }
    else {
        return true;
    }
}
// Validate Email

function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    if ($.trim(sEmail).length == 0) {
        return false
    }
    else {
        return false;
    }
}


// Validate Phone number

function validatePhone(txtPhone) {
    var phone = $('#phoneNumber').val();
    var filter = /^[0-9-+]+$/;
    if (filter.test(phone)) {
        return true;
    }
    else {
        return false;
    }
}

// Validate Password
function validatePassword() {
    var password = $("#password").val();
    var confirmPassword = $("#confirm_password").val();

    if ($.trim(password).length == 0 || $.trim(confirmPassword).length == 0) {
        return false;
    }
    if (password != confirmPassword) {
        return false;
    }
    else {
        return true;
    }
}
//Calculate Heght on Left side and Icon Menu
function heightIconMenu() {
    var heightleftside = $("#wrapperLeftSide").height();
    var heightHeader = $("#headerHeightIcon").height();
    var heightIcon = heightleftside - heightHeader;

    $(".icon-menu").css({ "height": heightIcon + "px", "background": "#222" });
}
function heightLeftSide() {
    var windowH = $(window).height();
    var wrapperH = $('#wrapperLeftSide').height();
    if (windowH > wrapperH) {
        $('#wrapperLeftSide').css({ 'height': ($(window).height()) + 'px' });
    }
    $(window).resize(function () {
        var windowH = $(window).height();
        var wrapperH = $('#wrapperLeftSide').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#contentLeftSide').height();
        if (windowH > truecontentH) {
            $('#wrapperLeftSide').css('height', (newH) + 'px');
        }

    });
}

// Open change dialog box
function openChangeDialog(type, currentParam)
{
    switch(type)
    {
        case "email":
            $("#changeParamHeader").text("Email");
            $("#changeParamDescription").text("Change Email");
            break;

        case "first_name":
            $("#changeParamHeader").text("First Name");
            $("#changeParamDescription").text("Change First Name");
            break;

        case "last_name":
            $("#changeParamHeader").text("Last Name");
            $("#changeParamDescription").text("Change Last Name");
            break;

        case "phone":
            $("#changeParamHeader").text("Phone");
            $("#changeParamDescription").text("Change Phone");
            break;
        case "password":
            $("#changeParamHeader").text("Password");
            $("#changeParamDescription").text("Change Password");
            break;
    }
    $("#changeParamInput").val(currentParam);
    $("#changeParamDialog").popup("open");
    selectedParam = type;
}

// Show SQL query result
function showQueryResult(result) {
    
    if (result.search("ERROR") > -1)
    {
        $("#resultIcon").removeClass("ui-icon-check");
        $("#resultIcon").addClass("ui-icon-alert");
    } else
    {
        $("#resultIcon").addClass("ui-icon-check");
        $("#resultIcon").removeClass("ui-icon-alert");
    }
    

    // Close add user popup
    $("#popupUser").popup("close");

    // Set result text
    $("#resultText").val(result);

    // Show result popup after 200ms
    setTimeout(function () {
        $("#sqlResult").popup("open");
    }, 200);

    // Close automaticaly result popup after 2200ms
    setTimeout(function () {
        $("#sqlResult").popup("close");
    }, 4200);
}

var selectedUser = "";
var selectedParam = "";
var selectedDrone = "";
//
function mysqlQuery(data, wantResponse)
{
    
    // Create API query
    $.post("api.php", data, function (result, status, xhr) {

        if (result != "")
        {
            // Check result and show it in result dialog box
            if (!wantResponse) {
                showQueryResult(result);
            } else {
                switch (data.command)
                {
                    case "getUsers":
                        $("#listEmail").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Email</li>');
                        $("#listFstName").empty().append('<li data-role="list-divider" class="listOfFirstName ui-li-divider ui-bar-a ui-first-child" role="heading">First Name</li>');
                        $("#listLstName").empty().append('<li data-role="list-divider" class="listOfLastName ui-li-divider ui-bar-a ui-first-child" role="heading">Last Name</li>');
                        $("#listPhoneNumber").empty().append('<li data-role="list-divider" class="listOfPhone ui-li-divider ui-bar-a ui-first-child" role="heading">Phone Number</li>');
                        $("#listPassword").empty().append('<li data-role="list-divider" class="listOfPhone ui-li-divider ui-bar-a ui-first-child" role="heading">Password</li>');
                        $("#listDroneId").empty().append('<li data-role="list-divider" class="listOfPhone ui-li-divider ui-bar-a ui-first-child" role="heading">Drone List</li>');
                        $("#allUsersInfo").empty().append('<li data-role="list-divider" class="listOfPhone ui-li-divider ui-bar-a ui-first-child" role="heading">All Users</li>');

                        var rows = clearArray(result.split("+++"));

                        for (var i = 0; i < rows.length; i++)
                        {
                            var elements = rows[i].split("---");
                            elements = clearArray(elements);
                            $("#listEmail").append('<li class="ui-li-static ui-body-inherit"><div class="ui-btn ui-input-btn ui-corner-all ui-shadow">' + elements[0] + '<input class="disabledButton ui-disabled" type="button" data-role="button" onclick="selectedUser=\'' + elements[0] + '\'; openChangeDialog(\'email\',\'' + elements[0] + '\');" value="' + elements[0] + '"></div></li>');

                            $("#allUsersInfo").append('<li class="ui-li-static ui-body-inherit">' + elements[0] + '</li>');

                            $("#listFstName").append('<li class="ui-li-static ui-body-inherit"><div class="ui-btn ui-input-btn ui-corner-all ui-shadow">' + elements[1] + '<input class="disabledButton ui-disabled" type="button" data-role="button" onclick="selectedUser=\'' + elements[0] + '\'; openChangeDialog(\'first_name\',\'' + elements[1] + '\');" value="' + elements[1] + '"></div></li>');

                            $("#listLstName").append('<li class="ui-li-static ui-body-inherit"><div class="ui-btn ui-input-btn ui-corner-all ui-shadow">' + elements[2] + '<input class="disabledButton ui-disabled" type="button" data-role="button" onclick="selectedUser=\'' + elements[0] + '\'; openChangeDialog(\'last_name\',\'' + elements[2] + '\');" value="' + elements[2] + '"></div></li>');

                            $("#listPhoneNumber").append('<li class="ui-li-static ui-body-inherit"><div class="ui-btn ui-input-btn ui-corner-all ui-shadow">' + elements[4] + '<input class="disabledButton ui-disabled" type="button" data-role="button" onclick="selectedUser=\'' + elements[0] + '\'; openChangeDialog(\'phone\',\'' + elements[4] + '\');" value="' + elements[4] + '"></div></li>');

                            $("#listPassword").append('<li class="ui-li-static ui-body-inherit"><div class="ui-btn ui-input-btn ui-corner-all ui-shadow">Set<input class="" type="button" data-role="button" onclick="selectedUser=\'' + elements[0] + '\'; openChangeDialog(\'password\',\'Change Password\');" value="Set"></div></li>');

                            $("#listDroneId").append('<li class="ui-li-static ui-body-inherit"><div class="ui-btn ui-input-btn ui-corner-all ui-shadow">Info drones<input class="" type="button" data-role="button" onclick="selectedUser=\'' + elements[0] + '\'; getDronesByUser();" value="Info drones"></div></li>');


                        }

                        break;

                    case "updateData":
                        getUsersList();
                        $('#changeParamDialog').popup('close');
                        break;
                    
                    case "updateDroneData":
                        getDroneList();
                        $('#updateDroneToUser').popup('close');
                        break;

                    case "getDrones":
                        var rows = clearArray(result.split("+++"));

                        $('#contentDroneList ul[data-role="listview"]').empty();

                        for (var i = 0; i < 1; i++) {
                            var elements = rows[i].split("---");
                            elements = clearArray(elements);
                            $("#droneToUser").css("overflow", "visible").text(elements[0]);
                            $('<ul data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow"><li class="ui-li-static ui-body-inherit"><strong>Email:</strong><span>' + ' ' + elements[0] + '</span></li> <li class="ui-li-static ui-body-inherit"><strong>Register Date:</strong><span>' + ' ' + elements[2] + '</span></li><li class="ui-li-static ui-body-inherit"><strong>Description:</strong><span>' + ' ' + elements[3] + '<button data-inline="true" class=" ui-btn ui-shadow ui-corner-all" onclick="selectedUser=\'' + elements[0] + '\'; selectedDrone=\'' + elements[1] + '\'; $(\'.hideDescription\').show();">Update</button></span><li></ul>').appendTo($('#contentDroneList'));
                            $('#contentDroneList ul[data-role="listview"]' ).listview({
                                autodividers: true,
                                autodividersSelector: function ( li ) {
                                    var out = elements[1];
                                    return out;
                                }
                            });

                        }
                         

                        $("#popupListDrone").popup("open");
                        $(".hideDescription").attr("")
                        break;

                    case "getLogs":

                        $("#emailLogs").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Email</li>');
                        $("#dateLogs").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Login Date</li>');
                        $("#ipLogs").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Ip</li>');
                        $("#browserLogs").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Browser</li>');

                        var rows = clearArray(result.split("+++"));

                        for (var i = 0; i < rows.length; i++)
                        {
                            var elements = rows[i].split("---");
                            elements = clearArray(elements);

                            $("#emailLogs").append('<li class="ui-li-static ui-body-inherit">' + elements[0] + '</li>');
                            $("#dateLogs").append('<li class="ui-li-static ui-body-inherit">' + elements[1] + '</li>');
                            $("#ipLogs").append('<li class="ui-li-static ui-body-inherit">' + elements[2] + '</li>');
                            $("#browserLogs").append('<li class="ui-li-static ui-body-inherit">' + elements[3] + '</li>');
                        }
                        break;

                    case "getBase":
                        $("#baseId").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Base Id</li>');
                        $("#baseUser").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">User Name</li>');
                        $("#baseDescription").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Description</li>');
                        $("#baseRegDate").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Register Date</li>');
                        $("#baseDroneId").empty().append('<li data-role="list-divider" class="listOfEmail ui-li-divider ui-bar-a ui-first-child" role="heading">Drone Id</li>');

                        var rows = clearArray(result.split("+++"));

                        for (var i = 0; i < rows.length; i++) {
                            var elements = rows[i].split("---");
                            elements = clearArray(elements);

                            $("#baseId").append('<li class="ui-li-static ui-body-inherit">' + elements[0] + '</li>');
                            $("#baseUser").append('<li class="ui-li-static ui-body-inherit">' + elements[1] + '</li>');
                            $("#baseDescription").append('<li class="ui-li-static ui-body-inherit">' + elements[2] + '</li>');
                            $("#baseRegDate").append('<li class="ui-li-static ui-body-inherit">' + elements[3] + '</li>');
                            $("#baseDroneId").append('<li class="ui-li-static ui-body-inherit">' + elements[4] + '</li>');
                        }
                        break;

                }
            }
        }
    });
}

// Add user to data base
function addUser()
{
    // Get current date
    var date = new Date();

    // Assemble date
    var registerDate = date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    // Assemble data for send to PHP API
    var data = { command: "addUser", email: $("#userEmail").val(), password: $("#password").val(), firstName: $("#fstName").val(), lastName: $("#lstName").val(), phone: $("#phoneNumber").val(), droneID: $("#droneId").val(), description: $("#droneDescription").val(), registerDate: registerDate };

    // Query
    mysqlQuery(data, false);
}

// Get users list
function getUsersList()
{
    
    var data = { command: "getUsers" }
    // Query

    var result = mysqlQuery(data, true);
    
}

function getDroneList()
{
    var data = { command: "getDrones" }
    
    var result = mysqlQuery(data, true);
}
//Get logs llist
function getLogsList()
{
    var data = { command: "getLogs" }
    //Query

    var result = mysqlQuery(data, true);
}

//Get base list
function getBase() {
    var data = { command: "getBase" }
    //Query

    var result = mysqlQuery(data, true);
}

// Clear empty elements from array
function clearArray(arr)
{
    for(var i =0; i<arr.length; i++)
    {
        if(arr[i] == "")
        {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// Update user parameter
    function updateParam()
    {
        if (selectedUser != "" && selectedParam != "")
        {
            var updatedParam = $("#changeParamInput").val();
            var data = { command: "updateData", userName: selectedUser, type: selectedParam, newParam: updatedParam };

            // Query
            mysqlQuery(data, true);
        }
    }

// Get drones list by user
function getDronesByUser()
{
    if (selectedUser != "") {
        var data = { command: "getDrones", userName: selectedUser};

        // Query
        mysqlQuery(data, true);
    }
}

//Add Drone to user
function addDroneToUser() {
    debugger;
    if (selectedUser != "") {
        var droneID = $("#droneIdForAdd").val();
        var description = $("#descriptionDrone").val();
        // Get current date
        var date = new Date();

        // Assemble date
        var registerDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        var data = { command: "addDrone", userName: selectedUser, droneID: droneID, description: description, date: registerDate };

        // Query
        mysqlQuery(data, true);

        $('#addDroneToUser').popup('close');
        $('#popupListDrone').popup('open');
    }
}

//Add Drone to user
//function addBaseToUser() {
//    debugger;
//    if (selectedUser != "" && selectedDrone !="") {
//        var droneID = $("#droneIdForAdd").val();
//        var description = $("#descriptionDrone").val();
//        // Get current date
//        var date = new Date();

//        // Assemble date
//        var registerDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

//        var data = { command: "addDrone", userName: selectedUser, droneID: droneID, description: description, date: registerDate };

//        // Query
//        mysqlQuery(data, true);

//        $('#addDroneToUser').popup('close');
//        $('#popupListDrone').popup('open');
//    }
//}

// Update Drone Description
function updateDroneData() {
    debugger;
    if (selectedUser != "" && selectedDrone != "") {
        var updateDroneDescription = $("#descriptionDroneUpdate").val();

        var data = { command: "updateDroneData", userName: selectedUser, droneID: selectedDrone, newDescription: updateDroneDescription };

        // Query
        mysqlQuery(data, true);
        
        $('.hideDescription').hide();
    }
}
