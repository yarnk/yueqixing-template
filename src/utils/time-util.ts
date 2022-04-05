export const diffDate =  (time)=> {
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
  if (diffDays === 1){
    return `昨天`;
  }
  if (diffDays === 2){
    return `前天`;
  }
  return `${diffDays}天前`;
};

export function formatTime(time){
  let date = new Date(time);
  let year = date.getFullYear();
  // 在日期格式中，月份是从0开始的，因此要加0，使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
  let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  // 拼接
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  // return year + "-" + month + "-" + day;
}
export function dateFormat(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  // 在日期格式中，月份是从0开始的，因此要加0，使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
  let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  // 拼接
  // return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  return year + "-" + month + "-" + day;
}

