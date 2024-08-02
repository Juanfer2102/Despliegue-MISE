import { useState } from 'react';

import { Dialog, DialogPanel } from '@tremor/react';

export default function Example() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex items-center justify-center py-36">
                <button
                    type="button"
                    className="whitespace-nowrap rounded-tremor-default bg-red-500 px-4 py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-red-600 dark:bg-red-500 dark:text-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-red-600"
                    onClick={() => setIsOpen(true)}
                >
                    Guardar
                </button>
            </div>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                static={true}
                className="z-[100]"
            >
                <DialogPanel className="sm:max-w-md">
                    <div className="absolute right-0 top-0 pr-3 pt-3">
                        <button
                            type="button"
                            className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                        >
                            
                        </button>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}