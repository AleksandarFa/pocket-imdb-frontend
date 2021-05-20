export function retrieveMsgs(obj) {
  let msgs = [];
  for (let key in obj) {
    msgs.push(obj[key]);
  }
  return msgs;
}
