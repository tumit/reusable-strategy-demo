import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { Member } from './member';

export class ReusableRouteStrategy implements RouteReuseStrategy {
  // handlers to store detached route
  private handlers: { [key: string]: DetachedRouteHandle } = {};
  private reusableUrls = ['members'];

  /**
   * Determines if this route (and its subtree) should be detached to be reused later
   * @param route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldDetach', route);
    return this.reusable(route);
  }

  /**
   * Stores the detached route.
   */
  store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
    console.log('store', handler);
    if (handler) {
      this.handlers[this.getUrl(route)] = handler;
    }
  }
  /**
   * Determines if this route (and its subtree) should be reattached
   * @param route Stores the detached route.
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldAttach', route);
    return (
      (!!route.queryParamMap.get('reusable') || this.forceReuse(this.getUrl(route))) &&
      !!this.handlers[this.getUrl(route)]
    );
  }

  private forceReuse(url: string) {
    console.log('url', url);
    return this.reusableUrls.find(u => u === url);
  }

  /**
   * Retrieves the previously stored route
   */
  retrieve(route: ActivatedRouteSnapshot): {} {
    console.log('retrieve: route', route);
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    }
    console.log('retrieve: this.handlers[this.getUrl(route)]', this.handlers[this.getUrl(route)]);
    return this.handlers[this.getUrl(route)];
  }

  /**
   * Determines if a route should be reused
   * @param future
   * @param current
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('shouldReuseRoute: future.routeConfig', future.routeConfig);
    console.log('shouldReuseRoute: curr.routeConfig', curr.routeConfig);
    return future.routeConfig === curr.routeConfig;
  }

  private getUrl(route: ActivatedRouteSnapshot): string {
    return route.routeConfig ? route.routeConfig.path : '';
  }

  private reusable(route: ActivatedRouteSnapshot) {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }
    return route.routeConfig.data && route.routeConfig.data.reusable;
  }
}
