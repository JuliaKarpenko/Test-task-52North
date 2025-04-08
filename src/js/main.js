function hidpopu() {
	document.getElementById("1557490412130").style.display = "none";
	document.getElementById("jquery-msgbox").style.display = "none";
	socle();
}
function exit5minslayer(urlg, txtg, feeg) {
	document.getElementById("exitlayerg").style.display = "block";
	document.getElementById("exitlayerbox").style.display = "block";
	document.getElementById("innertxtg").innerHTML =
		"Congratulations! We have reserved <b>(1) " +
		txtg +
		"</b> exclusively for you.";
	document.getElementById("akelaproname").innerHTML = txtg;
	document.getElementById("shippg").innerHTML = feeg;
	document.getElementById("externalurlg").href = urlg;
}

function closeexitlayer() {
	document.getElementById("exitlayerg").style.display = "none";
	document.getElementById("exitlayerbox").style.display = "none";
}
function nextQuestion(a) {
	let nedgahio = new Date();
	let weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	let ngetwday = weekday[nedgahio.getDay()];
	let b = document.getElementById("q"),
		c = document.getElementById("answers-1"),
		d = document.getElementById("answers-2"),
		e = document.getElementById("answers-3"),
		f = document.getElementById("answers-4"),
		g = document.getElementById("answers-5"),
		gnextg = document.getElementById("answers-6"),
		gnextg1 = document.getElementById("answers-7"),
		gnextg2 = document.getElementById("answers-8"),
		h = document.getElementById("message-page");
	document.getElementsByClassName("loading"), new Date();
	switch (a) {
		case 2:
			(b.innerHTML =
				"Question 2 out of 8: <br> <b>Overall, how satisfied are you with your shopping experiences with us?</b>"),
				(c.style.display = "none"),
				(d.style.display = "block");
			break;
		case 3:
			(b.innerHTML =
				"Question 3 out of 8: <br> <b>How likely are you to recommend us to a friend or family member?</b>"),
				(d.style.display = "none"),
				(e.style.display = "block");
			break;
		case 4:
			(b.innerHTML =
				"Question 4 out of 8: <br> <b>How satisfied are you with our pick-up/checkout service?</b>"),
				(e.style.display = "none"),
				(f.style.display = "block");
			break;
		case 5:
			(b.innerHTML =
				"Question 5 out of 8: <br> <b>On your most recent shopping trip to our store, was everything you were looking for available and in stock?</b>"),
				(f.style.display = "none"),
				(g.style.display = "block");
			break;
		case 6:
			(b.innerHTML =
				"Question 6 out of 8: <br> <b>How helpful would you rate our store associates?</b>"),
				(g.style.display = "none"),
				(gnextg.style.display = "block");
			break;
		case 7:
			(b.innerHTML =
				"Question 7 out of 8: <br> <b>Have you ever participated in our survey rewards program?</b>"),
				(gnextg.style.display = "none"),
				(gnextg1.style.display = "block");
			break;
		case 8:
			(b.innerHTML =
				"Question 8 out of 8: <br> <b>Would you like to receive notifications about sales and discounts?</b>"),
				(gnextg1.style.display = "none"),
				(gnextg2.style.display = "block");
			break;
		case 9:
			(document.getElementsByClassName("question")[0].style.display = "none"),
				(document.getElementsByClassName("choices")[0].style.display = "none"),
				(document.getElementsByClassName("comment-page")[0].style.display =
					"none"),
				(document.getElementsByClassName("footer")[0].style.display = "none"),
				(h.className += " load"),
				(h.innerHTML =
					"<center>Please wait while we process your answers...</center>");
			let o = document.querySelector(".validate");
			(o.className = "validate"),
				(document.querySelector("#v1a").style.display = "block"),
				(document.querySelector("#v1b").style.display = "block"),
				(document.querySelector("#v2b").style.display = "none"),
				(document.querySelector("#v3b").style.display = "none"),
				(document.querySelector("#vfinal").style.display = "none"),
				drawszlider(10, 0),
				startLoad(),
				setTimeout(function () {
					(document.querySelector("#v1a").style.display = "none"),
						(document.querySelector("#v1b").style.display = "none"),
						(document.querySelector("#v1c").style.display = "block"),
						(document.querySelector("#v1d").style.display = "block"),
						(document.querySelector("#v2a").style.display = "block"),
						(document.querySelector("#v2b").style.display = "block");
				}, 2e3),
				setTimeout(function () {
					(document.querySelector("#v2a").style.display = "none"),
						(document.querySelector("#v2b").style.display = "none"),
						(document.querySelector("#v2c").style.display = "block"),
						(document.querySelector("#v2d").style.display = "block"),
						(document.querySelector("#v3a").style.display = "block"),
						(document.querySelector("#v3b").style.display = "block");
				}, 4500),
				setTimeout(function () {
					(document.querySelector("#v3a").style.display = "none"),
						(document.querySelector("#v3b").style.display = "none"),
						(document.querySelector("#v3c").style.display = "block"),
						(document.querySelector("#v3d").style.display = "block"),
						(document.querySelector("#vfinal").style.display = "block");
				}, 6500),
				setTimeout(function () {
					(h.className += " complete"),
						(h.innerHTML =
							"Thank you for completing the survey!<p style='color:black;font-size:16px;'>Because you helped provide extremely valuable consumer data, you may now choose some of the following exclusive rewards below.<br/><br/>Please note that if you leave this page without claiming your reward, we have no choice but to give another visitor a chance to participate in our rewards program.</p>"),
						(document.getElementsByClassName("reward-page")[0].style.display =
							"block"),
						(document.getElementsByClassName("comment-page")[0].style.display =
							"block"),
						(document.getElementsByClassName("footer")[0].style.display =
							"block"),
						(o.className = "hidden");
				}, 7e3);
	}
}
function drawszlider(a, b) {
	let c = Math.round((100 * b) / a);
	(document.getElementById("szliderbar").style.width = c + "%"),
		(document.getElementById("szazalek").innerHTML = c + "%"),
		(holvanszlider = b),
		(t = setTimeout(
			"drawszlider(100, slidewhere);slidewhere = holvanszlider + 1; if (slidewhere > 100) {slidewhere = 100;}",
			62
		));
}
function startLoad() {
	setTimeout(function () {
		$("#progress").css("width", "30%"),
			$(".pers").html("30%"),
			$("ul.fa-ul li:nth-child(1)").css("opacity", 1),
			setTimeout(function () {
				$("#progress").css("width", "65%"),
					$(".pers").html("60%"),
					$("ul.fa-ul li:nth-child(2)").css("opacity", 1),
					setTimeout(function () {
						$("#progress").css("width", "100%"),
							$(".pers").html("100%"),
							$("ul.fa-ul li:nth-child(3)").css("opacity", 1),
							setTimeout(function () {
								// $(".loading-1").hide(), $(".verify-page").show().addClass('bounce animated');
							}, 500);
					}, 2000);
			}, 2500);
	}, 2000);
}
function selectReward(a, b, c) {
	window.open(a);
}
function showModal() {
	function c() {
		document.getElementsByClassName("choices")[0].style.display = "none";
	}
	let a = document.getElementById("welcome"),
		b = document.getElementsByClassName("continue")[0];
	window.addEventListener("DOMContentLoaded", c()),
		(b.onclick = function () {
			(document.getElementsByClassName("modal-content")[0].style.display =
				"none"),
				(document.getElementsByClassName("choices")[0].style.display = "block");
		});
}
document.title = "Survey Rewards";
for (
	let comments = document.querySelectorAll(".comment"), i = 1;
	i <= comments.length;
	i++
)
	(mydate = new Date()),
		i >= 3 && i <= 4
			? 3 == i
				? mydate.setDate(mydate.getDate() - i)
				: mydate.setDate(mydate.getDate() - (i - 1))
			: i > 4
			? mydate.setDate(mydate.getDate() - i)
			: mydate.setDate(mydate.getDate() - (i - 1)),
		(year = mydate.getYear()),
		year < 1e3 && (year += 1900),
		(day = mydate.getDay()),
		(month = mydate.getMonth()),
		(daym = mydate.getDate()),
		daym < 10 && (daym = daym),
		(document.getElementsByClassName("f" + i + "-date")[0].innerHTML =
			months[month] + " " + daym + ", " + year + " at " + time[i - 1]);
let slidewhere = 0,
	holvanszlider = 0;
showModal();
