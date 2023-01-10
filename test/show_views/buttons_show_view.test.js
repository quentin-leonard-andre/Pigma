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

    test('initialisation du composant sans tableau de boutons', () => {
      const wrapper = mount(ButtonsShowView, {
        props: {
        },
      }); 
      
      expect(wrapper.props().buttons).toStrictEqual([]);
      expect(wrapper.find('button[show-button]').exists()).toBe(false);
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

    test('initialisation du composant avec un tableau de boutons composé d\'un bouton vide', () => {
      const wrapper = mount(ButtonsShowView, {
        props: {
          buttons: [
            {}
          ]
        },
      }); 
      
      expect(wrapper.findAll('button[show-button]').length).toBe(1);
    });

    test('initialisation du composant avec un tableau de boutons composé de trois boutons vides', () => {
      const wrapper = mount(ButtonsShowView, {
        props: {
          buttons: [
            {}, {}, {}
          ]
        },
      }); 
      
      expect(wrapper.findAll('button[show-button]').length).toBe(3);
    });
});