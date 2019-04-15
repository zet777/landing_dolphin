<?php
require_once __DIR__ . '/recaptchalib.php';
$secret=''
// пустой ответ каптчи
$response = null;
// Проверка вашего секретного ключа
$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
$response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
if($_POST)
    {
    $to = "dolphin136@yandex.ru"; //КУДА ОТПРАВЛЯТЬ ПИСЬМО
    $subject = "Заказ звонка"; //ТЕМА
    $message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Заказ звонка с clubprint.ru</i> </span><br><br>
    Имя: <span style="font-weight:bold;color:#339900;">'.$_POST['name'].'</span><br>
    Телефон: <span style="font-weight:bold;color:#339900;"> '.$_POST['phone'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <dolphin136@yandex.ru>\r\n"; // 
    $result = mail($to, $subject, $message, $headers);
  
    if ($result){
        echo "<p>Сообщение успешно отправлено. Скоро Вам перезвонят</p>";
    }
    }
?>