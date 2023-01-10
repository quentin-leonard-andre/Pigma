import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonsShowView from '../../src/views/ShowViews/ButtonsShowView.vue';

describe('création du composant', () => {
    test('initialisation du composant sans label', () => {
        const wrapper = mount(ButtonsShowView, {
          props: {
          },
        }); 
        
        expect(wrapper.props().label).toBe(null);
        expect(wrapper.find('label:first-child').exists()).toBe(false);
    });

    test('initialisation du composant avec un label', () => {
        const wrapper = mount(ButtonsShowView, {
          props: {
            label: "Label de test"
          },
        }); 
        
        expect(wrapper.props().label).toBe("Label de test");
        expect(wrapper.find('label:first-child').exists()).toBe(true);
        expect(wrapper.find('label:first-child').text()).toBe("Label de test");
    });
});