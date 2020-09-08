$(document).ready(function () {
    "use strict";
    $("#basic-datatable").DataTable({
        keys: !0,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    var a = $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "print"],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    $("#selection-datatable").DataTable({
        select: {
            style: "multi"
        },
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $("#alternative-page-datatable").DataTable({
        pagingType: "full_numbers",
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), $("#scroll-vertical-datatable").DataTable({
        scrollY: "350px",
        scrollCollapse: !0,
        paging: !1,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), $("#scroll-horizontal-datatable").DataTable({
        scrollX: true,
        dom: 'Bfrtip',
        buttons: [
            'excel'
        ],
        info: false,
        sort: false,
        filter: false,
        lengthChange: false,
        drawCallback: function () {
            $("#scroll-horizontal-datatable_paginate > .pagination").addClass("mt-3 mb-3");
            $("#scroll-horizontal-datatable_paginate > .pagination").css('justify-content', 'center');
            $(".dt-buttons").addClass("float-right");
            $(".buttons-excel").removeClass("btn-secondary");
            $(".buttons-excel").addClass("btn-success");
            $(".buttons-excel").html('<i class="mdi mdi-file-excel-outline"></i> EXECL');
        },
    }),$("#scroll-horizontal-expiry").DataTable({
        scrollX: !0,
        info: false,
        sort: false,
        filter: false,
        lengthChange: false,
        drawCallback: function () {
            $("#scroll-horizontal-expiry_paginate > .pagination").addClass("mt-3 mb-3");
            $("#scroll-horizontal-expiry_paginate > .pagination").css('justify-content', 'left');
        },
    }),$("#route-datatable").DataTable({
        scrollX: !0,
        scrollY: '300px',
        info: false,
        sort: false,
        filter: false,
        paging: false,
        lengthChange: false,
        drawCallback: function () {
        },
    }),$("#airport-datatable").DataTable({
        scrollX: !0,
        scrollY: '300px',
        info: false,
        sort: false,
        filter: false,
        paging: false,
        lengthChange: false,
        drawCallback: function () {
        },
    })
});