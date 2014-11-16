var data = {}
$.ajax({
  url:'/data',
  success:function(r){
    $.extend(window.data,r);
    main();
  },
  error:function(r){
    console.log(r);
  }
})
