(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
Camera.ɵfac = function Camera_Factory(t) { return ɵCamera_BaseFactory(t || Camera); };
Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Camera, factory: function (t) { return Camera.ɵfac(t); } });
var ɵCamera_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Camera);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtBQUMxQixJQUFDLDZEQUFZLENBQUE7QUFBQyxJQUNiLDZEQUFRLENBQUE7QUFBQyxJQUNULGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0FBQ3ZCLElBQUMsK0NBQVEsQ0FBQTtBQUFDLElBQ1QsNkNBQUcsQ0FBQTtBQUNMLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7QUFDcEIsSUFBQywrQ0FBVyxDQUFBO0FBQUMsSUFDWiwyQ0FBSyxDQUFBO0FBQUMsSUFDTixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtBQUM1QixJQUFDLHlFQUFnQixDQUFBO0FBQUMsSUFDakIsNkRBQU0sQ0FBQTtBQUFDLElBQ1AsK0VBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQU1YO0FBTkQsV0FBWSxxQkFBcUI7QUFDaEMsSUFBQyx5RUFBWSxDQUFBO0FBQUMsSUFDYiw2RUFBVSxDQUFBO0FBQUMsSUFDWCw2RUFBVSxDQUFBO0FBQUMsSUFDWCwrRUFBVyxDQUFBO0FBQUMsSUFDWiwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0FBQ3BCLElBQUMseUNBQVEsQ0FBQTtBQUFDLElBQ1QsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQUNEO0FBSVcsSUFnRGlCLGtDQUFpQjtBQUFDO0FBRTlCO0FBR0ssUUFKbkI7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLHFCQUFlLEdBQUc7QUFDcEIsWUFBSSxnS0FBZ0s7QUFDcEssWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksNEVBQTRFO0FBQ2hGLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLDBEQUEwRDtBQUM5RCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGtCQUFZLEdBQUc7QUFDakIsWUFBSSxnQ0FBZ0M7QUFDcEMsWUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFlBQUksK0JBQStCO0FBQ25DLFlBQUksR0FBRyxFQUFFLENBQUM7QUFDVixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSxlQUFTLEdBQUc7QUFDZCxZQUFJLHdHQUF3RztBQUM1RyxZQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsWUFBSSxzREFBc0Q7QUFDMUQsWUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFlBQUksMkNBQTJDO0FBQy9DLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSx1QkFBaUIsR0FBRztBQUN0QixZQUFJLDJFQUEyRTtBQUMvRSxZQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25CLFlBQUksK0JBQStCO0FBQ25DLFlBQUksTUFBTSxFQUFFLENBQUM7QUFDYixZQUFJLDhFQUE4RTtBQUNsRixZQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLDJCQUFxQixHQUFHO0FBQzFCLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsWUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixZQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGVBQVMsR0FBRztBQUNkLFlBQUksaUNBQWlDO0FBQ3JDLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLGtDQUFrQztBQUN0QyxZQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDJCQUFVLGFBQUMsT0FBdUI7QUFLUyxJQU8zQyx3QkFBTztBQUk0QztBQUFrQztBQUE2QztBQUEyQztBQUFxRTtJQTVGdk8sTUFBTSxnQ0FEbEIsVUFBVSxFQUFFLFFBQ0EsTUFBTTs7Ozs7MEJBQUU7QUFBQyxpQkE5S3RCO0FBQUUsRUE4SzBCLGlCQUFpQjtBQUM1QyxTQURZLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSVxufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBKUEVHID0gMCxcbiAgUE5HXG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XG4gIFBJQ1RVUkUgPSAwLFxuICBWSURFTyxcbiAgQUxMTUVESUFcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTVxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xuICBBUlJPV19VUCA9IDEsXG4gIEFSUk9XX0RPV04sXG4gIEFSUk9XX0xFRlQsXG4gIEFSUk9XX1JJR0hULFxuICBBUlJPV19BTllcbn1cblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgQkFDSyA9IDAsXG4gIEZST05UXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRha2UgYSBwaG90byBvciBjYXB0dXJlIHZpZGVvLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbWVyYWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIENhbWVyYSBQbHVnaW4gRG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEpLlxuICpcbiAqIFtXYXJuaW5nXSBTaW5jZSBJT1MgMTAgdGhlIGNhbWVyYSByZXF1aXJlcyBwZXJtaXNzaW9ucyB0byBiZSBwbGFjZWQgaW4geW91ciBjb25maWcueG1sIGFkZFxuICogYGBgeG1sXG4gKiA8Y29uZmlnLWZpbGUgcGFyZW50PVwiTlNDYW1lcmFVc2FnZURlc2NyaXB0aW9uXCIgcGxhdGZvcm09XCJpb3NcIiB0YXJnZXQ9XCIqLUluZm8ucGxpc3RcIj5cbiAqICA8c3RyaW5nPllvdSBjYW4gdGFrZSBwaG90b3M8L3N0cmluZz5cbiAqIDwvY29uZmlnLWZpbGU+XG4gKiBgYGBcbiAqIGluc2lkZSBvZiB0aGUgPHBsYXRmb3JtIG5hbWU9J2lvcz4gc2VjdGlvblxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3Qgb3B0aW9uczogQ2FtZXJhT3B0aW9ucyA9IHtcbiAqICAgcXVhbGl0eTogMTAwLFxuICogICBkZXN0aW5hdGlvblR5cGU6IHRoaXMuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSxcbiAqICAgZW5jb2RpbmdUeXBlOiB0aGlzLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcbiAqICAgbWVkaWFUeXBlOiB0aGlzLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRVxuICogfVxuICpcbiAqIHRoaXMuY2FtZXJhLmdldFBpY3R1cmUob3B0aW9ucykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgLy8gaW1hZ2VEYXRhIGlzIGVpdGhlciBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBvciBhIGZpbGUgVVJJXG4gKiAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcbiAqICBsZXQgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xuICogfSwgKGVycikgPT4ge1xuICogIC8vIEhhbmRsZSBlcnJvclxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYW1lcmFPcHRpb25zXG4gKiBDYW1lcmFQb3BvdmVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbWVyYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jYW1lcmEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXG4gICAqL1xuICBEZXN0aW5hdGlvblR5cGUgPSB7XG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xuICAgIERBVEFfVVJMOiAwLFxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cbiAgICBGSUxFX1VSSTogMSxcbiAgICAvKiogUmV0dXJuIG5hdGl2ZSB1cmkgKGVnLiBhc3NldC1saWJyYXJ5Oi8vLi4uIGZvciBpT1MpICovXG4gICAgTkFUSVZFX1VSSTogMlxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRW5jb2RpbmdUeXBlID0ge1xuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXG4gICAgSlBFRzogMCxcbiAgICAvKiogUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlICovXG4gICAgUE5HOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBNZWRpYVR5cGUgPSB7XG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULiBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGUgKi9cbiAgICBQSUNUVVJFOiAwLFxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgT05MWSBSRVRVUk5TIFVSTCAqL1xuICAgIFZJREVPOiAxLFxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXMgKi9cbiAgICBBTExNRURJQTogMlxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBQSE9UT0xJQlJBUlkgZm9yIEFuZHJvaWQpICovXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cbiAgICBDQU1FUkE6IDEsXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XG4gICAgQVJST1dfVVA6IDEsXG4gICAgQVJST1dfRE9XTjogMixcbiAgICBBUlJPV19MRUZUOiA0LFxuICAgIEFSUk9XX1JJR0hUOiA4LFxuICAgIEFSUk9XX0FOWTogMTVcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIERpcmVjdGlvbiA9IHtcbiAgICAvKiogVXNlIHRoZSBiYWNrLWZhY2luZyBjYW1lcmEgKi9cbiAgICBCQUNLOiAwLFxuICAgIC8qKiBVc2UgdGhlIGZyb250LWZhY2luZyBjYW1lcmEgKi9cbiAgICBGUk9OVDogMVxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGEgcGljdHVyZSBvciB2aWRlbywgb3IgbG9hZCBvbmUgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldFBpY3R1cmUob3B0aW9ucz86IENhbWVyYU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW50ZXJtZWRpYXRlIGltYWdlIGZpbGVzIHRoYXQgYXJlIGtlcHQgaW4gdGVtcG9yYXJ5IHN0b3JhZ2UgYWZ0ZXIgY2FsbGluZyBjYW1lcmEuZ2V0UGljdHVyZS5cbiAgICogQXBwbGllcyBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIENhbWVyYS5zb3VyY2VUeXBlIGVxdWFscyBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBIGFuZCB0aGUgQ2FtZXJhLmRlc3RpbmF0aW9uVHlwZSBlcXVhbHMgQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgY2xlYW51cCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js ***!
  \****************************************************************************/
