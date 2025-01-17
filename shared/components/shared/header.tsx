import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { Container, SearchInput } from '@/shared/components/shared';
import Image from 'next/image';
import { Button } from '@/shared/components/ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Image src='/logo.png' alt='Logo' width={35} height={35} />
            <div>
              <div className='text-2xl uppercase font-black'>Next Pizza</div>
              <div className='text-sm text-gray-400 leading-3'>вкуснее уже некуда</div>
            </div>
          </div>
        </Link>

        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <User size={16} />
            Профиль
          </Button>

          <div>
            <Button className='group relative'>
              <b>520 ₽</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart size={16} className='relative' strokeWidth={2} />
                <b>12</b>
              </div>
              <ArrowRight
                size={20}
                className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
