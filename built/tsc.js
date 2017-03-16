System.register("greater", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var greater;
    return {
        setters: [],
        execute: function () {
            greater = function (a, b) {
                return a + b;
            };
            exports_1("greater", greater);
        }
    };
});
System.register("greater-user", ["greater"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var greater_1, a, b, user;
    return {
        setters: [
            function (greater_1_1) {
                greater_1 = greater_1_1;
            }
        ],
        execute: function () {
            a = 1, b = 1;
            user = { Name: 'Petr' };
            console.log(greater_1.greater(a, b));
        }
    };
});
System.register("index", ["greater-user"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
        }
    };
});