/*! exports provided: WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var WebView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebView.prototype, "convertFileSrc", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "convertFileSrc"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "convertFileSrc", value); },
        enumerable: true,
        configurable: true
    });
    WebView.pluginName = "WebView";
    WebView.plugin = "cordova-plugin-ionic-webview";
    WebView.pluginRef = "window.Ionic.WebView";
    WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebView.platforms = ["Android", "iOS"];
    WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
WebView.ɵfac = function WebView_Factory(t) { return ɵWebView_BaseFactory(t || WebView); };
WebView.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebView, factory: function (t) { return WebView.ɵfac(t); } });
var ɵWebView_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](WebView);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return WebView;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaW9uaWMtd2Vidmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDaEY7QUFJSyxJQTBCd0IsbUNBQWlCO0FBQUM7QUFHL0I7QUFBeUU7QUFBTSwwQkFHN0YsbUNBQWM7QUFBSTtBQUdtQztBQUFzRjtBQUEwQjtBQUEyQjtBQUFRO0FBQW9DO0FBQXFEO0FBQWdEO0FBQWlGO0FBQTRDO0lBVG5jLE9BQU8sZ0NBRG5CLFVBQVUsRUFBRSxRQUNBLE9BQU87Ozs7OzBCQUFFO0FBQUMsa0JBaEN2QjtBQUFFLEVBZ0MyQixpQkFBaUI7QUFFOUMsU0FGYSxPQUFPO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFdlYiBWaWV3IHV0aWxpdGllcy5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3YCA+IDIuMC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0lvbmljIFdlYiBWaWV3XShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3KSByZXBvc2l0b3J5LlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYnZpZXc6IFdlYlZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGltZyA9IHRoaXMud2Vidmlldy5jb252ZXJ0RmlsZVNyYygnZmlsZTovLy9Vc2Vycy9kYW4vY2FtZXJhLWltYWdlLTEyMzQ1LnBuZycpXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViVmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuSW9uaWMuV2ViVmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4taW9uaWMtd2Vidmlldydcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ29udmVydCBhIGBmaWxlOi8vYCBVUkwgdG8gYSBVUkwgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGxvY2FsIHdlYiBzZXJ2ZXIgaW4gdGhlIFdlYiBWaWV3IHBsdWdpbi5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb252ZXJ0RmlsZVNyYzogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/carmodel/carmodel.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/carmodel/carmodel.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n    \n   <div class=\"ion-text-end\">\n     <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n       <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n     </ion-button>\n   </div>\n   <div class=\"ion-padding\">\n \n    <ion-list>\n      <ion-item  class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCarItem(p)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n \n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              1\n            </ion-col>\n \n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCarItem(p)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n \n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCarItem(p)\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"9\">\n              <b>Nashik To Pune</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              $1550\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              Total: $2000\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              <!-- {{ getTotal() | currency:'USD' }} -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n \n    <ion-button expand=\"full\" (click)=\"checkout()\">\n      Picked Up\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/popover/popover.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/popover/popover.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <!-- <ion-card> -->\n      <!-- <ion-card-content> -->\n      <div class=\"card\">\n        <!-- <img class=\"card-img-top\" slot=\"end\" src=\"../../../../assets/x-png-15.png\" \n        style=\"width:20px;height:20px\" alt=\"Card image cap\"> -->\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" style=\"color: rgb(230, 112, 17) !important;\">प्रदर्शन चौकशी </h5>\n          <p class=\"card-text\" style=\"color: rgb(230, 112, 17) !important;\"> ग्राहक आयडी : TP12345</p>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\" style=\"color: rebeccapurple !important;\">क्लायंट नाव : श्री सोनवणे सर</li>\n          <li class=\"list-group-item\" style=\"color: rebeccapurple !important;\">प्रस्थान तारीख : 2020-08-12</li>\n          <li class=\"list-group-item\" style=\"color: rebeccapurple !important;\">प्रवासी संख्या : 2</li>\n          <li class=\"list-group-item\" style=\"color: rebeccapurple !important;\">संकलन स्थान: नाशिक</li>\n          <li class=\"list-group-item\" style=\"color: rebeccapurple !important;\">ड्रॉप स्थान: पुणे</li>\n        </ul>\n        <div class=\"card-body\">\n          <ion-button color=\"primary\" shape=\"round\"\n            (click)=\"navigate2res()\">स्वीकारा</ion-button>\n          <ion-button color=\"danger\" (click)=\"changeView()\"  shape=\"round\"\n            (click)=\"navigate1res()\">नाकारणे</ion-button>\n        </div>\n      </div>\n    <!-- </ion-card-content> -->\n    <!-- </ion-card> -->\n    \n  </div>\n  \n  \n</ion-content>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/add-passengers/add-passengers.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/add-passengers/add-passengers.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <ion-header no-border>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-10>\n        <img class=\"bg-header animated fadeIn\" src=\"assets/imgs/bg-header.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-2>\n        <ion-segment [(ngModel)]=\"segment\" color=\"white\">\n            <ion-segment-button value=\"home\">\n              <ion-icon name=\"home\" color=\"danger\"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value=\"view\">\n                <ion-icon name=\"eye\"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value=\"add\">\n              <ion-icon name=\"bookmarks-outline\" color=\"warning\"></ion-icon>            </ion-segment-button>\n          </ion-segment>\n    </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n  <ion-toolbar padding>\n    \n      <div [ngSwitch]=\"segment\">\n          <ion-list *ngSwitchCase=\"'home'\">\n  \n            <ion-card class=\"animated pulse\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-2>\n                    <ion-card-content color=\"danger\">\n                      <!-- <div class=\"image\"> -->\n                      \n                      <ion-icon name=\"car\"  style=\"font-size: 30px; padding-right: 40px; border-right: 3px solid;\"></ion-icon>\n                    <!-- </div> -->\n                    </ion-card-content>\n                  </ion-col>\n                  <ion-col col-10>\n                    <!-- <ion-card-content> -->\n                      <p class=\"gray\">\n                      Client's Number :7588303888  \n                      Shared Ride From Malegaon to Nashik\n                    </p>\n                    <!-- </ion-card- content> -->\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n  \n          </ion-list>\n        \n          <ion-list *ngSwitchCase=\"'view'\">\n            \n              <ion-card class=\"animated pulse\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-card-content color=\"danger\">\n                          <ion-icon name=\"car\" style=\"font-size: 30px; padding-right: 40px; border-right: 3px solid;\"></ion-icon>\n                        </ion-card-content>\n                      </ion-col>\n                      <ion-col col-10>\n                        <ion-card-content>\n                          <p class=\"gray\">\n                          <b>Shared Ride Config: MH 15 AD 8756 \n\n                          </b> \n                        </p>\n                        </ion-card-content>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card>\n            \n          </ion-list>\n  \n          <ion-list *ngSwitchCase=\"'add'\">\n  \n              <ion-card class=\"animated pulse\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-4>\n                        <ion-card-content color=\"danger\">\n                          <ion-icon name=\"map\" style=\"font-size: 30px; padding-right: 40px; border-right: 3px solid;\"></ion-icon>\n                        </ion-card-content>\n                      </ion-col>\n                      <ion-col col-8>\n                        <ion-card-content>\n                          <p class=\"gray\">\n                          <b>Ride Complete</b>\n                        </p>\n                        </ion-card-content>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card>\n              \n          </ion-list>\n        </div>\n    \n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div [ngSwitch]=\"segment\">\n      <div *ngSwitchCase=\"'home'\" class=\"animated fadeIn\">\n\n        <ion-item>\n          <!-- <ion-label stacked>Enter Your Name</ion-label> -->\n          <!-- <ion-input [(ngModel)]=\"nameInput\"></ion-input> -->\n        </ion-item>\n<!-- \n        <div padding>\n          <ion-button margin-left outline (click)=\"name=nameInput\">\n              Enter\n          </ion-button>\n        </div> -->\n\n    </div>\n    <div *ngSwitchCase=\"'view'\" class=\"animated fadeIn\">\n\n        <ion-card>\n          <div class=\"cut\" (click)=\"view()\">\n              <img src=\"../../../../assets/200.webp\" style=\"width:700px;height: 150px;\" >\n          </div>\n            <div padding-bottom padding-left padding-right>\n            <ion-card-content>\n              <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button (click)=\"openCar()\" #car>\n                  <div class=\"car-length\">{{carItemCount | async}}</div>\n                  <ion-icon name=\"car-sport\" class=\"car-icon\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n              <ion-list>\n                <ion-card *ngFor=\"let p of products\">\n                  <ion-card-header>\n                    <ion-card-title>\n                     Client Name: {{p.name}}\n                    </ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-row class=\"ion-align-items-center\">\n                      <ion-col size=\"8\">\n                        <ion-label color=\"secondary\">\n                          <b>{{p.price | currency:'USD'}}</b>\n                        </ion-label>\n                      </ion-col>\n                       <ion-col size=\"4\" class=\"ion-text-right\">\n                         <ion-button fill=\"clear\" (click)=\"addToCar(p)\">\n                           <ion-icon name=\"add\"></ion-icon>\n                         </ion-button>\n                       </ion-col>\n                    </ion-row>\n                  </ion-card-content>\n                </ion-card> \n              </ion-list>\n            </ion-card-content>\n            <ion-row>\n              <ion-col>\n                <ion-button icon-start clear small (click)=\"editor()\">\n                  <ion-icon name=\"options\"></ion-icon>\n                  <div>Confirm</div>\n                </ion-button>\n              </ion-col>\n              <!-- <ion-col>\n                <button ion-button icon-start clear small color=\"danger\" (click)=\"delete()\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                  <div>Delete</div>\n                </button>\n              </ion-col> -->\n            </ion-row>\n          </div>\n        </ion-card>\n\n    </div>\n    <div *ngSwitchCase=\"'add'\" class=\"animated fadeIn\">\n\n        <ion-list>\n            <ion-item>\n              <ion-label stacked>Name</ion-label>\n              <ion-input [(ngModel)]=\"product.name\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Estimated Total =$1990</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"product.price\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Gross Earning : $2000 </ion-label>\n                <ion-select [(ngModel)]=\"product.currency\">\n                      <ion-option value=\"OMR\">OMR</ion-option>\n                      <ion-option value=\"USD\">USD</ion-option>\n                  </ion-select>\n              </ion-item>\n            <div text-center margin-top padding>\n              <ion-button *ngIf=\"!product.id\"  margin-right (click)=\"add()\" block>\n                Ride Complete\n              </ion-button>\n              <!-- <ion-button *ngIf=\"product.id\" ion-button margin-right (click)=\"edit()\" block>\n                Save\n              </ion-button> -->\n            </div>\n          </ion-list>\n\n    </div>\n  </div>\n</ion-content>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/add-vehicles/add-vehicles.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/add-vehicles/add-vehicles.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"align\" color=\"danger\">\n        <b>List of Vehicles Registered</b>\n        </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content class=\"ion-padding\">\n\n<!-- <h1>List of Vehicles Registered</h1> -->\n<table class=\"rwd-table\">\n  <tr>\n    <th>Car Name</th>\n    <th>Car Type</th>\n    <th>Year</th>\n    <th>Gross</th>\n  </tr>\n  <tr>\n    <td data-th=\"Car Name  \"  >Hyundai Creta</td>\n    <td data-th=\"Genre     \"  >Sedan</td>\n    <td data-th=\"Year      \"  >2015</td>\n    <td data-th=\"Gross     \"  >$460,935,665</td>\n  </tr>\n  <tr>\n    <td data-th=\"Car Name  \"   >Mahindra Xuv 500</td>\n    <td data-th=\"Genre     \"   >Luxurious</td>\n    <td data-th=\"Year      \"   >2010</td>\n    <td data-th=\"Gross     \"   >$16,295,774</td>\n  </tr>\n  \n</table>\n\n<p>&larr; &rarr;</p>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/bank-details/bank-details.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/bank-details/bank-details.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"ion-text-center\" style=\"margin-right: 2.5rem;\" color=\"danger\" >\n        <b>Edit Profile</b>\n      </ion-title>\n      \n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <div style=\"text-align: center;\">\n      <ion-card>\n      <img src=\"../../../../assets/504-5040528_empty-profile-picture-png-transparent-png.png\"\n     \n      alt=\"\">\n    </ion-card>\n  </div>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <div style=\"text-align: center;\">\n      <ion-card-title>\n        <b>Vardan Hingmire</b>\n        <p>\n          GMCabs Team\n        </p>\n        </ion-card-title>\n      </div>\n      \n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n    <ion-card-content>\n      <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"schedule\">\n            <ion-icon name=\"calendar\" (click)=\"navigatetoprofile()\"></ion-icon>\n            <ion-label (click)=\"navigatetoprofile()\">Edit Profile</ion-label>\n            <!-- <ion-badge></ion-badge> -->\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"speakers\"  >\n            <ion-icon name=\"briefcase\" (click)=\"navigatetobankDetails()\"></ion-icon>\n            <ion-label (click)=\"navigatetobankDetails()\">Bank Details</ion-label>\n            <ion-badge>2</ion-badge>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"map\">\n            <ion-icon name=\"map\"></ion-icon>\n            <ion-label>Support</ion-label>\n          </ion-tab-button>\n      \n        </ion-tab-bar>\n      </ion-tabs>\n      <ion-list >\n\n        <ion-item>\n          <ion-label position=\"floating\">Account Holder Name</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">Account Number</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">IFSC Code</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Select UPI</ion-label>\n          <ion-select value=\"none\">\n            <ion-select-option value=\"PhonePay\">PhonePay</ion-select-option>\n            <ion-select-option value=\"GooglePay\">GooglePay</ion-select-option>\n            <ion-select-option value=\"AmazonPay\">AmazonPay </ion-select-option>\n            <ion-select-option value=\"Paypal\">Other</ion-select-option>\n\n          </ion-select>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">UPI ID/Mobile Number</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        \n      </ion-list>\n    \n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card> -->\n    <!-- <ion-card-content> -->\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <ion-button color=\"danger\" (click)=\"navigate()\" >\n             Save Changes\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    <!-- </ion-card-content> -->\n  <!-- </ion-card> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/cart/cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/cart/cart.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n    <ion-toolbar >\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\"></ion-back-button>\n          </ion-buttons>\n      <ion-title class=\"align\" color=\"danger\">\n      <b>Cart</b>\n      </ion-title>\n      \n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" >\n \n    <ion-card>\n        <ion-card-content>\n   \n            <h5><b>Monday, November 25th</b></h5>\n            <ion-grid class=\"ion-no-padding\">\n         <ion-row class=\"ion-margin-top\">\n                <ion-col class=\"ion-no-padding\" size=\"3\">\n                    <ion-card-title>\n                       <ion-avatar item-start>\n              <img src=\"../../../../assets/Img/Cuisine2.jpg\">\n            </ion-avatar>\n                </ion-card-title>\n                </ion-col>\n                <ion-col class=\"ion-align-self-center\" size=\"6\">\n                    <span color=\"danger\">1 Italian crusty bread</span>\n         \n \n                </ion-col>\n                <ion-col class=\"ion-align-self-center\" size=\"3\">\n                    <span  class=\"ion-float-right\">$22</span> \n                </ion-col>\n              </ion-row>\n              <ion-row >\n                  <ion-col size=\"12\">\n                      <span>Special Requests: Extra Tomato Sauce</span>\n                  </ion-col>\n               \n                </ion-row>\n              <ion-row >\n                <ion-col size=\"7\">\n                    <span>Preferred Pick-up</span>\n                </ion-col>\n                <ion-col size=\"5\">\n                    <span class=\"ion-float-right\">7.00-7.30PM</span>\n\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n        \n            </ion-card-content>\n      </ion-card>\n      \n    <ion-card>\n        <ion-card-content>\n   \n            <h5><b>Tuesday, November 26th</b></h5>\n            <ion-grid class=\"ion-no-padding\">\n         <ion-row class=\"ion-margin-top\">\n                <ion-col class=\"ion-no-padding\" size=\"3\">\n                    <ion-card-title>\n                       <ion-avatar item-start>\n              <img src=\"../../../../assets/Img/Cuisine3.jpg\">\n            </ion-avatar>\n                </ion-card-title>\n                </ion-col>\n                <ion-col  class=\"ion-align-self-center\" size=\"6\">\n                    <span color=\"danger\">1 Spicy Penne Pasta</span>\n          \n                </ion-col>\n                <ion-col class=\"ion-align-self-center\" size=\"3\">\n                    <span class=\"ion-float-right\">$18</span> \n                </ion-col>\n              </ion-row>\n              <ion-row >\n                  <ion-col size=\"12\">\n                      <span>Special Requests: Extra cheese</span>\n                  </ion-col>\n           \n                </ion-row>\n              <ion-row >\n                <ion-col size=\"7\">\n                    <span>Preferred Pick-up</span>\n                </ion-col>\n                <ion-col size=\"5\">\n                    <span class=\"ion-float-right\">7.00-7.30PM</span>\n\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n        \n            </ion-card-content>\n      </ion-card>\n\n\n      <ion-card>\n          <ion-card-content>\n     \n              <h5><b>Wednesday, November 27th</b></h5>\n              <ion-grid class=\"ion-no-padding\">\n           <ion-row class=\"ion-margin-top\">\n                  <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-card-title>\n                         <ion-avatar item-start>\n                <img src=\"../../../../assets/Img/Cuisine4.jpg\">\n              </ion-avatar>\n                  </ion-card-title>\n                  </ion-col>\n                  <ion-col class=\"ion-align-self-center\" size=\"6\">\n                      <span color=\"danger\">Sesame Noodle Bowl</span>\n           \n   \n                  </ion-col>\n                  <ion-col class=\"ion-align-self-center\" size=\"3\">\n                      <span  class=\"ion-float-right\">$20</span> \n                  </ion-col>\n                </ion-row>\n                <ion-row >\n                    <ion-col size=\"7\">\n                        <span>Special Requests:</span>\n                    </ion-col>\n                 \n                  </ion-row>\n                <ion-row >\n                  <ion-col size=\"7\">\n                      <span>Preferred Pick-up</span>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                      <span class=\"ion-float-right\">7.00-7.30PM</span>\n  \n                  </ion-col>\n                </ion-row>\n                </ion-grid>\n          \n              </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n       \n                <!-- <h5><b>Monday, November 27th</b></h5> -->\n                <ion-grid class=\"ion-no-padding\">\n         \n                  <ion-row >\n                      <ion-col size=\"7\">\n                          <span><b>Subtotal</b></span>\n                      </ion-col>\n                      <ion-col size=\"5\">\n                          <span class=\"ion-float-right\"><b>$60</b></span>\n      \n                      </ion-col>\n                    </ion-row>\n                  <ion-row >\n                    <ion-col size=\"7\">\n                        <span><b>Tax</b></span>\n                    </ion-col>\n                    <ion-col size=\"5\">\n                        <span class=\"ion-float-right\"><b>$8</b></span>\n    \n                    </ion-col>\n                  </ion-row>\n                  <ion-row >\n                      <ion-col size=\"7\">\n                          <span><b>Total</b></span>\n                      </ion-col>\n                      <ion-col size=\"5\">\n                          <span class=\"ion-float-right\"><b>$68</b></span>\n      \n                      </ion-col>\n                    </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                    <ion-list>\n                        <span class=\"ion-no-padding\">\n                         <b> Payment</b>\n                        </span>\n                        <ion-icon style=\"font-size: 20px;\" color=\"primary\" class=\"ion-float-right\" name=\"card\"></ion-icon>\n                        </ion-list>\n                        <ion-list class=\"ion-no-padding\">\n                            <ion-label><b> Master Card </b></ion-label>\n                            <ion-checkbox class=\"ion-float-right\" checked=\"true\"></ion-checkbox>\n                        </ion-list>\n\n                </ion-col>\n              </ion-row>\n                  </ion-grid>\n            \n                </ion-card-content>\n          </ion-card>\n          <ion-button color=\"danger\" expand=\"block\" (click)=\"NavigateToOrders()\">\n              Place Order\n            </ion-button>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button >\n            <ion-icon color=\"danger\" name=\"pizza\"></ion-icon>\n              <ion-label color=\"danger\">Menu</ion-label>\n          </ion-tab-button>\n          <ion-tab-button [routerLink]=\"[ '/main/orders' ]\">\n         <ion-icon  name=\"list-box\"></ion-icon>            \n               <ion-label >Orders</ion-label>\n          </ion-tab-button>\n          <ion-tab-button (click)=\"logoutMsg()\">\n              <ion-icon name=\"person\"></ion-icon> \n             <ion-label>Account</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n    </ion-toolbar>\n  </ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/dashboard-menu/dashboard-menu.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/dashboard-menu/dashboard-menu.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<ion-header>\n    <ion-toolbar class=\"ion-text-center\">\n \n      <ion-title color=\"danger\" >\n          <ion-buttons slot=\"start\">\n              <ion-menu-button style=\"color: #f04141\"></ion-menu-button>\n            </ion-buttons>\n      <b>GM Cabs</b>\n      </ion-title>\n      <div style=\"color:#f04141;font-size: 12px;margin-top: 5px;\">\n       <span>\n         <b>\n      < &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Monday,&nbsp; Nov 10th &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; >\n    </b>\n        </span> \n       </div>\n    </ion-toolbar>\n</ion-header> -->\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button ></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\" style=\"margin-right: 2.5rem;\" color=\"danger\" >\n          <b>GM Cabs</b>\n          </ion-title>\n          <!-- <div class=\"ion-text-center\" style=\"color:#f04141;font-size: 12px;margin-top: 5px;margin-right:10px ;\">\n           <span>\n             <b>\n          < &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Monday,&nbsp; Nov 25th &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; >\n        </b>\n            </span> \n           </div> -->\n  </ion-toolbar>\n\n</ion-header>\n<ion-content class=\"ion-padding no-scroll\" >\n \n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/driver-map/driver-map.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/driver-map/driver-map.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-navbar color=\"primary\">\n\n    <ion-title>\n      GPS Tracking\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <button ion-button full icon-left (click)=\"StartTracking()\" *ngIf=\"!istracking\">\n     <ion-icon name=\"locate\"></ion-icon>\n     Start Tracking\n   </button>\n   <button ion-button full icon-left (click)=\"StopTracking()\" *ngIf=\"istracking\">\n    <ion-icon name=\"hand\"></ion-icon>\n    Stop Tracking\n  </button>\n  \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/forgot-password/forgot-password.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n    <ion-toolbar >\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\"></ion-back-button>\n          </ion-buttons>\n          <ion-title class=\"align\" color=\"danger\">\n              <b>Password Reset</b>\n              </ion-title>\n      \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" >\n \n    <ion-row >\n        <ion-col class=\"ion-text-center\">\n          <img class=\"logo\" src=\"../../assets/Img/icons8-viking-helmet-100 (1).png\" height=\"100px\" width=\"100px\" />\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top: -35px;\">\n          <ion-col class=\"ion-text-center\">\n            <h3><b>VIKING FOOD</b></h3>\n  </ion-col>\n      </ion-row>\n      <ion-row >\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <h3>Please enter your sign up email and you will receive a link to reset password shortly </h3>\n  </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <!-- <ion-list > -->\n            <ion-card>\n            <ion-item>\n            \n              <ion-input type=\"text\" placeholder=\"Email Address\"  ></ion-input>\n             \n            </ion-item>\n          </ion-card>\n        \n          <!-- </ion-list> -->\n        </ion-col>\n      </ion-row>\n    \n  \n\n        <ion-row>\n    \n            <ion-col >\n              \n                <ion-button color=\"danger\" (click)=\"submitPassword()\" expand=\"block\" [routerLink]=\"[ '/home' ]\" >\n                  Submit\n                 </ion-button>\n            </ion-col>\n          </ion-row>\n    <!-- </div> -->\n    <!-- </form> -->\n  </ion-content>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/info/info.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/info/info.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"ion-padding\">\n    <form id=\"login-form\" class=\"form\" action=\"\" method=\"post\" novalidate [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\" >\n      <div padding>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <img class=\"logo\" src=\"../../../../assets/GM-Cab_Final-Logo.png\" height=\"100px\" width=\"100px\" />\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -35px;\">\n        <ion-col class=\"ion-text-center\">\n          <h3><b>जीएम कॅब</b></h3>\n  </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <!-- <ion-list > -->\n        <ion-card>\n          <ion-item>\n  \n            <ion-input type=\"text\" formControlName=\"name\" placeholder=\"नाव\"></ion-input>\n  \n          </ion-item>\n        </ion-card>\n        <div *ngFor=\"let error of errorMessages.name\">\n          <ng-container *ngIf=\"name.hasError(error.type) && (name.dirty || name.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <ion-card>\n          <ion-item>\n  \n            <ion-input type=\"text\" formControlName=\"lname\" placeholder=\"आडनाव\"></ion-input>\n  \n          </ion-item>\n        </ion-card>\n        <div *ngFor=\"let error of errorMessages.lname\">\n          <ng-container *ngIf=\"lname.hasError(error.type) && (lname.dirty || lname.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <ion-card>\n          <ion-item>\n  \n            <ion-input type=\"email\" formControlName=\"email\" placeholder=\"ईमेल\" ></ion-input>\n  \n          </ion-item>\n        </ion-card>\n         <div *ngFor=\"let error of errorMessages.email\">\n           <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched )\">\n             <small class=\"error-message\">{{error.message}}</small>\n           </ng-container>\n         </div>\n        <ion-card>\n          <ion-item>\n  \n            <ion-input type=\"Number\" formControlName=\"phone\" placeholder=\"मोबाइल नंबर\"></ion-input>\n  \n          </ion-item>\n        </ion-card>\n        <div *ngFor=\"let error of errorMessages.phone\">\n          <ng-container *ngIf=\"phone.hasError(error.type) && (phone.dirty || phone.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <!-- <ion-card>\n          <ion-item>\n  \n            <ion-input type=\"OTP\" formControlName=\"Otp\" placeholder=\"ओटीपी प्रविष्ट करा\" ></ion-input>\n  \n          </ion-item>\n        </ion-card> -->\n        <!-- <div *ngFor=\"let error of errorMessages.Otp\">\n          <ng-container *ngIf=\"Otp.hasError(error.type) && (Otp.dirty || Otp.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div> -->\n\n        <!-- <ion-card>\n          <ion-item>\n  \n            <ion-input type=\"email\" placeholder=\"Mobile Number\" ></ion-input>\n  \n          </ion-item>\n        </ion-card> -->\n  \n        <!-- <ion-card>\n            <ion-item>\n    \n              <ion-input type=\"Number\" placeholder=\"Enter OTP\" ></ion-input>\n    \n            </ion-item>\n          </ion-card> -->\n        <!-- </ion-list> -->\n      </ion-col>\n    </ion-row>\n    <ion-grid>\n      <ion-row>\n  \n        <!-- <ion-col col-3>\n    \n          <ion-button color=\"primary\" expand=\"block\" [routerLink]=\"[ '/main/info' ]\">\n            Sign In\n          </ion-button>\n        </ion-col> -->\n        <ion-col col-8>\n    \n          <ion-button type=\"submit\" color=\"danger\" expand=\"block\" >\n           Sign Up\n           <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n   \n    </div>\n    </form>\n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/manage-enquiry/manage-enquiry.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/manage-enquiry/manage-enquiry.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"danger\">\n    <ion-buttons side=\"start\" style=\"color:white\">\n      <ion-menu-button style=\"color:lightcoral\"></ion-menu-button>\n      <ion-title class=\"ion-text-center\" class=\"toolbar\">चौकश्या</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card *ngIf=\"value\" (click)=\"openPopover($event)\" class=\"container\">\n       <ion-card-header>\n\n      <ion-card-title>ग्राहकांची ओळख: RB5637</ion-card-title>\n      <ion-card-subtitle> \n        क्लायंट नाव  : वरदान हिंगमिरे\n         <ion-icon name=\"chevron-forward-outline\"\n          color=\"warning\" (click)=\"openPopover($event)\" position=\"absolute\"></ion-icon>\n       </ion-card-subtitle>\n      \n      <ion-card-subtitle>प्रस्थान तारीख  : 2020-08-12</ion-card-subtitle>\n      <ion-card-subtitle>स्थिती  :  नियुक्त करा</ion-card-subtitle>\n\n    </ion-card-header>\n\n  </ion-card>\n  <ion-card (click)=\"openPopover($event)\" class=\"container\">\n    <ion-card-header>\n\n   <ion-card-title>ग्राहकांची ओळख: SB0011</ion-card-title>\n   <ion-card-subtitle> \n     क्लायंट नाव  : श्री सोनवणे सर\n      <ion-icon name=\"chevron-forward-outline\"\n       color=\"warning\" (click)=\"openPopover($event)\" position=\"absolute\"></ion-icon>\n    </ion-card-subtitle>\n   \n   <ion-card-subtitle>प्रस्थान तारीख  : 2020-11-12</ion-card-subtitle>\n   <ion-card-subtitle>स्थिती  :  नियुक्त करा</ion-card-subtitle>\n\n </ion-card-header>\n\n</ion-card><ion-card (click)=\"openPopover($event)\" class=\"container\">\n  <ion-card-header>\n\n <ion-card-title>ग्राहकांची ओळख: UB5676</ion-card-title>\n <ion-card-subtitle> \n   क्लायंट नाव  : श्रीमती हर्षा पाटील\n    <ion-icon name=\"chevron-forward-outline\"\n     color=\"warning\" (click)=\"openPopover($event)\" position=\"absolute\"></ion-icon>\n  </ion-card-subtitle>\n \n <ion-card-subtitle>प्रस्थान तारीख  : 2020-11-20</ion-card-subtitle>\n <ion-card-subtitle>स्थिती  :  नियुक्त करा</ion-card-subtitle>\n\n</ion-card-header>\n\n</ion-card>\n\n</ion-content>\n\n\n<!-- <shared-modal id=\"addForm\" modalTitle=\"Add Batch\" *ngIf=\"enquiries\">\n  <app-popover></app-popover>\n  <app-forgot-password [enquiryData]=\"enquiries\" (formSubmitted)=\"submitEnquiry($event)\"></app-forgot-password>\n</shared-modal> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/orders-list/orders-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/orders-list/orders-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"ion-text-center\" style=\"margin-right: 2.0rem;\" color=\"danger\" >\n        <b>DashBoard</b>\n        </ion-title>\n<!-- \n        <ion-buttons style=\"margin-right: 10px;\" slot=\"end\">\n          <ion-icon name=\"chatbubbles\"></ion-icon>\n        </ion-buttons> -->\n         <ion-buttons slot=\"end\">\n          <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon>         \n           <ion-badge>3</ion-badge> \n          <ion-select style=\"position: absolute !important;margin-left: 20px;\" interface=\"popover\">\n            <ion-select-option value=\"nes\">Toggle</ion-select-option>\n            <ion-select-option value=\"n64\">Messages</ion-select-option>\n            <ion-select-option value=\"ps\">Ride Completed [Sarah]</ion-select-option>\n            <!-- <ion-select-option value=\"genesis\">Sega Genesis</ion-select-option>\n            <ion-select-option value=\"saturn\">Sega Saturn</ion-select-option>\n            <ion-select-option value=\"snes\">SNES</ion-select-option> -->\n          </ion-select>     \n          </ion-buttons>\n        <!-- <div class=\"ion-text-center\" style=\"color:#f04141;font-size: 12px;margin-top: 5px;margin-right:10px ;\">\n         <span>\n           <b>\n        < &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Monday,&nbsp; Nov 25th &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; >\n      </b>\n          </span> \n         </div> -->\n</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n  <ion-card >\n    <ion-card-header style=\"background-color: lightgrey;\">\n      <ion-card-title style=\"font-size: medium;\" color=\"success\" class=\"ion-text-center\">जीएम कॅब ड्राइव्हर मध्ये आपले स्वागत आहे.<a href=\"\">वाहनांचा तपशील अद्ययावत करण्यासाठी येथे क्लिक करा</a></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <!-- <h5><b>Monday, November 25th</b></h5> -->\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-margin-top\">\n          <ion-col class=\"ion-no-padding\" size=\"3\">\n            <ion-card-title>\n              <ion-chip>\n              <ion-avatar style=\"text-align: left;\">\n                <ion-icon name=\"car-sport-outline\" size=\"large\"></ion-icon>\n              </ion-avatar>\n              <ion-label> <ion-col>\n                <span>  &nbsp;&nbsp;  Sedan</span>\n              </ion-col></ion-label>\n            </ion-chip>\n            </ion-card-title>\n          </ion-col>\n          <ion-col style=\"margin-left: 1.5rem;margin-top: 1rem;\" >\n            <span color=\"danger\"><b>Hyundai Aura 22 Rs/Km</b> </span>\n          </ion-col>\n          <!-- <ion-col class=\"ion-align-self-center\" size=\"3\">\n            <span class=\"ion-float-right\">22 Rs/ km</span>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <span>Special Requests: Chilled Coke</span>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card >\n    <ion-card-header style=\"background-color: lightblue;\">\n      <ion-card-title color=\"danger\" class=\"ion-text-center\">\n        <ion-icon name=\"browsers-outline\" size=\"large\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-margin-top\">\n         \n          <ion-col class=\"ion-align-self-center\" size=\"6\">\n            <span color=\"danger\"><b>View Enquiry:</b></span>\n\n\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size=\"3\">\n            <span class=\"ion-float-right\"><b>1</b></span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-align-self-center\" size=\"6\">\n            <span>Special Requests: </span>\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size=\"3\">\n            <span class=\"ion-float-right\"><b>2</b></span>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card> -->\n\n  <!-- <ion-card  [routerLink]=\"[ '/main/AddVehicles' ]\">\n    <ion-card-header style=\"background-color: lightsalmon;\">\n      <ion-card-title color=\"danger\" class=\"ion-text-center\">\n        \n        <ion-icon name=\"bus-outline\" size=\"large\"></ion-icon>\n      \n      \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content [routerLink]=\"[ '/main/profile' ]\">\n\n      <h5><b>Monday, November 25th</b></h5>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-margin-top\">\n          <ion-col class=\"ion-no-padding\" size=\"3\">\n            <ion-card-title>\n              <ion-avatar item-start>\n                <img src=\"../../../../assets/Img/Cuisine4.jpg\">\n              </ion-avatar>\n            </ion-card-title>\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size=\"6\">\n            <span color=\"danger\">Added Vehicles:    </span>\n\n\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size=\"3\">\n            <span class=\"ion-float-right\">2</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-align-self-center\" size=\"6\">\n            <span>Special Requests:</span>\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size=\"3\">\n            <span class=\"ion-float-right\">No Requests</span>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card> -->\n  <!-- <ion-card  [routerLink]=\"[ '/main/profile' ]\">\n    <ion-card-header style=\"background-color: lightgreen;\">\n      <ion-card-title color=\"danger\" class=\"ion-text-center\">\n        \n        <ion-icon name=\"person-outline\" size=\"large\"></ion-icon>\n      \n      \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-margin-top\">\n        \n          <ion-col class=\"ion-align-self-center\" size=\"6\">\n            <span color=\"danger\">Profile Completeness </span>\n\n\n          </ion-col>\n          <ion-col class=\"ion-align-self-center\" size=\"3\">\n            <span class=\"ion-float-right\">0 %</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n         \n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card> -->\n<ion-card  [routerLink]=\"[ '/main/ManageEnquiry' ]\">\n  <ion-card-content>\n  <!-- <div class=\"container\"> -->\n    <div class=\"product-card\">\n      <div class=\"image\">\n        <fa-icon [icon]=\"faEnvelope\" style=\"zoom: 2.5;margin-left: 1rem!important;\" ></fa-icon>\n        <!-- <img src=\"../../../../assets/message picture.png\" style=\"width: 640px;height: 960px;\" alt=\"\"> -->\n      </div>\n      <div class=\"card-content\">\n        <span style=\"color: lightseagreen;\"><b>चौकशी पहा</b></span>\n        <p><span><b>0</b></span></p>\n        <div class=\"store-purchase\">\n          <!-- <div class=\"price\">$149.99</div> -->\n          <!-- <div class=\"buy\">\n            <button>Buy Now</button>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  <!-- </div>  -->\n</ion-card-content>\n</ion-card>\n<ion-card [routerLink]=\"[ '/main/profile' ]\">\n  <ion-card-content>\n  <!-- <div class=\"container\"> -->\n    <div class=\"product-card\">\n      <div class=\"image2\">\n        <fa-icon [icon]=\"faCar\" style=\"zoom: 2.5;margin-left: 1rem!important;\" ></fa-icon>\n      </div>\n      <div class=\"card-content\">\n        <span style=\"color: lightseagreen;\"><b>वाहन जोडा</b></span>\n        <p><span><b>2</b></span></p>\n        <div class=\"store-purchase\">\n          <!-- <div class=\"price\">$149.99</div> -->\n          <!-- <div class=\"buy\">\n            <button>Buy Now</button>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  <!-- </div> -->\n</ion-card-content>\n</ion-card>\n<ion-card [routerLink]=\"[ '/main/profile' ]\">\n  <ion-card-content>\n  <!-- <div class=\"container\"> -->\n    <div class=\"product-card\">\n      <div class=\"image3\">\n        <fa-icon [icon]=\"faUser\" style=\"zoom: 2.5;margin-left: 1rem!important;\" ></fa-icon>\n      </div>\n      <div class=\"card-content\">\n        <span style=\"color: lightseagreen;\"><b>प्रोफाइल पूर्णता</b></span>\n        <p><span><b>20%</b></span></p>\n        <div class=\"store-purchase\">\n          <!-- <div class=\"price\">$149.99</div> -->\n          <!-- <div class=\"buy\">\n            <button>Buy Now</button>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  <!-- </div> -->\n</ion-card-content>\n</ion-card>\n<ion-card  [routerLink]=\"[ '/main/profile' ]\">\n  <ion-card-content>\n  <!-- <div class=\"container\"> -->\n    <div class=\"product-card\">\n      <div class=\"image4\">\n        <fa-icon [icon]=\"faIdCard\" style=\"zoom: 2.5;margin-left: 1rem!important;\" ></fa-icon>\n      </div>\n      <div class=\"card-content\">\n        <span style=\"color: lightseagreen;\"><b>ड्रायव्हर जोडा</b></span>\n        <p><span><b>Fill Form</b></span></p>\n        <div class=\"store-purchase\">\n          <!-- <div class=\"price\">$149.99</div> -->\n          <!-- <div class=\"buy\">\n            <button>Buy Now</button>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  <!-- </div> -->\n</ion-card-content>\n</ion-card>\n<ion-card color=\"dark\" [routerLink]=\"[ '/main/profile' ]\">\n  <ion-card-content>\n  <ion-item>\n    <h3>नवीन बुकिंग<span class=\"badge badge-secondary\">New</span></h3>\n  </ion-item>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">नवीन बुकिंग</th>\n          <th scope=\"col\">ग्राहक</th>\n          <th scope=\"col\">स्थिती</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">GM9842</th>\n          <td>Mark</td>\n          <td>पूर्ण</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">GM1848</th>\n          <td>Jacob</td>\n          <td>पुनरावलोकन</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">GM4588</th>\n          <td>Larry</td>\n          <td>यश</td>\n        </tr>\n      </tbody>\n    </table>\n    \n</ion-card-content>\n</ion-card>\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button [routerLink]=\"[ '/main/dashboard-menu' ]\">\n          <ion-icon name=\"pizza\"></ion-icon>\n          <ion-label>Menu</ion-label>\n        </ion-tab-button>\n        <ion-tab-button>\n          <ion-icon color=\"danger\" name=\"list-box\"></ion-icon>\n          <ion-label color=\"danger\">Orders</ion-label>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"logoutMsg()\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>Account</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/otp/otp.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/otp/otp.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <form id=\"login\" class=\"form\" action=\"\" method=\"post\" novalidate [formGroup]=\"registrationForm\" >\n  <div padding>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <img class=\"logo\" src=\"../../../../assets/GM-Cab_Final-Logo.png\" height=\"100px\" width=\"100px\" />\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col class=\"ion-text-center\">\n      <h3><b>जीएम कॅब</b></h3>\n</ion-col>\n</ion-row>\n<ion-card style=\"margin-top: 150px;\">\n  <ion-item >\n\n    <ion-input type=\"password\" formControlName=\"Otp\"  placeholder=\"ओटीपी प्रविष्ट करा\" ></ion-input>\n\n  </ion-item>\n</ion-card>\n<div style=\"margin-left: 20px;\" *ngFor=\"let error of errorMessages.Otp\">\n          <ng-container *ngIf=\"Otp.hasError(error.type) && (Otp.dirty || Otp.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n</div>\n<ion-grid>\n  <ion-row>\n\n    <!-- <ion-col col-3>\n\n      <ion-button color=\"primary\" expand=\"block\" [routerLink]=\"[ '/main/info' ]\">\n        Sign In\n      </ion-button>\n    </ion-col> -->\n    <ion-col col-8>\n\n      <ion-button type=\"submit\" color=\"danger\" (click)=\"submit()\" expand=\"block\" >\n       Sign In\n       <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n\n</form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/profile/profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/profile/profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"ion-text-center\" style=\"margin-right: 2.5rem;\" color=\"danger\" >\n        <b>Edit Profile</b>\n      </ion-title>\n      \n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <div style=\"text-align: center;\">\n      <ion-card>\n      <img src=\"../../../../assets/504-5040528_empty-profile-picture-png-transparent-png.png\"\n        \n      alt=\"\"  style=\"width: 240px;height: 300px;\"> \n    </ion-card>\n  </div>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <div style=\"text-align: center;\">\n      <ion-card-title>\n        <b>Vardan Hingmire</b>\n        <p>\n          GMCabs Team\n        </p>\n        </ion-card-title>\n      </div>\n      \n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-list lines=\"none\" class=\"mb-2\">\n        <ion-item lines=\"none\" >\n          <ng-container>\n          <!-- <div > -->\n      <ion-tabs >\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"schedule\" class=\"ml-4\">\n            <ion-icon name=\"calendar\" size=\"large\"></ion-icon>\n            <ion-title style=\"font-size: smaller;\" >प्रोफाईल संपादित</ion-title>\n            <ion-badge>1</ion-badge>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"speakers\" >\n            <ion-icon name=\"briefcase\" size=\"large\" (click)=\"navigatetobankDetails()\"></ion-icon>\n            <ion-title style=\"font-size: smaller;\" (click)=\"navigatetobankDetails()\" >बँक तपशील</ion-title>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"map\" class=\"mr-4\" >\n            <ion-icon name=\"map\" size=\"large\" (click)=\"navigatetosupport()\"></ion-icon>\n            <ion-title style=\"font-size: smaller;\" (click)=\"navigatetosupport()\">गप्पा समर्थन</ion-title>\n          </ion-tab-button>\n      \n        </ion-tab-bar>\n      </ion-tabs>\n    <!-- </div> -->\n    </ng-container>\n        </ion-item>\n    </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n    <ion-card-content>\n     \n      <ion-list >\n\n        <ion-item>\n          <ion-label position=\"floating\">FirstName</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">LastName</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">Email Id</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">Location</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">Mobile No</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n       <h3 *ngIf=\"images.length === 0\" text-center>Please Select Image</h3>\n        <ion-item *ngFor=\"let img of images;index as pos\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"img.path\"></ion-img>\n          </ion-thumbnail>\n\n          <ion-label position=\"fixed\">{{img.name}}</ion-label>\n\n          <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img)\">\n           <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n          </ion-button>\n\n          <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img,pos)\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n           </ion-button>\n           \n        </ion-item>\n        <ion-item>\n        <!-- <ion-card> -->\n          <!-- <ion-card-content> -->\n            <!-- <ion-toolbar color=\"primary\"> -->\n              <ion-label position=\"fixed\" >Selfie Image</ion-label>\n              <ion-button color=\"primary\" (click)=\"selectImage()\">\n                  \n                <ion-icon name=\"camera\" slot=\"start\">\n            \n                </ion-icon>\n              </ion-button>\n             <!-- </ion-toolbar> -->\n          <!-- </ion-card-content> -->\n        <!-- </ion-card> -->\n      </ion-item>\n        <ion-item >\n          <ion-label position=\"fixed\">License Document</ion-label>\n            <ion-button (click)=\"UPloadFiLeDrivingLicense()\">Upload File</ion-button>\n          <ion-label><b>{{uploadText}}</b></ion-label> \n        </ion-item>\n        <ion-item >\n          <ion-label position=\"fixed\">Aadhar Document</ion-label>\n          <ion-button (click)=\"UPloadFiLeAadhar()\">Upload File</ion-button>\n          <ion-label><b>{{uploadText}}</b></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>License Valid From</ion-label>\n          <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>License Valid To</ion-label>\n          <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n    \n    </ion-card-content>\n  </ion-card>\n\n  \n  <!-- <ion-card> -->\n    <!-- <ion-card-content> -->\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <ion-button color=\"danger\" (click)=\"navigate()\" >\n             Save Changes\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    <!-- </ion-card-content> -->\n  <!-- </ion-card> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/sign-up/sign-up.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/sign-up/sign-up.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"align\" color=\"danger\">\n        <b>साइन इन करा</b>\n        </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form id=\"login-form\" class=\"form\" action=\"\" method=\"post\" novalidate [formGroup]=\"user\" >\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <img class=\"logo\" src=\"../../../../assets/GM-Cab_Final-Logo.png\" height=\"100px\" width=\"100px\" />\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: -35px;\">\n      <ion-col class=\"ion-text-center\">\n        <h3><b>जीएम कॅब</b></h3>\n</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n     \n      <ion-card>\n        <ion-item>\n\n          <ion-input type=\"Number\" placeholder=\"मोबाइल नंबर\" formControlName=\"mob\" ></ion-input>\n\n        </ion-item>\n      </ion-card>\n      <div style=\"color:#f53d3d\" class=\"error\" *ngIf=\"user.get('mob').hasError('required') && user.get('mob').touched\">\n        Mobile Number is required\n        </div>\n        <!-- <div style=\"color:#f53d3d\" class=\"error\" *ngIf=\"user.get('mob').hasError('maxlength') && user.get('mob').touched\">\n        Minimum of 10 Digits\n        </div> -->\n      <!-- <ion-card>\n          <ion-item >\n  \n            <ion-input type=\"password\" placeholder=\"ओटीपी प्रविष्ट करा\" ></ion-input>\n  \n          </ion-item>\n        </ion-card> -->\n     \n    </ion-col>\n   \n  </ion-row>\n  <ion-grid style=\"margin-top: 50px;\">\n    <ion-row>\n      <ion-col>\n        <div style=\"text-align: right;margin-right: 10px;\">विसरलात</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-4>\n  \n        <ion-button color=\"primary\" expand=\"block\" (click)=\"submit()\" >\n          साइन इन करा\n        </ion-button>\n      </ion-col>\n      <ion-col col-4>\n  \n        <ion-button color=\"danger\" expand=\"block\" [routerLink]=\"[ '/main/info' ]\">\n          साइन अप करा\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/support/support.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/support/support.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  support works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/modal/modal.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/modal/modal.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shared-modal\">\r\n  <div class=\"shared-modal__body rounded border shadow-lg\">\r\n    <div class=\"row\">\r\n      <h4 class=\"col-8\">{{ modalTitle }}</h4>\r\n      <div class=\"col-4\">\r\n        <fa-icon class=\"float-right icon-button--hover-reactive\" (click)=\"close()\" [icon]=\"faTimes\"></fa-icon>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n<div class=\"shared-modal__background\"></div>");

/***/ }),

