import { shallow, mount } from 'enzyme';
import { h } from 'preact';
import Container from '../src/components/container';
import { lazy } from 'preact/compat';

const LazyComponent = lazy(() => import('../src/components/lazy-component'));

describe('Container', () => {

    it('renders the LazyComponent', () => {
        const wrapper = mount(<Container component={LazyComponent} />, { suspenseFallback: false });
        console.log(wrapper.debug());
        expect(wrapper.find(LazyComponent).length).toEqual(1);
    });
})
