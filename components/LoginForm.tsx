"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, { error: "" });

  return (
    <div className="container-page section flex justify-center">
      <div className="card w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
        <form action={formAction} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm">
            Password
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:border-brand"
            />
          </label>
          {state?.error && <p className="text-sm text-brand">{state.error}</p>}
          <button type="submit" disabled={pending} className="btn btn-primary">
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
