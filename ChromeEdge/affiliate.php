<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>WouldYouLikeToSupport</title>
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&amp;display=swap">
	<link rel="stylesheet" href="assets/css/styles.min.css">
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="overflow-auto">
					<?php
						require("assets/db.php");

						$sql = 'SELECT affiliate_name, website_name, website_url, affiliate_code FROM `wylts-codes`';
						$result = $conn->query($sql);

						if ($result->num_rows > 0) {
							while ($code = $result->fetch_assoc()){
								echo '
								<table class="table table-hover">
									<thead>
										<tr>
											<td>'.$code["affiliate_name"].'</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>'.$code["website_name"].'</td>
										</tr>
										<tr>
											<td>'.$code["website_url"].'</td>
										</tr>
										<tr>
											<td>'.$code["affiliate_code"].'</td>
										</tr>
									</tbody>
								</table>
								';
							}
						} else {
							printf($conn->error);
						}
						$conn->close();
					?>
				</div>
				<footer class="footer py-3 bg-light">
				  <div class="container">
				    <span class="text-muted">Would You Like To Support me?
				    <a  href="donate.html">Click here to donate</a> 
					</span>
				  </div>
				</footer>
			</div>
			<div class="col-4" id="sidebar">
				<div class="row" id="sidebar-top">
					<div class="col">
						<h1>Would</h1>
						<h1>You</h1>
						<h1>Like</h1>
						<h1>To</h1>
						<h1>Support</h1>
					</div>
				</div>
				<div class="row" id="backbutton" style="align-items: end;">
					<a type="button" class="btn btn-outline-secondary" href="index.html">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
						  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
						</svg>
						Back
					</a>
				</div>
			</div>
		</div>
	</div>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>