const FOLLOWING = 'kubix:following';
const VISITED = 'kubix:visited';
const MAX = 30;

function read(key: string): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function write(key: string, list: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch {
    /* storage lleno o bloqueado */
  }
}

export const getFollowing = () => read(FOLLOWING);
export const getVisited = () => read(VISITED);
export const isFollowing = (key: string) => read(FOLLOWING).includes(key);

export function trackVisit(key: string) {
  write(VISITED, [key, ...read(VISITED).filter((k) => k !== key)].slice(0, MAX));
}

/** Devuelve true si quedó siguiendo, false si lo dejó de seguir. */
export function toggleFollow(key: string): boolean {
  const list = read(FOLLOWING);
  const has = list.includes(key);
  write(FOLLOWING, has ? list.filter((k) => k !== key) : [key, ...list]);
  return !has;
}