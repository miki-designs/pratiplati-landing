/** Oznaka iz licnog linka (?za=harmonija): slova, brojevi i crtica, do 40 znakova; inace null */
export function linkTag(raw: string | null | undefined): string | null {
  const v = (raw ?? '').trim().toLowerCase()
  return /^[\p{L}\p{N}-]{1,40}$/u.test(v) ? v : null
}
