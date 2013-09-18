<script type="text/javascript" src="js/jquery-1.8.2.js"></script>
<link rel="stylesheet" href="css/vertical-roller.css" type="text/css"/>
<script type="text/javascript" src="js/vertical-roller.js"></script>

<div class="vertical-roller">
	<div class="rolled-button roll-up"></div>
	<div class="rolled-gallery">
		<div class="rolled-image">
			<a target="_blank" href="http://www.newegg.com">
				<img width="80" height="80" src="images/desktop.jpg"/>
			</a>
		</div>
		<div class="rolled-image">
			<a target="_blank" href="http://www.apple.com">
				<img width="80" height="80" src="images/macbook.jpg"/>
			</a>
		</div>
		<div class="rolled-image">
			<a target="_blank" href="http://www.samsung.com">
				<img width="80" height="80" src="images/samsung.jpg"/>
			</a>
		</div>
		<div class="rolled-image">
			<a target="_blank" href="http://www.amazon.com">
				<img width="80" height="80" src="images/kindle.jpg"/>
			</a>
		</div>
	</div>
	<div class="rolled-button roll-down"></div>
</div>

<script type="text/javascript">
	$('.vertical-roller').verticalRoll();
</script>