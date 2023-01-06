import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/components/Basics/Button.vue';

describe('fonctionnement général des boutons', () => {
  test('initialisation du composant', () => {

  });
});

describe('styles des boutons', () => {
  test('afficher les styles corrects pour un bouton sans couleur déclarée', () => {
    const wrapper = mount(Button, {
      props: {
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-primary-600", "hover:bg-primary-500"])
    );
  });

  //Test sur les couleurs
  test.each([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
  ])('afficher les styles corrects pour un bouton avec la couleur "%s"', (color) => {
    const wrapper = mount(Button, {
      props: {
        color: color
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-" + color + "-600", "hover:bg-" + color + "-500"])
    );
  })
});