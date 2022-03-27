import React, { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log(' I call again :( ');

    return (
        <small> { value } </small>
    );
})
