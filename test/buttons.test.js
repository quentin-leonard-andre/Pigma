import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/components/Basics/Button.vue';

var colors = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
];

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
  test.each(colors)('afficher les styles corrects pour un bouton avec la couleur "%s"', (color) => {
    const wrapper = mount(Button, {
      props: {
        color: color
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-" + color + "-600", "hover:bg-" + color + "-500", "text-white"])
    );
  });

  //Test sur les couleurs de boutons contours
  test.each(colors)('afficher les styles corrects pour un bouton outline avec la couleur "%s"', (color) => {
    const wrapper = mount(Button, {
      props: {
        color: color,
        outline: true
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        "outline",
        "outline-" + color + "-600",
        "outline-2",
        "text-" + color + "-600",
        "hover:bg-" + color + "-600",
        "hover:text-white"
      ])
    );
  });

  //Test sur la propriété disabled sur les boutons standards
  test.each(colors)('afficher les styles corrects pour un bouton avec la couleur "%s"', (color) => {
    const wrapper = mount(Button, {
      props: {
        color: color,
        outline: false,
        disabled: true
      },
    });

    expect(
      wrapper.attributes().disabled
    ).toBeDefined();
  });

  //Test sur la propriété disabled sur les boutons contours
  test.each(colors)('afficher les styles corrects pour un bouton outline avec la couleur "%s"', (color) => {
    const wrapper = mount(Button, {
      props: {
        color: color,
        outline: false,
        disabled: true
      },
    });

    expect(
      wrapper.attributes().disabled
    ).toBeDefined();
  });
});