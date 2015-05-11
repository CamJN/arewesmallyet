var data = {}
var stats = {}

function goStats(){
  $.ajax({
    url:'stats.json',
    tryCount : 0,
    retryLimit : 3,
    success:function(r){
      $.extend(window.stats,r);
      $(statistics);
    },
    error:function(xhr, textStatus, errorThrown ) {
      this.tryCount++;
      if (this.tryCount <= this.retryLimit) {
        //try again
        $.ajax(this);
        return;
      }
      console.log(textStatus);
    }
  })
}

$.ajax({
  url:'data.json',
  tryCount : 0,
  retryLimit : 3,
  success:function(r){
    $.extend(window.data,r);
    $(main);
    goStats();
  },
  error:function(xhr, textStatus, errorThrown ) {
    this.tryCount++;
    if (this.tryCount <= this.retryLimit) {
      //try again
      $.ajax(this);
      return;
    }
    console.log(textStatus);
  }
})
