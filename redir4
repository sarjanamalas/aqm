var urlmain = document.URL;
var slugs = document.URL.split("/")[3];
var affkey = document.URL.split("/")[4];
var id = document.URL.split("/")[5];
var redSites = [
  "https://lesjolies.nu",
  "https://lesjolies.online",
  "https://pucol.nu",
  "https://surfacelayer.nu",
  "https://surfacelayer.online"
];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];

if (slugs) {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+affkey+'&dl_target_url=https://www.aliexpress.com/item/'+id+'';
} else {
  var redir = randomLinks
}

setTimeout(
  function(){
    window.location = redir
  },
0); 
