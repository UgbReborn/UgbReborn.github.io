;
if (CloudflareApps.matchPage(CloudflareApps.installs['p2QQF2eis8rF'].URLPatterns)) {
    (function(modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            }
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != 'string')
                for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    })
    ({
        "./src/index.js": (function(module, exports, __webpack_require__) {
            "use strict";

            function get_host_name() {
                if ("p2QQF2eis8rF" == 'preview') {
                    console.log('preview mode');
                    return CloudflareApps.proxy.originalURL.parsed.host;
                } else {
                    return window.location.hostname;
                }
            }

            function check_plan() {
                var options = CloudflareApps.installs['p2QQF2eis8rF'].options;
                var product = CloudflareApps.installs['p2QQF2eis8rF'].product;
                if (product && product.id === 'google-analytics-pro') {
                    console.log('CF-GA: Thank you for installing pro :)');
                } else {
                    console.log('CF-GA: Please update to pro in order to get more features.');
                }
            }

            function init() {
                check_plan();
                var current_host = get_host_name();
                var sub_domain_tracker_ids = CloudflareApps.installs['p2QQF2eis8rF'].options.subdomain_tracker_ids;
                var options = CloudflareApps.installs['p2QQF2eis8rF'].options;
                var product = CloudflareApps.installs['p2QQF2eis8rF'].product;
                if (product && product.id === 'google-analytics-pro' && true) {
                    var subdomain_tracker = sub_domain_tracker_ids.filter(function(item) {
                        return item.subdomain == current_host;
                    });
                    if (subdomain_tracker[0] && subdomain_tracker[0].tracker_id) {
                        send_to_google_analytics(subdomain_tracker[0].tracker_id);
                    } else {
                        send_to_google_analytics(CloudflareApps.installs['p2QQF2eis8rF'].options.tracker_id);
                    }
                } else {
                    send_to_google_analytics(CloudflareApps.installs['p2QQF2eis8rF'].options.tracker_id);
                }
            }

            function send_to_google_analytics(tracker_id) {
                console.log('CF-GA: ' + get_host_name() + " is using " + tracker_id);
                if (tracker_id != "UA-XXXXX-Y") {
                    var gtag = function gtag() {
                        dataLayer.push(arguments);
                    };
                    var url = "https://www.googletagmanager.com/gtag/js?id=" + tracker_id;
                    (function(i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function() {
                            (i[r].q = i[r].q || []).push(arguments);
                        }, i[r].l = 1 * new Date();
                        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, 'script', url, 'ga');
                    window.dataLayer = window.dataLayer || [];
                    gtag('js', new Date());
                    gtag('config', tracker_id);
                }
            }
            init();
        })
    });
};
if (CloudflareApps.matchPage(CloudflareApps.installs['3SF7sYv4Ccnz'].URLPatterns)) {
    (function() {
        'use strict'
        var element
        var options = CloudflareApps.installs['3SF7sYv4Ccnz'].options

        function updateElement() {
            element = CloudflareApps.createElement(options.location, element)
            for (var i = 0; i < options.buttons.length; i++) {
                var link = options.buttons[i].url
                var target = options.buttons[i].targetBlank
                var text = options.buttons[i].text
                var color = options.buttons[i].color
                var backgroundColor = options.buttons[i].backgroundColor
                var borderRadius = options.buttons[i].borderRadius
                var horizontalAlignment = options.horizontalAlignment
                var stacked = options.stacked
                element.setAttribute('app', 'button-builder')
                element.setAttribute('data-horizontal-alignment', horizontalAlignment)
                if (stacked) {
                    element.setAttribute('data-stacked', stacked)
                }
                var buttonContent = document.createElement('a')
                if (link) {
                    buttonContent.setAttribute('href', link)
                    if (target) {
                        buttonContent.setAttribute('target', '_blank')
                    }
                }
                buttonContent.innerHTML = text
                buttonContent.className = 'button-content'
                buttonContent.style.color = color
                buttonContent.style.backgroundColor = backgroundColor
                buttonContent.setAttribute('role', 'button')
                buttonContent.setAttribute('data-size', options.buttons[i].fontSize)
                element.appendChild(buttonContent)
                buttonContent.style.borderRadius = (buttonContent.clientHeight / 2 * borderRadius).toFixed(2) + 'px'
            }
        }
        window.CloudflareApps.installs['3SF7sYv4Ccnz'].scope = {
            setOptions: function setOptions(nextOptions) {
                options = nextOptions
                updateElement()
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateElement)
        } else {
            updateElement()
        }
    }())
};
(function() {
    try {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIHsKCWRpc3BsYXk6IGZsZXg7CglmbGV4LWRpcmVjdGlvbjogcm93OwoJZmxleC1mbG93OiByb3cgd3JhcDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdW2RhdGEtc3RhY2tlZD0idHJ1ZSJdIHsKCWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJsZWZ0Il0gewoJanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OwoJYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJjZW50ZXIiXSB7CglqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKCWFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJyaWdodCJdIHsKCWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CglhbGlnbi1pdGVtczogZmxleC1lbmQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSBhLmJ1dHRvbi1jb250ZW50IHsKCWN1cnNvcjogcG9pbnRlcjsKCXBhZGRpbmc6IDEwcHggMjBweDsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKCXRleHQtZGVjb3JhdGlvbjogbm9uZTsKCWxpbmUtaGVpZ2h0OiBub3JtYWw7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSBhLmJ1dHRvbi1jb250ZW50IHsKCW1hcmdpbjogMTBweCAwIDEwcHggMTBweDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGEuYnV0dG9uLWNvbnRlbnQ6Zmlyc3QtY2hpbGQgewoJbWFyZ2luLWxlZnQ6IDA7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXVtkYXRhLXN0YWNrZWQ9InRydWUiXSBhLmJ1dHRvbi1jb250ZW50IHsKCW1hcmdpbi1sZWZ0OiAwOwoJbWFyZ2luLXRvcDogNXB4OwoJbWFyZ2luLWJvdHRvbTogNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJ1dHRvbi1idWlsZGVyIl1bZGF0YS1zdGFja2VkPSJ0cnVlIl0gYS5idXR0b24tY29udGVudDpmaXJzdC1jaGlsZCB7CgltYXJnaW4tdG9wOiAxMHB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJ1dHRvbi1idWlsZGVyIl0gLmJ1dHRvbi1jb250ZW50W2hyZWZdIHsKCWN1cnNvcjogcG9pbnRlcjsKCXBvaW50ZXItZXZlbnRzOiBhbGw7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSAgYS5idXR0b24tY29udGVudCwKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdICBhLmJ1dHRvbi1jb250ZW50OmxpbmssCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSAgYS5idXR0b24tY29udGVudDpob3ZlciwKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdICBhLmJ1dHRvbi1jb250ZW50OmFjdGl2ZSB7Cgljb2xvcjogaW5oZXJpdDsKCW91dGxpbmU6IG5vbmU7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSAgYS5idXR0b24tY29udGVudDpob3ZlciB7CglvcGFjaXR5OiAuODsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGEuYnV0dG9uLWNvbnRlbnRbZGF0YS1zaXplPSJzbWFsbCJdICB7Cglmb250LXNpemU6IDAuODVlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciIgYS5idXR0b24tY29udGVudF1bZGF0YS1zaXplPSJub3JtYWwiXSB7Cglmb250LXNpemU6IDEuMDBlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGEuYnV0dG9uLWNvbnRlbnRbZGF0YS1zaXplPSJsYXJnZSJdIHsKCWZvbnQtc2l6ZTogMS4yNWVtOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJ1dHRvbi1idWlsZGVyIl0gYS5idXR0b24tY29udGVudFtkYXRhLXNpemU9Imh1Z2UiXSB7Cglmb250LXNpemU6IDEuNTBlbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJidXR0b24tYnVpbGRlciJdIGFbZGF0YS1jb3JuZXJzPSJyYWRpdXMiXSB7Cglib3JkZXItcmFkaXVzOiAzcHg7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYnV0dG9uLWJ1aWxkZXIiXSBhW2RhdGEtY29ybmVycz0icm91bmQiXSB7Cglib3JkZXItcmFkaXVzOiAxMDAwcHg7Cn0=';
        document.getElementsByTagName('head')[0].appendChild(link);
    } catch (e) {}
})();