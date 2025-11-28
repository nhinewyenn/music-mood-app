/** @format */

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EmotionHistory() {
  return (
    <Card className='h-full w-md'>
      <CardHeader className='items-center flex-wrap justify-between'>
        <CardTitle>Emotion History</CardTitle>
        <CardDescription>
          see all of your previous emotions here
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