/***/ "./src/app/main/components/carmodel/carmodel.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main/components/carmodel/carmodel.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy9jYXJtb2RlbC9jYXJtb2RlbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/main/components/carmodel/carmodel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/components/carmodel/carmodel.component.ts ***!
  \****************************************************************/
/*! exports provided: CarmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarmodelComponent", function() { return CarmodelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_admin_carservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/admin/carservice.service */ "./src/app/shared/admin/carservice.service.ts");




let CarmodelComponent = class CarmodelComponent {
    constructor(carservice, modalCtrl) {
        this.carservice = carservice;
        this.modalCtrl = modalCtrl;
        this.car = [];
    }
    ngOnInit() {
        this.car = this.carservice.getcar();
    }
    decreaseCarItem(product) {
        this.carservice.decreaseProduct(product);
    }
    increaseCarItem(product) {
        this.carservice.addProduct(product);
    }
    removeCarItem(product) {
        this.carservice.removeProduct(product);
    }
    getTotal() {
        return this.car.reduce((i, j) => i + j.price * j.passenger, 0);
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
CarmodelComponent.ctorParameters = () => [
    { type: _shared_admin_carservice_service__WEBPACK_IMPORTED_MODULE_3__["CarserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
CarmodelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carmodel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carmodel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/carmodel/carmodel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carmodel.component.scss */ "./src/app/main/components/carmodel/carmodel.component.scss")).default]
    })
], CarmodelComponent);



