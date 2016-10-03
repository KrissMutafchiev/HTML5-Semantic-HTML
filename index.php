	<!DOCTYPE html>
<html>

<head>
	<title>InFly Technology</title>
	<script src="Includes/JQuery/jquery-1.11.1.min.js"></script>
	<script src="Includes/JQueryMobile/jquery.mobile.custom.js"></script>
	<link rel="stylesheet" href="Includes/JQueryMobile/jquery.mobile.icons.min.css">
	<link rel="stylesheet" href="Includes/JQueryMobile/theme-classic.css">
	<link rel="stylesheet" href="Includes/JQueryMobile/jquery.mobile.structure-1.4.5.min.css">
	<script src="Includes/JQueryMobile/jquery.mobile.custom.min.js"></script>
	<link href='Includes/Font/font.css' rel='stylesheet' type='text/css'>
	<meta charset="UTF-8">
	<style>
		.ui-loading .ui-loader {
			display: none;
		}
	    div[data-role="page"]{

	        background:transparent;
	    }
	      input:-webkit-autofill,
	        input:-webkit-autofill:hover,
	        input:-webkit-autofill:active,
	        input:-webkit-autofill:focus {
	            background-color: #FFFFFF !important;
	            color: #A9A9A9 !important;
	            -webkit-box-shadow: 0 0 0 1000px #222 inset !important;
	            -webkit-text-fill-color: #A9A9A9 !important;
	        }
	</style>
	</head>

	<body style="background-image:url('icons/background-login3.jpg'); background-repeat: no-repeat; background-size:100% 100%;">
	<div data-role="page">
	    <div style="width: 25%; height:auto; margin:0 auto;">
	        <form method="post" style="margin-top:30%;" data-theme="a" id="loginUserForm">
	            <h2 style="text-align:center;">Admin Login</h2>
	            <label for="un" class="ui-hidden-accessible">Username:</label>
	            <input type="email" name="username" placeholder="username" data-theme="a" value=""/>

	            <label for="pw" class="ui-hidden-accessible">Password:</label>
	            <input type="password" name="password" placeholder="password"  data-theme="a" value=""/>

	            <input type="submit" data-theme="a" value="Login"/>
	        </form>
	    </div>

	    <?php
	        // Get username and password from form
	        error_reporting(E_ERROR | E_PARSE);
	        $user = $_POST["username"];


	        $pass = $_POST["password"];
	        $is_admin = 0;
	        // Connection variables

	        $pass = $_POST["password"];
	        $is_admin = 0;
	        // Connection variables
	        $serverName = "localhost";
	        $userName = "root";
	        $password = "";
	        $dbName = "dcc";

	        // Official server
	        // $serverName = "localhost";
	        // $userName = "inflytec_user";
	        // $password = "aspopov967";
	        // $dbName = "inflytec_dcc";
	        // Create connection
	        $connection = new mysqli($serverName, $userName, $password, $dbName);
	        // Check connection
	        if ($connection->connect_error) {
	            die("Connection failed: " . $connection->connect_error);
	        }

	        $sql = "SELECT * FROM users WHERE email = '".$user."' AND password = MD5('".$pass."') ;";
	        $result = $connection->query($sql);

	        if ($result->num_rows > 0) {

	    ?>
  <link href='style.css' rel='stylesheet' type='text/css'>

    <div>
        <div data-role="header" class="headerPage">
            <div class="ui-grid-d">
                <div class="ui-block-a">
		                <a href="#popupUser" onclick="$("#popupList").hide();" data-role="button" data-position-to="window" data-rel="popup" data-icon="plus">Add User</a>
                 </div>

                 <div class="ui-block-b">
                    <a href="#" data-role="button" id="showListUsers" data-icon="bars">List Users </a>
                  </div>

									<div class="ui-block-c">
										 <a href="#"  data-role="button" id="showLogList" data-icon="bars">Log</a>
									 </div>

									 <div class="ui-block-d">
	                    <a href="#"  data-role="button" id="showBase" data-icon="location">Base station</a>
	                </div>

                 <div class="ui-block-e" style="float:right">
									 <form class="ui-filterable">
                    <input type="search" name="search-menu" id="search-menu" placeholder="search name or email">
									</form>
                </div>
          </div>
	   </div>
       <div class="leftSide" id = "wrapperLeftSide">
				 <div id="contentLeftSide">
           <div class="iconButtons">
              <div data-role="header" id="headerHeightIcon" style="width:100%; height:3.3em;">
                  <!-- <img src="Logo.png" class="logoImg"/> -->
              </div>
           <ul data-role="listview" data-inset="true" data-theme="a" class="icon-menu">

               <li>
                   <button class="iconListUser">
                      <img src="icons/list.png" class="iconNav"/>
                   </button>
               </li>

               <li>
                   <button>
                      <img src="icons/edit.png" class="iconNav"/>
                   </button>
               </li>
							 <li></li>
           </ul>
										<ul data-role="listview" data-inset="true" data-theme="a" id="allUsersInfo" class="user-list listOfUsers" data-input="#search-menu"  data-filter="true" >
                        <li data-role="list-divider"><h1>All Users</h1></li>
                    </ul>

										<ul data-role="listview" data-inset="true" data-theme="a" class="user-list editUser">
												<li data-role="list-divider"><h1>Edit Users</h1></li>
										</ul>
           </div>
				 </div>
        </div>


<!-- Add Users -->
        <div id="popupUser" class="popupUser" data-role="popup" data-dismissible="false" style="width:70em;" >
					<div data-role="header">
							<h1>User Profile</h1>
					</div>
            <div data-role="content">
              <div data-role="fieldcontain">
								<div class="ui-grid-b">
									<div class="ui-block-a blockUsers">
								<div class="ui-grid-a">
										<!-- Add Users -->
									<label for="email">Email:</label>
									<input type="email" name="email" class="userEmail" id="userEmail" style="width:200%;" />
									<div class="ui-block-a">
										<label for="fstName">First Name:</label>
										<input type="text" name="fst-name" class="fstName" id="fstName" value="" />

										<label for="name">Last Name:</label>
										<input type="text" name="lst-name" id="lstName" class="lstName"/>

									</div>

									<div class="ui-block-b">
										<label for="password">Password</label>
										<input type="password" class="passwordOfUser" id="password">

										<label for="confirm_password">Confirm Password</label>
									  <input type="password" id="confirm_password" class="confirm_password"/>
									</div>

									<label for="phoneNumber">Phone Number:</label>
									<input type="text" name="phone" class="phoneNumber" id="phoneNumber" value="" />

								</div>
							</div>

							<!-- Add drone -->
							<div class="ui-block-b blockDrone">
								<fieldset data-role="controlgroup">
									<input type="checkbox" name="" id="checkAddDrone" data-theme="a">
									<label for="checkAddDrone">Add Drone</label>
								</fieldset>
								<br/>
								<label for="droneId">Drone ID</label>
								<input disabled type="text" id="droneId" class="addDrone"/>
								<label>Description</label>
								<textarea disabled id="droneDescription" class="addDrone" rows="5"></textarea>
							</div>

							<!-- Add Base -->
							<div class="ui-block-c blockBase">
								<fieldset data-role="controlgroup">
									<input type="checkbox" name="" id="checkAddBase" data-theme="a">
									<label for="checkAddBase">Add Base</label>
								</fieldset>
								<br/>
								<label for="droneId">Base ID</label>
								<input disabled type="text" id="addBaseId" class="addBase"/>
								<label>Description</label>
								<textarea disabled id=addBaseDescription" class="addBase" rows="5"></textarea>
            	</div>
            </div>



					<div style="padding:0.5em;">
						<input type="submit" data-inline = "true" class="saveUser" id="saveUser" value="Save &amp; Continue"/>
						<a href="#" class="closeAddUser" data-role="button" data-inline = "true">Cancel</a>
				</div>
        </div>
			</div>
		</div>

<!-- List User -->
		<div id="popupList" class="popupList">
			<div class="headerStyle">
					<h3>All Users</h3>
				</div>

			<div class="contentStyle">
				<fieldset data-role="controlgroup">
					<input type="checkbox" name="" class="checkDisabled" id="checkDisabled" data-theme="a" >
					<label for="checkDisabled">Edit</label>
				</fieldset>

				<div class="breakpointUsers">

					<div class="tabUsers">
						<ul data-role="listview" data-inset="true" data-theme="a" class="resultsList" id="listEmail" >
									<li data-role="list-divider" class="listOfEmail">Email</li>

						</ul>
					</div>

					<div class="tabUsers">
						<ul data-role="listview" data-inset="true" class="resultsList" data-theme="a" id="listFstName">
									<li data-role="list-divider" class="listOfFirstName">First Name</li>

						</ul>
					</div>

					<div class="tabUsers">
						<ul data-role="listview" data-inset="true" class="resultsList" data-theme="a" id="listLstName">
									<li data-role="list-divider" class="listOfLastName">Last Name</li>

						</ul>
					</div>


					<div class="tabUsers">
						<ul data-role="listview" data-inset="true" class="resultsList" data-theme="a" id="listPhoneNumber">
									<li data-role="list-divider" class="listOfPhone">Phone Number</li>

						</ul>
					</div>

					<div class="tabUsers">
						<ul data-role="listview" data-inset="true" class="resultsList"  data-theme="a" id="listPassword">
									<li data-role="list-divider" class="listOfPasswords">Password</li>

						</ul>
					</div>

					<div class="tabUsers">
						<ul data-role="listview" data-inset="true" class="resultsList" data-theme="a" id="listDroneId">
									<li data-role="list-divider" class="listOfDrones">Drone List</li>

						</ul>
					</div>

				</div>
					<button class="closeButton" data-inline="true" data-role="button">Close</button>
			</div>
		</div>

<!-- popup result -->
		<div data-role="popup" data-dismissible="false" id='sqlResult' style="width:30em;">
			<div data-role="header">
			<span style="position:absolute; left:1%;">
				<a href="#" id="resultIcon" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-notext"></a>
			</span>
				<h3> Result</h3>
			</div>

			<div data-role="content">
				<textarea readonly type="text" id="resultText"></textarea>
			</div>
		</div>

		<!-- Change param dialog box -->
		<div data-role="popup" data-dismissible="false" id="changeParamDialog">
			<div data-role="header">
				<h3 id="changeParamHeader"></h3>
			</div>

			<div data-role="content">
				<p id="changeParamDescription"></p>
				<input type="text" id="changeParamInput"/>

				<button data-inline="true" onclick="updateParam();" id="changeParamUpdate">Update</button>
				<button data-inline="true" onclick="$('#changeParamDialog').popup('close');">Close</button>
			</div>
		</div>


<!-- Drone list -->
		<div data-role="popup" data-position-to="window" id="popupListDrone" style="width:30em;">
			<div data-role="header">
					<h3 id="droneToUser"></h3>
				</div>

			<div data-role="content" id="contentDroneList">

			</div>

		<div class="hideDescription">
					<label for="descriptionDrone">Description</label>
				 <textarea type="text" id="descriptionDroneUpdate"></textarea>
				 <button data-inline="true" onclick="updateDroneData();">Update</button>
		</div>


		<button data-inline="true" onclick="$('#popupListDrone').popup('close')" style="margin-left:1em;">Close</button>
	</div>

<!-- log users -->
	<div data-role="popup" data-position-to="window"  data-dismissible="false" id="logUser" class="logUser">
		<div data-role="header">
			<h3>Logs</h3>
		</div>

		<div data-role="content">
			<div class="ui-grid-c tableLogs">

				<!-- email -->
				<div class="ui-block-a">
					<ul data-role="listview" data-inset="true" id="emailLogs">

					</ul>
				</div>

				<!-- login date -->
				<div class="ui-block-b">
					<ul data-role="listview" data-inset="true" id="dateLogs">

					</ul>
				</div>

				<!-- ip -->
				<div class="ui-block-c">
					<ul data-role="listview" data-inset="true" id="ipLogs">

					</ul>
				</div>

				<!-- browser -->
				<div class="ui-block-d">
					<ul data-role="listview" data-inset="true" id="browserLogs">

					</ul>
				</div>
			</div>
			<button data-inline="true" onclick="$('#logUser').popup('close');">Close</button>
		</div>
	</div>

	<!-- Base Station -->
		<div data-role="popup" data-position-to="window"  data-dismissible="false" id="baseStation" class="baseStation">
			<div data-role="header">
				<h3>Base</h3>
			</div>

			<div data-role="content">
				<div class="ui-grid-d tableLogs">

					<!-- base Id -->
					<div class="ui-block-a">
						<ul data-role="listview" data-inset="true" id="baseId">

						</ul>
					</div>

					<!-- Username -->
					<div class="ui-block-b">
						<ul data-role="listview" data-inset="true" id="baseUser">

						</ul>
					</div>

					<!-- ip -->
					<div class="ui-block-c">
						<ul data-role="listview" data-inset="true" id="baseDescription">

						</ul>
					</div>

					<!-- browser -->
					<div class="ui-block-d">
						<ul data-role="listview" data-inset="true" id="baseRegDate">

						</ul>
					</div>

					<div class="ui-block-e">
						<ul data-role="listview" data-inset="true" id="baseDroneId">

						</ul>
					</div>
				</div>
				<button data-inline="true" onclick="$('#baseStation').popup('close');">Close</button>
			</div>
		</div>

	<!-- Add Drone Popup -->
	<div data-role="popup" data-dismissible="false" id='addDroneToUser' style="width:30em;">
		<div data-role="header">
			<h3> Add Drone</h3>
		</div>

		<div data-role="content">
			<label for="droneIdForAdd"> Drone Id</label>
			<input type="text" id="droneIdForAdd"/>
			<label for="descriptionDrone">Description</label>
			<textarea type="text" id="descriptionDrone"></textarea>
		</div>

		<button data-inline="true" onclick="addDroneToUser();">Add</button>
		<button data-inline="true" onclick="$('#addDroneToUser').popup('close');">Close</button>
	</div>

  </div>
	<script src = "script.js" type="text/javascript"></script>
    <?php
        }
    ?>
</div>

</body>


</html>
