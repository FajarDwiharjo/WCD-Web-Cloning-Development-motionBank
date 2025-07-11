// Storage Service for MotionBank
// Provides a consistent interface for localStorage operations

interface StorageItem<T> {
  value: T;
  timestamp: number;
  expires?: number;
}

class StorageService {
  private prefix: string;

  constructor(prefix: string = 'motionbank_') {
    this.prefix = prefix;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  // Set item with optional expiration
  set<T>(key: string, value: T, expiresInMs?: number): void {
    try {
      const item: StorageItem<T> = {
        value,
        timestamp: Date.now(),
        expires: expiresInMs ? Date.now() + expiresInMs : undefined,
      };

      localStorage.setItem(this.getKey(key), JSON.stringify(item));
    } catch (error) {
      console.error('Error setting storage item:', error);
    }
  }

  // Get item with expiration check
  get<T>(key: string): T | null {
    try {
      const itemStr = localStorage.getItem(this.getKey(key));
      if (!itemStr) return null;

      const item: StorageItem<T> = JSON.parse(itemStr);
      
      // Check if item has expired
      if (item.expires && Date.now() > item.expires) {
        this.remove(key);
        return null;
      }

      return item.value;
    } catch (error) {
      console.error('Error getting storage item:', error);
      return null;
    }
  }

  // Remove item
  remove(key: string): void {
    try {
      localStorage.removeItem(this.getKey(key));
    } catch (error) {
      console.error('Error removing storage item:', error);
    }
  }

  // Clear all items with prefix
  clear(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(this.prefix)
      );
      
      keys.forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  // Check if item exists and is not expired
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  // Get all keys with prefix
  keys(): string[] {
    try {
      return Object.keys(localStorage)
        .filter(key => key.startsWith(this.prefix))
        .map(key => key.replace(this.prefix, ''));
    } catch (error) {
      console.error('Error getting storage keys:', error);
      return [];
    }
  }

  // Get storage usage info
  getUsage(): { used: number; total: number; percentage: number } {
    try {
      let used = 0;
      const total = 5 * 1024 * 1024; // 5MB typical localStorage limit

      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          used += localStorage[key].length + key.length;
        }
      }

      return {
        used,
        total,
        percentage: Math.round((used / total) * 100),
      };
    } catch (error) {
      console.error('Error getting storage usage:', error);
      return { used: 0, total: 0, percentage: 0 };
    }
  }
}

// Specialized storage services
class AuthStorageService extends StorageService {
  constructor() {
    super('motionbank_auth_');
  }

  setToken(token: string, expiresInMs?: number): void {
    this.set('token', token, expiresInMs);
  }

  getToken(): string | null {
    return this.get('token');
  }

  setRefreshToken(refreshToken: string): void {
    this.set('refresh_token', refreshToken);
  }

  getRefreshToken(): string | null {
    return this.get('refresh_token');
  }

  setUser(user: any): void {
    this.set('user', user);
  }

  getUser(): any {
    return this.get('user');
  }

  clearAuth(): void {
    this.clear();
  }
}

class PreferencesStorageService extends StorageService {
  constructor() {
    super('motionbank_prefs_');
  }

  setTheme(theme: 'light' | 'dark' | 'system'): void {
    this.set('theme', theme);
  }

  getTheme(): 'light' | 'dark' | 'system' | null {
    return this.get('theme');
  }

  setLanguage(language: string): void {
    this.set('language', language);
  }

  getLanguage(): string | null {
    return this.get('language');
  }

  setNotificationPreferences(prefs: any): void {
    this.set('notifications', prefs);
  }

  getNotificationPreferences(): any {
    return this.get('notifications');
  }

  setCurrency(currency: string): void {
    this.set('currency', currency);
  }

  getCurrency(): string | null {
    return this.get('currency');
  }
}

class CacheStorageService extends StorageService {
  constructor() {
    super('motionbank_cache_');
  }

  cacheData(key: string, data: any, ttlMs: number = 5 * 60 * 1000): void {
    this.set(key, data, ttlMs);
  }

  getCachedData<T>(key: string): T | null {
    return this.get<T>(key);
  }

  invalidateCache(pattern?: string): void {
    if (pattern) {
      const keys = this.keys().filter(key => key.includes(pattern));
      keys.forEach(key => this.remove(key));
    } else {
      this.clear();
    }
  }
}

// Export instances
export const storage = new StorageService();
export const authStorage = new AuthStorageService();
export const preferencesStorage = new PreferencesStorageService();
export const cacheStorage = new CacheStorageService();

export default storage;