/***/ }),

/***/ "./src/app/main/components/popover/popover.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/components/popover/popover.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/components/popover/popover.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/components/popover/popover.component.ts ***!
  \**************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PopoverComponent = class PopoverComponent {
    constructor(navcontroller, router, popovercontroller) {
        this.navcontroller = navcontroller;
        this.router = router;
        this.popovercontroller = popovercontroller;
        sessionStorage.removeItem('Enquiry Rejected');
        sessionStorage.setItem('Enquiry Rejected', '0');
    }
    ngOnInit() { }
    changeView() {
        // console.log(event);
        sessionStorage.setItem('Enquiry Rejected', '0');
        this.popovercontroller.dismiss();
        window.location.reload();
    }
    navigate2res() {
        this.popovercontroller.dismiss();
        this.router.navigate(['/main/AddPassenger']);
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/main/components/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ }),

/***/ "./src/app/main/containers/add-passengers/add-passengers.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/containers/add-passengers/add-passengers.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home .toolbar-title, page-home p, page-home input, page-home button {\n  font-family: Staatliches;\n}\npage-home p {\n  font-size: 18px !important;\n  letter-spacing: 0.5px;\n  line-height: 18px !important;\n}\npage-home .col, page-home .row {\n  margin: 0;\n  padding: 0;\n}\npage-home .segment-button {\n  padding: 0 !important;\n}\npage-home .segment {\n  padding-right: 12px;\n}\npage-home .toolbar-md {\n  padding-bottom: 0;\n  min-height: 55px;\n}\npage-home .toolbar-content, page-home .toolbar-content-md {\n  padding: 0 !important;\n  margin: 0 !important;\n}\npage-home ion-header {\n  z-index: 41;\n}\npage-home ion-header ion-navbar .toolbar-background {\n  background: transparent;\n}\npage-home ion-header ion-toolbar .toolbar-background {\n  background: transparent;\n}\npage-home ion-header .toolbar-title {\n  margin-top: 4px;\n  color: #fff;\n}\npage-home .card-md {\n  border-radius: 10px;\n  box-shadow: 0 1.4px 3px 0 #6b7376, 0 3px 1px -2px #9b63f8, 0 1px 1px 0 #9b63f8 !important;\n}\npage-home .gray {\n  color: #6b7376;\n}\npage-home .bg-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 40;\n  width: 100%;\n}\npage-home .cut {\n  position: relative;\n  display: inline-block;\n  height: 160px;\n  overflow: hidden;\n}\npage-home .cut img {\n  display: block;\n}\npage-home .cut:after, page-home .cut:before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border-bottom: 100px solid white;\n  border-right: 100vw solid transparent;\n}\npage-home .cut:hover:after, page-home .cut:hover:before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border-bottom: none;\n  border-right: none;\n}\npage-home ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\npage-home .car-icon {\n  font-size: 50px;\n}\npage-home .car-length {\n  color: var(--ion-color-secondary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 600;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL2FkZC1wYXNzZW5nZXJzL2FkZC1wYXNzZW5nZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksd0JBQUE7QUFEUjtBQUlJO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBRlI7QUFLSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBSFI7QUFNSTtFQUNJLHFCQUFBO0FBSlI7QUFPSTtFQUNJLG1CQUFBO0FBTFI7QUFRSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVNJO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtBQVBSO0FBVUk7RUFDSSxXQUFBO0FBUlI7QUFVWTtFQUNJLHVCQUFBO0FBUmhCO0FBYVk7RUFDSSx1QkFBQTtBQVhoQjtBQWVRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFiWjtBQWlCSTtFQUNJLG1CQUFBO0VBQ0EseUZBQUE7QUFmUjtBQWtCSTtFQUNJLGNBQUE7QUFoQlI7QUFtQkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBakJSO0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWxCUjtBQXFCSTtFQUNJLGNBQUE7QUFuQlI7QUFzQkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7QUFwQlI7QUF1Qkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQlI7QUF1Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXJCUjtBQXVCSTtFQUNBLGVBQUE7QUFyQko7QUF1Qkk7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXJCUiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9hZGQtcGFzc2VuZ2Vycy9hZGQtcGFzc2VuZ2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XHJcblxyXG4gICAgLnRvb2xiYXItdGl0bGUsIHAsIGlucHV0LCBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBTdGFhdGxpY2hlcztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wsIC5yb3cge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b29sYmFyLW1kIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b29sYmFyLWNvbnRlbnQsIC50b29sYmFyLWNvbnRlbnQtbWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taGVhZGVyIHtcclxuICAgICAgICB6LWluZGV4OiA0MTtcclxuICAgICAgICBpb24tbmF2YmFyIHtcclxuICAgICAgICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50b29sYmFyLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtbWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjRweCAzcHggMCAjNmI3Mzc2LCAwIDNweCAxcHggLTJweCAjOWI2M2Y4LCAwIDFweCAxcHggMCAjOWI2M2Y4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYXkge1xyXG4gICAgICAgIGNvbG9yOiAjNmI3Mzc2O1xyXG4gICAgfSBcclxuXHJcbiAgICAuYmctaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogNDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1dCB7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmN1dCBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1dDphZnRlciwgLmN1dDpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlOyBcclxuICAgICAgICByaWdodDowOyBcclxuICAgICAgICBib3R0b206MDsgXHJcbiAgICAgICAgY29udGVudDonJztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMDBweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDEwMHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXQ6aG92ZXI6YWZ0ZXIsIC5jdXQ6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgICAgICAgcmlnaHQ6MDsgXHJcbiAgICAgICAgYm90dG9tOjA7IFxyXG4gICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpb24tZmFiLWJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgd2lkdGg6NzBweDsgXHJcbiAgICB9XHJcbiAgICAuY2FyLWljb257XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyLWxlbmd0aHtcclxuICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MThweDtcclxuICAgICAgICBsZWZ0OjI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6NjAwO1xyXG4gICAgICAgIG1pbi13aWR0aDoyNXB4O1xyXG4gICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/main/containers/add-passengers/add-passengers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/containers/add-passengers/add-passengers.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddPassengersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPassengersComponent", function() { return AddPassengersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_admin_carservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/admin/carservice.service */ "./src/app/shared/admin/carservice.service.ts");
/* harmony import */ var _components_carmodel_carmodel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/carmodel/carmodel.component */ "./src/app/main/components/carmodel/carmodel.component.ts");





