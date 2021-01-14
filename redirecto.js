// AUTOREDIRECT JS By Sarjanamalas
// Youtube : https://www.youtube.com/channel/UCntVLuF_IylHa3v0MavA-2w

var urlmain = document.URL;
var slugs = document.URL.split("/")[3];
var affkey = document.URL.split("/")[4];
var id = document.URL.split("/")[5];
var redSites = [
  "https://sarjanamalas.com",
  "https://www.youtube.com/channel/UCntVLuF_IylHa3v0MavA-2w"
];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];

if (slugs) {
  window.location = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+affkey+'&dp=9tube&dl_target_url=https://www.aliexpress.com/item/'+id+'';
} else {
  window.location = randomLinks;
}
