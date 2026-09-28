"use client";

import { useState } from 'react';

const features = [
  'Product inventory and pricing control',
  'Sales pipeline and forecasting',
  'HR onboarding and performance insights',
  'Customer 360 and support lifecycle',
];

const metrics = [
  { value: '12.4k', label: 'Orders tracked' },
  { value: '94%', label: 'Retention' },
  { value: '3.2x', label: 'Growth' },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'reset'>('login');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden px-4 py-8 text-slate-900 md:px-8">
      <div className="mx-auto grid min-h-[760px] max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/30 shadow-[0_25px_70px_rgba(15,23,42,0.38)] backdrop-blur-md lg:grid-cols-[1.12fr_0.88fr]">
        <aside className="relative overflow-hidden p-8 text-white md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_35%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-xl font-extrabold shadow-[0_12px_30px_rgba(59,130,246,0.4)]">
                J
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase tracking-[0.20em] text-sky-100/70">ERP</span>
                <strong className="text-2xl font-bold">JerryOS</strong>
              </div>
            </div>

            <div className="mt-16 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-200/80">Smart operations, one dashboard</p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.06em] md:text-5xl lg:text-[4rem] leading-[1.04]">
                Move faster with an all-in-one business control center.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-200/80">
                Manage products, sales pipelines, employee operations, and customer relationships from one secure platform.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.08em] text-slate-300/75">{metric.label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-10 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-base text-slate-100/90">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200 p-5 md:p-8">
          <div className="w-full max-w-[470px] rounded-[26px] border border-slate-200/80 bg-white/75 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-md sm:p-7">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Welcome back</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-900">Access your ERP workspace</h2>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-2 rounded-2xl bg-slate-200/80 p-2">
              {[
                { id: 'login', label: 'Log in' },
                { id: 'register', label: 'Register' },
                { id: 'reset', label: 'Reset' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as 'login' | 'register' | 'reset')}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'login' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="login-email" className="text-sm font-semibold text-slate-800">Email address</label>
                  <input id="login-email" type="email" placeholder="name@company.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="login-password" className="text-sm font-semibold text-slate-800">Password</label>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showLoginPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-16 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600"
                    >
                      {showLoginPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />
                    Remember me
                  </label>
                  <button type="button" onClick={() => setActiveTab('reset')} className="text-sm font-semibold text-blue-600">
                    Forgot password?
                  </button>
                </div>

                <button type="button" className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5">
                  Log in to dashboard
                </button>

                <div className="relative my-5 text-center">
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-slate-200" />
                  <span className="relative bg-white/80 px-3 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                    or continue with
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5">
                    Google
                  </button>
                  <button type="button" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5">
                    Microsoft
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'register' && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-semibold text-slate-800">First name</label>
                    <input id="first-name" type="text" placeholder="John" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-semibold text-slate-800">Last name</label>
                    <input id="last-name" type="text" placeholder="Smith" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-800">Company</label>
                  <input id="company" type="text" placeholder="Jerry Distribution" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-email" className="text-sm font-semibold text-slate-800">Work email</label>
                  <input id="register-email" type="email" placeholder="john@company.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-password" className="text-sm font-semibold text-slate-800">Create password</label>
                  <div className="relative">
                    <input
                      id="register-password"
                      type={showRegisterPassword ? 'text' : 'password'}
                      placeholder="At least 8 characters"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-16 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600"
                    >
                      {showRegisterPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-slate-600">
                  <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 accent-blue-600" />
                  I agree to the terms and privacy policy.
                </label>

                <button type="button" className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5">
                  Create account
                </button>
              </div>
            )}

            {activeTab === 'reset' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="reset-email" className="text-sm font-semibold text-slate-800">Email address</label>
                  <input id="reset-email" type="email" placeholder="name@company.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Enter your email and we’ll send a secure reset link to recover your account.
                </p>

                <button type="button" className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5">
                  Send reset link
                </button>

                <button type="button" onClick={() => setActiveTab('login')} className="w-full rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5">
                  Back to sign in
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
