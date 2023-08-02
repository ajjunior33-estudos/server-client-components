'use client'
import { useContext } from 'react';
import { DialogContext } from '../Context/DialogContext';

export function Dialog() {
    const { open, toggle } = useContext(DialogContext);
    return (
        <>
            {open && (
                <div className="w-10 h-10 bg-red-500">
                    Dialog
                </div>
            )}

            <button onClick={toggle}> Toggle</button>
        </>
    )
}