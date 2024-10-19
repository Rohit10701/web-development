import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { format } from "url";


interface ShallowRoutingProps{
    initialPropsCounter : number
}
const ShallowRouting = ({initialPropsCounter} : ShallowRoutingProps) => {
    const router = useRouter();
    const { pathname, query } = router;
    const reload = () => {
      router.push(format({ pathname, query }));
    };

    const incrementCounter = () => {
      const currentCounter = query.counter ? parseInt(query.counter as string) : 0;
      const href = `/shallow-routing?counter=${currentCounter + 1}`;
  
      router.push(href, href, { shallow: true });
    };
  
    return (
      <div className='flex flex-col gap-4'>
        <h2>This is the Home Page</h2>
        <Link href="/">Home Page</Link>
        <button onClick={reload}>Reload</button>
        <button onClick={incrementCounter}>Change State Counter</button>
        <p>"getServerSideProps" ran for "{initialPropsCounter}" times.</p>
        <p>Counter: "{query.counter || 0}".</p>
      </div>
    )
}

export default ShallowRouting

let counter = 0

export async function getServerSideProps() {
	counter++
	return { props: { initialPropsCounter: counter } }
}
