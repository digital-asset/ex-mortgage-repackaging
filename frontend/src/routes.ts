import { IContractsState } from './containers/UserStore';
import { matchPath } from 'react-router';
import { Location } from 'history'

const mk = (ref: string) => `/mortgage_pool_agreement_draft/${ref}`
const mkMatcher =
  (path: string, exact: boolean) =>
    (location: Location) =>
      !!matchPath(location.pathname, { exact, path });

const pathnameByType = {
  agreements: "/mortgage_pool_agreements",
  draft: mk(':ref'),
  drafts: "/mortgage_pool_agreement_drafts",
  pools: "/mortgage_pools",
  proposals: "/mortgage_pool_agreement_proposals"
}

export const routeByName = {
  agreements: {
    match: mkMatcher(pathnameByType.agreements, true),
    pathname: pathnameByType.agreements,
  },
  draft: {
    match: mkMatcher(mk(""), false),
    mkEdit: (ref: string) => mk(encodeURIComponent(ref)),
    mkNew: () => mk("new"),
    pathname: pathnameByType.draft,
  },
  drafts: {
    match: mkMatcher(pathnameByType.drafts, true),
    pathname: pathnameByType.drafts
  },
  pools: {
    match: mkMatcher(pathnameByType.pools, true),
    pathname: pathnameByType.pools
  },
  proposals: {
    match: mkMatcher(pathnameByType.proposals, true),
    pathname: pathnameByType.proposals
  },
}

export function contractsListLocation(type: keyof IContractsState){
  return routeByName[type].pathname
}

export function isActiveRoute(location: Location, type: keyof IContractsState){
  return type === 'drafts'
    ? routeByName.draft.match(location) || routeByName.drafts.match(location)
    : routeByName[type].match(location)
}