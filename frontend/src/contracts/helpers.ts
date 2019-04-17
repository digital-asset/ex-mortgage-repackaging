import { Moment } from 'moment';

export function prettyMoney(m: number): string {
  return '$' + (Math.round(m * 100) / 100)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function prettyDate(m: Moment | undefined) {
  return m ? m.local().format('M/D/YYYY') : ''
}