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
      <h1 className='font-bold text-2xl py-5'>Songs for your mood</h1>
      <div id='card-wrapper' className='space-y-5 p-2 border-2'>
        {mockSongs.map((v: any) => (
          <Card key={v.id} className='h-fit w-md '>
            <CardHeader className='items-center flex-wrap justify-between'>
              <CardTitle className='text-2xl'>{v.title}</CardTitle>
              <CardDescription>{v.artist}</CardDescription>
              <CardDescription>{v.album}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant='outline' size='sm' aria-label='Submit'>
                Preview
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