let AddPassengersComponent = class AddPassengersComponent {
    constructor(carservice, modalCtrl) {
        this.carservice = carservice;
        this.modalCtrl = modalCtrl;
        this.segment = 'home';
        this.name = 'There';
        this.action = "add new";
        this.car = [];
        this.products = [];
        this.product = {
            id: undefined,
            name: undefined,
            price: undefined,
            currency: "OMR"
        };
    }
    ngOnInit() {
        this.products = this.carservice.getProducts();
        this.car = this.carservice.getcar();
        this.carItemCount = this.carservice.getCarItemCount();
    }
    addToCar(product) {
        this.carservice.addProduct(product);
    }
    openCar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _components_carmodel_carmodel_component__WEBPACK_IMPORTED_MODULE_4__["CarmodelComponent"],
                cssClass: 'car-modal'
            });
            modal.present();
        });
    }
};
AddPassengersComponent.ctorParameters = () => [
    { type: src_app_shared_admin_carservice_service__WEBPACK_IMPORTED_MODULE_3__["CarserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
AddPassengersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-passengers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-passengers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/add-passengers/add-passengers.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-passengers.component.scss */ "./src/app/main/containers/add-passengers/add-passengers.component.scss")).default]
    })
], AddPassengersComponent);



/***/ }),

/***/ "./src/app/main/containers/add-vehicles/add-vehicles.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/containers/add-vehicles/add-vehicles.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rwd-table {\n  margin: 1em 0;\n  min-width: 300px;\n}\n\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n\n.rwd-table th {\n  display: none;\n}\n\n.rwd-table td {\n  display: block;\n}\n\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 6.5em;\n  display: inline-block;\n}\n\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n\n.rwd-table th, .rwd-table td {\n  text-align: left;\n}\n\n@media (min-width: 480px) {\n  .rwd-table th, .rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child, .rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child, .rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n\nbody {\n  padding: 0 2em;\n  font-family: Montserrat, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  color: #444;\n  background: #eee;\n}\n\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n\n.rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n\n.rwd-table tr {\n  border-color: #46637f;\n}\n\n.rwd-table th, .rwd-table td {\n  margin: 0.5em 1em;\n}\n\n@media (min-width: 480px) {\n  .rwd-table th, .rwd-table td {\n    padding: 1em !important;\n  }\n}\n\n.rwd-table th, .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL2FkZC12ZWhpY2xlcy9hZGQtdmVoaWNsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFBRTtFQUNFLGFBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxxQkFBQTtBQU1KOztBQUpFO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxFO0VBQ0U7SUFDRSxhQUFBO0VBUUo7QUFDRjs7QUFORTtFQUNFLGdCQUFBO0FBUUo7O0FBTkU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EscUJBQUE7RUFTSjs7RUFQRTtJQUNFLGVBQUE7RUFVSjs7RUFSRTtJQUNFLGdCQUFBO0VBV0o7QUFDRjs7QUFSRTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFQRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUEU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkU7RUFDRSxxQkFBQTtBQVdKOztBQVRFO0VBQ0UsaUJBQUE7QUFZSjs7QUFWRTtFQUNFO0lBQ0UsdUJBQUE7RUFhSjtBQUNGOztBQVhFO0VBQ0UsV0FBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250YWluZXJzL2FkZC12ZWhpY2xlcy9hZGQtdmVoaWNsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucndkLXRhYmxlIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICAucndkLXRhYmxlIHRyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIC5yd2QtdGFibGUgdGgge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnJ3ZC10YWJsZSB0ZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICB9XHJcbiAgLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gIH1cclxuICAucndkLXRhYmxlIHRkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDYuNWVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgIC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJ3ZC10YWJsZSB0aCwgLnJ3ZC10YWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgIC5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xyXG4gICAgfVxyXG4gICAgLnJ3ZC10YWJsZSB0aDpmaXJzdC1jaGlsZCwgLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5yd2QtdGFibGUgdGg6bGFzdC1jaGlsZCwgLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICBjb2xvcjogIzM0NDk1RTtcclxuICB9XHJcbiAgXHJcbiAgLnJ3ZC10YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ0OTVFO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLnJ3ZC10YWJsZSB0ciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NjYzN2Y7XHJcbiAgfVxyXG4gIC5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQge1xyXG4gICAgbWFyZ2luOiAuNWVtIDFlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAucndkLXRhYmxlIHRoLCAucndkLXRhYmxlIHRkIHtcclxuICAgICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjZGQ1O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/main/containers/add-vehicles/add-vehicles.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/containers/add-vehicles/add-vehicles.component.ts ***!
  \************************************************************************/
