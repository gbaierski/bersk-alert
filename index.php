<?php
    require_once("alert.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bersk Alerts :)</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }

        button {
            width: 150px;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            border-radius: 3px;
            border: none;
            transition: all .2s cubic-bezier(.22, .61, .36, 1);
        }

        button:hover {
            transform: translateY(-2px);
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button type="button" onclick="showAlert('info')">INFO</button>
    <button type="button" onclick="showAlert('success')">SUCCESS</button>
    <button type="button" onclick="showAlert('error')">ERROR</button>
    <button type="button" onclick="showAlert('confirm')">CONFIRM</button>
    <button type="button" onclick="showAlert('delete')">DELETE</button>
</body>
</html>