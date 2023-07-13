

export default (durationMillis: number): string => {
  const t = durationMillis / 1000;
  return t < 59 ? `0:${t < 10 ? 0 : ""}${Math.trunc(t)}` : "1:00"
}