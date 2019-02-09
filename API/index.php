<?php

  session_start();
  if(!isset($_SESSION['username'])) 
    {
        $_SESSION['pagename'] = basename($_SERVER['PHP_SELF']);
		header("location: ../login/index.php");
		exit();
	}
	$session_admin_name = $_SESSION['username'];
	
	//echo "jayesh";
    //echo $session_admin_name;

?>
<?php	include '../login/config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">

    <title>Inventory</title>
	
	<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.2 -->
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons -->
    <link href="http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="../dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins 
         folder instead of downloading all of them to reduce the load. -->
    <link href="../dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesnt work if you view the page via file:// -->
    <!--[if lt IE 9] -->
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <!-- [endif]-->


	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$('a[rel*=facebox]').facebox({
				loadingImage : 'src/loading.gif',
				closeImage   : 'src/closelabel.png'
			})
		})
	</script>


</head>

<body class="skin-blue">

	<div class="wrapper">

		<?php include('mainheader1.php');?>
        <?php include('mainsidebar1.php');?>
		
		
		<div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Dashboard
            <small>Control panel</small>
          </h1>
         
        </section>

        

        
        <section class="content">

          <div class="row">
            <div class="col-md-12">
              <div class="box box-primary">
                <div class="box-header">
                  <i class="fa fa-edit"></i>
                  <h3 class="box-title">Actions</h3>
                </div>
                
                <div class="row">
                    <div class="col-md-3">
                <div class="box-body pad table-responsive">
                  <a href = "#bal" data-toggle = "modal" class="btn btn-block btn-info btn-lg text-center">Add Coordinator</a>
                  </div><!-- /.box -->
                </div>
                
                <div class="col-md-3">
                <div class="box-body pad table-responsive">
                  <a href = "#addclg" data-toggle = "modal" class="btn btn-block btn-info btn-lg text-center">Add College</a>
                  </div><!-- /.box -->
                </div>
                </div>
              </div>
            </div><!-- /.col -->
          </div><!-- ./row -->
          
        </section>
        
        
        
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Coordinator List</h3>
                </div><!-- /.box-header -->
                <div class="box-body" style="overflow-x:auto !important;">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Game</th>
                        <th>Charge</th>
                        <th>Name-1</th>
                        <th>Phone-1</th>
                        <th>Name-2</th>
                        <th>Phone-2</th>
                        <th>Email-1</th>
                        <th>Email-2</th>
                        <th>Venue</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php 
                      $vids = $link->prepare("SELECT * FROM vendors");
                      $vids->execute();
                      $result = $vids->fetchAll();
                      //print_r($result);
                      ?>
                      <?php foreach($result as $row): ?>
                        <tr>
                            
                                <td><? echo $row['id']; ?></td>
                                <td><? echo $row['game']; ?></td>
                                <td><? echo $row['charge']; ?></td>
                                <td><? echo $row['Name']; ?></td>
                                <td><? echo $row['Phone']; ?></td>
                                <td><? echo $row['Name1']; ?></td>
                                <td><? echo $row['Phone1']; ?></td>
                                <td><? echo $row['Email']; ?></td>
                                <td><? echo $row['Email1']; ?></td>
                                <td><? echo $row['venue']; ?></td>
                                
                            <td>
        <a href="#delete_<? echo $row['id']; ?>" class='btn btn-danger btn-sm' data-toggle='modal'><span class='glyphicon glyphicon-trash'></span> Delete</a>
        									</td>
                        </tr>
                        
        <? include('edit_delete_modal.php'); ?>
                        
                      <?php endforeach ?>
					</tbody>
				  </table>
				  <br>
				  </div>
			  </div>
			</div>
			
		  </div>
