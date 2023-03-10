"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomUsers = exports.userLeave = exports.getCurrentUser = exports.userJoin = void 0;
const users = [];
// 用户加入
function userJoin(id, username, room) {
    const user = { id, username, room };
    users.push(user);
    return user;
}
exports.userJoin = userJoin;
// 获取当前用户
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}
exports.getCurrentUser = getCurrentUser;
// 用户离开
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}
exports.userLeave = userLeave;
// 获取房间用户
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}
exports.getRoomUsers = getRoomUsers;
