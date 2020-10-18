import React from 'react';

type LoadingProps = { loadingText: string }

export const Loading = ({ loadingText }: LoadingProps) => {
    return (
        <div>{loadingText}</div>
    );

}

