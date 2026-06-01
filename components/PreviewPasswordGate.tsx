"use client";

import type { ReactNode } from "react";
import { FormEvent, useEffect, useState } from "react";

const SESSION_KEY = "saisaicoomi-preview-authenticated";

type PreviewPasswordGateProps = {
  children: ReactNode;
  password?: string;
};

export function PreviewPasswordGate({
  children,
  password,
}: PreviewPasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(!password);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!password) {
      setIsAuthenticated(true);
      return;
    }

    setIsAuthenticated(sessionStorage.getItem(SESSION_KEY) === "true");
  }, [password]);

  if (!password || isAuthenticated) {
    return <>{children}</>;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue === password) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("パスワードが正しくありません。");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="flex min-h-screen items-center justify-center px-5 py-12">
        <section className="w-full max-w-md rounded-[28px] border border-brand-navy/10 bg-[#fffaf4] px-7 py-9 text-center shadow-[0_22px_60px_rgba(7,19,107,0.10)]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8bd83] bg-white text-lg font-bold text-brand-navy shadow-sm">
            SC
          </div>
          <p className="text-xs font-bold tracking-[0.24em] text-brand-wine">
            PREVIEW SITE
          </p>
          <h1 className="mt-3 text-2xl font-bold tracking-[0.1em] text-brand-navy">
            SAISAICOOMI
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            確認用ページです。
            <br />
            パスワードを入力してください。
          </p>
          <form onSubmit={handleSubmit} className="mt-7 text-left">
            <label className="block text-sm font-bold text-brand-navy" htmlFor="preview-password">
              パスワード
            </label>
            <input
              id="preview-password"
              type="password"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                setError("");
              }}
              className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-white px-4 py-3 text-base outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10"
              autoComplete="current-password"
              autoFocus
            />
            {error ? (
              <p className="mt-3 text-sm font-bold text-brand-wine" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-navy px-8 py-4 text-sm font-bold tracking-[0.16em] text-white shadow-[0_16px_34px_rgba(7,19,107,0.20)] transition hover:-translate-y-0.5 hover:bg-brand-wine"
            >
              ENTER
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
