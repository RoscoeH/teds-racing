export function currentTimeInSeconds() {
  return Math.floor(Date.now() / 1000);
}

export function range(n) {
  return [...Array(n).keys()];
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
