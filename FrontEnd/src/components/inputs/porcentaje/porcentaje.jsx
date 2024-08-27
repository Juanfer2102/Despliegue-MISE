import { ProgressCircle } from '@tremor/react';

export const ProgressCircleHero = ({value, text}) => (
    <div className="mx-auto grid grid-cols-1 gap-12 border-2 p-5 rounded-xl border-white">
        <p className='text-center'>{text}</p>
        <div className="flex justify-center">
            <ProgressCircle value={value} csize="xl">
                <p className="text-sm items-center justify-center font-bold sticky">{value}%</p>
            </ProgressCircle>
        </div>
    </div>
);