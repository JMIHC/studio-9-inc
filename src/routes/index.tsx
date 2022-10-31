import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';
import { primaryFeatures, secondaryFeatures } from '~/features';

export default component$(() => {
  return (
    <div className='mx-auto'>
      <div className='pb-12 w-full sm:w-1/2 mx-auto'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Lectus proin nibh nisl condimentum id venenatis. 
          Purus gravida quis blandit turpis cursus in.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {primaryFeatures.map(i => 
          <div className='bg-slate-600 p-6 hover:-m-4 text-white h-40'>
            {i.title}
          </div>  
        )}
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-4 pt-4'>
        {secondaryFeatures.map(i => 
          <div className='bg-purple-500 p-4 hover:-m-4 text-white h-24'>
            {i.title}
          </div>
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Studio 9 Inc',
};

{/* <Link class="mindblow" href="/flower">
Blow my mind 🤯
</Link> */}