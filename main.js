var navItems = $('#nav>.navItem')
for(i=0; i<navItems.length; i++){
  $(navItems[i]).on('click',function(e){
    var index = $(e.currentTarget).index()
    var distance = index*-840
    $('#slides').css({transform:'translateX('+distance+'px)'})
    current = index
    activeNavItems(navItems.eq(current))
  })
}

var current = 0
var size = navItems.length
playSlide(navItems.eq(current%size))

var timer = setTimer()

$('#window').on('mouseenter',function(){
  window.clearInterval(timer)
})
$('#window').on('mouseleave',function(){
  timer = setTimer()
})



function activeNavItems($activeNavItems){
  $activeNavItems.addClass('active').siblings('.navItem.active').removeClass('active')
}
function playSlide(index){
  navItems.eq(current%size).trigger('click')
}
function setTimer(){
  return setInterval(function(){
    current += 1
    playSlide(navItems.eq(current%size))
  },2000)
}


