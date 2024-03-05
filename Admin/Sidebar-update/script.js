$(document).ready(function () {
  const $sidebar = $(".sidebar");
  const $sidebarClose = $("#sidebar-close");
  const $menu = $(".menu-content");
  const $menuItems = $(".submenu-item");
  const $subMenuTitles = $(".submenu .menu-title");
  const $toggleIcon = $("#sidebar-toggle");

  // Initially, hide the close icon
  $sidebarClose.hide();

  $sidebarClose.on("click", function () {
    $sidebar.toggleClass("close");
    $toggleIcon.show();
    $sidebarClose.hide();
  });

  $toggleIcon.on("click", function () {
    $sidebar.toggleClass("close");
    $toggleIcon.hide();
    $sidebarClose.show();
  });

  $menuItems.each(function (index) {
    const $item = $(this);
    $item.on("click", function () {
      $menu.addClass("submenu-active");
      $item.addClass("show-submenu");
      $menuItems.each(function (index2) {
        if (index !== index2) {
          $(this).removeClass("show-submenu");
        }
      });
    });
  });

  $subMenuTitles.on("click", function () {
    $menu.removeClass("submenu-active");
  });
});
