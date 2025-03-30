import { create } from "zustand";

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
};

const useAuthStore = create<AuthState>((set: (partial: Partial<AuthState>) => void) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

export default useAuthStore;

