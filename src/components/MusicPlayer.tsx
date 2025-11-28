/** @format */

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { mockSongs } from '@/constant';

export default function MusicPlayer() {
  return (
    <div className='items-center flex flex-col justify-evenly h-full'>
      <h1 className='font-bold text-2xl py-5'>Song recommendations</h1>
      {mockSongs.map((v: any) => (
        <Card key={v} className='h-fit w-md'>
          <CardHeader className='items-center flex-wrap justify-between'>
            <CardTitle className='text-2xl'>{v.title}</CardTitle>
            <CardDescription>{v.artist}</CardDescription>
            <CardDescription>{v.album}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant='outline' size='icon' aria-label='Submit'>
              <Play />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
