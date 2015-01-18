var data = {}
$.ajax({
  url:'/data',
  tryCount : 0,
  retryLimit : 3,
  success:function(r){
    $.extend(window.data,r);
    $(main);
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
