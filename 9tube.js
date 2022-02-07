var urlmain = document.URL;
var dp = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dp='+dp+'&dl_target_url=https://www.aliexpress.com/item/'+id+'';

setTimeout(
  function(){
    window.location = redir;
  },
1000);
