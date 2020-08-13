! function (t) {
    "use strict";

    function o() {
        this.$body = t("body"), this.$todoContainer = t("#todo-container"), this.$todoMessage = t("#todo-message"), this.$todoRemaining = t("#todo-remaining"), this.$todoTotal = t("#todo-total"), this.$archiveBtn = t("#btn-archive"), this.$todoList = t("#todo-list"), this.$todoDonechk = ".todo-done", this.$todoForm = t("#todo-form"), this.$todoInput = t("#todo-input-text"), this.$todoBtn = t("#todo-btn-submit"), this.$todoData = [{
            id: "19",
            text: "POLAR chart (If required)",
            done: !1
        }, {
            id: "18",
            text: "EDTO chart (If required)",
            done: !1
        }, {
            id: "17",
            text: "Over fly and landing Permits (If required)",
            done: !1
        }, {
            id: "16",
            text: "Forecast Threats & Prepare",
            done: !1
        }, {
            id: "15",
            text: "CFP Signout & Submit",
            done: !1
        }, {
            id: "14",
            text: "Wx information",
            done: !1
        }, {
            id: "13",
            text: "Rest Planning (3 pliots, 2 set)",
            done: !1
        }, {
            id: "12",
            text: "Duty Designation (PF, PM)",
            done: !1
        }, {
            id: "11",
            text: "Crew's particular minima",
            done: !1
        }, {
            id: "10",
            text: "NOTAM",
            done: !1
        }, {
            id: "9",
            text: "Qualification for Airport & Route",
            done: !1
        }, {
            id: "8",
            text: "Expiration Date (Medical, Passport, Visa, Radio)",
            done: !1
        }, {
            id: "7",
            text: "T/O & L/D Expiration Date",
            done: !1
        }, {
            id: "6",
            text: "CRM",
            done: !1
        }, {
            id: "5",
            text: "CAT III",
            done: !1
        }, {
            id: "4",
            text: "CAT II",
            done: !1
        }, {
            id: "3",
            text: "Airman's certification with your signature",
            done: !1
        }, {
            id: "2",
            text: "Company Notification",
            done: !1
        }, {
            id: "1",
            text: "Show up",
            done: !1
        }], this.$todoCompletedData = [], this.$todoUnCompletedData = []
    }
    o.prototype.markTodo = function (t, o) {
        for (var e = 0; e < this.$todoData.length; e++) this.$todoData[e].id == t && (this.$todoData[e].done = o)
    }, o.prototype.addTodo = function (t) {
        this.$todoData.push({
            id: this.$todoData.length,
            text: t,
            done: !1
        }), this.generate()
    }, o.prototype.archives = function () {
        this.$todoUnCompletedData = [];
        for (var t = 0; t < this.$todoData.length; t++) {
            var o = this.$todoData[t];
            1 == o.done ? this.$todoCompletedData.push(o) : this.$todoUnCompletedData.push(o)
        }
        this.$todoData = [], this.$todoData = [].concat(this.$todoUnCompletedData), this.generate()
    }, o.prototype.generate = function () {
        this.$todoList.html("");
        for (var t = 0, o = 0; o < this.$todoData.length; o++) {
            var e = this.$todoData[o];
            1 == e.done ? this.$todoList.prepend('<li class="list-group-item border-0 pl-0 font-16"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input todo-done" id="' + e.id + '" checked><label class="custom-control-label" for="' + e.id + '"><s>' + e.text + "</s></label></div></li>") : (t += 1, this.$todoList.prepend('<li class="list-group-item border-0 pl-0 font-16"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input todo-done" id="' + e.id + '"><label class="custom-control-label" for="' + e.id + '">' + e.text + "</label></div></li>"))
        }
        this.$todoTotal.text(this.$todoData.length), this.$todoRemaining.text(t)
    }, o.prototype.init = function () {
        var o = this;
        this.generate(), this.$archiveBtn.on("click", function (t) {
            return t.preventDefault(), o.archives(), !1
        }), t(document).on("change", this.$todoDonechk, function () {
            this.checked ? o.markTodo(t(this).attr("id"), !0) : o.markTodo(t(this).attr("id"), !1), o.generate()
        }), this.$todoForm.on("submit", function (t) {
            return t.preventDefault(), "" == o.$todoInput.val() || void 0 === o.$todoInput.val() || null == o.$todoInput.val() ? (o.$todoInput.focus(), !1) : (o.addTodo(o.$todoInput.val()), o.$todoForm.removeClass("was-validated"), o.$todoInput.val(""), !0)
        })
    }, t.TodoApp = new o, t.TodoApp.Constructor = o
}(window.jQuery),
function () {
    "use strict";
    window.jQuery.TodoApp.init()
}();