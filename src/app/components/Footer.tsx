export default function Footer() {
  return (
    <div className="flex items-center self-center justify-center">
      Made in{" "}
      <span className="px-1 text-2xl font-bold bg-gradient-to-r from-[var(--flag-blue)] to-[var(--flag-yellow)] text-transparent bg-clip-text">
        Ukraine
      </span>{" "}
      {/* TODO: вставити посилання наприклад на GitHub або Instagramm */}
      by d1, 2025
    </div>
  );
}
