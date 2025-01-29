import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../../components/navigation/PageNav";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Message from "../../components/common/message/Message";
import Button from "../../components/common/button/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("udit@commerciax.com");
  const [password, setPassword] = useState("qwerty123");
  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        console.log("User is authenticated, navigating to /app");
        navigate("/app", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {error && <Message message={error} />}

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
