"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8749, 8079, 9509],
  {
    1715: function (e, t, n) {
      n.r(t);
      var l = n(5893),
        i = n(5813),
        o = n(6793),
        s = n(2029),
        a = n(4799),
        d = n(4416),
        r = n(8401),
        u = n(7804);

      t.default = function () {
        var e = (0, d.I0)(),
          t = (0, o.$)().t,
          n = (0, d.v9)(function (e) {
            var t, n, l, i;
            return (
              null === e ||
              void 0 === e ||
              null == (t = e.overviewReducer) ||
              void 0 === t ||
              null == (n = t.overViewDetails) ||
              void 0 === n ||
              null == (l = n.metaData) ||
              void 0 === l ||
              null == (i = l.bundleData) ||
              void 0 === i
                ? void 0
                : i.bundles
            );
          }),
          c = {
            BOOKS: (0, a.pA)("Book20062023.png", "content"),
            TEST: (0, a.pA)("testBook20062023.png", "content"),
            DOUBTBUDDY: (0, a.pA)("doubt-budy.svg", "content"),
          },
          v = Array.isArray(n) && n.length > 2,
          h = Array.isArray(n) && n.length > 0;

        return (0, l.jsx)(l.Fragment, {
          children: h
            ? (0, l.jsx)(i.Z, {
                mainHeading: t(
                  "AvailableOffers.components.BottomSheets.components.CategoriesBottomSheetBundle.header",
                  "Included in this bundle"
                ),
                viewAllText: v
                  ? t(
                      "AvailableOffers.components.BottomSheets.components.CategoriesBottomSheetBundle.viewAll",
                      "View All"
                    )
                  : "",
                btnClickHandler: function () {
                  return e((0, r.lY)(!0));
                },
                className: "bundle-div",
                children: (0, l.jsx)("div", {
                  className: "bundle-list-container",
                  children:
                    null === n || void 0 === n
                      ? void 0
                      : n.map(function (e, t) {
                          if (t < 2)
                            return (0, l.jsxs)("div", {
                              className: "bundle-list-div",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "bundle-list-img",
                                  children: (0, l.jsx)(s.default, {
                                    src: c[e?.courseType],
                                    className: "",
                                    width: "40",
                                    height: "40",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "DOUBTBUDDY" === e?.courseType ? "" : "bundle-list-text",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "bundle-title-container",
                                      children: [
                                        (0, l.jsxs)("p", {
                                          className: "bundle-title",
                                          children: [
                                            " ",
                                            e?.courseName,
                                            " ",
                                          ],
                                        }),
                                        " ",
                                        "DOUBTBUDDY" === e?.courseType
                                          ? (0, l.jsxs)(u.Z, {
                                              isHeight: "18px",
                                              text:
                                                "Ask a doubt from your mobile app, and get superfast solution with explanation in 60 sec. * Try on your mobile app.",
                                              position: "bottom",
                                              children: [
                                                (0, l.jsx)(s.default, {
                                                  src: (0, a.pA)("help-circle.svg", "content"),
                                                  className: "",
                                                  width: "14",
                                                  height: "14",
                                                }),
                                                " ",
                                              ],
                                            })
                                          : null,
                                      ],
                                    }),
                                    "DOUBTBUDDY" === e?.courseType
                                      ? (0, l.jsx)("p", {
                                          className: "bundle-subtitle",
                                          children: "Resolve all your doubts 24x7",
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            });
                        }),
                }),
              })
            : "",
        });
      };
    },
    7804: function (e, t, n) {
      var l = n(5893),
        i = n(7294);
      t.Z = function (e) {
        var t = e.text,
          n = e.children,
          o = e.position,
          s = void 0 === o ? "top" : o,
          a = e.isHeight,
          d = (0, i.useState)(!1),
          r = d[0],
          u = d[1];
        return (0, l.jsxs)("div", {
          className: "tooltip-container",
          onMouseEnter: function () {
            return u(!0);
          },
          onMouseLeave: function () {
            return u(!1);
          },
          style: a ? { height: a } : { height: "auto" },
          children: [
            n,
            r &&
              (0, l.jsx)("div", {
                className: "tooltip-text tooltip-".concat(s),
                children: t,
              }),
          ],
        });
      };
    },
  },
]);
