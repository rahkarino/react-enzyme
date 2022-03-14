import React from 'react'
import { checkProps, findByDataTest } from '../../Utils'
import Button from './index'
import { shallow } from 'enzyme'

describe('Shared button component', () => {
    describe('Checking prop-types', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
    describe('Renders', () => {
        let component;
        const props = {
            buttonText: 'Button Text',
            emitEvent: () => {

            }
        };
        beforeEach(() => {
            component = shallow(<Button {...props} />)
        });
        it('Should render a button', () => {
            const button = findByDataTest(component, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    })
})