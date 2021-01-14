var urlmain = document.URL;
var slugs = document.URL.split("/")[3];
var affkey = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (slugs == 'offres' || slugs == 'promo' || slugs == 'sale' ) {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+affkey+'&dl_target_url=https://www.aliexpress.com/item/'+id+'';
} else {}

setTimeout(
  function(){
    window.location = redir
  },
3000); 
