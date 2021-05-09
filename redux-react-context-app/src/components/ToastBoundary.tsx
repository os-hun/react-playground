import React from 'react';
import { useCustomToast } from '../hooks/useCustomToast';

type Props = {
  children: React.ReactNode;
}

export function ToastBoundary({ children }: Props) {
  useCustomToast();

  return (
    <div>
      {children}
    </div>
  );
}
