import CircularProgress from "@mui/material/CircularProgress";
import React, {Suspense} from "react";

export const WithSuspense = (Component: any) => {
    return <Suspense fallback={<CircularProgress/>}>{Component}</Suspense>
}