<?php
if($_POST)
    {
    $to = "dolphin136@yandex.ru"; //КУДА ОТПРАВЛЯТЬ ПИСЬМО
    $subject = "Заказ звонка"; //ТЕМА
    $message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Заказ звонка</i> </span><br><br>
    Имя: <span style="font-weight:bold;color:#339900;">'.$_POST['name'].'</span><br>
    Телефон: <span style="font-weight:bold;color:#339900;"> '.$_POST['phone'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <dolphin136@yandex.ru>\r\n"; // ОТ КОГО, ПРИДУМАЙТЕ ЯЩИК ИЛИ УКАЖИТЕ ПОЧТУ СВОЕГО САЙТА.
    $result = mail($to, $subject, $message, $headers);
  
    if ($result){
        echo "<p>Сообщение успешно отправлено. Скоро Вам перезвонят</p>";
    }
    }
?>