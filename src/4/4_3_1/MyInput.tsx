import { useEffect, useRef } from 'react';

export default function MyInput(
    {
        value,
        onChange
    }: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []); // [] - чтобы фокусировалось ТОЛЬКО при первом появлении

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}
