// Brza provera pravila za upit: node scripts/offer-check.ts
import assert from 'node:assert/strict'
import { fieldProblem, validateOffer } from '../src/lib/offer.ts'
import { linkTag } from '../src/lib/link-tag.ts'

const good = { name: 'Ana Anić', organization: 'Klub', email: 'ana@primer.rs', phone: '060 123 4567', members: 'do 50', message: '' }

assert.ok('offer' in validateOffer(good))
assert.equal(fieldProblem('email', 'nije-mejl'), 'Unesite ispravnu email adresu.')
assert.equal(fieldProblem('phone', '123'), 'Unesite ispravan broj telefona.')
assert.equal(fieldProblem('members', 'milion'), 'Izaberite broj članova.')
assert.equal(fieldProblem('name', '   '), 'Ovo polje je obavezno.')
assert.ok('errors' in validateOffer({ ...good, name: 'x'.repeat(500) }))
assert.ok('errors' in validateOffer({ ...good, message: 'x'.repeat(5000) }))
// prelom reda iz naziva organizacije ne sme u naslov mejla
const r = validateOffer({ ...good, organization: 'Klub\r\nBcc: napad@primer.rs' })
assert.ok('offer' in r && !/[\r\n]/.test(r.offer.organization))
// polja koja nisu tekst se ne prihvataju
assert.ok('errors' in validateOffer({ ...good, name: 42 }))

// oznaka licnog linka: samo slova, brojevi i crtica, bez preloma reda
assert.equal(linkTag(' Harmonija '), 'harmonija')
assert.equal(linkTag('škola-01'), 'škola-01')
assert.equal(linkTag('a\r\nBcc: x'), null)
assert.equal(linkTag(''), null)
assert.equal(linkTag('x'.repeat(41)), null)

console.log('offer-check: sve u redu')
