<?php 
  session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width= , initial-scale=1.0" />
    <title>Document</title>
    <script src="./tailwind/tailwind-cdn.js"></script>
    <link rel="stylesheet" href="./css/all-styles.css" />
  </head>
  <body>
    <div class="container m-auto my-16 flex justify-center">
      <div class="p-16 shadow rounded-lg w-1/3">
        <div class="text-2xl font-semibold uppercase text-center mb-10">
          OTP Login
          <?php echo $_SESSION['temp_id']; ?>
        </div>
        <form action="./server/validate_otp.php" method="POST">
          <input
            type="number"
            name="otp"
            class="p-3 rounded w-full bg-gray-200 border border-gray-30"
            placeholder="Input code"
          />
          <br />
          <button type="submit" class="bg-blue-700 w-full py-3 text-white mt-6">
            Validate
          </button>
        </form>
      </div>
    </div>
  </body>
</html>
