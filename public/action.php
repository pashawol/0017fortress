<?php
ini_set( 'display_errors', 1 );
require __DIR__ . '/vendor/autoload.php';
 // $to='trifectahealthnyc@gmail.com';    
$mail = new PHPMailer(true);
$mail->IsMail();
$mail->IsHTML(true);
$mail->Priority = '1';
$mail->Encoding = 'base64';
$mail->CharSet = 'utf-8';

///от кого письмо  
$mail->setFrom('info@info.com');

//  $mail->addAddress('wol1414@gmail.com');
 $mail->addAddress('pashtynov@gmail.com');
 $mail->addAddress('krepost-s@mail.ru');
//  $mail->addAddress('wol1414@gmail.com');
 // $mail->addAddress('horenkova369@gmail.com');
// $mail->addAddress('stab@inbox.support');



//Субъект
$mail->Subject = 'Заявка с сайта лицензирование24.рф/медицина';

$time = date('d.m.Y в H:i');
$html = '

<table style="width: 100%;">';
    if (!empty($_POST['order'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;">Вид формы:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['order'] . '</b></td></tr>';
    }

    if (!empty($_POST['name'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;">Name:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['name'] . '</b></td></tr>';
    }
    if (!empty($_POST['tel'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Телефон:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['tel'] . '</b></td></tr>';
    }
    
    if (!empty($_POST['email'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Email:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['email'] . '</b></td></tr>';
    }

    if (!empty($_POST['vid'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Вид деятельности</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . implode(", ",$_POST['vid']) . '</b></td></tr>';
    }

    if (!empty($_POST['text'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Вопрос:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['text'] . '</b></td>';
    }

    if (!empty($_POST['comment'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Отзыв:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['comment'] . '</b></td>';
    }

    if (!empty($_POST['tech'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Техника:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . implode(", ",$_POST['tech']) . '</b></td></tr>';
    }

   
     $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;">  Время отправки:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $time . '</b></td>
      <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> IP:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_SERVER['REMOTE_ADDR'] . '</b></td> 
</table>
';
$mail->Body = $html;

$uploaddir = __DIR__ . '/upload/';

if ($_FILES['file1']['tmp_name']) {    
    $mail->addAttachment($_FILES['file1']['tmp_name'],$_FILES['file1']['name']);
}

if ($_FILES['file2']['tmp_name']) {    
    $mail->addAttachment($_FILES['file2']['tmp_name'],$_FILES['file2']['name']);
}

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
if (!empty($uploadfile))unlink($uploadfile);
if (!empty($uploadfile2))unlink($uploadfile2);

?>


<?php
 
?>






