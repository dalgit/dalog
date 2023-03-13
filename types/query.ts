import { ParsedUrlQuery } from 'querystring'

export interface IQuery extends ParsedUrlQuery {
  keyword: string
}

export interface IParams<T extends string | [string, string]>
  extends ParsedUrlQuery {
  slug: T
}
