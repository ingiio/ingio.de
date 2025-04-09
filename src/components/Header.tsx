// src/components/Header.tsx
export default function Header() {
    return (
      <header className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ingio.is</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  