$(document).ready(() => {
  chrome.storage.sync.get(['title', 'content'], (result) => {
    $("#title").val(result.title);
    $("#content").val(result.content);
  });
});

$('#clear-btn').on('click', function(){
  $("#title").val("");
  $("#content").val("");
});

$('#title').on('keydown paste cut', function(){
  $("#is-edited").css("display", "inline");
});

$('#content').on('keydown paste cut', function(){
  $(this).height(this.scrollHeight);
  $("#is-edited").css("display", "inline");
});

$(document).keydown((e) => {
  if ((e.ctrlKey || e.metaKey) && e.which == 83) {
    const notetitle = $("#title").val();
    const notecontent = $("#content").val();
    const storage = {'title': notetitle, 'content': notecontent};
    e.preventDefault();
    chrome.storage.sync.set(storage, () => {
      $("#is-edited").css("display", "none");
    });
  }
});
