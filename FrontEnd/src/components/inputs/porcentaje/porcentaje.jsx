import { ProgressCircle } from '@tremor/react';
import PropTypes from 'prop-types';

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

ProgressCircleHero.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};