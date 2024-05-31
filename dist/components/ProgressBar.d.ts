import { PropsWithChildren } from 'react';
import { BoxProps } from './Box';

type Props = {
    value: number;
} & Partial<{
    backgroundColor: string;
    className: string;
    color: string;
    height: string | number;
    maxValue: number;
    minValue: number;
    ranges: Record<string, [number, number]>;
    style: Partial<HTMLDivElement['style']>;
    title: string;
    width: string | number;
}> & Partial<BoxProps> & PropsWithChildren;
export declare const ProgressBar: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
