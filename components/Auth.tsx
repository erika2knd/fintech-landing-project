"use client";
import * as React from "react";

type DemoUser = { name: string; email: string; passHash: string };

const LS_KEY = "demo_user";
const BUS_KEY = "demo_auth_bus"; 

async function sha256(text: string) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function readUser(): DemoUser | null {
  if (typeof localStorage === "undefined") return null;
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as DemoUser;
  } catch {
    return null;
  }
}

function writeUser(u: DemoUser | null) {
  if (typeof localStorage === "undefined") return;
  if (u) localStorage.setItem(LS_KEY, JSON.stringify(u));
  else localStorage.removeItem(LS_KEY);
  localStorage.setItem(BUS_KEY, Date.now().toString());
}

type AuthContextType = {
  user: Pick<DemoUser, "name" | "email"> | null;
  signup: (name: string, email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  login: (email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<Pick<DemoUser, "name" | "email"> | null>(null);

  React.useEffect(() => {
    setUser(() => {
      const u = readUser();
      return u ? { name: u.name, email: u.email } : null;
    });

    const onStorage = (e: StorageEvent) => {
      if (e.key === BUS_KEY) {
        const u = readUser();
        setUser(u ? { name: u.name, email: u.email } : null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const signup = React.useCallback(async (name: string, email: string, password: string) => {
    if (!name.trim()) return { ok: false as const, error: "Please enter your name" };
    if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false as const, error: "Please enter a valid email" };
    if (password.length < 6) return { ok: false as const, error: "Password must be at least 6 characters" };

    const passHash = await sha256(password);
    const userObj: DemoUser = { name: name.trim(), email: email.toLowerCase(), passHash };
    writeUser(userObj);
    setUser({ name: userObj.name, email: userObj.email });
    return { ok: true as const };
  }, []);

  const login = React.useCallback(async (email: string, password: string) => {
    const u = readUser();
    if (!u) return { ok: false as const, error: "No account found. Please sign up first." };
    const passHash = await sha256(password);
    if (u.email.toLowerCase() !== email.toLowerCase() || u.passHash !== passHash) {
      return { ok: false as const, error: "Incorrect email or password" };
    }
    setUser({ name: u.name, email: u.email });
    writeUser(u); 
    return { ok: true as const };
  }, []);

  const logout = React.useCallback(() => {
    writeUser(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
