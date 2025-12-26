'use client';

import * as React from 'react';

export type FancyCheckboxProps = {
  id:string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  checkedText?: string;
  checkColor?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
};

const SIZE = {
  sm: { box: 'h-4 w-4', icon: 'h-3.5 w-3.5' },
  md: { box: 'h-5 w-5', icon: 'h-4 w-4' },
  lg: { box: 'h-6 w-6', icon: 'h-5 w-5' },
} as const;

export function FancyCheckbox({
  id,
  checked,
  onCheckedChange,
  checkedText = '已選取',
  checkColor = '#2563eb',
  size = 'md',
  disabled = false,
  className = '',
}: FancyCheckboxProps) {
//   const id = React.useId();
  const s = SIZE[size];
  const checkboxStyle: React.CSSProperties & { '--cb': string } = {
    '--cb': checkColor,
  };

  React.useEffect(() => {
    if (checked) {
      console.log('Id:', id);
    }
  }, [checked, id]);
  return (
    <label
      htmlFor={id}
      className={[
        'inline-flex items-center gap-3 select-none',
        disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
        className,
      ].join(' ')}
      style={checkboxStyle}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={[
          'relative grid place-items-center rounded-md',
          'border border-zinc-300/70 bg-white',
          'shadow-[0_1px_0_rgba(0,0,0,0.06)]',
          'transition-all duration-200',
          'ring-offset-2 ring-offset-white',
          s.box,
          disabled ? '' : 'hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)] active:scale-[0.98]',
          'focus-visible:outline-none focus-visible:ring-4',
        ].join(' ')}
      >
        {/* checked 底色 */}
        <span
          className={[
            'absolute inset-0 rounded-md transition-opacity duration-200',
            checked ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{ backgroundColor: 'var(--cb)' }}
        />

        {/* 內發光 */}
        <span
          className={[
            'pointer-events-none absolute inset-0 rounded-md',
            checked ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-200',
            'bg-gradient-to-b from-white/25 to-transparent',
          ].join(' ')}
        />

        {/* 白色勾勾 */}
        <svg
          viewBox="0 0 24 24"
          className={[
            'relative transition-all duration-200',
            checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
            s.icon,
          ].join(' ')}
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>

      {/* 只有勾選後才顯示 */}
      {checked ? (
        <span className="text-sm font-medium" style={{ color: 'var(--cb)' }}>
          {checkedText}
        </span>
      ) : null}
    </label>
  );
}