/*! exports provided: AddVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehiclesComponent", function() { return AddVehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddVehiclesComponent = class AddVehiclesComponent {
    constructor() { }
    ngOnInit() { }
};
AddVehiclesComponent.ctorParameters = () => [];
AddVehiclesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-vehicles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/add-vehicles/add-vehicles.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-vehicles.component.scss */ "./src/app/main/containers/add-vehicles/add-vehicles.component.scss")).default]
    })
], AddVehiclesComponent);



/***/ }),

/***/ "./src/app/main/containers/bank-details/bank-details.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/containers/bank-details/bank-details.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9iYW5rLWRldGFpbHMvYmFuay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/containers/bank-details/bank-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/containers/bank-details/bank-details.component.ts ***!
  \************************************************************************/
/*! exports provided: BankDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDetailsComponent", function() { return BankDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let BankDetailsComponent = class BankDetailsComponent {
    constructor(router) {
        this.router = router;
        this.data = [];
        this.data = [{ id: 101, name: "PhonePay" },
            { id: 102, name: "GooglePay" },
            { id: 103, name: "BhimPay" },
            { id: 104, name: "Paypal" },
            { id: 105, name: "AmazonPay" }];
    }
    ngOnInit() {
    }
    OnChange(event) {
        alert("you have selected id =" + event.target.value);
    }
    navigatetoprofile() {
        this.router.navigate(['/main/profile']);
    }
};
BankDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BankDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bank-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/bank-details/bank-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bank-details.component.scss */ "./src/app/main/containers/bank-details/bank-details.component.scss")).default]
    })
], BankDetailsComponent);



/***/ }),

/***/ "./src/app/main/containers/cart/cart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main/containers/cart/cart.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .align {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC5hbGlnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/containers/cart/cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/containers/cart/cart.component.ts ***!
  \********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let CartComponent = class CartComponent {
    constructor(navCtrl, toastController, alertController) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    ngOnInit() { }
    NavigateToOrders() {
        this.presentToast();
        this.navCtrl.navigateForward('/main/orders');
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Order Placed Successfully',
                // message: 'Click to Close',
                position: 'bottom',
                duration: 2000,
                cssClass: 'Toast',
                buttons: [
                    // {
                    //   side: 'start',
                    //   icon: 'star',
                    //   text: 'Favorite',
                    //   handler: () => {
                    //     console.log('Favorite clicked');
                    //   }
                    // },
                    {
                        text: '',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    logoutMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            //  this.AddedToCart(DishName);
                        }
                    },
                    {
                        text: 'Yes',
                        handler: (blah) => {
                            console.log(blah);
                            this.navCtrl.navigateRoot('/home');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
CartComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/cart/cart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.component.scss */ "./src/app/main/containers/cart/cart.component.scss")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/main/containers/dashboard-menu/dashboard-menu.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/containers/dashboard-menu/dashboard-menu.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host span {\n  cursor: pointer;\n}\n:host .number {\n  margin: 100px;\n}\n:host .minus, :host .plus {\n  width: 20px;\n  height: 20px;\n  background: #f2f2f2;\n  border-radius: 4px;\n  padding: 8px 5px 8px 5px;\n  border: 1px solid #ddd;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n:host input {\n  height: 34px;\n  width: 100px;\n  text-align: center;\n  font-size: 26px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL2Rhc2hib2FyZC1tZW51L2Rhc2hib2FyZC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQU0sZUFBQTtBQUFQO0FBQ0U7RUFDQyxhQUFBO0FBQ0g7QUFDRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDRyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNFO0VBQ0MsWUFBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDSCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0cscUJBQUE7RUFDQSxzQkFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250YWluZXJzL2Rhc2hib2FyZC1tZW51L2Rhc2hib2FyZC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0e1xyXG5cdHNwYW4ge2N1cnNvcjpwb2ludGVyOyB9XHJcblx0XHQubnVtYmVye1xyXG5cdFx0XHRtYXJnaW46MTAwcHg7XHJcblx0XHR9XHJcblx0XHQubWludXMsIC5wbHVze1xyXG5cdFx0XHR3aWR0aDoyMHB4O1xyXG5cdFx0XHRoZWlnaHQ6MjBweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZjJmMmYyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjRweDtcclxuXHRcdFx0cGFkZGluZzo4cHggNXB4IDhweCA1cHg7XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0XHRpbnB1dHtcclxuXHRcdFx0aGVpZ2h0OjM0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/containers/dashboard-menu/dashboard-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/containers/dashboard-menu/dashboard-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMenuComponent", function() { return DashboardMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let DashboardMenuComponent = class DashboardMenuComponent {
    constructor(alertController, toastController, navCtrl) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    AddToCartPopup(DishName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: DishName,
                message: `
      <div>Select Quantity </div>
      <span class="minus">-</span>
      <span class="i" type="text">1</span class="i">
      <span class="plus">+</span>
      <br><br>
      <div>Delivery Notes </div>
      `,
                inputs: [
                    {
                        type: 'text',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            //  this.AddedToCart(DishName);
                        }
                    },
                    {
                        text: 'Add To Cart',
                        cssClass: 'text-light',
                        handler: (blah) => {
                            console.log(blah);
                            this.AddedToCart(DishName);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    AddedToCart(DishName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: DishName,
                message: `
      <span>
      <ion-icon name="checkbox-outline"></ion-icon>
      <span>Added To Cart</span>
      </span> 
      `,
                cssClass: 'AddedToCart',
                buttons: [
                    {
                        text: 'Keep Browsing',
                        cssClass: 'AddedToCartBtnAlign',
                        handler: (blah) => {
                            console.log(blah);
                            this.presentToast();
                        }
                    },
                    {
                        text: 'Checkout',
                        cssClass: 'AddedToCartBtnAlignchckout',
                        handler: (blah) => {
                            console.log(blah);
                            this.navCtrl.navigateForward('/main/cart');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'View Cart: 1 Item',
                // message: 'Click to Close',
                position: 'bottom',
                cssClass: 'Toast',
                duration: 3000,
                buttons: [
                    // {
                    //   side: 'start',
                    //   icon: 'star',
                    //   text: 'Favorite',
                    //   handler: () => {
                    //     console.log('Favorite clicked');
                    //   }
                    // },
                    {
                        text: 'Done',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                            this.navCtrl.navigateForward('/main/cart');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    logoutMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            //  this.AddedToCart(DishName);
                        }
                    },
                    {
                        text: 'Yes',
                        handler: (blah) => {
                            console.log(blah);
                            this.navCtrl.navigateRoot('/home');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
DashboardMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
DashboardMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/dashboard-menu/dashboard-menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-menu.component.scss */ "./src/app/main/containers/dashboard-menu/dashboard-menu.component.scss")).default]
    })
], DashboardMenuComponent);



/***/ }),

/***/ "./src/app/main/containers/driver-map/driver-map.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/containers/driver-map/driver-map.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9kcml2ZXItbWFwL2RyaXZlci1tYXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/containers/driver-map/driver-map.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/containers/driver-map/driver-map.component.ts ***!
  \********************************************************************/
/*! exports provided: DriverMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverMapComponent", function() { return DriverMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DriverMapComponent = class DriverMapComponent {
    constructor() { }
    ngOnInit() { }
};
DriverMapComponent.ctorParameters = () => [];
DriverMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driver-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./driver-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/driver-map/driver-map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./driver-map.component.scss */ "./src/app/main/containers/driver-map/driver-map.component.scss")).default]
    })
], DriverMapComponent);



/***/ }),

/***/ "./src/app/main/containers/forgot-password/forgot-password.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/main/containers/forgot-password/forgot-password.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-item {\n  --highlight-height: 0;\n}\n:host ion-item ion-input {\n  font-size: 15px;\n  color: grey;\n}\n:host .align {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtBQURSO0FBSVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUZaO0FBTUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbnRhaW5lcnMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC8vIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB9XHJcbiBcclxuICAgIH1cclxuICAgIC5hbGlnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/containers/forgot-password/forgot-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/containers/forgot-password/forgot-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() {
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.enquiryData);
    }
    submitPassword() {
        this.formSubmitted.emit({ name: 'vardan', age: 24 });
    }
};
ForgotPasswordComponent.ctorParameters = () => [];
ForgotPasswordComponent.propDecorators = {
    enquiryData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    formSubmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/forgot-password/forgot-password.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/main/containers/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/main/containers/info/info.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main/containers/info/info.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbnRhaW5lcnMvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/containers/info/info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/containers/info/info.component.ts ***!
  \********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_regex_regex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/regex/regex.service */ "./src/app/shared/regex/regex.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_admin_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/admin/login.service */ "./src/app/shared/admin/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let InfoComponent = class InfoComponent {
    constructor(formBuilder, regexService, router, loginservice, toastCtrl) {
        this.formBuilder = formBuilder;
        this.regexService = regexService;
        this.router = router;
        this.loginservice = loginservice;
        this.toastCtrl = toastCtrl;
        this.errorMessages = {
            name: [
                {
                    type: 'required', message: 'नाव आवश्यक आहे'
                },
                {
                    type: 'maxlength', message: 'नाव 100 वर्णांपेक्षा मोठे नाही'
                }
            ],
            lname: [
                {
                    type: 'required', message: 'आडनाव आवश्यक आहे'
                },
                {
                    type: 'maxlength', message: 'नाव 100 वर्णांपेक्षा मोठे नाही'
                }
            ],
            email: [
                {
                    type: 'pattern', message: ' कृपया वैध ईमेल पत्ता प्रविष्ट करा'
                }
            ],
            phone: [
                { type: 'required', message: 'मोबाइल नंबर आवश्यक आहे' },
                {
                    type: 'pattern', message: 'कृपया एक वैध मोबाइल नंबर प्रविष्ट करा'
                }
            ],
            Otp: [
                { type: 'required', message: 'ओटीपी आवश्यक आहे' },
                {
                    type: 'pattern', message: 'कृपया एक वैध ओटीपी प्रविष्ट करा '
                }
            ]
        };
        this.registrationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            lname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexService.Email)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexService.Phone)]],
            Otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]]
        });
    }
    get name() {
        return this.registrationForm.get('name');
    }
    get lname() {
        return this.registrationForm.get('lname');
    }
    get email() {
        return this.registrationForm.get('email');
    }
    get phone() {
        return this.registrationForm.get('phone');
    }
    get Otp() {
        return this.registrationForm.get('Otp');
    }
    submit() {
        console.log(this.registrationForm.value);
        let Reg = this.registrationForm.value;
        console.log(Reg.name.length);
        if (Reg.name.length === 0) {
            console.log('In If');
            return this.registrationForm.get('name');
        }
        else if (Reg.lname.length === 0) {
            console.log('In else If');
            return this.registrationForm.get('lname');
        }
        else if (Reg.phone.length === 0) {
            console.log('In else If');
        }
        else if (Reg.Otp.length === 0) {
            console.log('We are in else');
            this.Credentials = {
                "fname": Reg.name,
                "lname": Reg.lname,
                "mobile": Reg.phone,
                "email": Reg.email
            };
            // this.loginservice.SignUp(this.Credentials).subscribe((data)=>{
            // console.log(data);
            // if(data['response']==1){
            // console.log(data);
            // sessionStorage.setItem('OTP',data['otp'])
            // this.ApiCredentials = data
            this.PresentToastLoginSuccessful();
            // }
            // else if (data['response']==0){
            // this.PresentToastInvalid()
            // }
            // else if (data['response']==2){
            //  this.PresentToastAlreadyExists()
            // }
            // })
            // this.router.navigate(['/main/orders'])
            return this.registrationForm.get('phone');
            // return this.registrationForm.get('Otp')
        }
        // else if(Reg.Otp.length > 0) {
        //   console.log('We are in else');
        //        return this.registrationForm.get('Otp');
        // }
    }
    PresentToastLoginSuccessful() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'Sign Up Successful',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.router.navigate([`/main/orders`]);
        });
    }
    PresentToastInvalid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'Invalid Login Credentials',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    PresentToastAlreadyExists() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'User Already Exists',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
InfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_regex_regex_service__WEBPACK_IMPORTED_MODULE_3__["RegexService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_admin_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
InfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/info/info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info.component.scss */ "./src/app/main/containers/info/info.component.scss")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/main/containers/manage-enquiry/manage-enquiry.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/containers/manage-enquiry/manage-enquiry.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9tYW5hZ2UtZW5xdWlyeS9tYW5hZ2UtZW5xdWlyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/main/containers/manage-enquiry/manage-enquiry.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/containers/manage-enquiry/manage-enquiry.component.ts ***!
  \****************************************************************************/
/*! exports provided: ManageEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEnquiryComponent", function() { return ManageEnquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/popover/popover.component */ "./src/app/main/components/popover/popover.component.ts");
/* harmony import */ var _modal_service_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal-service/modal.service */ "./src/app/main/modal-service/modal.service.ts");





