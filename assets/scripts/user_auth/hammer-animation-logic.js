const hammerAnimation = () => {
  if ($('#hammer-class').hasClass('hammer-float')) {
    $('.hammer-float').toggleClass('hammer-return')
  } else {
    $('.hammerstrike').toggleClass('hammer-float')
  }
}

module.exports = {
  hammerAnimation
}
