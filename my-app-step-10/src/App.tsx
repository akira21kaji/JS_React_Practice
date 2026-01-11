// //課題１
// import { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");

//   return (
//     <main style={{ padding: 24 }}>
//       <h1>Controlled Input</h1>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value.trimStart())}
//         placeholder="お名前を入力"
//       />
//       <p>入力中の名前: {name || "（未入力）"}</p>
//     </main>
//   );
// }

// //課題２
// import { useState } from "react";

// type FormState = {
//   email: string;
//   password: string;
// };

// export default function App() {
//   const [form, setForm] = useState<FormState>({ email: "", password: "" });
//   const [error, setError] = useState<string | null>(null);
//   const [submitted, setSubmitted] = useState<FormState | null>(null);

//   const handleChange = <K extends keyof FormState>(
//     key: K,
//     value: FormState[K]
//   ) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // ざっくりバリデーション（例）
//     if (!form.email.endsWith("@example.com")) {
//       setError("メールアドレスの形式が正しくありません");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("パスワードは6文字以上にしてください");
//       return;
//     }

//     setError(null);
//     setSubmitted(form);
//     // 送信後クリアしたい場合
//     setForm({ email: "", password: "" });
//   };

//   return (
//     <main style={{ padding: 24, display: "grid", gap: 12, maxWidth: 420 }}>
//       <h1>ログイン（デモ）</h1>

//       <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
//         <label>
//           メール：
//           <input
//             type="email"
//             value={form.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             placeholder="you@example.com"
//             autoComplete="email"
//           />
//         </label>

//         <label>
//           パスワード：
//           <input
//             type="password"
//             value={form.password}
//             onChange={(e) => handleChange("password", e.target.value)}
//             placeholder="6文字以上"
//             autoComplete="current-password"
//           />
//         </label>

//         <button type="submit">送信</button>
//       </form>

//       {error && <p style={{ color: "crimson" }}>{error}</p>}

//       {submitted && (
//         <section>
//           <h2>送信内容</h2>
//           <pre>{JSON.stringify(submitted, null, 2)}</pre>
//         </section>
//       )}
//     </main>
//   );
// }

// //課題３
// import { useState } from "react";

// type Hobby = "golf" | "music" | "coding";

// type FormState = {
//   title: string;
//   detail: string;
//   priority: "low" | "mid" | "high";
//   hobby: Hobby[];
//   done: boolean;
// };

// export default function App() {
//   const [form, setForm] = useState<FormState>({
//     title: "",
//     detail: "",
//     priority: "mid",
//     hobby: [],
//     done: false,
//   });

//   const handleChange = <K extends keyof FormState>(
//     key: K,
//     value: FormState[K]
//   ) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   return (
//     <main style={{ padding: 24, display: "grid", gap: 12, maxWidth: 560 }}>
//       <h1>複数フォーム要素の制御</h1>

//       <label>
//         タイトル：
//         <input
//           value={form.title}
//           onChange={(e) => handleChange("title", e.target.value)}
//           placeholder="TODOのタイトル"
//         />
//       </label>

//       <label>
//         詳細：
//         <textarea
//           value={form.detail}
//           onChange={(e) => handleChange("detail", e.target.value)}
//           placeholder="詳細を入力"
//           rows={4}
//         />
//       </label>

//       <label>
//         優先度：
//         <select
//           value={form.priority}
//           onChange={(e) =>
//             handleChange("priority", e.target.value as FormState["priority"])
//           }
//         >
//           <option value="low">低</option>
//           <option value="mid">中</option>
//           <option value="high">高</option>
//         </select>
//       </label>

//       <label>
//         趣味：
//         <input
//           type="checkbox"
//           checked={form.hobby?.includes("golf")}
//           onChange={(e) =>
//             handleChange(
//               "hobby",
//               e.target.checked
//                 ? [...form.hobby, "golf"]
//                 : (form.hobby.filter((h) => h !== "golf") as Hobby[])
//             )
//           }
//         />
//         <label>ゴルフ</label>
//         <input
//           type="checkbox"
//           checked={form.hobby?.includes("music")}
//           onChange={(e) =>
//             handleChange(
//               "hobby",
//               e.target.checked
//                 ? [...form.hobby, "music"]
//                 : (form.hobby.filter((h) => h !== "music") as Hobby[])
//             )
//           }
//         />
//         <label>音楽</label>
//         <input
//           type="checkbox"
//           checked={form.hobby?.includes("coding")}
//           onChange={(e) =>
//             handleChange(
//               "hobby",
//               e.target.checked
//                 ? [...form.hobby, "coding"]
//                 : (form.hobby.filter((h) => h !== "coding") as Hobby[])
//             )
//           }
//         />
//         <label>コーディング</label>
//       </label>

//       <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
//         <input
//           type="checkbox"
//           checked={form.done}
//           onChange={(e) => handleChange("done", e.target.checked)}
//         />
//         完了済みにする
//       </label>

//       <section style={{ paddingTop: 8 }}>
//         <h2>状態プレビュー</h2>
//         <pre>{JSON.stringify(form, null, 2)}</pre>
//       </section>
//     </main>
//   );
// }

//課題４ 5
import { useState } from "react";

type FormState = {
  email: string;
  password: string;
};

export default function App() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const handleChange = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    // ざっくりバリデーション（例）
    if (!form.email.includes("@")) {
      setError("メールアドレスの形式が正しくありません");
    } else if (form.password.length < 6) {
      setError("パスワードは6文字以上にしてください");
    } else {
      setError(null);
    }

    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (error) {
      return;
    }

    setSubmitted(form);
    // 送信後クリアしたい場合
    setForm({ email: "", password: "" });
  };

  // const handleCheckEnter = (e: React.FormEvent) => {
  //   if (form.email.includes("@") && form.password.length >= 6) {
  //     setIsEnterPressed(true);
  //     setError(null);
  //   } else {
  //     setIsEnterPressed(false);
  //     setError(
  //       "メールアドレスの形式が正しくありませんまたはパスワードは6文字以上にしてください"
  //     );
  //   }
  // };

  return (
    <main style={{ padding: 24, display: "grid", gap: 12, maxWidth: 420 }}>
      <h1>ログイン（デモ）</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label>
          メール：
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label>
          パスワード：
          <input
            type="password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="6文字以上"
            autoComplete="current-password"
          />
        </label>
        {error ? (
          <button type="submit" disabled={true}>
            送信
          </button>
        ) : (
          <button type="submit">送信</button>
        )}
      </form>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {submitted && (
        <section>
          <h2>送信内容</h2>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </section>
      )}
    </main>
  );
}
