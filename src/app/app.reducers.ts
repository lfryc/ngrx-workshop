import {createSelector} from '@ngrx/store';
import {AppState} from './app-state';
import {Params, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouteStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    return { url, queryParams };
  }
}

export const selectRouterState = (state: AppState) => (state.router ? state.router.state : null);
export const selectRouterUrl = createSelector(selectRouterState, (routerState) => routerState ? routerState.url : null);
