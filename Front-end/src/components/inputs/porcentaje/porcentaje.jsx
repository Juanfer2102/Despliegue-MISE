import { ProgressCircle } from '@tremor/react';

export const ProgressCircleHero = ({value, color}) => (
    <div className="mx-auto grid grid-cols-1 gap-12 border-2 p-5 rounded-xl border-white">
        <p className='text-center'>No desarrollado</p>
        <div className="flex justify-center">
            <ProgressCircle value={value} color={color} csize="lg">
                <span className="text-sm items-center justify-center font-bold text-slate-700">{value}%</span>
            </ProgressCircle>
        </div>
    </div>
);