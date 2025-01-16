"use client";

import Hero from '@/components/Hero';
import { useState } from 'react';
import { Shield, Users, Truck, Clock } from 'lucide-react';
import TabsContainer from '../components/TabsContainer';

export default async function Home() {
  

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Hero />
     
    </main>
  );
}