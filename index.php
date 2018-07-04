<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<?php header('Content-Type: text/html; charset=utf-8');
include_once "resources/config.php";
$mysqli->set_charset("utf8");
$query = $mysqli->query("SELECT * FROM slider");
$counter=0;
include "includes.php";
while ($query_p= $query->fetch_assoc()){
  $counter++;
  $heighter_c=($counter*25);
  $marginer_c=(670-($counter*25))/2;
}?>
<div class="row">
<div class="slider position-relative text-center">
  <div class="slides-content p-2 w-100 position-relative mx-auto text-white">
  <div class="progress position-absolute"></div>
  <div class="controller d-block position-absolute" style="height:<?php echo $heighter_c;?>; margin-top:<?php echo $marginer_c;?>">
    <?php
    $counter=0;
    $mysqli->set_charset("utf8");
    $query = $mysqli->query("SELECT * FROM slider");
    while ($query_p= $query->fetch_assoc()){
    $counter++;
    $id=($query_p["id"]);
    ?>
    <!--UNIT-->
    <div class="controlling-unit" spec="<?php echo $id;?>"></div>
    <div class="controlling-unit-stopper position-absolute controlling-unit-stopper<?php echo $id;?>" spec="<?php echo $id;?>"></div>
    <!--UNIT-->
    <?php } ?>
  </div>
  <?php
  $mysqli->set_charset("utf8");
  $query = $mysqli->query("SELECT * FROM slider");
  while ($query_p= $query->fetch_assoc()){
  $id=($query_p["id"]);
  $photo=($query_p["photo"]);
  $photo_s=($query_p["secondary_photo"]);
  $text_m=($query_p["main"]);
  $text_s=($query_p["secondary"]);
  $link=($query_p["link"]);
  ?>
  <!--UNIT-->
  <div class="slide w-100 h-100 position-absolute row slide<?php echo $id;?>" spec="" style="background: url('<?php echo $photo;?>')" counter="<?php echo $counter; ?>" current="1">
  <?php if ($photo_s != "-") { ?>
  <!--addition-->
  <div class="text-center w-100 row d-flex align-items-center">
  <div class="typed1 col col-12 col-lg-5 col-md-5 mr-0 pr-0"><img src="<?php echo $photo_s;?>" class="typed1 movingphoto position-relative img-fluid movingphoto<?php echo $id;?>"/></div>
  <div class="typed col col-12 col-lg-7 col-md-7 h-50">
  <!--addition-->
  <?php } else {?>
  <div class="typed col col-12 d-flex align-items-center justify-content-center">
  <?php } ?>
  <div class="text-center">
  <div class="main-text mb-2 p-2 mtext<?php echo $id;?>"><?php echo $text_m;?></div>
  <div class="secondary-text p-2 stext<?php echo $id;?>"><?php echo $text_s;?></div>
  <div class="buttons d-flex justify-content-center col col-12 mx-auto">
  <div class="position-absolute">
  <div class="b1 float-right text-center ml-2 b1<?php echo $id;?>">الذهاب للمقالة</div>
  <div class="b2 float-right text-center b2<?php echo $id;?>">شاهد لاحقاً</div>
  </div>
  <?php if ($photo_s != "-") { ?></div><?php } ?>
  </div>
  </div>
  </div>

  </div>
  <!--UNIT-->
  <?php } ?>
  </div>
</div>
