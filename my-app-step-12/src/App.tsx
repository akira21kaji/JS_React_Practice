import { useState } from "react";
import { AuthProvider, useAuth, useAuthUser } from "./AuthContext";

const LoginPanel = () => {
  const { user, actions } = useAuth();
  const { login, logout } = actions;
  const [name, setName] = useState("");

  if (user) {
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span>ようこそ、{user.name} さん</span>
        <button onClick={logout}>ログアウト</button>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name) login(name);
      }}
      style={{ display: "flex", gap: 8, alignItems: "center" }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ユーザー名"
      />
      <button type="submit">ログイン</button>
    </form>
  );
};

const DeepRouteContent = () => {
  const user = useAuthUser();

  return (
    <section style={{ paddingTop: 16 }}>
      <h2>深い子でもユーザーにアクセス可</h2>
      <p>ログイン状態: {user ? user.name : "未ログイン"}</p>
    </section>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <main style={{ padding: 24 }}>
        <h1>AuthContext デモ</h1>
        <LoginPanel />
        <DeepRouteContent />
      </main>
    </AuthProvider>
  );
}
