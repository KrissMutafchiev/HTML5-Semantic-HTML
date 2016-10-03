<?php
// Database connection
$serverName = "localhost";
$userName = "root";
$DBpassword = "";
$dbName = "dcc";

// Official server
// $serverName = "localhost";
// $userName = "inflytec_user";
// $password = "aspopov967";
// $dbName = "inflytec_dcc";

// Create connection
$connection = new mysqli($serverName, $userName, $DBpassword, $dbName);
// Check connection
if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
}

// Result for return
$queryResult = "";

// Have error
$error = false;

$command = $_POST["command"];

switch($command)
{
	case "addUser":// Add user in database
		$email = $_POST["email"];
		$firstName = $_POST["firstName"];
		$lastName = $_POST["lastName"];
		$phone = $_POST["phone"];
		$droneID = $_POST["droneID"];
		$password = $_POST["password"];
		$description = $_POST["description"];
		$regDate = $_POST["registerDate"];

		$sql = "SELECT * FROM users WHERE email = '".$email."';";
		$result = $connection->query($sql);

		if ($result->num_rows == 0) {
			$sql = "INSERT INTO users VALUES('" .$email."', '".$firstName."', '".$lastName."',MD5('".$password."'), '".$phone."', '0');";
			$result = $connection->query($sql);

			if($result)
			{
				$queryResult = "User add OK.";

				$error = false;
			}else
			{
				$queryResult = $sql;
				$error = true;
			}

		}else
		{
			$queryResult = "ERROR Username already exists!";

			$error = true;
		}

		$sql = "SELECT * FROM drones WHERE drone_id = '".$droneID."';";
		$result = $connection->query($sql);

		if($result->num_rows == 0)
		{
			if($droneID != "" && !$error)
			{
				$sql = "INSERT INTO drones VALUES('" .$email."', '".$droneID."', '".$regDate."', '".$description."');";
				$result = $connection->query($sql);
				$queryResult = $queryResult."\r\nDrone add OK.";
			}
		}else
		{
			$queryResult = $queryResult."\r\nDrone ID already exists.";
		}

		echo($queryResult);
		$queryResult = "";

	break;

	case "getUsers":// Get users list from database
		$sql = "SELECT * FROM users;";
		$result = $connection->query($sql);

		$stringToReturn = "";
		//Copy result into a numeric array
		$resultArray = $result->fetch_all(MYSQLI_NUM);
		for($i = 0; $i<$result->num_rows; $i++)
		{
			for($j = 0; $j<5; $j++)
			{
				$stringToReturn = $stringToReturn. "---". $resultArray[$i][$j];
			}
			$stringToReturn = $stringToReturn. "+++";
		}
		echo($stringToReturn);

	   break;

    case "updateData":

        $user = $_POST["userName"];
        $type = $_POST["type"];
        $param = $_POST["newParam"];

        if($type == "password")
        {
            $param = MD5($param);
        }

        $sql = "UPDATE users SET ".$type."='".$param."' WHERE email='".$user."';";

		$result = $connection->query($sql);

        if($result)
        {
            $stringToReturn = "OK";
        }else {
            $stringToReturn = "update DB Error";
        }
		echo($stringToReturn);
        break;

    case "getDrones":

        $sql = "SELECT * FROM drones;";
				$result = $connection->query($sql);

        if($result)
        {
            $stringToReturn = "";

            $resultArray = $result->fetch_all(MYSQLI_NUM);
            for($i = 0; $i<$result->num_rows; $i++)
            {
                for($j = 0; $j<4; $j++)
                {
                    $stringToReturn = $stringToReturn. "---". $resultArray[$i][$j];
                }
                $stringToReturn = $stringToReturn. "+++";
            }
        }else {
            $stringToReturn = "Get drones error";
        }

        echo($stringToReturn);
        break;

        case "getLogs":
            $sql = "SELECT * FROM log;";
            $result = $connection->query($sql);

            $stringToReturn = "";
            //Copy result into a numeric array
            $resultArray = $result->fetch_all(MYSQLI_NUM);
            for($i = 0; $i<$result->num_rows; $i++)
            {
                for($j = 0; $j<4; $j++)
                {
                    $stringToReturn = $stringToReturn. "---". $resultArray[$i][$j];
                }
                $stringToReturn = $stringToReturn. "+++";
            }
            echo($stringToReturn);

            break;

        case "addDrone":
            $user_email = $_POST["userName"];
            $drone_id = $_POST["droneID"];
            $description = $_POST["description"];
            $date = $_POST["date"];

            $sql = "INSERT INTO drones VALUES('".$user_email."','".$drone_id."','".$date."','".$description."');";
            $result = $connection->query($sql);

            $stringToReturn = "";
            //Copy result into a numeric array
            $resultArray = $result->fetch_all(MYSQLI_NUM);
              if($result)
                {
                    $stringToReturn = "OK";
                }
             else
               {
                $stringToReturn = "update DB Error";
               }
            echo($stringToReturn);

            break;

              case "updateDroneData":
                 $email = $_POST["userName"];
                 $drone_id = $_POST["droneID"];
                 $description = $_POST["newDescription"];



                // $sql = "UPDATE drones SET description ='".$description."' WHERE email ='".$user."' AND drone_id = '".$param."';";
								  $sql = 'UPDATE drones SET description ="'.$description.'" WHERE email="'.$email.'" AND drone_id = "'.$drone_id.'";';

                $result = $connection->query($sql);

                $stringToReturn = '';

                 if($result)
                    {
                     $stringToReturn = "OK";
                    }else
                    {
                     $stringToReturn = "update DB Error";
                     }
		         echo($stringToReturn);

              break;

									case "getBase":
											$sql = "SELECT * FROM base_station;";
											$result = $connection->query($sql);

											$stringToReturn = "";
											//Copy result into a numeric array
											$resultArray = $result->fetch_all(MYSQLI_NUM);
											for($i = 0; $i<$result->num_rows; $i++)
											{
													for($j = 0; $j<5	; $j++)
													{
															$stringToReturn = $stringToReturn. "---". $resultArray[$i][$j];
													}
													$stringToReturn = $stringToReturn. "+++";
											}
											echo($stringToReturn);

											break;

	default:
}
?>

<!-- This file is updated -->
