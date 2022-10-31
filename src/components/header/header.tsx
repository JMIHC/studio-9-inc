import { component$ } from '@builder.io/qwik';
import logo from '/images/icon-256x256.png';

export default component$(() => {

  return (
    <header>
      <img className='mx-auto' src={logo} />
    </header>
  );
});
