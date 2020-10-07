! function (o) {
    "use strict";

    function e() {
        this.$body = o("body"),
        this.$modal = o("#event-modal"),
        this.$calendar = o("#calendar"), 
        this.$saveCategoryBtn = o(".save-category"), 
        this.$categoryForm = o("#add-category form"),
        this.$calendarObj = null
    }
    e.prototype.onEventClick = function (t, e, n) {  // 기존꺼
        var a = this,
            l = o("<div></div>");
        l.append("해당 스케줄을 자세히 보시겠습니까?"), a.$modal.modal({
            backdrop: "static"
        }), a.$modal.find(".delete-event").show().end().find(".save-event").unbind("click").click(function () {location.href = './crew-portal-schedule.html'}).show().end().find(".modal-body").empty().prepend(l).end().find(".delete-event").unbind("click").click(function () {
            a.$calendarObj.fullCalendar("removeEvents", function (e) {
                return e._id == t._id
            }), 
            a.$modal.modal("hide")
        })
    }, e.prototype.onSelect = function (n, a, e) {
        var l = this;
        l.$modal.modal({
            backdrop: "static"
        });
        var i = o("<div></div>");
        i.append("<div class='row'></div>"), 
        i.find(".row").append("새로운 Flight Log를 작성하시겠습니까?")
        ,l.$modal.find(".delete-event").hide().end().find(".save-event").show().end().find(".modal-body").empty().prepend(i).end().find(".save-event").unbind("click").click(function () {
            location.href = './crew-portal-flightlog.html'
        }), l.$calendarObj.fullCalendar("unselect")
    }, e.prototype.init = function () {
        var e = new Date,
            t = (e.getDate(), e.getMonth(), e.getFullYear(), new Date(o.now())),
            /******** 임시 RAMDON ID - 실제 DB 연동시 삭제 **********/
            eventId = 1 + Math.floor(Math.random() * 1000),
            /******** 임시 RAMDON ID - 실제 DB 연동시 삭제 **********/
            n = [{
                _id: eventId,
                title: 'YP123 44:44 ICN HAN 44:44',
                start: 'Thu Sep 10 2020 08:00:00 GMT+0900',
                end: 'Thu Sep 10 2020 13:00:00 GMT+0900',
                className: "bg-warning-lighten",
            }, {
                _id: eventId,
                title: 'YP124 08:00 ICN HAN 13:00',
                start: 'Thu Sep 11 2020 08:00:00 GMT+0900',
                end: 'Thu Sep 11 2020 13:00:00 GMT+0900',
                className: "bg-warning-lighten",
            }, {
                _id: eventId,
                title: 'YP125 08:00 ICN HAN 13:00',
                start: 'Thu Sep 15 2020 08:00:00 GMT+0900',
                end: 'Thu Sep 15 2020 13:00:00 GMT+0900',
                className: "bg-warning-lighten",
            },{
                _id: eventId,
                title: 'YP126 08:00 ICN HAN 13:00',
                start: 'Thu Sep 21 2020 08:00:00 GMT+0900',
                end: 'Thu Sep 21 2020 13:00:00 GMT+0900',
                className: "bg-warning-lighten",
            }, ],
            a = this;
            
        a.$calendarObj = a.$calendar.fullCalendar({
            defaultView: "month",
            handleWindowResize: !0,
            expandRows: true,
            height: o(window).height() - 200,
            header: {
                left: "today",
                center: "prev, title, next",
                right: ""
            },
            displayEventTime: false,
            events: n,
            editable: !0,
            droppable: !0,
            eventLimit: !1,
            selectable: !0,
            eventStartEditable: !1,
            disableDragging: true,
            select: function (e, t, n) {
                a.onSelect(e, t, n)
            },
            eventClick: function (e, t, n) {
                a.onEventClick(e, t, n)
            }
        })
    }, o.CalendarApp = new e, o.CalendarApp.Constructor = e
    
}(window.jQuery),
function () {
    "use strict";
    window.jQuery.CalendarApp.init()
}();