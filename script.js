function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarItems = document.querySelectorAll('.sidebar ul li');
  
    sidebar.classList.toggle('open');
  
    sidebarItems.forEach(function(item) {
        item.classList.toggle('hide');
    });
}

document.addEventListener("DOMContentLoaded", function() {
  var sidebarLinks = document.querySelectorAll(".sidebar a");

  sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      var targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
