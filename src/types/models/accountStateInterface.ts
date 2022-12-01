export interface Rated {
  value: number;
}

export interface AccountStates {
  favorite: boolean;
  id: number;
  rated: Rated;
  watchlist: boolean;
}
