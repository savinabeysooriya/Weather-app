import { Card, CardContent } from '@material-ui/core';
import React from 'react';

const NotFound = (props: any) => {
    return (
        <div>
            <Card>
                <CardContent>
                    "{props.city}" :  {props.err && props.err.response.data.message}
                </CardContent>

            </Card>
        </div>
    )
}

export default NotFound;
