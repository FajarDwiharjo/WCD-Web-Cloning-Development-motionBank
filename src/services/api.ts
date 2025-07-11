// API Service for MotionBank
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.motionbank.id';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface ApiOptions {
  headers?: Record<string, string>;
  timeout?: number;
}

class ApiService {
  private baseURL: string;
  private defaultTimeout: number;

  constructor(baseURL: string = API_BASE_URL, timeout: number = 10000) {
    this.baseURL = baseURL;
    this.defaultTimeout = timeout;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit & ApiOptions = {}
  ): Promise<ApiResponse<T>> {
    const {
      headers = {},
      timeout = this.defaultTimeout,
      ...fetchOptions
    } = options;

    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('motionbank_token');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
          ...headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error) {
        return {
          success: false,
          error: error.message,
        };
      }
      
      return {
        success: false,
        error: 'An unexpected error occurred',
      };
    }
  }

  // Authentication endpoints
  async login(email: string, password: string) {
    return this.request<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any) {
    return this.request<{ token: string; user: any }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async refreshToken() {
    const refreshToken = localStorage.getItem('motionbank_refresh_token');
    return this.request<{ token: string }>('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  }

  // User endpoints
  async getUserProfile() {
    return this.request<any>('/user/profile');
  }

  async updateUserProfile(userData: any) {
    return this.request<any>('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async changePassword(currentPassword: string, newPassword: string) {
    return this.request('/user/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  // Account endpoints
  async getAccountBalance() {
    return this.request<{ balance: number; currency: string }>('/account/balance');
  }

  async getTransactionHistory(page: number = 1, limit: number = 20) {
    return this.request<{ transactions: any[]; total: number; currentPage: number }>(`/account/transactions?page=${page}&limit=${limit}`);
  }

  async getAccountDetails() {
    return this.request<any>('/account/details');
  }

  // Banking services
  async transfer(data: { toAccount: string; amount: number; description?: string }) {
    return this.request('/banking/transfer', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async payBill(data: { billType: string; accountNumber: string; amount: number }) {
    return this.request('/banking/pay-bill', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async topUp(data: { provider: string; phoneNumber: string; amount: number }) {
    return this.request('/banking/top-up', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Investment services
  async getInvestmentProducts() {
    return this.request<any[]>('/investment/products');
  }

  async createDeposit(data: { amount: number; term: number; interestRate: number }) {
    return this.request('/investment/deposit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getPortfolio() {
    return this.request<any>('/investment/portfolio');
  }

  // Loan services
  async getLoanProducts() {
    return this.request<any[]>('/loan/products');
  }

  async applyLoan(data: { amount: number; purpose: string; term: number }) {
    return this.request('/loan/apply', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getLoanApplications() {
    return this.request<any[]>('/loan/applications');
  }

  // Content endpoints
  async getBlogPosts(page: number = 1, category?: string) {
    const params = new URLSearchParams({ page: page.toString() });
    if (category) params.append('category', category);
    return this.request<{ posts: any[]; total: number }>(`/content/blog?${params}`);
  }

  async getBlogPost(slug: string) {
    return this.request<any>(`/content/blog/${slug}`);
  }

  async getPromotions() {
    return this.request<any[]>('/content/promotions');
  }

  async getNotifications() {
    return this.request<any[]>('/notifications');
  }

  async markNotificationAsRead(id: string) {
    return this.request(`/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  // Support endpoints
  async submitSupportTicket(data: { subject: string; message: string; category: string }) {
    return this.request('/support/ticket', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getSupportTickets() {
    return this.request<any[]>('/support/tickets');
  }

  async getFAQs(category?: string) {
    const params = category ? `?category=${category}` : '';
    return this.request<any[]>(`/support/faq${params}`);
  }

  // Utility methods
  async uploadFile(file: File, type: 'avatar' | 'document') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    return this.request<{ url: string }>('/upload', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  async getExchangeRates() {
    return this.request<any>('/utility/exchange-rates');
  }

  async getLocations() {
    return this.request<any[]>('/utility/locations');
  }
}

export const apiService = new ApiService();
export default apiService;