let ManageEnquiryComponent = class ManageEnquiryComponent {
    constructor(modalController, modalService, popovercontroller, Navcontroller) {
        this.modalController = modalController;
        this.modalService = modalService;
        this.popovercontroller = popovercontroller;
        this.Navcontroller = Navcontroller;
        this.value = true;
        console.log(sessionStorage.getItem('Enquiry Rejected'));
        sessionStorage.getItem('Enquiry Rejected');
        if (sessionStorage.getItem('Enquiry Rejected') == '1') {
            console.log('in If');
            this.value = true;
        }
        else if (sessionStorage.getItem('Enquiry Rejected') === '0') {
            console.log('in Else if');
            this.value = false;
        }
        else if (sessionStorage.getItem('Enquiry Rejected') === null) {
            this.value = true;
        }
        else if (sessionStorage.getItem('Enquiry Rejected') === undefined) {
            this.value = true;
        }
    }
    openPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //  this.enquiries = {name:'shubham',age:21}
            //  this.modalService.open('addForm');
            const popover = yield this.popovercontroller.create({
                component: _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"],
                componentProps: {
                    custom_id: this.value
                },
            });
            popover.present();
        });
    }
    ionViewWillEnter() {
        console.log(sessionStorage.getItem('Enquiry Rejected'));
        sessionStorage.getItem('Enquiry Rejected');
        if (sessionStorage.getItem('Enquiry Rejected') == '1') {
            console.log('in If');
            this.value = true;
        }
        else if (sessionStorage.getItem('Enquiry Rejected') === '0') {
            console.log('in Else if');
            this.value = false;
        }
        else if (sessionStorage.getItem('Enquiry Rejected') === null) {
            this.value = true;
        }
        else if (sessionStorage.getItem('Enquiry Rejected') === undefined) {
            this.value = true;
        }
    }
    submitEnquiry(event) {
        console.log(event);
    }
};
ManageEnquiryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _modal_service_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ManageEnquiryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-enquiry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-enquiry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/manage-enquiry/manage-enquiry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-enquiry.component.scss */ "./src/app/main/containers/manage-enquiry/manage-enquiry.component.scss")).default]
    })
], ManageEnquiryComponent);



/***/ }),

/***/ "./src/app/main/containers/orders-list/orders-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/containers/orders-list/orders-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  @import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\");\n}\n:host .align {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n:host body {\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 8%;\n  background: #2e3337;\n}\n:host .container {\n  width: 350px;\n  margin: 0 auto;\n  position: relative;\n}\n:host .product-card {\n  background: #fff;\n  color: white;\n  border-radius: 7px;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n}\n:host .product-card div {\n  flex: 1 1 0%;\n  align-self: stretch;\n}\n:host .product-card .image {\n  background: lightseagreen;\n  position: relative;\n  border-radius: 7px;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n}\n:host .product-card .image img {\n  width: 80%;\n  height: auto;\n}\n:host .product-card .image2 {\n  background: lightcoral;\n  position: relative;\n  border-radius: 7px;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n}\n:host .product-card .image2 img {\n  width: 80%;\n  height: auto;\n}\n:host .product-card .image3 {\n  background: lightseagreen;\n  position: relative;\n  border-radius: 7px;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n}\n:host .product-card .image3 img {\n  width: 80%;\n  height: auto;\n}\n:host .product-card .image4 {\n  background: lightgreen;\n  position: relative;\n  border-radius: 7px;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n}\n:host .product-card .image4 img {\n  width: 80%;\n  height: auto;\n}\n:host .product-card .buttonAdjust {\n  background: lightgreen;\n  position: relative;\n  margin-left: 1.5rem;\n}\n:host .product-card .card-content {\n  padding: 10px 20px;\n}\n:host .product-card .card-content h3 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #cccccc;\n}\n:host .product-card .card-content p {\n  margin: 15px 0px;\n  color: #868686;\n}\n:host .product-card .card-content .store-purchase {\n  display: flex;\n  flex-direction: row;\n}\n:host .product-card .card-content .store-purchase .price {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-top: 0.4rem;\n  color: #ebebeb;\n}\n:host .product-card .card-content .store-purchase button {\n  border: none;\n  background: #e98517;\n  padding: 8px 15px;\n  border-radius: 5px;\n  float: right;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n:host .product-card .card-content .store-purchase button:hover {\n  background: #ed9d45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL29yZGVycy1saXN0L29yZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBYVEsNEZBQUE7QUFYUjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdSO0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUhOO0FBTUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFKTjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBTE47QUFRRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQU5OO0FBU0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNFO0VBQ0Usa0JBQUE7QUFQSjtBQVNJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQTjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBUE47QUFTSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVBOO0FBU007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUFI7QUFTTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVBSO0FBU1E7RUFDRSxtQkFBQTtBQVBWIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250YWluZXJzL29yZGVycy1saXN0L29yZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICAuYWxpZ24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDkwcHggMXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRlbigjMjIyNjI5LCA1JSk7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvLyBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCBkYXJrZW4oI2ZmZiwgMTElKTtcclxuXHJcbiAgZGl2IHtcclxuICAgIGZsZXg6IDEgMSAwJTtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIC5pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlNCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbkFkanVzdHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIH1cclxuICAuY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogZGFya2VuKHdoaXRlLCAyMCUpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICAgIGNvbG9yOiAjODY4Njg2O1xyXG4gICAgfVxyXG4gICAgLnN0b3JlLXB1cmNoYXNlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgOCUpO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjZWQ5ZDQ1LCAxMCUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZDlkNDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/containers/orders-list/orders-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/containers/orders-list/orders-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let OrdersListComponent = class OrdersListComponent {
    constructor(alertController, toastController, navCtrl) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCoffee"];
        this.faCar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCar"];
        this.faMailBulk = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMailBulk"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.faUserAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserAlt"];
        this.faIdCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faIdCard"];
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faComments"];
        sessionStorage.setItem('Enquiry Rejected', '1');
    }
    ngOnInit() { }
    logoutMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            //  this.AddedToCart(DishName);
                        }
                    },
                    {
                        text: 'Yes',
                        handler: (blah) => {
                            console.log(blah);
                            this.navCtrl.navigateRoot('/home');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
OrdersListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
OrdersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/orders-list/orders-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders-list.component.scss */ "./src/app/main/containers/orders-list/orders-list.component.scss")).default]
    })
], OrdersListComponent);



/***/ }),

/***/ "./src/app/main/containers/otp/otp.component.scss":
/*!********************************************************!*\
  !*** ./src/app/main/containers/otp/otp.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9vdHAvb3RwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/containers/otp/otp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main/containers/otp/otp.component.ts ***!
  \******************************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_regex_regex_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/regex/regex.service */ "./src/app/shared/regex/regex.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let OtpComponent = class OtpComponent {
    constructor(formBuilder, regexService, router, toastCtrl) {
        this.formBuilder = formBuilder;
        this.regexService = regexService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.errorMessages = {
            Otp: [
                { type: 'required', message: 'ओटीपी आवश्यक आहे' },
            ]
        };
        this.registrationForm = this.formBuilder.group({
            Otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.OTP = sessionStorage.getItem('OTP');
        console.log(this.OTP);
    }
    get Otp() {
        return this.registrationForm.get('Otp');
    }
    ngOnInit() {
    }
    submit() {
        let otp = this.registrationForm.get('Otp');
        console.log(otp.value);
        if (otp.value == this.OTP) {
            this.PresentToastLoginSuccessful();
        }
        else if (otp.value !== this.OTP) {
            this.PresentInvalid();
        }
    }
    PresentInvalid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'Invalid Login Credentials',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    PresentToastLoginSuccessful() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'Login Successful',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.router.navigate(['/main/orders']);
        });
    }
};
OtpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_regex_regex_service__WEBPACK_IMPORTED_MODULE_4__["RegexService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
OtpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./otp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/otp/otp.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./otp.component.scss */ "./src/app/main/containers/otp/otp.component.scss")).default]
    })
], OtpComponent);



/***/ }),

/***/ "./src/app/main/containers/profile/profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/containers/profile/profile.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-image: url('taxi-app-development-banner.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\nion-toolbar {\n  background: transparent;\n}\n\n.align {\n  width: 80%;\n  margin: auto;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 1px;\n}\n\n.card .header .avatar {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n  margin-bottom: 97px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKOztBQU1BO0VBQ0ksdUJBQUE7QUFISjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDSSxjQUFBO0FBSko7O0FBTUk7RUFDSSxXQUFBO0FBSlI7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUpaOztBQU1ZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3RheGktYXBwLWRldmVsb3BtZW50LWJhbm5lci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIFxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFsaWdue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgfVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG5cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDk3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/containers/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/containers/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");













const STORAGE_KEY = 'my_images';
let ProfileComponent = class ProfileComponent {
    constructor(router, camera, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, transfer, file, filePath, fileChooser) {
        this.router = router;
        this.camera = camera;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.images = [];
        this.uploadText = "";
        this.downloadText = "";
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadStoredImages();
        });
    }
    UPloadFiLeDrivingLicense() {
        this.fileChooser.open().then((uri) => {
            this.filePath.resolveNativePath(uri).then((nativepath) => {
                this.fileTransfer = this.transfer.create();
                let options = {
                    fileKey: 'file',
                    fileName: 'name.jpg',
                    headers: {},
                    mimeType: 'file/jpg'
                };
                this.uploadText = "uploading...";
                this.fileTransfer.upload(nativepath, 'your endpoint api url', options).then((data) => {
                    alert("Transfer Done = " + JSON.stringify(data));
                    this.uploadText = "";
                }, (err) => {
                    alert(JSON.stringify(err));
                });
            }, (err) => {
                alert(JSON.stringify(err));
            });
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
    UPloadFiLeAadhar() {
        this.fileChooser.open().then((uri) => {
            this.filePath.resolveNativePath(uri).then((nativepath) => {
                this.fileTransfer = this.transfer.create();
                let options = {
                    fileKey: 'file',
                    fileName: 'name.jpg',
                    headers: {},
                    mimeType: 'file/jpg'
                };
                this.uploadText = "uploading...";
                this.fileTransfer.upload(nativepath, 'your endpoint api url', options).then((data) => {
                    alert("Transfer Done = " + JSON.stringify(data));
                    this.uploadText = "";
                }, (err) => {
                    alert(JSON.stringify(err));
                });
            }, (err) => {
                alert(JSON.stringify(err));
            });
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
    loadStoredImages() {
        this.storage.get(STORAGE_KEY).then(images => {
            if (images) {
                let arr = JSON.parse(images);
                this.images = [];
                for (let img of arr) {
                    let filePath = this.file.dataDirectory + img;
                    let resPath = this.pathForImage(filePath);
                    this.images.push({ name: img, path: resPath, filePath: filePath });
                }
            }
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load From Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    }
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error While Storing File');
        });
    }
    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
        });
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };
        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // Trigger change detection Cycle
    }
    createFileName() {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    }
    navigatetobankDetails() {
        this.router.navigate(['/main/bankdetails']);
    }
    deleteImage(imgEntry, position) {
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            let filtered = arr.filter(name => name != imgEntry.name);
            this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('') + 1);
            this.file.removeFile(correctPath, imgEntry.name).then(res => {
                this.presentToast('File Removed');
            });
        });
    }
    startUpload(imgEntry) {
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath).then(entry => {
            entry.file(file => this.readFile(file));
        })
            .catch(err => {
            this.presentToast('Error while reading file');
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    uploadImageData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 5000,
                message: 'Click the backdrop to dismiss early...',
                translucent: true,
                cssClass: 'custom-class custom-loading',
                backdropDismiss: true
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            // console.log('Loading dismissed with role:', role);
            this.http.post("http://localhost:8888/upload.php", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                loading.dismiss();
            })).subscribe(res => {
                if (res['success']) {
                    this.presentToast('File Upload Complete');
                }
                else {
                    this.presentToast('File Upload Failed');
                }
            });
        });
    }
    navigatetosupport() {
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/main/containers/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/main/containers/sign-up/sign-up.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/containers/sign-up/sign-up.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .align {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n:host ion-item {\n  --highlight-height: 0;\n}\n:host ion-item ion-input {\n  font-size: 15px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWluZXJzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVNO0VBRUUscUJBQUE7QUFEUjtBQUlRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFGWiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC5hbGlnbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOTBweCAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLy8gLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/main/containers/sign-up/sign-up.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/containers/sign-up/sign-up.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_admin_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/admin/login.service */ "./src/app/shared/admin/login.service.ts");


// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';



// import { Push, PushObject, PushOptions } from '@ionic-native/push';

let SignUpComponent = class SignUpComponent {
    constructor(loadingCtrl, toastCtrl, router, loginservice) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.loginservice = loginservice;
    }
    ngOnInit() {
        // 
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            mob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
        });
        this.user.get('mob').hasError('minlength');
        this.user.get('mob').hasError('maxlength');
        this.user.get('mob').hasError('required');
        // name: new FormControl('', [Validators.required, Validators.minLength(4)])
        // this.user.get('otp').hasError('required')
        // this.user.get('pass').hasError('minlength')
        let loader = this.loadingCtrl.create({
            spinner: 'crescent',
            duration: 300
        }).then(loader => loader.present());
    }
    submit() {
        let mobile = this.user.get('mob').value;
        // this.loginservice.login(mobile).subscribe((data)=>{
        // console.log(data);
        // if (data['response']==1){
        // let Otp = data['otp']
        // sessionStorage.setItem('OTP',Otp)
        this.PresentToastLoginSuccessful();
        // }
        // else if (data['response']==0){
        // this.PresentToastInvalid()
        // }
        // })
    }
    PresentToastLoginSuccessful() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'Login Successful',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.router.navigate(['/main/orders',]);
        });
    }
    PresentToastInvalid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'Invalid Login Credentials',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_admin_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
];
SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/sign-up/sign-up.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/main/containers/sign-up/sign-up.component.scss")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/main/containers/support/support.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/containers/support/support.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/containers/support/support.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/containers/support/support.component.ts ***!
  \**************************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SupportComponent = class SupportComponent {
    constructor() { }
    ngOnInit() { }
};
SupportComponent.ctorParameters = () => [];
SupportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/support/support.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./support.component.scss */ "./src/app/main/containers/support/support.component.scss")).default]
    })
], SupportComponent);



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/dashboard-menu/dashboard-menu.component */ "./src/app/main/containers/dashboard-menu/dashboard-menu.component.ts");
/* harmony import */ var _containers_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/cart/cart.component */ "./src/app/main/containers/cart/cart.component.ts");
/* harmony import */ var _containers_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/orders-list/orders-list.component */ "./src/app/main/containers/orders-list/orders-list.component.ts");
/* harmony import */ var _containers_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/sign-up/sign-up.component */ "./src/app/main/containers/sign-up/sign-up.component.ts");
/* harmony import */ var _containers_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/forgot-password/forgot-password.component */ "./src/app/main/containers/forgot-password/forgot-password.component.ts");
/* harmony import */ var _containers_info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/info/info.component */ "./src/app/main/containers/info/info.component.ts");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/profile/profile.component */ "./src/app/main/containers/profile/profile.component.ts");
/* harmony import */ var _containers_add_vehicles_add_vehicles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/add-vehicles/add-vehicles.component */ "./src/app/main/containers/add-vehicles/add-vehicles.component.ts");
/* harmony import */ var _containers_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/bank-details/bank-details.component */ "./src/app/main/containers/bank-details/bank-details.component.ts");
/* harmony import */ var _containers_manage_enquiry_manage_enquiry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/manage-enquiry/manage-enquiry.component */ "./src/app/main/containers/manage-enquiry/manage-enquiry.component.ts");
/* harmony import */ var _containers_support_support_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/support/support.component */ "./src/app/main/containers/support/support.component.ts");
/* harmony import */ var _containers_driver_map_driver_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/driver-map/driver-map.component */ "./src/app/main/containers/driver-map/driver-map.component.ts");
/* harmony import */ var _containers_add_passengers_add_passengers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/add-passengers/add-passengers.component */ "./src/app/main/containers/add-passengers/add-passengers.component.ts");
/* harmony import */ var _containers_otp_otp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/otp/otp.component */ "./src/app/main/containers/otp/otp.component.ts");

