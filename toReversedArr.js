function digitize(n) {
  const arr = String(n).split("").reverse();
  return arr.map((el) => Number(el));
}
