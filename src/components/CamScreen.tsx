/** @format */

import React, { useRef, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

export default function CamScreen() {
  const vidRef = useRef<any>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io('http://localhost:3001'); // Replace with your server URL

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const sendVidData = (data: string) => {
    socketRef.current?.emit('videoData', data);
  };
  useEffect(() => {
    const enableVidStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setMediaStream(stream);
      } catch (err) {
        console.error('Error accessing webcam', err);
      }
    };
    enableVidStream();
  }, []);

  useEffect(() => {
    if (vidRef.current && mediaStream) {
      vidRef.current.srcObject = mediaStream;
    }
  }, [vidRef, mediaStream]);

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [mediaStream]);

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [mediaStream]);

  return <video ref={vidRef} autoPlay={true} />;
}
