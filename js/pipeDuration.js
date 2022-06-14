export function pipeDuration(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return(`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`)
//   return (
//     (hours < 10 ? "0" : "") +
//     hours +
//     ":" +
//     (hours < 10 ? "0" : "") +
//     minutes
//   );
}