// core services
















// main components
// import {SubjectSyllabusComponent} from './containers/syllabus/subject-syllabus/subject-syllabus.component'
const routes = [
    { path: '', redirectTo: 'sign_up', pathMatch: 'full' },
    { path: 'dashboard-menu', component: _containers_dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_3__["DashboardMenuComponent"] },
    { path: 'cart', component: _containers_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: 'orders', component: _containers_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_5__["OrdersListComponent"] },
    { path: 'sign_up', component: _containers_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
    { path: 'Forgot', component: _containers_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
    { path: 'info', component: _containers_info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"] },
    { path: 'profile', component: _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'AddVehicles', component: _containers_add_vehicles_add_vehicles_component__WEBPACK_IMPORTED_MODULE_10__["AddVehiclesComponent"] },
    { path: 'bankdetails', component: _containers_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_11__["BankDetailsComponent"] },
    { path: 'ManageEnquiry', component: _containers_manage_enquiry_manage_enquiry_component__WEBPACK_IMPORTED_MODULE_12__["ManageEnquiryComponent"] },
    { path: 'support', component: _containers_support_support_component__WEBPACK_IMPORTED_MODULE_13__["SupportComponent"] },
    { path: 'driverMap', component: _containers_driver_map_driver_map_component__WEBPACK_IMPORTED_MODULE_14__["DriverMapComponent"] },
    { path: 'AddPassenger', component: _containers_add_passengers_add_passengers_component__WEBPACK_IMPORTED_MODULE_15__["AddPassengersComponent"] },
    { path: 'Otp', component: _containers_otp_otp_component__WEBPACK_IMPORTED_MODULE_16__["OtpComponent"] }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainRoutingModule);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _containers_dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/dashboard-menu/dashboard-menu.component */ "./src/app/main/containers/dashboard-menu/dashboard-menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _containers_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/cart/cart.component */ "./src/app/main/containers/cart/cart.component.ts");
/* harmony import */ var _containers_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/orders-list/orders-list.component */ "./src/app/main/containers/orders-list/orders-list.component.ts");
/* harmony import */ var _containers_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/sign-up/sign-up.component */ "./src/app/main/containers/sign-up/sign-up.component.ts");
/* harmony import */ var _containers_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/forgot-password/forgot-password.component */ "./src/app/main/containers/forgot-password/forgot-password.component.ts");
/* harmony import */ var _containers_info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/info/info.component */ "./src/app/main/containers/info/info.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _containers_add_vehicles_add_vehicles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/add-vehicles/add-vehicles.component */ "./src/app/main/containers/add-vehicles/add-vehicles.component.ts");
/* harmony import */ var _containers_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/bank-details/bank-details.component */ "./src/app/main/containers/bank-details/bank-details.component.ts");
/* harmony import */ var _containers_manage_enquiry_manage_enquiry_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/manage-enquiry/manage-enquiry.component */ "./src/app/main/containers/manage-enquiry/manage-enquiry.component.ts");
/* harmony import */ var _containers_support_support_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/support/support.component */ "./src/app/main/containers/support/support.component.ts");
/* harmony import */ var _containers_driver_map_driver_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./containers/driver-map/driver-map.component */ "./src/app/main/containers/driver-map/driver-map.component.ts");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./containers/profile/profile.component */ "./src/app/main/containers/profile/profile.component.ts");
/* harmony import */ var _containers_add_passengers_add_passengers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./containers/add-passengers/add-passengers.component */ "./src/app/main/containers/add-passengers/add-passengers.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/main/modal/modal.component.ts");
/* harmony import */ var _modal_service_modal_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modal-service/modal.service */ "./src/app/main/modal-service/modal.service.ts");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/popover/popover.component */ "./src/app/main/components/popover/popover.component.ts");
/* harmony import */ var _containers_otp_otp_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./containers/otp/otp.component */ "./src/app/main/containers/otp/otp.component.ts");













// import {HttpClientModule} from '@angular/common/http';















// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// import {LoginService} from './shared/Api/login.service'
let MainModule = class MainModule {
};
MainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_6__["MainRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(),
        ],
        declarations: [
            _containers_dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_2__["DashboardMenuComponent"], _containers_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"],
            _containers_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_8__["OrdersListComponent"], _containers_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
            _containers_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"], _containers_info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"],
            _containers_add_passengers_add_passengers_component__WEBPACK_IMPORTED_MODULE_23__["AddPassengersComponent"],
            _containers_add_vehicles_add_vehicles_component__WEBPACK_IMPORTED_MODULE_17__["AddVehiclesComponent"], _containers_otp_otp_component__WEBPACK_IMPORTED_MODULE_27__["OtpComponent"],
            _containers_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_18__["BankDetailsComponent"],
            _containers_manage_enquiry_manage_enquiry_component__WEBPACK_IMPORTED_MODULE_19__["ManageEnquiryComponent"],
            _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_26__["PopoverComponent"],
            _containers_support_support_component__WEBPACK_IMPORTED_MODULE_20__["SupportComponent"], _containers_driver_map_driver_map_component__WEBPACK_IMPORTED_MODULE_21__["DriverMapComponent"], _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_24__["ModalComponent"]
        ],
        entryComponents: [],
        providers: [
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"], _modal_service_modal_service__WEBPACK_IMPORTED_MODULE_25__["ModalService"],
        ],
    })
], MainModule);



/***/ }),

/***/ "./src/app/main/modal-service/modal.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/modal-service/modal.service.ts ***!
  \*****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ModalService = class ModalService {
    constructor() {
        this.modals = [];
        // The modal can close itself. Subscribe to onCloseSubject in a component if you want to do something when a modal closes.
        // Note that you should filter by the specific modal id involved.
        //
        // this.modalService.onCloseSubject
        //  .pipe(filter((id) => id === this.modalID))
        //  .subscribe(() =>
        //    do something
        //  );
        this.onCloseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter((x) => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        setTimeout(() => {
            const modal = this.modals.filter((x) => x.id === id)[0];
            modal.open();
        });
    }
    close(id) {
        // close modal specified by id
        setTimeout(() => {
            const modal = this.modals.filter((x) => x.id === id)[0];
            if (modal) {
                modal.close();
            }
        });
    }
};
ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ModalService);



/***/ }),

/***/ "./src/app/main/modal/modal.component.scss":
/*!*************************************************!*\
  !*** ./src/app/main/modal/modal.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/modal/modal.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/modal/modal.component.ts ***!
  \***********************************************/
/*! exports provided: ResetDirective, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetDirective", function() { return ResetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _modal_service_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-service/modal.service */ "./src/app/main/modal-service/modal.service.ts");




/**
 * To use this ModalComponent add the following html to your template.
 *
 *  <shared-modal id='myId' modalTitle='My Modal'>
 *    <p>Hello World</p>
 *  </shared-modal>
 *
 * Then open the modal with the following Javascript in the controller.
 *
 *  ModalService.open('myId')
 */
// Put this on a custom component within the <shared-model> tags if you want to reset it when the modal closes.
let ResetDirective = class ResetDirective {
    constructor(view) {
        this.view = view;
    }
    get component() {
        return this.view['_data'].componentView.component;
    }
};
ResetDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
ResetDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ResetOnModalClose]' })
], ResetDirective);

let ModalComponent = class ModalComponent {
    constructor(modalService, elementRef) {
        this.modalService = modalService;
        this.elementRef = elementRef;
        this.isOpen = false;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            throw Error('modal must have an id');
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.elementRef.nativeElement);
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when directive is destroyed
    ngOnDestroy() {
        this.close();
        this.modalService.remove(this.id);
        this.elementRef.nativeElement.remove();
    }
    // open modal
    open() {
        this.isOpen = true;
        this.elementRef.nativeElement.style.display = 'block';
        document.body.classList.add('shared-modal--open');
    }
    // close modal
    close() {
        this.modalService.onCloseSubject.next(this.id);
        this.isOpen = false;
        // Only applies to components with the ResetDirective
        let val = typeof this.children === 'undefined';
        if (!val) {
            this.children.forEach((child) => child.component.ngOnInit());
        }
        this.elementRef.nativeElement.style.display = 'none';
        document.body.classList.remove('shared-modal--open');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ModalComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    modalTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    children: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [ResetDirective, { descendants: true },] }]
};
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shared-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/modal/modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal.component.scss */ "./src/app/main/modal/modal.component.scss")).default]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/admin/carservice.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/admin/carservice.service.ts ***!
  \****************************************************/
/*! exports provided: CarserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarserviceService", function() { return CarserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CarserviceService = class CarserviceService {
    constructor() {
        this.data = [
            { id: 0, name: 'Vardan Hingmire', price: 500, passenger: 2 },
            { id: 1, name: 'Datta Sir', price: 450, passenger: 1 },
            { id: 2, name: 'Patil Sir', price: 700, passenger: 2 },
        ];
        this.car = [];
        this.carItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    getProducts() {
        return this.data;
    }
    getcar() {
        return this.car;
    }
    getCarItemCount() {
        return this.carItemCount;
    }
    addProduct(product) {
        let added = false;
        for (let p of this.car) {
            if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            this.car.push(product);
        }
        this.carItemCount.next(this.carItemCount.value + 1);
    }
    decreaseProduct(product) {
        for (let [index, p] of this.car.entries()) {
            if (p.id === product.id) {
                p.amount -= 1;
                if (p.amount == 0) {
                    this.car.splice(index, 1);
                }
            }
        }
        this.carItemCount.next(this.carItemCount.value - 1);
    }
    removeProduct(product) {
        for (let [index, p] of this.car.entries()) {
            if (p.id === product.id) {
                this.carItemCount.next(this.carItemCount.value - p.amount);
                this.car.splice(index, 1);
            }
        }
    }
};
CarserviceService.ctorParameters = () => [];
CarserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarserviceService);



/***/ }),

/***/ "./src/app/shared/admin/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/admin/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const apiUrl = "https://www.gmcabs.in/driver_api/login";
const apiUrl2 = "https://www.gmcabs.in/driver_api/signup";
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(Mobile) {
        return this.http.post(apiUrl, { "mobile": Mobile });
    }
    SignUp(Credentials) {
        console.log(Credentials);
        JSON.stringify(Credentials);
        return this.http.post(apiUrl2, JSON.stringify(Credentials));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/shared/regex/regex.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/regex/regex.service.ts ***!
  \***********************************************/
/*! exports provided: RegexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexService", function() { return RegexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegexService = class RegexService {
    constructor() { }
    // used for FirstName, LastName, City
    get HumanName() {
        return "^[a-zA-Z0-9-.'\\s]*$"; // only alphanumic and space . '
    }
    get Email() {
        return '^.+@.+\\..+$'; // contains @ and . with text surrounding
    }
    get Phone() {
        return '^[7-9][0-9]{9}$'; // max 20 chars, numbers and -
    }
    get otp() {
        return '(\\d{6})'; // max 4 Digits and -
    }
    get Date() {
        return '^[0-9]{2}-[0-9]{2}-[0-9]{4}$'; // mm-dd-yyyy, all numbers
    }
    get Aadhar() {
        return '[0-9]{12}';
    }
    get chequeNumber() {
        return '[0-9]{6}';
    }
    get HexCodePattern() {
        return '^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
    }
    getZip(countryCode = 'US') {
        switch (countryCode) {
            case 'CA':
                return '^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$';
            case 'US':
                return '^[0-9]{5}$'; // US zip - five numbers
        }
    }
};
RegexService.ctorParameters = () => [];
RegexService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
    // These regular expressions are all used for form validation
], RegexService);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map