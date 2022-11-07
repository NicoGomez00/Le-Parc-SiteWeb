<?php 
	$sendto = 'nicolasgomez_01@hotmail.com';

    $subject = 'Pueba pagina web'

    $corps = 'Nombre: '.$REQUEST['nombre'].'\n'.
    'Email: '.$_REQUEST['email'].'\n'.
    'Consulta: '.$_REQUEST['consulta'].'\n'.'\n';

    $From = 'From: '.$_REQUEST['nombre'].' <'.$_REQUEST['email'].'>\n';
    $From .= 'Reply-To: '.$_REQUEST['nombre'].' <'.$_REQUEST['email'].'>\n';

    @mail($sendto,$subject,$corps,$From);

    header('Location: home.html');
 ?>