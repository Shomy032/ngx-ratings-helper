import { Meta, Story } from '@storybook/angular';
import { InputComponent, StarComponent } from 'ratings-helper';


export default {

  title: 'RatingInputComponent title',
  component: StarComponent,
} as Meta;

// export const Primary: Story = () => ({
//   props: {
//     label: 'RatingInputComponent label',
//   },
// });

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
    props:args,
  });
  
  export const FirstStory = Template.bind({});
  FirstStory.args= {
    value: 4,
    color: "yellow",
    disabled: 'false',
    min: 0,
    max: 0,
    size: 20,
  };