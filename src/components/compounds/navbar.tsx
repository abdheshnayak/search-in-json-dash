import { Github } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="h-16 min-h-16 flex items-center gap-2 border-b px-4 justify-between">
      <div>
        Search in JSON
      </div>
      <div>
        <Button variant="link" size="icon">
          <Link href={"github.com/abdheshnayak/search-in-json"}>
            <Github />
          </Link>
        </Button>
      </div>
    </div>
  );
}
