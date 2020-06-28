"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/** @return git user info
 * @example getUsuario('gaetano1979')
 * @param {string} ingressar el username del user git
 * @description ingresar el username of git user */
function getUsuario(usuario) {
    const url = `https://api.github.com/users/${usuario}`;
    return axios_1.default.get(url).then(data => data.data).catch(console.log);
}
exports.getUsuario = getUsuario;
getUsuario('gaetano1979').then(console.log);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUI7OzttREFHbUQ7QUFDbkQsU0FBZ0IsVUFBVSxDQUFDLE9BQWU7SUFDdEMsTUFBTSxHQUFHLEdBQUcsZ0NBQWdDLE9BQU8sRUFBRSxDQUFDO0lBQ3RELE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBSEQsZ0NBR0M7QUFFRCxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vKiogQHJldHVybiBnaXQgdXNlciBpbmZvXHJcbiAqIEBleGFtcGxlIGdldFVzdWFyaW8oJ2dhZXRhbm8xOTc5JylcclxuICogQHBhcmFtIHtzdHJpbmd9IGluZ3Jlc3NhciBlbCB1c2VybmFtZSBkZWwgdXNlciBnaXRcclxuICogQGRlc2NyaXB0aW9uIGluZ3Jlc2FyIGVsIHVzZXJuYW1lIG9mIGdpdCB1c2VyICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc3VhcmlvKHVzdWFyaW86IHN0cmluZyl7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzdWFyaW99YDtcclxuICAgIHJldHVybiBheGlvcy5nZXQodXJsKS50aGVuKGRhdGEgPT4gZGF0YS5kYXRhKS5jYXRjaChjb25zb2xlLmxvZyk7XHJcbn1cclxuXHJcbmdldFVzdWFyaW8oJ2dhZXRhbm8xOTc5JykudGhlbihjb25zb2xlLmxvZyk7XHJcblxyXG5cclxuIl19