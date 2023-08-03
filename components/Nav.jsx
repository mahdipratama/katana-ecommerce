import Link from 'next/link';
import Image from 'next/image';

function Nav() {
  return (
    <nav className="flex items-center justify-between my-10">
      <div className="logo">
        <Link href={'/'}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={180}
            height={180}
          />
        </Link>
      </div>
      <ul className="text-[18px] font-light flex gap-11">
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/anime'}>
          <li>Anime katana</li>
        </Link>
        <Link href={'/custom'}>
          <li>Custom katana</li>
        </Link>
        <Link href={'/tanto'}>
          <li>Tanto</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
