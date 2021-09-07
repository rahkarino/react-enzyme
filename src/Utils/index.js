import checkPropTypes from 'check-prop-types'

export const findByDataTest = (component, attr) => {
    const element = component.find(`[data-test='${attr}']`);
    return element;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps);
    return propsErr;
}