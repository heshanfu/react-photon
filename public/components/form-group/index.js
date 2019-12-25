import FormGroup from 'packages/form-group/main';
import Checkbox from 'packages/checkbox/main';
import Input from 'packages/input/main';
import RadioGroup from 'packages/radio-group/main';
import Textarea from 'packages/textarea/main';
import Select from 'packages/select/main';

import ReactBlank from '@feizheng/react-blank';

export default () => {
  const options = [
    { value: 'v1', label: 'Option one' },
    { value: 'v2', label: 'Option two' },
    { value: 'v3', label: 'Option three' }
  ];

  return (
    <div className="padded">
      <form>
        <FormGroup>
          <label>Email address:</label>
          <Input name="email" type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <label>Password:</label>
          <Input name="password" type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <label>Description</label>
          <Textarea name="description" placeholder="description" />
        </FormGroup>
        <Select items={options} />
        <ReactBlank value={20} />
        <Checkbox name="checkbox" label=" This is a checkbox" />

        <RadioGroup items={options} name="radios" />
      </form>
    </div>
  );
};
