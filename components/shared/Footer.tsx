import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="sm:wrapper flex flex-col items-center justify-between gap-2 p-2 text-center sm:flex-row sm:p-5">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={80}
            height={19}
          />
        </Link>
        <p>2024 Evently All Right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
