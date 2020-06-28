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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUI7OzttREFHbUQ7QUFDbkQsU0FBZ0IsVUFBVSxDQUFDLE9BQWU7SUFDdEMsTUFBTSxHQUFHLEdBQUcsZ0NBQWdDLE9BQU8sRUFBRSxDQUFDO0lBQ3RELE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLyoqIEByZXR1cm4gZ2l0IHVzZXIgaW5mb1xyXG4gKiBAZXhhbXBsZSBnZXRVc3VhcmlvKCdnYWV0YW5vMTk3OScpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbmdyZXNzYXIgZWwgdXNlcm5hbWUgZGVsIHVzZXIgZ2l0XHJcbiAqIEBkZXNjcmlwdGlvbiBpbmdyZXNhciBlbCB1c2VybmFtZSBvZiBnaXQgdXNlciAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXN1YXJpbyh1c3VhcmlvOiBzdHJpbmcpe1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c3VhcmlvfWA7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCkudGhlbihkYXRhID0+IGRhdGEuZGF0YSkuY2F0Y2goY29uc29sZS5sb2cpO1xyXG59XHJcbiJdfQ==