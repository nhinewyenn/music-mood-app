/** @format */

'use client';
import CamScreen from './CamScreen';
import EmotionHistory from './EmotionHistory';

export default function Camera() {
  return (
    <div className='items-center flex gap-10 flex-col justify-evenly h-full'>
      <h1 className='font-bold text-2xl'>Camera</h1>
      <CamScreen />
      <EmotionHistory />
    </div>
  );
}
