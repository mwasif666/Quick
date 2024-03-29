!(function (i) {
  var l = "zeynep",
    o = {
      initialized: !1,
      speed: 375,
      disableTransition: !1,
      width: 295,
      onLoading: null,
      onLoad: null,
      onOpening: null,
      onOpened: null,
      onClosing: null,
      onClosed: null,
      onUnloading: null,
      onUnloaded: null,
    };
  function a(n, e) {
    (this.element = n),
      (this.options = i.extend({}, o, e)),
      (this._defaults = o),
      (this._name = l),
      (this.eventController = t),
      this.init();
  }
  (a.prototype.init = function () {
    var t = this.element,
      n = t.find("[data-submenu]"),
      s = this.options;
    s.initialized ||
      (this.eventController("onLoading"),
      this.element.css(
        "transform",
        "translateX(-" + this.options.width + "px)"
      ),
      this.element.css("width", this.options.width),
      n.each(function () {
        var n = i(this),
          e = n.attr("data-submenu"),
          o = i("#" + e);
        if (!o.length) return !0;
        n.on("click", function (n) {
          var e = o.parents(".submenu:first").scrollTop() || 0;
          t.find(".submenu.opened").length ||
            (t.css("overflow-y", "hidden"), (e = t.scrollTop())),
            o.parents(".submenu:first").css("overflow-y", "hidden"),
            o.scrollTop(0),
            o.css("top", e),
            o.css("transform", "translateX(0)"),
            o.addClass("opened");
        }),
          o.find('[data-submenu-close="' + e + '"]').on("click", function (n) {
            o.parents(".submenu:first").css("overflow-y", ""),
              o.css("transform", "translateX(" + s.width + "px)"),
              o.removeClass("opened"),
              t.find(".submenu.opened").length || t.css("overflow-y", "");
          });
      }),
      (s.initialized = !0),
      this.eventController("onLoad"));
  }),
    (a.prototype.open = function () {
      this.eventController("onOpening");
      var n = i("html"),
        e = i("body");
      this.options.disableTransition &&
        this.element.add(n).addClass("no-transition"),
        n.addClass("zeynep-opened"),
        this.element.css("transform", "translateX(0)"),
        e.css("left", this.options.width),
        this.eventController("onOpened");
    }),
    (a.prototype.close = function (n) {
      !n && this.eventController("onClosing");
      var e = i("html"),
        o = i("body");
      e.removeClass("zeynep-opened"),
        o.css("left", 0),
        this.element.css(
          "transform",
          "translateX(-" + this.options.width + "px)"
        ),
        this.options.disableTransition &&
          this.element.add(e).removeClass("no-transition"),
        !n && this.eventController("onClosed");
    }),
    (a.prototype.unload = function () {
      this.eventController("onUnloading"),
        this.close(!0),
        this.element.removeAttr("style"),
        this.element.find(".submenu.opened").removeClass("opened"),
        this.element.find(".submenu").removeAttr("style"),
        i.removeData(this.element, "plugin_" + l),
        this.eventController("onUnloaded");
    });
  var t = function (n) {
    if (this.options[n] && "function" == typeof this.options[n])
      switch (n) {
        case "onLoading":
          this.options.onLoading.call();
          break;
        case "onLoad":
          this.options.onLoad.call();
          break;
        case "onOpening":
          this.options.onOpening.call();
          break;
        case "onOpened":
          this.options.onOpened.call();
          break;
        case "onClosing":
          this.options.onClosing.call();
          break;
        case "onClosed":
          this.options.onClosed.call();
          break;
        case "onUnloading":
          this.options.onUnloading.call();
          break;
        case "onUnloaded":
          this.options.onUnloaded.call();
      }
  };
  i.fn[l] = function (n) {
    if (1 < this.length) return null;
    var e,
      o,
      t,
      s =
        ((o = null),
        (t = n || {}),
        (e = this).data(l)
          ? (o = e.data(l))
          : ((o = new a(e, t)), e.data(l, o)),
        o);
    return {
      load: function () {
        s.init.apply(s);
      },
      open: function () {
        s.open.apply(s);
      },
      close: function () {
        s.close.apply(s);
      },
      unload: function () {
        s.unload.apply(s);
      },
    };
  };
})(window.jQuery);
