<?php
$servername = "localhost";
$username = "";
$password = "";
$dbname = "";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$reg_type = $_POST['reg_type'];
$course = $_POST['course'];
$gender = $_POST['gender'];
$address = $_POST['address'];
$message = $_POST['message'];

// Insert into table
$sql = "INSERT INTO applications (name, email, phone, reg_type, course, gender, address, message)
VALUES ('$name', '$email', '$phone', '$reg_type', '$course', '$gender', '$address', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Application submitted successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
