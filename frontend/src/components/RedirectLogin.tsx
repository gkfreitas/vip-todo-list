'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { setToken, verifyToken } from '../api/api';

export default function RedirectLogin() {
  const router = useRouter();
  useEffect(() => {
    async function verify() {
      try {
        const localToken = localStorage.getItem('token') ?? '';
        setToken(localToken);
        await verifyToken();
        router.push('/main');
      } catch (err) {
        console.log(err);
      }
    }
    verify();
  });
  return (
    <div />
  );
}
