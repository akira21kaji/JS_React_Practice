import { useEffect, useRef, useState } from "react";

type Repo = { id: number; name: string; stargazers_count: number };

type GithubResponse = {
  items: Repo[];
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function App() {
  const acRef = useRef<AbortController | null>(null);

  const [query, setQuery] = useState("react");
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestId, setRequestId] = useState(0);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [needsRetry, setNeedsRetry] = useState(false);

  const handleAbort = () => {
    acRef.current?.abort();
    setNeedsRetry(true); //入力が変わってなくても「再検索」ボタンを表示させるため
    console.log("abort");
  };

  const handleRetry = () => {
    setNeedsRetry(false);
    setRequestId((x) => x + 1);
  };

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(id);
  }, [query]);

  useEffect(() => {
    //二重リクエスト防止
    if (loading) return;
    if (!debouncedQuery) {
      setRepos([]);
      return;
    }

    const ac = new AbortController();
    acRef.current = ac;

    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const currentId = requestId;

        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error("タイムアウト")), 10000);
        });

        const fetchPromise = (async () => {
          await sleep(5000);
          return fetch(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(
              debouncedQuery
            )}&sort=stars&order=desc&per_page=5`,
            { signal: ac.signal }
          );
        })();

        console.log(`start request: ${currentId}`);
        const res = await Promise.race([fetchPromise, timeoutPromise]);
        console.log(`end request: ${currentId}`);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: GithubResponse = await res.json();
        setRepos(json.items);
      } catch (e) {
        if (e instanceof Error) {
          if (e.name === "AbortError") return;
          if (e.message === "タイムアウト") {
            ac.abort();
            setError("タイムアウト");
            return;
          }
          setError(e.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    run();
    // 依存が変わる（次のrunへ切り替わる）タイミングで前回を中断
    return () => ac.abort();
  }, [debouncedQuery, requestId]);

  return (
    <main style={{ padding: 24, display: "grid", gap: 12, maxWidth: 640 }}>
      <h1>検索に応じて再取得（中断あり）</h1>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (loading) setNeedsRetry(true);
        }}
        placeholder="キーワード（例: react, vue, nextjs）"
      />

      {loading && (
        <div>
          <p>Loading...</p>
          {loading && <button onClick={handleAbort}>中断</button>}
        </div>
      )}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      {error === "タイムアウト" && (
        <p style={{ color: "crimson" }}>タイムアウトしました</p>
      )}
      {repos && (
        <ul>
          {repos.map((r) => (
            <li key={r.id}>
              {r.name} ⭐ {r.stargazers_count}
            </li>
          ))}
        </ul>
      )}
      {!loading && needsRetry && <button onClick={handleRetry}>再試行</button>}
      {!loading && !needsRetry && (
        <button onClick={() => setRequestId((x) => x + 1)}>検索</button>
      )}
    </main>
  );
}
