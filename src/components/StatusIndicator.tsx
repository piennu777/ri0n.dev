'use client';

import { useEffect, useState } from 'react';

interface StatusResponse {
  page: {
    name: string;
    url: string;
    status: string;
  };
}

export default function StatusIndicator() {
  const [statusMessage, setStatusMessage] = useState('〇 Unknown Status');

  useEffect(() => {
    async function getStatus() {
      try {
        const res = await fetch('https://piennu.instatus.com/summary.json');
        
        if (!res.ok) {
          throw new Error('Failed to fetch status');
        }

        const data = await res.json() as StatusResponse;

        if (!data?.page?.status) {
          throw new Error('Invalid data structure');
        }

        const status = data.page.status.toUpperCase();

        if (['UP', 'HASISSUES', 'UNDERMAINTENANCE'].includes(status)) {
          setStatusMessage('All systems normal');
        } else if (['INVESTIGATING', 'IDENTIFIED', 'MONITORING', 'RESOLVED'].includes(status)) {
          setStatusMessage('System Problems');
        } else if (['NOTSTARTEDYET', 'INPROGRESS', 'COMPLETED'].includes(status)) {
          setStatusMessage('Maintenance performed');
        } else {
          setStatusMessage('Unknown Status');
        }
      } catch (error) {
        console.error('Error fetching status:', error);
        setStatusMessage('Unknown Status');
      }
    }

    getStatus();
    const interval = setInterval(getStatus, 300000);

    return () => clearInterval(interval);
  }, []);

  return <a className="status" href="https://piennu.instatus.com/" style={{ display: 'flex', alignItems: 'center' }}>
    <i className="bi bi-circle" style={{ marginRight: '5px', fontSize: '10px' }}></i>
    {statusMessage}
  </a>;
}
