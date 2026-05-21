export default function AiWidget() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50">
      <button className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-lg ai-pulse hover:scale-110 transition-transform cursor-pointer">
        <span className="material-symbols-outlined text-[28px]">smart_toy</span>
      </button>
    </div>
  );
}
