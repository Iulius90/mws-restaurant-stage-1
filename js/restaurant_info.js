"use strict";var newMap,restaurant=void 0;document.addEventListener("DOMContentLoaded",function(e){initMap()});var initMap=function(){fetchRestaurantFromURL(function(e,t){e?console.error(e):(self.newMap=L.map("map",{center:[t.latlng.lat,t.latlng.lng],zoom:16,scrollWheelZoom:!1}),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}",{mapboxToken:"pk.eyJ1IjoiaXVsaXVzOTAiLCJhIjoiY2pqb3Fma29rMTFoNjNyb25jMDRiYnAxNSJ9.PMA0jzhYpM4MJnmkzDxxlg",maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox.streets"}).addTo(newMap),fillBreadcrumb(),DBHelper.mapMarkerForRestaurant(self.restaurant,self.newMap))})},fetchRestaurantFromURL=function(n){if(self.restaurant)n(null,self.restaurant);else{var e=getParameterByName("id");e?DBHelper.fetchRestaurantById(e,function(e,t){(self.restaurant=t)?(fillRestaurantHTML(),n(null,t)):console.error(e)}):(error="No restaurant id in URL",n(error,null))}},fillRestaurantHTML=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant;document.getElementById("restaurant-name").innerHTML=a.name,document.getElementById("restaurant-address").innerHTML=a.address;var e=document.getElementById("restaurant-img");e.className="restaurant-img",e.src=a.photograph?DBHelper.imageUrlForRestaurant(a):"img/image_not_found.png",e.alt=a.name,document.getElementById("restaurant-cuisine").innerHTML=a.cuisine_type;var t=document.querySelector(".restaurant-header button");a.is_favorite&&t.classList.add("is-favorite"),t.addEventListener("click",function(){t.classList.toggle("is-favorite");var e=!!t.classList.contains("is-favorite");a.is_favorite=e,a.updatedAt=Number(new Date);var n={id:a.id,is_favorite:a.is_favorite,updatedAt:a.updatedAt};DBHelper.addToFavLocal(n),function t(){return fetch("http://localhost:1337/restaurants/"+a.id+"/?",{method:"PUT",body:JSON.stringify(n),headers:{"content-type":"application/json"}}).then(function(e){console.log("addToFavServer -> success",e),navigator.onLine&&window.removeEventListener("online",t)}).catch(function(e){console.log("addToFavServer -> ERROR",e),window.addEventListener("online",t)})}()}),a.operating_hours&&fillRestaurantHoursHTML(),fillReviewsHTML()},fillRestaurantHoursHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.operating_hours,t=document.getElementById("restaurant-hours");for(var n in e){var a=document.createElement("tr"),r=document.createElement("td");r.innerHTML=n,a.appendChild(r);var o=document.createElement("td");o.innerHTML=e[n],a.appendChild(o),t.appendChild(a)}},fillReviewsHTML=function(){var i=void 0;DBHelper.reviewsById(function(e,t){if(e)console.log("something went wrong when fetching reviews by id");else{i=t;var n=document.getElementById("reviews-container"),a=document.createElement("h2");if(a.innerHTML="Reviews",n.appendChild(a),!i){var r=document.createElement("p");return r.innerHTML="No reviews yet!",void n.appendChild(r)}var o=document.getElementById("reviews-list");i.forEach(function(e){o.appendChild(createReviewHTML(e))}),n.appendChild(o)}})},createReviewHTML=function(e){var t=document.createElement("li"),n=document.createElement("p");n.innerHTML=e.name,t.appendChild(n);var a=document.createElement("p");a.innerHTML=new Date(e.updatedAt).toDateString(),t.appendChild(a);var r=document.createElement("p");r.innerHTML="Rating: "+e.rating,t.appendChild(r);var o=document.createElement("p");return o.innerHTML=e.comments,t.appendChild(o),t},fillBreadcrumb=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,t=document.getElementById("breadcrumb"),n=document.createElement("li");n.innerHTML=e.name,t.appendChild(n)},getParameterByName=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null};