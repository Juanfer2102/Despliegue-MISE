import { ProgressCircle } from '@tremor/react';

export function ProgressCircleUsageExample() {
    return (
        <div className="flex justify-center space-x-5 items-center">
            <ProgressCircle value={75} size="md" color="indigo">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-500">
                    SV
                </span>
            </ProgressCircle>
        </div>
    );
}