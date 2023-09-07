"use client"
import React, { useEffect, useState } from 'react';

function StatusIndicator() {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };

    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const statusColor = online ? 'green' : 'red';

  return (
    <div className='flex items-center justify-center px-2 py-1  rounded-lg bg-white'>
        <label className='font-medium'>Fun Feature 🤩</label> 
        <div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        margin: '10px',
        backgroundColor: statusColor,
        color:statusColor
      }}
    >
    </div>
<div
 style={{
    color:statusColor
  }}
>
{online?"You are Online":"You are Offline"}
</div>
    </div>
  );
}

export default StatusIndicator;
