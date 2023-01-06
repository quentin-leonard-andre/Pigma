import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/components/Button.vue';

describe('buttons', () => {
  test('afficher les styles corrects pour un bouton avec une couleur primaire', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'primary'
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-primary-600", "hover:bg-primary-500"])
    );
  });

  test('afficher les styles corrects pour un bouton avec une couleur succès', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'success'
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-success-600", "hover:bg-success-500"])
    );
  });
  
  test('afficher les styles corrects pour un bouton sans couleur déclarée', () => {
    const wrapper = mount(Button, {
      props: {
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-primary-600", "hover:bg-primary-500"])
    );
  });
});