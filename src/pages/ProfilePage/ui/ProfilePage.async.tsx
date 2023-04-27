import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise((resolve) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // Временная искусственная задержка
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    }),
);
