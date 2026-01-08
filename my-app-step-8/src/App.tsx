//課題１

// import { useEffect } from "react";

// export default function App() {
//   useEffect(() => {
//     alert("コンポーネントがマウントされました");
//   }, []);
//   return <div>App</div>;
// }

//課題２

// import { useEffect, useState } from "react";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// export default function App() {
//   const [requestId, setRequestId] = useState(0);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     if (requestId === 0) return;

//     const fetchUser = async () => {
//       try {
//         const res = await fetch(
//           `https://jsonplaceholder.typicode.com/users/${requestId}`
//         );
//         const data = await res.json();
//         setUser(data);
//         console.log(data);
//       } catch (error) {
//         console.error("失敗:", error);
//       }
//     };
//     fetchUser();
//   }, [requestId]);

//   return (
//     <div>
//       <p>データのフェッチングをuseEffectを使用して行う</p>
//       {user && (
//         <div>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       )}
//       <button onClick={() => setRequestId((n) => n + 1)}>フェッチング</button>
//     </div>
//   );
// }

//課題３
import { useEffect, useState } from "react";

const SetTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    console.log({ time });

    return () => {
      clearInterval(timerId);
      console.log("タイマーを解除しました");
    };
  }, []);

  return (
    <div>
      <p>Timer : {time}</p>
    </div>
  );
};

export default function App() {
  const [isRun, setIsRun] = useState(false);

  return (
    <div>
      {isRun ? <SetTimer /> : <p>TImer is stopped</p>}
      <button onClick={() => setIsRun(!isRun)}>
        {isRun ? "Stop" : "Start"}
      </button>
    </div>
  );
}
