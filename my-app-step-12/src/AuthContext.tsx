import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type User = { id: string; name: string } | null;

type AuthActions = {
  login: (name: string) => void;
  logout: () => void;
};

const AuthUserContext = createContext<User | null>(null);
const AuthActionsContext = createContext<AuthActions | null>(null);

export const useAuthUser = (): User => {
  const ctx = useContext(AuthUserContext);
  return ctx;
};

export const useAuthActions = (): AuthActions => {
  const ctx = useContext(AuthActionsContext);

  if (!ctx) {
    throw new Error("useAuthActions must be used within <AuthActionsProvider>");
  }
  return ctx;
};

export const useAuth = (): { user: User; actions: AuthActions } => {
  const user = useAuthUser();
  const actions = useAuthActions();
  return { user, actions };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const login = useCallback(
    (name: string) => setUser({ id: crypto.randomUUID(), name }),
    []
  );
  const logout = useCallback(() => setUser(null), []);
  const actions: AuthActions = { login, logout };

  return (
    <AuthActionsContext.Provider value={actions}>
      <AuthUserContext.Provider value={user}>
        {children}
      </AuthUserContext.Provider>
    </AuthActionsContext.Provider>
  );
};
