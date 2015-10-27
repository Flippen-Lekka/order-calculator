<?php

 # Package:       Flippen Lekka order calculator
 # Date:          Sat Jun 06 2015
 # Author:        Louis Cabano <www.louiscabano.com>
 # Description:


/*Product creator class*/

class Product {
     function Product($price, $shipW, $spiceW, $cost ) {
         $this->price = $price ;
         $this->shipW = $shipW ;
         $this->spiceW = $spiceW ;
         $this->cost = $cost ;
     }
}

/*Flippen Lekka Spice*/

$fls_100 = new Product(11, 0.125, 0.095, 6);
$fls_200 = new Product(18, 0.215, 0.180, 6);
$fls_500g = new Product(45, 0.510, 0.500, 6);
$fls_750g = new Product(60, 0.760, 0.750, 6);
$fls_1kg = new Product(80, 0.125, 0.095, 6);
$fls_1kgTub = new Product(85, 0.125, 0.095, 6);

/*Flippen Lekka Spice Hot*/

$flsH_100 = new Product(11, 0.125, 0.095, 6);
$flsH_200 = new Product(18, 0.215, 0.180, 6);
$flsH_500g = new Product(45, 0.510, 0.500, 6);
$flsH_750g = new Product(60, 0.760, 0.750, 6);
$flsH_1kg = new Product(80, 0.125, 0.095, 6);
$flsH_1kgTub = new Product(85, 0.125, 0.095, 6);

/*Flippen Lekka Worcester Sauce spice*/

$flWs_100 = new Product(11, 0.125, 0.095, 6);
$flWs_200 = new Product(18, 0.215, 0.180, 6);
$flWs_500g = new Product(45, 0.510, 0.500, 6);
$flWs_750g = new Product(60, 0.760, 0.750, 6);
$flWs_1kg = new Product(80, 0.125, 0.095, 6);
$flWs_1kgTub = new Product(85, 0.125, 0.095, 6);

/*Flippen Lekka Curry Mix*/

$flCm_250ml = new Product(18, 0.215, 0.180, 6);
$flCm_500g = new Product(45, 0.510, 0.500, 6);
$flCm_1kg = new Product(80, 0.125, 0.095, 6);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>InservNet</title>

    <!-- Bootstrap CSS-->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,700,400italic,400,300italic,600,600italic,700italic' rel='stylesheet' type='text/css'>
    <link href="css/style.css" rel="stylesheet">

</head>

<body>

    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><span class="inLetters" >F</span>lippen<span class="inLetters">L</span>ekka +</a>
            </div>
            <div id="navbar" class=" collapse navbar-collapse">
                <ul class="main-nav nav navbar-nav navbar-right">
                    <li class="active "><a href="#">Home</a>
                    </li>
                    <li><a href="html.php">Documentation &amp; support</a>
                    </li>
                    <li><a target="_blank" href="http://louiscabano.com/order_calculator/">Previous version</a>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>

    <!--Section 1 -->

    <section id="intro">
        <div class="container">
            <div class="intro">
                <h2>ORDER CALCULATOR<small> v1.2.0</small></h2>
                <p>Simply enter the amount of items to order, and see a complete order summary.</p>
                <p>It calculates the total value, value per product, dry weight, shipping weight and stock required for the values entered.</p>

            </div>

            <div class="row">
                <form id="form" action="index.php" method="post" name="order_calculator">
                <!--Column 1-->
                <div class="col-sm-3">
                    <h4 class="text-center"><span class="product-heading green-circle">Flippen Lekka Spice Original</span></h4>

                        <div class="form-group">
                            <input type="number" name="100ml" class="form-control" placeholder="100ml">
                        </div>
                        <div class="form-group">
                            <input type="number" name="200ml" class="form-control" placeholder="200ml">
                        </div>
                        <div class="form-group">
                            <input type="number" name="500g" class="form-control" placeholder="500g">
                        </div>
                        <div class="form-group">
                            <input type="number" name="750g" class="form-control" placeholder="750g">
                        </div>
                        <div class="form-group">
                            <input type="number" name="1kg" class="form-control" placeholder="1kg Bag">
                        </div>
                        <div class="form-group">
                            <input type="number" name="1kgTub" class="form-control" placeholder="1kg Tub">
                        </div>


                </div>
                <!--Column 2-->
                <div class="col-sm-3">
                    <h4 class="text-center"><span class="product-heading red-circle">Flippen Lekka Spice Hot</span></h4>


                    <div class="form-group">
                        <input type="number" name="100mlH" class="form-control" placeholder="100ml">
                    </div>
                    <div class="form-group">
                        <input type="number" name="200mlH" class="form-control" placeholder="200ml">
                    </div>
                    <div class="form-group">
                        <input type="number" name="500gH" class="form-control" placeholder="500g">
                    </div>
                    <div class="form-group">
                        <input type="number" name="750gH" class="form-control" placeholder="750g">
                    </div>
                    <div class="form-group">
                        <input type="number" name="1kgH" class="form-control" placeholder="1kg Bag">
                    </div>
                    <div class="form-group">
                        <input type="number" name="1kgHtub" class="form-control" placeholder="1kg Tub">
                    </div>


                </div>
                <!--Column 3-->
                <div class="col-sm-3">
                    <h4 class="text-center"><span class="product-heading orange-circle">Worcester Sauce spice</span></h4>


                    <div class="form-group">
                        <input type="number" name="100mlW" class="form-control" placeholder="100ml">
                    </div>
                    <div class="form-group">
                        <input type="number" name="200mlW" class="form-control" placeholder="200ml">
                    </div>
                    <div class="form-group">
                        <input type="number" name="500gW" class="form-control" placeholder="500g">
                    </div>
                    <div class="form-group">
                        <input type="number" name="750gW" class="form-control" placeholder="750g">
                    </div>
                    <div class="form-group">
                        <input type="number" name="1kgW" class="form-control" placeholder="1kg Bag">
                    </div>
                    <div class="form-group">
                        <input type="number" name="1kgWtub" class="form-control" placeholder="1kg Tub">
                    </div>



                </div>
                <!--Column 4-->
                <div class="col-sm-3">
                    <h4 class="text-center"><span class="product-heading yellow-circle">Flippen Lekka Curry Mix</span></h4>

                    <div class="form-group">
                        <input type="number" name="250mlC" class="form-control" placeholder="250ml">
                    </div>
                    <div class="form-group">
                        <input type="number" name="500gC" class="form-control" placeholder="500g">
                    </div>
                    <div class="form-group">
                        <input type="number" name="1kgC" class="form-control" placeholder="1kg Bag">
                    </div>
                    <div class="settings">
                        <div class="row text-center">
                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#pricingModal">
                                Change pricing
                            </button>
                        </div>
                    </div>
                </div>



            <a href="submit">
                <button id="calculate" class="btn btn-lg btn-success btn-block" style="" type="submit" name="submit">Calculate Order &raquo;</button>
            </a>
            </form>
                </div>
            <!-- Modal -->

            <div class="modal fade" id="pricingModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

</section>


    <!--Footer-->

    <footer class="iNetfooter">
        <div class="container">

            Copyright © 2015 Flippen Lekka&trade; Holdings. All rights reserved. Development by InservNet.

        </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/calculator.js"></script>
</body>

</html>
