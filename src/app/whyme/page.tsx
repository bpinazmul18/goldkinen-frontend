import Image from "next/image";
import Link from "next/link";

export default function WhyMe() {
  return (
    <div className="container mx-auto px-4">
      <Link href="/" className="block mb-10">
        Home
      </Link>

      <h2 className="font-semibold text-2xl capitalize mb-4">why me?</h2>

      <ul className="space-y-1 text-gray-500 list-disc list-inside mb-20">
        <li>
          100% Performance, Accessibility, Best Practice, and SEO (Check Image
          bellow) by Lighthouse.
        </li>

        <li>Well Structure, Clean Code and Documentation Oriented.</li>
        <li>
          4 Years of Professional Working Experience{" "}
          <Link
            className="underline font-semibold"
            href="https://nazu-next.vercel.app/"
            target="_blank"
          >
            Portfolio
          </Link>
        </li>
      </ul>

      <Image
        src="/images/performance.png"
        className="h-auto w-auto"
        alt="Performace image by lighthouse"
        height={600}
        width={600}
        priority={true}
      />
    </div>
  );
}
