import { ProgressCircle } from '@tremor/react';
import PropTypes from 'prop-types';

export const ProgressCircleHero = ({ value, text, value1, value2, width }) => (
  <div className={`${width} mx-auto grid grid-cols-1 gap-12 border-2 p-5 rounded-xl border-white relative`}>
    <p className='text-center'>{text}</p>
    <div className="flex justify-center relative">
      <ProgressCircle value={value} csize="xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm font-bold">{value1}-{value2}</p>
        </div>
      </ProgressCircle>
    </div>
  </div>
);

ProgressCircleHero.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
