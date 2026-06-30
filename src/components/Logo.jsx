export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 100 100" className="text-cyan-500 dark:text-cyan-400">
        <rect x="8" y="8" width="84" height="84" rx="20" fill="currentColor" fillOpacity="0.12" />
        <rect x="18" y="18" width="64" height="64" rx="14" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M36 30v40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="64" cy="50" r="14" stroke="currentColor" strokeWidth="8" fill="none" />
      </svg>

      <span className="text-xl font-bold tracking-wide">
        <span className="text-black dark:text-white">Binary</span>
        <span className="text-cyan-500 dark:text-cyan-400">
          Base
        </span>
      </span>
    </div>
  );
}