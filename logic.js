$('#content').on('change keyup keydown paste cut', function(){
  $(this).height(this.scrollHeight);
});
