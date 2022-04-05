"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffDate = void 0;
const diffDate = function (time) {
    const timestamp = new Date(time).getTime();
    const refTimestamp = Date.now();
    let diffTimestamp = refTimestamp - timestamp;
    if (diffTimestamp <= 0) { // 兼容小米手机出现1s以内的负值情况
        diffTimestamp = 0;
    }
    const diffSenconds = Math.floor(diffTimestamp / 1000);
    const diffMinutes = Math.floor(diffSenconds / 60);
    const diffHours = Math.floor(diffSenconds / 3600);
    const diffDays = Math.floor(diffSenconds / 86400);
    if (diffDays === 0 && diffHours === 0 && diffMinutes === 0) {
        return `${diffSenconds || 1}秒前`;
    }
    if (diffDays === 0 && diffHours === 0) {
        return `${diffMinutes}分钟前`;
    }
    if (diffDays === 0) {
        return `${diffHours}小时前`;
    }
    return time;
};
exports.diffDate = diffDate;
// # sourceMappingURL=time-util.js.map
