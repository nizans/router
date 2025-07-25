/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as MultiBlockersIndexRouteImport } from './routes/multi-blockers.index'
import { Route as BlockingIndexRouteImport } from './routes/blocking.index'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const MultiBlockersIndexRoute = MultiBlockersIndexRouteImport.update({
  id: '/multi-blockers/',
  path: '/multi-blockers/',
  getParentRoute: () => rootRouteImport,
} as any)
const BlockingIndexRoute = BlockingIndexRouteImport.update({
  id: '/blocking/',
  path: '/blocking/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blocking': typeof BlockingIndexRoute
  '/multi-blockers': typeof MultiBlockersIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blocking': typeof BlockingIndexRoute
  '/multi-blockers': typeof MultiBlockersIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/blocking/': typeof BlockingIndexRoute
  '/multi-blockers/': typeof MultiBlockersIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/blocking' | '/multi-blockers'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/blocking' | '/multi-blockers'
  id: '__root__' | '/' | '/blocking/' | '/multi-blockers/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlockingIndexRoute: typeof BlockingIndexRoute
  MultiBlockersIndexRoute: typeof MultiBlockersIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/multi-blockers/': {
      id: '/multi-blockers/'
      path: '/multi-blockers'
      fullPath: '/multi-blockers'
      preLoaderRoute: typeof MultiBlockersIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/blocking/': {
      id: '/blocking/'
      path: '/blocking'
      fullPath: '/blocking'
      preLoaderRoute: typeof BlockingIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlockingIndexRoute: BlockingIndexRoute,
  MultiBlockersIndexRoute: MultiBlockersIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
