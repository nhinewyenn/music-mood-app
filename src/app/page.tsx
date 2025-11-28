/** @format */

import Camera from '@/components/Camera';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex justify-evenly min-h-screen w-full max-w-full items-center py-25 px-12 bg-white dark:bg-black sm:items-start'>
        <Camera />
        <MusicPlayer />
      </main>
    </div>
  );
}
