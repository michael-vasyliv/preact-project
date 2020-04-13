import { h } from 'preact';
import { memo } from 'preact/compat';

const LazyComponent = memo(() => (
    <div>
        lazy component
    </div>
))

export default LazyComponent;
