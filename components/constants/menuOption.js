import Link from 'next/link';

const Option = ({ label, url }) => (
  <Link href={url}>
    <a className="option-menu">{label}</a>
  </Link>
);

export default Option;
