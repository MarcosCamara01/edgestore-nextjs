import Edgestore from '@/components/edgestore';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-96'>
        <Edgestore />
      </div> 
    </main>
  );
}