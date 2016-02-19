<?php

define('ROOT', $_SERVER['DOCUMENT_ROOT'] );

include ROOT . '/partials/_settings.php';

include ROOT . '/partials/_header.php';

include ROOT . '/templates/_door.php';

include ROOT . '/templates/_intro.php';

echo '<article class="">';

// echo '<section class="photos"></section>'; // resolve nth issue
include ROOT . '/templates/_photos-01.php';
include ROOT . '/templates/_photos-02.php';
include ROOT . '/templates/_photos-03.php';
include ROOT . '/templates/_photos-04.php';
include ROOT . '/templates/_photos-05.php';
include ROOT . '/templates/_photos-06.php';
include ROOT . '/templates/_photos-07.php';
include ROOT . '/templates/_photos-08.php';
include ROOT . '/templates/_photos-09.php';
include ROOT . '/templates/_photos-10.php';
include ROOT . '/templates/_photos-11.php'; // lazyload wasn't working - turned off for the minute
include ROOT . '/templates/_photos-12.php';
include ROOT . '/templates/_photos-13.php';
include ROOT . '/templates/_photos-14.php';
include ROOT . '/templates/_photos-15.php';

echo '</article>';

include ROOT . '/partials/_footer.php';