(window.webpackJsonp_admin_welcome_guide =
	window.webpackJsonp_admin_welcome_guide || []).push([
	[1],
	{ 4: function (e, t, n) {} },
]),
	(function (e) {
		function t(t) {
			for (
				var o, i, l = t[0], a = t[1], s = t[2], p = 0, d = [];
				p < l.length;
				p++
			)
				(i = l[p]),
					Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
					(r[i] = 0);
			for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
			for (u && u(t); d.length; ) d.shift()();
			return c.push.apply(c, s || []), n();
		}
		function n() {
			for (var e, t = 0; t < c.length; t++) {
				for (var n = c[t], o = !0, l = 1; l < n.length; l++) {
					var a = n[l];
					0 !== r[a] && (o = !1);
				}
				o && (c.splice(t--, 1), (e = i((i.s = n[0]))));
			}
			return e;
		}
		var o = {},
			r = { 0: 0 },
			c = [];
		function i(t) {
			if (o[t]) return o[t].exports;
			var n = (o[t] = { i: t, l: !1, exports: {} });
			return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
		}
		(i.m = e),
			(i.c = o),
			(i.d = function (e, t, n) {
				i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
			}),
			(i.r = function (e) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(i.t = function (e, t) {
				if ((1 & t && (e = i(e)), 8 & t)) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if (
					(i.r(n),
					Object.defineProperty(n, "default", { enumerable: !0, value: e }),
					2 & t && "string" != typeof e)
				)
					for (var o in e)
						i.d(
							n,
							o,
							function (t) {
								return e[t];
							}.bind(null, o)
						);
				return n;
			}),
			(i.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return i.d(t, "a", t), t;
			}),
			(i.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(i.p = "");
		var l = (window.webpackJsonp_admin_welcome_guide =
				window.webpackJsonp_admin_welcome_guide || []),
			a = l.push.bind(l);
		(l.push = t), (l = l.slice());
		for (var s = 0; s < l.length; s++) t(l[s]);
		var u = a;
		c.push([5, 1]), n();
	})([
		function (e, t) {
			e.exports = window.wp.element;
		},
		function (e, t) {
			e.exports = window.wp.i18n;
		},
		function (e, t) {
			function n() {
				return (
					(e.exports = n =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var o in n)
									Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
							}
							return e;
						}),
					(e.exports.default = e.exports),
					(e.exports.__esModule = !0),
					n.apply(this, arguments)
				);
			}
			(e.exports = n),
				(e.exports.default = e.exports),
				(e.exports.__esModule = !0);
		},
		function (e, t) {
			e.exports = window.wp.components;
		},
		,
		function (e, t, n) {
			"use strict";
			n.r(t);
			var o = n(0),
				r = (n(4), n(2)),
				c = n.n(r),
				i = n(3),
				l = n(1),
				a = (e) =>
					Object(o.createElement)(
						i.Guide,
						c()({}, e, {
							pages: [
								{
									image: Object(o.createElement)("img", {
										src: "https://s.w.org/images/block-editor/welcome-canvas.gif",
									}),
									content: Object(o.createElement)(
										"div",
										null,
										Object(o.createElement)(
											"h2",
											{ className: "edit-post-welcome-guide__heading" },
											Object(l.__)("Welcome to the block editor")
										),
										",",
										Object(o.createElement)(
											"p",
											{ className: "edit-post-welcome-guide__text" },
											Object(l.__)(
												"In the WordPress editor, each paragraph, image, or video is presented as a distinct “block” of content."
											)
										)
									),
								},
								{
									image: Object(o.createElement)("img", {
										src: "https://s.w.org/images/block-editor/welcome-editor.gif",
									}),
									content: Object(o.createElement)(
										"div",
										null,
										Object(o.createElement)(
											"h2",
											{ className: "edit-post-welcome-guide__heading" },
											Object(l.__)("Make each block your own")
										),
										Object(o.createElement)(
											"p",
											{ className: "edit-post-welcome-guide__text" },
											Object(l.__)(
												"Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected."
											)
										)
									),
								},
								{
									image: Object(o.createElement)("img", {
										src: "https://s.w.org/images/block-editor/welcome-library.gif",
									}),
									content: Object(o.createElement)(
										"div",
										null,
										Object(o.createElement)(
											"h2",
											{ className: "edit-post-welcome-guide__heading" },
											Object(l.__)("Get to know the block library")
										),
										Object(o.createElement)(
											"p",
											{ className: "edit-post-welcome-guide__text" },
											Object(l.__)(
												"All of the blocks available to you live in the block library."
											)
										)
									),
								},
							],
						})
					);
			const { __: __ } = wp.i18n;
			var s = (e) => {
				const [t, n] = Object(o.useState)(!1);
				return Object(o.createElement)(
					o.Fragment,
					null,
					Object(o.createElement)(
						i.Button,
						{ onClick: () => n(!0) },
						__("Welcome Guide: “Teach NSMG Editorial Team How To Code”")
					),
					t && Object(o.createElement)(a, c()({}, e, { onFinish: () => n(!1) }))
				);
			};
			const { __: u } = wp.i18n,
				{ registerPlugin: p } = wp.plugins,
				{ PluginDocumentSettingPanel: d } = wp.editPost;
			p("welcome-guide-plugin-document-setting-panel", {
				render: () =>
					Object(o.createElement)(
						d,
						{
							name: "welcome-guide",
							title: "Welcome Guide",
							className: "welcome-guide",
						},
						Object(o.createElement)(s, null)
					),
				icon: "welcome-view-site",
			});
		},
	]);
