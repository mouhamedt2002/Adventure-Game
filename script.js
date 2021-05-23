$(".diamond-world").hide();
$(".diamond-fight").hide();
$(".diamond-win").hide();
$(".diamond-lose").hide();
$(".stardust-world").hide();
$(".help-josuke").click(function() {
    $(".start").hide();
    $(".diamond-world").fadeIn();
});

$(".help-jotaro").click(function() {
    $(".start").hide();
    $(".stardust-world").fadeIn();
});

$(".fight").click(function() {
    $(".diamond-world").hide();
    $(".diamond-fight").fadeIn();
});

$(".d-keep-fighting").click(function() {
    $(".diamond-fight").hide();
    $(".diamond-win").fadeIn();
});

$(".d-back").click(function() {
    $(".diamond-win").hide();
    $(".start").fadeIn();
});

$(".run").click(function() {
    $(".diamond-world").hide();
    $(".diamond-lose").fadeIn();
});

$(".d-lback").click(function() {
    $(".diamond-lose").hide();
    $(".start").fadeIn();
});

$(".s-back").click(function() {
    $(".stardust-world").hide();
    $(".start").fadeIn();
});


