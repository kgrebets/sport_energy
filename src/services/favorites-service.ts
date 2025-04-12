import { ExerciseResponse } from '../js/types/response.types';

const FAVORITES_KEY = 'favorites';

export const FAVORITES_UPDATED_EVENT = 'favorites-updated';

export const favoritesService = {
  getFavoriteIds(): string[] {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  },

  isFavorite(id: string): boolean {
    const favorites = this.getFavoriteIds();
    return favorites.includes(id);
  },

  addFavorite(id: string): void {
    const favorites = this.getFavoriteIds();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      this.notifyFavoritesUpdated();
    }
  },

  removeFavorite(id: string): void {
    const favorites = this.getFavoriteIds();
    const index = favorites.indexOf(id);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      this.notifyFavoritesUpdated();
    }
  },

  toggleFavorite(id: string): boolean {
    if (this.isFavorite(id)) {
      this.removeFavorite(id);
      return false;
    } else {
      this.addFavorite(id);
      return true;
    }
  },

  notifyFavoritesUpdated(): void {
    const event = new CustomEvent(FAVORITES_UPDATED_EVENT, {
      detail: {
        favorites: this.getFavoriteIds(),
      },
    });
    document.dispatchEvent(event);
  },
};
