import React from "react";
import { useVideo } from "../../Context/VideoContext";
import Error from "../Error/Error";

export default function withHandleErrorAndLoading<T>(
  WrapedComponent: React.ComponentType<T>,
  Loader: React.FunctionComponent
) {
  return function Component(props: T) {
    const { error, loading } = useVideo();

    if (loading) return <Loader />;
    if (error) return <Error />;

    return <WrapedComponent {...(props as T)} />;
  };
}
