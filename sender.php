<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = 'mollyparkeralive@gmail.com';
  $subject = 'Новое сообщение с сайта';
  $message = "Имя: $name\n"
           . "E-mail: $email\n"
           . "Телефон: $phone\n"
           . "Сообщение:\n$message";

  $headers = "From: $email\r\n"
           . "Reply-To: $email\r\n"
           . "Content-type: text/plain; charset=utf-8\r\n";

  if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo "Ваше сообщение отправлено";
  } else {
    http_response_code(500);
    echo "Что-то пошло не так. Сообщение не отправлено.";
  }
}
?>
