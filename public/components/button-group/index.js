import Button from 'packages/button/main';
import ButtonGroup from 'packages/button-group/main';
import ReactBlank from '@feizheng/react-blank';

export default () => {
  return (
    <div className="padded">
      <ButtonGroup>
        <Button size="mini">Default</Button>
        <Button size="mini" theme="primary">
          Primary
        </Button>
        <Button size="mini" theme="positive">
          Positive
        </Button>
      </ButtonGroup>
    </div>
  );
};
