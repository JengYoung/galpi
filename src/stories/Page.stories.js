import { QInput, QLayout, QPage, QPageContainer, QSelect } from 'quasar';

export default {
  title: 'Quasar',
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QLayout, QPageContainer, QPage, QSelect, QInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: `
    <q-layout>
      <q-page-container>
        <q-page class="full-height full-width justify-center items-center q-pa-xl">
          <div class="col-auto">
            <q-input v-model="name" label="Full name" />
            <q-select v-model="role" :options="options" label="User Role" />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  `,
});

export const Example = Template.bind({});
Example.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
};
