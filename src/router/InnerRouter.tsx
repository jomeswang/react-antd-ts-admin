import React, { Suspense, lazy } from 'react'
import { Switch, Route,RouteProps } from 'react-router-dom';
import PageLoading from '@/components/PageLoading';

const Dashboard = lazy(() => import( /* webpackChunkName:"Dashboard" */ '@/pages/Dashboard'));
const ArticleList = lazy(() => import( /* webpackChunkName:"ArticleList" */ '@/pages/Article/ArticleList'));
const ArticleDetail = lazy(() => import( /* webpackChunkName:"ArticleDetail" */ '@/pages/Article/ArticleDetail'));
const Component = lazy(() => import( /* webpackChunkName:"Component" */ '@/pages/Component'));
const Structure = lazy(() => import( /* webpackChunkName:"Structure" */ '@/pages/structure/Page'));
const NotFound = lazy(() => import( /* webpackChunkName:"NotFound" */ '@/pages/Error/NotFound'));
const User = lazy(() => import( /* webpackChunkName:"User" */ '@/pages/User'));


const routes: RouteProps[] = [{
  path: '/dashboard',
  exact: true,
  component: Dashboard
}, {
  path: '/articleList',
  exact: true,
  component: ArticleList
}, {
  path: '/articleDetail/:id',
  exact: true,
  component: ArticleDetail
}, {
  path: '/component',
  exact: true,
  component: Component
}, {
  path: '/structure',
  exact: true,
  component: Structure
}, {
  path: '/user',
  exact: true,
  component: User
}, {
  path: '*',
  exact: true,
  component: NotFound
}]



const InnerRouter:React.SFC = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      {
        routes.map((route: RouteProps) => {
          const { path } = route;
          return <Route key={path + ''} {...route} />
        })
      }
    </Switch>
  </Suspense>
)


export default InnerRouter;