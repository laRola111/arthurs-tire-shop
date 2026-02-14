export default function FloatingActionButton() {
  return (
    <a
      href="tel:5122907012"
      className="fixed bottom-6 right-6 md:hidden z-50 bg-accent-yellow text-black rounded-full p-4 shadow-2xl flex items-center justify-center animate-bounce"
    >
      <span className="material-icons text-3xl">phone_in_talk</span>
    </a>
  );
}
