(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(n,t,e){"use strict";e.d(t,"a",function(){return w}),e.d(t,"c",function(){return j}),e.d(t,"b",function(){return T});var r=e(12),c=(e(45),e(61),e(146),e(90),e(23)),o=(e(24),e(147)),l=e.n(o),f=e(149),d=e.n(f),h=e(143),m=e.n(h),y=e(150),v=e.n(y);function w(){return l.a.get("/2019/data/timetable.json").then(function(n){return{days:n.data.days}})}function j(){return w().then(function(n){var t=n.days,e=new Map;return v()(t,function(n){return v()(n.timeslots,function(n){return n.events})}).filter(function(n){return!(!n||!n.topic)&&(!e.has(n.internal)&&(e.set(n.internal,!0),!0))}).sort(function(n,t){return n.display.localeCompare(t.display)})})}function T(n){return w().then(function(t){var e=t.days,map=new Map;return e.forEach(function(n){var t=n.day,e=n.date;n.timeslots.forEach(function(n){var o=n.startTime,l=n.endTime;n.events.forEach(function(n){n.topic&&map.set(function(n){if("object"!==Object(c.a)(n))return"";if("string"!=typeof n.internal)return n.replace(/[^_\W]+/g,"","").replace(" ","-").toLowerCase();var u=m.a.parse(n.internal);return d.a.basename(u.pathname)}(n),Object(r.a)({day:t,date:e,startTime:o,endTime:l},n))})})}),map.get(n)})}},215:function(n,t,e){"use strict";e.r(t);var r=e(142),c={name:"TimetablePage",head:{title:"Schedule | Hong Kong Open Source Confernce 2019"},components:{ScheduleTable:function(){return e.e(17).then(e.bind(null,222))},PageBanner:function(){return e.e(0).then(e.bind(null,221))}},asyncData:function(){return Object(r.a)()},data:function(){return{days:[]}}},o=e(17),component=Object(o.a)(c,function(){var n=this.$createElement,t=this._self._c||n;return t("main",{staticClass:"timetablePage"},[t("page-banner",{attrs:{title:"Schedule"}}),this._v(" "),t("div",{staticClass:"container"},[this.days.length>0?t("schedule-table",{attrs:{days:this.days}}):this._e()],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=ffcbc26774ab48432e3a.js.map