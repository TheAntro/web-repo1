import { Button, Paper, NavLink } from 'ui';
import Link from 'next/link';

export default function FrontPage() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <Button />
      <Paper>Here is some content!</Paper>
      <div style={{ display: 'flex', marginTop: '24px' }}>
        <NavLink component={<Link href="/">Link</Link>} />
        <NavLink component={<Link href="/">Link</Link>} />
      </div>
    </div>
  );
}
