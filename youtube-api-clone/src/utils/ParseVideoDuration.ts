// export const parseVideoDuration = (duration: string): string => {
//   const durationParts: string[] = duration.replace("PT", "").replace("Hs", ":").replace("M", ":").replace("S", "").split(":");
//   if (durationParts.length === 3) {
//     return `${duration[0]}:${parseInt((durationParts [1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
//     )}:${parseInt(
//      ( durationParts[2]) < 9 ? `0${durationParts[2]}` : durationParts[2]
//     )}`;
//   }
//   if (durationParts.length === 2) {
//     return `${duration[0]}:${parseInt(
//       durationParts[1] < 9 ? `0${durationParts[1]}` : durationParts[1]
//     )}`;
//   }
//   if (durationParts.length === 1) {
//     return `${duration[0]}:${parseInt(
//       durationParts[0] < 9 ? `0${durationParts[0]}` : durationParts[0]
//     )}`;
//   }
//   return "";
// };
export const parseVideoDuration = (duration: string): string => {
  // Replace 'H', 'M', 'S' with appropriate symbols and split by ':'
  const durationParts: string[] = duration
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  // Function to pad single digits with leading zero
  const pad = (num: string) => (parseInt(num) < 10 ? `0${num}` : num);

  if (durationParts.length === 3) {
    return `${pad(durationParts[0])}:${pad(durationParts[1])}:${pad(
      durationParts[2]
    )}`;
  }
  if (durationParts.length === 2) {
    return `${pad(durationParts[0])}:${pad(durationParts[1])}`;
  }
  if (durationParts.length === 1) {
    return `00:${pad(durationParts[0])}`;
  }
  return "00:00"; // Default return in case of empty or invalid input
};