</section>
        
        
        <section class="content">
        <div class="row">
        <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">College List</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>College Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php 
                      $vids = $link->prepare("SELECT * FROM clg_name");
                      $vids->execute();
                      $result = $vids->fetchAll();
                      //print_r($result);
                      ?>
                      <?php foreach($result as $row): ?>
                        <tr>
                            
                                <td><? echo $row['id']; ?></td>
                                <td><? echo $row['clg_name']; ?></td>
                                <td>
        <a href="connections/delete1.php?id=<?php echo $row['id']; ?>" class='btn btn-danger btn-sm' data-toggle='modal'><span class='glyphicon glyphicon-trash'></span> Delete</a>
        									</td>
                        </tr>
                      <?php endforeach ?>
					</tbody>
				  </table>
				  <br>
				  </div>
			  </div>
			</div>
        </div>
        </section>
        
        
        
    <div class="modal modal-primary" id="bal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <form action="connections/add_hospital.php" method="post" class ="form-group" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Add Vendor</h4>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            
                                <div class="row">
                                    
                                        <div class="col-lg-6">
                                                <span><b>Game</b></span>
                                                <input type="text" name="game" class="form-control" placeholder="Game" required>
                                        </div>
                                    
                                        <div class="col-lg-6">
                                                <span><b>Charge</b></span>
                                                <input type="number" name="charge" class="form-control" placeholder="Phone" required>
                                        </div>
                                    
                                        <div class="col-lg-6">
                                                <span><b>Name-1</b></span>
                                                <input type="text" name="Name" class="form-control" placeholder="Name-1" required>
                                        </div>
                                    
                                    
                                        <div class="col-lg-6">
                                                <span><b>Phone-1</b></span>
                                                <input type="number" name="Phone" class="form-control" placeholder="Phone-1" required>
                                        </div>
                                        
                                        <div class="col-lg-6">
                                                <span><b>Name-2</b></span>
                                                <input type="text" name="Name1" class="form-control" placeholder="Name" required>
                                        </div>
                                        
                                        <div class="col-lg-6">
                                                <span><b>Phone-2</b></span>
                                                <input type="number" name="Phone1" class="form-control" placeholder="Phone" required>
                                        </div>
                                        
                                        <div class="col-lg-6">
                                                <span><b>Email-1</b></span>
                                                <input type="email" name="email" class="form-control" placeholder="email">
                                        </div>
                                        
                                        <div class="col-lg-6">
                                                <span><b>Email-2</b></span>
                                                <input type="email" name="email1" class="form-control" placeholder="email-1">
                                        </div>
                                        
                                        <div class="col-lg-6">
                                                <span><b>Venue</b></span>
                                                <input type="text" name="venue" class="form-control" placeholder="venue">
                                        </div>
                                        
                                        <!--<div class="col-lg-12">-->
                                        <!--        <label>Rules</label>-->
                                        <!--        <textarea class="form-control" name="rules" rows="3" placeholder="Enter ..."></textarea>-->
                                        <!--</div>-->
                                        
                                </div>
                            
                        </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <input class="btn btn-outline" type="submit" class ="form-control" value="Register" />
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
              </form>
            </div><!-- /.modal -->
         
    <div class="modal modal-primary" id="addclg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <form action="connections/add_hospital1.php" method="post" class ="form-group" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">College name</h4>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            
                                <div class="row">
                                    
                                       
                                    
                                        <div class="col-lg-6">
                                                <span><b>Clg_name</b></span>
                                                <input type="text" name="clg_name" class="form-control" placeholder="Clg_name" required>
                                        </div>
                                    
                                        
                                </div>
                            
                        </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <input class="btn btn-outline" type="submit" class ="form-control" value="Register" />
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
              </form>
            </div><!-- /.modal -->         

      </div><!-- /.content-wrapper -->
		
		
		
		
<?php include('footer.php');?>		
</div>


<!-- jQuery 2.1.3 -->
    <script src="../plugins/jQuery/jQuery-2.1.3.min.js"></script>
    <!-- Bootstrap 3.3.2 JS -->
    <script src="../bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <!-- SlimScroll -->
    <script src="../plugins/slimScroll/jquery.slimScroll.min.js" type="text/javascript"></script>
    <!-- FastClick -->
    <script src="../plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="../dist/js/app.min.js" type="text/javascript"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="../dist/js/demo.js" type="text/javascript"></script>
<!-- Custom Theme JavaScript -->

<script src="../dist/js/sb-admin-2.js"></script>
<script>
	$('.carousel').carousel({
        interval: 3000 //changes the speed
    })
</script>

    



</body>

</html>
