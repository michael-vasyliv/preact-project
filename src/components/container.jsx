import { h } from 'preact';
import { memo, Suspense } from 'preact/compat';

const Container = memo(({ component }) => (
    <Suspense fallback='loading'>
        {h(component, {})}
    </Suspense>
))

export default Container;
