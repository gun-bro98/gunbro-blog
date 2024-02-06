import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default mdxComponents