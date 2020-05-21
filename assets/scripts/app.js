/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nlet finishValue;\r\nlet players = 0;\r\nlet start = 0;\r\nlet roundNum = 0;\r\n\r\n\r\n$('body').ready(startUp);\r\n$('.add-players').click(playerModal);\r\n\r\n\r\nfunction startUp(){\r\n\tfinishValue = prompt(' Enter the value you want to finish the game with.', '500');\r\n\t$('.add-players').focus();\r\n}\r\n\r\nfunction playerModal() {\r\n\t$('#playerModal').modal('show');\r\n\t$(\"#playerModal\").on('shown.bs.modal', function () {\r\n\t\t$('#submitPlayer').click(addPlayer);\r\n\t\t$('input#PlayerName').focus();\r\n\t\t$('#PlayerName').keydown(pressEnter);\t\t//in javascript ---- document.getElementById(\"PlayerName\").addEventListener(\"keydown\", pressEnter);\r\n\t\t\r\n\t})\r\n}\r\n\r\nfunction addPlayer() {\r\n\t$('#tableHead').append(`<th>${$('#PlayerName').val()}</th>`);\r\n\t$('#tableBody').append(`<td class=\"roundValue\">0</td>`);\r\n\tplayers++;\r\n\r\n\tif (start < 1) $('.form-inline').append(`<button type=\"button\" onClick=\"addValues()\" class=\"btn btn-primary btn-lg\">Submit</button>`);\r\n\r\n\twhile (start < players) {\r\n\t\tstart++\r\n\t\t$('.form-inline').append(`<label for=\"${$('#PlayerName').val()}\">${$('#PlayerName').val()}:</label>\r\n\t\t<input type=\"number\" class=\"form-control small-form\" id=\"${$('#PlayerName').val()}\">`);\r\n\t\t$('input#PlayerName').val('');\r\n\t}\r\n\r\n\r\n}\r\n\r\nfunction addValues() {\r\n\troundNum++;\r\n\tlet values = $('.form-control').toArray().map(e => {\r\n\t\treturn parseInt(e.value ? e.value : 0);\r\n\t});\r\n\r\n\tlet priorValues = $('tbody>tr').last().children().toArray().map(e => {\r\n\t\treturn parseInt(isNaN(e.textContent) ? 0 : e.textContent );\r\n\t});\r\n\r\n\r\n\t$('tbody:last-child').append(`<tr id=\"round-${roundNum}\"></tr>`);\r\n\r\n\tfor (let i = 0; i < values.length; i++) {  \r\n\t\t$(`#round-${roundNum}`).append(`<td >${priorValues[i] + values[i]}</td>`);\r\n\t}\r\n\r\n\tcheckTable();\r\n}\r\n\r\nfunction checkTable() {\r\n\tlet round = $('tbody>tr').last().children().toArray().map(e => {\r\n\t\treturn e.textContent;\r\n\t});\r\n\tconst min = Math.min(...round);\r\n\tconst max = Math.max(...round);\r\n\r\n\tconsole.log($('tbody>tr').last().children().filter((i, e) => {\r\n\t\te.textContent == min;\r\n\t\tconsole.log('i:', i);\r\n\t\tconsole.log('e:', e);\r\n\t\tconsole.log($('tbody>tr').last().children().filter((i, e) => e.textContent == min).parents().filter((i,e)=> e));\r\n\t})\r\n\t);\r\n\t$('tbody>tr').last().children().filter((i, e) => e.textContent == min).toggleClass('bg-success');\r\n\t$('tbody>tr').last().children().filter((i, e) => e.textContent == max).toggleClass('bg-danger');\r\n\r\n\tif(max>= finishValue){\r\n\t\t$('#winningModal').modal('show');\r\n\t\t$('.winner').text(`Game finished!!`);\r\n\t\t// $('.winner').text('The Winner: Jordi');\r\n\t\t// $('.losser').text('The Losser: Fernando');\r\n\t}\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBmaW5pc2hWYWx1ZTtcclxubGV0IHBsYXllcnMgPSAwO1xyXG5sZXQgc3RhcnQgPSAwO1xyXG5sZXQgcm91bmROdW0gPSAwO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5yZWFkeShzdGFydFVwKTtcclxuJCgnLmFkZC1wbGF5ZXJzJykuY2xpY2socGxheWVyTW9kYWwpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VXAoKXtcclxuXHRmaW5pc2hWYWx1ZSA9IHByb21wdCgnIEVudGVyIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBmaW5pc2ggdGhlIGdhbWUgd2l0aC4nLCAnNTAwJyk7XHJcblx0JCgnLmFkZC1wbGF5ZXJzJykuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyTW9kYWwoKSB7XHJcblx0JCgnI3BsYXllck1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHQkKFwiI3BsYXllck1vZGFsXCIpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJyNzdWJtaXRQbGF5ZXInKS5jbGljayhhZGRQbGF5ZXIpO1xyXG5cdFx0JCgnaW5wdXQjUGxheWVyTmFtZScpLmZvY3VzKCk7XHJcblx0XHQkKCcjUGxheWVyTmFtZScpLmtleWRvd24ocHJlc3NFbnRlcik7XHRcdC8vaW4gamF2YXNjcmlwdCAtLS0tIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUGxheWVyTmFtZVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmVzc0VudGVyKTtcclxuXHRcdFxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBsYXllcigpIHtcclxuXHQkKCcjdGFibGVIZWFkJykuYXBwZW5kKGA8dGg+JHskKCcjUGxheWVyTmFtZScpLnZhbCgpfTwvdGg+YCk7XHJcblx0JCgnI3RhYmxlQm9keScpLmFwcGVuZChgPHRkIGNsYXNzPVwicm91bmRWYWx1ZVwiPjA8L3RkPmApO1xyXG5cdHBsYXllcnMrKztcclxuXHJcblx0aWYgKHN0YXJ0IDwgMSkgJCgnLmZvcm0taW5saW5lJykuYXBwZW5kKGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPVwiYWRkVmFsdWVzKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5TdWJtaXQ8L2J1dHRvbj5gKTtcclxuXHJcblx0d2hpbGUgKHN0YXJ0IDwgcGxheWVycykge1xyXG5cdFx0c3RhcnQrK1xyXG5cdFx0JCgnLmZvcm0taW5saW5lJykuYXBwZW5kKGA8bGFiZWwgZm9yPVwiJHskKCcjUGxheWVyTmFtZScpLnZhbCgpfVwiPiR7JCgnI1BsYXllck5hbWUnKS52YWwoKX06PC9sYWJlbD5cclxuXHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc21hbGwtZm9ybVwiIGlkPVwiJHskKCcjUGxheWVyTmFtZScpLnZhbCgpfVwiPmApO1xyXG5cdFx0JCgnaW5wdXQjUGxheWVyTmFtZScpLnZhbCgnJyk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFZhbHVlcygpIHtcclxuXHRyb3VuZE51bSsrO1xyXG5cdGxldCB2YWx1ZXMgPSAkKCcuZm9ybS1jb250cm9sJykudG9BcnJheSgpLm1hcChlID0+IHtcclxuXHRcdHJldHVybiBwYXJzZUludChlLnZhbHVlID8gZS52YWx1ZSA6IDApO1xyXG5cdH0pO1xyXG5cclxuXHRsZXQgcHJpb3JWYWx1ZXMgPSAkKCd0Ym9keT50cicpLmxhc3QoKS5jaGlsZHJlbigpLnRvQXJyYXkoKS5tYXAoZSA9PiB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQoaXNOYU4oZS50ZXh0Q29udGVudCkgPyAwIDogZS50ZXh0Q29udGVudCApO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0JCgndGJvZHk6bGFzdC1jaGlsZCcpLmFwcGVuZChgPHRyIGlkPVwicm91bmQtJHtyb3VuZE51bX1cIj48L3RyPmApO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykgeyAgXHJcblx0XHQkKGAjcm91bmQtJHtyb3VuZE51bX1gKS5hcHBlbmQoYDx0ZCA+JHtwcmlvclZhbHVlc1tpXSArIHZhbHVlc1tpXX08L3RkPmApO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tUYWJsZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1RhYmxlKCkge1xyXG5cdGxldCByb3VuZCA9ICQoJ3Rib2R5PnRyJykubGFzdCgpLmNoaWxkcmVuKCkudG9BcnJheSgpLm1hcChlID0+IHtcclxuXHRcdHJldHVybiBlLnRleHRDb250ZW50O1xyXG5cdH0pO1xyXG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnJvdW5kKTtcclxuXHRjb25zdCBtYXggPSBNYXRoLm1heCguLi5yb3VuZCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKCQoJ3Rib2R5PnRyJykubGFzdCgpLmNoaWxkcmVuKCkuZmlsdGVyKChpLCBlKSA9PiB7XHJcblx0XHRlLnRleHRDb250ZW50ID09IG1pbjtcclxuXHRcdGNvbnNvbGUubG9nKCdpOicsIGkpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2U6JywgZSk7XHJcblx0XHRjb25zb2xlLmxvZygkKCd0Ym9keT50cicpLmxhc3QoKS5jaGlsZHJlbigpLmZpbHRlcigoaSwgZSkgPT4gZS50ZXh0Q29udGVudCA9PSBtaW4pLnBhcmVudHMoKS5maWx0ZXIoKGksZSk9PiBlKSk7XHJcblx0fSlcclxuXHQpO1xyXG5cdCQoJ3Rib2R5PnRyJykubGFzdCgpLmNoaWxkcmVuKCkuZmlsdGVyKChpLCBlKSA9PiBlLnRleHRDb250ZW50ID09IG1pbikudG9nZ2xlQ2xhc3MoJ2JnLXN1Y2Nlc3MnKTtcclxuXHQkKCd0Ym9keT50cicpLmxhc3QoKS5jaGlsZHJlbigpLmZpbHRlcigoaSwgZSkgPT4gZS50ZXh0Q29udGVudCA9PSBtYXgpLnRvZ2dsZUNsYXNzKCdiZy1kYW5nZXInKTtcclxuXHJcblx0aWYobWF4Pj0gZmluaXNoVmFsdWUpe1xyXG5cdFx0JCgnI3dpbm5pbmdNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHQkKCcud2lubmVyJykudGV4dChgR2FtZSBmaW5pc2hlZCEhYCk7XHJcblx0XHQvLyAkKCcud2lubmVyJykudGV4dCgnVGhlIFdpbm5lcjogSm9yZGknKTtcclxuXHRcdC8vICQoJy5sb3NzZXInKS50ZXh0KCdUaGUgTG9zc2VyOiBGZXJuYW5kbycpO1xyXG5cdH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });