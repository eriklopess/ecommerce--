'use client';
import Button from '@/components/Button';
import React from 'react';

function Admin() {
  return (
    <Button text="Admin" type="button" className="bg-slate-500" onClick={() => alert('test')} />
  );
}

export default Admin;