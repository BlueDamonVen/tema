"use strict";

angular
    .module('fishuApp')
    .config([
        '$ocLazyLoadProvider',
        function($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true,
                events: false,
                modules: [
                    // ----------- SERVICES ------------------
                    {
                        name: 'services',
                        files: [
                            "app/modules/common/services/SessionService.js",
                            "app/modules/common/services/DateTimeService.js",
                            "app/modules/common/services/Base64.js",
                            "app/modules/common/services/HttpBasicAuthentication.js",
                            "app/modules/common/services/AccountService.js",
                            "app/modules/common/services/ModalService.js",
                            "app/modules/common/services/detectBrowser.js",
                        ],
                        serie: true
                    },
                    // ----------- DIRECTIVES ------------------
                    {
                        name: 'directives',
                        files: [
                            "app/modules/common/directives/addImageProp.js",
                            "app/modules/common/directives/fullScreenToggle.js",
                            "app/modules/common/directives/listOutside.js",
                            "app/modules/common/directives/pageTitle.js",
                            "app/modules/common/directives/printPage.js",
                            "app/modules/common/directives/singleCard.js",
                            "app/modules/common/directives/style_switcher.js"
                        ],
                        serie: true
                    },
                    // ----------- CONTROLLERS ------------------
                    {
                        name: 'controllers',
                        files: [
                            "app/modules/common/controllers/commonController.js",
                        ],
                        serie: true
                    },                    
                    // ----------- FILTERS ------------------
                    {
                        name: 'filters',
                        files: [
                            "app/modules/common/filters/AbsoluteNumber.js",
                            "app/modules/common/filters/Moment.js",
                            "app/modules/common/filters/NumberFormat.js",
                            "app/modules/common/filters/PercentageNumber.js",
                            "app/modules/common/filters/RelativeTime.js",
                            "app/modules/common/filters/WhenEmpty.js",
                            "app/modules/common/filters/commonfilters.js"
                        ],
                        serie: true
                    },
                    // ----------- INTERCEPTORS ------------------
                    {
                        name: 'interceptors',
                        files: [
                            "app/modules/common/interceptors/ErrorInterceptor.js",
                            "app/modules/common/interceptors/TokenInterceptor.js"
                        ],
                        serie: true
                    },                                                                          
                    // ----------- UIKIT ------------------
                    {
                        name: 'lazy_uikit',
                        files: [
                            // uikit core
                            "components/uikit/js/uikit.js",
                            // uikit components
                            "components/uikit/js/components/accordion.js",
                            "components/uikit/js/components/autocomplete.js",
                            "assets/js/custom/uikit_datepicker.js",
                            "components/uikit/js/components/form-password.js",
                            "components/uikit/js/components/form-select.js",
                            "components/uikit/js/components/grid.js",
                            "components/uikit/js/components/lightbox.js",
                            "components/uikit/js/components/nestable.js",
                            "components/uikit/js/components/notify.js",
                            "components/uikit/js/components/slideshow.js",
                            "components/uikit/js/components/sortable.js",
                            "components/uikit/js/components/sticky.js",
                            "components/uikit/js/components/tooltip.js",
                            "assets/js/custom/uikit_timepicker.js",
                            "components/uikit/js/components/upload.js",
                            "assets/js/custom/uikit_beforeready.js"
                        ],
                        serie: true
                    },

                    // ----------- FORM ELEMENTS -----------
                    {
                        name: 'lazy_autosize',
                        files: [
                            'components/autosize/dist/autosize.js',
                            'assets/js/angular-autosize.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_iCheck',
                        files: [
                            "components/iCheck/icheck.min.js",
                            'assets/js/angular-icheck.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_selectizeJS',
                        files: [
                            'components/selectize/dist/js/standalone/selectize.min.js',
                            'assets/js/angular-selectize.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_switchery',
                        files: [
                            'components/switchery/dist/switchery.js',
                            'assets/js/angular-switchery.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_ionRangeSlider',
                        files: [
                            'components/ion.rangeslider/js/ion.rangeSlider.min.js',
                            'assets/js/angular-ionRangeSlider.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_masked_inputs',
                        files: [
                             'components/jquery.inputmask/dist/jquery.inputmask.bundle.js'
                        ]
                    },
                    {
                        name: 'lazy_character_counter',
                        files: [
                            'assets/js/angular-character-counter.js'
                        ]
                    },
                    {
                        name: 'lazy_parsleyjs',
                        files: [
                            'assets/js/custom/parsleyjs_config.js',
                            'components/parsleyjs/dist/parsley.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_wizard',
                        files: [
                            'assets/js/custom/parsleyjs_config.js',
                            'components/parsleyjs/dist/parsley.min.js',
                            'components/angular-wizard/dist/angular-wizard.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_ckeditor',
                        files: [
                            'components/ckeditor/ckeditor.js',
                            'assets/js/angular-ckeditor.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_tinymce',
                        files: [
                            'components/tinymce/tinymce.min.js',
                            'assets/js/angular-tinymce.js'
                        ],
                        serie: true
                    },

                    // ----------- CHARTS -----------
                    {
                        name: 'lazy_charts_chartist',
                        files: [
                            'components/chartist/dist/chartist.min.css',
                            'components/chartist/dist/chartist.min.js',
                            'assets/js/angular-chartist.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_charts_easypiechart',
                        files: [
                            'components/jquery.easy-pie-chart/dist/angular.easypiechart.min.js'
                        ]
                    },
                    {
                        name: 'lazy_charts_metricsgraphics',
                        files: [
                            'components/metrics-graphics/dist/metricsgraphics.css',
                            'components/d3/d3.min.js',
                            'components/metrics-graphics/dist/metricsgraphics.min.js',
                            'assets/js/angular-metrics-graphics.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_charts_c3',
                        files: [
                            'components/c3js-chart/c3.min.css',
                            'components/d3/d3.min.js',
                            'components/c3js-chart/c3.min.js',
                            'components/c3-angular/c3-angular.min.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_charts_peity',
                        files: [
                            'components/peity/jquery.peity.min.js',
                            'assets/js/angular-peity.js'
                        ],
                        serie: true
                    },

                    // ----------- COMPONENTS -----------
                    {
                        name: 'lazy_countUp',
                        files: [
                            'components/countUp.js/countUp.js',
                            'assets/js/angular-countUp.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_clndr',
                        files: [
                            'components/clndr/clndr.min.js',
                            'components/angular-clndr/angular-clndr.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_google_maps',
                        files: [
                            'components/ngmap/build/scripts/ng-map.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_weathericons',
                        files: [
                            'components/weather-icons/css/weather-icons.css'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_prismJS',
                        files: [
                            "components/prism/prism.js",
                            "components/prism/components/prism-php.js",
                            "components/prism/plugins/line-numbers/prism-line-numbers.js",
                            'assets/js/angular-prism.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_dragula',
                        files: [
                            'components/angular-dragula/dist/angular-dragula.min.js'
                        ]
                    },
                    {
                        name: 'lazy_pagination',
                        files: [
                            'components/angularUtils-pagination/dirPagination.js'
                        ]
                    },
                    {
                        name: 'lazy_diff',
                        files: [
                            'components/jsdiff/diff.min.js'
                        ]
                    },

                    // ----------- PLUGINS -----------
                    {
                        name: 'lazy_fullcalendar',
                        files: [
                            'components/fullcalendar/dist/fullcalendar.min.css',
                            'components/fullcalendar/dist/fullcalendar.min.js',
                            'components/fullcalendar/dist/gcal.js',
                            'components/angular-ui-calendar/src/calendar.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_codemirror',
                        files: [
                            "components/codemirror/lib/codemirror.css",
                            "assets/css/codemirror_themes.min.css",
                            "components/codemirror/lib/codemirror.js",
                            "assets/js/custom/codemirror_fullscreen.min.js",
                            "components/codemirror/addon/edit/matchtags.js",
                            "components/codemirror/addon/edit/matchbrackets.js",
                            "components/codemirror/addon/fold/xml-fold.js",
                            "components/codemirror/mode/htmlmixed/htmlmixed.js",
                            "components/codemirror/mode/xml/xml.js",
                            "components/codemirror/mode/php/php.js",
                            "components/codemirror/mode/clike/clike.js",
                            "components/codemirror/mode/javascript/javascript.js",
                            "assets/js/angular-codemirror.js"
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_datatables',
                        files: [
                            'components/datatables/media/js/jquery.dataTables.min.js',
                            'components/datatables-colvis/js/dataTables.colVis.js',
                            'components/datatables-tabletools/js/dataTables.tableTools.js',
                            'components/angular-datatables/dist/angular-datatables.js',
                            'assets/js/custom/jquery.dataTables.columnFilter.js',
                            'components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.min.js',
                            'assets/js/custom/datatables_uikit.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_gantt_chart',
                        files: [
                            <!-- jquery ui -->
                            'components/jquery-ui/ui/minified/core.min.js',
                            'components/jquery-ui/ui/minified/widget.min.js',
                            'components/jquery-ui/ui/minified/mouse.min.js',
                            'components/jquery-ui/ui/minified/resizable.min.js',
                            'components/jquery-ui/ui/minified/draggable.min.js',
                            <!-- gantt chart -->
                            'assets/js/custom/gantt_chart.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_tablesorter',
                        files: [
                            'components/tablesorter/dist/js/jquery.tablesorter.min.js',
                            'components/tablesorter/dist/js/jquery.tablesorter.widgets.min.js',
                            'components/tablesorter/dist/js/widgets/widget-alignChar.min.js',
                            'components/tablesorter/dist/js/extras/jquery.tablesorter.pager.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_vector_maps',
                        files: [
                            'components/raphael/raphael-min.js',
                            'components/jquery-mapael/js/jquery.mapael.js',
                            'components/jquery-mapael/js/maps/world_countries.js',
                            'components/jquery-mapael/js/maps/usa_states.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_dropify',
                        files: [
                            'assets/skins/dropify/css/dropify.css',
                            'assets/js/custom/dropify/dist/js/dropify.min.js'
                        ],
                        insertBefore: '#main_stylesheet'
                    },
                    {
                        name: 'lazy_tree',
                        files: [
                            'assets/js/custom/easytree/skin-material/ui.easytree.min.css',
                            'assets/js/custom/easytree/jquery.easytree.min.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },

                    // ----------- KENDOUI COMPONENTS -----------
                    {
                        name: 'lazy_KendoUI',
                        files: [
                            'components/kendo-ui/js/kendo.core.min.js',
                            'components/kendo-ui/js/kendo.color.min.js',
                            'components/kendo-ui/js/kendo.data.min.js',
                            'components/kendo-ui/js/kendo.calendar.min.js',
                            'components/kendo-ui/js/kendo.popup.min.js',
                            'components/kendo-ui/js/kendo.datepicker.min.js',
                            'components/kendo-ui/js/kendo.timepicker.min.js',
                            'components/kendo-ui/js/kendo.datetimepicker.min.js',
                            'components/kendo-ui/js/kendo.list.min.js',
                            'components/kendo-ui/js/kendo.fx.min.js',
                            'components/kendo-ui/js/kendo.userevents.min.js',
                            'components/kendo-ui/js/kendo.menu.min.js',
                            'components/kendo-ui/js/kendo.draganddrop.min.js',
                            'components/kendo-ui/js/kendo.slider.min.js',
                            'components/kendo-ui/js/kendo.mobile.scroller.min.js',
                            'components/kendo-ui/js/kendo.autocomplete.min.js',
                            'components/kendo-ui/js/kendo.combobox.min.js',
                            'components/kendo-ui/js/kendo.dropdownlist.min.js',
                            'components/kendo-ui/js/kendo.colorpicker.min.js',
                            'components/kendo-ui/js/kendo.combobox.min.js',
                            'components/kendo-ui/js/kendo.maskedtextbox.min.js',
                            'components/kendo-ui/js/kendo.multiselect.min.js',
                            'components/kendo-ui/js/kendo.numerictextbox.min.js',
                            'components/kendo-ui/js/kendo.toolbar.min.js',
                            'components/kendo-ui/js/kendo.panelbar.min.js',
                            'components/kendo-ui/js/kendo.window.min.js',
                            'components/kendo-ui/js/kendo.angular.min.js',
                            'components/kendo-ui/styles/kendo.common-material.min.css',
                            'components/kendo-ui/styles/kendo.material.min.css'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },

                    // ----------- UIKIT HTMLEDITOR -----------
                    {
                        name: 'lazy_htmleditor',
                        files: [
                            "components/codemirror/lib/codemirror.js",
                            "components/codemirror/mode/markdown/markdown.js",
                            "components/codemirror/addon/mode/overlay.js",
                            "components/codemirror/mode/javascript/javascript.js",
                            "components/codemirror/mode/php/php.js",
                            "components/codemirror/mode/gfm/gfm.js",
                            "components/codemirror/mode/xml/xml.js",
                            "components/marked/lib/marked.js",
                            "components/uikit/js/components/htmleditor.js"
                        ],
                        serie: true
                    }
                ]
            })
        }
    ]);