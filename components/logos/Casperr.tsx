import Image from 'next/image';

const Casperr = ({ className }: { className?: string }) => (
  <Image
    src="/Casperr.svg"
    alt="Casperr Logo"
    className={className}
    width={100}
    height={100}
  />
);

export default Casperr; 