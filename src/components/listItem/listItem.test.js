import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByDataTest } from '../../Utils'
import ListItem from './index'

describe('ListItem component', () => {
    describe('Checking prop-types', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'sample text',
                desc: 'some text'
            }
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
    describe('Renders', () => {
        let component;
        const props = {
            title: 'sample text',
            desc: 'some text'
        };
        beforeEach(() => {
            component = shallow(<ListItem {...props} />)
        });
        it('Should render without error', () => {
            const listItem = findByDataTest(component, 'listItemComponent');
            // expect(listItem.length).toBe(1);
        })
    })
})
